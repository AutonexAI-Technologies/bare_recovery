'use client'

import Link from 'next/link'
import FadeIn from '@/components/animations/FadeIn'

const services = [
  {
    id: 'compression-therapy',
    name: 'Compression Therapy',
    tagline: 'Dynamic air pressure that flushes metabolic waste and restores circulation.',
    duration: '20–30 min',
    price: 'From ₹799',
    image: '/images/services/compression-therapy.PNG',
    span: 'md:col-span-4',
    tall: false,
  },
  {
    id: 'red-light-therapy',
    name: 'Red Light Therapy',
    tagline: 'Cellular repair at 660nm & 850nm wavelengths. Science-backed photobiomodulation.',
    duration: '10–20 min',
    price: 'From ₹799',
    image: '/images/services/redlight-therapy.PNG',
    span: 'md:col-span-4',
    tall: false,
  },
  {
    id: 'traditional-sauna',
    name: 'Traditional & Infrared Sauna',
    tagline: 'Dry heat at 70–80°C for deep muscle relaxation and cardiovascular support.',
    duration: '15–30 min',
    price: 'From ₹999',
    image: '/images/services/sauna.PNG',
    span: 'md:col-span-4',
    tall: false,
  },
  {
    id: 'cold-plunge',
    name: 'Cold Plunge',
    tagline: 'Full-body immersion at 10–15°C. Reduce inflammation, sharpen the mind.',
    duration: '2–5 min',
    price: 'From ₹1,199',
    image: '/images/services/cold-plunge.PNG',
    span: 'md:col-span-6',
    tall: true,
  },
  {
    id: 'contrast-therapy',
    name: 'Contrast Therapy',
    tagline: 'Alternate heat and cold for the ultimate vascular pump and full-body reset.',
    duration: '20–40 min',
    price: 'From ₹1,799',
    image: '/images/services/contrast-therapy.PNG',
    span: 'md:col-span-6',
    tall: true,
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-[100px] px-4 md:px-12 max-w-[1320px] mx-auto">
      <FadeIn direction="up">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A19F97] block mb-3">
              What We Offer
            </span>
            <h2
              className="font-display text-[32px] md:text-[54px] text-[#FFFBF5]"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Recovery Services
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-sm text-[#A19F97] hover:text-[#BCA386] transition-colors mt-4 md:mt-0"
          >
            View all services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </FadeIn>

      {/* Bento Grid */}
      <div className="flex flex-wrap gap-3 md:gap-5 justify-center">
        {services.map((svc, i) => (
          <FadeIn
            key={svc.id}
            direction="up"
            delay={i * 80}
            className="w-full md:w-[calc(33.333%-14px)]"
          >
            <ServiceCard svc={svc} height="h-[380px] md:h-[550px]" />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ svc, height }: { svc: typeof services[0]; height: string }) {
  return (
    <Link
      href={`/services/${svc.id}`}
      className={`group relative ${height} rounded-[24px] overflow-hidden block bg-[#141414] border border-white/[0.06]`}
    >
      {/* Image */}
      <img
        src={svc.image}
        alt={svc.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
      />

      {/* Gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(11,11,11,0.98) 0%, rgba(11,11,11,0.75) 45%, rgba(11,11,11,0.2) 80%, transparent 100%)'
        }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
        {/* Duration pill */}
        <span
          className="inline-block self-start mb-3 px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#BCA386] uppercase tracking-widest"
          style={{
            background: 'rgba(188, 163, 134, 0.08)',
            border: '1px solid rgba(188, 163, 134, 0.15)',
          }}
        >
          {svc.duration}
        </span>

        <h3
          className="font-display text-xl md:text-2xl text-[#FFFBF5] mb-2 leading-tight"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
        >
          {svc.name}
        </h3>
        <p className="text-[#A19F97] text-sm leading-relaxed mb-4 hidden md:block">
          {svc.tagline}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-[#FFFBF5] font-semibold text-sm">{svc.price}</span>
          <span
            className="flex items-center gap-1.5 text-xs font-semibold text-[#12110F] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 px-3 py-1.5 rounded-full"
            style={{ background: '#BCA386' }}
          >
            Learn More
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
