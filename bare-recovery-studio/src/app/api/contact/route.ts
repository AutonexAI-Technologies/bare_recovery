import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import {
  sanitizeHtml,
  sanitizeText,
  getClientIp,
  checkRateLimit,
  isJsonContentType,
  validateEmail,
  ALLOWED_SERVICES,
} from '@/lib/security'

// Rejects any method other than POST
function methodNotAllowed() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    {
      status: 405,
      headers: {
        Allow: 'POST',
        'X-Content-Type-Options': 'nosniff',
      },
    }
  )
}

export async function GET()    { return methodNotAllowed() }
export async function PUT()    { return methodNotAllowed() }
export async function DELETE() { return methodNotAllowed() }
export async function PATCH()  { return methodNotAllowed() }

export async function POST(req: NextRequest) {
  // ── Guard: Content-Type must be application/json ─────────────────────────
  if (!isJsonContentType(req)) {
    return NextResponse.json(
      { error: 'Content-Type must be application/json' },
      { status: 415, headers: { 'X-Content-Type-Options': 'nosniff' } }
    )
  }

  // ── Rate limiting (5 attempts per IP per 10 minutes) ─────────────────────
  const ip = getClientIp(req)
  const rl = checkRateLimit(`${ip}:contact`, 5, 10 * 60 * 1000)

  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a few minutes or reach us on WhatsApp.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(rl.retryAfterSec),
          'X-Content-Type-Options': 'nosniff',
        },
      }
    )
  }

  try {
    // ── Parse body ─────────────────────────────────────────────────────────
    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400, headers: { 'X-Content-Type-Options': 'nosniff' } }
      )
    }

    const { name, email, phone, service, message, website } = body as Record<string, unknown>

    // ── Honeypot: bots fill the hidden "website" field, humans don't ────────
    if (typeof website === 'string' && website.trim() !== '') {
      // Silently accept to not tip off bots
      return NextResponse.json({ success: true })
    }

    // ── Required field presence ────────────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400, headers: { 'X-Content-Type-Options': 'nosniff' } }
      )
    }

    // ── Field length limits (prevent oversized payloads) ──────────────────
    if (
      String(name).length > 100 ||
      String(email).length > 254 ||
      (phone && String(phone).length > 20) ||
      (service && String(service).length > 100) ||
      String(message).length > 3000
    ) {
      return NextResponse.json(
        { error: 'One or more fields exceed the maximum allowed length.' },
        { status: 400, headers: { 'X-Content-Type-Options': 'nosniff' } }
      )
    }

    // ── 3-layer email validation (format + disposable blocklist + MX DNS) ──
    const emailCheck = await validateEmail(email)
    if (!emailCheck.valid) {
      return NextResponse.json(
        { error: emailCheck.error },
        { status: 400, headers: { 'X-Content-Type-Options': 'nosniff' } }
      )
    }

    // ── Phone format: digits, spaces, +, -, () only ────────────────────────
    if (phone) {
      const phoneStr = String(phone).trim()
      if (!/^[\d\s\+\-\(\)]{7,20}$/.test(phoneStr)) {
        return NextResponse.json(
          { error: 'Please enter a valid phone number.' },
          { status: 400, headers: { 'X-Content-Type-Options': 'nosniff' } }
        )
      }
    }

    // ── Service allowlist (prevents arbitrary string injection) ───────────
    if (service && !ALLOWED_SERVICES.has(String(service))) {
      return NextResponse.json(
        { error: 'Invalid service selection.' },
        { status: 400, headers: { 'X-Content-Type-Options': 'nosniff' } }
      )
    }

    // ── Sanitise all fields before use in email HTML ───────────────────────
    const cleanName    = sanitizeText(sanitizeHtml(name))
    const cleanEmail   = String(email).trim().toLowerCase()
    const cleanPhone   = phone   ? sanitizeText(sanitizeHtml(phone))   : ''
    const cleanService = service ? sanitizeText(sanitizeHtml(service)) : ''
    const cleanMessage = sanitizeHtml(message)

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true,
    })

    // ── Send email ─────────────────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry - Bare Recovery Studio</title>
