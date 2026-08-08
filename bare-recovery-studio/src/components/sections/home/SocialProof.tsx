'use client'

import FadeIn from '@/components/animations/FadeIn'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants'

const metrics = [
  { value: '6', label: 'Recovery Services', sub: 'All under one roof' },
  { value: '100%', label: 'Private', sub: 'Every session exclusive' },
  { value: '₹799+', label: 'Starts At', sub: 'No hidden fees' },
  { value: '4.9 ★', label: 'Member Rating', sub: 'Verified experiences' },
]

export default function SocialProof() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I would like to book a session at Bare Recovery Studio.')}`

  return (
    <section
      className="py-16 md:py-[120px] px-4 md:px-12"
      style={{ background: 'rgba(42,40,41,0.50)' }}
    >
      <div className="max-w-[1320px] mx-auto">

        {/* Heading */}
        <FadeIn direction="up">
          <div className="mb-14 md:mb-20">
            <span className="section-label">Proof</span>
            <div
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10"
              style={{ borderBottom: '1px solid rgba(196,193,196,0.07)' }}
            >
              <h2
                className="font-display text-[32px] md:text-[54px]"
                style={{ letterSpacing: '-0.025em', lineHeight: 1.05, color: '#f5f0eb' }}
              >
                Why Athletes<br />Choose Bare.
              </h2>
              <p className="text-sm max-w-xs" style={{ color: '#dddadd' }}>
                Trusted by powerlifters, marathon runners, cricketers, and everyday performers across Hyderabad.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Metrics row */}
        <FadeIn direction="up" delay={60}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="p-6 rounded-[20px]"
                style={{
                  background: 'rgba(86,84,86,0.35)',
                  border: '1px solid rgba(196,193,196,0.08)',
                }}
              >
                <p
                  className="font-display text-4xl md:text-5xl mb-2"
                  style={{ color: '#f5f0eb', letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  {m.value}
                </p>
                <p className="text-sm font-semibold mb-0.5" style={{ color: '#dddadd' }}>{m.label}</p>
                <p className="text-xs" style={{ color: '#dddadd' }}>{m.sub}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Two-col: Instagram link + CTA */}
        <FadeIn direction="up" delay={120}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Follow the founder */}
            <div
              className="p-8 rounded-[24px] flex flex-col justify-between"
              style={{
                background: 'rgba(61,59,61,0.65)',
                border: '1px solid rgba(196,193,196,0.08)',
              }}
            >
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.22em] font-medium mb-3" style={{ color: '#dddadd' }}>
                  Follow the Founder
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base" style={{ color: '#f5f0eb' }}>@abhinav._lifts</p>
                    <p className="text-xs" style={{ color: '#dddadd' }}>Performance coach · Founder</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#dddadd' }}>
                  Behind-the-scenes, recovery science breakdowns, and honest performance content. No fluff.
                </p>
              </div>
              <a
                href="https://www.instagram.com/abhinav._lifts/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  color: '#ffffff',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              >
                Follow on Instagram
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>

            {/* Book CTA */}
            <div
              className="p-8 rounded-[24px] flex flex-col justify-between relative overflow-hidden"
              style={{
                background: 'rgba(86,84,86,0.40)',
                border: '1px solid rgba(196,193,196,0.08)',
              }}
            >
              {/* BG texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(196,193,196,0.05) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              <div className="relative mb-8">
                <p className="text-xs uppercase tracking-[0.22em] font-medium mb-3" style={{ color: '#dddadd' }}>
                  Ready to Start?
                </p>
                <h3
                  className="font-display text-2xl md:text-3xl mb-3"
                  style={{ color: '#f5f0eb', letterSpacing: '-0.02em' }}
                >
                  Book your first session today.
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#dddadd' }}>
                  WhatsApp us directly — our coach will confirm your slot and recommend the right protocol for your goals.
                </p>
              </div>

              <div className="relative flex flex-col gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{ background: '#d9d1cc', color: '#3d3b3d' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#c4c1c4' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#d9d1cc' }}
                >
                  Book on WhatsApp
                </a>
                <a
                  href={SOCIAL_LINKS?.instagram ?? 'https://www.instagram.com/bare.recovery/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{ border: '1px solid rgba(196,193,196,0.14)', color: '#c4c1c4' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = '#f5f0eb'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,193,196,0.30)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = '#c4c1c4'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,193,196,0.14)'
                  }}
                >
                  Follow @bare.recovery
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
