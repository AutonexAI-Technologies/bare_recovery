import Link from 'next/link'
import { services } from '@/data/services'
import { CONTACT_INFO } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Bare Recovery Studio',
  description: 'Explore Bare Recovery Studio\'s 5 science-backed recovery services: Cold Plunge, Contrast Therapy, Traditional Sauna, Red Light Therapy, and Compression Therapy in Kompally.',
}

const serviceImages: Record<string, string> = {
  'compression-therapy': '/images/services/compression-therapy.PNG',
  'red-light-therapy': '/images/services/redlight-therapy.PNG',
  'traditional-sauna': '/images/services/sauna.PNG',
  'cold-plunge': '/images/services/cold-plunge.PNG',
  'contrast-therapy': '/images/services/contrast-therapy.PNG',
}

function priceLabel(svc: typeof services[0]) {
  if (svc.pricing.upperBody) return `From ₹${svc.pricing.upperBody.toLocaleString()}`
  if (svc.pricing.single) return `From ₹${svc.pricing.single.toLocaleString()}`
  return ''
}

function coupleLabel(svc: typeof services[0]) {
  if (svc.pricing.couple) return `Couple ₹${svc.pricing.couple.toLocaleString()}`
  return null
}

export default function ServicesPage() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I would like to book a session at Bare Recovery Studio.')}`

  // Put contrast therapy first (signature), then rest
  const ordered = [
    services.find(s => s.id === 'contrast-therapy')!,
    services.find(s => s.id === 'cold-plunge')!,
    services.find(s => s.id === 'traditional-sauna')!,
    services.find(s => s.id === 'red-light-therapy')!,
    services.find(s => s.id === 'compression-therapy')!,
  ].filter(Boolean)

  const featured = ordered[0]
  const rest = ordered.slice(1)

  return (
    <div className="min-h-screen">

      {/* ── Header ── */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-16 px-4 md:px-12">
        <div className="max-w-[1320px] mx-auto">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9c6c5] mb-6"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] animate-pulse" />
            5 Recovery Modalities
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1
              className="font-display font-light text-[#F5F5F2]"
              style={{ fontSize: 'clamp(40px, 8vw, 100px)', letterSpacing: '-0.04em', lineHeight: 1.0 }}
            >
              Recovery<br /><span style={{ color: 'rgba(245,245,242,0.3)' }}>Services.</span>
            </h1>
            <p className="text-[#8e9192] text-sm md:text-base max-w-xs leading-relaxed md:pb-3">
              Every modality backed by science. Delivered in a private studio with guided coaching available on request.
            </p>
          </div>
        </div>
      </section>

      <div className="px-4 md:px-12 max-w-[1320px] mx-auto pb-16 md:pb-24">

        {/* ── Services Cards Grid ── */}
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
          {ordered.map((svc) => (
            <Link
              key={svc.id}
              href={`/services/${svc.slug}`}
              className="group relative overflow-hidden rounded-[24px] transition-all duration-700 hover:scale-[1.01] bg-[#141414] h-[380px] md:h-[550px] w-full md:w-[calc(33.333%-16px)] flex flex-col justify-between p-5 md:p-7 border border-white/[0.07]"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                style={{
                  backgroundImage: `url('${serviceImages[svc.id]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(11,11,11,0.98) 0%, rgba(11,11,11,0.75) 45%, rgba(11,11,11,0.2) 80%, transparent 100%)' }}
              />

              {/* Content Top */}
              <div className="relative z-10">
                <span
                  className="inline-block px-3 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.18em] text-[#c9c6c5]"
                  style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
                >
                  {svc.duration}
                </span>
              </div>

              {/* Content Bottom */}
              <div className="relative z-10">
                <h3
                  className="font-display font-light text-[#F5F5F2] mb-2"
                  style={{ fontSize: '28px', letterSpacing: '-0.03em', lineHeight: 1.1, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
                >
                  {svc.name}
                </h3>
                <p className="text-[#c9c6c5] text-xs mb-5 line-clamp-2 max-w-sm leading-relaxed opacity-80">
                  {svc.tagline}
                </p>
                {/* Pricing row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-display font-semibold text-[#F5F5F2] text-lg" style={{ letterSpacing: '-0.03em' }}>
                    {priceLabel(svc)}
                  </span>
                  {coupleLabel(svc) && (
                    <span
                      className="text-[#8e9192] text-xs px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      {coupleLabel(svc)}
                    </span>
                  )}
                  {/* Special compression pricing */}
                  {svc.id === 'compression-therapy' && (
                    <span
                      className="text-[#8e9192] text-xs px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      Full Body ₹1,399
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Full Circuit CTA ── */}
        <div
          className="mt-6 md:mt-8 p-6 md:p-10 rounded-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8e9192] mb-2">Best Value</p>
            <h3
              className="font-display font-light text-[#F5F5F2] mb-1"
              style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              Full Circuit — All 5 Services
            </h3>
            <p className="text-[#8e9192] text-sm">Cold Plunge + Contrast + Sauna + Red Light + Compression in one premium session</p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div>
              <p className="font-display font-light text-[#F5F5F2]" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.04em', lineHeight: 1 }}>₹2,999</p>
              <p className="text-[#8e9192] text-xs">Couple ₹4,799</p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#F5F5F2] text-[#0B0B0B] pl-6 pr-2 py-3 rounded-full font-bold text-sm hover:bg-white transition-all active:scale-[0.98] shrink-0"
            >
              Book Now
              <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0B0B0B" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
