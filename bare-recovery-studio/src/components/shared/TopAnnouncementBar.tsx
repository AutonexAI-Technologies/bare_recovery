'use client'

import { useEffect, useState } from 'react'
import { CONTACT_INFO } from '@/lib/constants'

const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I want to book at the 50% introductory launch rate.')}`

const messages = [
  '🔥 FOUNDING LAUNCH SALE — 50% OFF ALL SESSIONS',
  '◆ First-time visitors get 50% off every service',
  '🏆 ICN Hyderabad Deccan Uprising 2026 — 29 & 30 August 2026',
  '✔ ICN Athletes: 50% off every single visit on registration — valid through 7th Sep 2026. No expiry. No time limit.',
  '◆ Cold Plunge · Sauna · Red Light · Compression · Contrast Therapy · Full Circuit',
  '🔥 Bare Recovery Studio · Kompally, Secunderabad · Open 10 AM – 10:30 PM',
  '✦ Private Sessions · Walk-ins Welcome · Book via WhatsApp',
]

export default function TopAnnouncementBar() {
  const [clientMounted, setClientMounted] = useState(false)

  useEffect(() => {
    setClientMounted(true)
    document.documentElement.style.setProperty('--ann-bar-h', '56px')
  }, [])

  if (!clientMounted) return null

  const ticker = [...messages, ...messages]

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        zIndex: 200,
        background: 'linear-gradient(90deg, #78350f 0%, #92400e 15%, #b45309 35%, #d97706 60%, #F59E0B 82%, #FCD34D 100%)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Shimmer overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)', animation: 'annShimmer 2.8s infinite', pointerEvents: 'none' }} />

      {/* Infinite marquee — full width, no left pin */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'annMarquee 40s linear infinite',
            willChange: 'transform',
          }}
        >
          {ticker.map((msg, i) => (
            <span
              key={i}
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: '0.06em',
                color: '#111010',
                padding: '0 48px',
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              {msg}
              <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: 'rgba(17,16,16,0.28)', marginLeft: 10 }} />
            </span>
          ))}
        </div>
      </div>

      {/* Right pin: Book Now — hidden on mobile */}
      <div
        className="ann-book-btn"
        style={{
          flexShrink: 0,
          padding: '0 16px',
          borderLeft: '1px solid rgba(17,16,16,0.18)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(17,16,16,0.06)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: '#FBBF24',
            background: '#111010',
            padding: '7px 16px',
            borderRadius: 9999,
            textDecoration: 'none',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
          }}
        >
          Book Now →
        </a>
      </div>

      <style>{`
        @keyframes annShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes annMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 520px) {
          .ann-book-btn { display: none !important; }
        }
      `}</style>
    </div>
  )
}
