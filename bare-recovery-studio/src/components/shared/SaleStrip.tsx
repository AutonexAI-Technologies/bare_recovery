'use client'

import { useState, useEffect } from 'react'
import { CONTACT_INFO } from '@/lib/constants'

const SALE_END = new Date('2026-08-31T23:59:59+05:30')
const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I want to book at the 50% introductory launch rate.')}`

function useCountdown(target: Date) {
  const [t, setT] = useState({ d: 17, h: 0, m: 0, s: 0 })
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

export default function SaleStrip() {
  const { d, h, m, s } = useCountdown(SALE_END)
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #92400e 0%, #b45309 40%, #d97706 70%, #F59E0B 100%)',
        padding: '20px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Shimmer overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)', animation: 'saleShimmer 3s infinite' }} />

      <div className="max-w-[1320px] mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Left: big headline */}
          <div className="flex items-center gap-4 flex-wrap">
            <span style={{ fontSize: 28 }}>🔥</span>
            <div>
              <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(17,16,16,0.70)', lineHeight: 1, marginBottom: 2 }}>
                Introductory Launch Sale
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,4vw,36px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#111010', lineHeight: 1 }}>
                50% Off All Sessions
              </p>
            </div>
            {/* Price chips */}
            <div className="hidden sm:flex items-center gap-2 flex-wrap">
              {['Cold Plunge ₹1,199', 'Full Circuit ₹2,999', 'Red Light ₹799', 'Sauna ₹999'].map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 700, background: 'rgba(17,16,16,0.18)', color: '#111010', padding: '4px 12px', borderRadius: 9999, border: '1px solid rgba(17,16,16,0.15)', whiteSpace: 'nowrap' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: countdown + CTA */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Countdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {[{ v: d, l: 'D' }, { v: h, l: 'H' }, { v: m, l: 'M' }, { v: s, l: 'S' }].map(({ v, l }, i) => (
                <div key={l} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <span style={{ fontSize: 16, fontWeight: 700, color: 'rgba(17,16,16,0.50)', margin: '0 2px' }}>:</span>}
                  <div style={{ textAlign: 'center', background: 'rgba(17,16,16,0.15)', borderRadius: 8, padding: '4px 8px', minWidth: 40 }}>
                    <div style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 800, color: '#111010', lineHeight: 1 }}>{pad(v)}</div>
                    <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(17,16,16,0.55)', marginTop: 1 }}>{l}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#111010', color: '#FBBF24',
                padding: '12px 24px', borderRadius: 9999,
                fontSize: 13, fontWeight: 800, letterSpacing: '0.06em',
                textDecoration: 'none', whiteSpace: 'nowrap',
                boxShadow: '0 4px 20px rgba(0,0,0,0.30)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1a1919' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#111010' }}
            >
              Book at 50% Off →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes saleShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
