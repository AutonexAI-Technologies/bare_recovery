'use client'

import { useState } from 'react'
import { CONTACT_INFO } from '@/lib/constants'

const waBase = `https://wa.me/${CONTACT_INFO.whatsapp}?text=`
const bookMsg = (service: string) => encodeURIComponent(`Hi! I'd like to book a ${service} session at Bare Recovery Studio.`)

// ── Single Session Rates ──
// mrpPrice = sum of individual / reference MRP (crossed out)
const singleSessions = [
  {
    name: 'Full Circuit',
    desc: 'All 5 services in one premium session',
    price: 2999,
    mrpPrice: 5595, // sum: Cold Plunge 1199 + Sauna 999 + Red Light 799 + Contrast 1799 + Compression 799 = 5595
    tag: 'complete',
    featured: true,
    note: 'vs buying all 5 individually',
    href: waBase + bookMsg('Full Circuit'),
  },
  {
    name: 'Contrast Therapy',
    desc: 'Sauna + Cold Plunge — the signature stack',
    price: 1799,
    mrpPrice: 2499,
    tag: 'signature',
    note: 'introductory rate',
    href: waBase + bookMsg('Contrast Therapy'),
  },
  {
    name: 'Cold Plunge',
    desc: 'Full body cold immersion at 10–15°C',
    price: 1199,
    mrpPrice: 1699,
    note: 'introductory rate',
    href: waBase + bookMsg('Cold Plunge'),
  },
  {
    name: 'Traditional Sauna',
    desc: 'Dry heat at 70–80°C for deep recovery',
    price: 999,
    mrpPrice: 1399,
    note: 'introductory rate',
    href: waBase + bookMsg('Traditional Sauna'),
  },
  {
    name: 'Red Light Therapy',
    desc: '660nm & 850nm photobiomodulation',
    price: 799,
    mrpPrice: 1099,
    note: 'introductory rate',
    href: waBase + bookMsg('Red Light Therapy'),
  },
  {
    name: 'Compression — Upper Body',
    desc: 'Dynamic air compression for upper limbs',
    price: 799,
    mrpPrice: 1099,
    note: 'introductory rate',
    href: waBase + bookMsg('Compression Therapy (Upper Body)'),
  },
  {
    name: 'Compression — Lower Body',
    desc: 'Dynamic air compression for legs & hips',
    price: 799,
    mrpPrice: 1099,
    note: 'introductory rate',
    href: waBase + bookMsg('Compression Therapy (Lower Body)'),
  },
  {
    name: 'Compression — Full Body',
    desc: 'Upper + Lower body compression together',
    price: 1399,
    mrpPrice: 1799,
    note: 'introductory rate',
    href: waBase + bookMsg('Compression Therapy (Full Body)'),
  },
]

// ── Couple Session Rates ──
// mrpPrice = 2 × single price
const coupleSessions = [
  {
    name: 'Full Circuit',
    desc: 'All 5 services — best shared experience',
    price: 4799,
    mrpPrice: 5998, // 2 × 2999
    featured: true,
    note: 'save ₹1,199 vs 2 singles',
    href: waBase + bookMsg('Full Circuit Couple'),
  },
  {
    name: 'Contrast Therapy',
    desc: 'Sauna + Cold Plunge for two',
    price: 2199,
    mrpPrice: 3598, // 2 × 1799
    note: 'save ₹1,399 vs 2 singles',
    href: waBase + bookMsg('Contrast Therapy Couple'),
  },
  {
    name: 'Cold Plunge',
    desc: 'Side-by-side cold immersion',
    price: 1599,
    mrpPrice: 2398, // 2 × 1199
    note: 'save ₹799 vs 2 singles',
    href: waBase + bookMsg('Cold Plunge Couple'),
  },
  {
    name: 'Traditional Sauna',
    desc: 'Shared heat session for two',
    price: 1399,
    mrpPrice: 1998, // 2 × 999
    note: 'save ₹599 vs 2 singles',
    href: waBase + bookMsg('Traditional Sauna Couple'),
  },
]

