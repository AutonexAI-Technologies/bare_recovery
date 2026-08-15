'use client'

import { useState, useEffect } from 'react'
import { CONTACT_INFO } from '@/lib/constants'

const SALE_END = new Date('2026-09-07T23:59:59+05:30')

function useCountdown(target: Date) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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
  return { ...t, mounted }
}

const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I want to book a session at the 50% launch sale price. Please confirm my slot.')}`

export default function FloatingSaleCTA() {
  const [clientMounted, setClientMounted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const { d, h, m, s, mounted: countdownMounted } = useCountdown(SALE_END)

  useEffect(() => {
    setClientMounted(true)
  }, [])

  if (!clientMounted) return null
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 16,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 10,
        maxWidth: 'calc(100vw - 32px)',
      }}
    >
      {/* Expanded card */}
      {expanded && (
        <div
          style={{
            background: '#111010',
            border: '1px solid rgba(251,191,36,0.35)',
            borderRadius: 24,
            padding: '24px 20px',
            width: 'min(300px, calc(100vw - 40px))',
            boxShadow: '0 24px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(251,191,36,0.12)',
            animation: 'floatCardIn 0.25s cubic-bezier(0.16,1,0.3,1)',
            position: 'relative',
          }}
        >
          <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 8 }}>
            🔥 Launch Sale — 50% Off
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 300, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: 6 }}>
            50% Off
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.50)', lineHeight: 1.6, marginBottom: 20 }}>
            Every session. First-time visitors get 50% off.<br />
            <span style={{ color: 'rgba(251,191,36,0.70)', fontWeight: 600 }}>ICN Athletes:</span> Always 50% off through Sep 7.
          </p>

          {/* Full countdown D:H:M:S */}
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(251,191,36,0.50)', marginBottom: 10 }}>
            Sale Ends In
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6, marginBottom: 20 }}>
            {[{ v: d, l: 'Days' }, { v: h, l: 'Hrs' }, { v: m, l: 'Min' }, { v: s, l: 'Sec' }].map(({ v, l }) => (
              <div key={l} style={{ textAlign: 'center', background: 'rgba(251,191,36,0.08)', borderRadius: 12, padding: '10px 4px', border: '1px solid rgba(251,191,36,0.18)' }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#FBBF24', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                  {countdownMounted ? pad(v) : '--'}
                </div>
                <div style={{ fontSize: 8, color: 'rgba(251,191,36,0.50)', letterSpacing: '0.10em', marginTop: 4, textTransform: 'uppercase' }}>{l}</div>
              </div>
            ))}
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
              color: '#111010', borderRadius: 14,
              padding: '14px 16px',
              fontSize: 13, fontWeight: 800, letterSpacing: '0.06em',
              textDecoration: 'none', width: '100%',
              boxShadow: '0 8px 24px rgba(245,158,11,0.40)',
              transition: 'transform 0.15s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
          >
            Book at 50% Off
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      )}

      {/* Toggle pill — bigger */}
      <button
        onClick={() => setExpanded(v => !v)}
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 60%, #FCD34D 100%)',
          border: 'none', borderRadius: 9999,
          padding: expanded ? '13px 22px' : '15px 24px',
          cursor: 'pointer',
          boxShadow: '0 8px 36px rgba(245,158,11,0.55), 0 2px 8px rgba(0,0,0,0.30)',
          animation: 'floatPulse 3s infinite ease-in-out',
          transition: 'all 0.2s ease',
        }}
      >
        <span style={{ fontSize: expanded ? 16 : 18 }}>🔥</span>
        <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.08em', color: '#111010', whiteSpace: 'nowrap' }}>
          {expanded ? 'Close' : '50% OFF — Book Now'}
        </span>
        {!expanded && countdownMounted && (
          <div style={{ display: 'flex', gap: 1, alignItems: 'center', background: 'rgba(17,16,16,0.12)', borderRadius: 8, padding: '3px 10px' }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: '#111010', fontVariantNumeric: 'tabular-nums' }}>
              {pad(h)}:{pad(m)}:{pad(s)}
            </span>
          </div>
        )}
      </button>

      <style>{`
        @keyframes floatPulse {
          0%, 100% { box-shadow: 0 8px 36px rgba(245,158,11,0.55), 0 2px 8px rgba(0,0,0,0.30); }
          50% { box-shadow: 0 12px 48px rgba(245,158,11,0.75), 0 2px 8px rgba(0,0,0,0.30); }
        }
        @keyframes floatCardIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}
