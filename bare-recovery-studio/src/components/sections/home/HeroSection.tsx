'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'

export default function HeroSection() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I would like to book a session at Bare Recovery Studio.')}`
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <header className="relative min-h-[100dvh] flex flex-col overflow-hidden">

      {/* ── Full-bleed photo — completely unobstructed ── */}
      <img
        src="/images/background/hero-section-br.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
        }}
      />

      {/* ── Left panel gradient — only darkens the left 55%, right side stays clear ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(15,14,14,0.93) 0%, rgba(15,14,14,0.82) 36%, rgba(15,14,14,0.45) 55%, rgba(15,14,14,0.05) 72%, transparent 100%)',
        }}
      />

      {/* ── Bottom page-blend ── */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '20%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(42,40,41,0.92) 100%)',
        }}
      />



      {/* ── Main content — left-aligned, lives only in the darker left zone ── */}
      <div className="flex-1 flex items-center relative z-10 px-6 md:px-12 pb-20">
        <div
          className="max-w-[580px] md:max-w-[48vw]"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.6s ease 0.18s',
          }}
        >



          {/* Headline */}
          <div className="overflow-hidden mb-1">
            <h1
              className="font-display uppercase leading-[0.90]"
              style={{
                fontSize: 'clamp(52px, 9vw, 130px)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                color: '#f5f0eb',
                transform: mounted ? 'translateY(0) skewY(0)' : 'translateY(100px) skewY(3deg)',
                transition: 'transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.32s',
                textShadow: '0 4px 30px rgba(0,0,0,0.50)',
              }}
            >
              Recover
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1
              className="font-display uppercase leading-[0.90]"
              style={{
                fontSize: 'clamp(52px, 9vw, 130px)',
                fontWeight: 300,
                letterSpacing: '-0.04em',
                color: 'rgba(245,240,235,0.40)',
                transform: mounted ? 'translateY(0) skewY(0)' : 'translateY(100px) skewY(3deg)',
                transition: 'transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.46s',
              }}
            >
              Perform.
            </h1>
          </div>

          {/* Descriptor */}
          <p
            className="text-[15px] md:text-[17px] leading-[1.70] mb-9"
            style={{
              color: '#a8a5a8',
              maxWidth: 400,
              transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transition: 'transform 0.9s cubic-bezier(0.32,0.72,0,1) 0.62s',
            }}
          >
            Cold plunge, contrast therapy, red light, sauna &amp; compression —
            science-backed recovery under one roof.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-start gap-3 mb-10"
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
                background: '#d9d1cc',
                color: '#3d3b3d',
                boxShadow: '0 8px 40px rgba(217,209,204,0.22)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#c4c1c4'
                el.style.boxShadow = '0 12px 48px rgba(217,209,204,0.32)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#d9d1cc'
                el.style.boxShadow = '0 8px 40px rgba(217,209,204,0.22)'
              }}
            >
              Book a Session
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5"
                style={{ background: 'rgba(61,59,61,0.16)' }}
              >
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
                background: 'rgba(42,40,41,0.45)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = '#f5f0eb'
                el.style.borderColor = 'rgba(196,193,196,0.45)'
                el.style.background = 'rgba(86,84,86,0.55)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = '#c4c1c4'
                el.style.borderColor = 'rgba(196,193,196,0.22)'
                el.style.background = 'rgba(42,40,41,0.45)'
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
            style={{
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.9s ease 0.95s',
            }}
          >
            {[
              { icon: '⚡', value: '6 Modalities' },
              { icon: '🔒', value: 'Private Sessions' },
              { icon: '🕐', value: '10 AM – 10:30 PM' },
              { icon: '₹', value: 'From ₹799' },
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
                <span className="text-[11px] font-semibold" style={{ color: '#c4c1c4' }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{
          opacity: mounted ? 0.55 : 0,
          transition: 'opacity 1s ease 1.3s',
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.35em]" style={{ color: '#6e6c6e' }}>
          Scroll
        </span>
        <div className="w-px h-8 overflow-hidden relative">
          <div
            className="absolute inset-x-0 h-1/2 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(196,193,196,0.50), transparent)',
              animation: 'slide-up-bar 1.6s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* ── Service ticker ── */}
      <div
        className="relative z-10"
        style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1s ease 1.1s' }}
      >
        <div
          className="overflow-hidden py-3.5"
          style={{
            borderTop: '1px solid rgba(196,193,196,0.07)',
            background: 'rgba(20,19,19,0.75)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{ animation: 'marquee-left 38s linear infinite', width: 'max-content' }}
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
                className="inline-flex items-center gap-8 text-[11px] font-semibold tracking-[0.28em] uppercase px-8"
                style={{ color: '#6e6c6e' }}
              >
                {item}
                <span
                  className="inline-block w-[3px] h-[3px] rounded-full"
                  style={{ background: 'rgba(196,193,196,0.25)' }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

    </header>
  )
}