// ── Membership Plans ──
const memberships = [
  {
    id: 'monthly',
    label: '1 Month',
    sessions: 5,
    type: 'Recovery Stack',
    price: 8999,
    mrpPrice: 14995, // 5 × 2999 Full Circuit
    perSession: Math.round(8999 / 5),
    savingsNote: 'Save ₹5,996 vs 5 full circuits',
    perks: ['5 Full Circuit sessions', '1 Bring-a-Friend guest pass', 'Priority booking', 'All 5 services included'],
    href: waBase + encodeURIComponent("Hi! I'd like to join the 1-Month Membership plan."),
    featured: false,
  },
  {
    id: 'quarterly',
    label: '3 Month',
    sessions: 16,
    type: 'Contrast Only',
    price: 23999,
    mrpPrice: 28784, // 16 × 1799
    perSession: Math.round(23999 / 16),
    savingsNote: 'Save ₹4,785 vs 16 single sessions',
    perks: ['16 Contrast Therapy sessions', '2 Bring-a-Friend guest passes', 'Priority booking', 'Best per-session value'],
    href: waBase + encodeURIComponent("Hi! I'd like to join the 3-Month Membership plan."),
    featured: true,
  },
  {
    id: 'biannual',
    label: '6 Month',
    sessions: null,
    type: 'Custom',
    price: null,
    mrpPrice: null,
    perSession: null,
    savingsNote: 'Maximum savings — talk to us',
    perks: ['Flexible session bundle', 'Maximum savings', 'Priority booking', 'Dedicated coaching slot'],
    href: waBase + encodeURIComponent("Hi! I'd like to know more about the 6-Month Membership plan."),
    featured: false,
  },
]

const tabs = ['Single Sessions', 'Couple Sessions', 'Memberships']

