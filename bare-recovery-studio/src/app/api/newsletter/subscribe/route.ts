import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
})

// ── Store subscriber in Google Sheets (optional — needs GOOGLE_SHEETS_* env vars)
async function storeInGoogleSheets(email: string, source: string) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY
  if (!spreadsheetId || !apiKey) return // Skip if not configured

  try {
    // Append to sheet via Google Sheets API
    const range = 'Subscribers!A:C'
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW&key=${apiKey}`
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        values: [[email, source, new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })]],
      }),
    })
  } catch (e) {
    console.error('Google Sheets store failed (non-critical):', e)
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // 1. Send branded thank-you email to subscriber
    await transporter.sendMail({
      from: `"Bare Recovery Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '🔥 Welcome to Bare Recovery — You\'re In!',
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Welcome to Bare Recovery</title></head>
<body style="margin:0;padding:0;background:#0f0e0e;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
<div style="max-width:580px;margin:0 auto;padding:0 0 40px;">

  <!-- Hero amber bar -->
  <div style="background:linear-gradient(135deg,#92400e,#d97706,#F59E0B,#FCD34D);padding:24px 32px;">
    <p style="font-size:10px;font-weight:800;letter-spacing:0.28em;text-transform:uppercase;color:rgba(17,16,16,0.60);margin:0 0 4px;">Bare Recovery Studio</p>
    <p style="font-size:26px;font-weight:800;letter-spacing:-0.03em;color:#111010;margin:0 0 4px;line-height:1.1;">🔥 50% Off. You're In.</p>
    <p style="font-size:13px;color:rgba(17,16,16,0.65);margin:0;">Founding rates end August 31, 2026</p>
  </div>

  <!-- Body -->
  <div style="padding:36px 32px 0;background:#0f0e0e;">
    <h1 style="font-size:26px;font-weight:300;letter-spacing:-0.03em;color:#f5f0eb;margin:0 0 14px;line-height:1.2;">
      Welcome to Recovery Intelligence.
    </h1>
    <p style="font-size:14px;color:rgba(245,240,235,0.55);line-height:1.8;margin:0 0 28px;">
      You've just joined Hyderabad's first dedicated recovery community. 
      Every week, you'll get science-backed protocols, training insights, 
      and studio updates — straight from Abhinav at Bare Recovery.
    </p>

    <!-- What you get -->
    <div style="border:1px solid rgba(245,158,11,0.22);border-radius:16px;padding:22px;margin-bottom:28px;background:rgba(245,158,11,0.04);">
      <p style="font-size:10px;font-weight:800;letter-spacing:0.24em;text-transform:uppercase;color:#FBBF24;margin:0 0 16px;">What's Coming Your Way</p>
      ${[
        '📬 Weekly science-backed recovery protocols',
        '🧊 Cold plunge, sauna &amp; red light best practices',
        '🔥 Exclusive member offers &amp; early access',
        '📖 First access to every new article we publish',
        '🏆 ICN athlete updates &amp; performance tips',
      ].map(item => `
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
        <span style="font-size:14px;flex-shrink:0;">${item.split(' ')[0]}</span>
        <span style="font-size:13px;color:rgba(245,240,235,0.60);line-height:1.5;">${item.split(' ').slice(1).join(' ')}</span>
      </div>`).join('')}
    </div>

    <!-- Sale callout -->
    <div style="background:linear-gradient(135deg,rgba(120,53,15,0.50),rgba(245,158,11,0.12));border:1px solid rgba(245,158,11,0.28);border-radius:16px;padding:20px 22px;margin-bottom:28px;">
      <p style="font-size:10px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:#FBBF24;margin:0 0 8px;">Don't Miss the Founding Rate</p>
      <p style="font-size:13px;color:rgba(245,240,235,0.60);line-height:1.6;margin:0 0 16px;">
        Every session is <strong style="color:#FBBF24;">50% off</strong> until August 31. 
        Cold Plunge from ₹1,199 · Full Circuit ₹2,999 · Red Light ₹799.
        After August, these rates reset permanently.
      </p>
      <a href="https://wa.me/917670861496?text=Hi!%20I%20subscribed%20to%20the%20newsletter%20and%20want%20to%20book%20at%20the%2050%25%20founding%20rate."
        style="display:inline-block;background:linear-gradient(135deg,#F59E0B,#FBBF24);color:#111010;padding:13px 28px;border-radius:9999px;font-size:12px;font-weight:800;text-decoration:none;letter-spacing:0.06em;">
        🔥 Book at 50% Off →
      </a>
    </div>

    <!-- Studio info -->
    <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:22px;margin-bottom:22px;">
      <p style="font-size:12px;color:rgba(245,240,235,0.40);line-height:1.7;margin:0;">
        📍 Bare Recovery Studio, Kompally, Secunderabad<br>
        📱 +91 7670 861 496 &nbsp;·&nbsp; Open daily 10AM–10PM<br>
        📸 <a href="https://instagram.com/bare.recovery" style="color:#FBBF24;text-decoration:none;">@bare.recovery</a> &nbsp;·&nbsp;
             <a href="https://instagram.com/abhinav._lifts" style="color:#FBBF24;text-decoration:none;">@abhinav._lifts</a>
      </p>
    </div>

    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.05);margin-bottom:18px;">
    <p style="font-size:11px;color:rgba(245,240,235,0.22);line-height:1.6;margin:0;">
      You subscribed via barerecovery.in${source ? ` (${source})` : ''}.<br>
      Reply to this email to unsubscribe at any time. No spam, ever.
    </p>
  </div>
</div>
</body>
</html>`,
    })

    // 2. Notify studio + log subscriber
    await transporter.sendMail({
      from: `"Bare Recovery Newsletter" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER!,
      subject: `📬 New Subscriber: ${email}`,
      html: `
<div style="font-family:sans-serif;padding:20px;background:#f9f9f9;border-radius:8px;">
  <h2 style="color:#111;margin:0 0 12px;">📬 New Newsletter Subscriber</h2>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Source:</strong> ${source || 'website'}</p>
  <p><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
  <hr style="margin:16px 0;border:1px solid #e0e0e0;">
  <p style="font-size:12px;color:#666;">
    <strong>Action needed:</strong> Add this email to your broadcast list for future article notifications.<br>
    To send a new article to all subscribers, call: <code>POST /api/newsletter/broadcast</code> with your admin token.
  </p>
</div>`,
    })

    // 3. Store in Google Sheets (if configured)
    await storeInGoogleSheets(email, source || 'website')

    return NextResponse.json({ success: true, message: 'Subscribed! Check your inbox for a welcome email.' })
  } catch (err) {
    console.error('Newsletter subscribe error:', err)
    return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 })
  }
}
