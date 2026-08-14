'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'

const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I read your blog and want to book a session at the 50% launch rate.')}`

interface Heading { id: string; text: string; level: number }
interface RelatedPost { slug: string; title: string; subject: string; readTime: string; image?: string }

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    function onScroll() {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 200, background: 'rgba(0,0,0,0.10)' }}>
      <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg,#F59E0B,#FBBF24)', transition: 'width 0.1s linear', boxShadow: '0 0 10px rgba(245,158,11,0.55)' }} />
    </div>
  )
}

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
      {/* Mobile collapsible */}
      <div className="lg:hidden mb-8" style={{ border: '1px solid rgba(245,158,11,0.22)', borderRadius: 16, overflow: 'hidden' }}>
        <button onClick={() => setOpen(o => !o)} style={{ width: '100%', padding: '14px 18px', background: 'rgba(245,158,11,0.06)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#FBBF24' }}>Contents</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2.5" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s' }}><path d="M6 9l6 6 6-6" /></svg>
        </button>
        {open && (
          <div style={{ padding: '12px 18px 16px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {headings.map(h => (
              <a key={h.id} href={`#${h.id}`} onClick={() => setOpen(false)} style={{ padding: '6px 0 6px', fontSize: 13, color: active === h.id ? '#FBBF24' : 'rgba(245,240,235,0.55)', textDecoration: 'none', paddingLeft: h.level === 3 ? 16 : 0, transition: 'color 0.2s' }}>{h.text}</a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop sticky sidebar */}
      <div className="hidden lg:block" style={{ position: 'sticky', top: 96, width: 210, flexShrink: 0 }}>
        <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(245,158,11,0.55)', marginBottom: 16 }}>In This Article</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {headings.map(h => (
            <a key={h.id} href={`#${h.id}`} style={{ fontSize: 12, lineHeight: 1.5, padding: `5px 0 5px ${h.level === 3 ? '24px' : '12px'}`, color: active === h.id ? '#FBBF24' : 'rgba(245,240,235,0.40)', borderLeft: `2px solid ${active === h.id ? '#FBBF24' : 'rgba(245,240,235,0.07)'}`, textDecoration: 'none', transition: 'all 0.2s ease' }}>
              {h.text}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export function ShareBar({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState(`https://barerecovery.in/blog/${slug}`)
  useEffect(() => { setUrl(window.location.href) }, [])

  function copy() {
    navigator.clipboard.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2200) })
  }

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 32, marginTop: 48 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,235,0.35)', marginBottom: 16 }}>Share This Article</p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a href={`https://wa.me/?text=${encodeURIComponent(title + ' — ' + url)}`} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 9999, background: 'rgba(37,211,102,0.10)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 9999, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(245,240,235,0.65)', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          Post on X
        </a>
        <button onClick={copy}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 9999, background: copied ? 'rgba(245,158,11,0.12)' : 'rgba(255,255,255,0.04)', border: `1px solid ${copied ? 'rgba(245,158,11,0.30)' : 'rgba(255,255,255,0.10)'}`, color: copied ? '#FBBF24' : 'rgba(245,240,235,0.50)', fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
          {copied ? '✓ Copied!' : '🔗 Copy Link'}
        </button>
      </div>
    </div>
  )
}

export function StarRating({ slug }: { slug: string }) {
  const key = `br_rating_${slug}`
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(key)
    if (stored) { setRating(Number(stored)); setSaved(true) }
  }, [key])

  function rate(n: number) {
    setRating(n); setSaved(true)
    localStorage.setItem(key, String(n))
  }

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 28, marginTop: 24 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,235,0.35)', marginBottom: 12 }}>
        {saved ? 'Your Rating' : 'Rate This Article'}
      </p>
      <div style={{ display: 'flex', gap: 6 }}>
        {[1,2,3,4,5].map(n => (
          <button key={n} onClick={() => rate(n)} onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 30, padding: '0 2px', transition: 'transform 0.15s ease', transform: (hover || rating) >= n ? 'scale(1.18)' : 'scale(1)', color: (hover || rating) >= n ? '#FBBF24' : 'rgba(245,240,235,0.15)' }}>
            ★
          </button>
        ))}
      </div>
      {saved && <p style={{ fontSize: 11, color: 'rgba(245,240,235,0.35)', marginTop: 6 }}>Thanks for rating!</p>}
    </div>
  )
}

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'done'>('idle')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    setTimeout(() => setStatus('done'), 1000)
  }

  return (
    <div style={{ marginTop: 48, padding: '28px 24px', borderRadius: 24, background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.20)' }}>
      <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 6 }}>📬 Recovery Intelligence — Weekly</p>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 300, letterSpacing: '-0.03em', color: '#f5f0eb', marginBottom: 6 }}>Never miss a protocol.</p>
      <p style={{ fontSize: 12, color: 'rgba(245,240,235,0.45)', lineHeight: 1.6, marginBottom: 18 }}>
        Science-backed recovery insights from Abhinav — straight to your inbox. No spam. Unsubscribe anytime.
      </p>
      {status === 'done' ? (
        <div style={{ padding: '13px 18px', borderRadius: 12, background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', color: '#FBBF24', fontSize: 13, fontWeight: 600 }}>
          ✓ You're in! Check your inbox for a confirmation.
        </div>
      ) : (
        <form onSubmit={submit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required
            style={{ flex: 1, minWidth: 180, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(245,158,11,0.22)', background: 'rgba(0,0,0,0.25)', color: '#f5f0eb', fontSize: 13, outline: 'none' }} />
          <button type="submit" disabled={status === 'sending'}
            style={{ padding: '12px 22px', borderRadius: 12, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            {status === 'sending' ? 'Subscribing…' : 'Subscribe Free →'}
          </button>
        </form>
      )}
    </div>
  )
}

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
        style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', padding: '11px 20px', borderRadius: 9999, fontSize: 12, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(245,158,11,0.30)' }}>
        Book at 50% Off →
      </a>
    </div>
  )
}

export function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  if (!posts.length) return null
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 48, marginTop: 48 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,235,0.30)', marginBottom: 24 }}>Continue Reading</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14 }}>
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', display: 'block', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.25)'; (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.04)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)' }}>
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
