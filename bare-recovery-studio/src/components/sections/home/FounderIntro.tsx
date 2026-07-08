import Link from 'next/link'
import { founderInfo } from '@/data/founder'
import { ROUTES } from '@/lib/constants'
import FadeIn from '@/components/animations/FadeIn'

export default function FounderIntro() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Stats card */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Outer shell */}
              <div className="p-2 rounded-[2rem] bg-white/[0.01] border border-white/[0.05]">
                {/* Inner core */}
                <div className="rounded-[calc(2rem-0.5rem)] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]" style={{ background: 'rgba(27,25,22,0.85)' }}>
                  {/* Founder badge */}
                  <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 bg-[#BCA386]/10 border border-[#BCA386]/20 mb-6">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#BCA386]">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#BCA386] font-medium">
                      Founder
                    </span>
                  </div>

                  <h3 className="font-display text-3xl text-[#FFFBF5] mb-1">{founderInfo.name}</h3>
                  <p className="text-[#A19F97] text-sm mb-6">{founderInfo.role}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {founderInfo.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-3 rounded-2xl bg-[#12110F]/60 border border-white/[0.05]">
                        <p className="font-display text-xl text-[#FFFBF5] mb-0.5">{stat.value}</p>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#A19F97]/60 leading-tight">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Philosophy pill */}
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#12110F]/60 border border-white/[0.05]">
                    <div className="w-10 h-10 rounded-xl bg-[#BCA386]/15 flex items-center justify-center shrink-0">
                      <span className="text-lg">🎯</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#A19F97]/40 mb-0.5">Philosophy</p>
                      <p className="font-display text-[#FFFBF5] text-sm">&ldquo;{founderInfo.philosophy.tagline}&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Instagram badge */}
              <a
                href={founderInfo.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 -right-4 flex items-center gap-2.5 border border-white/10 rounded-full px-4 py-2.5 shadow-xl hover:border-white/25 transition-all duration-300" style={{ background: 'rgba(27,27,24,0.9)' }}
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#FFFBF5] text-xs font-semibold">{founderInfo.instagram.handle}</p>
                  <p className="text-[#A19F97]/60 text-[10px]">{founderInfo.instagram.followers} followers</p>
                </div>
              </a>
            </div>
          </FadeIn>

          {/* Right: Copy */}
          <FadeIn direction="left" delay={150}>
            <p className="text-xs uppercase tracking-[0.25em] text-[#BCA386] font-medium mb-4">Meet the Founder</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FFFBF5] leading-tight mb-6">
              Built by an athlete,<br />
              <span className="text-[#A19F97]/60">for athletes.</span>
            </h2>
            <div className="space-y-4 text-[#A19F97] leading-relaxed text-[15px]">
              {founderInfo.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href={ROUTES.about}
                className="inline-flex items-center gap-2.5 border border-white/10 text-[#FFFBF5] px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/5 hover:border-[#BCA386] hover:text-[#BCA386]"
              >
                Full Story
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </Link>
              <a
                href={founderInfo.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#A19F97] hover:text-[#BCA386] px-6 py-3.5 rounded-full font-semibold text-sm transition-colors duration-300"
              >
                Follow on Instagram
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
