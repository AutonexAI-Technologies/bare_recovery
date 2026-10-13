'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'



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
  "Hi! I'd like to book a session at Bare Recovery Studio."
)}`

const priceItems = [
  { name: 'Full Circuit',       was: '₹4,299', now: '₹2,999', duration: '60–90 min', emoji: '⚡' },
  { name: 'Contrast Therapy',   was: '₹2,715', now: '₹1,899', duration: '20–40 min', emoji: '🔥' },
  { name: 'Cold Plunge',        was: '₹1,855', now: '₹1,299', duration: '10–15 min', emoji: '🦪' },
  { name: 'Sauna',              was: '₹1,429', now: '₹999',   duration: '15–30 min', emoji: '🌡️' },
  { name: 'Red Light Therapy',  was: '₹1,145', now: '₹799',   duration: '10–20 min', emoji: '💡' },
  { name: 'Compression',        was: '₹1,285', now: '₹899',   duration: '20–30 min', emoji: '🦵' },
]

export default function LaunchSaleSection() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useIntersection(ref)

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
              {['✦ Athlete Recovery Hub', '◆ Athletes 50% Off', '— Hyderabad\'s Recovery Studio', '✦ Private Sessions Only'][i % 4]}
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
              Kompally, Secunderabad · Open 10AM–10PM
            </p>

            {/* Hero headline */}
            <div style={{ lineHeight: 0.88, marginBottom: 8 }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(56px, 12vw, 110px)',
                fontWeight: 300,
                letterSpacing: '-0.05em',
                color: '#f5f0eb',
                display: 'block',
              }}>
                Recover
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
                like an athlete.
              </div>
            </div>

            <p style={{
              fontSize: 15, lineHeight: 1.75,
              color: 'rgba(245,240,235,0.55)',
              maxWidth: 420,
              marginTop: 28,
              marginBottom: 36,
            }}>
              Hyderabad&apos;s first dedicated recovery studio. Cold Plunge, Traditional Sauna, Red Light Therapy, Compression, Contrast Therapy & Full Circuit — all under one private roof in Kompally.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
              {['Full Circuit', 'Contrast Therapy', 'Cold Plunge', 'Sauna', 'Red Light', 'Compression'].map(t => (
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
            {/* Session price grid - no countdown needed */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {priceItems.map(item => (
                <div key={item.name} style={{
                  padding: '16px',
                  background: 'rgba(245,240,235,0.025)',
                  border: '1px solid rgba(188,163,134,0.09)',
                  borderRadius: 16,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                    <span style={{ fontSize: 14 }}>{item.emoji}</span>
                    <p style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(188,163,134,0.50)',
                    }}>
                      {item.name}
                    </p>
                  </div>
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

            {/* Athlete note */}
            <div style={{
              marginTop: 10,
              padding: '16px 18px',
              background: 'rgba(188,163,134,0.06)',
              border: '1px solid rgba(188,163,134,0.20)',
              borderRadius: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>🏆</span>
                <p style={{ fontSize: 11, color: 'rgba(245,240,235,0.55)', lineHeight: 1.6 }}>
                  <span style={{ color: 'rgba(188,163,134,0.90)', fontWeight: 700 }}>The Deccan Uprising 2026</span> —
                  29 &amp; 30 August 2026 · Hyderabad.
                </p>
              </div>
              <p style={{ fontSize: 11, color: 'rgba(245,240,235,0.45)', lineHeight: 1.6, paddingLeft: 26 }}>
                <span style={{ color: 'rgba(188,163,134,0.80)', fontWeight: 600 }}>Athletes:</span>{' '}
                <span style={{ color: '#FBBF24', fontWeight: 700 }}>50% off every single visit — permanently, on registration. No expiry. No time limit.</span>
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
