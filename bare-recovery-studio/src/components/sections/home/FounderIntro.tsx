'use client'

import Link from 'next/link'
import { founderInfo } from '@/data/founder'
import { ROUTES } from '@/lib/constants'
import FadeIn from '@/components/animations/FadeIn'

export default function FounderIntro() {
  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12 max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left: Profile card */}
        <FadeIn direction="right">
          <div
            className="p-1.5 rounded-[2rem]"
            style={{
              background: 'rgba(86,84,86,0.20)',
              border: '1px solid rgba(196,193,196,0.08)',
            }}
          >
            <div
              className="rounded-[calc(2rem-0.375rem)] p-8"
              style={{
                background: 'rgba(42,40,41,0.92)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Founder tag */}
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[10px] font-semibold uppercase tracking-[0.20em]"
                style={{
                  background: 'rgba(196,193,196,0.08)',
                  border: '1px solid rgba(196,193,196,0.14)',
                  color: '#c4c1c4',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/>
                </svg>
                Studio Founder
              </span>

              <h3
                className="font-display text-3xl mb-1"
                style={{ color: '#f5f0eb', letterSpacing: '-0.02em' }}
              >
                {founderInfo.name}
              </h3>
              <p className="text-sm mb-8" style={{ color: '#8a878a' }}>{founderInfo.role}</p>

              {/* Stats grid — no live counter */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {founderInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-[16px] text-center"
                    style={{
                      background: 'rgba(86,84,86,0.50)',
                      border: '1px solid rgba(196,193,196,0.07)',
                    }}
                  >
                    <p
                      className="font-display text-xl mb-1"
                      style={{ color: '#f5f0eb', letterSpacing: '-0.03em' }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[9px] uppercase tracking-[0.12em] leading-tight"
                      style={{ color: '#6e6c6e' }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Philosophy */}
              <div
                className="flex items-start gap-3 p-4 rounded-[16px]"
                style={{
                  background: 'rgba(86,84,86,0.40)',
                  border: '1px solid rgba(196,193,196,0.06)',
                }}
              >
                <span className="text-lg mt-0.5">🎯</span>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] mb-1" style={{ color: '#6e6c6e' }}>Philosophy</p>
                  <p className="font-display text-sm" style={{ color: '#f5f0eb' }}>
                    &ldquo;{founderInfo.philosophy?.tagline ?? 'Consistency beats intensity every time.'}&rdquo;
                  </p>
                </div>
              </div>

              {/* Credential badges */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {['Active Performance Coach', 'Indians Abroad Creator', 'Science-Based Training', 'BE BORING Philosophy'].map((badge) => (
                  <div
                    key={badge}
                    className="px-3 py-2 rounded-xl text-[10px] font-medium"
                    style={{
                      background: 'rgba(61,59,61,0.80)',
                      border: '1px solid rgba(196,193,196,0.06)',
                      color: '#8a878a',
                    }}
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right: Copy */}
        <FadeIn direction="left" delay={120}>
          <span className="section-label">The Founder</span>
          <h2
            className="font-display text-[32px] md:text-[48px] mb-6"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f5f0eb' }}
          >
            Built by an athlete,<br />
            <span style={{ color: '#6e6c6e' }}>for athletes.</span>
          </h2>

          <div className="space-y-4 text-[15px] leading-[1.80] mb-8" style={{ color: '#8a878a' }}>
            {founderInfo.bio.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Quote */}
          <div
            className="p-5 rounded-[20px] mb-8"
            style={{
              background: 'rgba(86,84,86,0.35)',
              border: '1px solid rgba(196,193,196,0.08)',
              borderLeft: '3px solid rgba(217,209,204,0.40)',
            }}
          >
            <p className="font-display text-lg" style={{ color: '#f5f0eb' }}>
              &ldquo;Consistency beats intensity every time. BE BORING.&rdquo;
            </p>
            <p className="text-xs mt-2" style={{ color: '#6e6c6e' }}>— {founderInfo.name}, Founder</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={ROUTES.about}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{ background: '#d9d1cc', color: '#3d3b3d' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#c4c1c4' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#d9d1cc' }}
            >
              Full Story
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://www.instagram.com/abhinav._lifts/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{ border: '1px solid rgba(196,193,196,0.16)', color: '#8a878a' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#f5f0eb'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,193,196,0.32)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = '#8a878a'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,193,196,0.16)'
              }}
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/@abhinavliftsvlogs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{ border: '1px solid rgba(196,193,196,0.16)', color: '#8a878a' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#f5f0eb'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,193,196,0.32)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = '#8a878a'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,193,196,0.16)'
              }}
            >
              YouTube
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
