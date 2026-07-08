'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CONTACT_INFO } from '@/lib/constants'

const serviceLinks = [
  { label: 'Compression Therapy', href: '/services/compression-therapy', price: 'From ₹799' },
  { label: 'Red Light Therapy', href: '/services/red-light-therapy', price: '₹799' },
  { label: 'Traditional Sauna', href: '/services/traditional-sauna', price: 'From ₹999' },
  { label: 'Infrared Sauna', href: '/services/traditional-sauna', price: 'From ₹999' },
  { label: 'Cold Plunge', href: '/services/cold-plunge', price: 'From ₹1,199' },
  { label: 'Contrast Therapy', href: '/services/contrast-therapy', price: 'From ₹1,799' },
]

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const LOGO_SRC = '/images/logo/nav-logo.png'
// Logo aspect ratio from file: ~3.2:1
const LOGO_H = 56
const LOGO_W = LOGO_H * 3.2

/**
 * AnimatedLogo — splits the actual nav-logo.png into 3 clip-path layers:
 *   1. Center arch icon  → drops in + rotates first (0s)
 *   2. B letter          → slides in from left        (0.5s delay)
 *   3. R letter          → slides in from right       (0.5s delay)
 *
 * Replay triggered every 5s via `animKey` prop.
 */
function AnimatedLogo({ animKey }: { animKey: number }) {
  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: LOGO_W,
    height: LOGO_H,
    // No object-fit override — default stretch fills the box correctly
    // since all three share the same dimensions
  }

  return (
    <span
      key={animKey}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: LOGO_W,
        height: LOGO_H,
      }}
    >
      {/* ── Layer 1: Center arch icon (appears first, rotates/drops in) ── */}
      <img
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          ...baseStyle,
          /* Clip to show only the middle ~44% of the image (the arch) */
          clipPath: 'inset(0 27% 0 29%)',
          transformOrigin: 'center center',
          animation: 'logo-icon-drop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0s both',
        }}
      />

      {/* ── Layer 2: B (slides from left) ── */}
      <img
        src={LOGO_SRC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          ...baseStyle,
          /* Show left ~23% (the B letter) */
          clipPath: 'inset(0 77% 0 0)',
          animation: 'logo-b-appear 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.52s both',
        }}
      />

      {/* ── Layer 3: R (slides from right) ── */}
      <img
        src={LOGO_SRC}
        alt="Bare Recovery Studio"
        draggable={false}
        style={{
          ...baseStyle,
          /* Show right ~22% (the R letter) */
          clipPath: 'inset(0 0 0 78%)',
          animation: 'logo-r-appear 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.52s both',
        }}
      />
    </span>
  )
}

function LogoWithAnimation() {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    // Replay the full animation sequence every 5 seconds
    const id = setInterval(() => setAnimKey(k => k + 1), 5000)
    return () => clearInterval(id)
  }, [])

  return <AnimatedLogo animKey={animKey} />
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => { setOpen(false); setDropOpen(false) }, [pathname])

  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20a%20session.`
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(18,17,15,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 h-[60px] md:h-[72px] flex items-center justify-between">

          {/* ── Animated Logo — clicking always goes to home ── */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
            aria-label="Bare Recovery Studio — Home"
          >
            <span className="block scale-[0.78] md:scale-100 origin-left">
              <LogoWithAnimation />
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => {
              const active = isActive(link.href)
              if (link.dropdown) {
                return (
                  <div key={link.href} ref={dropRef} className="relative">
                    <button
                      onClick={() => setDropOpen(!dropOpen)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        active || pathname.startsWith('/services')
                          ? 'text-[#BCA386] bg-white/[0.04]'
                          : 'text-[#A19F97] hover:text-[#FFFBF5] hover:bg-white/[0.02]'
                      }`}
                    >
                      Services
                      <svg
                        width="10" height="10" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        className={`transition-transform duration-300 ${dropOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] p-2 rounded-2xl transition-all duration-300 ${
                        dropOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                      style={{
                        background: 'rgba(16,16,16,0.97)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
                        backdropFilter: 'blur(20px)',
                      }}
                    >
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/[0.06] transition-colors"
                        >
                          <span className="text-sm text-[#c4c7c7] group-hover:text-[#F5F5F2] font-medium transition-colors">
                            {s.label}
                          </span>
                          <span className="text-[11px] text-[#8e9192]">{s.price}</span>
                        </Link>
                      ))}
                      <div className="mt-1 pt-2 border-t border-white/[0.06]">
                        <Link
                          href="/services"
                          className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors text-[11px] font-semibold uppercase tracking-[0.15em] text-[#A19F97] hover:text-[#BCA386]"
                        >
                          All Services
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'text-[#BCA386] bg-white/[0.04]'
                      : 'text-[#A19F97] hover:text-[#FFFBF5] hover:bg-white/[0.02]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-[#BCA386] text-[#12110F] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#cbb499] transition-all duration-300 active:scale-95 shadow-[0_4px_24px_rgba(188,163,134,0.15)]"
            >
              Book Now
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-xl hover:bg-white/[0.06] transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`h-[1.5px] bg-[#FFFBF5] transition-all duration-300 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} style={{ width: 20 }}/>
              <span className={`h-[1.5px] bg-[#FFFBF5] transition-all duration-300 ${open ? 'opacity-0' : ''}`} style={{ width: 14 }}/>
              <span className={`h-[1.5px] bg-[#FFFBF5] transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} style={{ width: 20 }}/>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(18,17,15,0.99)', backdropFilter: 'blur(24px)' }}
      >
        <div className="h-full flex flex-col px-5 md:px-6 pt-20 pb-10 overflow-y-auto">
          <nav className="flex-1">
            {mainLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-4 text-3xl font-display border-b border-white/[0.06] hover:text-[#BCA386] transition-all ${
                  isActive(link.href) ? 'text-[#BCA386]' : 'text-[#FFFBF5]'
                }`}
                style={{
                  letterSpacing: '-0.02em',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${i * 60 + 60}ms, transform 0.5s cubic-bezier(0.32,0.72,0,1) ${i * 60 + 60}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Services submenu */}
            <div
              className="mt-6"
              style={{
                opacity: open ? 1 : 0,
                transition: `opacity 0.5s ease 480ms`,
              }}
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#A19F97] mb-3">Recovery Services</p>
              {serviceLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="flex items-center justify-between py-3 text-[#A19F97] hover:text-[#FFFBF5] border-b border-white/[0.04] text-sm font-medium transition-colors"
                >
                  {s.label}
                  <span className="text-[#A19F97]/60 text-xs">{s.price}</span>
                </Link>
              ))}
            </div>
          </nav>

          <div style={{ opacity: open ? 1 : 0, transition: 'opacity 0.5s ease 560ms' }}>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#BCA386] text-[#12110F] py-4 rounded-full font-bold text-base"
            >
              Book on WhatsApp
            </a>
            <p className="text-center text-[#A19F97] text-xs mt-4">Open 10 AM – 10:30 PM · Everyday</p>
          </div>
        </div>
      </div>
    </>
  )
}
