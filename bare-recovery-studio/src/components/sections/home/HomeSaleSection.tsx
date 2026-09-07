'use client'

import { CONTACT_INFO } from '@/lib/constants'

const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a session at Bare Recovery Studio.")}`

const deals = [
  { name: 'Full Circuit',     mrp: '₹5,998', price: '₹4,199', tag: 'Best Value',   emoji: '⚡', dur: '60–90 min' },
  { name: 'Contrast Therapy', mrp: '₹3,598', price: '₹2,519', tag: 'Signature',    emoji: '🔥', dur: '20–40 min' },
  { name: 'Cold Plunge',      mrp: '₹2,398', price: '₹1,679', tag: 'Most Popular', emoji: '🧊', dur: '10–15 min' },
  { name: 'Sauna',            mrp: '₹1,998', price: '₹1,399', tag: '',            emoji: '🌡️', dur: '15–30 min' },
  { name: 'Red Light',        mrp: '₹1,598', price: '₹1,119', tag: '',            emoji: '💡', dur: '10–20 min' },
  { name: 'Compression',      mrp: '₹1,598', price: '₹1,119', tag: '',            emoji: '🦵', dur: '10–20 min' },
]

export default function HomeSaleSection() {

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#0a0906', padding: '80px 0' }}>

      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, background: 'radial-gradient(circle, rgba(196,193,196,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Marquee text strip */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(196,193,196,0.10)', borderBottom: '1px solid rgba(196,193,196,0.10)', padding: '10px 0', marginBottom: 64, background: 'rgba(196,193,196,0.03)' }}>
        <div style={{ display: 'flex', animation: 'marqueeSlide 18s linear infinite', gap: 60, whiteSpace: 'nowrap' }}>
          {Array(6).fill([
            'COLD PLUNGE', '· CONTRAST THERAPY ·', 'INFRARED SAUNA',
            '· RED LIGHT THERAPY ·', 'COMPRESSION THERAPY', '· FULL CIRCUIT ·',
          ]).flat().map((t, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.20em', textTransform: 'uppercase', color: i % 2 === 0 ? 'rgba(245,240,235,0.60)' : 'rgba(245,240,235,0.20)' }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-5 md:px-12">

        {/* Headline */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.30em', textTransform: 'uppercase', color: 'rgba(196,193,196,0.60)', marginBottom: 16 }}>
            Introductory Offer · Hyderabad’s First Recovery Studio
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 10vw, 120px)', fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 0.9, color: '#f5f0eb', marginBottom: 8 }}>
            Every Session.
          </h2>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 10vw, 120px)', fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 0.9, marginBottom: 24 }}>
            <span style={{ color: 'rgba(245,240,235,0.40)' }}>30% Off.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.50)', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Introductory rates for all first-time visitors. Walk in, recover, leave better.
          </p>
        </div>

        {/* Deals grid */}
        <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: 12, marginBottom: 48 }}>
          {deals.map((d, i) => (
            <a key={i} href={waLink} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', textDecoration: 'none', borderRadius: 20, padding: '22px 20px', border: '1px solid rgba(196,193,196,0.10)', background: 'rgba(255,255,255,0.025)', position: 'relative', overflow: 'hidden', transition: 'all 0.25s ease', cursor: 'pointer' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(196,193,196,0.06)'; el.style.borderColor = 'rgba(196,193,196,0.25)'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.25)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.025)'; el.style.borderColor = 'rgba(196,193,196,0.10)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}
            >
              {d.tag && (
                <span style={{ position: 'absolute', top: 12, right: 12, fontSize: 8, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'rgba(196,193,196,0.15)', color: '#dddadd', padding: '3px 8px', borderRadius: 6, border: '1px solid rgba(196,193,196,0.20)' }}>{d.tag}</span>
              )}
              <div style={{ fontSize: 28, marginBottom: 10 }}>{d.emoji}</div>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#f5f0eb', marginBottom: 2 }}>{d.name}</p>
              <p style={{ fontSize: 10, color: 'rgba(245,240,235,0.35)', marginBottom: 10 }}>⏱ {d.dur}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, color: '#f5f0eb', letterSpacing: '-0.03em', lineHeight: 1 }}>{d.price}</span>
                <span style={{ fontSize: 13, color: 'rgba(245,240,235,0.30)', textDecoration: 'line-through' }}>{d.mrp}</span>
              </div>
              <div style={{ marginTop: 8, fontSize: 9, fontWeight: 800, color: 'rgba(196,193,196,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                30% Off
              </div>
            </a>
          ))}
        </div>

        {/* ICN Athlete note — 50% off (permanent) */}
        <div style={{ textAlign: 'center', padding: '24px', borderRadius: 16, background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.18)', marginBottom: 40 }}>
          <p style={{ fontSize: 14, color: 'rgba(245,240,235,0.65)' }}>
            <span style={{ fontWeight: 800, color: '#FBBF24' }}>🏆 ICN Athletes:</span>{' '}
            <strong style={{ color: '#FBBF24' }}>50% off every single visit</strong> — permanently, on registration. No expiry. Show your card at the studio.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#d9d1cc', color: '#1a1919', padding: '16px 36px', borderRadius: 9999, fontSize: 14, fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.20)', letterSpacing: '0.04em' }}>
            Book a Session →
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
