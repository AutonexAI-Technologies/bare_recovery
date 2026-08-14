'use client'

import Link from 'next/link'
import FadeIn from '@/components/animations/FadeIn'

const services = [
  {
    id: 'cold-plunge',
    name: 'Cold Plunge',
    tagline: 'Full-body immersion at 10–15°C. Sharpen the mind, kill inflammation.',
    duration: '10–15 min',
    price: 'From ₹1,199',
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
    price: 'From ₹1,799',
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
    price: 'From ₹999',
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
    price: 'From ₹999',
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
    price: 'From ₹799',
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
      {/*
        Outer wrapper — explicit dimensions, overflow:hidden, position:relative.
        This is the clipping boundary for the photo.
      */}
      <div
        className="group"
        style={{
          position: 'relative',
          width: '100%',
          height: height,
          borderRadius: 20,
          overflow: 'hidden',
          background: '#1a1919',
          border: '1px solid rgba(196,193,196,0.08)',
          cursor: 'pointer',
        }}
      >
        {/* Full-bleed photo */}
        <img
          src={svc.image}
          alt={svc.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: svc.objectPosition,
            transition: 'transform 700ms cubic-bezier(0.32,0.72,0,1)',
            willChange: 'transform',
          }}
          className="group-hover:scale-[1.04]"
        />

        {/* Bottom-to-top gradient — keeps text legible */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.65) 42%, rgba(10,10,10,0.15) 72%, transparent 100%)',
          }}
        />

        {/* Hover darkening layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0)',
            transition: 'background 0.4s ease',
          }}
          className="group-hover:bg-black/10"
        />

        {/* 50% OFF sale ribbon — top right */}
        <span
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            fontSize: 9,
            fontWeight: 900,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#fff',
            background: 'linear-gradient(90deg,#dc2626,#ea580c)',
            padding: '4px 10px',
            borderRadius: 9999,
            boxShadow: '0 0 12px rgba(220,38,38,0.45)',
            zIndex: 10,
          }}
        >
          50% OFF
        </span>

        {/* Top label */}
        <span
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#c4c1c4',
            background: 'rgba(10,10,10,0.75)',
            border: '1px solid rgba(196,193,196,0.14)',
            backdropFilter: 'blur(8px)',
            padding: '5px 11px',
            borderRadius: 9999,
          }}
        >
          {svc.label}
        </span>

        {/* Bottom content */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: '0 18px 20px',
          }}
        >
          {/* Duration pill */}
          <span
            style={{
              display: 'inline-block',
              marginBottom: 8,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#c4c1c4',
              background: 'rgba(86,84,86,0.75)',
              border: '1px solid rgba(196,193,196,0.12)',
              padding: '3px 9px',
              borderRadius: 9999,
            }}
          >
            {svc.duration}
          </span>

          {/* Name */}
          <div
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: '-0.01em',
              color: '#f5f0eb',
              lineHeight: 1.2,
              marginBottom: 5,
              textShadow: '0 2px 12px rgba(0,0,0,0.80)',
            }}
          >
            {svc.name}
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: 12,
              color: '#c4c1c4',
              lineHeight: 1.55,
              marginBottom: 10,
            }}
          >
            {svc.tagline}
          </p>

          {/* Price + CTA row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#d9d1cc' }}>
              {svc.price}
            </span>
            <span
              className="group-hover:opacity-100 group-hover:translate-x-0"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 11,
                fontWeight: 600,
                color: '#3d3b3d',
                background: '#d9d1cc',
                padding: '5px 13px',
                borderRadius: 9999,
                opacity: 0,
                transform: 'translateX(8px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
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

      {/* Row 1: tall cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
        {services.slice(0, 3).map((svc, i) => (
          <FadeIn key={svc.id} direction="up" delay={i * 60}>
            <ServiceCard svc={svc} height="clamp(280px, 72vw, 520px)" />
          </FadeIn>
        ))}
      </div>

      {/* Row 2: cards with full image visibility */}
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
