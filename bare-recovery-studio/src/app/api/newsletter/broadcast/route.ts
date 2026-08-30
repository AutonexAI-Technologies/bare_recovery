import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'
import {
  safeCompare,
  sanitizeHtml,
  isJsonContentType,
  isSafeHttpsUrl,
  getClientIp,
  checkRateLimit,
} from '@/lib/security'

/**
 * POST /api/newsletter/broadcast
 *
 * Sends a new article announcement email to all subscribers.
 * Protected by: constant-time token auth, rate limiting, Content-Type guard,
 * HTML-escaped user inputs, HTTPS-only image URL validation.
 *
 * Body: {
 *   token: string        // Must match NEWSLETTER_ADMIN_TOKEN env var
 *   articleSlug: string  // e.g. "cold-plunge-science-2025"
 *   articleTitle: string
 *   articleExcerpt: string
 *   articleImage?: string // Full HTTPS URL to article cover image
 *   articleReadTime?: string // e.g. "8 min read"
 * }
 */

// Method guards
function methodNotAllowed() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { Allow: 'POST', 'X-Content-Type-Options': 'nosniff' } }
  )
}
export async function GET()    { return methodNotAllowed() }
export async function PUT()    { return methodNotAllowed() }
export async function DELETE() { return methodNotAllowed() }
export async function PATCH()  { return methodNotAllowed() }

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
})

function getSubscribers(): string[] {
  try {
    const filePath = path.join(process.cwd(), 'data', 'newsletter-subscribers.json')
    if (!fs.existsSync(filePath)) return []
    const raw = fs.readFileSync(filePath, 'utf-8')
    const parsed = JSON.parse(raw)
    // Handle both array-of-strings and array-of-objects formats
    if (Array.isArray(parsed)) {
      return parsed
        .map((item: unknown) =>
          typeof item === 'string' ? item : (item as { email?: string }).email ?? ''
        )
        .filter(Boolean)
    }
    return []
  } catch { return [] }
}

