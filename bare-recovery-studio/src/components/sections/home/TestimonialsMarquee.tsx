'use client'

import { useRef } from 'react'

// ─── Real testimonials will be added here once collected from clients ───
// Each entry: { id, name, role, text, rating, service, initials }
const testimonials: Array<{
  id: number
  name: string
  role: string
  text: string
  rating: number
  service: string
  initials: string
}> = []

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < rating ? '#d9d1cc' : 'none'} stroke="#d9d1cc" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card shrink-0 w-[320px] md:w-[380px] p-6 mx-3 select-none">
      <span
        className="inline-block mb-4 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.15em]"
        style={{
          background: 'rgba(217, 209, 204, 0.08)',
          border: '1px solid rgba(217, 209, 204, 0.15)',
          color: '#d9d1cc',
        }}
      >
        {t.service}
      </span>
      <StarRating rating={t.rating} />
      <p className="text-[14px] leading-[1.7] mb-5" style={{ color: '#dddadd' }}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(196, 193, 196, 0.10)' }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
          style={{
            background: 'linear-gradient(135deg, #c4c1c4 0%, #565456 100%)',
            color: '#f5f0eb',
            border: '1px solid rgba(196, 193, 196, 0.20)',
          }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: '#f5f0eb' }}>{t.name}</p>
          <p className="text-[11px]" style={{ color: '#dddadd' }}>{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsMarquee() {
  // If no testimonials yet, show an elegant "coming soon" block instead of fake data
  if (testimonials.length === 0) {
    return (
      <section
        className="py-16 md:py-[100px]"
        style={{ background: 'rgba(86, 84, 86, 0.35)' }}
      >
        <div className="container-custom text-center">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.25em] block mb-3"
            style={{ color: '#dddadd' }}
          >
            What Members Say
          </span>
          <h2
            className="font-display text-[30px] md:text-[50px] mb-4"
            style={{ color: '#f5f0eb', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Real Recoveries.
          </h2>
          <p className="text-sm max-w-sm mx-auto mb-10" style={{ color: '#a8a5a8' }}>
            We&apos;re just getting started — real member reviews coming soon.
          </p>

          {/* Placeholder card row */}
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { icon: '🧊', service: 'Cold Plunge' },
              { icon: '🔥', service: 'Traditional Sauna' },
              { icon: '💡', service: 'Red Light Therapy' },
            ].map((item) => (
              <div
                key={item.service}
                className="w-[280px] p-6 rounded-2xl text-left"
                style={{
                  background: 'rgba(42, 40, 41, 0.60)',
                  border: '1px solid rgba(196,193,196,0.08)',
                }}
              >
                <span
                  className="inline-block mb-4 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.15em]"
                  style={{
                    background: 'rgba(217, 209, 204, 0.08)',
                    border: '1px solid rgba(217, 209, 204, 0.15)',
                    color: '#d9d1cc',
                  }}
                >
                  {item.service}
                </span>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#d9d1cc" stroke="#d9d1cc" strokeWidth="1.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <div
                  className="h-14 rounded-lg mb-5"
                  style={{ background: 'rgba(196,193,196,0.06)', border: '1px dashed rgba(196,193,196,0.15)' }}
                />
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(196, 193, 196, 0.10)' }}>
                  <div
                    className="w-9 h-9 rounded-full"
                    style={{ background: 'rgba(196,193,196,0.12)', border: '1px dashed rgba(196,193,196,0.2)' }}
                  />
                  <div>
                    <div className="h-2.5 w-24 rounded-full mb-1.5" style={{ background: 'rgba(196,193,196,0.12)' }} />
                    <div className="h-2 w-16 rounded-full" style={{ background: 'rgba(196,193,196,0.08)' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] mt-8 uppercase tracking-[0.2em]" style={{ color: 'rgba(168,165,168,0.5)' }}>
            Be one of our first reviewers — book your session today
          </p>
        </div>
      </section>
    )
  }

  const half = Math.ceil(testimonials.length / 2)
  const row1 = testimonials.slice(0, half)
  const row2 = testimonials.slice(half)

  return (
    <section
      className="py-16 md:py-[100px] overflow-hidden"
      style={{ background: 'rgba(86, 84, 86, 0.35)' }}
    >
      <div className="container-custom mb-12 md:mb-16">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] block mb-3" style={{ color: '#dddadd' }}>
            What Members Say
          </span>
          <h2
            className="font-display text-[30px] md:text-[50px]"
            style={{ color: '#f5f0eb', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Real Recoveries.
          </h2>
          <p className="text-sm mt-3 max-w-md mx-auto" style={{ color: '#dddadd' }}>
            Every review is from a real member. No scripts, no incentives — just honest results.
          </p>
        </div>
      </div>

      {/* Row 1 — left scroll */}
      <div className="relative mb-4">
        <div
          className="flex"
          style={{ animation: 'marquee-left 40s linear infinite', width: 'max-content' }}
        >
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — right scroll */}
      <div className="relative">
        <div
          className="flex"
          style={{ animation: 'marquee-right 35s linear infinite', width: 'max-content' }}
        >
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div
        className="absolute left-0 inset-y-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #a8a5a8, transparent)', zIndex: 2 }}
      />
      <div
        className="absolute right-0 inset-y-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #a8a5a8, transparent)', zIndex: 2 }}
      />
    </section>
  )
}
