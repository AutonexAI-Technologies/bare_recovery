'use client'

import { useRef, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Competitive Powerlifter',
    text: 'After every heavy comp meet, Bare Recovery is my first stop. The contrast therapy + compression combo has my legs feeling fresh within 48 hours. Nothing else comes close.',
    rating: 5,
    service: 'Contrast Therapy',
    initials: 'AM',
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'Marathon Runner',
    text: 'The cold plunge was intimidating at first but the coaches eased me in perfectly. My post-race recovery has gone from 5 days to under 2. Absolutely game-changing.',
    rating: 5,
    service: 'Cold Plunge',
    initials: 'PN',
  },
  {
    id: 3,
    name: 'Rohit Sharma',
    role: 'CrossFit Athlete',
    text: 'Red light therapy here is unmatched. The photobiomodulation panels are medical-grade — not the cheap ones you see at spas. My sleep quality improved within a week.',
    rating: 5,
    service: 'Red Light Therapy',
    initials: 'RS',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Yoga Instructor',
    text: 'The traditional sauna session is deeply relaxing. The privacy is incredible — no crowds, no distractions. I come here every Sunday to reset my body and mind.',
    rating: 5,
    service: 'Traditional Sauna',
    initials: 'SR',
  },
  {
    id: 5,
    name: 'Kiran Patel',
    role: 'IPL Cricket Coach',
    text: 'I bring my players here during intense training camps. The Full Circuit protocol has noticeably reduced muscle soreness and improved next-day performance scores.',
    rating: 5,
    service: 'Full Circuit',
    initials: 'KP',
  },
  {
    id: 6,
    name: 'Divya Krishnan',
    role: 'Triathlete',
    text: 'The compression therapy sleeves are top-of-the-line. 30 minutes and my legs go from feeling like concrete to genuinely recovered. Worth every rupee.',
    rating: 5,
    service: 'Compression Therapy',
    initials: 'DK',
  },
  {
    id: 7,
    name: 'Manish Gupta',
    role: 'Bodybuilder',
    text: 'Abhinav personally designed my recovery protocol. The attention to detail here is extraordinary — temperatures, durations, all optimized for my training phase.',
    rating: 5,
    service: 'Full Circuit',
    initials: 'MG',
  },
  {
    id: 8,
    name: 'Lakshmi Rao',
    role: 'Fitness Influencer',
    text: "Kompally finally has a world-class recovery destination. I've been to similar studios in Dubai and Singapore — Bare Recovery holds up incredibly well against them.",
    rating: 5,
    service: 'Infrared Sauna',
    initials: 'LR',
  },
]

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
    <div
      className="testimonial-card shrink-0 w-[320px] md:w-[380px] p-6 mx-3 select-none"
    >
      {/* Service tag */}
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

      {/* Author */}
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
  const track1Ref = useRef<HTMLDivElement>(null)
  const track2Ref = useRef<HTMLDivElement>(null)

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
