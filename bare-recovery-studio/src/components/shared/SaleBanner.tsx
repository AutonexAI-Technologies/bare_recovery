'use client'

import { useState, useEffect } from 'react'

const SALE_END = new Date('2026-08-31T23:59:59+05:30')
const BANNER_H = 38

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

export default function SaleBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { d, h, m, s } = useCountdown(SALE_END)

  useEffect(() => {
    setMounted(true)
    const dismissed = sessionStorage.getItem('br_banner_v2')
    if (!dismissed) {
      setVisible(true)
      document.documentElement.style.setProperty('--sale-banner-h', `${BANNER_H}px`)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem('br_banner_v2', '1')
    setVisible(false)
    document.documentElement.style.setProperty('--sale-banner-h', '0px')
  }

  if (!mounted || !visible) return null

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: BANNER_H,
        zIndex: 60,
        background: '#0f0e0e',
        borderBottom: '1px solid rgba(188,163,134,0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 8,
        gap: 8,
      }}
    >
      {/* Left: launch label */}
      <span style={{
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '0.26em',
        textTransform: 'uppercase',
        color: 'rgba(188,163,134,0.70)',
        flexShrink: 0,
        whiteSpace: 'nowrap',
      }}>
        Launch Offer
      </span>

      {/* Centre: scrolling message */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative', margin: '0 12px' }}>
        <div style={{
          display: 'flex',
          gap: '80px',
          animation: 'brTickerScroll 24s linear infinite',
          whiteSpace: 'nowrap',
          willChange: 'transform',
        }}>
          {[
            '50% Off All Sessions · First-Visit Introductory Rate',
            '✦ ICN Athletes: 50% Off Every Visit on Registration',
            '50% Off All Sessions · First-Visit Introductory Rate',
            '✦ ICN Athletes: 50% Off Every Visit on Registration',
          ].map((item, i) => (
            <span key={i} style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: 'rgba(245,240,235,0.80)',
              textTransform: 'uppercase',
              flexShrink: 0,
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Right: countdown + close */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {[{ v: d, l: 'd' }, { v: h, l: 'h' }, { v: m, l: 'm' }, { v: s, l: 's' }].map(({ v, l }, i) => (
            <span key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
              {i > 0 && <span style={{ fontSize: 9, color: 'rgba(188,163,134,0.35)', marginRight: 1 }}>:</span>}
              <span style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, color: '#f5f0eb', letterSpacing: '0.05em' }}>{pad(v)}</span>
              <span style={{ fontSize: 8, color: 'rgba(188,163,134,0.55)', letterSpacing: '0.06em' }}>{l}</span>
            </span>
          ))}
        </div>
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(196,193,196,0.45)', padding: '4px 6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f5f0eb' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(196,193,196,0.45)' }}
        >
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes brTickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
