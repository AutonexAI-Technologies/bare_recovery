import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getServiceBySlug } from '@/data/services'
import { CONTACT_INFO } from '@/lib/constants'
import type { Metadata } from 'next'

// Use the full -hero.png images for the detail page hero sections
const serviceImages: Record<string, string> = {
  'compression-therapy': '/images/services/compression-therapy.PNG',
  'red-light-therapy': '/images/services/redlight-therapy.PNG',
  'traditional-sauna': '/images/services/sauna.PNG',
  'cold-plunge': '/images/services/cold-plunge.PNG',
  'contrast-therapy': '/images/services/contrast-therapy.PNG',
}

// Thumbnail images for related services cards (using hero PNGs as .jpgs no longer exist)
const serviceThumbs: Record<string, string> = {
  'compression-therapy': '/images/services/compression-therapy.PNG',
  'red-light-therapy': '/images/services/redlight-therapy.PNG',
  'traditional-sauna': '/images/services/sauna.PNG',
  'cold-plunge': '/images/services/cold-plunge.PNG',
  'contrast-therapy': '/images/services/contrast-therapy.PNG',
}

const howItWorks: Record<string, { step: string; title: string; desc: string }[]> = {
  'compression-therapy': [
    { step: '01', title: 'Arrive & Suit Up', desc: 'Slip into the compression sleeves — upper body, lower body, or both depending on your session.' },
    { step: '02', title: 'Dynamic Pressure Cycles', desc: 'The system applies rhythmic pulsing pressure that mimics your body\'s natural muscle pump, moving fluid from distal to proximal.' },
    { step: '03', title: 'Flush & Recover', desc: 'Metabolic waste is driven out, fresh oxygenated blood floods the tissue. You step out lighter and recovered.' },
  ],
  'red-light-therapy': [
    { step: '01', title: 'Position & Expose', desc: 'Stand or lie in front of the red light panel. Minimal clothing for maximum skin exposure.' },
    { step: '02', title: 'Photobiomodulation', desc: '660nm and 850nm wavelengths penetrate deep into tissue, stimulating mitochondrial ATP production.' },
    { step: '03', title: 'Cellular Repair', desc: 'Inflammation markers drop, collagen synthesis activates, and cellular energy is restored over 10–20 minutes.' },
  ],
  'traditional-sauna': [
    { step: '01', title: 'Enter the Heat', desc: 'Step into our 70–80°C dry sauna. Your core temperature begins rising immediately.' },
    { step: '02', title: 'Heat Stress Response', desc: 'Heart rate increases, blood vessels dilate, and heat shock proteins activate — beneficial adaptations across the board.' },
    { step: '03', title: 'Reset & Restore', desc: 'Exit and cool naturally. Cortisol drops, sleep improves, muscles relax. Repeat 2–3 times for contrast effect.' },
  ],
  'cold-plunge': [
    { step: '01', title: 'Breathe & Enter', desc: 'Controlled breathing before you step in. The first 30 seconds are the hardest — your body adjusts rapidly.' },
    { step: '02', title: 'Vasoconstriction', desc: 'Blood vessels constrict, driving blood to your core. Norepinephrine surges. Inflammatory markers plummet.' },
    { step: '03', title: 'Exit & Flush', desc: 'On exit, vessels dilate. Fresh blood floods your muscles. Mental clarity and energy follow immediately.' },
  ],
  'contrast-therapy': [
    { step: '01', title: 'Sauna Round (15–20 min)', desc: 'Begin with heat. Vasodilation opens blood vessels, muscles relax, and circulation increases.' },
    { step: '02', title: 'Cold Plunge (2–3 min)', desc: 'Rapid vasoconstriction. The temperature contrast creates a powerful vascular pump effect.' },
    { step: '03', title: 'Repeat 2–3 Rounds', desc: 'Each cycle compounds the effect. Athletes report feeling completely reset after a full contrast session.' },
  ],
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const svc = getServiceBySlug(slug)
  if (!svc) return {}
  return {
    title: svc.metadata.title,
    description: svc.metadata.description,
    keywords: svc.metadata.keywords,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const svc = getServiceBySlug(slug)
  if (!svc) notFound()

  const img = serviceImages[svc.id] ?? '/images/services/compression-hero.png'
  const steps = howItWorks[svc.id] ?? []
  const waMsg = encodeURIComponent(`Hi! I'd like to book a ${svc.name} session at Bare Recovery Studio.`)

  // Build pricing rows
  const pricingRows: { label: string; price: number }[] = []
  if (svc.pricing.single) pricingRows.push({ label: 'Single Session', price: svc.pricing.single })
  if (svc.pricing.upperBody) pricingRows.push({ label: 'Upper Body', price: svc.pricing.upperBody })
  if (svc.pricing.lowerBody) pricingRows.push({ label: 'Lower Body', price: svc.pricing.lowerBody })
  if (svc.pricing.fullBody) pricingRows.push({ label: 'Full Body (Upper + Lower)', price: svc.pricing.fullBody })
  if (svc.pricing.couple) pricingRows.push({ label: 'Couple Session', price: svc.pricing.couple })

  const relatedSvcs = services.filter((s) => svc.relatedServices.includes(s.id)).slice(0, 2)

  return (
    <div>

      {/* ── Hero — full natural image height, zero cropping ── */}
      {/*
        Key technique: the outer div is position:relative with NO fixed height.
        The <img> is width:100% height:auto so it renders at its full natural
        aspect ratio — nothing is cropped. The gradient + text are position:absolute
        layered on top.
      */}
      <div className="relative w-full pt-32 pb-16 md:py-24 bg-[#0B0B0B]">
        <div className="px-5 md:px-12 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Service Details and Metadata */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link href="/services" className="text-xs text-[#8e9192] hover:text-[#F5F5F2] transition-colors font-medium">
                Services
              </Link>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8e9192" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
              <span className="text-xs text-[#c9c6c5] font-medium">{svc.name}</span>
            </div>

            {/* Title */}
            <h1
              className="font-display font-light text-[#F5F5F2] mb-6"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              {svc.name}
            </h1>

            {/* Tagline */}
            <p className="text-[#8e9192] text-lg max-w-xl mb-8 leading-relaxed">
              {svc.tagline}
            </p>

            {/* Badges / Duration & Price */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span
                className="px-4 py-2 rounded-full text-xs font-semibold text-[#BCA386] uppercase tracking-wider"
                style={{ background: 'rgba(188,163,134,0.08)', border: '1px solid rgba(188,163,134,0.18)', backdropFilter: 'blur(8px)' }}
              >
                {svc.duration}
              </span>
              {pricingRows[0] && (
                <span
                  className="px-4 py-2 rounded-full text-xs font-semibold text-[#BCA386] uppercase tracking-wider"
                  style={{ background: 'rgba(188,163,134,0.08)', border: '1px solid rgba(188,163,134,0.18)', backdropFilter: 'blur(8px)' }}
                >
                  From ₹{pricingRows[0].price.toLocaleString()}
                </span>
              )}
            </div>

            {/* Direct Booking CTA */}
            <div>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#BCA386] text-[#12110F] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#cbb499] transition-all duration-300 active:scale-[0.97] shadow-[0_8px_30px_rgba(188,163,134,0.15)]"
              >
                Book This Session
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Properly sized, zero-cropped portrait service image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[420px] aspect-[0.71] rounded-[24px] overflow-hidden border border-white/[0.08] shadow-2xl group"
            >
              <img
                src={img}
                alt={svc.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="px-5 md:px-12 max-w-[1320px] mx-auto py-16 md:py-24 space-y-20 md:space-y-28">

        {/* ── What It Is ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] text-[#F5F5F2] mb-6" style={{ letterSpacing: '-0.02em' }}>
              What Is {svc.name}?
            </h2>
            <div className="space-y-4 text-[#8e9192] text-base leading-[1.9]">
              {svc.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <div
            className="p-8 rounded-[24px] space-y-5"
            style={{ background: 'rgba(20,20,20,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8e9192]">At A Glance</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                <span className="text-[#8e9192] text-sm">Duration</span>
                <span className="text-[#F5F5F2] font-semibold text-sm">{svc.duration}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                <span className="text-[#8e9192] text-sm">Benefits</span>
                <span className="text-[#F5F5F2] font-semibold text-sm">{svc.benefits.length} proven</span>
              </div>
              {pricingRows.map((row) => (
                <div key={row.label} className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <span className="text-[#8e9192] text-sm">{row.label}</span>
                  <span className="text-[#F5F5F2] font-semibold text-sm">₹{row.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#F5F5F2] text-[#0B0B0B] py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-all active:scale-95 mt-2"
            >
              Book This Session
            </a>
          </div>
        </section>

        {/* ── How It Works ── */}
        {steps.length > 0 && (
          <section>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] text-[#F5F5F2] mb-10" style={{ letterSpacing: '-0.02em' }}>
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="p-8 rounded-[24px] relative overflow-hidden"
                  style={{ background: 'rgba(20,20,20,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="absolute top-5 right-5 font-display font-black text-[56px] leading-none pointer-events-none select-none"
                    style={{ color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.04em' }}
                  >
                    {s.step}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center mb-5 text-xs font-bold text-[#c9c6c5]">
                    {parseInt(s.step)}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[#F5F5F2] mb-3">{s.title}</h3>
                  <p className="text-[#8e9192] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Benefits ── */}
        <section>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] text-[#F5F5F2] mb-10" style={{ letterSpacing: '-0.02em' }}>
            Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {svc.benefits.map((b) => (
              <div
                key={b.text}
                className="group p-6 rounded-[20px] transition-all duration-300 hover:scale-[1.02] cursor-default"
                style={{ background: 'rgba(20,20,20,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-[#c9c6c5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c9c6c5" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-[#F5F5F2] text-sm">{b.text}</span>
                </div>
                <p className="text-[#8e9192] text-xs leading-relaxed pl-8">{b.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing (only) ── */}
        <section>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] text-[#F5F5F2] mb-10" style={{ letterSpacing: '-0.02em' }}>
            Pricing
          </h2>
          <div className="max-w-lg space-y-3">
            {pricingRows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between p-5 rounded-2xl ${i === 0 ? 'bg-white/[0.06] border border-white/10' : ''}`}
                style={i !== 0 ? { background: 'rgba(20,20,20,0.5)', border: '1px solid rgba(255,255,255,0.05)' } : {}}
              >
                <span className="text-[#c4c7c7] text-sm">{row.label}</span>
                <span className="font-display font-bold text-[#F5F5F2]">₹{row.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F5F5F2] text-[#0B0B0B] px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all active:scale-95"
            >
              Book on WhatsApp
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 border border-white/20 text-[#F5F5F2] px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-all"
            >
              See Full Pricing
            </Link>
          </div>
        </section>

        {/* ── Related Services ── */}
        {relatedSvcs.length > 0 && (
          <section>
            <h2 className="font-display font-bold text-[24px] text-[#F5F5F2] mb-8" style={{ letterSpacing: '-0.02em' }}>
              Pair With
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedSvcs.map((r) => (
                <Link
                  key={r.id}
                  href={`/services/${r.slug}`}
                  className="group flex gap-5 p-5 rounded-[20px] transition-all hover:scale-[1.01]"
                  style={{ background: 'rgba(20,20,20,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={serviceThumbs[r.id] ?? serviceImages[r.id]}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[#F5F5F2] mb-1">{r.name}</h3>
                    <p className="text-[#8e9192] text-xs">{r.duration}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