</head>
<body style="margin:0;padding:0;background-color:#0D0D0D;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0D0D0D;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#141414;border-radius:20px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a1a 0%,#242424 100%);padding:36px 40px 32px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#888;">BARE RECOVERY STUDIO</p>
                    <h1 style="margin:0;font-size:26px;font-weight:700;color:#F5F5F2;letter-spacing:-0.02em;line-height:1.2;">New Enquiry &#x1F4E9;</h1>
                    <p style="margin:8px 0 0;font-size:13px;color:#777;">Submitted via contact form &middot; ${submittedAt} IST</p>
                  </td>
                  <td align="right" valign="middle" style="padding-left:16px;">
                    <span style="display:inline-block;background:rgba(37,211,102,0.12);color:#25D366;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:6px 14px;border-radius:100px;border:1px solid rgba(37,211,102,0.25);">ACTION REQUIRED</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CONTACT DETAILS -->
          <tr>
            <td style="padding:32px 40px 0;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#555;">Contact Details</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                <tr>
                  <td style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:14px 18px;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#666;">&#x1F464; Name</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#F5F5F2;">${cleanName}</p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                <tr>
                  <td style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:14px 18px;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#666;">&#x2709; Email</p>
                    <p style="margin:0;font-size:16px;font-weight:600;"><a href="mailto:${cleanEmail}" style="color:#c9c6c5;text-decoration:none;">${cleanEmail}</a></p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                <tr>
                  <td width="48%" valign="top" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:14px 18px;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#666;">&#x1F4DE; Phone</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:${cleanPhone ? '#F5F5F2' : '#555'};">${cleanPhone || 'Not provided'}</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" valign="top" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:14px 18px;">
                    <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#666;">&#x1F3F7; Interested In</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:${cleanService ? '#F5F5F2' : '#555'};">${cleanService || 'Not specified'}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- MESSAGE -->
          <tr>
            <td style="padding:24px 40px 0;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#555;">Message</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-left:3px solid #BCA386;border-radius:12px;padding:20px 22px;">
                    <p style="margin:0;font-size:15px;color:#D8D5D2;line-height:1.8;">${cleanMessage.replace(/\n/g, '<br>')}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- REPLY BUTTON -->
          <tr>
            <td style="padding:28px 40px 0;text-align:center;">
              <a href="mailto:${cleanEmail}?subject=Re%3A%20Your%20enquiry%20at%20Bare%20Recovery%20Studio" style="display:inline-block;background:#F5F5F2;color:#0B0B0B;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:100px;letter-spacing:0.02em;">&#x21A9; Reply to ${cleanName}</a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="border-top:1px solid rgba(255,255,255,0.06);padding-bottom:24px;font-size:0;">&nbsp;</td></tr>
                <tr>
                  <td>
                    <p style="margin:0;font-size:12px;color:#555;line-height:1.7;"><strong style="color:#666;">Bare Recovery Studio</strong><br>3rd Floor, Raichandani Orion &middot; NH44, Kompally, Secunderabad<br><a href="https://wa.me/917670861496" style="color:#25D366;text-decoration:none;">WhatsApp: +91 76708 61496</a></p>
                  </td>
                  <td align="right" valign="bottom">
                    <p style="margin:0;font-size:11px;color:#444;">barerecovery.studio</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

    await transporter.sendMail({
      from: `"Bare Recovery Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: cleanEmail,
      subject: `New enquiry from ${cleanName}${cleanService ? ` - ${cleanService}` : ''}`,
      html,
    })

    return NextResponse.json(
      { success: true },
      { headers: { 'X-Content-Type-Options': 'nosniff' } }
    )
  } catch (err) {
    console.error('[contact] Error:', err)
    return NextResponse.json(
      { error: 'Failed to send. Please try WhatsApp instead.' },
      { status: 500, headers: { 'X-Content-Type-Options': 'nosniff' } }
    )
  }
}
