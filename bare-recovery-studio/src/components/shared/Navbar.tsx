'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { CONTACT_INFO } from '@/lib/constants'

const serviceLinks = [
  { label: 'Cold Plunge', href: '/services/cold-plunge', sub: 'From ₹1,199 · 2–5 min' },
  { label: 'Contrast Therapy', href: '/services/contrast-therapy', sub: 'From ₹1,799 · 20–40 min' },
  { label: 'Traditional Sauna', href: '/services/traditional-sauna', sub: 'From ₹999 · 15–30 min' },
  { label: 'Infrared Sauna', href: '/services/traditional-sauna', sub: 'From ₹999 · 15–30 min' },
  { label: 'Red Light Therapy', href: '/services/red-light-therapy', sub: '₹799 · 10–20 min' },
  { label: 'Compression Therapy', href: '/services/compression-therapy', sub: 'From ₹799 · 20–30 min' },
]

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
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

  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a session at Bare Recovery Studio.")}`
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(42,40,41,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(196,193,196,0.08)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.25)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 h-[60px] md:h-[70px] flex items-center justify-between">

          {/* Logo — maxWidth guard prevents collision on narrow phones */}
          <Link
            href="/"
            className="flex-shrink-0 transition-opacity duration-300 hover:opacity-75"
            aria-label="Bare Recovery Studio — Home"
          >
            <Image
              src="/images/logo/nav-logo.png"
              alt="Bare Recovery Studio"
              width={140}
              height={44}
              priority
              style={{
                height: 'clamp(28px, 3.8vw, 44px)',
                width: 'auto',
                maxWidth: 'min(140px, 38vw)',
                objectFit: 'contain',
                filter: 'brightness(1.05)',
              }}
            />
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
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                      style={{
                        color: active || pathname.startsWith('/services') ? '#f5f0eb' : '#8a878a',
                        background: active || pathname.startsWith('/services') ? 'rgba(196,193,196,0.08)' : 'transparent',
                      }}
                      onMouseEnter={e => {
                        if (!active) (e.currentTarget as HTMLElement).style.color = '#f5f0eb'
                      }}
                      onMouseLeave={e => {
                        if (!active) (e.currentTarget as HTMLElement).style.color = '#8a878a'
                      }}
                    >
                      Services
                      <svg
                        width="10" height="10" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        style={{
                          transition: 'transform 0.3s ease',
                          transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[300px] p-2 rounded-2xl"
                      style={{
                        background: 'rgba(42,40,41,0.97)',
                        border: '1px solid rgba(196,193,196,0.10)',
                        boxShadow: '0 24px 64px rgba(0,0,0,0.60)',
                        backdropFilter: 'blur(24px)',
                        opacity: dropOpen ? 1 : 0,
                        transform: dropOpen ? 'translateY(0)' : 'translateY(-8px)',
                        pointerEvents: dropOpen ? 'auto' : 'none',
                        transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.16,1,0.3,1)',
                      }}
                    >
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="group flex items-start justify-between px-4 py-3 rounded-xl transition-colors duration-200"
                          style={{ gap: '12px' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(196,193,196,0.06)' }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                        >
                          <span className="text-sm font-medium" style={{ color: '#c4c1c4' }}>
                            {s.label}
                          </span>
                          <span className="text-[11px] text-right shrink-0 mt-0.5" style={{ color: '#6e6c6e' }}>
                            {s.sub}
                          </span>
                        </Link>
                      ))}
                      <div
                        className="mt-1 pt-2"
                        style={{ borderTop: '1px solid rgba(196,193,196,0.07)' }}
                      >
                        <Link
                          href="/services"
                          className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200"
                          style={{ color: '#8a878a' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f5f0eb' }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#8a878a' }}
                        >
                          All Services
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
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
                  className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{
                    color: active ? '#f5f0eb' : '#8a878a',
                    background: active ? 'rgba(196,193,196,0.08)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = '#f5f0eb'
                  }}
                  onMouseLeave={e => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = '#8a878a'
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* ── CTA + Hamburger — flex-shrink-0 so it never gets squished ── */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 active:scale-95"
              style={{
                background: '#d9d1cc',
                color: '#3d3b3d',
                boxShadow: '0 4px 20px rgba(217,209,204,0.14)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#c4c1c4' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#d9d1cc' }}
            >
              Book Now
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-xl transition-colors"
              aria-label="Toggle menu"
              style={{ background: open ? 'rgba(196,193,196,0.08)' : 'transparent' }}
            >
              <span
                className="h-[1.5px] transition-all duration-300"
                style={{
                  width: 20,
                  background: '#f5f0eb',
                  transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
                }}
              />
              <span
                className="h-[1.5px] transition-all duration-300"
                style={{
                  width: 14,
                  background: '#f5f0eb',
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="h-[1.5px] transition-all duration-300"
                style={{
                  width: 20,
                  background: '#f5f0eb',
                  transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-500"
        style={{
          background: 'rgba(42,40,41,0.98)',
          backdropFilter: 'blur(24px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div className="h-full flex flex-col px-6 pt-20 pb-10 overflow-y-auto">
          <nav className="flex-1">
            {mainLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-4 border-b font-display text-3xl transition-all"
                style={{
                  borderColor: 'rgba(196,193,196,0.07)',
                  letterSpacing: '-0.02em',
                  color: isActive(link.href) ? '#f5f0eb' : '#6e6c6e',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${i * 55 + 60}ms, transform 0.5s cubic-bezier(0.32,0.72,0,1) ${i * 55 + 60}ms, color 0.2s ease`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f5f0eb' }}
                onMouseLeave={e => {
                  if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = '#6e6c6e'
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Services submenu */}
            <div
              className="mt-8 pt-6"
              style={{
                opacity: open ? 1 : 0,
                borderTop: '1px solid rgba(196,193,196,0.06)',
                transition: 'opacity 0.5s ease 480ms',
              }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] mb-4" style={{ color: '#565456' }}>
                Recovery Services
              </p>
              <div className="grid grid-cols-2 gap-2">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="p-3 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      background: 'rgba(86,84,86,0.40)',
                      border: '1px solid rgba(196,193,196,0.08)',
                      color: '#a8a5a8',
                    }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div
            className="mt-8"
            style={{ opacity: open ? 1 : 0, transition: 'opacity 0.5s ease 560ms' }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-full font-semibold text-base"
              style={{ background: '#d9d1cc', color: '#3d3b3d' }}
            >
              Book on WhatsApp
            </a>
            <p className="text-center text-xs mt-4" style={{ color: '#565456' }}>
              Open 10 AM – 10:30 PM · Everyday
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
