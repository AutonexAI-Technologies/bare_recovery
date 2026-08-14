'use client'

import Link from 'next/link'
import FadeIn from '@/components/animations/FadeIn'

const services = [
  {
    id: 'cold-plunge',
    name: 'Cold Plunge',
    tagline: 'Full-body immersion at 10–15°C. Sharpen the mind, kill inflammation.',
    duration: '10–15 min',
    mrp: '₹2,398',
    price: '₹1,199',
    image: '/images/services/cold-plunge.PNG',
    label: 'HIGH INTENSITY',
    href: '/services/cold-plunge',
    objectPosition: 'center center',
  },
  {
    id: 'contrast-therapy',
    name: 'Contrast Therapy',
    tagline: 'Alternate heat and cold — the ultimate vascular pump.',
    duration: '20–40 min',
    mrp: '₹3,598',
    price: '₹1,799',
    image: '/images/services/contrast-therapy.PNG',
    label: 'SIGNATURE',
    href: '/services/contrast-therapy',
    objectPosition: 'center center',
  },
  {
    id: 'traditional-sauna',
    name: 'Traditional Sauna',
    tagline: 'Dry heat at 70–95°C for deep muscle relief and cardiovascular benefit.',
    duration: '15–30 min',
    mrp: '₹1,998',
    price: '₹999',
    image: '/images/services/sauna.PNG',
    label: 'HEAT THERAPY',
    href: '/services/traditional-sauna',
    objectPosition: 'center center',
  },
  {
    id: 'infrared-sauna',
    name: 'Infrared Sauna',
    tagline: 'Far-infrared waves penetrate deep into tissue for gentle, sustained heat.',
    duration: '15–30 min',
    mrp: '₹1,998',
    price: '₹999',
    image: '/images/services/infrared-sauna.PNG',
    label: 'DEEP HEAT',
    href: '/services/infrared-sauna',
    objectPosition: 'center top',
  },
  {
    id: 'red-light-therapy',
    name: 'Red Light Therapy',
    tagline: 'Cellular repair at 660nm & 850nm. Medical-grade photobiomodulation.',
    duration: '30–40 min',
    mrp: '₹1,598',
    price: '₹799',
    image: '/images/services/redlight-therapy.PNG',
    label: 'CELLULAR',
    href: '/services/red-light-therapy',
    objectPosition: 'center top',
  },
  {
    id: 'compression-therapy',
    name: 'Compression Therapy',
    tagline: 'Dynamic air pressure that flushes metabolic waste and restores circulation.',
    duration: '30–40 min',
    mrp: '₹1,598',
    price: '₹799',
    image: '/images/services/compression-therapy.PNG',
    label: 'LYMPHATIC',
    href: '/services/compression-therapy',
    objectPosition: 'center 20%',
  },
]

