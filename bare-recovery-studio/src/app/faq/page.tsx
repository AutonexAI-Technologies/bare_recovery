'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqData = [
  {
    category: 'Services & Sessions',
    icon: '⚡',
    questions: [
      {
        q: 'What recovery services do you offer?',
        a: 'We offer five evidence-based recovery modalities: Compression Therapy, Red Light Therapy (Photobiomodulation), Traditional Sauna (Dry Heat), Cold Plunge (Cold Water Immersion), and Contrast Therapy (alternating hot and cold). Each service is available as standalone sessions or as part of a membership plan.',
      },
      {
        q: 'How long does each session take?',
        a: 'Session durations vary by service: Compression Therapy is 30–40 minutes, Red Light Therapy is 10–20 minutes, Traditional Sauna is 30–60 minutes, Cold Plunge is 3–5 minutes, and Contrast Therapy (sauna + cold plunge cycles) typically takes 60–90 minutes. Our staff will guide you based on your goals.',
      },
      {
        q: 'Do I need to bring anything for my session?',
        a: 'We recommend comfortable workout attire. We provide towels and necessary equipment for each service. For compression therapy, you can wear shorts. For sauna and cold plunge, a swimsuit or shorts is recommended. We have changing facilities available on-site.',
      },
      {
        q: 'Can I combine multiple services in one visit?',
        a: 'Yes, and we actively encourage it! Our most popular combination is Contrast Therapy — alternating rounds of sauna and cold plunge. You can also pair Red Light Therapy with compression or sauna for compounding benefits. Our staff will help you design an optimal protocol.',
      },
      {
        q: 'Is Contrast Therapy the same as booking sauna and cold plunge separately?',
        a: 'Contrast Therapy is a guided protocol that structures your alternating rounds of heat and cold for maximum benefit. It includes 2–3 cycles of sauna (15–20 min) followed by cold plunge (2–3 min). Booking it as Contrast Therapy gives you a planned, coached session rather than two separate independent visits.',
      },
    ],
  },
  {
    category: 'Health & Safety',
    icon: '🩺',
    questions: [
      {
        q: 'Is there a health waiver I need to complete?',
        a: 'Yes, all new clients complete a brief health disclosure form before their first session. This helps our team ensure your safety during the session and flag any contraindications. This is kept confidential and handled as Sensitive Personal Data under Indian privacy law.',
      },
      {
        q: 'Who should NOT use cold plunge or sauna?',
        a: 'The following conditions are known contraindications and require medical clearance before use: active cardiovascular disease or recent cardiac event, pregnancy, severe uncontrolled hypertension, open wounds or skin infections, Raynaud\'s syndrome (for cold plunge), epilepsy, and recent surgery within 4 weeks. If in doubt, consult your physician first.',
      },
      {
        q: 'Are your services safe for everyday athletes and gym-goers?',
        a: 'Absolutely. Our services are designed for everyone from competitive athletes to casual gym-goers and desk workers. The vast majority of healthy adults can safely use all five services. Our staff will always brief you on protocols and watch over your first session.',
      },
      {
        q: 'What temperature is the cold plunge?',
        a: 'Our cold plunge is maintained between 8–12°C, which is the scientifically validated range for triggering vasoconstriction, norepinephrine release, and anti-inflammatory effects. First-timers often find it intense for the first 20–30 seconds — this is completely normal. Your body adapts quickly.',
      },
      {
        q: 'What temperature is the sauna?',
        a: 'Our dry sauna operates at 70–80°C. This is a traditional Finnish-style dry heat sauna (not steam/infrared). The heat stress at this range is what activates heat shock proteins, improves cardiovascular conditioning, and supports sleep quality as documented in the research literature.',
      },
    ],
  },
  {
    category: 'Bookings & Cancellations',
    icon: '📅',
    questions: [
      {
        q: 'How do I book a session?',
        a: 'The easiest way is via WhatsApp at +91 76708 61496. You can also reach us via our website contact form or DM us on Instagram @bare.recovery. We confirm all bookings explicitly — if you haven\'t received a confirmation, your session is not yet booked.',
      },
      {
        q: 'What is your cancellation and late arrival policy?',
        a: 'For private recovery and contrast sessions, we require at least 6 hours\' notice to cancel or reschedule. Group/movement classes require at least 3 hours\' notice. Cancellations made inside these windows result in the loss of session credits. Arriving more than 10 minutes late for private sessions may shorten your session time to stay on schedule, and late arrivals of over 5 minutes for classes will not be admitted.',
      },
      {
        q: 'What happens if I miss my session (no-show)?',
        a: 'No-shows without prior cancellation will result in the full session being deducted from your membership or the session fee being forfeited. Repeated no-shows may affect your ability to book future sessions. We ask that you give us as much notice as possible so we can offer the slot to other clients.',
      },
      {
        q: 'Can I walk in without a booking?',
        a: 'Walk-ins are welcome, subject to availability. However, we strongly recommend booking in advance — especially for popular time slots (early morning and evening). During peak hours, walk-in availability may be limited.',
      },
    ],
  },
  {
    category: 'Memberships & Pricing',
    icon: '💳',
    questions: [
      {
        q: 'What membership plans do you offer?',
        a: 'We offer 1-month, 3-month, and 6-month membership plans. The 1-Month plan includes 5 Full Circuit sessions (₹8,999). The 3-Month plan includes 16 Contrast Therapy sessions (₹23,999). The 6-Month plan is custom — contact us for details. All memberships include priority booking and Bring-a-Friend passes.',
      },
      {
        q: 'Do unused sessions roll over?',
        a: 'No. Unused sessions within a monthly membership period do not roll over to the following month. This is standard in the wellness industry. If you find yourself regularly underusing your plan, we\'d recommend switching to a lower tier or our pay-as-you-go option.',
      },
      {
        q: 'Can I cancel my membership?',
        a: 'Monthly memberships can be cancelled with 5 days\' written notice before your next billing date. 3-Month plans are non-refundable after purchase, given the discounted rate applied. Please contact us at barerecovery@gmail.com to initiate any membership changes.',
      },
      {
        q: 'Do you provide GST invoices?',
        a: 'Yes, GST invoices are available on request. Please provide your GSTIN at the time of payment. Invoices are sent digitally via email within 2 business days of the request.',
      },
    ],
  },
  {
    category: 'Location & Studio',
    icon: '📍',
    questions: [
      {
        q: 'Where are you located?',
        a: 'We are located at 3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067. We are easily accessible from Kompally main road and have parking available.',
      },
      {
        q: 'What are your operating hours?',
        a: 'We are open 10 AM – 10:30 PM, Everyday. We offer early morning and evening slots to fit around your training schedule. Booking in advance is recommended for peak hours.',
      },
      {
        q: 'Is the studio private or shared?',
        a: 'Bare Recovery Studio is a fully private studio. You will have the space to yourself during your session. One coach is available to guide you through every session on request — simply let us know when booking.',
      },
      {
        q: 'Is the studio unisex?',
        a: 'Yes, Bare Recovery Studio is a unisex studio. All our recovery services are available to all genders. We maintain a comfortable, respectful environment for every client.',
      },
    ],
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        background: isOpen ? 'rgba(30,30,30,0.9)' : 'rgba(18,18,18,0.8)',
        border: isOpen ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.06)',
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-4 p-5">
        <span className="font-display font-semibold text-[#F5F5F2] text-sm leading-snug">{question}</span>
        <span
          className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? '#F5F5F2' : 'rgba(255,255,255,0.06)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#0B0B0B' : '#8e9192'} strokeWidth="2.5">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{ maxHeight: isOpen ? '400px' : '0px' }}
      >
        <p className="text-[#8e9192] text-sm leading-relaxed px-5 pb-5">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const displayedFAQs = activeCategory === 'All'
    ? faqData
    : faqData.filter((cat) => cat.category === activeCategory)

  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-24 px-5 md:px-16 max-w-[900px] mx-auto">

        {/* Header */}
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8e9192] block mb-4">Help Center</span>
        <h1
          className="font-display font-black text-[48px] md:text-[72px] text-[#F5F5F2] mb-6"
          style={{ letterSpacing: '-0.04em', lineHeight: 1.0 }}
        >
          Frequently<br />
          <span style={{ color: 'rgba(245,245,242,0.3)' }}>Asked Questions.</span>
        </h1>
        <p className="text-[#8e9192] text-base mb-12 max-w-md leading-relaxed">
          Everything you need to know about Bare Recovery Studio — services, safety, bookings, and memberships.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {['All', ...faqData.map((cat) => cat.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300"
              style={{
                background: activeCategory === cat ? '#F5F5F2' : 'rgba(255,255,255,0.05)',
                color: activeCategory === cat ? '#0B0B0B' : '#8e9192',
                border: activeCategory === cat ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ sections */}
        <div className="space-y-12">
          {displayedFAQs.map((cat) => (
            <section key={cat.category}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">{cat.icon}</span>
                <h2 className="font-display text-xl font-bold text-[#F5F5F2]">{cat.category}</h2>
              </div>
              <div className="space-y-3">
                {cat.questions.map((item, i) => {
                  const key = `${cat.category}-${i}`
                  return (
                    <FAQItem
                      key={key}
                      question={item.q}
                      answer={item.a}
                      isOpen={!!openItems[key]}
                      onClick={() => toggleItem(key)}
                    />
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div
          className="mt-16 p-8 md:p-10 rounded-[24px] text-center"
          style={{ background: 'rgba(20,20,20,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-[#8e9192] text-xs uppercase tracking-[0.2em] mb-3">Still have questions?</p>
          <h2 className="font-display font-bold text-[22px] text-[#F5F5F2] mb-3" style={{ letterSpacing: '-0.02em' }}>
            We&apos;re happy to help
          </h2>
          <p className="text-[#8e9192] text-sm mb-6 max-w-sm mx-auto leading-relaxed">
            Chat with us directly on WhatsApp. Most queries are answered within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/917670861496?text=Hi!%20I%20have%20a%20question%20about%20Bare%20Recovery%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F5F5F2] text-[#0B0B0B] px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-all active:scale-[0.98]"
            >
              Ask on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-[#c9c6c5] px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/5 transition-all"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
