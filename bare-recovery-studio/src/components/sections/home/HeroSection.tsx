'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'

const TICKER_ITEMS = [
  'COLD PLUNGE',
  'CONTRAST THERAPY',
  'TRADITIONAL SAUNA',
  'INFRARED SAUNA',
  'RED LIGHT THERAPY',
  'COMPRESSION THERAPY',
  'FULL CIRCUIT',
  '10 AM – 10:30 PM EVERYDAY',
]

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="relative overflow-hidden py-4.5 border-t border-b" style={{ borderColor: 'rgba(217,209,204,0.10)', background: 'rgba(58,59,65,0.55)' }}>
      <div
        className="flex gap-14 whitespace-nowrap"
        style={{ animation: 'marquee-right 32s linear infinite', width: 'max-content' }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-14 text-[13px] md:text-[15px] font-bold tracking-[0.25em] uppercase" style={{ color: '#aeadab' }}>
            {item}
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'rgba(217,209,204,0.35)' }} />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Urban Concrete animated background ── */
function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base — deep twilight-to-shadow gradient, no external image */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              170deg,
              #3a3b41 0%,
              #494a51 30%,
              #5c5d65 60%,
              #686974 100%
            )
          `,
        }}
      />

      {/* Aurora layer 1 — limestone warm bloom, top-left */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vh] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(217,209,204,0.10) 0%, rgba(195,193,192,0.04) 40%, transparent 70%)',
          animation: 'orb-pulse-1 14s ease-in-out infinite',
          filter: 'blur(70px)',
        }}
      />

      {/* Aurora layer 2 — ash cool bloom, top-right */}
      <div
        className="absolute -top-[10%] -right-[15%] w-[70vw] h-[70vh] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(195,193,192,0.07) 0%, rgba(174,173,171,0.03) 40%, transparent 70%)',
          animation: 'orb-pulse-2 18s ease-in-out infinite',
          filter: 'blur(80px)',
        }}
      />

      {/* Aurora layer 3 — slate accent, bottom centre */}
      <div
        className="absolute bottom-[5%] left-1/3 w-[50vw] h-[40vh] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(174,173,171,0.06) 0%, transparent 60%)',
          animation: 'orb-pulse-3 22s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle concrete dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(217,209,204,0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          animation: 'grid-fade 8s ease-in-out infinite',
        }}
      />

      {/* Animated scan line — concrete shimmer */}
      <div
        className="absolute inset-x-0 h-[1px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(217,209,204,0.04) 30%, rgba(217,209,204,0.09) 50%, rgba(217,209,204,0.04) 70%, transparent 100%)',
          animation: 'scan-line 9s linear infinite',
          top: 0,
        }}
      />

      {/* Floating concrete dust particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width:  i % 3 === 0 ? 2 : 1,
            height: i % 3 === 0 ? 2 : 1,
            // Alternate between limestone, ash, and slate tones
            background: i % 4 === 0
              ? 'rgba(217,209,204,0.55)'  // limestone
              : i % 4 === 1
              ? 'rgba(195,193,192,0.45)'  // ash
              : i % 4 === 2
              ? 'rgba(174,173,171,0.40)'  // slate
              : 'rgba(138,135,138,0.30)', // steel
            left:   `${8 + (i * 7.5) % 84}%`,
            bottom: `${10 + (i * 13) % 50}%`,
            animation: `particle-float ${6 + (i * 1.3) % 6}s ease-in-out ${(i * 0.7) % 5}s infinite`,
          }}
        />
      ))}

      {/* Vignette edges — dark twilight corners */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(58,59,65,0.65) 100%)',
      }} />
    </div>
  )
}

export default function HeroSection() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I would like to book a session at Bare Recovery Studio.')}`
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <header className="relative min-h-[100dvh] overflow-hidden flex flex-col">
      <HeroBackground />

      {/* ── Hero body — vertically centered ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-12 text-center relative z-10 pt-16 md:pt-0">


        {/* ── Main headline ── */}
        <div
          className="overflow-hidden mb-4"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.01s ease 0.3s',
          }}
        >
          <h1
            className="font-display uppercase leading-none block"
            style={{
              fontSize: 'clamp(36px, 10vw, 140px)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              color: '#f5f0eb', /* cream */
              transform: mounted ? 'translateY(0) skewY(0)' : 'translateY(80px) skewY(3deg)',
              transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
              textShadow: '0 0 80px rgba(217,209,204,0.12)',
            }}
          >
            Recover Better.
          </h1>
        </div>

        <div
          className="overflow-hidden mb-10"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.01s ease 0.4s',
          }}
        >
          <h2
            className="font-display uppercase leading-none block"
            style={{
              fontSize: 'clamp(36px, 10vw, 140px)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              color: 'rgba(245,240,235,0.22)', /* faded cream */
              transform: mounted ? 'translateY(0) skewY(0)' : 'translateY(80px) skewY(3deg)',
              transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
          >
            Live Better.
          </h2>
        </div>

        {/* Subline */}
        <p
          className="text-sm md:text-lg max-w-lg mx-auto leading-relaxed mb-8 md:mb-10 px-2 md:px-0"
          style={{
            color: '#aeadab', /* slate */
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.7s, transform 0.8s cubic-bezier(0.32,0.72,0,1) 0.7s',
          }}
        >
          Kompally&apos;s first dedicated recovery studio. Cold plunge, contrast therapy, red light, sauna &amp; compression — all under one roof.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8 md:mb-12 w-full sm:w-auto"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.85s, transform 0.8s cubic-bezier(0.32,0.72,0,1) 0.85s',
          }}
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-book-cta"
            className="group inline-flex items-center gap-3 pl-7 pr-2.5 py-3.5 rounded-full font-bold text-sm transition-all duration-300 active:scale-[0.97]"
            style={{
              background: '#d9d1cc',           /* limestone */
              color: '#494a51',                /* twilight */
              boxShadow: '0 8px 40px rgba(217,209,204,0.15)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#c3c1c0' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#d9d1cc' }}
          >
            Book a Session
            <span className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px" style={{ background: 'rgba(73,74,81,0.14)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#494a51" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
          <Link
            href="/services"
            id="hero-services-cta"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 px-6 py-3.5 rounded-full"
            style={{
              color: '#aeadab',                          /* slate */
              border: '1px solid rgba(217,209,204,0.18)', /* limestone */
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#f5f0eb'
              el.style.borderColor = 'rgba(217,209,204,0.35)'
              el.style.background = 'rgba(217,209,204,0.06)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#aeadab'
              el.style.borderColor = 'rgba(217,209,204,0.18)'
              el.style.background = 'transparent'
            }}
          >
            Explore Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </Link>
        </div>

        {/* Stats pills */}
        <div
          className="flex flex-wrap justify-center gap-2 md:gap-3 px-2 md:px-0"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 1s',
          }}
        >
          {[
            { value: '6', label: 'Recovery Services' },
            { value: 'From ₹799', label: 'Per Session' },
            { value: '10AM–10:30PM', label: 'Everyday' },
            { value: 'Private', label: 'Studio' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full"
              style={{
                background: 'rgba(217,209,204,0.07)',       /* limestone tint */
                border: '1px solid rgba(217,209,204,0.12)', /* limestone border */
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="text-[11px] md:text-xs font-bold" style={{ color: '#f5f0eb' }}>{stat.value}</span>
              <span className="text-[11px] md:text-xs" style={{ color: '#aeadab' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="flex justify-center pb-6 relative z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease 1.2s',
        }}
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: '#8a878a' }}>Scroll</span>
          <div className="w-px h-8 overflow-hidden relative">
            <div
              className="absolute inset-x-0 h-1/2 rounded-full"
              style={{ background: 'rgba(217,209,204,0.25)', animation: 'slide-up 1.5s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>

      {/* ── Ticker ── */}
      <div
        className="relative z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease 1.1s',
        }}
      >
        <Ticker />
      </div>
    </header>
  )
}
