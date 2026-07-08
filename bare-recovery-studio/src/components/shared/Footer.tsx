import Link from 'next/link'
import { ROUTES, CONTACT_INFO, SOCIAL_LINKS, SITE_CONFIG, STUDIO_ADDRESS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="w-full py-[120px] px-5 md:px-16 border-t border-white/[0.05]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1280px] mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-6 hover:opacity-75 transition-opacity">
            <img
              src="/images/logo/footer-logo.png"
              alt="Bare Recovery Studio"
              style={{
                height: 44,
                width: 'auto',
                objectFit: 'contain',
                filter: 'contrast(100)',
                mixBlendMode: 'screen',
              }}
            />
          </Link>
          <p className="text-[#A19F97] text-sm max-w-xs leading-relaxed mb-4">
            The silent luxury of performance recovery. Engineering better human outcomes through advanced thermal and pressure protocols.
          </p>
          <a
            href={STUDIO_ADDRESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#A19F97] hover:text-[#BCA386] transition-colors leading-relaxed block"
          >
            📍 {STUDIO_ADDRESS.full}
          </a>
        </div>

        {/* Explore */}
        <div>
          <h5 className="font-bold mb-6 text-[#FFFBF5]">Explore</h5>
          <ul className="space-y-3">
            {[
              { label: 'Services', href: ROUTES.services },
              { label: 'Membership', href: ROUTES.pricing },
              { label: 'About', href: ROUTES.about },
              { label: 'Blog', href: ROUTES.blog },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[#A19F97] hover:text-[#BCA386] transition-colors text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="font-bold mb-6 text-[#FFFBF5]">Legal</h5>
          <ul className="space-y-3">
            {[
              { label: 'Privacy Policy', href: ROUTES.privacyPolicy },
              { label: 'Terms', href: ROUTES.terms },
              { label: 'FAQ', href: ROUTES.faq },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[#A19F97] hover:text-[#BCA386] transition-colors text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="font-bold mb-6 text-[#FFFBF5]">Connect</h5>
          <ul className="space-y-3">
            <li>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                className="text-[#A19F97] hover:text-[#BCA386] transition-colors text-sm">
                Instagram
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="text-[#A19F97] hover:text-[#BCA386] transition-colors text-sm">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_INFO.email}`}
                className="text-[#A19F97] hover:text-[#BCA386] transition-colors text-sm">
                Email Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto mt-20 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center text-[#A19F97] text-sm gap-4">
        <span>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</span>
        <div className="flex gap-6">
          <span>Designed and Developed by <a href="https://autonexai.org" target="_blank" rel="noopener noreferrer" className="text-[#A19F97] hover:text-[#BCA386] transition-colors text-sm">AutonexAI</a></span>
        </div>
      </div>
    </footer>
  )
}
