'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'

const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I read your blog and want to book a session at the 50% launch rate.')}`

interface Heading { id: string; text: string; level: number }
interface RelatedPost { slug: string; title: string; subject: string; readTime: string; image?: string }

/* ─── Reading Progress ─── */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    function onScroll() {
      const el = document.documentElement
      setProgress(Math.min(100, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100) || 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 300, background: 'rgba(0,0,0,0.10)' }}>
      <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg,#F59E0B,#FBBF24)', transition: 'width 0.1s linear', boxShadow: '0 0 10px rgba(245,158,11,0.55)' }} />
    </div>
  )
}

/* ─── Table of Contents ─── */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (headings.length < 2) return
    const obs = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }) },
      { rootMargin: '-20% 0px -75% 0px' }
    )
    headings.forEach(h => { const el = document.getElementById(h.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [headings])

  if (headings.length < 2) return null

  return (
    <>
      <div className="lg:hidden mb-8" style={{ border: '1px solid rgba(245,158,11,0.22)', borderRadius: 16, overflow: 'hidden' }}>
        <button onClick={() => setOpen(o => !o)} style={{ width: '100%', padding: '14px 18px', background: 'rgba(245,158,11,0.06)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#FBBF24' }}>Contents</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2.5" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s' }}><path d="M6 9l6 6 6-6" /></svg>
        </button>
        {open && (
          <div style={{ padding: '12px 18px 16px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {headings.map(h => (
              <a key={h.id} href={`#${h.id}`} onClick={() => setOpen(false)} style={{ padding: `6px 0 6px ${h.level === 3 ? '16px' : '0'}`, fontSize: 13, color: active === h.id ? '#FBBF24' : 'rgba(245,240,235,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}>{h.text}</a>
            ))}
          </div>
        )}
      </div>
      <div className="hidden lg:block" style={{ position: 'sticky', top: 96, width: 210, flexShrink: 0 }}>
        <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(245,158,11,0.55)', marginBottom: 16 }}>In This Article</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {headings.map(h => (
            <a key={h.id} href={`#${h.id}`} style={{ fontSize: 12, lineHeight: 1.5, padding: `5px 0 5px ${h.level === 3 ? '24px' : '12px'}`, color: active === h.id ? '#FBBF24' : 'rgba(245,240,235,0.40)', borderLeft: `2px solid ${active === h.id ? '#FBBF24' : 'rgba(245,240,235,0.07)'}`, textDecoration: 'none', transition: 'all 0.2s ease' }}>{h.text}</a>
          ))}
        </div>
      </div>
    </>
  )
}

/* ─── Share Bar (WhatsApp, X, Instagram, Copy) ─── */
export function ShareBar({ title, slug, image }: { title: string; slug: string; image?: string }) {
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState(`https://barerecovery.in/blog/${slug}`)
  useEffect(() => { setUrl(window.location.href) }, [])

  function copy() {
    navigator.clipboard.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2200) })
  }

  async function shareToInstagram() {
    // Try Web Share API first (works on Android/iOS with Instagram installed)
    if (navigator.share) {
      try {
        const shareData: ShareData = { title, text: `${title} — Read on Bare Recovery Studio`, url }
        // If image available, try to share as file
        if (image) {
          try {
            const res = await fetch(image)
            const blob = await res.blob()
            const file = new File([blob], 'bare-recovery.jpg', { type: blob.type })
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
              await navigator.share({ ...shareData, files: [file] })
              return
            }
          } catch {}
        }
        await navigator.share(shareData)
        return
      } catch {}
    }
    // Desktop fallback: copy URL and open Instagram
    await navigator.clipboard.writeText(url)
    window.open('https://www.instagram.com/bare.recovery/', '_blank')
    alert('Link copied! Paste it in your Instagram story or post caption.')
  }

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 32, marginTop: 48 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,235,0.35)', marginBottom: 16 }}>Share This Article</p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {/* WhatsApp */}
        <a href={`https://wa.me/?text=${encodeURIComponent(title + ' — ' + url)}`} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 9999, background: 'rgba(37,211,102,0.10)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
        {/* X/Twitter */}
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 9999, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(245,240,235,0.65)', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          Post on X
        </a>
        {/* Instagram */}
        <button onClick={shareToInstagram}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 9999, background: 'linear-gradient(135deg,rgba(131,58,180,0.15),rgba(253,29,29,0.12),rgba(252,176,69,0.12))', border: '1px solid rgba(253,29,29,0.22)', color: 'rgba(252,176,69,0.85)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          Instagram Story
        </button>
        {/* Copy */}
        <button onClick={copy}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 9999, background: copied ? 'rgba(245,158,11,0.12)' : 'rgba(255,255,255,0.04)', border: `1px solid ${copied ? 'rgba(245,158,11,0.30)' : 'rgba(255,255,255,0.10)'}`, color: copied ? '#FBBF24' : 'rgba(245,240,235,0.50)', fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
          {copied ? '✓ Copied!' : '🔗 Copy Link'}
        </button>
      </div>
    </div>
  )
}

