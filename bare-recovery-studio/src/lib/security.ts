/**
 * security.ts — Bare Recovery Studio
 *
 * Centralised security utilities for all API routes.
 * - Constant-time token comparison (prevents timing attacks)
 * - HTML sanitisation (prevents email injection / XSS in outbound emails)
 * - In-process rate limiter (IP + path composite key)
 * - 3-layer email validation: format → disposable blocklist → MX DNS check
 */

import { NextRequest } from 'next/server'
import { createHash, timingSafeEqual } from 'crypto'
import dns from 'dns'

// ─────────────────────────────────────────────────────────────────────────────
// Constant-time string comparison (prevents timing-based token enumeration)
// ─────────────────────────────────────────────────────────────────────────────
export function safeCompare(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(createHash('sha256').update(a).digest('hex'))
    const bufB = Buffer.from(createHash('sha256').update(b).digest('hex'))
    return timingSafeEqual(bufA, bufB)
  } catch {
    return false
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// HTML sanitisation — escapes user input before injecting into email HTML
// ─────────────────────────────────────────────────────────────────────────────
export function sanitizeHtml(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// ─────────────────────────────────────────────────────────────────────────────
// Sanitise plain text (strips CRLF injection from email headers)
// ─────────────────────────────────────────────────────────────────────────────
export function sanitizeText(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.trim().replace(/[\r\n]/g, '')
}

// ─────────────────────────────────────────────────────────────────────────────
// IP extraction — handles Vercel / Cloudflare proxy chains
// ─────────────────────────────────────────────────────────────────────────────
export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    // Take the first (real client) IP from the chain
    const first = forwarded.split(',')[0].trim()
    if (first) return first
  }
  return req.headers.get('x-real-ip') || 'unknown'
}

// ─────────────────────────────────────────────────────────────────────────────
// In-process rate limiter
// Composite key = ip:routeId prevents cross-route pollution.
// NOTE: Resets on serverless cold start — adequate for reducing abuse bursts.
// For persistent rate limiting across cold starts, add Upstash Redis.
// ─────────────────────────────────────────────────────────────────────────────
interface RateLimitRecord {
  count: number
  windowStart: number
}

const rlCache = new Map<string, RateLimitRecord>()

// Prune stale entries every 500 entries to prevent unbounded memory growth
function pruneCache(windowMs: number) {
  if (rlCache.size < 500) return
  const cutoff = Date.now() - windowMs
  for (const [key, rec] of rlCache.entries()) {
    if (rec.windowStart < cutoff) rlCache.delete(key)
  }
}

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): { allowed: boolean; remaining: number; retryAfterSec: number } {
  pruneCache(windowMs)
  const now = Date.now()
  const rec = rlCache.get(key)

  if (!rec || now - rec.windowStart >= windowMs) {
    rlCache.set(key, { count: 1, windowStart: now })
    return { allowed: true, remaining: limit - 1, retryAfterSec: 0 }
  }

  rec.count += 1

  if (rec.count > limit) {
    const retryAfterSec = Math.ceil((rec.windowStart + windowMs - now) / 1000)
    return { allowed: false, remaining: 0, retryAfterSec }
  }

  return { allowed: true, remaining: limit - rec.count, retryAfterSec: 0 }
}

// ─────────────────────────────────────────────────────────────────────────────
// Content-Type guard — rejects non-JSON POST bodies
// ─────────────────────────────────────────────────────────────────────────────
export function isJsonContentType(req: NextRequest): boolean {
  const ct = req.headers.get('content-type') || ''
  return ct.includes('application/json')
}

