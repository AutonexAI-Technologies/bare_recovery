'use client'

import FadeIn from '@/components/animations/FadeIn'
import { CONTACT_INFO, STUDIO_ADDRESS, STUDIO_HOURS } from '@/lib/constants'

export default function LocationSection() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I would like to book a session at Bare Recovery Studio.')}`

  return (
    <section className="py-16 md:py-[120px] px-4 md:px-12 max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* ── Left: Info ── */}
        <FadeIn direction="right">
          <span className="section-label">Location</span>
          <h2
            className="font-display text-[32px] md:text-[50px] mb-6"
            style={{ letterSpacing: '-0.025em', lineHeight: 1.1, color: '#f5f0eb' }}
          >
            Find Us in<br />Jeedimetla.
          </h2>
          <p
            className="text-[15px] leading-[1.75] mb-8 max-w-sm"
            style={{ color: '#c4c1c4' }}
          >
            Bare Recovery Studio is located at Raichandani, Jeedimetla, Hyderabad — easy access from the surrounding localities. Free parking available.
          </p>

          {/* Info cards */}
          <div className="space-y-3 mb-8">
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: 'Address',
                value: 'Raichandani, Jeedimetla, Hyderabad, Secunderabad, Telangana 500010',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: 'Hours',
                value: STUDIO_HOURS.full,
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.75-.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: 'Contact',
                value: CONTACT_INFO.phoneFormatted,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-2xl"
                style={{
                  background: 'rgba(86,84,86,0.35)',
                  border: '1px solid rgba(196,193,196,0.08)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: 'rgba(61,59,61,0.80)',
                    border: '1px solid rgba(196,193,196,0.10)',
                    color: '#c4c1c4',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-medium mb-0.5" style={{ color: '#dddadd' }}>
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#dddadd' }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href={STUDIO_ADDRESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300"
              style={{ background: '#d9d1cc', color: '#3d3b3d' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#c4c1c4' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#d9d1cc' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Open in Google Maps
            </a>
            <a
              href={STUDIO_ADDRESS.appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300"
              style={{ border: '1px solid rgba(196,193,196,0.16)', color: '#c4c1c4' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(196,193,196,0.06)'
                el.style.color = '#f5f0eb'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.color = '#c4c1c4'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Open in Apple Maps
            </a>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
            style={{ color: '#c4c1c4' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f5f0eb' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#c4c1c4' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Book via WhatsApp
          </a>
        </FadeIn>

        {/* ── Right: Map ── */}
        <FadeIn direction="left" delay={120}>
          <div
            className="rounded-[24px] overflow-hidden"
            style={{
              border: '1px solid rgba(196,193,196,0.10)',
              background: '#2a2829',
              height: '460px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.40)',
              position: 'sticky',
              top: '100px',
            }}
          >
            <iframe
              title="Bare Recovery Studio — Jeedimetla, Hyderabad"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                border: 0,
                filter: 'grayscale(15%) contrast(1.05) brightness(0.88)',
              }}
              src="https://maps.google.com/maps?q=Bare+Recovery+Studio+Raichandani+Jeedimetla+Hyderabad+500010&output=embed&z=16"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