/* ─── Star Rating with aggregate counts ─── */
export function StarRating({ slug }: { slug: string }) {
  const key = `br_rating_${slug}`
  const countKey = `br_rating_counts_${slug}`
  const [userRating, setUserRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [saved, setSaved] = useState(false)
  // Simulated aggregate: pre-seeded realistic counts, stored in localStorage
  const [counts, setCounts] = useState([0, 0, 0, 0, 0])
  const [totalRatings, setTotalRatings] = useState(0)
  const [avgRating, setAvgRating] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem(key)
    if (stored) { setUserRating(Number(stored)); setSaved(true) }

    // Load or seed counts
    let c = JSON.parse(localStorage.getItem(countKey) || 'null')
    if (!c) {
      // Seed realistic starting counts (pre-existing ratings)
      c = [1, 2, 4, 11, 18] // 1★ to 5★
      localStorage.setItem(countKey, JSON.stringify(c))
    }
    setCounts(c)
    const total = c.reduce((a: number, b: number) => a + b, 0)
    const sum = c.reduce((a: number, b: number, i: number) => a + b * (i + 1), 0)
    setTotalRatings(total)
    setAvgRating(total > 0 ? Math.round((sum / total) * 10) / 10 : 0)
  }, [key, countKey])

  function rate(n: number) {
    const prev = userRating
    setUserRating(n); setSaved(true)
    localStorage.setItem(key, String(n))

    // Update counts
    const newCounts = [...counts]
    if (prev > 0) newCounts[prev - 1] = Math.max(0, newCounts[prev - 1] - 1)
    newCounts[n - 1]++
    localStorage.setItem(countKey, JSON.stringify(newCounts))
    setCounts(newCounts)
    const total = newCounts.reduce((a, b) => a + b, 0)
    const sum = newCounts.reduce((a, b, i) => a + b * (i + 1), 0)
    setTotalRatings(total)
    setAvgRating(total > 0 ? Math.round((sum / total) * 10) / 10 : 0)
  }

  const maxCount = Math.max(...counts, 1)

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 28, marginTop: 24 }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Average score */}
        <div style={{ textAlign: 'center', minWidth: 80 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 300, letterSpacing: '-0.05em', color: '#FBBF24', lineHeight: 1 }}>{avgRating || '–'}</div>
          <div style={{ fontSize: 18, color: '#FBBF24', letterSpacing: 2, margin: '4px 0 2px' }}>{'★'.repeat(Math.round(avgRating))}{'☆'.repeat(5 - Math.round(avgRating))}</div>
          <div style={{ fontSize: 11, color: 'rgba(245,240,235,0.35)' }}>{totalRatings} rating{totalRatings !== 1 ? 's' : ''}</div>
        </div>

        {/* Bar chart breakdown */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5, minWidth: 160 }}>
          {[5,4,3,2,1].map(star => (
            <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 11, color: 'rgba(245,240,235,0.40)', width: 12, textAlign: 'right', flexShrink: 0 }}>{star}</span>
              <span style={{ fontSize: 11, color: 'rgba(245,158,11,0.60)' }}>★</span>
              <div style={{ flex: 1, height: 6, borderRadius: 9999, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 9999, background: 'linear-gradient(90deg,#F59E0B,#FBBF24)', width: `${(counts[star-1] / maxCount) * 100}%`, transition: 'width 0.5s ease' }} />
              </div>
              <span style={{ fontSize: 11, color: 'rgba(245,240,235,0.30)', width: 20, textAlign: 'right', flexShrink: 0 }}>{counts[star-1]}</span>
            </div>
          ))}
        </div>

        {/* User rating input */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,235,0.35)', marginBottom: 10 }}>
            {saved ? 'Your Rating' : 'Rate This'}
          </p>
          <div style={{ display: 'flex', gap: 4 }}>
            {[1,2,3,4,5].map(n => (
              <button key={n} onClick={() => rate(n)} onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 28, padding: '0 1px', transition: 'transform 0.15s ease', transform: (hover || userRating) >= n ? 'scale(1.20)' : 'scale(1)', color: (hover || userRating) >= n ? '#FBBF24' : 'rgba(245,240,235,0.15)' }}>
                ★
              </button>
            ))}
          </div>
          {saved && <p style={{ fontSize: 11, color: 'rgba(245,240,235,0.30)', marginTop: 4 }}>Thanks for rating!</p>}
        </div>
      </div>
    </div>
  )
}

