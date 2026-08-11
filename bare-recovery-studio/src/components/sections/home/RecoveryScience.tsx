'use client'

import { useEffect, useRef, useState } from 'react'
import FadeIn from '@/components/animations/FadeIn'

const scienceCards = [
  {
    id: 'cold',
    icon: '❄️',
    label: 'Cold Exposure',
    headline: 'Reduce Inflammation',
    stat: '47%',
    statLabel: 'reduction in DOMS',
    description:
      'Cold immersion triggers vasoconstriction, flushing metabolic waste and dramatically reducing post-exercise muscle damage.',
    color: 'rgba(110, 150, 190, 0.15)',
    borderColor: 'rgba(110, 150, 190, 0.20)',
    highlight: 'rgba(110, 150, 190, 0.25)',
    span: 'col-span-1',
    studies: '14 peer-reviewed studies',
  },
  {
    id: 'heat',
    icon: '🔥',
    label: 'Thermal Therapy',
    headline: 'Accelerate Repair',
    stat: '2x',
    statLabel: 'faster muscle recovery',
    description:
      'Heat shock proteins triggered by sauna sessions enhance cellular repair mechanisms, reducing recovery time by up to 50%.',
    color: 'rgba(190, 130, 80, 0.15)',
    borderColor: 'rgba(190, 130, 80, 0.20)',
    highlight: 'rgba(190, 130, 80, 0.25)',
    span: 'col-span-1',
    studies: '22 peer-reviewed studies',
  },
  {
    id: 'light',
    icon: '💡',
    label: 'Photobiomodulation',
    headline: 'Cellular Energy',
    stat: '68%',
    statLabel: 'improvement in ATP production',
    description:
      'Near-infrared light at 850nm penetrates deep tissue, stimulating mitochondrial function and accelerating cellular recovery.',
    color: 'rgba(180, 100, 100, 0.12)',
    borderColor: 'rgba(180, 100, 100, 0.18)',
    highlight: 'rgba(180, 100, 100, 0.22)',
    span: 'col-span-1',
    studies: '31 peer-reviewed studies',
  },
  {
    id: 'compression',
    icon: '⚡',
    label: 'Compression',
    headline: 'Flush & Restore',
    stat: '3x',
    statLabel: 'lymphatic drainage rate',
    description:
      'Sequential pneumatic compression mimics the muscle pump action, clearing lactic acid and restoring circulation at 3x the natural rate.',
    color: 'rgba(140, 190, 140, 0.12)',
    borderColor: 'rgba(140, 190, 140, 0.18)',
    highlight: 'rgba(140, 190, 140, 0.22)',
    span: 'col-span-1',
    studies: '18 peer-reviewed studies',
  },
]

function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className="font-display block"
      style={{
        fontSize: 'clamp(44px, 6vw, 72px)',
        fontWeight: 300,
        letterSpacing: '-0.04em',
        color: '#f5f0eb',
        lineHeight: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {value}
    </span>
  )
}

export default function RecoveryScience() {
  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12">
      <div className="max-w-[1320px] mx-auto">

        <FadeIn direction="up">
          <div className="text-center mb-14 md:mb-20">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] block mb-3" style={{ color: '#dddadd' }}>
              The Science
            </span>
            <h2
              className="font-display text-[30px] md:text-[54px]"
              style={{ color: '#f5f0eb', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Evidence-based Recovery.<br />
              <span style={{ color: '#dddadd' }}>Not a wellness trend.</span>
            </h2>
            <p className="text-sm mt-4 max-w-lg mx-auto" style={{ color: '#dddadd' }}>
              Every service at Bare Recovery is supported by peer-reviewed research and used by elite sports teams worldwide.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {scienceCards.map((card, i) => (
            <FadeIn key={card.id} direction="up" delay={i * 80}>
              <div
                className="science-card p-5 md:p-10 group cursor-default"
                style={{
                  background: `rgba(86, 84, 86, 0.50)`,
                  border: `1px solid ${card.borderColor}`,
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-5 md:mb-8">
                  <div>
                    <span
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] mb-4"
                      style={{
                        background: card.color,
                        border: `1px solid ${card.borderColor}`,
                        color: '#c4c1c4',
                      }}
                    >
                      <span>{card.icon}</span>
                      {card.label}
                    </span>
                    <h3
                      className="font-display text-xl"
                      style={{ color: '#f5f0eb', letterSpacing: '-0.01em' }}
                    >
                      {card.headline}
                    </h3>
                  </div>
                  {/* Stat */}
                  <div className="text-right">
                    <AnimatedStat value={card.stat} />
                    <span className="text-[11px] leading-tight block mt-1 text-right" style={{ color: '#c4c1c4', maxWidth: 100 }}>
                      {card.statLabel}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-[1.75] mb-6" style={{ color: '#dddadd' }}>
                  {card.description}
                </p>

                {/* Progress bar (visual) */}
                <div className="mb-5">
                  <div
                    className="h-[3px] rounded-full overflow-hidden"
                    style={{ background: 'rgba(196, 193, 196, 0.10)' }}
                  >
                    <div
                      className="h-full rounded-full group-hover:w-full transition-all duration-1000"
                      style={{
                        background: `linear-gradient(90deg, ${card.highlight}, rgba(217, 209, 204, 0.4))`,
                        width: '72%',
                        transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1)',
                      }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: '#dddadd' }}>
                  Supported by {card.studies}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom bar */}
        <FadeIn direction="up" delay={320}>
          <a
            href="https://wa.me/917670861496?text=Hi!%20I'd%20like%20to%20book%20the%20Full%20Circuit%20session%20at%20Bare%20Recovery%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 p-6 md:p-8 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300"
            style={{
              background: 'rgba(61, 59, 61, 0.60)',
              border: '1px solid rgba(196, 193, 196, 0.08)',
              display: 'flex',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(86, 84, 86, 0.70)'
              el.style.borderColor = 'rgba(196, 193, 196, 0.18)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(61, 59, 61, 0.60)'
              el.style.borderColor = 'rgba(196, 193, 196, 0.08)'
            }}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: '#dddadd' }}>Combined Protocol</p>
              <p className="font-display text-xl md:text-2xl" style={{ color: '#f5f0eb', letterSpacing: '-0.02em' }}>
                Full Circuit = Maximum Recovery Velocity
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {['❄️', '🔥', '💡', '⚡'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{
                    background: 'rgba(138, 135, 138, 0.20)',
                    border: '1px solid rgba(196, 193, 196, 0.15)',
                  }}
                >
                  {emoji}
                </div>
              ))}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  background: '#d9d1cc',
                  color: '#3d3b3d',
                  boxShadow: '0 4px 16px rgba(217,209,204,0.18)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
