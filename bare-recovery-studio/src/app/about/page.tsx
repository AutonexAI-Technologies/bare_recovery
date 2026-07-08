import Link from 'next/link'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants'
import { founderInfo } from '@/data/founder'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Bare Recovery Studio',
  description: 'Bare Recovery Studio is Kompally\'s premier recovery destination. Science-backed recovery for athletes, professionals, and wellness seekers.',
}

const values = [
  {
    number: '01',
    title: 'Science-Backed',
    body: 'Every service is rooted in peer-reviewed physiological research. We follow biological evidence, not wellness trends.',
    tag: 'Evidence-first',
  },
  {
    number: '02',
    title: 'Premium Experience',
    body: 'High-end equipment. Limited slots. Private studio. One coach guides every session.',
    tag: 'Elevated',
  },
  {
    number: '03',
    title: 'Holistic View',
    body: 'We treat the body as one integrated system. Mental clarity is as important as muscular repair.',
    tag: 'Complete',
  },
  {
    number: '04',
    title: 'Accessible Excellence',
    body: 'World-class recovery shouldn\'t be reserved for professional athletes. Starting from ₹799 — recovery for anyone serious.',
    tag: 'For everyone',
  },
]

const founderLinks = [
  {
    label: 'YouTube',
    handle: '@de_abhinav',
    href: SOCIAL_LINKS.youtube,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: '#FF0000',
    bg: 'rgba(255,0,0,0.08)',
    border: 'rgba(255,0,0,0.2)',
  },
  {
    label: 'Instagram',
    handle: '@de_abhinav',
    href: SOCIAL_LINKS.founderInstagram,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.08)',
    border: 'rgba(225,48,108,0.2)',
  },
  {
    label: 'Bare Recovery Studio',
    handle: '@bare.recovery',
    href: SOCIAL_LINKS.instagram,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: '#c9c6c5',
    bg: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.12)',
  },
]

