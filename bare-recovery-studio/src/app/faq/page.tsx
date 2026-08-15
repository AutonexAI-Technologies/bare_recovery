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
        a: 'We offer six evidence-based recovery modalities: Cold Plunge, Contrast Therapy, Traditional Sauna, Red Light Therapy (Photobiomodulation), Compression Therapy, and the Full Circuit (all services in one session). Each service is available as a standalone session.',
      },
      {
        q: 'How long does each session take?',
        a: 'Session durations: Cold Plunge is 10–15 minutes (₹1,199), Full Circuit is 60–90 minutes (₹2,999), Contrast Therapy is 20–40 minutes (₹1,799), Sauna is 15–30 minutes (₹999), Red Light Therapy is 30–40 minutes (₹799), and Compression is 30–40 minutes (₹799). All prices are at 50% launch sale rate.',
      },
      {
        q: 'Do I need to bring anything for my session?',
        a: 'We recommend comfortable workout attire. For sauna and cold plunge, swimwear or shorts is recommended. We have changing facilities on-site. Just bring yourself — we handle the rest.',
      },
      {
        q: 'Can I combine multiple services in one visit?',
        a: 'Yes! Our most popular combination is Contrast Therapy — alternating rounds of sauna and cold plunge. The Full Circuit includes all six services in one optimised session (₹2,999 at launch rate). Our staff will help you design an optimal protocol.',
      },
      {
        q: 'Is Contrast Therapy the same as booking sauna and cold plunge separately?',
        a: 'Contrast Therapy is a guided protocol that structures your alternating rounds of heat and cold for maximum benefit — 2–3 cycles of sauna (15–20 min) followed by cold plunge (2–3 min). It is a coached, planned session rather than two separate independent visits.',
      },
    ],
  },
  {
    category: 'Health & Safety',
    icon: '🩺',
    questions: [
      {
        q: 'Is there a health waiver I need to complete?',
        a: 'Yes, all new clients complete a brief health disclosure form before their first session. This helps our team ensure your safety and flag any contraindications. Your health information is kept strictly confidential and handled as Sensitive Personal Data under Indian privacy law.',
      },
      {
        q: 'Who should NOT use cold plunge or sauna?',
        a: 'Known contraindications requiring medical clearance include: active cardiovascular disease or recent cardiac event, pregnancy, severe uncontrolled hypertension, open wounds or skin infections, Raynaud\'s syndrome (for cold plunge), epilepsy, and recent surgery within 4 weeks. When in doubt, consult your physician first.',
      },
      {
        q: 'Are your services safe for everyday athletes and gym-goers?',
        a: 'Absolutely. Our services are designed for everyone from competitive athletes to casual gym-goers and desk workers. The vast majority of healthy adults can safely use all six services. Our staff will always brief you on protocols and guide your first session.',
      },
      {
        q: 'What temperature is the cold plunge?',
        a: 'Our cold plunge is maintained between 8–12°C — the scientifically validated range for triggering vasoconstriction, norepinephrine release, and anti-inflammatory effects. First-timers often find it intense for the first 20–30 seconds — this is completely normal. Your body adapts quickly.',
      },
      {
        q: 'What temperature is the sauna?',
        a: 'Our dry sauna operates at 70–80°C. This is a traditional Finnish-style dry heat sauna (not steam/infrared). Heat stress at this range activates heat shock proteins, improves cardiovascular conditioning, and supports sleep quality as documented in research literature.',
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
        a: 'For private recovery sessions, we require at least 6 hours\' notice to cancel or reschedule. Cancellations inside this window result in the loss of session credits. Arriving more than 10 minutes late for a private session may shorten your session time to stay on schedule.',
      },
      {
        q: 'What happens if I miss my session (no-show)?',
        a: 'No-shows without prior cancellation will result in the full session being forfeited. Repeated no-shows may affect your ability to book future sessions. We ask that you give us as much notice as possible so we can offer the slot to other clients.',
      },
      {
        q: 'Can I walk in without a booking?',
        a: 'Walk-ins are welcome, subject to availability. However, we strongly recommend booking in advance — especially during peak hours (early morning and evening). During peak hours, walk-in availability may be limited.',
      },
    ],
  },
  {
    category: 'Pricing & Launch Sale',
    icon: '🔥',
    questions: [
      {
        q: 'What is the 50% Launch Sale?',
        a: 'As Bare Recovery Studio\'s founding offer, every service is 50% off regular price during the launch period. For first-time clients, the 50% discount applies to any session. ICN Hyderabad Deccan Uprising 2026 athletes receive 50% off every single visit on registration — valid through 7th September 2026. No expiry. No time limit.',
      },
      {
        q: 'What is the ICN athlete discount?',
        a: 'ICN Hyderabad Deccan Uprising 2026 takes place on 29 & 30 August 2026. All registered ICN athletes receive 50% off every single visit on registration — valid through 7th September 2026. No expiry. No time limit. Simply show your registration card or mention you\'re an ICN athlete when booking via WhatsApp.',
      },
      {
        q: 'What are the current session prices?',
        a: 'At 50% launch rate: Full Circuit ₹2,999 (60–90 min) · Contrast Therapy ₹1,799 (20–40 min) · Cold Plunge ₹1,199 (10–15 min) · Sauna ₹999 (15–30 min) · Red Light Therapy ₹799 (30–40 min) · Compression ₹799 (30–40 min). Regular prices will be double once the launch sale ends.',
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
        a: 'We are open 10 AM – 10 PM, every day. We offer morning and evening slots to fit around your training schedule. Booking in advance is recommended for peak hours.',
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
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        background: isOpen ? 'rgba(30,28,28,0.95)' : 'rgba(18,17,17,0.85)',
        border: isOpen ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.07)',
      }}
      onClick={onClick}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 20px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: '#f5f0eb', fontSize: 15, lineHeight: 1.5, flex: 1 }}>{question}</span>
        <span
          style={{
            width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: isOpen ? '#f5f0eb' : 'rgba(255,255,255,0.07)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'all 0.3s ease',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#0B0B0B' : '#c4c1c4'} strokeWidth="2.5">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </div>
      <div style={{ overflow: 'hidden', maxHeight: isOpen ? 600 : 0, transition: 'max-height 0.35s cubic-bezier(0.32,0.72,0,1)' }}>
        <p style={{ fontSize: 15, color: 'rgba(221,218,221,0.80)', lineHeight: 1.8, padding: '0 20px 20px' }}>{answer}</p>
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
    <div className="min-h-screen" style={{ background: '#0f0e0e' }}>
      <div style={{ paddingTop: 144, paddingBottom: 112, paddingLeft: 'clamp(20px,5vw,64px)', paddingRight: 'clamp(20px,5vw,64px)', maxWidth: 920, margin: '0 auto' }}>

        {/* Header */}
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(188,163,134,0.70)', display: 'block', marginBottom: 16 }}>Help Center</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,7vw,72px)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#f5f0eb', marginBottom: 6 }}>
          Frequently
        </h1>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,7vw,72px)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.0, color: 'rgba(245,240,235,0.25)', marginBottom: 24 }}>
          Asked Questions.
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(221,218,221,0.65)', marginBottom: 48, maxWidth: 520, lineHeight: 1.75 }}>
          Everything you need to know about Bare Recovery Studio — services, safety, bookings, and our launch sale.
        </p>

        {/* Category filters — horizontal scroll on mobile */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 48, overflowX: 'auto', paddingBottom: 4, WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          {['All', ...faqData.map((cat) => cat.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: 9999,
                fontSize: 12,
                fontWeight: 600,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                background: activeCategory === cat ? '#f5f0eb' : 'rgba(255,255,255,0.05)',
                color: activeCategory === cat ? '#0B0B0B' : 'rgba(196,193,196,0.80)',
                border: activeCategory === cat ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {displayedFAQs.map((cat) => (
            <section key={cat.category}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: 20 }}>{cat.icon}</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: '#f5f0eb' }}>{cat.category}</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
          style={{
            marginTop: 64,
            padding: 'clamp(28px,5vw,48px)',
            borderRadius: 24,
            textAlign: 'center',
            background: 'rgba(20,18,18,0.85)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <p style={{ fontSize: 10, color: 'rgba(188,163,134,0.60)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 12 }}>Still have questions?</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(20px,3vw,28px)', color: '#f5f0eb', marginBottom: 12, letterSpacing: '-0.02em' }}>
            We&apos;re happy to help
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(221,218,221,0.60)', marginBottom: 28, maxWidth: 380, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Chat with us directly on WhatsApp. Most queries are answered within minutes.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a
              href="https://wa.me/917670861496?text=Hi!%20I%20have%20a%20question%20about%20Bare%20Recovery%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                background: '#f5f0eb', color: '#0B0B0B',
                padding: '13px 28px', borderRadius: 9999,
                fontWeight: 700, fontSize: 14, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f5f0eb' }}
            >
              Ask on WhatsApp
            </a>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(196,193,196,0.80)',
                padding: '13px 28px', borderRadius: 9999,
                fontWeight: 600, fontSize: 14, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              Contact Form
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
