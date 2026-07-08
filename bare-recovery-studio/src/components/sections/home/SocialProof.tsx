'use client'

import FadeIn from '@/components/animations/FadeIn'
import { SOCIAL_LINKS, STUDIO_ADDRESS } from '@/lib/constants'

export default function SocialProof() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A19F97] font-medium mb-3">Community & Proof</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FFFBF5] leading-tight mb-4">
            Real Impact. Real Recovery.
          </h2>
          <p className="text-[#A19F97] text-sm max-w-xl mx-auto">
            We hold ourselves to a standard of absolute transparency. No fake reviews, just our authentic community and verified rankings.
          </p>
        </FadeIn>



        {/* Instagram CTA */}
        <FadeIn>
          <div className="p-1.5 rounded-[2rem] bg-gradient-to-br from-pink-900/20 via-amber-900/10 to-transparent border border-white/[0.05]">
            <div className="rounded-[calc(2rem-0.375rem)] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]" style={{ background: 'rgba(27,27,24,0.85)' }}>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-600 via-pink-600 to-amber-700 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-[#A19F97] text-sm font-medium">Follow the studio</span>
                </div>
                <p className="font-display text-2xl md:text-3xl font-bold text-[#FFFBF5] mb-1">
                  @bare.recovery
                </p>
                <p className="text-[#A19F97]/60 text-sm">Behind-the-scenes, science tips &amp; community updates</p>
              </div>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="social-proof-instagram"
                className="shrink-0 inline-flex items-center gap-3 border border-white/10 text-[#FFFBF5] px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/5 hover:border-[#BCA386] hover:text-[#BCA386]"
              >
                Follow on Instagram
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
