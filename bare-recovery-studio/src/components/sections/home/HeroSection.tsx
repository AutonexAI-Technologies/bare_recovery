'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'

export default function HeroSection() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I would like to book a session at Bare Recovery Studio.')}`
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <header
      className="relative flex flex-col overflow-hidden hero-height"
    >

      {/* ══ DESKTOP background image ══ */}
      <img
        src="/images/background/hero-section-br.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 42%',
        }}
      />

      {/* ══ MOBILE background image — portrait photo, fills phone perfectly ══ */}
      <img
        src="/images/background/mobile-responsive.png"
        alt=""
        aria-hidden="true"
        className="md:hidden"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      />

      {/* ══ MOBILE overlay ══
          Very light at top → transparent in middle → dark at bottom
          Image dominates, text is bottom-anchored and readable */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(15,14,14,0.50) 0%,
              rgba(15,14,14,0.15) 20%,
              rgba(15,14,14,0.08) 40%,
              rgba(15,14,14,0.35) 60%,
              rgba(15,14,14,0.80) 78%,
              rgba(15,14,14,0.97) 100%
            )
          `,
        }}
      />

      {/* ══ DESKTOP overlay: left-panel only ══ */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: 'linear-gradient(to right, rgba(15,14,14,0.95) 0%, rgba(15,14,14,0.85) 30%, rgba(15,14,14,0.40) 52%, rgba(15,14,14,0.04) 70%, transparent 100%)',
        }}
      />

      {/* ══ Bottom page-blend (both) ══ */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '20%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(42,40,41,0.98) 100%)',
        }}
      />

      {/* ══ MOBILE layout: content bottom-anchored ══ */}
      <div className="md:hidden flex-1 flex flex-col justify-end relative z-10 px-5 pb-5">
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.7s ease 0.2s',
          }}
        >


          <div className="mb-2 overflow-hidden">
            <h1
              className="font-display uppercase leading-[0.88] block"
              style={{
                fontSize: 'clamp(40px, 12vw, 64px)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                color: '#f5f0eb',
                transform: mounted ? 'translateY(0) skewY(0)' : 'translateY(110px) skewY(4deg)',
                transition: 'transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.38s',
              }}
            >
              Recover
            </h1>
          </div>
          <div className="mb-2 overflow-hidden" style={{ background: 'transparent' }}>
            <h1
              className="font-display uppercase leading-[0.88] block"
              style={{
                fontSize: 'clamp(40px, 12vw, 64px)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                color: 'rgba(245,240,235,0.35)',
                transform: mounted ? 'translateY(0) skewY(0)' : 'translateY(110px) skewY(4deg)',
                transition: 'transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.52s',
                background: 'transparent',
              }}
            >
              Perform
            </h1>
          </div>
          <p
            className="mb-6"
            style={{
              fontSize: 13,
              lineHeight: 1.7,
              color: 'rgba(221,218,221,0.70)',
              maxWidth: 320,
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.8s ease 0.65s',
            }}
          >
            Hyderabad&apos;s first dedicated recovery studio. Science-backed protocols — Cold Plunge, Sauna, Red Light Therapy, Compression &amp; Contrast Therapy. Private sessions. Open 10 AM – 10:30 PM.
          </p>


          {/* CTAs row */}

          <div
            className="flex items-center gap-3 mb-5"
            style={{
              transform: mounted ? 'translateY(0)' : 'translateY(14px)',
              transition: 'transform 0.9s cubic-bezier(0.32,0.72,0,1) 0.76s',
            }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-book-cta-mobile"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm tracking-wide active:scale-[0.97] transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
                color: '#111010',
                boxShadow: '0 8px 32px rgba(245,158,11,0.40)',
              }}
            >
              Book at 50% Off →
            </a>
            <Link
              href="/services"
              id="hero-services-cta-mobile"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
              style={{
                color: '#c4c1c4',
                border: '1px solid rgba(196,193,196,0.25)',
                background: 'rgba(42,40,41,0.55)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              Services
            </Link>
          </div>

          {/* Stats — 2×2 grid on mobile */}
          <div
            className="grid grid-cols-2 gap-2"
            style={{
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.9s ease 0.96s',
            }}
          >
            {[
              { icon: '⚡', value: '6 Services' },
              { icon: '🔒', value: 'Private Sessions' },
              { icon: '🕐', value: '10 AM – 10:30 PM' },
              { icon: '📍', value: 'Kompally, Hyd' },
            ].map((stat) => (
              <div
                key={stat.value}
                className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                  background: 'rgba(20,19,19,0.65)',
                  border: '1px solid rgba(196,193,196,0.10)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <span className="text-sm flex-shrink-0">{stat.icon}</span>
                <span className="text-[11px] font-semibold truncate" style={{ color: '#dddadd' }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ DESKTOP layout: left-column center-aligned ══ */}
      <div className="hidden md:flex flex-1 items-center relative z-10 px-12 pb-20">
        <div
          className="max-w-[50vw]"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.6s ease 0.2s',
          }}
        >

          {/* Headline */}
          <div className="overflow-hidden mb-1">
            <h1
              className="font-display uppercase leading-[0.90]"
              style={{
                fontSize: 'clamp(48px, 6.5vw, 96px)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                color: '#f5f0eb',
                transform: mounted ? 'translateY(0) skewY(0)' : 'translateY(100px) skewY(3deg)',
                transition: 'transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.32s',
              }}
            >
              Recover
            </h1>
          </div>
          <div className="overflow-hidden mb-6" style={{ background: 'transparent' }}>
            <h1
              className="font-display uppercase leading-[0.90]"
              style={{
                fontSize: 'clamp(48px, 6.5vw, 96px)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                color: 'rgba(245,240,235,0.35)',
                transform: mounted ? 'translateY(0) skewY(0)' : 'translateY(100px) skewY(3deg)',
                transition: 'transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.46s',
                background: 'transparent',
              }}
            >
              Perform
            </h1>
          </div>

          {/* Premium sub-headline — desktop */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.8s ease 0.60s',
              marginBottom: 32,
            }}
          >
            <p style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(221,218,221,0.65)',
              maxWidth: 460,
            }}>
              Hyderabad&apos;s first dedicated recovery studio. Six science-backed protocols — designed for athletes, performers, and recovery-first individuals.
            </p>
            <p style={{
              fontSize: 13,
              lineHeight: 1.65,
              color: 'rgba(188,163,134,0.60)',
              maxWidth: 440,
              marginTop: 10,
              fontStyle: 'italic',
            }}>
              Private sessions · Open 10 AM – 10:30 PM · Kompally, Secunderabad
            </p>
          </div>

          <div
            className="flex items-center gap-3 mb-10"
            style={{
              transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transition: 'transform 0.9s cubic-bezier(0.32,0.72,0,1) 0.76s',
            }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-book-cta"
              className="group inline-flex items-center justify-center gap-3 pl-7 pr-3 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 active:scale-[0.97]"
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
                color: '#111010',
                boxShadow: '0 8px 40px rgba(245,158,11,0.40)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #D97706, #F59E0B)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #F59E0B, #FBBF24)' }}
            >
              Book at 50% Off
              <span className="w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300" style={{ background: 'rgba(61,59,61,0.16)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3d3b3d" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <Link
              href="/services"
              id="hero-services-cta"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300"
              style={{
                color: '#c4c1c4',
                border: '1px solid rgba(196,193,196,0.22)',
                background: 'rgba(42,40,41,0.50)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = '#f5f0eb'
                el.style.background = 'rgba(86,84,86,0.55)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = '#c4c1c4'
                el.style.background = 'rgba(42,40,41,0.50)'
              }}
            >
              Explore Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-2"
            style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.9s ease 0.95s' }}
          >
            {[
              { icon: '⚡', value: '6 Services' },
              { icon: '🔒', value: 'Private Sessions' },
              { icon: '🕐', value: '10 AM – 10:30 PM' },
              { icon: '📍', value: 'Kompally, Hyderabad' },
            ].map((stat) => (
              <div
                key={stat.value}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full"
                style={{
                  background: 'rgba(20,19,19,0.60)',
                  border: '1px solid rgba(196,193,196,0.12)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span className="text-sm">{stat.icon}</span>
                <span className="text-[11px] font-semibold" style={{ color: '#dddadd' }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ══ Service ticker ══ */}
      <div
        className="relative z-10"
        style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1s ease 1.1s' }}
      >
        <div
          className="overflow-hidden py-3"
          style={{
            borderTop: '1px solid rgba(196,193,196,0.07)',
            background: 'rgba(20,19,19,0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{ animation: 'marquee-left 34s linear infinite', width: 'max-content' }}
          >
            {[
              'COLD PLUNGE', 'CONTRAST THERAPY', 'TRADITIONAL SAUNA',
              'INFRARED SAUNA', 'RED LIGHT THERAPY', 'COMPRESSION THERAPY',
              'FULL CIRCUIT', 'OPEN 10AM–10:30PM',
              'COLD PLUNGE', 'CONTRAST THERAPY', 'TRADITIONAL SAUNA',
              'INFRARED SAUNA', 'RED LIGHT THERAPY', 'COMPRESSION THERAPY',
              'FULL CIRCUIT', 'OPEN 10AM–10:30PM',
            ].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-6 text-[10px] md:text-[11px] font-semibold tracking-[0.24em] uppercase px-6"
                style={{ color: '#c4c1c4' }}
              >
                {item}
                <span className="inline-block w-[3px] h-[3px] rounded-full flex-shrink-0" style={{ background: 'rgba(196,193,196,0.25)' }} />
              </span>
            ))}
          </div>
        </div>
      </div>

    </header>
  )
}