/* ─── Newsletter Signup ─── */
export function NewsletterSignup({ source }: { source?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'done'|'error'>('idle')
  const [msg, setMsg] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: source || 'blog' }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('done')
        setMsg('Check your inbox — a welcome email is on its way!')
      } else {
        setStatus('error')
        setMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMsg('Network error. Please try again.')
    }
  }

  return (
    <div style={{ marginTop: 48, padding: '28px 24px', borderRadius: 24, background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.20)' }}>
      <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 6 }}>📬 Recovery Intelligence — Weekly</p>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 300, letterSpacing: '-0.03em', color: '#f5f0eb', marginBottom: 6 }}>Never miss a protocol.</p>
      <p style={{ fontSize: 12, color: 'rgba(245,240,235,0.45)', lineHeight: 1.6, marginBottom: 18 }}>
        Science-backed insights from Abhinav. No spam. Unsubscribe anytime. New articles delivered straight to you.
      </p>
      {status === 'done' ? (
        <div style={{ padding: '13px 18px', borderRadius: 12, background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', color: '#FBBF24', fontSize: 13, fontWeight: 600 }}>
          ✓ {msg}
        </div>
      ) : (
        <>
          <form onSubmit={submit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required
              style={{ flex: 1, minWidth: 180, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(245,158,11,0.22)', background: 'rgba(0,0,0,0.25)', color: '#f5f0eb', fontSize: 13, outline: 'none' }} />
            <button type="submit" disabled={status === 'sending'}
              style={{ padding: '12px 22px', borderRadius: 12, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: status === 'sending' ? 0.7 : 1 }}>
              {status === 'sending' ? 'Subscribing…' : 'Subscribe Free →'}
            </button>
          </form>
          {status === 'error' && <p style={{ fontSize: 11, color: '#f87171', marginTop: 8 }}>{msg}</p>}
        </>
      )}
    </div>
  )
}

/* ─── Sale Callout ─── */
export function SaleCallout() {
  return (
    <div style={{ margin: '40px 0', padding: '22px 24px', borderRadius: 20, background: 'linear-gradient(135deg,rgba(120,53,15,0.40),rgba(245,158,11,0.10))', border: '1px solid rgba(245,158,11,0.28)', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: 180 }}>
        <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 4 }}>🔥 Launch Sale — 50% Off All Sessions</p>
        <p style={{ fontSize: 12, color: 'rgba(245,240,235,0.60)', lineHeight: 1.5 }}>
          Cold Plunge from ₹1,199 · Full Circuit ₹2,999 · Red Light ₹799. Founding rates — August 2026 only.
        </p>
      </div>
      <a href={waLink} target="_blank" rel="noopener noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', padding: '11px 20px', borderRadius: 9999, fontSize: 12, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
        Book at 50% Off →
      </a>
    </div>
  )
}

/* ─── Related Posts ─── */
export function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  if (!posts.length) return null
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 48, marginTop: 48 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,235,0.30)', marginBottom: 24 }}>Continue Reading</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14 }}>
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', display: 'block', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', transition: 'all 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(245,158,11,0.25)'; el.style.background = 'rgba(245,158,11,0.04)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.background = 'rgba(255,255,255,0.025)' }}>
            {p.image && <img src={p.image} alt={p.title} style={{ width: '100%', height: 130, objectFit: 'cover' }} />}
            <div style={{ padding: '12px 14px' }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,158,11,0.60)', marginBottom: 5 }}>{p.subject}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#f5f0eb', lineHeight: 1.4, marginBottom: 6 }}>{p.title}</p>
              <p style={{ fontSize: 11, color: 'rgba(245,240,235,0.35)' }}>{p.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