export default function AboutPage() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20a%20session.`

  return (
    <div>

      {/* ─── Hero ─── */}
      <section className="pt-36 md:pt-48 pb-24 px-5 md:px-12">
        <div className="max-w-[1320px] mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8e9192] block mb-6">
            Bare Recovery Studio
          </span>
          <h1
            className="font-display font-light text-[#F5F5F2] mb-8 max-w-4xl"
            style={{ fontSize: 'clamp(44px, 7vw, 100px)', letterSpacing: '-0.04em', lineHeight: 1.0 }}
          >
            Where science<br />
            <span style={{ color: 'rgba(245,245,242,0.3)' }}>meets recovery.</span>
          </h1>
          <p className="text-[#8e9192] text-lg max-w-xl leading-relaxed">
            Kompally&apos;s first dedicated recovery studio. We bring the tools of elite sport science to everyday athletes, professionals, and anyone serious about feeling better.
          </p>
        </div>
      </section>

      {/* ─── Vision | Mission side by side ─── */}
      <section className="py-20 px-5 md:px-12" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x divide-white/[0.06]">
          {/* Vision */}
          <div className="pr-0 md:pr-16 pb-12 md:pb-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8e9192] block mb-6">Vision</span>
            <h2
              className="font-display font-light text-[#F5F5F2] mb-5"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              To make world-class recovery accessible to every serious person in India.
            </h2>
            <p className="text-[#8e9192] leading-relaxed">
              Elite recovery tools have been available to professional athletes for decades. We&apos;re bringing the exact same technology — cold plunge, contrast therapy, red light, sauna, compression — to Kompally, without the exclusive price tag.
            </p>
          </div>

          {/* Mission */}
          <div className="pl-0 md:pl-16 pt-12 md:pt-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8e9192] block mb-6">Mission</span>
            <h2
              className="font-display font-light text-[#F5F5F2] mb-5"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Help people recover better so they can perform better and feel better in every part of life.
            </h2>
            <p className="text-[#8e9192] leading-relaxed">
              We follow the science. Every modality at Bare Recovery is backed by peer-reviewed research. No pseudoscience. No wellness theatre. Just evidence-based protocols delivered in a private, premium environment.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Studio Stats ─── */}
      <section className="py-20 px-5 md:px-12">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '5', label: 'Recovery Modalities' },
              { value: 'From ₹799', label: 'Per Session' },
              { value: 'Private', label: 'Studio Format' },
              { value: '10AM–10:30PM', label: 'Open Everyday' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p
                  className="font-display font-light text-[#F5F5F2] mb-2"
                  style={{ fontSize: 'clamp(22px, 3vw, 34px)', letterSpacing: '-0.03em', lineHeight: 1 }}
                >
                  {stat.value}
                </p>
                <p className="text-[#8e9192] text-xs uppercase tracking-[0.15em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Values / DNA ─── */}
      <section className="py-20 px-5 md:px-12" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1320px] mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8e9192] block mb-3">Our DNA</span>
          <h2
            className="font-display font-light text-[#F5F5F2] mb-14"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.04em', lineHeight: 1.0 }}
          >
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.number}
                className="group flex gap-5 p-7 rounded-2xl transition-all duration-300"
                style={{ background: 'rgba(17,17,17,0.75)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span className="font-display font-light text-5xl text-white/[0.06] select-none shrink-0 leading-none">{v.number}</span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-semibold text-[#F5F5F2]">{v.title}</h3>
                    <span className="text-[9px] uppercase tracking-[0.18em] text-[#8e9192] px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>{v.tag}</span>
                  </div>
                  <p className="text-[#C6C6C6]/70 text-sm leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Founder Profile ─── */}
      <section className="py-20 px-5 md:px-12" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Left — copy */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8e9192] block mb-6">The Founder</span>
              <h2
                className="font-display font-light text-[#F5F5F2] mb-2"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.04em', lineHeight: 1.0 }}
              >
                {founderInfo.name}
              </h2>
              <p className="text-[#8e9192] text-sm uppercase tracking-[0.18em] mb-8">{founderInfo.role}</p>

              <div className="space-y-4 text-[#C6C6C6] leading-[1.9] mb-10">
                {founderInfo.bio.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Philosophy quote */}
              <div className="p-6 rounded-2xl mb-10" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8e9192] mb-3">Philosophy</p>
                <p
                  className="font-display font-light text-[#F5F5F2]"
                  style={{ fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.04em' }}
                >
                  &ldquo;{founderInfo.philosophy.tagline}&rdquo;
                </p>
                <p className="text-[#8e9192] text-sm mt-2">{founderInfo.philosophy.description}</p>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8e9192] mb-4">Connect with {founderInfo.name}</p>
                {founderLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                    style={{ background: link.bg, border: `1px solid ${link.border}` }}
                  >
                    <span style={{ color: link.color }}>{link.icon}</span>
                    <div>
                      <p className="text-[#F5F5F2] text-sm font-semibold">{link.label}</p>
                      <p className="text-[#8e9192] text-xs">{link.handle}</p>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8e9192" strokeWidth="2" className="ml-auto">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — photo */}
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden aspect-[3/4] max-w-sm mx-auto md:max-w-none">
                <img
                  src="/images/founder/photo-7.png"
                  alt={founderInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating stat card */}
              <div
                className="absolute -bottom-5 -left-5 p-5 rounded-2xl"
                style={{ background: 'rgba(17,17,17,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
              >
                <p className="text-[#8e9192] text-xs uppercase tracking-[0.15em] mb-1">Instagram</p>
                <p className="font-display font-light text-[#F5F5F2] text-2xl" style={{ letterSpacing: '-0.04em' }}>83.3K</p>
                <p className="text-[#8e9192] text-xs">Followers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-24 px-5 md:px-12" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1320px] mx-auto text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8e9192] block mb-4">Ready to Start?</span>
          <h2
            className="font-display font-light text-[#F5F5F2] mb-4"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.04em', lineHeight: 1.0 }}
          >
            Your recovery starts<br /><span style={{ color: 'rgba(245,245,242,0.3)' }}>today.</span>
          </h2>
          <p className="text-[#8e9192] text-base max-w-sm mx-auto leading-relaxed mb-10">
            Book a session at Bare Recovery Studio, Kompally. Private studio. Expert guidance. Starting from ₹799.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#F5F5F2] text-[#0B0B0B] pl-7 pr-2.5 py-4 rounded-full font-bold hover:bg-white transition-all active:scale-[0.98]"
            >
              Book a Session
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B0B0B" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/15 text-[#c9c6c5] px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