function PriceRow({ item, index }: {
  item: {
    name: string
    desc: string
    price: number
    mrpPrice?: number
    tag?: string
    featured?: boolean
    note?: string
    href: string
  }
  index: number
}) {
  const savings = item.mrpPrice ? item.mrpPrice - item.price : 0
  const savingsPct = item.mrpPrice ? Math.round((savings / item.mrpPrice) * 100) : 0

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between py-5 border-b border-white/[0.06] hover:bg-white/[0.02] px-4 -mx-4 rounded-xl transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <span className="font-display font-light text-3xl md:text-4xl text-white/10 w-8 shrink-0" style={{ letterSpacing: '-0.04em' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <span className="font-display font-semibold text-[#F5F5F2] text-base">{item.name}</span>
            {item.featured && (
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-full bg-[#F5F5F2] text-[#0B0B0B]">Premium</span>
            )}
            {item.tag && !item.featured && (
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full text-[#8e9192]" style={{ background: 'rgba(255,255,255,0.05)' }}>{item.tag}</span>
            )}
            {savingsPct > 0 && (
              <span className="text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full text-emerald-400" style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.15)' }}>
                {savingsPct}% off
              </span>
            )}
          </div>
          <p className="text-[#8e9192] text-xs">{item.desc}</p>
          {item.note && (
            <p className="text-[#8e9192]/50 text-[10px] mt-0.5 italic">{item.note}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0 ml-4">
        <div className="text-right">
          {item.mrpPrice && (
            <span className="block text-[#8e9192] line-through text-xs leading-tight" style={{ letterSpacing: '-0.02em' }}>
              ₹{item.mrpPrice.toLocaleString()}
            </span>
          )}
          <span className="font-display font-light text-[#F5F5F2]" style={{ fontSize: 'clamp(20px, 3vw, 30px)', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            ₹{item.price.toLocaleString()}
          </span>
        </div>
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5F5F2" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  )
}

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="min-h-screen">
      <div className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-12 max-w-[1100px] mx-auto">

        {/* ── Header ── */}
        <div className="mb-12 md:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8e9192] block mb-5">Pricing</span>
          <h1
            className="font-display font-light text-[#F5F5F2] mb-4"
            style={{ fontSize: 'clamp(40px, 10vw, 110px)', letterSpacing: '-0.05em', lineHeight: 0.95 }}
          >
            Simple.<br />
            <span style={{ color: 'rgba(245,245,242,0.28)' }}>Honest.</span>
          </h1>
          <p className="text-[#8e9192] text-sm md:text-base max-w-md leading-relaxed mt-6">
            Private studio. One coach guides you through every session on request. No hidden fees — what you see is what you pay.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-2 flex-wrap mb-12">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: activeTab === i ? '#F5F5F2' : 'rgba(255,255,255,0.05)',
                color: activeTab === i ? '#0B0B0B' : '#8e9192',
                border: activeTab === i ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Single Sessions ── */}
        {activeTab === 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8e9192]">Service</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8e9192]">Price</p>
            </div>
            <div className="mb-8">
              {singleSessions.map((item, i) => (
                <PriceRow key={item.name} item={item} index={i} />
              ))}
            </div>
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-[#8e9192] text-sm">
                <span className="text-[#F5F5F2] font-semibold">Walk-ins welcome</span> — or book via WhatsApp for guaranteed slots. All sessions in a private studio with expert coaching available on request.
              </p>
            </div>
          </div>
        )}

        {/* ── Couple Sessions ── */}
        {activeTab === 1 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8e9192]">Service (for 2 people)</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8e9192]">Couple Price</p>
            </div>
            <div className="mb-8">
              {coupleSessions.map((item, i) => (
                <PriceRow key={item.name} item={item} index={i} />
              ))}
            </div>
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-[#8e9192] text-sm">
                <span className="text-[#F5F5F2] font-semibold">Couple sessions</span> are for 2 people sharing the same session. Perfect for training partners, couples, or friends.
              </p>
            </div>
          </div>
        )}

        {/* ── Memberships ── */}
        {activeTab === 2 && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {memberships.map((plan) => (
                <div
                  key={plan.id}
                  className="relative flex flex-col p-7 rounded-[24px] transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: plan.featured ? 'rgba(40,38,36,0.9)' : 'rgba(20,20,20,0.6)',
                    border: plan.featured ? '1px solid rgba(201,198,197,0.25)' : '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {plan.featured && (
                    <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B0B0B] bg-[#F5F5F2]">
                      Best Value
                    </span>
                  )}

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8e9192] mb-3 block">{plan.type}</span>
                  <h3
                    className="font-display font-light text-[#F5F5F2] mb-1"
                    style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.04em', lineHeight: 1 }}
                  >
                    {plan.label}
                  </h3>
                  {plan.sessions && (
                    <p className="text-[#8e9192] text-sm mb-4">{plan.sessions} sessions included</p>
                  )}

                  {plan.price ? (
                    <div className="mb-1">
                      {plan.mrpPrice && (
                        <span className="block text-[#8e9192] text-sm line-through mb-0.5">
                          ₹{plan.mrpPrice.toLocaleString()}
                        </span>
                      )}
                      <span
                        className="font-display font-light text-[#F5F5F2]"
                        style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.04em', lineHeight: 1 }}
                      >
                        ₹{plan.price.toLocaleString()}
                      </span>
                      <span className="text-[#8e9192] text-sm ml-1">/{plan.label.toLowerCase()}</span>
                    </div>
                  ) : (
                    <div className="mb-1">
                      <span
                        className="font-display font-light text-[#8e9192]"
                        style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.04em', lineHeight: 1 }}
                      >
                        Custom
                      </span>
                    </div>
                  )}

                  {plan.perSession && (
                    <p className="text-[#8e9192] text-xs mb-1">₹{plan.perSession.toLocaleString()} per session</p>
                  )}

                  {plan.savingsNote && plan.price && (
                    <p className="text-emerald-400/80 text-[10px] mb-5 font-medium">{plan.savingsNote}</p>
                  )}
                  {!plan.price && (
                    <p className="text-[#8e9192] text-xs mb-5">{plan.savingsNote}</p>
                  )}

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 text-[#c9c6c5] text-sm">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9c6c5" strokeWidth="2.5" className="shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      background: plan.featured ? '#F5F5F2' : 'rgba(255,255,255,0.07)',
                      color: plan.featured ? '#0B0B0B' : '#F5F5F2',
                      border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    {plan.price ? 'Join Now' : 'Enquire'}
                  </a>
                </div>
              ))}
            </div>

            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-[#8e9192] text-sm">
                <span className="text-[#F5F5F2] font-semibold">Membership benefits:</span> Sessions must be used within the membership period. 5 days&apos; notice required to cancel.{' '}
                Contact us at <a href="mailto:barerecovery@gmail.com" className="text-[#c9c6c5] hover:text-[#F5F5F2] transition-colors">barerecovery@gmail.com</a> for any changes.
              </p>
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="mt-16 text-center">
          <p className="text-[#8e9192] text-sm mb-6">Still have questions about pricing or plans?</p>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I have a question about Bare Recovery Studio pricing.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#F5F5F2] text-[#0B0B0B] pl-7 pr-2.5 py-4 rounded-full font-bold hover:bg-white transition-all active:scale-[0.98]"
          >
            Ask on WhatsApp
            <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B0B0B" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