function ServiceCard({
  svc,
  height = 420,
}: {
  svc: (typeof services)[0]
  height?: number | string
}) {
  return (
    <Link href={svc.href} style={{ display: 'block', textDecoration: 'none' }}>
      <div
        className="group"
        style={{
          position: 'relative',
          width: '100%',
          height,
          borderRadius: 20,
          overflow: 'hidden',
          background: '#111010',
          border: '1px solid rgba(196,193,196,0.07)',
          cursor: 'pointer',
        }}
      >
        {/* Full-bleed photo */}
        <img
          src={svc.image}
          alt={svc.name}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: svc.objectPosition,
            transition: 'transform 700ms cubic-bezier(0.32,0.72,0,1)',
            willChange: 'transform',
          }}
          className="group-hover:scale-[1.04]"
        />

        {/* Deep gradient — heavier at bottom for price legibility */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(6,6,6,1) 0%, rgba(6,6,6,0.80) 28%, rgba(6,6,6,0.30) 58%, rgba(6,6,6,0.05) 80%, transparent 100%)',
        }} />

        {/* Hover overlay */}
        <div
          style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', transition: 'background 0.4s ease' }}
          className="group-hover:bg-black/10"
        />

        {/* Top-left: category label */}
        <span style={{
          position: 'absolute', top: 14, left: 14,
          fontSize: 9, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase',
          color: '#c4c1c4',
          background: 'rgba(10,10,10,0.70)',
          border: '1px solid rgba(196,193,196,0.12)',
          backdropFilter: 'blur(8px)',
          padding: '5px 11px', borderRadius: 9999,
        }}>
          {svc.label}
        </span>

        {/* Top-right: FOUNDING RATE badge */}
        <span style={{
          position: 'absolute', top: 14, right: 14,
          fontSize: 8, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(188,163,134,0.90)',
          background: 'rgba(188,163,134,0.10)',
          border: '1px solid rgba(188,163,134,0.25)',
          backdropFilter: 'blur(8px)',
          padding: '5px 10px', borderRadius: 9999,
        }}>
          Founding Rate
        </span>

        {/* Bottom content */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '0 18px 20px' }}>
          {/* Duration pill */}
          <span style={{
            display: 'inline-block', marginBottom: 8,
            fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#c4c1c4',
            background: 'rgba(86,84,86,0.70)',
            border: '1px solid rgba(196,193,196,0.10)',
            padding: '3px 9px', borderRadius: 9999,
          }}>
            {svc.duration}
          </span>

          {/* Name */}
          <div style={{
            fontFamily: 'var(--font-display, serif)',
            fontSize: 20, fontWeight: 400, letterSpacing: '-0.01em',
            color: '#f5f0eb', lineHeight: 1.2, marginBottom: 4,
          }}>
            {svc.name}
          </div>

          {/* Tagline */}
          <p style={{ fontSize: 12, color: 'rgba(196,193,196,0.75)', lineHeight: 1.5, marginBottom: 12 }}>
            {svc.tagline}
          </p>

          {/* Price row — the sale story lives here */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              {/* Strikethrough MRP — clearly visible */}
              <div style={{
                fontSize: 13, fontWeight: 500,
                color: 'rgba(245,240,235,0.38)',
                textDecoration: 'line-through',
                letterSpacing: '-0.01em',
                marginBottom: 1,
              }}>
                {svc.mrp}
              </div>
              {/* Sale price — large & proud */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{
                  fontFamily: 'var(--font-display, serif)',
                  fontSize: 26, fontWeight: 300, letterSpacing: '-0.03em',
                  color: '#f5f0eb', lineHeight: 1,
                }}>
                  {svc.price}
                </span>
                <span style={{
                  fontSize: 9, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'rgba(188,163,134,0.85)',
                  border: '1px solid rgba(188,163,134,0.22)',
                  padding: '3px 8px', borderRadius: 9999,
                }}>
                  50% off
                </span>
              </div>
            </div>

            {/* Book CTA — slides in on hover */}
            <span
              className="group-hover:opacity-100 group-hover:translate-x-0"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                color: '#1a1919',
                background: '#d9d1cc',
                padding: '7px 14px', borderRadius: 9999,
                opacity: 0, transform: 'translateX(10px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                flexShrink: 0,
              }}
            >
              Book
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-[100px] px-4 md:px-12 max-w-[1320px] mx-auto">
      <FadeIn direction="up">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <span className="section-label">What We Offer</span>
            <h2
              className="font-display text-[32px] md:text-[52px]"
              style={{ letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f5f0eb' }}
            >
              Recovery Services
            </h2>
            {/* Sale note inline with section header */}
            <p style={{ fontSize: 12, color: 'rgba(188,163,134,0.70)', marginTop: 8, letterSpacing: '0.04em' }}>
              All sessions at founding rates — 50% off for a limited time.
            </p>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
            style={{ color: '#c4c1c4' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f5f0eb' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#c4c1c4' }}
          >
            View all
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </FadeIn>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
        {services.slice(0, 3).map((svc, i) => (
          <FadeIn key={svc.id} direction="up" delay={i * 60}>
            <ServiceCard svc={svc} height="clamp(280px, 72vw, 520px)" />
          </FadeIn>
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {services.slice(3).map((svc, i) => (
          <FadeIn key={svc.id} direction="up" delay={(i + 3) * 60}>
            <ServiceCard svc={svc} height="clamp(280px, 72vw, 520px)" />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
