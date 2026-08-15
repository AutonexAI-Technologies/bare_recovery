import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// ── Save email to JSON file ──────────────────────────────────────────────────
function saveSubscriber(email: string, source: string) {
  try {
    // Try project data dir first (works in local dev and Vercel Build)
    const projectPath = path.join(process.cwd(), 'data', 'newsletter-subscribers.json')
    let list: { email: string; source: string; subscribedAt: string }[] = []

    if (fs.existsSync(projectPath)) {
      const raw = fs.readFileSync(projectPath, 'utf-8')
      list = JSON.parse(raw)
    }

    // Avoid duplicates
    if (list.some(s => s.email === email)) return

    list.push({ email, source, subscribedAt: new Date().toISOString() })
    fs.writeFileSync(projectPath, JSON.stringify(list, null, 2))
    console.log(`[newsletter] Saved subscriber: ${email} → data/newsletter-subscribers.json`)
  } catch (err) {
    // On Vercel, filesystem is read-only — not a critical failure, studio gets email notification
    console.warn('[newsletter] Could not write to JSON file (expected on Vercel):', (err as Error).message)
  }
}

// ── Subscriber welcome email HTML (personal tone = avoids spam) ─────────────
function buildWelcomeEmail(email: string, source: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Welcome to Bare Recovery</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.6;color:#1a1a1a;">
<div style="max-width:520px;margin:0 auto;padding:40px 24px;">

  <!-- Personal header — looks like a real email, not a newsletter -->
  <div style="margin-bottom:28px;padding-bottom:20px;border-bottom:2px solid #F59E0B;">
    <p style="font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#F59E0B;margin:0 0 4px;">Bare Recovery Studio</p>
    <p style="font-size:12px;color:#888;margin:0;">Kompally · Secunderabad · Hyderabad</p>
  </div>

  <!-- Personal greeting -->
  <p style="font-size:16px;color:#1a1a1a;margin:0 0 16px;">Hey,</p>

  <p style="color:#333;margin:0 0 16px;">
    Thanks for subscribing to <strong>Bare Recovery</strong> — I'm Abhinav, the founder.
    Really glad to have you here.
  </p>

  <p style="color:#333;margin:0 0 16px;">
    You'll be the first to get new articles, recovery protocols, and studio updates
    straight to your inbox — no spam, just genuine content I write myself.
  </p>

  <!-- What's coming -->
  <div style="background:#f9f9f9;border-left:3px solid #F59E0B;padding:16px 18px;margin:20px 0;border-radius:0 8px 8px 0;">
    <p style="font-weight:700;color:#1a1a1a;margin:0 0 10px;">What you'll receive:</p>
    <p style="color:#555;margin:0;line-height:1.75;">
      ✓ Science-backed cold plunge &amp; sauna protocols<br>
      ✓ Red light therapy &amp; compression guides<br>
      ✓ New articles as soon as they're published<br>
      ✓ Studio updates &amp; member-only offers
    </p>
  </div>

  <!-- Sale mention — casual, not promotional -->
  <p style="color:#333;margin:0 0 16px;">
    One thing — we're currently running our <strong>founding member offer</strong> where
    every session is <strong style="color:#d97706;">50% off</strong> until August 31, 2026.
    Cold Plunge from ₹1,199 · Full Circuit ₹2,999 · Red Light ₹799.
  </p>

  <p style="color:#333;margin:0 0 24px;">
    If you'd like to book, just
    <a href="https://wa.me/917670861496?text=Hi%21%20I%20subscribed%20and%20want%20to%20book%20at%20the%20founding%20rate."
       style="color:#d97706;font-weight:600;">message us on WhatsApp</a>
    and we'll set it up for you.
  </p>

  <!-- CTA button — simple, not flashy -->
  <div style="margin:24px 0;">
    <a href="https://wa.me/917670861496?text=Hi%21%20I%20subscribed%20and%20want%20to%20book%20at%20the%20founding%20rate."
       style="display:inline-block;background:#1a1a1a;color:#F59E0B;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;">
      Book a Session →
    </a>
  </div>

  <!-- Personal sign-off -->
  <p style="color:#333;margin:24px 0 8px;">Talk soon,</p>
  <p style="color:#1a1a1a;font-weight:700;margin:0 0 4px;">Abhinav</p>
  <p style="color:#888;font-size:13px;margin:0;">Bare Recovery Studio, Kompally</p>
  <p style="color:#888;font-size:13px;margin:2px 0 0;">
    <a href="https://instagram.com/abhinav._lifts" style="color:#d97706;text-decoration:none;">@abhinav._lifts</a>
    &nbsp;·&nbsp;
    <a href="https://instagram.com/bare.recovery" style="color:#d97706;text-decoration:none;">@bare.recovery</a>
  </p>

  <hr style="border:none;border-top:1px solid #eee;margin:28px 0 16px;">
  <p style="font-size:11px;color:#bbb;margin:0;">
    You subscribed at barerecovery.in${source ? ` via ${source}` : ''}.
    Reply with "unsubscribe" to stop — no hard feelings.
  </p>

</div>
</body>
</html>`
}

// ── Studio notification email HTML ───────────────────────────────────────────
function buildStudioNotification(email: string, source: string): string {
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Inter',Helvetica,sans-serif;">
<div style="max-width:500px;margin:32px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#F59E0B,#FBBF24);padding:20px 28px;">
    <p style="font-size:9px;font-weight:800;letter-spacing:0.28em;text-transform:uppercase;color:rgba(17,16,16,0.55);margin:0 0 4px 0;">Bare Recovery Studio</p>
    <h1 style="font-size:20px;font-weight:800;color:#111010;margin:0;">📬 New Newsletter Subscriber</h1>
  </div>

  <!-- Body -->
  <div style="padding:24px 28px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:600;color:#888;width:100px;">Email</td>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:700;color:#111;">${email}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;font-weight:600;color:#888;">Source</td>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#444;">${source || 'website'}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-size:12px;font-weight:600;color:#888;">Time (IST)</td>
        <td style="padding:10px 0;font-size:13px;color:#444;">${now}</td>
      </tr>
    </table>

    <div style="background:#fffbeb;border:1px solid #fcd34d;border-radius:10px;padding:14px 16px;margin-top:20px;">
      <p style="font-size:12px;font-weight:700;color:#92400e;margin:0 0 6px 0;">Action</p>
      <p style="font-size:12px;color:#78350f;line-height:1.6;margin:0;">
        Add <strong>${email}</strong> to <code style="background:#fef3c7;padding:1px 4px;border-radius:4px;font-size:11px;">data/newsletter-subscribers.json</code>
        for future article broadcasts.<br><br>
        To send a new article to all subscribers:<br>
        <code style="font-size:10px;background:#f5f5f5;padding:4px 8px;border-radius:6px;display:inline-block;margin-top:4px;">POST /api/newsletter/broadcast</code>
      </p>
    </div>
  </div>
</div>
</body>
</html>`
}

