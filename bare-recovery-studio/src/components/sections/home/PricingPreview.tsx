'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import FadeIn from '@/components/animations/FadeIn'
import { CONTACT_INFO } from '@/lib/constants'

const SALE_END = new Date('2026-08-31T23:59:59+05:30')
function useCountdown(target: Date) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) })
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [target])
  return t
}

const highlights = [
  {
    id: 'single',
    label: 'Single Session',
    mrpFrom: '₹1,598',
    priceFrom: '₹799',
    period: '/ session',
    description: 'Perfect for first-timers. Pick any one service.',
    features: [
      '1 service of your choice',
      'Guided 30–40 min session',
      'Private access — no crowds',
      'Coach consultation included',
    ],
    cta: 'Book Now',
    featured: false,
  },
  {
    id: 'full-circuit',
    label: 'Full Circuit',
    mrpFrom: '₹5,998',
    priceFrom: '₹2,999',
    period: '/ session',
    description: 'All 6 recovery services. The complete stack. Maximum results.',
    features: [
      'All 6 services, curated sequence',
      '60–90 min guided session',
      'Performance coach assessment',
      'Protocol designed for your goals',
      'Post-session debrief included',
    ],
    cta: 'Book Full Circuit',
    featured: true,
    badge: 'Most Effective',
  },
  {
    id: 'membership',
    label: 'Monthly Membership',
    mrpFrom: '₹17,998',
    priceFrom: '₹8,999',
    period: '/ month',
    description: 'Built for serious athletes and consistent performers.',
    features: [
      '5 Full Circuit sessions',
      'Priority booking every week',
      '1 Bring-a-Friend guest pass',
      'Member-only recovery plans',
    ],
    cta: 'Join Now',
    featured: false,
  },
]

