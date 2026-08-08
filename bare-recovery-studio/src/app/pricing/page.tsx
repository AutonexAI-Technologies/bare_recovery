'use client'

import { useState } from 'react'
import { CONTACT_INFO } from '@/lib/constants'

const waBase = `https://wa.me/${CONTACT_INFO.whatsapp}?text=`
const bookMsg = (service: string) => encodeURIComponent(`Hi! I'd like to book a ${service} session at Bare Recovery Studio.`)

const singleSessions = [
  { name: 'Full Circuit', desc: 'All 6 services in one premium session', price: 2999, mrpPrice: 5595, tag: 'complete', featured: true, note: 'vs buying all individually', href: waBase + bookMsg('Full Circuit') },
  { name: 'Contrast Therapy', desc: 'Sauna + Cold Plunge — the signature stack', price: 1799, mrpPrice: 2499, note: 'introductory rate', href: waBase + bookMsg('Contrast Therapy') },
  { name: 'Cold Plunge', desc: 'Full body cold immersion at 10–15°C', price: 1199, mrpPrice: 1699, note: 'introductory rate', href: waBase + bookMsg('Cold Plunge') },
  { name: 'Traditional Sauna', desc: 'Dry heat at 70–80°C for deep recovery', price: 999, mrpPrice: 1399, note: 'introductory rate', href: waBase + bookMsg('Traditional Sauna') },
  { name: 'Red Light Therapy', desc: '660nm & 850nm photobiomodulation', price: 799, mrpPrice: 1099, note: 'introductory rate', href: waBase + bookMsg('Red Light Therapy') },
  { name: 'Compression — Upper Body', desc: 'Dynamic air compression for upper limbs', price: 799, mrpPrice: 1099, note: 'introductory rate', href: waBase + bookMsg('Compression Therapy (Upper Body)') },
  { name: 'Compression — Lower Body', desc: 'Dynamic air compression for legs & hips', price: 799, mrpPrice: 1099, note: 'introductory rate', href: waBase + bookMsg('Compression Therapy (Lower Body)') },
  { name: 'Compression — Full Body', desc: 'Upper + Lower body compression together', price: 1399, mrpPrice: 1799, note: 'introductory rate', href: waBase + bookMsg('Compression Therapy (Full Body)') },
]

const coupleSessions = [
  { name: 'Full Circuit', desc: 'All 6 services — best shared experience', price: 4799, mrpPrice: 5998, featured: true, note: 'save ₹1,199 vs 2 singles', href: waBase + bookMsg('Full Circuit Couple') },
  { name: 'Contrast Therapy', desc: 'Sauna + Cold Plunge for two', price: 2199, mrpPrice: 3598, note: 'save ₹1,399 vs 2 singles', href: waBase + bookMsg('Contrast Therapy Couple') },
  { name: 'Cold Plunge', desc: 'Side-by-side cold immersion', price: 1599, mrpPrice: 2398, note: 'save ₹799 vs 2 singles', href: waBase + bookMsg('Cold Plunge Couple') },
  { name: 'Traditional Sauna', desc: 'Shared heat session for two', price: 1399, mrpPrice: 1998, note: 'save ₹599 vs 2 singles', href: waBase + bookMsg('Traditional Sauna Couple') },
]

const memberships = [
  { id: 'monthly', label: '1 Month', sessions: 5, type: 'Recovery Stack', price: 8999, mrpPrice: 14995, perSession: Math.round(8999 / 5), savingsNote: 'Save ₹5,996 vs 5 full circuits', perks: ['5 Full Circuit sessions', '1 Bring-a-Friend guest pass', 'Priority booking', 'All 6 services included'], href: waBase + encodeURIComponent("Hi! I'd like to join the 1-Month Membership plan."), featured: false },
  { id: 'quarterly', label: '3 Month', sessions: 16, type: 'Contrast Only', price: 23999, mrpPrice: 28784, perSession: Math.round(23999 / 16), savingsNote: 'Save ₹4,785 vs 16 single sessions', perks: ['16 Contrast Therapy sessions', '2 Bring-a-Friend guest passes', 'Priority booking', 'Best per-session value'], href: waBase + encodeURIComponent("Hi! I'd like to join the 3-Month Membership plan."), featured: true },
  { id: 'biannual', label: '6 Month', sessions: null, type: 'Custom', price: null, mrpPrice: null, perSession: null, savingsNote: 'Maximum savings — talk to us', perks: ['Flexible session bundle', 'Maximum savings', 'Priority booking', 'Dedicated coaching slot'], href: waBase + encodeURIComponent("Hi! I'd like to know more about the 6-Month Membership plan."), featured: false },
]

