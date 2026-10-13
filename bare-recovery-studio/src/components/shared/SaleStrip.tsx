'use client'

import { CONTACT_INFO } from '@/lib/constants'

const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a session at Bare Recovery Studio.")}`

export default function SaleStrip() {

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)',
        padding: '20px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Shimmer overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)', animation: 'saleShimmer 3s infinite' }} />

      <div className="max-w-[1320px] mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Left: big headline */}
          <div className="flex items-center gap-4 flex-wrap">
            <span style={{ fontSize: 28 }}>🏆</span>
            <div>
              <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(245,240,235,0.55)', lineHeight: 1, marginBottom: 2 }}>
                Athletes
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,4vw,36px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#f5f0eb', lineHeight: 1 }}>
                50% Off Every Visit
              </p>
            </div>
            {/* Info chips */}
            <div className="hidden sm:flex items-center gap-2 flex-wrap">
              {['Permanent Benefit', 'No Expiry', 'On Registration', 'Show Card at Studio'].map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 700, background: 'rgba(245,240,235,0.12)', color: 'rgba(245,240,235,0.80)', padding: '4px 12px', borderRadius: 9999, border: '1px solid rgba(245,240,235,0.15)', whiteSpace: 'nowrap' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#f5f0eb', color: '#111010',
                padding: '12px 24px', borderRadius: 9999,
                fontSize: 13, fontWeight: 800, letterSpacing: '0.06em',
                textDecoration: 'none', whiteSpace: 'nowrap',
                boxShadow: '0 4px 20px rgba(0,0,0,0.30)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e5e0db' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f5f0eb' }}
            >
              Claim Athlete Discount →
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
