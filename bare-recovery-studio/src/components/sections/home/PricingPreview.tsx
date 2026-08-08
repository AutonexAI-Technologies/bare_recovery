'use client'

import FadeIn from '@/components/animations/FadeIn'
import { CONTACT_INFO } from '@/lib/constants'

const plans = [
  {
    id: 'single',
    label: 'Single Session',
    price: '₹799',
    period: '/ session',
    description: 'Perfect for first-timers or occasional recovery.',
    features: [
      { text: '1 modality of your choice' },
      { text: 'Guided 20–30 minute session' },
      { text: 'Private access — no crowds' },
      { text: 'Coach consultation included' },
    ],
    cta: 'Book Now',
    featured: false,
  },
  {
    id: 'full-circuit',
    label: 'Full Circuit',
    price: '₹2,499',
    period: '/ session',
    description: 'The complete recovery stack. Every modality. Maximum results.',
    features: [
      { text: 'All 6 modalities, curated sequence' },
      { text: '60+ minute guided session' },
      { text: 'Performance coach assessment' },
      { text: 'Protocol designed for your goals' },
      { text: 'Post-session debrief included' },
    ],
    cta: 'Book Full Circuit',
    featured: true,
    badge: 'Most Effective',
  },
  {
    id: 'membership',
    label: 'Monthly Membership',
    price: 'Custom',
    period: '/ month',
    description: 'Built for serious athletes and consistent performers.',
    features: [
      { text: 'Unlimited single-modality sessions' },
      { text: 'Priority booking every week' },
      { text: 'Monthly protocol review' },
      { text: 'Member-only pricing on circuits' },
    ],
    cta: 'Enquire',
    featured: false,
  },
]

export default function PricingPreview() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I would like to book a session at Bare Recovery Studio.')}`

  return (
    <section
      className="py-16 md:py-[120px] px-4 md:px-12"
      style={{ background: 'rgba(42,40,41,0.55)' }}
    >
      <div className="max-w-[1320px] mx-auto">

        <FadeIn direction="up">
          <div className="text-center mb-14 md:mb-20">
            <span className="section-label">Investment</span>
            <h2
              className="font-display text-[32px] md:text-[52px] mb-4"
              style={{ letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f5f0eb' }}
            >
              Pricing
            </h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: '#dddadd' }}>
              No subscriptions required. No hidden fees. Walk in, recover, leave better.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <FadeIn key={plan.id} direction="up" delay={i * 80}>
              <div
                className="relative flex flex-col h-full p-8 rounded-[24px] transition-all duration-500"
                style={
                  plan.featured
                    ? {
                        background: 'rgba(61,59,61,0.92)',
                        border: '1px solid rgba(217,209,204,0.20)',
                        boxShadow: '0 32px 80px rgba(42,40,41,0.60)',
                      }
                    : {
                        background: 'rgba(86,84,86,0.35)',
                        border: '1px solid rgba(196,193,196,0.08)',
                      }
                }
              >
                {/* Badge */}
                {plan.badge && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full"
                    style={{ background: '#d9d1cc', color: '#3d3b3d' }}
                  >
                    {plan.badge}
                  </span>
                )}

                {/* Label */}
                <span className="section-label mb-1">{plan.label}</span>

                {/* Price */}
                <div className="flex items-end gap-1.5 mb-2">
                  <span
                    className="font-display"
                    style={{
                      fontSize: 'clamp(40px,6vw,60px)',
                      fontWeight: 300,
                      letterSpacing: '-0.04em',
                      color: '#f5f0eb',
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm mb-2" style={{ color: '#dddadd' }}>{plan.period}</span>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: '#dddadd' }}>
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="mb-6" style={{ height: 1, background: 'rgba(196,193,196,0.07)' }} />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: '#dddadd' }}>
                      <svg
                        className="shrink-0 mt-0.5"
                        width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke={plan.featured ? '#d9d1cc' : '#a8a5a8'}
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.97]"
                  style={
                    plan.featured
                      ? {
                          background: '#d9d1cc',
                          color: '#3d3b3d',
                          boxShadow: '0 8px 32px rgba(217,209,204,0.18)',
                        }
                      : {
                          border: '1px solid rgba(196,193,196,0.16)',
                          color: '#c4c1c4',
                          background: 'transparent',
                        }
                  }
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    if (plan.featured) {
                      el.style.background = '#c4c1c4'
                    } else {
                      el.style.background = 'rgba(196,193,196,0.08)'
                      el.style.color = '#f5f0eb'
                    }
                    el.style.transform = 'scale(1.02)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    if (plan.featured) {
                      el.style.background = '#d9d1cc'
                    } else {
                      el.style.background = 'transparent'
                      el.style.color = '#c4c1c4'
                    }
                    el.style.transform = 'scale(1)'
                  }}
                >
                  {plan.cta}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footnote */}
        <FadeIn direction="up" delay={280}>
          <p className="text-center text-xs mt-8" style={{ color: '#dddadd' }}>
            Pricing is subject to change. All sessions are private. WhatsApp us for custom packages and group bookings.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
