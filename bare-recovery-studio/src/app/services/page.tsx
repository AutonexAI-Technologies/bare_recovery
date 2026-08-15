'use client'

import { useState } from 'react'
import Link from 'next/link'
import { services } from '@/data/services'
import { CONTACT_INFO } from '@/lib/constants'
import type { Metadata } from 'next'

const waBase = `https://wa.me/${CONTACT_INFO.whatsapp}?text=`
const bookMsg = (name: string) => encodeURIComponent(`Hi! I want to book a ${name} session at the 50% launch sale rate.`)

const serviceImages: Record<string, string> = {
  'compression-therapy': '/images/services/compression-therapy.PNG',
  'red-light-therapy': '/images/services/redlight-therapy.PNG',
  'traditional-sauna': '/images/services/sauna.PNG',
  'infrared-sauna': '/images/services/infrared-sauna.PNG',
  'cold-plunge': '/images/services/cold-plunge.PNG',
  'contrast-therapy': '/images/services/contrast-therapy.PNG',
}

const serviceData = [
  { id: 'contrast-therapy', emoji: '🌡️', tag: 'Signature', sale: '₹1,799', mrp: '₹3,598', dur: '20–40 min', tagline: 'Hot & Cold. The ultimate recovery stack.', desc: 'Sauna heat followed by cold plunge immersion. The most powerful recovery combination available — used by elite athletes worldwide.' },
  { id: 'cold-plunge', emoji: '🧊', tag: 'Most Popular', sale: '₹1,199', mrp: '₹2,398', dur: '10–15 min', tagline: 'Full body cold at 10–15°C.', desc: 'Scientifically proven to reduce inflammation, boost dopamine 3x, and accelerate muscle recovery within 30 minutes post-training.' },
  { id: 'traditional-sauna', emoji: '🌿', tag: '', sale: '₹999', mrp: '₹1,998', dur: '15–30 min', tagline: 'Dry heat at 70–80°C.', desc: 'Deep tissue heat stress that triggers growth hormone release, clears lactic acid buildup, and forces parasympathetic recovery mode.' },
  { id: 'infrared-sauna', emoji: '☀️', tag: '', sale: '₹999', mrp: '₹1,998', dur: '15–30 min', tagline: 'Deep infrared penetration.', desc: 'Infrared light penetrates up to 4cm into tissue — deeper than traditional heat. Optimal for joint recovery and chronic soreness.' },
  { id: 'red-light-therapy', emoji: '💡', tag: '', sale: '₹799', mrp: '₹1,598', dur: '30–40 min', tagline: '660nm & 850nm photobiomodulation.', desc: 'Red and near-infrared wavelengths stimulate mitochondrial activity, accelerate tissue repair, and reduce oxidative stress at a cellular level.' },
  { id: 'compression-therapy', emoji: '🦵', tag: 'From', sale: '₹799', mrp: '₹1,598', dur: '30–40 min', tagline: 'Dynamic air compression.', desc: 'Sequential pneumatic compression of limbs enhances venous return, reduces oedema, and clears metabolic waste 2x faster than rest.' },
]

