import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
})

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // 1. Send thank-you to subscriber
    await transporter.sendMail({
      from: `"Bare Recovery Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '🔥 You\'re in — Welcome to the Bare Recovery Community',
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background:#0f0e0e;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
          <div style="max-width:560px;margin:0 auto;padding:40px 24px;">

            <!-- Logo area -->
            <div style="margin-bottom:32px;">
              <p style="font-size:10px;font-weight:800;letter-spacing:0.28em;text-transform:uppercase;color:rgba(245,240,235,0.35);margin:0 0 4px;">Bare Recovery Studio</p>
              <p style="font-size:10px;color:rgba(245,240,235,0.25);margin:0;">Kompally · Secunderabad · Hyderabad</p>
            </div>

            <!-- Sale banner -->
            <div style="background:linear-gradient(135deg,#92400e,#d97706,#F59E0B);border-radius:16px;padding:20px 24px;margin-bottom:28px;">
              <p style="font-size:10px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:rgba(17,16,16,0.65);margin:0 0 4px;">🔥 Launch Sale Active</p>
              <p style="font-size:22px;font-weight:700;letter-spacing:-0.03em;color:#111010;margin:0;">50% Off All Sessions</p>
              <p style="font-size:12px;color:rgba(17,16,16,0.65);margin:4px 0 0;">Founding rates end August 31, 2026</p>
            </div>

            <!-- Main content -->
            <h1 style="font-size:28px;font-weight:300;letter-spacing:-0.03em;color:#f5f0eb;margin:0 0 12px;line-height:1.2;">
              Welcome to Recovery Intelligence.
            </h1>
            <p style="font-size:14px;color:rgba(245,240,235,0.55);line-height:1.75;margin:0 0 24px;">
              You've just joined Hyderabad's first dedicated recovery community. Every week, you'll get science-backed protocols, training insights, and exclusive early access to new content — straight from Abhinav at Bare Recovery Studio.
            </p>

            <!-- What to expect -->
            <div style="border:1px solid rgba(245,158,11,0.20);border-radius:16px;padding:20px 20px;margin-bottom:28px;background:rgba(245,158,11,0.04);">
              <p style="font-size:10px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:#FBBF24;margin:0 0 14px;">What you'll get</p>
              ${['Weekly science-backed recovery protocols', 'Cold plunge, sauna & red light best practices', 'Studio updates & exclusive member offers', 'First access to new blog posts & guides'].map(item => `
              <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
                <span style="color:#FBBF24;font-size:14px;margin-top:1px;">✓</span>
                <span style="font-size:13px;color:rgba(245,240,235,0.65);">${item}</span>
              </div>`).join('')}
            </div>

            <!-- Founding offer CTA -->
            <div style="text-align:center;margin-bottom:32px;">
              <a href="https://wa.me/917670861496?text=Hi!%20I%20subscribed%20to%20the%20newsletter%20and%20want%20to%20book%20at%20the%2050%25%20founding%20rate."
                style="display:inline-block;background:linear-gradient(135deg,#F59E0B,#FBBF24);color:#111010;padding:14px 32px;border-radius:9999px;font-size:13px;font-weight:800;text-decoration:none;letter-spacing:0.04em;">
                🔥 Book at 50% Off →
              </a>
              <p style="font-size:11px;color:rgba(245,240,235,0.30);margin:12px 0 0;">Starting at ₹799 · Private sessions · Kompally</p>
            </div>

            <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:24px 0;">
            <p style="font-size:11px;color:rgba(245,240,235,0.25);line-height:1.6;margin:0;">
              You're receiving this because you subscribed at barerecovery.in${source ? ` (${source})` : ''}.<br>
              Reply to this email to unsubscribe at any time.
            </p>
          </div>
        </body>
        </html>
      `,
    })

    // 2. Notify studio of new subscriber
    await transporter.sendMail({
      from: `"Bare Recovery Newsletter" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER!,
      subject: `📬 New Newsletter Subscriber: ${email}`,
      html: `<p style="font-family:sans-serif;"><strong>New subscriber:</strong> ${email}<br><strong>Source:</strong> ${source || 'blog'}<br><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter subscribe error:', err)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
