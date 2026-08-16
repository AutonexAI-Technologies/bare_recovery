'use client'

import { useState } from 'react'
import FadeIn from '@/components/animations/FadeIn'

const steps = [
  {
    num: '01',
    title: 'Book',
    headline: 'Zero friction booking',
    desc: 'Message us on WhatsApp or walk in. No app, no waitlist — pick your slot and you\'re confirmed in under 2 minutes.',
    icon: '📲',
    duration: '2 minutes',
  },
  {
    num: '02',
    title: 'Assess',
    headline: 'Recovery diagnosis',
    desc: 'Our coach evaluates your current training load, fatigue markers, and goals to prescribe the optimal recovery stack for your session.',
    icon: '🎯',
    duration: '5 minutes',
  },
  {
    num: '03',
    title: 'Execute',
    headline: 'Guided protocol',
    desc: 'Step through your custom sequence — Full Circuit, Contrast, or single service. Every temperature, duration, and transition is coached.',
    icon: '⚡',
    duration: '20–60 minutes',
  },
  {
    num: '04',
    title: 'Restore',
    headline: 'Complete reset',
    desc: 'Leave the studio physiologically younger. Reduced inflammation, flushed metabolic waste, and elevated neurotransmitters — for hours.',
    icon: '✦',
    duration: 'Long-lasting',
  },
]

export default function HowItWorks() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12 max-w-[1320px] mx-auto overflow-hidden">

      <FadeIn direction="up">
        <div className="text-center mb-14 md:mb-20">
          <span className="section-label">The Process</span>
          <h2
            className="font-display text-[30px] md:text-[52px]"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f5f0eb' }}
          >
            Your Path to Recovery
          </h2>
        </div>
      </FadeIn>

      {/* Steps grid — equal height cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative">



        {steps.map((step, i) => (
          <FadeIn key={step.num} direction="up" delay={i * 80}>
            <div
              className="relative flex flex-col p-6 md:p-7 rounded-2xl transition-all duration-400 cursor-default h-full"
              style={{
                background: hovered === i ? 'rgba(86,84,86,0.45)' : 'rgba(42,40,41,0.60)',
                border: hovered === i ? '1px solid rgba(245,240,235,0.18)' : '1px solid rgba(196,193,196,0.08)',
                boxShadow: hovered === i ? '0 8px 32px rgba(0,0,0,0.30)' : 'none',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                minHeight: 300,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >

              {/* Top row: icon + step label */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: 'rgba(61,59,61,0.90)',
                    border: '1px solid rgba(196,193,196,0.16)',
                    boxShadow: hovered === i ? '0 0 16px rgba(245,158,11,0.15)' : 'none',
                    transition: 'box-shadow 0.3s ease',
                  }}
                >
                  {step.icon}
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: hovered === i ? '#FBBF24' : 'rgba(245,240,235,0.50)', transition: 'color 0.3s ease' }}
                >
                  Step {step.num}
                </span>
              </div>

              {/* Headline */}
              <h3
                className="font-display text-lg md:text-xl mb-3"
                style={{ color: '#f5f0eb', letterSpacing: '-0.01em', lineHeight: 1.25 }}
              >
                {step.headline}
              </h3>

              {/* Description — bright and readable */}
              <p
                className="text-sm leading-[1.8] flex-1 mb-5"
                style={{ color: 'rgba(245,240,235,0.78)' }}
              >
                {step.desc}
              </p>

              {/* Duration pill — always at bottom */}
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full self-start"
                style={{
                  background: hovered === i ? 'rgba(245,158,11,0.12)' : 'rgba(86,84,86,0.50)',
                  border: hovered === i ? '1px solid rgba(245,158,11,0.25)' : '1px solid rgba(196,193,196,0.10)',
                  color: hovered === i ? '#FBBF24' : 'rgba(245,240,235,0.70)',
                  transition: 'all 0.3s ease',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {step.duration}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
