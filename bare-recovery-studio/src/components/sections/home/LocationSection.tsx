'use client'

import { useState } from 'react'
import { STUDIO_ADDRESS, CONTACT_INFO } from '@/lib/constants'

// Real coordinates for Raichandani Orion, Kompally, Secunderabad
const LAT = 17.5393
const LNG = 78.4736
const PLACE_NAME = 'Bare Recovery Studio, Kompally, Secunderabad'
const ENCODED_NAME = encodeURIComponent(PLACE_NAME)
const ENCODED_ADDRESS = encodeURIComponent(STUDIO_ADDRESS.full)

const mapLinks = [
  {
    id: 'google',
    label: 'Google Maps',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    href: `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}&query_place_id=${ENCODED_NAME}`,
  },
  {
    id: 'apple',
    label: 'Apple Maps',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    href: `https://maps.apple.com/?q=${ENCODED_NAME}&ll=${LAT},${LNG}`,
  },
  {
    id: 'waze',
    label: 'Waze',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.54 6.63C19.08 3.23 15.69 1 12 1 6.48 1 2 5.48 2 11c0 2.77 1.12 5.28 2.93 7.1.19.19.32.44.32.7v2.2c0 .55.45 1 1 1h2.2c.26 0 .51.13.7.32C10.96 23.84 13.47 25 16.24 25h.03c4.62-.01 8.34-3.76 8.32-8.38-.01-1.67-.5-3.32-1.42-4.74l.02-.02c.57-.87.81-1.94.81-3.08 0-.78-.17-1.53-.46-2.15zM12 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.5-7c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5S18.33 12 17.5 12zm-11 0c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12z" />
      </svg>
    ),
    href: `https://waze.com/ul?ll=${LAT},${LNG}&navigate=yes`,
  },
  {
    id: 'share',
    label: 'Share Location',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    href: `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`,
    isShare: true,
  },
]

// Real Google Maps embed for Kompally/Secunderabad area
const MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.283!2d78.4710!3d17.5393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9efe!2sBare%20Recovery%20Studio!5e0!3m2!1sen!2sin!4v${Date.now()}`

export default function LocationSection() {
  const [showMapOptions, setShowMapOptions] = useState(false)

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Bare Recovery Studio',
          text: `${STUDIO_ADDRESS.full}`,
          url: `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`,
        })
      } catch {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(STUDIO_ADDRESS.full)
      alert('Address copied to clipboard!')
    }
  }

  return (
    <section className="py-16 md:py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* ── Left: Info ── */}
        <div>
          <h2
            className="font-display text-[32px] md:text-[48px] font-semibold mb-10 text-[#F5F5F2]"
            style={{ letterSpacing: '-0.02em' }}
          >
            Visit the Sanctuary
          </h2>

          <div className="space-y-7">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#1c1b1b] border border-white/[0.06]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9c6c5" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#F5F5F2] mb-1">{STUDIO_ADDRESS.line1}</p>
                <p className="text-[#8e9192] text-sm leading-relaxed">{STUDIO_ADDRESS.line2}<br />{STUDIO_ADDRESS.city}, {STUDIO_ADDRESS.state} – {STUDIO_ADDRESS.pincode}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#1c1b1b] border border-white/[0.06]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9c6c5" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#F5F5F2] mb-1">Hours of Operation</p>
                <p className="text-[#8e9192] text-sm">Mon – Sat: 10:00 AM – 22:30 PM<br />Sun: 10:00 AM – 22:30 PM</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#1c1b1b] border border-white/[0.06]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9c6c5" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 10.8 19.79 19.79 0 0 1 .01 2.18 2 2 0 0 1 2 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6.08 6.08l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.92 14v2.92z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#F5F5F2] mb-1">Direct Line</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#8e9192] text-sm hover:text-[#F5F5F2] transition-colors">
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* ── Open In Maps selector ── */}
          <div className="mt-10 relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8e9192] mb-4">Open in Maps</p>
            <div className="flex flex-wrap gap-3">
              {mapLinks.map((link) =>
                link.isShare ? (
                  <button
                    key={link.id}
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-[#c9c6c5] transition-all hover:text-[#F5F5F2] hover:bg-white/[0.06] active:scale-95"
                    style={{ border: '1px solid rgba(198,198,198,0.15)' }}
                  >
                    {link.icon}
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-[#A19F97] transition-all hover:text-[#FFFBF5] hover:bg-white/[0.02] active:scale-95"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Primary CTA */}
            <div className="mt-6">
              <a
                href={STUDIO_ADDRESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-get-directions"
                className="inline-flex items-center gap-2 bg-[#BCA386] text-[#12110F] px-8 py-3.5 rounded-full font-semibold hover:bg-[#cbb499] transition-all active:scale-95"
              >
                Get Directions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: Map ── */}
        <div className="flex flex-col gap-4">
          {/* Clickable Map */}
          <a
            href={STUDIO_ADDRESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-[280px] md:h-[420px] rounded-[28px] overflow-hidden relative group"
            style={{
              background: 'rgba(27,25,22,0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
            aria-label="Open Bare Recovery Studio in Google Maps"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.283!2d78.46887!3d17.53938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9efe06d24c41%3A0xdde2e0aed59c0e15!2sRaichandani%20Orion!5e0!3m2!1sen!2sin!4v1718640000000!5m2!1sen!2sin`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(0.7) brightness(0.65) contrast(1.1)',
                display: 'block',
                pointerEvents: 'none', // let the <a> wrapper handle the click
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bare Recovery Studio — Kompally, Secunderabad"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#BCA386] text-[#12110F] px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Open in Maps
              </span>
            </div>
          </a>

          {/* Quick-open row */}
          <div className="grid grid-cols-3 gap-3">
            {mapLinks.slice(0, 3).map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 py-3.5 rounded-2xl text-xs font-medium text-[#A19F97] transition-all hover:text-[#FFFBF5] hover:bg-white/[0.02] active:scale-95"
                style={{
                  background: 'rgba(27,25,22,0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
