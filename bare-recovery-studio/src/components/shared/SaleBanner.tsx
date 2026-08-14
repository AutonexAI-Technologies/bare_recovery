'use client'

import { useState, useEffect, useRef } from 'react'

const SALE_END = new Date('2026-08-31T23:59:59+05:30')
const STORAGE_KEY = 'br_sale_banner_dismissed'

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) { setTimeLeft({ d: 0, h: 0, m: 0, s: 0 }); return }
      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff % 86400000) / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTimeLeft({ d, h, m, s })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return timeLeft
}

export default function SaleBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { d, h, m, s } = useCountdown(SALE_END)

  useEffect(() => {
    setMounted(true)
    const dismissed = sessionStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!mounted || !visible) return null

  const pad = (n: number) => String(n).padStart(2, '0')

  const tickerItems = [
    '🔥 LAUNCH SALE — 50% OFF ALL SESSIONS',
    '✦ INTRODUCTORY OFFER FOR FIRST-TIME VISITORS',
    '🏆 ICN ATHLETES: 50% OFF EVERY VISIT ON REGISTRATION',
    '⚡ LIMITED PERIOD ONLY — ENDS 31 AUG 2026',
    '🔥 LAUNCH SALE — 50% OFF ALL SESSIONS',
    '✦ INTRODUCTORY OFFER FOR FIRST-TIME VISITORS',
    '🏆 ICN ATHLETES: 50% OFF EVERY VISIT ON REGISTRATION',
    '⚡ LIMITED PERIOD ONLY — ENDS 31 AUG 2026',
  ]

  return (
    <div
      id="sale-banner"
      style={{
        position: 'relative',
        width: '100%',
        zIndex: 100,
        background: 'linear-gradient(90deg, #7f1d1d 0%, #991b1b 20%, #b91c1c 50%, #c2410c 80%, #9a3412 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)',
          animation: 'bannerShimmer 3s infinite linear',
          pointerEvents: 'none',
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', height: '40px', position: 'relative' }}>
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 12, paddingRight: 10, borderRight: '1px solid rgba(255,255,255,0.18)', height: '100%' }}>
          <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.14em', color: '#fff', background: 'rgba(0,0,0,0.30)', padding: '3px 9px', borderRadius: 9999, whiteSpace: 'nowrap', textTransform: 'uppercase', animation: 'bannerPulse 2s infinite ease-in-out' }}>
            50% OFF
          </span>
        </div>
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '60px', animation: 'tickerScroll 28s linear infinite', whiteSpace: 'nowrap', willChange: 'transform' }}>
            {tickerItems.map((item, i) => (
              <span key={i} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.92)', textTransform: 'uppercase', flexShrink: 0 }}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4, paddingLeft: 10, paddingRight: 10, borderLeft: '1px solid rgba(255,255,255,0.18)', height: '100%' }}>
          {[{ val: d, label: 'd' }, { val: h, label: 'h' }, { val: m, label: 'm' }, { val: s, label: 's' }].map(({ val, label }, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {i > 0 && <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.50)', marginRight: 2 }}>:</span>}
              <span style={{ fontSize: 11, fontWeight: 800, color: '#fff', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.04em', minWidth: 16, textAlign: 'center' }}>
                {pad(val)}
              </span>
              <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em' }}>{label}</span>
            </div>
          ))}
        </div>
        <button onClick={dismiss} aria-label="Close sale banner" style={{ flexShrink: 0, width: 28, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.65)', borderLeft: '1px solid rgba(255,255,255,0.14)' }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      </div>
      <style>{`
        @keyframes tickerScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes bannerPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.75; } }
        @keyframes bannerShimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
      `}</style>
    </div>
  )
}
