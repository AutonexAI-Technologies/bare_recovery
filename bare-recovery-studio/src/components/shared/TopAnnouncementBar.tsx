'use client'

import { useEffect, useState } from 'react'

const BAR_H = 48

const items = [
  '✦ 30% Off · All Sessions · Introductory Offer for New Customers',
  '◆ ICN Athletes: 50% Off Every Visit — Permanent Benefit on Registration',
  '✦ 30% Off · All Sessions · Introductory Offer for New Customers',
  '◆ ICN Athletes: 50% Off Every Visit — Permanent Benefit on Registration',
]

export default function TopAnnouncementBar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.style.setProperty('--ann-bar-h', `${BAR_H}px`)
  }, [])

  if (!mounted) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: BAR_H,
        zIndex: 200,
        background: '#111010',
        borderBottom: '1px solid rgba(196,193,196,0.14)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Scrolling ticker — full width */}
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'offerTicker 36s linear infinite',
            willChange: 'transform',
          }}
        >
          {items.map((msg, i) => (
            <span
              key={i}
              style={{
                fontSize: 'clamp(11px, 1.5vw, 13px)',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: i % 2 === 0
                  ? 'rgba(245,240,235,0.80)'
                  : '#FBBF24',
                padding: '0 60px',
                flexShrink: 0,
                display: 'inline-block',
                lineHeight: `${BAR_H}px`,
              }}
            >
              {msg}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes offerTicker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
