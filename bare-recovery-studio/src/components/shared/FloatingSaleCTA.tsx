'use client'

import { useState, useEffect } from 'react'
import { CONTACT_INFO } from '@/lib/constants'

const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a session at Bare Recovery Studio.")}`

export default function FloatingSaleCTA() {
  const [clientMounted, setClientMounted] = useState(false)

  useEffect(() => {
    setClientMounted(true)
  }, [])

  if (!clientMounted) return null

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 16,
        zIndex: 999,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: 'linear-gradient(135deg, #d9d1cc 0%, #f0eef0 100%)',
        color: '#1a1919',
        borderRadius: 9999,
        padding: '14px 24px',
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: '0.06em',
        textDecoration: 'none',
        boxShadow: '0 8px 36px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.20)',
        animation: 'floatPulse 3s infinite ease-in-out',
        whiteSpace: 'nowrap',
      }}
    >
      Book a Session
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>

      <style>{`
        @keyframes floatPulse {
          0%, 100% { box-shadow: 0 8px 36px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.20); }
          50% { box-shadow: 0 12px 48px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.20); }
        }
      `}</style>
    </a>
  )
}
