import Link from 'next/link'
import { ROUTES, CONTACT_INFO, SOCIAL_LINKS, SITE_CONFIG, STUDIO_ADDRESS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      className="w-full py-20 md:py-28 px-5 md:px-16"
      style={{ borderTop: '1px solid rgba(196,193,196,0.12)', background: 'rgba(22,20,21,0.90)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-[1280px] mx-auto">

        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-6 opacity-90 hover:opacity-100 transition-opacity">
            <img
              src="/images/logo/footer-logo.png"
              alt="Bare Recovery Studio"
              style={{ height: 44, width: 'auto', objectFit: 'contain', filter: 'brightness(10)' }}
            />
          </Link>
          <p className="text-[15px] max-w-xs leading-relaxed mb-5" style={{ color: '#dddadd' }}>
            Evidence-based recovery services in Kompally, Secunderabad. Cold plunge · Sauna · Red light · Compression.
          </p>
          <a
            href={STUDIO_ADDRESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link text-sm leading-relaxed block mb-2"
          >
            📍 {STUDIO_ADDRESS.line1}, {STUDIO_ADDRESS.line2}
          </a>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link text-sm block"
          >
            📞 {CONTACT_INFO.phoneFormatted}
          </a>
        </div>

        {/* Explore */}
        <div>
          <h5 className="font-semibold text-base mb-5" style={{ color: '#f5f0eb' }}>Explore</h5>
          <ul className="space-y-3">
            {[
              { label: 'Services', href: ROUTES.services },
              { label: 'Pricing', href: ROUTES.pricing },
              { label: 'About', href: ROUTES.about },
              { label: 'Blog', href: ROUTES.blog },
              { label: 'Contact', href: ROUTES.contact },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="footer-link text-[15px]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="font-semibold text-base mb-5" style={{ color: '#f5f0eb' }}>Legal</h5>
          <ul className="space-y-3">
            {[
              { label: 'Privacy Policy', href: ROUTES.privacyPolicy },
              { label: 'Terms', href: ROUTES.terms },
              { label: 'FAQ', href: ROUTES.faq },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="footer-link text-[15px]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="font-semibold text-base mb-5" style={{ color: '#f5f0eb' }}>Connect</h5>
          <ul className="space-y-3">
            {[
              { label: 'Instagram — Studio', href: SOCIAL_LINKS.instagram },
              { label: 'Instagram — Founder', href: SOCIAL_LINKS.founderInstagram },
              { label: 'YouTube', href: SOCIAL_LINKS.youtube },
              { label: 'WhatsApp Us', href: `https://wa.me/${CONTACT_INFO.whatsapp}` },
              { label: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link text-[15px]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1280px] mx-auto mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ borderTop: '1px solid rgba(196,193,196,0.10)' }}
      >
        <span className="text-sm" style={{ color: '#c4c1c4' }}>
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </span>
        <span className="text-sm" style={{ color: '#c4c1c4' }}>
          Designed & Developed by{' '}
          <a
            href="https://autonexai.org"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            AutonexAI
          </a>
        </span>
      </div>
    </footer>
  )
}