// ─────────────────────────────────────────────────────────────────────────────
// URL validation — allows only safe HTTPS URLs (blocks javascript:, data:, etc.)
// ─────────────────────────────────────────────────────────────────────────────
export function isSafeHttpsUrl(value: unknown): boolean {
  if (typeof value !== 'string') return false
  try {
    const u = new URL(value)
    return u.protocol === 'https:'
  } catch {
    return false
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Disposable / temporary email domain blocklist (150+ providers)
// Reject burner accounts that will never result in real bookings.
// ─────────────────────────────────────────────────────────────────────────────
const DISPOSABLE_DOMAINS = new Set([
  // Mailinator family
  'mailinator.com', 'mailinator2.com', 'mailinator.net', 'mailinator.org',
  // Guerrilla Mail family
  'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org', 'guerrillamail.info',
  'guerrillamail.biz', 'guerrillamail.de', 'spam4.me', 'grr.la', 'guerrillamailblock.com',
  // 10 Minute Mail family
  '10minutemail.com', '10minutemail.net', '10minutemail.org', '10minutemail.co.za',
  '10minutemail.de', '10minutemail.co.uk', '10minutemail.us', '10minutemail.be',
  '10minutemail.info', '10minutemail.cf', '10minutemail.ga', '10minutemail.gq',
  '10minutemail.ml', '10minutemail.tk', 'minutemail.com', '20minutemail.com',
  // Temp Mail
  'tempmail.com', 'temp-mail.com', 'temp-mail.org', 'tempmail.net', 'tempmail.org',
  'temp-mail.io', 'tmpmail.org', 'tmpmail.net', 'tempr.email', 'tempm.com',
  // YopMail
  'yopmail.com', 'yopmail.fr', 'cool.fr.nf', 'jetable.fr.nf', 'nospam.ze.tc',
  'nomail.xl.cx', 'mega.zik.dj', 'speed.1s.fr', 'courriel.fr.nf', 'moncourrier.fr.nf',
  'monemail.fr.nf', 'monmail.fr.nf',
  // Throwaway
  'throwaway.email', 'throwam.com', 'throwam.net', 'spamgourmet.com', 'spamgourmet.net',
  'spamgourmet.org',
  // Shark Lasers
  'sharklasers.com', 'guerrillamailblock.com', 'jetable.pp.ua', 'nikhil.pp.ua',
  'ox.ax', 'veryrealemail.com', 'discard.email', 'spamspot.com', 'spamgap.com',
  // Fake inbox providers
  'fakeinbox.com', 'fakeinbox.net', 'fakeinbox.org', 'fakeinbox.info',
  'fakemail.fr', 'fakemail.net', 'fakemail.com', 'fakyah.com',
  // Trashmail
  'trashmail.at', 'trashmail.com', 'trashmail.me', 'trashmail.net', 'trashmail.org',
  'trashmail.xyz', 'trashmailer.com', 'trash-mail.at', 'trashdevil.com', 'trashdevil.de',
  // Spambox
  'spambox.us', 'spambox.info', 'spambox.org', 'spambox.me',
  // Discard
  'discard.email', 'discardmail.com', 'discardmail.de', 'spamfree24.org',
  'spamfree24.de', 'spamfree24.info', 'spamfree24.biz', 'spamfree24.eu',
  // Mailnull / Crap Mail
  'mailnull.com', 'crapmail.org', 'crap.com', 'mailscrap.com',
  // Getairmail
  'getairmail.com', 'getairmail.cf', 'getairmail.ga', 'getairmail.gq',
  'getairmail.ml', 'getairmail.tk',
  // AirMail / CrazyMailing
  'airmail.cc', 'crazymailing.com', 'e-mail.com',
  // Maildrop
  'maildrop.cc',
  // MailNull
  'spamgourmet.com',
  // Wegwerfmail
  'wegwerfmail.de', 'wegwerfmail.net', 'wegwerfmail.org', 'wpdork.com',
  // Others commonly abused
  'dodgit.com', 'hmamail.com', 'dispostable.com', 'mailexpire.com',
  'spamevader.com', 'mailbucket.org', 'mt2015.com', 'mt2016.com', 'mt2017.com',
  'nwytg.net', 'nwytg.com', 'no-spam.ws', 'filzmail.com', 'filzmail.de',
  'zetmail.com', 'zetmail.de', 'hatespam.org', 'tittbit.in', 'trbvm.com',
  'incognitomail.org', 'incognitomail.com', 'incognitomail.net',
  'mailismagic.com', 'mailismagic.net', 'moakt.com', 'moakt.cc',
  'spamfighter.cf', 'spamfighter.ga', 'spamfighter.gq', 'spamfighter.ml', 'spamfighter.tk',
  'spamthisplease.com', 'discard.email', 'mailnesia.com', 'mailnull.com',
  'anonbox.net', 'anonymbox.com',
  // Common single-use services
  'mailtemp.info', 'mailtemp.net', 'mailtemp.org', 'mailtemporaire.com',
  'getnada.com', 'getnada.net', 'spamgap.com', 'nospam4.us', 'mvrht.com',
  'luxusmail.org', 'luxusmail.com', 'luxusmail.net',
  // Inboxkitten
  'inboxkitten.com',
  // Crypto-named burners
  'myfakemail.com', 'spamfree.eu', 'proxymail.eu', 'sofort-mail.de',
])

// ─────────────────────────────────────────────────────────────────────────────
// MX record lookup — verifies the domain can actually receive email
// ─────────────────────────────────────────────────────────────────────────────
async function hasMxRecord(domain: string): Promise<boolean> {
  try {
    const records = await dns.promises.resolveMx(domain)
    return records.length > 0
  } catch {
    // ENODATA = no MX, ENOTFOUND = domain doesn't exist, ESERVFAIL = DNS error
    return false
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 3-Layer Email Validation
// Returns null on success, or an error message string on failure.
// ─────────────────────────────────────────────────────────────────────────────
export async function validateEmail(
  email: unknown
): Promise<{ valid: boolean; error: string | null }> {
  if (typeof email !== 'string' || email.length === 0) {
    return { valid: false, error: 'Email address is required.' }
  }

  const cleaned = email.trim().toLowerCase()

  // Layer 1 — Format check
  const formatRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/
  if (!formatRegex.test(cleaned)) {
    return { valid: false, error: 'Please enter a valid email address.' }
  }

  if (cleaned.length > 254) {
    return { valid: false, error: 'Email address is too long.' }
  }

  // Layer 2 — Disposable domain blocklist
  const domain = cleaned.split('@')[1]
  if (!domain) {
    return { valid: false, error: 'Please enter a valid email address.' }
  }

  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      valid: false,
      error: 'Disposable or temporary email addresses are not accepted. Please use your real email.',
    }
  }

  // Layer 3 — MX record DNS check (verifies domain can receive email)
  const mxExists = await hasMxRecord(domain)
  if (!mxExists) {
    return {
      valid: false,
      error: 'The email domain does not appear to accept emails. Please check your email address.',
    }
  }

  return { valid: true, error: null }
}

// ─────────────────────────────────────────────────────────────────────────────
// Allowed services for contact form (prevents arbitrary string injection)
// ─────────────────────────────────────────────────────────────────────────────
export const ALLOWED_SERVICES = new Set([
  'Cold Plunge',
  'Traditional Sauna',
  'Infrared Sauna',
  'Red Light Therapy',
  'Compression Therapy',
  'Contrast Therapy',
  'Full Circuit',
  'Membership',
  'General Enquiry',
  'Other',
])
