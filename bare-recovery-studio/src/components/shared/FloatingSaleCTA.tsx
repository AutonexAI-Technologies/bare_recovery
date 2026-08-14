'use client'

import { useState, useEffect } from 'react'
import { CONTACT_INFO } from '@/lib/constants'

const SALE_END = new Date('2026-08-31T23:59:59+05:30')

function useCountdown(target: Date) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return t
}

const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I want to book a session at the 50% launch sale price. Please confirm my slot.')}`

export default function FloatingSaleCTA() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const { d, h, m, s } = useCountdown(SALE_END)

  useEffect(() => {
    setMounted(true)
    const dismissed = sessionStorage.getItem('br_float_v1')
    if (dismissed) setVisible(false)
  }, [])

  if (!mounted || !visible) return null
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 20,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 8,
      }}
    >
      {/* Expanded card */}
      {expanded && (
        <div
          style={{
            background: '#111010',
            border: '1px solid rgba(251,191,36,0.35)',
            borderRadius: 20,
            padding: '20px',
            width: 260,
            boxShadow: '0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(251,191,36,0.12)',
            animation: 'floatCardIn 0.25s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Close */}
          <button
            onClick={() => { sessionStorage.setItem('br_float_v1', '1'); setVisible(false) }}
            style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)', fontSize: 16, lineHeight: 1 }}
          >×</button>

          <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 6 }}>
            🔥 Launch Sale
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 300, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: 4 }}>
            50% Off
          </p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, marginBottom: 16 }}>
            Every session. First-time visitors.<br />ICN athletes: always 50% off.
          </p>

          {/* Countdown */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 5, marginBottom: 16 }}>
            {[{ v: d, l: 'D' }, { v: h, l: 'H' }, { v: m, l: 'M' }, { v: s, l: 'S' }].map(({ v, l }) => (
              <div key={l} style={{ textAlign: 'center', background: 'rgba(251,191,36,0.08)', borderRadius: 10, padding: '8px 4px', border: '1px solid rgba(251,191,36,0.15)' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#FBBF24', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{pad(v)}</div>
                <div style={{ fontSize: 8, color: 'rgba(251,191,36,0.50)', letterSpacing: '0.12em', marginTop: 3 }}>{l}</div>
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
              color: '#111010', borderRadius: 12,
              padding: '12px 16px',
              fontSize: 12, fontWeight: 800, letterSpacing: '0.06em',
              textDecoration: 'none', width: '100%',
              boxShadow: '0 8px 24px rgba(245,158,11,0.35)',
              transition: 'transform 0.15s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
          >
            Book at 50% Off
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      )}

      {/* Toggle pill */}
      <button
        onClick={() => setExpanded(v => !v)}
        style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 60%, #FCD34D 100%)',
          border: 'none', borderRadius: 9999,
          padding: expanded ? '10px 18px' : '12px 20px',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(245,158,11,0.50), 0 2px 8px rgba(0,0,0,0.30)',
          animation: 'floatPulse 3s infinite ease-in-out',
          transition: 'all 0.2s ease',
        }}
      >
        <span style={{ fontSize: expanded ? 14 : 16 }}>🔥</span>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', color: '#111010', whiteSpace: 'nowrap' }}>
          {expanded ? 'Close' : '50% OFF — Book Now'}
        </span>
        {!expanded && (
          <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {[d, h, m].map((v, i) => (
              <span key={i} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(17,16,16,0.65)', fontVariantNumeric: 'tabular-nums' }}>
                {pad(v)}{i < 2 ? ':' : ''}
              </span>
            ))}
          </div>
        )}
      </button>

      <style>{`
        @keyframes floatPulse {
          0%, 100% { box-shadow: 0 8px 32px rgba(245,158,11,0.50), 0 2px 8px rgba(0,0,0,0.30); }
          50% { box-shadow: 0 12px 40px rgba(245,158,11,0.70), 0 2px 8px rgba(0,0,0,0.30); }
        }
        @keyframes floatCardIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}
