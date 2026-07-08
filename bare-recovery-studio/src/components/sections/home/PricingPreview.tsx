import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'
import FadeIn from '@/components/animations/FadeIn'

const highlights = [
  {
    id: 'full-circuit',
    name: 'Full Circuit',
    subtitle: 'All 5 services in one premium session',
    mrpPrice: 5595,
    price: 2999,
    couplePrice: 4799,
    coupleMrp: 5998,
    tag: 'complete',
    href: `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a Full Circuit session.")}`,
    featured: true,
    note: 'vs buying individually',
  },
  {
    id: 'contrast',
    name: 'Contrast Therapy',
    subtitle: 'Sauna + Cold Plunge — the signature stack',
    mrpPrice: 2499,
    price: 1799,
    couplePrice: 2199,
    coupleMrp: 3598,
    tag: 'signature',
    href: '/services/contrast-therapy',
    note: 'limited-time rate',
  },
  {
    id: 'cold-plunge',
    name: 'Cold Plunge',
    subtitle: 'Full body cold immersion at 10–15°C',
    mrpPrice: 1699,
    price: 1199,
    couplePrice: 1599,
    coupleMrp: 2398,
    tag: 'single',
    href: '/services/cold-plunge',
    note: 'introductory offer',
  },
]

const membership = {
  monthly: { sessions: 5, price: 8999, mrp: 14995, extra: '+ 1 Bring-a-Friend pass' },
  quarterly: { sessions: 16, price: 23999, mrp: 28784, extra: '+ 2 Bring-a-Friend passes · Contrast only' },
}

export default function PricingPreview() {
  const waBase = `https://wa.me/${CONTACT_INFO.whatsapp}?text=`

  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12" style={{ background: 'rgba(27,25,22,0.3)' }}>
      <div className="max-w-[1320px] mx-auto">

        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A19F97] block mb-3">
                Pricing
              </span>
              <h2
                className="font-display text-[38px] md:text-[54px] text-[#FFFBF5]"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                Simple. Honest.
              </h2>
              <p className="text-[#A19F97] text-sm mt-3">All sessions in a private studio with guided coaching.</p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm text-[#A19F97] hover:text-[#BCA386] transition-colors self-end"
            >
              Full pricing table
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </FadeIn>

        {/* Session cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {highlights.map((h, i) => (
            <FadeIn key={h.id} direction="up" delay={i * 80}>
              <a
                href={h.href}
                target={h.href.startsWith('http') ? '_blank' : undefined}
                rel={h.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative flex flex-col p-7 rounded-[24px] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.01] h-full`}
                style={{
                  background: h.featured ? 'rgba(39,37,33,0.95)' : 'rgba(27,25,22,0.6)',
                  border: h.featured
                    ? '1px solid rgba(188,163,134,0.3)'
                    : '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {h.featured && (
                  <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#12110F] bg-[#BCA386]">
                    Premium
                  </span>
                )}

                <span
                  className="inline-block self-start mb-4 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] text-[#BCA386]"
                  style={{
                    background: 'rgba(188, 163, 134, 0.08)',
                    border: '1px solid rgba(188, 163, 134, 0.15)',
                  }}
                >
                  {h.tag}
                </span>

                <h3 className="font-display text-xl text-[#FFFBF5] mb-1">{h.name}</h3>
                <p className="text-[#A19F97] text-xs mb-6">{h.subtitle}</p>

                <div className="mt-auto">
                  {/* MRP crossed + actual price */}
                  <div className="flex items-end gap-3 mb-1">
                    <span
                      className="font-display font-light text-[40px] text-[#FFFBF5] leading-none"
                      style={{ letterSpacing: '-0.04em' }}
                    >
                      ₹{h.price.toLocaleString()}
                    </span>
                    <div className="flex flex-col pb-1.5">
                      <span
                        className="text-[14px] text-[#A19F97] line-through leading-tight"
                        style={{ letterSpacing: '-0.02em' }}
                      >
                        ₹{h.mrpPrice.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-[#A19F97]/60 leading-tight">{h.note}</span>
                    </div>
                    <span
                      className="ml-auto w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#BCA386] group-hover:border-[#BCA386]"
                      style={{
                        background: 'rgba(188, 163, 134, 0.08)',
                        border: '1px solid rgba(188, 163, 134, 0.2)',
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[#FFFBF5] group-hover:text-[#12110F] transition-colors"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                  <p className="text-[#A19F97] text-xs">
                    Couple <span className="line-through mr-1 opacity-50">₹{h.coupleMrp.toLocaleString()}</span>
                    ₹{h.couplePrice.toLocaleString()}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Membership strip */}
        <FadeIn direction="up" delay={240}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 rounded-[28px]"
            style={{
              background: 'rgba(188, 163, 134, 0.02)',
              border: '1px solid rgba(188, 163, 134, 0.1)',
            }}
          >
            {/* Monthly */}
            <a
              href={`${waBase}${encodeURIComponent("Hi! I'd like to join the Monthly Membership plan.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-[22px] transition-all duration-500 hover:bg-white/[0.02]"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#A19F97] mb-1">
                  Monthly · {membership.monthly.sessions} sessions
                </p>
                <div className="flex items-end gap-2">
                  <p className="font-display font-light text-[28px] text-[#FFFBF5] leading-none" style={{ letterSpacing: '-0.04em' }}>
                    ₹{membership.monthly.price.toLocaleString()}
                  </p>
                  <span className="text-sm text-[#A19F97] line-through pb-0.5">₹{membership.monthly.mrp.toLocaleString()}</span>
                </div>
                <p className="text-xs text-[#A19F97] mt-1">{membership.monthly.extra}</p>
              </div>
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#BCA386]"
                style={{ background: 'rgba(188, 163, 134, 0.08)', border: '1px solid rgba(188, 163, 134, 0.15)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FFFBF5] group-hover:text-[#12110F] transition-colors">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>

            {/* 3-Month */}
            <a
              href={`${waBase}${encodeURIComponent("Hi! I'd like to join the 3-Month Membership plan.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-6 rounded-[22px] transition-all duration-500 hover:bg-white/[0.02]"
            >
              <span className="absolute -top-3 left-5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-[#BCA386] text-[#12110F]">
                Best Value
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#A19F97] mb-1">
                  3-Month · {membership.quarterly.sessions} Contrast sessions
                </p>
                <div className="flex items-end gap-2">
                  <p className="font-display font-light text-[28px] text-[#FFFBF5] leading-none" style={{ letterSpacing: '-0.04em' }}>
                    ₹{membership.quarterly.price.toLocaleString()}
                  </p>
                  <span className="text-sm text-[#A19F97] line-through pb-0.5">₹{membership.quarterly.mrp.toLocaleString()}</span>
                </div>
                <p className="text-xs text-[#A19F97] mt-1">{membership.quarterly.extra}</p>
              </div>
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#BCA386]"
                style={{ background: 'rgba(188, 163, 134, 0.08)', border: '1px solid rgba(188, 163, 134, 0.15)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FFFBF5] group-hover:text-[#12110F] transition-colors">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
