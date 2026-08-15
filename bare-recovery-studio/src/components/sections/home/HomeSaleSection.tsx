'use client'

import { useState, useEffect } from 'react'
import { CONTACT_INFO } from '@/lib/constants'

const SALE_END = new Date('2026-08-31T23:59:59+05:30')
const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I want to book a session at the 50% launch sale price.')}`

function useCountdown(target: Date) {
  const [t, setT] = useState({ d: 17, h: 0, m: 0, s: 0 })
  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) })
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [target])
  return t
}

const deals = [
  { name: 'Full Circuit', was: '₹5,998', now: '₹2,999', tag: 'Best Value', emoji: '⚡', dur: '60–90 min' },
  { name: 'Contrast Therapy', was: '₹3,598', now: '₹1,799', tag: 'Signature', emoji: '🔥', dur: '20–40 min' },
  { name: 'Cold Plunge', was: '₹2,398', now: '₹1,199', tag: 'Most Popular', emoji: '🧊', dur: '10–15 min' },
  { name: 'Sauna', was: '₹1,998', now: '₹999', tag: '', emoji: '🌡️', dur: '15–30 min' },
  { name: 'Red Light', was: '₹1,598', now: '₹799', tag: '', emoji: '💡', dur: '30–40 min' },
  { name: 'Compression', was: '₹1,598', now: '₹799', tag: '', emoji: '🦵', dur: '30–40 min' },
]

export default function HomeSaleSection() {
  const { d, h, m, s } = useCountdown(SALE_END)
  const [mounted, setMounted] = useState(false)
  const pad = (n: number) => String(n).padStart(2, '0')

  useEffect(() => { setMounted(true) }, [])

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#0a0906', padding: '80px 0' }}>

      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, background: 'radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Marquee text strip */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(245,158,11,0.15)', borderBottom: '1px solid rgba(245,158,11,0.15)', padding: '10px 0', marginBottom: 64, background: 'rgba(245,158,11,0.04)' }}>
        <div style={{ display: 'flex', animation: 'marqueeSlide 18s linear infinite', gap: 60, whiteSpace: 'nowrap' }}>
          {Array(6).fill(['🔥 50% OFF', '· LAUNCH SALE ·', 'COLD PLUNGE ₹1,199', '· FULL CIRCUIT ₹2,999 ·', 'ENDS AUG 31', '· FOUNDING RATE ·']).flat().map((t, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.20em', textTransform: 'uppercase', color: i % 2 === 0 ? '#FBBF24' : 'rgba(245,240,235,0.30)' }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-5 md:px-12">

        {/* Headline */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.30em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 16 }}>
            Introductory Launch Sale · Hyderabad's First Recovery Studio
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 10vw, 120px)', fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 0.9, color: '#f5f0eb', marginBottom: 8 }}>
            Every Session.
          </h2>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 10vw, 120px)', fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 0.9, marginBottom: 24 }}>
            <span style={{ color: '#F59E0B' }}>50% Off.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.50)', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.7 }}>
            These are founding member prices. When August ends, every rate resets — permanently. Lock in now.
          </p>

          {/* Countdown */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.22)', borderRadius: 20, padding: '18px 28px', marginBottom: 40 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,240,235,0.45)' }}>Sale ends in</span>
            {[{ v: d, l: 'Days' }, { v: h, l: 'Hours' }, { v: m, l: 'Mins' }, { v: s, l: 'Secs' }].map(({ v, l }, i) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {i > 0 && <span style={{ fontSize: 20, color: 'rgba(245,158,11,0.40)', fontWeight: 300 }}>:</span>}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#FBBF24', lineHeight: 1, letterSpacing: '-0.04em' }}>
                    {mounted ? pad(v) : '--'}
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(245,240,235,0.30)', marginTop: 3 }}>{l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deals grid */}
        <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: 12, marginBottom: 48 }}>
          {deals.map((d, i) => (
            <a key={i} href={waLink} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', textDecoration: 'none', borderRadius: 20, padding: '22px 20px', border: '1px solid rgba(245,158,11,0.12)', background: 'rgba(255,255,255,0.025)', position: 'relative', overflow: 'hidden', transition: 'all 0.25s ease', cursor: 'pointer' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(245,158,11,0.08)'; el.style.borderColor = 'rgba(245,158,11,0.35)'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 16px 40px rgba(245,158,11,0.15)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.025)'; el.style.borderColor = 'rgba(245,158,11,0.12)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}
            >
              {d.tag && (
                <span style={{ position: 'absolute', top: 12, right: 12, fontSize: 8, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', padding: '3px 8px', borderRadius: 6 }}>{d.tag}</span>
              )}
              <div style={{ fontSize: 28, marginBottom: 10 }}>{d.emoji}</div>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#f5f0eb', marginBottom: 2 }}>{d.name}</p>
              <p style={{ fontSize: 10, color: 'rgba(245,240,235,0.35)', marginBottom: 10 }}>⏱ {d.dur}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, color: '#FBBF24', letterSpacing: '-0.03em', lineHeight: 1 }}>{d.now}</span>
                <span style={{ fontSize: 13, color: 'rgba(245,240,235,0.30)', textDecoration: 'line-through' }}>{d.was}</span>
              </div>
              <div style={{ marginTop: 8, fontSize: 9, fontWeight: 800, color: '#F59E0B', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 16, height: 1, background: '#F59E0B', display: 'inline-block' }} />
                50% Off
              </div>
            </a>
          ))}
        </div>

        {/* ICN Athlete note */}
        <div style={{ textAlign: 'center', padding: '24px', borderRadius: 16, background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.18)', marginBottom: 40 }}>
          <p style={{ fontSize: 14, color: 'rgba(245,240,235,0.65)' }}>
            <span style={{ fontWeight: 800, color: '#FBBF24' }}>🏆 ICN Athletes:</span>{' '}
            50% off every single visit on registration — valid through 7th Sep 2026. No expiry. No time limit.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', padding: '16px 36px', borderRadius: 9999, fontSize: 14, fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 32px rgba(245,158,11,0.45)', letterSpacing: '0.04em' }}>
            🔥 Book at 50% Off
          </a>
          <a href="/pricing"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 28px', borderRadius: 9999, fontSize: 14, fontWeight: 600, color: 'rgba(245,240,235,0.60)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}>
            View All Prices →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes marqueeSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
