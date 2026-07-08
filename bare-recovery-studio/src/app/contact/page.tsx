'use client'

import { useState } from 'react'
import { CONTACT_INFO, SOCIAL_LINKS, STUDIO_ADDRESS } from '@/lib/constants'

const services = [
  'Compression Therapy',
  'Red Light Therapy',
  'Traditional Sauna',
  'Cold Plunge',
  'Contrast Therapy',
  'Full Circuit',
  'Membership',
]

type Status = 'idle' | 'sending' | 'success' | 'error'

const contactCards = [
  {
    id: 'wa',
    label: 'WhatsApp',
    value: '+91 76708 61496',
    sub: 'Fastest response — typically under 1 hour',
    href: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi!%20I'd%20like%20to%20know%20more.`,
    external: true,
    accent: '#25D366',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    value: CONTACT_INFO.email,
    sub: 'For detailed enquiries',
    href: `mailto:${CONTACT_INFO.email}`,
    external: false,
    accent: '#c9c6c5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9c6c5" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@bare.recovery',
    sub: 'Follow for updates and tips',
    href: SOCIAL_LINKS.instagram,
    external: true,
    accent: '#E1306C',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: 'location',
    label: 'Visit Us',
    value: '3rd Floor, Raichandani Orion',
    sub: 'NH44, Kompally, Secunderabad',
    href: STUDIO_ADDRESS.googleMapsUrl,
    external: true,
    accent: '#c9c6c5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9c6c5" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', website: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', message: '', website: '' })
      } else {
        const data = await res.json()
        setError(data.error ?? 'Something went wrong.')
        setStatus('error')
      }
    } catch {
      setError('Network error. Please try WhatsApp instead.')
      setStatus('error')
    }
  }

  const inputClass = `w-full bg-[#111] border border-white/[0.08] text-[#F5F5F2] placeholder-[#8e9192] rounded-2xl px-5 py-3.5 text-sm outline-none transition-all duration-300
    focus:border-white/25 focus:bg-[#161616] focus:shadow-[0_0_0_3px_rgba(255,255,255,0.04)]`

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-[1320px] mx-auto px-5 md:px-12">

        {/* Header */}
        <div className="mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8e9192] block mb-4">
            Get In Touch
          </span>
          <h1
            className="font-display font-black text-[48px] md:text-[72px] text-[#F5F5F2]"
            style={{ letterSpacing: '-0.04em', lineHeight: 1.0 }}
          >
            Let&apos;s talk<br />recovery.
          </h1>
          <p className="text-[#8e9192] text-lg mt-5 max-w-lg leading-relaxed">
            Questions about services, memberships, or booking — we respond fast. WhatsApp is quickest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* ── LEFT: Contact cards ── */}
          <div className="space-y-4">
            {contactCards.map((c) => (
              <a
                key={c.id}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 p-6 rounded-[20px] transition-all duration-500 hover:scale-[1.01]"
                style={{
                  background: 'rgba(16,16,16,0.8)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#8e9192] mb-1">{c.label}</p>
                  <p className="font-display font-semibold text-[#F5F5F2] text-base leading-tight truncate group-hover:text-white transition-colors">{c.value}</p>
                  <p className="text-[#8e9192] text-xs mt-0.5">{c.sub}</p>
                </div>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8e9192" strokeWidth="2"
                  className="flex-shrink-0 transition-all duration-300 group-hover:stroke-[#F5F5F2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* Hours */}
            <div
              className="p-6 rounded-[20px]"
              style={{ background: 'rgba(16,16,16,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#8e9192] mb-4">Studio Hours</p>
              <div className="space-y-2">
                {[
                  { days: 'Monday – Friday', hours: '10:00 AM – 22:30 PM' },
                  { days: 'Saturday', hours: '10:00 AM – 22:30 PM' },
                  { days: 'Sunday', hours: '10:00 AM – 22:30 PM' },
                ].map((h) => (
                  <div key={h.days} className="flex justify-between text-sm">
                    <span className="text-[#8e9192]">{h.days}</span>
                    <span className="text-[#F5F5F2] font-medium">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div
            className="rounded-[28px] p-8 md:p-10"
            style={{
              background: 'rgba(14,14,14,0.9)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
            }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#F5F5F2] mb-3">Message received.</h3>
                <p className="text-[#8e9192] leading-relaxed max-w-sm">
                  We&apos;ll get back to you at <strong className="text-[#c9c6c5]">{form.email || 'your email'}</strong> shortly. For fastest response, WhatsApp us directly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm text-[#8e9192] hover:text-[#F5F5F2] transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot spam-bot trap */}
                <div className="hidden opacity-0 absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={set('website')}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <h2 className="font-display font-bold text-2xl text-[#FFFBF5] mb-1" style={{ letterSpacing: '-0.02em' }}>
                  Send us a message
                </h2>
                <p className="text-[#8e9192] text-sm mb-8">We&apos;ll reply to your email within 24 hours.</p>

                <div className="space-y-4">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8e9192] mb-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={set('name')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8e9192] mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={form.email}
                        onChange={set('email')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8e9192] mb-2">Phone</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={set('phone')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8e9192] mb-2">
                        Interested In
                      </label>
                      <select
                        value={form.service}
                        onChange={set('service')}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" style={{ background: '#111' }}>Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s} style={{ background: '#111' }}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-[#8e9192] mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us what you're looking for, any questions about sessions, pricing, or memberships..."
                      required
                      value={form.message}
                      onChange={set('message')}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <p className="text-sm text-red-400 bg-red-400/5 border border-red-400/20 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group w-full flex items-center justify-center gap-3 bg-[#F5F5F2] text-[#0B0B0B] py-4 rounded-full font-bold text-sm transition-all duration-500 hover:bg-white active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B0B0B" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                          <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="1" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B0B0B" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#8e9192]">
                    Or reach us instantly on{' '}
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
