import SaleStrip from '@/components/shared/SaleStrip'
import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants'
import { founderInfo } from '@/data/founder'

export const metadata: Metadata = {
  title: 'About | Bare Recovery Studio',
  description: "Bare Recovery Studio is Kompally's premier recovery destination. Science-backed recovery for athletes, professionals, and wellness seekers.",
}

const values = [
  { number: '01', title: 'Science-Backed', body: 'Every service is rooted in peer-reviewed physiological research. We follow biological evidence, not wellness trends.', tag: 'Evidence-first', icon: '🔬' },
  { number: '02', title: 'Premium Experience', body: 'High-end equipment. Limited slots. Private studio. One coach guides every session — no crowds, no compromise.', tag: 'Elevated', icon: '⭐' },
  { number: '03', title: 'Holistic View', body: 'We treat the body as one integrated system. Mental clarity is as important as muscular repair.', tag: 'Complete', icon: '🧠' },
  { number: '04', title: 'Accessible Excellence', body: "World-class recovery shouldn't be reserved for professional athletes. Starting from ₹799 — recovery for anyone serious.", tag: 'For everyone', icon: '🎯' },
]

export default function AboutPage() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20a%20session.`

  return (
    <div>

      {/* Sale strip */}
      <SaleStrip />

      {/* ─── HERO ─── */}
      <section className="pt-20 md:pt-28 pb-20 px-5 md:px-12">
        <div className="max-w-[1320px] mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] block mb-6" style={{ color: '#dddadd' }}>
            Bare Recovery Studio
          </span>
          <h1 className="font-display font-light mb-8 max-w-4xl"
            style={{ fontSize: 'clamp(40px, 7vw, 100px)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#f5f0eb' }}>
            Where science<br />
            <span style={{ color: 'rgba(245,240,235,0.30)' }}>meets recovery.</span>
          </h1>
          <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: '#dddadd' }}>
            Kompally&apos;s first dedicated recovery studio — bringing the tools of elite sport science to everyday athletes, professionals, and anyone serious about feeling better.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { v: '6', l: 'Recovery Services' },
              { v: '₹799+', l: 'Starting from' },
              { v: '10AM–10PM', l: 'Open everyday' },
              { v: '100%', l: 'Private studio' },
            ].map(s => (
              <div key={s.l} className="px-5 py-3 rounded-2xl" style={{ background: 'rgba(86,84,86,0.35)', border: '1px solid rgba(196,193,196,0.14)' }}>
                <p className="font-display font-light text-xl md:text-2xl" style={{ color: '#f5f0eb', letterSpacing: '-0.03em' }}>{s.v}</p>
                <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: '#dddadd' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISION | MISSION ─── */}
      <section className="py-20 px-5 md:px-12" style={{ borderTop: '1px solid rgba(196,193,196,0.08)' }}>
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="pr-0 md:pr-16 pb-12 md:pb-0 md:border-r" style={{ borderColor: 'rgba(196,193,196,0.08)' }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-6" style={{ color: '#dddadd' }}>Vision</span>
            <h2 className="font-display font-light mb-5"
              style={{ fontSize: 'clamp(22px, 3.5vw, 42px)', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#f5f0eb' }}>
              To make world-class recovery accessible to every serious person in India.
            </h2>
            <p className="leading-relaxed text-[15px]" style={{ color: '#dddadd' }}>
              Elite recovery tools have been available to professional athletes for decades. We&apos;re bringing cold plunge, contrast therapy, red light, sauna, and compression to Kompally — without the exclusive price tag.
            </p>
          </div>
          <div className="pl-0 md:pl-16 pt-12 md:pt-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-6" style={{ color: '#dddadd' }}>Mission</span>
            <h2 className="font-display font-light mb-5"
              style={{ fontSize: 'clamp(22px, 3.5vw, 42px)', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#f5f0eb' }}>
              Help people recover better so they can perform better in every part of life.
            </h2>
            <p className="leading-relaxed text-[15px]" style={{ color: '#dddadd' }}>
              We follow the science. Every service at Bare Recovery is backed by peer-reviewed research. No pseudoscience. No wellness theatre. Evidence-based protocols in a private, premium environment.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STUDIO STATS ─── */}
      <section className="py-16 px-5 md:px-12" style={{ borderTop: '1px solid rgba(196,193,196,0.08)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '6', label: 'Recovery Services' },
              { value: 'From ₹799', label: 'Per Session' },
              { value: 'Private', label: 'Studio Format' },
              { value: '10AM–10PM', label: 'Open Everyday' },
            ].map(stat => (
              <div key={stat.label} className="p-5 rounded-2xl" style={{ background: 'rgba(42,40,41,0.70)', border: '1px solid rgba(196,193,196,0.10)' }}>
                <p className="font-display font-light mb-2" style={{ fontSize: 'clamp(18px, 3vw, 32px)', letterSpacing: '-0.03em', lineHeight: 1, color: '#f5f0eb' }}>
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.15em]" style={{ color: '#dddadd' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 px-5 md:px-12" style={{ borderTop: '1px solid rgba(196,193,196,0.08)' }}>
        <div className="max-w-[1320px] mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] block mb-3" style={{ color: '#dddadd' }}>Our DNA</span>
          <h2 className="font-display font-light mb-12"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#f5f0eb' }}>
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.number} className="flex gap-5 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                style={{ background: 'rgba(42,40,41,0.80)', border: '1px solid rgba(196,193,196,0.10)' }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                    style={{ background: 'rgba(86,84,86,0.55)', border: '1px solid rgba(196,193,196,0.10)' }}>
                    {v.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-display font-semibold text-lg" style={{ color: '#f5f0eb' }}>{v.title}</h3>
                    <span className="text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(196,193,196,0.10)', color: '#c4c1c4', border: '1px solid rgba(196,193,196,0.14)' }}>
                      {v.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#dddadd' }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDER ─── */}
      <section className="py-20 px-5 md:px-12" style={{ borderTop: '1px solid rgba(196,193,196,0.08)' }}>
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

            {/* Left — copy */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] block mb-6" style={{ color: '#dddadd' }}>The Founder</span>
              <h2 className="font-display font-light mb-2"
                style={{ fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#f5f0eb' }}>
                {founderInfo.name}
              </h2>
              <p className="text-sm uppercase tracking-[0.18em] mb-8" style={{ color: '#dddadd' }}>{founderInfo.role}</p>

              <div className="space-y-4 leading-[1.9] mb-10 text-[15px]" style={{ color: '#dddadd' }}>
                {founderInfo.bio.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
              </div>

              {/* Philosophy */}
              <div className="p-6 rounded-2xl mb-10"
                style={{ background: 'rgba(42,40,41,0.90)', border: '1px solid rgba(196,193,196,0.12)', borderLeft: '3px solid rgba(217,209,204,0.50)' }}>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: '#dddadd' }}>Philosophy</p>
                <p className="font-display font-light"
                  style={{ fontSize: 'clamp(22px, 3vw, 38px)', letterSpacing: '-0.04em', color: '#f5f0eb' }}>
                  &ldquo;{founderInfo.philosophy.tagline}&rdquo;
                </p>
                <p className="text-sm mt-2" style={{ color: '#dddadd' }}>{founderInfo.philosophy.description}</p>
              </div>

              {/* Social links */}
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: '#dddadd' }}>Connect with {founderInfo.name}</p>
                {[
                  { label: 'YouTube', handle: '@abhinavliftsvlogs', href: SOCIAL_LINKS.youtube, color: '#FF4444', bg: 'rgba(255,68,68,0.10)', border: 'rgba(255,68,68,0.22)' },
                  { label: 'Instagram — Personal', handle: '@abhinav._lifts', href: SOCIAL_LINKS.founderInstagram, color: '#E1306C', bg: 'rgba(225,48,108,0.10)', border: 'rgba(225,48,108,0.22)' },
                  { label: 'Instagram — Studio', handle: '@bare.recovery', href: SOCIAL_LINKS.instagram, color: '#d9d1cc', bg: 'rgba(217,209,204,0.08)', border: 'rgba(217,209,204,0.18)' },
                ].map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                    style={{ background: link.bg, border: `1px solid ${link.border}` }}>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#f5f0eb' }}>{link.label}</p>
                      <p className="text-xs" style={{ color: '#dddadd' }}>{link.handle}</p>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c4c1c4" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — photo */}
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden aspect-[3/4] max-w-sm mx-auto md:max-w-none">
                <img src="/images/founder/photo-7.png" alt={founderInfo.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-5 -left-5 p-5 rounded-2xl"
                style={{ background: 'rgba(20,19,19,0.97)', border: '1px solid rgba(196,193,196,0.18)', backdropFilter: 'blur(12px)' }}>
                <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: '#dddadd' }}>Instagram</p>
                <p className="font-display font-light text-2xl" style={{ letterSpacing: '-0.04em', color: '#f5f0eb' }}>85.3K</p>
                <p className="text-xs" style={{ color: '#dddadd' }}>Followers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-5 md:px-12" style={{ borderTop: '1px solid rgba(196,193,196,0.08)' }}>
        <div className="max-w-[1320px] mx-auto text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] block mb-4" style={{ color: '#dddadd' }}>Ready to Start?</span>
          <h2 className="font-display font-light mb-4"
            style={{ fontSize: 'clamp(32px, 6vw, 72px)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#f5f0eb' }}>
            Your recovery starts<br /><span style={{ color: 'rgba(245,240,235,0.25)' }}>today.</span>
          </h2>
          <p className="text-base max-w-sm mx-auto leading-relaxed mb-10" style={{ color: '#dddadd' }}>
            Book a session at Bare Recovery Studio, Kompally. Private studio. Expert guidance. Starting from ₹799.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 pl-7 pr-2.5 py-4 rounded-full font-bold hover:opacity-90 transition-all active:scale-[0.98]"
              style={{ background: '#d9d1cc', color: '#3d3b3d' }}>
              Book a Session
              <span className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5"
                style={{ background: 'rgba(61,59,61,0.16)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3d3b3d" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <Link href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
              style={{ border: '1px solid rgba(196,193,196,0.25)', color: '#dddadd' }}>
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
