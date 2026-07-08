import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// In-memory sliding window rate limiting (resilient local cache)
const ipCache = new Map<string, { count: number; lastReset: number }>()

const sanitize = (val: string): string => {
  if (typeof val !== 'string') return ''
  return val
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

export async function POST(req: NextRequest) {
  try {
    // ── 1. IP Rate Limiting (Spam prevention) ──
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'anonymous'
    const now = Date.now()
    const windowTime = 10 * 60 * 1000 // 10 minutes
    const limit = 5 // max 5 submissions per window

    const record = ipCache.get(ip)
    if (record) {
      if (now - record.lastReset < windowTime) {
        if (record.count >= limit) {
          return NextResponse.json(
            { error: 'Rate limit exceeded. Please wait a few minutes or WhatsApp us.' },
            { status: 429 }
          )
        }
        record.count += 1
      } else {
        ipCache.set(ip, { count: 1, lastReset: now })
      }
    } else {
      ipCache.set(ip, { count: 1, lastReset: now })
    }

    // ── 2. Parse Body and Sanitization ──
    const body = await req.json()
    const { name, email, phone, service, message, website } = body

    // ── 3. Honeypot Spam Check (Anti-Bot Trap) ──
    if (website && website.trim() !== '') {
      // Return a simulated success response so the spam bot believes it succeeded, preventing retry
      console.log('Spam bot caught in honeypot trap.')
      return NextResponse.json({ success: true, status: 'honeypotted' })
    }

    // ── 4. Parameter Validation ──
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }

    // String size limits (prevents payload exhaustion attacks)
    if (
      name.length > 100 ||
      email.length > 100 ||
      (phone && phone.length > 30) ||
      (service && service.length > 100) ||
      message.length > 3000
    ) {
      return NextResponse.json({ error: 'Payload exceeds size parameters.' }, { status: 400 })
    }

    // Email format regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address format' }, { status: 400 })
    }

    // SMTP Header Injection Prevention (Strip newlines in header fields)
    const cleanName = sanitize(name).replace(/[\r\n]/g, '')
    const cleanEmail = sanitize(email).replace(/[\r\n]/g, '')
    const cleanPhone = phone ? sanitize(phone).replace(/[\r\n]/g, '') : ''
    const cleanService = service ? sanitize(service).replace(/[\r\n]/g, '') : ''
    const cleanMessage = sanitize(message)

    // ── 5. Build Nodemailer SMTP Transporter ──
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER ?? 'barerecovery@gmail.com',
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
    })

    const html = `
      <div style="font-family:'Helvetica Neue',sans-serif;background:#12110F;color:#FFFBF5;padding:40px;border-radius:16px;max-width:600px;margin:0 auto;border:1px solid rgba(188,163,134,0.15)">
        <h2 style="color:#FFFBF5;font-size:24px;font-weight:700;margin-bottom:8px;font-family:'Marcellus',serif">New Contact Form Submission</h2>
        <p style="color:#A19F97;font-size:14px;margin-bottom:32px">Received via barerecovery.studio</p>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#A19F97;font-size:13px;width:140px">Name</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#FFFBF5;font-weight:600">${cleanName}</td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#A19F97;font-size:13px">Email</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#FFFBF5;font-weight:600">${cleanEmail}</td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#A19F97;font-size:13px">Phone</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#FFFBF5;font-weight:600">${cleanPhone || 'Not provided'}</td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#A19F97;font-size:13px">Service</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#FFFBF5;font-weight:600">${cleanService || 'Not specified'}</td></tr>
        </table>
        <div style="margin-top:24px;padding:20px;background:rgba(255,255,255,0.02);border-radius:12px;border:1px solid rgba(255,255,255,0.06)">
          <p style="color:#A19F97;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px">Message</p>
          <p style="color:#FFFBF5;font-size:15px;line-height:1.7;margin:0">${cleanMessage.replace(/\n/g, '<br>')}</p>
        </div>
        <div style="margin-top:32px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.06)">
          <p style="color:#A19F97;font-size:12px">Bare Recovery Studio · Kompally, Secunderabad</p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"Bare Recovery Website" <${process.env.SMTP_USER ?? 'barerecovery@gmail.com'}>`,
      to: 'barerecovery@gmail.com',
      replyTo: cleanEmail,
      subject: `New enquiry from ${cleanName}${cleanService ? ` — ${cleanService}` : ''}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Secure contact form error:', err)
    return NextResponse.json({ error: 'Failed to send. Please try WhatsApp instead.' }, { status: 500 })
  }
}
