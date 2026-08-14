import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

/**
 * POST /api/newsletter/broadcast
 * 
 * Sends a new article announcement email to all subscribers.
 * 
 * Usage: Call this once when you publish a new blog post.
 * 
 * Body: {
 *   token: string        // Must match NEWSLETTER_ADMIN_TOKEN env var
 *   articleSlug: string  // e.g. "cold-plunge-science-2025"
 *   articleTitle: string
 *   articleExcerpt: string
 *   articleImage?: string // Full URL to article cover image
 *   articleReadTime?: string // e.g. "8 min read"
 * }
 * 
 * Subscriber list: Add emails manually to /data/newsletter-subscribers.json
 * Format: ["email1@example.com", "email2@example.com"]
 */

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
})

function getSubscribers(): string[] {
  try {
    const filePath = path.join(process.cwd(), 'data', 'newsletter-subscribers.json')
    if (!fs.existsSync(filePath)) return []
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch { return [] }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { token, articleSlug, articleTitle, articleExcerpt, articleImage, articleReadTime } = body

    // Auth check
    if (!token || token !== process.env.NEWSLETTER_ADMIN_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!articleSlug || !articleTitle) {
      return NextResponse.json({ error: 'articleSlug and articleTitle are required' }, { status: 400 })
    }

    const subscribers = getSubscribers()
    if (subscribers.length === 0) {
      return NextResponse.json({ message: 'No subscribers found. Add emails to /data/newsletter-subscribers.json', sent: 0 })
    }

    const articleUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://barerecovery.in'}/blog/${articleSlug}`
    const waLink = `https://wa.me/917670861496?text=${encodeURIComponent('Hi! I read your article and want to book a session.')}`

    let sent = 0
    const errors: string[] = []

    // Send to each subscriber (batch of 10 at a time to avoid rate limits)
    const chunks = []
    for (let i = 0; i < subscribers.length; i += 10) chunks.push(subscribers.slice(i, i + 10))

    for (const chunk of chunks) {
      await Promise.allSettled(chunk.map(async (email) => {
        try {
          await transporter.sendMail({
            from: `"Bare Recovery Studio" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `📖 New Article: ${articleTitle}`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f0e0e;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
<div style="max-width:580px;margin:0 auto;padding:0 0 40px;">

  <!-- Top bar -->
  <div style="background:linear-gradient(135deg,#92400e,#d97706,#F59E0B);padding:14px 32px;display:flex;align-items:center;justify-content:space-between;">
    <div>
      <p style="font-size:9px;font-weight:800;letter-spacing:0.28em;text-transform:uppercase;color:rgba(17,16,16,0.60);margin:0 0 2px;">Bare Recovery Studio</p>
      <p style="font-size:13px;font-weight:800;color:#111010;margin:0;">New Article Published</p>
    </div>
    <span style="font-size:20px;">📖</span>
  </div>

  <!-- Article image -->
  ${articleImage ? `<img src="${articleImage}" alt="${articleTitle}" style="width:100%;height:240px;object-fit:cover;display:block;">` : ''}

  <!-- Content -->
  <div style="padding:32px;background:#0f0e0e;">
    <p style="font-size:10px;font-weight:800;letter-spacing:0.24em;text-transform:uppercase;color:rgba(245,158,11,0.60);margin:0 0 10px;">
      Recovery Science${articleReadTime ? ` · ${articleReadTime}` : ''}
    </p>
    <h1 style="font-size:24px;font-weight:300;letter-spacing:-0.03em;color:#f5f0eb;margin:0 0 14px;line-height:1.25;">${articleTitle}</h1>
    ${articleExcerpt ? `<p style="font-size:14px;color:rgba(245,240,235,0.50);line-height:1.75;margin:0 0 24px;">${articleExcerpt}</p>` : ''}

    <a href="${articleUrl}" style="display:inline-block;background:linear-gradient(135deg,#F59E0B,#FBBF24);color:#111010;padding:13px 28px;border-radius:9999px;font-size:13px;font-weight:800;text-decoration:none;letter-spacing:0.04em;margin-bottom:28px;">
      Read Full Article →
    </a>

    <!-- Sale reminder -->
    <div style="border:1px solid rgba(245,158,11,0.22);border-radius:14px;padding:18px 20px;margin-bottom:24px;background:rgba(245,158,11,0.04);">
      <p style="font-size:10px;font-weight:800;letter-spacing:0.20em;text-transform:uppercase;color:#FBBF24;margin:0 0 6px;">🔥 Founding Rate Active</p>
      <p style="font-size:12px;color:rgba(245,240,235,0.55);line-height:1.6;margin:0 0 12px;">
        Experience what you just read — every session 50% off until Aug 31.
        Cold Plunge ₹1,199 · Full Circuit ₹2,999 · Red Light ₹799.
      </p>
      <a href="${waLink}" style="display:inline-block;background:#111010;color:#FBBF24;padding:10px 20px;border-radius:9999px;font-size:11px;font-weight:700;text-decoration:none;">Book at 50% Off →</a>
    </div>

    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.05);margin-bottom:16px;">
    <p style="font-size:11px;color:rgba(245,240,235,0.22);line-height:1.6;margin:0;">
      You're receiving this because you subscribed at barerecovery.in.<br>
      Reply "unsubscribe" to stop receiving emails.
    </p>
  </div>
</div>
</body>
</html>`,
          })
          sent++
        } catch (e) {
          errors.push(`${email}: ${e}`)
        }
      }))
      // Small delay between batches
      await new Promise(r => setTimeout(r, 500))
    }

    return NextResponse.json({
      success: true,
      sent,
      total: subscribers.length,
      errors: errors.length > 0 ? errors : undefined,
      message: `Sent to ${sent}/${subscribers.length} subscribers`,
    })
  } catch (err) {
    console.error('Broadcast error:', err)
    return NextResponse.json({ error: 'Broadcast failed' }, { status: 500 })
  }
}
