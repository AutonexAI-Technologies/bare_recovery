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
    <div className="relative overflow-hidden py-4.5 border-t border-b border-white/[0.07]" style={{ background: 'rgba(0,0,0,0.35)' }}>
      <div
        className="flex gap-14 whitespace-nowrap"
        style={{ animation: 'marquee-right 32s linear infinite', width: 'max-content' }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-14 text-[13px] md:text-[15px] font-bold tracking-[0.25em] text-[#c9c6c5] uppercase">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5]/40 inline-block" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Aurora / Mesh animated background ── */
function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base image with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom,
              rgba(18,17,15,0.2) 0%,
              rgba(18,17,15,0.1) 30%,
              rgba(18,17,15,0.3) 60%,
              rgba(18,17,15,0.7) 85%,
              #12110F 100%
            ),
            url('/images/background/luxury-bg.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Aurora layer 1 — warm gold/bronze */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vh] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(188,163,134,0.12) 0%, rgba(188,163,134,0.04) 40%, transparent 70%)',
          animation: 'orb-pulse-1 14s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />

      {/* Aurora layer 2 — soft champagne */}
      <div
        className="absolute -top-[10%] -right-[15%] w-[70vw] h-[70vh] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(224,206,184,0.08) 0%, rgba(188,163,134,0.03) 40%, transparent 70%)',
          animation: 'orb-pulse-2 18s ease-in-out infinite',
          filter: 'blur(70px)',
        }}
      />

      {/* Aurora layer 3 — warm gold accent at bottom */}
      <div
        className="absolute bottom-[5%] left-1/3 w-[50vw] h-[40vh] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(188,163,134,0.06) 0%, transparent 60%)',
          animation: 'orb-pulse-3 22s ease-in-out infinite',
          filter: 'blur(50px)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'grid-fade 8s ease-in-out infinite',
        }}
      />

      {/* Animated scan line */}
      <div
        className="absolute inset-x-0 h-[1px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 70%, transparent 100%)',
          animation: 'scan-line 9s linear infinite',
          top: 0,
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 3 === 0 ? 2 : 1,
            height: i % 3 === 0 ? 2 : 1,
            background: i % 4 === 0 ? 'rgba(56,189,248,0.6)' : 'rgba(255,255,255,0.35)',
            left: `${8 + (i * 7.5) % 84}%`,
            bottom: `${10 + (i * 13) % 50}%`,
            animation: `particle-float ${6 + (i * 1.3) % 6}s ease-in-out ${(i * 0.7) % 5}s infinite`,
          }}
        />
      ))}

      {/* Vignette edges */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)',
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
            className="font-display text-[#F5F5F2] uppercase leading-none block"
            style={{
              fontSize: 'clamp(36px, 10vw, 140px)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              transform: mounted ? 'translateY(0) skewY(0)' : 'translateY(80px) skewY(3deg)',
              transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s',
              textShadow: '0 0 80px rgba(56,189,248,0.15)',
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
              color: 'rgba(245,245,242,0.28)',
              transform: mounted ? 'translateY(0) skewY(0)' : 'translateY(80px) skewY(3deg)',
              transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
          >
            Live Better.
          </h2>
        </div>

        {/* Subline */}
        <p
          className="text-[#8e9192] text-sm md:text-lg max-w-lg mx-auto leading-relaxed mb-8 md:mb-10 px-2 md:px-0"
          style={{
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
            className="group inline-flex items-center gap-3 bg-[#BCA386] text-[#12110F] pl-7 pr-2.5 py-3.5 rounded-full font-bold text-sm hover:bg-[#cbb499] transition-all duration-300 active:scale-[0.97] shadow-[0_8px_40px_rgba(188,163,134,0.18)]"
          >
            Book a Session
            <span className="w-8 h-8 rounded-full bg-[#12110F]/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#12110F" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
          <Link
            href="/services"
            id="hero-services-cta"
            className="inline-flex items-center gap-2 text-[#c9c6c5] text-sm font-semibold hover:text-[#F5F5F2] transition-colors duration-300 border border-white/15 px-6 py-3.5 rounded-full hover:border-white/30 hover:bg-white/5"
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
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="text-[#F5F5F2] text-[11px] md:text-xs font-bold">{stat.value}</span>
              <span className="text-[#8e9192] text-[11px] md:text-xs">{stat.label}</span>
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
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#8e9192]">Scroll</span>
          <div className="w-px h-8 overflow-hidden relative">
            <div
              className="absolute inset-x-0 h-1/2 bg-white/30 rounded-full"
              style={{ animation: 'slide-up 1.5s ease-in-out infinite' }}
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
