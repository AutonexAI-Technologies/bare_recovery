'use client'

import { founderInfo } from '@/data/founder'
import FadeIn from '@/components/animations/FadeIn'

export default function FounderStory() {
  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12 max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ── Left: Story copy ── */}
        <FadeIn direction="right">
          <span className="section-label">The Founder</span>
          <h2
            className="font-display text-[32px] md:text-[48px] mb-6"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f5f0eb' }}
          >
            Meet {founderInfo.name}
          </h2>

          <div className="space-y-4 text-[15px] leading-[1.80] mb-8" style={{ color: '#dddadd' }}>
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
              &ldquo;BE BORING. Consistency beats intensity every time.&rdquo;
            </p>
            <p className="text-xs mt-2" style={{ color: '#dddadd' }}>— {founderInfo.name}, Founder</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/abhinav._lifts/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{ background: '#d9d1cc', color: '#3d3b3d' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#c4c1c4' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#d9d1cc' }}
            >
              Instagram {founderInfo.instagram.handle}
            </a>
            <a
              href="https://youtube.com/@abhinavliftsvlogs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                border: '1px solid rgba(196,193,196,0.16)',
                color: '#c4c1c4',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#f5f0eb'
                  ; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,193,196,0.32)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = '#c4c1c4'
                  ; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,193,196,0.16)'
              }}
            >
              @abhinavliftsvlogs YouTube
            </a>
          </div>
        </FadeIn>

        {/* ── Right: Stats card ── */}
        <FadeIn direction="left" delay={120}>
          <div
            className="p-1.5 rounded-[2rem]"
            style={{
              background: 'rgba(86,84,86,0.20)',
              border: '1px solid rgba(196,193,196,0.08)',
            }}
          >
            <div
              className="rounded-[calc(2rem-0.375rem)] p-8"
              style={{ background: 'rgba(42,40,41,0.92)' }}
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
                Founder &amp; Performance Coach
              </span>

              {/* Stats grid — updated follower count */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                {/* Instagram */}
                <div
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: 'rgba(86,84,86,0.50)',
                    border: '1px solid rgba(196,193,196,0.07)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl" style={{ color: '#f5f0eb', letterSpacing: '-0.03em' }}>
                      85.3K
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: '#dddadd' }}>
                      Instagram Followers
                    </p>
                  </div>
                </div>

                {/* Coach */}
                <div
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: 'rgba(86,84,86,0.50)',
                    border: '1px solid rgba(196,193,196,0.07)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg"
                    style={{ background: 'rgba(61,59,61,0.80)', border: '1px solid rgba(196,193,196,0.10)' }}
                  >
                    🎯
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl" style={{ color: '#f5f0eb' }}>
                      Performance Coach
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: '#dddadd' }}>
                      Specialization
                    </p>
                  </div>
                </div>

                {/* Philosophy */}
                <div
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: 'rgba(86,84,86,0.50)',
                    border: '1px solid rgba(196,193,196,0.07)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg"
                    style={{ background: 'rgba(61,59,61,0.80)', border: '1px solid rgba(196,193,196,0.10)' }}
                  >
                    ✦
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl" style={{ color: '#f5f0eb' }}>
                      BE BORING
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: '#dddadd' }}>
                      Philosophy
                    </p>
                  </div>
                </div>
              </div>

              {/* Credential badges */}
              <div className="grid grid-cols-2 gap-2">
                {['Indians Abroad Creator', 'Science-Based Training', 'Active Coach', 'Studio Founder'].map((badge) => (
                  <div
                    key={badge}
                    className="px-3 py-2 rounded-xl text-[10px] font-medium text-center"
                    style={{
                      background: 'rgba(61,59,61,0.80)',
                      border: '1px solid rgba(196,193,196,0.06)',
                      color: '#c4c1c4',
                    }}
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
