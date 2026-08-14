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

// ── Subscriber welcome email HTML ────────────────────────────────────────────
function buildWelcomeEmail(email: string, source: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Welcome to Bare Recovery</title>
</head>
<body style="margin:0;padding:0;background:#0f0e0e;font-family:-apple-system,BlinkMacSystemFont,'Inter',Helvetica,sans-serif;">
<div style="max-width:580px;margin:0 auto;">

  <!-- AMBER HERO BANNER -->
  <div style="background:linear-gradient(135deg,#78350f 0%,#b45309 40%,#d97706 70%,#F59E0B 90%,#FCD34D 100%);padding:28px 32px 24px;">
    <p style="font-size:9px;font-weight:800;letter-spacing:0.30em;text-transform:uppercase;color:rgba(17,16,16,0.55);margin:0 0 6px 0;">Bare Recovery Studio · Kompally, Hyderabad</p>
    <h1 style="font-size:30px;font-weight:800;letter-spacing:-0.03em;color:#111010;margin:0 0 4px 0;line-height:1.1;">🔥 You're In.</h1>
    <p style="font-size:13px;color:rgba(17,16,16,0.65);margin:0;">Welcome to the Bare Recovery community</p>
  </div>

  <!-- BODY -->
  <div style="background:#0f0e0e;padding:36px 32px 0 32px;">

    <h2 style="font-size:24px;font-weight:300;letter-spacing:-0.03em;color:#f5f0eb;margin:0 0 12px 0;line-height:1.25;">
      Welcome to Recovery Intelligence.
    </h2>
    <p style="font-size:14px;color:rgba(245,240,235,0.55);line-height:1.80;margin:0 0 28px 0;">
      You've just joined Hyderabad's first dedicated recovery community.
      Every time we publish new science-backed protocols, training insights,
      or studio updates — you'll be the first to know, straight from Abhinav at Bare Recovery.
    </p>

    <!-- WHAT YOU GET BOX -->
    <div style="border:1px solid rgba(245,158,11,0.25);border-radius:18px;padding:22px 24px;margin-bottom:28px;background:rgba(245,158,11,0.05);">
      <p style="font-size:9px;font-weight:800;letter-spacing:0.28em;text-transform:uppercase;color:#FBBF24;margin:0 0 18px 0;">What's Coming Your Way</p>

      <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;">
        <span style="font-size:16px;flex-shrink:0;">📬</span>
        <span style="font-size:13px;color:rgba(245,240,235,0.60);line-height:1.55;">Weekly science-backed recovery protocols</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;">
        <span style="font-size:16px;flex-shrink:0;">🧊</span>
        <span style="font-size:13px;color:rgba(245,240,235,0.60);line-height:1.55;">Cold plunge, sauna &amp; red light best practices</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;">
        <span style="font-size:16px;flex-shrink:0;">📖</span>
        <span style="font-size:13px;color:rgba(245,240,235,0.60);line-height:1.55;">First access to every new article we publish</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;">
        <span style="font-size:16px;flex-shrink:0;">🔥</span>
        <span style="font-size:13px;color:rgba(245,240,235,0.60);line-height:1.55;">Exclusive member offers &amp; early access deals</span>
      </div>
      <div style="display:flex;align-items:flex-start;gap:12px;">
        <span style="font-size:16px;flex-shrink:0;">🏆</span>
        <span style="font-size:13px;color:rgba(245,240,235,0.60);line-height:1.55;">ICN athlete updates &amp; performance tips</span>
      </div>
    </div>

    <!-- SALE CALLOUT -->
    <div style="background:linear-gradient(135deg,rgba(120,53,15,0.55) 0%,rgba(245,158,11,0.14) 100%);border:1px solid rgba(245,158,11,0.30);border-radius:18px;padding:22px 24px;margin-bottom:32px;">
      <p style="font-size:9px;font-weight:800;letter-spacing:0.24em;text-transform:uppercase;color:#FBBF24;margin:0 0 8px 0;">🔥 Founding Member Rate — Active Now</p>
      <p style="font-size:13px;color:rgba(245,240,235,0.60);line-height:1.70;margin:0 0 18px 0;">
        Every session is <strong style="color:#FBBF24;font-weight:700;">50% off</strong> until August 31, 2026.
        Cold Plunge <strong style="color:#f5f0eb;">₹1,199</strong> ·
        Full Circuit <strong style="color:#f5f0eb;">₹2,999</strong> ·
        Red Light <strong style="color:#f5f0eb;">₹799</strong>.
        When August ends, these rates reset permanently — no exceptions.
      </p>
      <a href="https://wa.me/917670861496?text=Hi%21%20I%20subscribed%20to%20the%20newsletter%20and%20want%20to%20book%20a%20session%20at%20the%2050%25%20founding%20rate."
         style="display:inline-block;background:linear-gradient(135deg,#F59E0B,#FBBF24);color:#111010;padding:14px 30px;border-radius:9999px;font-size:12px;font-weight:800;text-decoration:none;letter-spacing:0.06em;box-shadow:0 4px 18px rgba(245,158,11,0.40);">
        Book at 50% Off →
      </a>
    </div>

    <!-- STUDIO INFO -->
    <div style="border-top:1px solid rgba(255,255,255,0.06);padding:22px 0;margin-bottom:0;">
      <p style="font-size:12px;color:rgba(245,240,235,0.40);line-height:1.80;margin:0;">
        📍 Bare Recovery Studio, Kompally, Secunderabad, Hyderabad<br>
        📱 +91 7670 861 496 &nbsp;·&nbsp; Open daily 10AM–10PM<br>
        📸
        <a href="https://instagram.com/bare.recovery" style="color:#FBBF24;text-decoration:none;">@bare.recovery</a>
        &nbsp;·&nbsp;
        <a href="https://instagram.com/abhinav._lifts" style="color:#FBBF24;text-decoration:none;">@abhinav._lifts</a>
      </p>
    </div>

    <!-- FOOTER -->
    <div style="border-top:1px solid rgba(255,255,255,0.05);padding:18px 0 36px;">
      <p style="font-size:10px;color:rgba(245,240,235,0.20);line-height:1.65;margin:0;">
        You subscribed via barerecovery.in${source ? ` (${source})` : ''}.<br>
        Reply to this email with "unsubscribe" to stop receiving updates. No spam, ever.
      </p>
    </div>

  </div>
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
        from: `"Bare Recovery Studio" <${process.env.SMTP_USER}>`,
        to: cleanEmail,
        subject: "🔥 You're In — Welcome to the Bare Recovery Community",
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
