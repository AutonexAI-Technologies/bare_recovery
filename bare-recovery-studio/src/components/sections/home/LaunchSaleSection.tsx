'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'

const SALE_END = new Date('2026-08-31T23:59:59+05:30')

function useCountdown(target: Date) {
  const [t, setT] = useState({ d: 17, h: 0, m: 0, s: 0 })
  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return t
}

function useIntersection(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
  return visible
}

const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
  'Hi! I want to book at the founding rate — 50% off. Please confirm availability.'
)}`

const priceItems = [
  { name: 'Cold Plunge', was: '₹2,398', now: '₹1,199', duration: '10–15 min' },
  { name: 'Full Circuit', was: '₹5,998', now: '₹2,999', duration: '60–90 min' },
  { name: 'Red Light Therapy', was: '₹1,598', now: '₹799', duration: '30–40 min' },
  { name: 'Sauna', was: '₹1,998', now: '₹999', duration: '15–30 min' },
  { name: 'Contrast Therapy', was: '₹3,598', now: '₹1,799', duration: '20–40 min' },
  { name: 'Compression', was: '₹1,598', now: '₹799', duration: '30–40 min' },
]

export default function LaunchSaleSection() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useIntersection(ref)
  const { d, h, m, s } = useCountdown(SALE_END)
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section
      ref={ref}
      id="founding-rate"
      style={{
        background: '#0a0909',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Full-width horizontal scrolling ticker — TOP */}
      <div style={{
        borderTop: '1px solid rgba(188,163,134,0.12)',
        borderBottom: '1px solid rgba(188,163,134,0.08)',
        height: 36, overflow: 'hidden',
        display: 'flex', alignItems: 'center',
        background: 'rgba(188,163,134,0.025)',
      }}>
        <div style={{
          display: 'flex', gap: 72,
          animation: 'foundingTicker 28s linear infinite',
          whiteSpace: 'nowrap', willChange: 'transform',
        }}>
          {Array(10).fill(0).map((_, i) => (
            <span key={i} style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '0.30em',
              textTransform: 'uppercase',
              color: i % 3 === 0 ? 'rgba(188,163,134,0.60)' : 'rgba(245,240,235,0.25)',
              flexShrink: 0,
            }}>
              {['✦ Founding Member Rate', '— 50% Off All Sessions', '◆ Limited to August 2026', '— Hyderabad\'s Recovery Studio'][i % 4]}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-12">

        {/* HERO ROW: Giant number + story */}
        <div className="py-16 md:py-24 grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-center">

          {/* Left: Editorial headline */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'rgba(188,163,134,0.55)',
              marginBottom: 24,
            }}>
              Aug 2026 · Founding Member Offer
            </p>

            {/* Giant 50% — the centrepiece */}
            <div style={{ lineHeight: 0.88, marginBottom: 8 }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(80px, 18vw, 160px)',
                fontWeight: 300,
                letterSpacing: '-0.05em',
                color: '#f5f0eb',
                display: 'block',
              }}>
                50
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 7vw, 64px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: 'rgba(245,240,235,0.22)',
                display: 'block',
                marginTop: -4,
              }}>
                percent off.
              </div>
            </div>

            <p style={{
              fontSize: 15, lineHeight: 1.75,
              color: 'rgba(245,240,235,0.55)',
              maxWidth: 420,
              marginTop: 28,
              marginBottom: 36,
            }}>
              Bare Recovery is open — and for a limited time, every session is half the regular rate.
              This is our founding offer to Hyderabad&apos;s athletes, performers, and recovery-first individuals.
              When August ends, so do these rates. Permanently.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
              {['Cold Plunge · ₹1,199', 'Full Circuit · ₹2,999', 'Sauna · ₹999', 'Red Light · ₹799'].map(t => (
                <span key={t} style={{
                  fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.10em',
                  color: 'rgba(188,163,134,0.70)',
                  border: '1px solid rgba(188,163,134,0.18)',
                  background: 'rgba(188,163,134,0.04)',
                  padding: '6px 14px', borderRadius: 9999,
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#d9d1cc', color: '#111010',
                  padding: '15px 30px', borderRadius: 9999,
                  fontSize: 13, fontWeight: 700, letterSpacing: '0.04em',
                  textDecoration: 'none', transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#c4bdb8' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#d9d1cc' }}
              >
                Book at Founding Rate
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <Link href="/pricing" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: 'rgba(245,240,235,0.45)',
                padding: '15px 22px', borderRadius: 9999,
                fontSize: 13, fontWeight: 500,
                border: '1px solid rgba(245,240,235,0.08)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f5f0eb' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,235,0.45)' }}
              >
                See full pricing
              </Link>
            </div>
          </div>

          {/* Right: Countdown + price grid */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.12s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.12s',
            }}
          >
            {/* Countdown */}
            <div style={{
              border: '1px solid rgba(188,163,134,0.14)',
              borderRadius: 24, padding: '28px 24px',
              background: 'rgba(245,240,235,0.02)',
              marginBottom: 12,
            }}>
              <p style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.30em',
                textTransform: 'uppercase',
                color: 'rgba(188,163,134,0.45)',
                marginBottom: 20,
              }}>
                Founding Rate Expires In
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
                {[{ v: d, l: 'Days' }, { v: h, l: 'Hrs' }, { v: m, l: 'Min' }, { v: s, l: 'Sec' }].map(({ v, l }) => (
                  <div key={l} style={{
                    textAlign: 'center',
                    padding: '18px 8px',
                    background: 'rgba(245,240,235,0.03)',
                    borderRadius: 16,
                    border: '1px solid rgba(188,163,134,0.09)',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(28px,4.5vw,42px)',
                      fontWeight: 300,
                      letterSpacing: '-0.04em',
                      color: '#f5f0eb',
                      lineHeight: 1,
                    }}>
                      {pad(v)}
                    </div>
                    <div style={{
                      fontSize: 9, fontWeight: 600, letterSpacing: '0.20em',
                      textTransform: 'uppercase',
                      color: 'rgba(188,163,134,0.40)',
                      marginTop: 6,
                    }}>
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {priceItems.map(item => (
                <div key={item.name} style={{
                  padding: '16px',
                  background: 'rgba(245,240,235,0.025)',
                  border: '1px solid rgba(188,163,134,0.09)',
                  borderRadius: 16,
                }}>
                  <p style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(188,163,134,0.50)',
                    marginBottom: 10,
                  }}>
                    {item.name}
                  </p>
                  <p style={{
                    fontSize: 12, fontWeight: 500,
                    color: 'rgba(245,240,235,0.28)',
                    textDecoration: 'line-through',
                    marginBottom: 2,
                  }}>
                    {item.was}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 22, fontWeight: 300,
                      letterSpacing: '-0.03em',
                      color: '#f5f0eb', lineHeight: 1,
                    }}>
                      {item.now}
                    </span>
                    <span style={{
                      fontSize: 8, fontWeight: 700, letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'rgba(188,163,134,0.65)',
                    }}>
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ICN note */}
            <div style={{
              marginTop: 10,
              padding: '14px 16px',
              background: 'rgba(188,163,134,0.05)',
              border: '1px solid rgba(188,163,134,0.14)',
              borderRadius: 14,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ fontSize: 16 }}>🏆</span>
              <p style={{ fontSize: 11, color: 'rgba(245,240,235,0.45)', lineHeight: 1.5 }}>
                <span style={{ color: 'rgba(188,163,134,0.80)', fontWeight: 600 }}>ICN Athletes:</span>{' '}
                50% off every single visit on registration. No expiry, no time limit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div style={{
        borderTop: '1px solid rgba(188,163,134,0.08)',
        height: 36, overflow: 'hidden',
        display: 'flex', alignItems: 'center',
        background: 'rgba(188,163,134,0.02)',
      }}>
        <div style={{
          display: 'flex', gap: 72,
          animation: 'foundingTickerR 32s linear infinite',
          whiteSpace: 'nowrap', willChange: 'transform',
        }}>
          {Array(10).fill(0).map((_, i) => (
            <span key={i} style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '0.30em',
              textTransform: 'uppercase',
              color: 'rgba(188,163,134,0.35)',
              flexShrink: 0,
            }}>
              {['◆ Book Before Rates Reset', '— Kompally · Secunderabad', '✦ Private Sessions Only', '— Walk-ins Welcome'][i % 4]}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes foundingTicker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes foundingTickerR { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
    </section>
  )
}