const tabs = ['Single Sessions', 'Couple Sessions', 'Memberships']

function PriceRow({ item, index }: { item: typeof singleSessions[0]; index: number }) {
  const savings = item.mrpPrice ? item.mrpPrice - item.price : 0
  const savingsPct = item.mrpPrice ? Math.round((savings / item.mrpPrice) * 100) : 0

  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer"
      className="group flex items-center justify-between py-5 border-b px-4 -mx-4 rounded-xl transition-all duration-300 hover:scale-[1.005]"
      style={{ borderColor: 'rgba(196,193,196,0.10)', backgroundColor: 'transparent' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(86,84,86,0.20)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}>
      <div className="flex items-center gap-4">
        <span className="font-display font-light text-3xl md:text-4xl w-8 shrink-0" style={{ letterSpacing: '-0.04em', color: 'rgba(196,193,196,0.20)' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="font-display font-semibold text-base md:text-lg" style={{ color: '#f5f0eb' }}>{item.name}</span>
            {item.featured && <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-full" style={{ background: '#d9d1cc', color: '#3d3b3d' }}>Best Value</span>}
            {savingsPct > 0 && <span className="text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full" style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.20)', color: '#6ee7b7' }}>{savingsPct}% off</span>}
          </div>
          <p className="text-sm md:text-base" style={{ color: '#dddadd' }}>{item.desc}</p>
          {item.note && <p className="text-[10px] mt-0.5 italic" style={{ color: '#dddadd' }}>{item.note}</p>}
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0 ml-4">
        <div className="text-right">
          {item.mrpPrice && <span className="block text-xs line-through leading-tight" style={{ color: '#c4c1c4', letterSpacing: '-0.02em' }}>₹{item.mrpPrice.toLocaleString()}</span>}
          <span className="font-display font-light" style={{ fontSize: 'clamp(20px, 3vw, 30px)', letterSpacing: '-0.04em', lineHeight: 1.1, color: '#f5f0eb' }}>
            ₹{item.price.toLocaleString()}
          </span>
        </div>
        <span className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: 'rgba(196,193,196,0.15)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f5f0eb" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] block mb-5" style={{ color: '#dddadd' }}>Pricing</span>
          <h1 className="font-display font-light mb-4" style={{ fontSize: 'clamp(40px, 10vw, 110px)', letterSpacing: '-0.05em', lineHeight: 0.95, color: '#f5f0eb' }}>
            Simple.<br />
            <span style={{ color: 'rgba(245,240,235,0.25)' }}>Honest.</span>
          </h1>
          <p className="text-sm md:text-base max-w-md leading-relaxed mt-6" style={{ color: '#dddadd' }}>
            Private studio. Expert coaching available on request. No hidden fees — what you see is what you pay.
          </p>
          {/* Value pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['Open 10 AM – 10 PM', 'Walk-ins welcome', 'No booking fee', 'Private sessions'].map(p => (
              <span key={p} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: 'rgba(86,84,86,0.35)', border: '1px solid rgba(196,193,196,0.12)', color: '#dddadd' }}>{p}</span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {tabs.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: activeTab === i ? '#d9d1cc' : 'rgba(86,84,86,0.30)',
                color: activeTab === i ? '#3d3b3d' : '#c4c1c4',
                border: activeTab === i ? '1px solid transparent' : '1px solid rgba(196,193,196,0.12)',
              }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Single Sessions */}
        {activeTab === 0 && (
          <div>
            <div className="flex items-center justify-between mb-2 px-4">
              <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: '#dddadd' }}>Service</p>
              <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: '#dddadd' }}>Price</p>
            </div>
            <div className="mb-8">
              {singleSessions.map((item, i) => <PriceRow key={item.name} item={item} index={i} />)}
            </div>
            <div className="p-5 rounded-2xl" style={{ background: 'rgba(42,40,41,0.70)', border: '1px solid rgba(196,193,196,0.10)' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#dddadd' }}>
                <span className="font-semibold" style={{ color: '#f5f0eb' }}>Walk-ins welcome</span> — or book via WhatsApp for guaranteed slots. All sessions in a private studio with expert coaching available on request.
              </p>
            </div>
          </div>
        )}

        {/* Couple Sessions */}
        {activeTab === 1 && (
          <div>
            <div className="flex items-center justify-between mb-2 px-4">
              <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: '#dddadd' }}>Service (for 2 people)</p>
              <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: '#dddadd' }}>Couple Price</p>
            </div>
            <div className="mb-8">
              {coupleSessions.map((item, i) => <PriceRow key={item.name} item={item as typeof singleSessions[0]} index={i} />)}
            </div>
            <div className="p-5 rounded-2xl" style={{ background: 'rgba(42,40,41,0.70)', border: '1px solid rgba(196,193,196,0.10)' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#dddadd' }}>
                <span className="font-semibold" style={{ color: '#f5f0eb' }}>Couple sessions</span> are for 2 people sharing the same session. Perfect for training partners, couples, or friends.
              </p>
            </div>
          </div>
        )}

        {/* Memberships */}
        {activeTab === 2 && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {memberships.map((plan) => (
                <div key={plan.id} className="relative flex flex-col p-7 rounded-[24px] transition-all duration-300 hover:scale-[1.01]"
                  style={{ background: plan.featured ? 'rgba(56,52,48,0.95)' : 'rgba(42,40,41,0.80)', border: plan.featured ? '1px solid rgba(217,209,204,0.30)' : '1px solid rgba(196,193,196,0.12)' }}>
                  {plan.featured && (
                    <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]" style={{ background: '#d9d1cc', color: '#3d3b3d' }}>Best Value</span>
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block" style={{ color: '#dddadd' }}>{plan.type}</span>
                  <h3 className="font-display font-light mb-1" style={{ fontSize: 'clamp(26px, 4vw, 40px)', letterSpacing: '-0.04em', lineHeight: 1, color: '#f5f0eb' }}>{plan.label}</h3>
                  {plan.sessions && <p className="text-sm mb-4" style={{ color: '#dddadd' }}>{plan.sessions} sessions included</p>}

                  {plan.price ? (
                    <div className="mb-1">
                      {plan.mrpPrice && <span className="block text-sm line-through mb-0.5" style={{ color: '#dddadd' }}>₹{plan.mrpPrice.toLocaleString()}</span>}
                      <span className="font-display font-light" style={{ fontSize: 'clamp(30px, 5vw, 48px)', letterSpacing: '-0.04em', lineHeight: 1, color: '#f5f0eb' }}>
                        ₹{plan.price.toLocaleString()}
                      </span>
                      <span className="text-sm ml-1" style={{ color: '#dddadd' }}>/{plan.label.toLowerCase()}</span>
                    </div>
                  ) : (
                    <div className="mb-1">
                      <span className="font-display font-light" style={{ fontSize: 'clamp(26px, 4vw, 40px)', letterSpacing: '-0.04em', lineHeight: 1, color: '#dddadd' }}>Custom</span>
                    </div>
                  )}

                  {plan.perSession && <p className="text-xs mb-1" style={{ color: '#dddadd' }}>₹{plan.perSession.toLocaleString()} per session</p>}
                  {plan.savingsNote && plan.price && <p className="text-[10px] mb-5 font-medium" style={{ color: '#6ee7b7' }}>{plan.savingsNote}</p>}
                  {!plan.price && <p className="text-xs mb-5" style={{ color: '#dddadd' }}>{plan.savingsNote}</p>}

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 text-sm" style={{ color: '#dddadd' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4c1c4" strokeWidth="2.5" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12" /></svg>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <a href={plan.href} target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                    style={{ background: plan.featured ? '#d9d1cc' : 'rgba(196,193,196,0.12)', color: plan.featured ? '#3d3b3d' : '#f5f0eb', border: plan.featured ? 'none' : '1px solid rgba(196,193,196,0.18)' }}>
                    {plan.price ? 'Join Now' : 'Enquire'}
                  </a>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-2xl" style={{ background: 'rgba(42,40,41,0.70)', border: '1px solid rgba(196,193,196,0.10)' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#dddadd' }}>
                <span className="font-semibold" style={{ color: '#f5f0eb' }}>Membership benefits:</span> Sessions must be used within the membership period. 5 days&apos; notice required to cancel.{' '}
                Contact us at <a href="mailto:barerecovery@gmail.com" className="transition-colors" style={{ color: '#d9d1cc' }}>barerecovery@gmail.com</a> for any changes.
              </p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm mb-6" style={{ color: '#dddadd' }}>Still have questions about pricing or plans?</p>
          <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I have a question about Bare Recovery Studio pricing.')}`}
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 pl-7 pr-2.5 py-4 rounded-full font-bold hover:opacity-90 transition-all active:scale-[0.98]"
            style={{ background: '#d9d1cc', color: '#3d3b3d' }}>
            Ask on WhatsApp
            <span className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5" style={{ background: 'rgba(61,59,61,0.16)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3d3b3d" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