function CountdownWidget() {
  const { d, h, m, s } = useCountdown(SALE_END)
  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-medium" style={{ color: 'rgba(252,165,165,0.75)' }}>Sale ends in</span>
      {[{ v: d, l: 'Days' }, { v: h, l: 'Hrs' }, { v: m, l: 'Min' }, { v: s, l: 'Sec' }].map(({ v, l }, i) => (
        <div key={l} className="flex items-center gap-1">
          {i > 0 && <span style={{ color: 'rgba(252,165,165,0.40)', fontSize: 12 }}>:</span>}
          <div className="flex flex-col items-center px-2 py-1.5 rounded-xl" style={{ background: 'rgba(0,0,0,0.35)', minWidth: 40 }}>
            <span className="font-mono font-black text-lg leading-none" style={{ color: '#fff' }}>{pad(v)}</span>
            <span className="text-[8px] leading-none mt-1 uppercase tracking-wider" style={{ color: 'rgba(252,165,165,0.60)' }}>{l}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function PricingPreview() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I would like to book a session at Bare Recovery Studio.')}`

  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12" style={{ background: 'rgba(42,40,41,0.55)' }}>
      <div className="max-w-[1320px] mx-auto">

        <FadeIn direction="up">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Investment</span>
            <h2 className="font-display text-[32px] md:text-[52px] mb-3" style={{ letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f5f0eb' }}>
              Pricing
            </h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: '#dddadd' }}>
              No subscriptions required. No hidden fees. Walk in, recover, leave better.
            </p>
          </div>
        </FadeIn>

        {/* Sale Hero Banner */}
        <FadeIn direction="up" delay={60}>
          <div className="relative mb-10 p-6 md:p-8 rounded-[24px] overflow-hidden" style={{ background: 'linear-gradient(135deg,rgba(127,29,29,0.70) 0%,rgba(154,52,18,0.65) 50%,rgba(120,53,15,0.60) 100%)', border: '1px solid rgba(220,38,38,0.35)' }}>
            {/* Shimmer */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.05) 50%,transparent 60%)', animation: 'bannerShimmer 4s infinite linear', pointerEvents: 'none' }} />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔥</span>
                  <span className="font-black text-2xl md:text-3xl uppercase tracking-tight" style={{ color: '#fff', letterSpacing: '-0.02em' }}>50% OFF</span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ background: 'rgba(255,255,255,0.12)', color: '#fca5a5', border: '1px solid rgba(252,165,165,0.25)' }}>Launch Sale</span>
                </div>
                <p className="text-sm md:text-base font-medium" style={{ color: 'rgba(252,165,165,0.85)' }}>
                  Introductory offer for first-time visitors · ICN Athletes get 50% off <em>every</em> visit
                </p>
              </div>
              <CountdownWidget />
            </div>
            <style>{`@keyframes bannerShimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }`}</style>
          </div>
        </FadeIn>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((plan, i) => (
            <FadeIn key={plan.id} direction="up" delay={i * 80}>
              <div className="relative flex flex-col h-full p-8 rounded-[24px] transition-all duration-500"
                style={plan.featured ? { background: 'rgba(61,59,61,0.92)', border: '1px solid rgba(217,209,204,0.20)', boxShadow: '0 32px 80px rgba(42,40,41,0.60)' } : { background: 'rgba(86,84,86,0.35)', border: '1px solid rgba(196,193,196,0.08)' }}>
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full" style={{ background: '#d9d1cc', color: '#3d3b3d' }}>
                    {plan.badge}
                  </span>
                )}
                {/* 50% OFF ribbon top-right */}
                <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: 'linear-gradient(90deg,#dc2626,#ea580c)', color: '#fff', boxShadow: '0 0 10px rgba(220,38,38,0.40)' }}>
                  50% OFF
                </span>

                <span className="section-label mb-1">{plan.label}</span>

                {/* Price block */}
                <div className="mb-2">
                  <span className="block text-sm font-medium line-through mb-0.5" style={{ color: 'rgba(245,240,235,0.45)', letterSpacing: '-0.01em' }}>
                    from {plan.mrpFrom}
                  </span>
                  <div className="flex items-end gap-1.5">
                    <span className="font-display" style={{ fontSize: 'clamp(36px,6vw,56px)', fontWeight: 300, letterSpacing: '-0.04em', color: '#f5f0eb', lineHeight: 1 }}>
                      {plan.priceFrom}
                    </span>
                    <span className="text-sm mb-1.5" style={{ color: '#dddadd' }}>{plan.period}</span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: '#dddadd' }}>{plan.description}</p>
                <div className="mb-6" style={{ height: 1, background: 'rgba(196,193,196,0.07)' }} />
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: '#dddadd' }}>
                      <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={plan.featured ? '#d9d1cc' : '#a8a5a8'} strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.97]"
                  style={plan.featured ? { background: '#d9d1cc', color: '#3d3b3d', boxShadow: '0 8px 32px rgba(217,209,204,0.18)' } : { border: '1px solid rgba(196,193,196,0.16)', color: '#c4c1c4', background: 'transparent' }}>
                  {plan.cta}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ICN callout */}
        <FadeIn direction="up" delay={320}>
          <div className="mt-8 p-5 rounded-2xl flex items-start gap-4" style={{ background: 'linear-gradient(135deg,rgba(120,83,7,0.30),rgba(146,64,14,0.25))', border: '1px solid rgba(234,179,8,0.25)' }}>
            <span className="text-xl shrink-0">🏆</span>
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="font-bold text-sm" style={{ color: '#fde68a' }}>ICN Athletes — 50% Off Every Visit</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(253,230,138,0.70)' }}>Show your registration card at the studio. No time limit. Always active.</p>
              </div>
              <Link href="/pricing" className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all hover:opacity-90" style={{ background: 'rgba(234,179,8,0.18)', border: '1px solid rgba(234,179,8,0.30)', color: '#fde68a' }}>
                View All Pricing →
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={360}>
          <p className="text-center text-xs mt-8" style={{ color: '#dddadd' }}>
            Pricing is subject to change. All sessions are private. WhatsApp us for custom packages and group bookings.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
