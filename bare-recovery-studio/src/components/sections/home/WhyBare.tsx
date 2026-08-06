'use client'

import FadeIn from '@/components/animations/FadeIn'

const pillars = [
  {
    number: '01',
    title: 'Precision-Calibrated Sessions',
    body: 'Every protocol is timed to the physiological second — temperatures, durations, and sequences are evidence-based, not guesswork.',
    tag: 'Science-first',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Total Session Privacy',
    body: 'Limited occupancy per slot. No gym crowds, no shared sweat. Your 60 minutes belong entirely to you.',
    tag: 'Exclusive access',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Professional-Grade Equipment',
    body: 'Medical-grade PBM panels, cryo-filtered cold plunge, Finnish-built sauna, and Normatec-class compression. Nothing from a wellness catalogue.',
    tag: 'Elite hardware',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Coach-Designed Protocols',
    body: 'Abhinav, an active performance coach with 85K+ followers, built every recovery sequence from real athlete data — not spa tradition.',
    tag: 'Founder-led',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

export default function WhyBare() {
  return (
    <section
      className="py-16 md:py-[120px] px-4 md:px-12"
      style={{ background: 'rgba(42,40,41,0.50)' }}
    >
      <div className="max-w-[1320px] mx-auto">

        {/* Header */}
        <FadeIn direction="up">
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20 pb-10"
            style={{ borderBottom: '1px solid rgba(196,193,196,0.07)' }}
          >
            <div className="max-w-xl">
              <span className="section-label">The Difference</span>
              <h2
                className="font-display text-[36px] md:text-[60px]"
                style={{ letterSpacing: '-0.025em', lineHeight: 1.05, color: '#f5f0eb' }}
              >
                Why Bare<br />Stands Alone.
              </h2>
            </div>
            <p className="text-sm md:text-[15px] leading-[1.75] max-w-[300px]" style={{ color: '#8a878a' }}>
              There are gyms with recovery corners.<br />
              Then there is Bare — built exclusively for this.
            </p>
          </div>
        </FadeIn>

        {/* Rows */}
        <div style={{ borderTop: '1px solid rgba(196,193,196,0.06)' }}>
          {pillars.map((p, i) => (
            <FadeIn key={p.number} direction="up" delay={i * 70}>
              <div
                className="group grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr_180px] gap-6 md:gap-10 py-8 md:py-10 items-start transition-all duration-500 rounded-2xl px-3 -mx-3 cursor-default"
                style={{ borderBottom: '1px solid rgba(196,193,196,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(196,193,196,0.025)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
              >
                {/* Number */}
                <span
                  className="font-display text-[22px] pt-0.5 transition-colors duration-300"
                  style={{
                    letterSpacing: '-0.04em',
                    color: '#565456',
                  }}
                >
                  {p.number}
                </span>

                {/* Content */}
                <div>
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: 'rgba(86,84,86,0.55)',
                        border: '1px solid rgba(196,193,196,0.10)',
                        color: '#c4c1c4',
                      }}
                    >
                      {p.icon}
                    </div>
                    <h3
                      className="font-display text-[22px] md:text-[26px]"
                      style={{ letterSpacing: '-0.01em', lineHeight: 1.2, color: '#f5f0eb' }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-[15px] leading-[1.80] max-w-[560px]" style={{ color: '#8a878a' }}>
                    {p.body}
                  </p>
                </div>

                {/* Tag — desktop */}
                <div className="hidden md:flex items-start justify-end pt-1">
                  <span className="label-tag">{p.tag}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
