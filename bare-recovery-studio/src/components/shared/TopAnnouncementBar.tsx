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
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [target])
  return t
}

export default function TopAnnouncementBar() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { d, h, m, s } = useCountdown(SALE_END)
  const pad = (n: number) => String(n).padStart(2, '0')

  useEffect(() => {
    setMounted(true)
    if (sessionStorage.getItem('br_ann_v2')) setVisible(false)
  }, [])

  // Emit a custom event so Navbar can adjust its top position
  useEffect(() => {
    if (mounted) {
      document.documentElement.style.setProperty('--ann-bar-h', visible ? '44px' : '0px')
    }
  }, [visible, mounted])

  if (!mounted || !visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 44,
        zIndex: 200,
        background: 'linear-gradient(90deg, #92400e 0%, #b45309 25%, #d97706 55%, #F59E0B 80%, #FCD34D 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
        overflow: 'hidden',
      }}
    >
      {/* Shimmer */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)', animation: 'annShimmer 2.5s infinite' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', paddingRight: 32 }}>
        <span style={{ fontSize: 16 }}>🔥</span>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#111010', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
          LAUNCH SALE — 50% OFF ALL SESSIONS
        </span>

        {/* Countdown chips */}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: 12, fontWeight: 800, fontFamily: 'monospace', color: '#111010', background: 'rgba(17,16,16,0.18)', borderRadius: 8, padding: '2px 10px' }}>
          {pad(d)}d {pad(h)}h {pad(m)}m {pad(s)}s
        </span>

        {/* Price pills - hidden on small mobile */}
        <span className="hidden md:flex items-center gap-1.5">
          {['₹1,199', '₹2,999', '₹799'].map((p, i) => (
            <span key={i} style={{ fontSize: 10, fontWeight: 700, color: '#111010', background: 'rgba(17,16,16,0.15)', borderRadius: 6, padding: '2px 8px', border: '1px solid rgba(17,16,16,0.12)' }}>{p}</span>
          ))}
        </span>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 11, fontWeight: 800, color: '#FBBF24', background: '#111010', padding: '5px 14px', borderRadius: 9999, textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap', boxShadow: '0 2px 10px rgba(0,0,0,0.25)' }}
        >
          Book Now →
        </a>
      </div>

      {/* Dismiss */}
      <button
        onClick={() => { sessionStorage.setItem('br_ann_v2', '1'); setVisible(false) }}
        style={{ position: 'absolute', right: 12, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(17,16,16,0.55)', fontSize: 16, lineHeight: 1, padding: 4 }}
      >×</button>

      <style>{`
        @keyframes annShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