// ── Main handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, source } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const cleanEmail = String(email).toLowerCase().trim()
    const cleanSource = String(source || 'website')

    // Send both emails in parallel
    const [subscriberResult, studioResult] = await Promise.allSettled([
      transporter.sendMail({
        from: `"Abhinav (Bare Recovery)" <${process.env.SMTP_USER}>`,
        to: cleanEmail,
        subject: 'Your Bare Recovery subscription is confirmed',
        headers: {
          'List-Unsubscribe': `<mailto:${process.env.SMTP_USER}?subject=unsubscribe>`,
          'X-Priority': '1',
          'Importance': 'high',
          'Precedence': 'bulk',
        },
        text: `Hi!\n\nThank you for subscribing to Bare Recovery Studio.\n\nYou'll get science-backed recovery protocols, studio updates, and first access to every article we publish.\n\nWe currently have a 50% Launch Sale on all sessions — Cold Plunge from Rs.1,199, Full Circuit Rs.2,999, Red Light Rs.799. Ends August 31, 2026.\n\nBook on WhatsApp: https://wa.me/917670861496\n\nBare Recovery Studio\nKompally, Secunderabad, Hyderabad\n+91 7670 861 496 | 10AM–10PM daily\nInstagram: @bare.recovery | @abhinav._lifts\n\n---\nYou subscribed at barerecovery.in. Reply "unsubscribe" to stop.`,
        html: buildWelcomeEmail(cleanEmail, cleanSource),
      }),
      transporter.sendMail({
        from: `"Bare Recovery Newsletter" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER!,
        replyTo: cleanEmail,
        subject: `📬 New Subscriber: ${cleanEmail}`,
        html: buildStudioNotification(cleanEmail, cleanSource),
      }),
    ])

    // Log results
    if (subscriberResult.status === 'rejected') {
      console.error('[newsletter] Welcome email failed:', subscriberResult.reason)
    }
    if (studioResult.status === 'rejected') {
      console.error('[newsletter] Studio notification failed:', studioResult.reason)
    }

    // Save to JSON (works locally; gracefully skips on Vercel read-only FS)
    saveSubscriber(cleanEmail, cleanSource)

    // Return success if at least the welcome email sent
    if (subscriberResult.status === 'fulfilled') {
      return NextResponse.json({
        success: true,
        message: 'Subscribed! A welcome email is on its way to your inbox.',
      })
    }

    return NextResponse.json({ error: 'Could not send confirmation email. Please try again.' }, { status: 500 })
  } catch (err) {
    console.error('[newsletter] Unexpected error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