function ServiceCard({ svc, index }: { svc: typeof serviceData[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const img = serviceImages[svc.id]

  return (
    <div
      style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)', transform: hovered ? 'translateY(-8px)' : 'translateY(0)', boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.50), 0 0 0 1px rgba(245,158,11,0.25)' : '0 4px 20px rgba(0,0,0,0.30)', height: 420 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      {img && (
        <img src={img} alt={svc.id} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)', transform: hovered ? 'scale(1.08)' : 'scale(1)' }} />
      )}

      {/* Base gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: hovered ? 'linear-gradient(to top, rgba(5,4,4,0.98) 0%, rgba(5,4,4,0.75) 40%, rgba(5,4,4,0.30) 100%)' : 'linear-gradient(to top, rgba(5,4,4,0.95) 0%, rgba(5,4,4,0.50) 60%, rgba(5,4,4,0.15) 100%)', transition: 'background 0.4s ease' }} />

      {/* Tag + 50% badge */}
      <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {svc.tag && (
          <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', background: svc.tag === 'Signature' ? 'linear-gradient(135deg,#F59E0B,#FBBF24)' : 'rgba(245,240,235,0.15)', backdropFilter: 'blur(8px)', color: svc.tag === 'Signature' ? '#111' : '#f5f0eb', padding: '5px 12px', borderRadius: 9999, border: svc.tag === 'Signature' ? 'none' : '1px solid rgba(255,255,255,0.15)' }}>
            {svc.tag}
          </span>
        )}
        <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', padding: '5px 12px', borderRadius: 9999, boxShadow: '0 2px 12px rgba(245,158,11,0.40)' }}>
          50% OFF
        </span>
      </div>

      {/* Content — at bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px 20px' }}>
        {/* Emoji */}
        <div style={{ fontSize: 32, marginBottom: 8, transition: 'transform 0.3s ease', transform: hovered ? 'scale(1.1)' : 'scale(1)' }}>{svc.emoji}</div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: 300, letterSpacing: '-0.02em', color: '#f5f0eb', marginBottom: 4, textTransform: 'capitalize' }}>
          {svc.id.replace(/-/g, ' ')}
        </h3>
        <p style={{ fontSize: 11, color: 'rgba(245,240,235,0.50)', marginBottom: 12 }}>{svc.tagline}</p>

        {/* Description — slides in on hover */}
        <div style={{ overflow: 'hidden', maxHeight: hovered ? 80 : 0, transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)', opacity: hovered ? 1 : 0 }}>
          <p style={{ fontSize: 12, color: 'rgba(245,240,235,0.55)', lineHeight: 1.65, marginBottom: 14 }}>{svc.desc}</p>
        </div>

        {/* Duration */}
        <p style={{ fontSize: 10, color: 'rgba(245,240,235,0.35)', marginBottom: 10 }}>⏱ {svc.dur}</p>

        {/* Price row */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 14 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.04em', color: '#FBBF24', lineHeight: 1 }}>{svc.sale}</span>
          <span style={{ fontSize: 13, color: 'rgba(245,240,235,0.30)', textDecoration: 'line-through' }}>{svc.mrp}</span>
          <span style={{ fontSize: 9, fontWeight: 700, color: '#F59E0B', letterSpacing: '0.12em', textTransform: 'uppercase' }}>FOUNDING RATE</span>
        </div>

        {/* CTA row — slides in on hover */}
        <div style={{ display: 'flex', gap: 8, overflow: 'hidden', maxHeight: hovered ? 50 : 0, transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)', opacity: hovered ? 1 : 0 }}>
          <a
            href={waBase + bookMsg(svc.id.replace(/-/g, ' '))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', padding: '11px 16px', borderRadius: 12, fontSize: 12, fontWeight: 800, textDecoration: 'none', letterSpacing: '0.04em' }}
          >
            🔥 Book at 50% Off
          </a>
          <Link
            href={`/services/${svc.id}`}
            onClick={e => e.stopPropagation()}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '11px 14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(245,240,235,0.70)', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f0e0e' }}>

      {/* ── Header ── */}
      <section style={{ paddingTop: 'clamp(128px,12vw,160px)', paddingBottom: 48, paddingLeft: 20, paddingRight: 20 }}>
        <div className="max-w-[1320px] mx-auto">


          <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: 24 }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,8vw,88px)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 0.92, color: '#f5f0eb', marginBottom: 16 }}>
                6 Ways to<br />
                <span style={{ color: 'rgba(245,240,235,0.22)' }}>Recover Better.</span>
              </h1>
              <p style={{ fontSize: 14, color: 'rgba(245,240,235,0.50)', maxWidth: 400, lineHeight: 1.7 }}>
                Science-backed modalities. Private studio. Hover any card to explore and book in seconds.
              </p>
            </div>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hi! I want to book a session at the 50% launch sale rate.')}`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', color: '#111', padding: '14px 28px', borderRadius: 9999, fontSize: 13, fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 28px rgba(245,158,11,0.45)', whiteSpace: 'nowrap', alignSelf: 'flex-end' }}
            >
              Book at 50% Off →
            </a>
          </div>
        </div>
      </section>

      {/* ── Interactive Card Grid ── */}
      <section style={{ paddingBottom: 80, paddingLeft: 20, paddingRight: 20 }}>
        <div className="max-w-[1320px] mx-auto">

          {/* Instruction hint */}
          <p style={{ fontSize: 11, color: 'rgba(245,240,235,0.30)', marginBottom: 20, letterSpacing: '0.10em', textTransform: 'uppercase', fontWeight: 600 }}>
            ↗ Hover any card to see details + book instantly
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
            {serviceData.map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} index={i} />
            ))}
          </div>

          {/* Full pricing link */}
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'rgba(245,240,235,0.45)', border: '1px solid rgba(255,255,255,0.10)', padding: '12px 24px', borderRadius: 9999, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#FBBF24'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.30)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,235,0.45)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)' }}>
              View Full Pricing →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