export async function POST(req: NextRequest) {
  // ── Guard: Content-Type ──────────────────────────────────────────────────
  if (!isJsonContentType(req)) {
    return NextResponse.json(
      { error: 'Content-Type must be application/json' },
      { status: 415, headers: { 'X-Content-Type-Options': 'nosniff' } }
    )
  }

  // ── Rate limit broadcast endpoint (max 5 per IP per hour) ───────────────
  // Extra protection: even with the correct token, hammering is blocked
  const ip = getClientIp(req)
  const rl = checkRateLimit(`${ip}:broadcast`, 5, 60 * 60 * 1000)
  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Rate limit exceeded.' },
      { status: 429, headers: { 'Retry-After': String(rl.retryAfterSec), 'X-Content-Type-Options': 'nosniff' } }
    )
  }

  try {
    // ── Parse body ───────────────────────────────────────────────────────────
    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400, headers: { 'X-Content-Type-Options': 'nosniff' } }
      )
    }

    const { token, articleSlug, articleTitle, articleExcerpt, articleImage, articleReadTime } =
      body as Record<string, unknown>

    // ── Constant-time token comparison (prevents timing attacks) ────────────
    const adminToken = process.env.NEWSLETTER_ADMIN_TOKEN ?? ''
    if (!token || typeof token !== 'string' || adminToken.length === 0 || !safeCompare(token, adminToken)) {
      // Uniform delay to prevent timing oracle even at high level
      await new Promise(r => setTimeout(r, 200))
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401, headers: { 'X-Content-Type-Options': 'nosniff' } }
      )
    }

    // ── Required field validation ────────────────────────────────────────────
    if (!articleSlug || typeof articleSlug !== 'string' || !articleTitle || typeof articleTitle !== 'string') {
      return NextResponse.json(
        { error: 'articleSlug and articleTitle are required' },
        { status: 400, headers: { 'X-Content-Type-Options': 'nosniff' } }
      )
    }

    // ── Field length limits ──────────────────────────────────────────────────
    if (
      String(articleSlug).length > 200 ||
      String(articleTitle).length > 300 ||
      (articleExcerpt && String(articleExcerpt).length > 1000) ||
      (articleReadTime && String(articleReadTime).length > 30)
    ) {
      return NextResponse.json(
        { error: 'One or more fields exceed the maximum allowed length.' },
        { status: 400, headers: { 'X-Content-Type-Options': 'nosniff' } }
      )
    }

    // ── Validate image URL: must be HTTPS (blocks javascript:, data:, etc.) ─
    if (articleImage !== undefined && articleImage !== null && articleImage !== '') {
      if (!isSafeHttpsUrl(articleImage)) {
        return NextResponse.json(
          { error: 'articleImage must be a valid HTTPS URL.' },
          { status: 400, headers: { 'X-Content-Type-Options': 'nosniff' } }
        )
      }
    }

    // ── HTML-escape all user-controlled fields before template injection ─────
    const safeSlug     = sanitizeHtml(articleSlug)
    const safeTitle    = sanitizeHtml(articleTitle)
    const safeExcerpt  = articleExcerpt ? sanitizeHtml(articleExcerpt)  : ''
    const safeReadTime = articleReadTime ? sanitizeHtml(articleReadTime) : ''
    // Image URL: validated as HTTPS above — safe to use as src attribute
    const safeImage    = (articleImage && isSafeHttpsUrl(articleImage)) ? String(articleImage) : ''

    const subscribers = getSubscribers()
    if (subscribers.length === 0) {
      return NextResponse.json(
        { message: 'No subscribers found. Add emails to /data/newsletter-subscribers.json', sent: 0 },
        { headers: { 'X-Content-Type-Options': 'nosniff' } }
      )
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://barerecovery.studio'
    const articleUrl = `${siteUrl}/blog/${safeSlug}`
    const waLink = `https://wa.me/918096407555?text=${encodeURIComponent('Hi! I read your article and want to book a session.')}`

    let sent = 0
    const errors: string[] = []

    // Send in batches of 10 to respect Gmail rate limits
    const chunks: string[][] = []
    for (let i = 0; i < subscribers.length; i += 10) {
      chunks.push(subscribers.slice(i, i + 10))
    }

    for (const chunk of chunks) {
      await Promise.allSettled(chunk.map(async (email) => {
        try {
          await transporter.sendMail({
            from: `"Bare Recovery Studio" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `📖 New Article: ${safeTitle}`,
            headers: {
              'List-Unsubscribe': `<mailto:${process.env.SMTP_USER}?subject=unsubscribe>`,
              'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
              'Precedence': 'bulk',
            },
            html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f0e0e;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
<div style="max-width:580px;margin:0 auto;padding:0 0 40px;">

  <!-- Top bar -->
  <div style="background:linear-gradient(135deg,#92400e,#d97706,#F59E0B);padding:14px 32px;">
    <p style="font-size:9px;font-weight:800;letter-spacing:0.28em;text-transform:uppercase;color:rgba(17,16,16,0.60);margin:0 0 2px;">Bare Recovery Studio</p>
    <p style="font-size:13px;font-weight:800;color:#111010;margin:0;">New Article Published</p>
  </div>

  <!-- Article image (HTTPS-validated URL only) -->
  ${safeImage ? `<img src="${safeImage}" alt="${safeTitle}" style="width:100%;height:240px;object-fit:cover;display:block;">` : ''}

  <!-- Content -->
  <div style="padding:32px;background:#0f0e0e;">
    <p style="font-size:10px;font-weight:800;letter-spacing:0.24em;text-transform:uppercase;color:rgba(245,158,11,0.60);margin:0 0 10px;">
      Recovery Science${safeReadTime ? ` · ${safeReadTime}` : ''}
    </p>
    <h1 style="font-size:24px;font-weight:300;letter-spacing:-0.03em;color:#f5f0eb;margin:0 0 14px;line-height:1.25;">${safeTitle}</h1>
    ${safeExcerpt ? `<p style="font-size:14px;color:rgba(245,240,235,0.50);line-height:1.75;margin:0 0 24px;">${safeExcerpt}</p>` : ''}

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
          errors.push(`${email}: ${(e as Error).message}`)
        }
      }))
      // Small delay between batches to avoid Gmail rate limits
      await new Promise(r => setTimeout(r, 500))
    }

    return NextResponse.json(
      {
        success: true,
        sent,
        total: subscribers.length,
        errors: errors.length > 0 ? errors : undefined,
        message: `Sent to ${sent}/${subscribers.length} subscribers`,
      },
      { headers: { 'X-Content-Type-Options': 'nosniff' } }
    )
  } catch (err) {
    console.error('[broadcast] Error:', err)
    return NextResponse.json(
      { error: 'Broadcast failed' },
      { status: 500, headers: { 'X-Content-Type-Options': 'nosniff' } }
    )
  }
}
