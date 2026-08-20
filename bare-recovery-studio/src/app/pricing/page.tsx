/**
 * /pricing — Server Component
 *
 * Pricing data is imported server-side from @/lib/pricing-data.
 * No prices exist in the client JS bundle — prevents DevTools price manipulation.
 * The PricingClient component handles only UI interactivity (tabs, countdown).
 */

import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { getPricingPayload } from '@/lib/pricing-data'
import { PricingClient } from '@/components/pricing/PricingClient'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Bare Recovery Studio pricing — Single sessions from ₹799, couple sessions, and memberships. Cold Plunge, Sauna, Red Light Therapy, Compression & Full Circuit. ${SITE_CONFIG.description}`,
  alternates: { canonical: `${SITE_CONFIG.url}/pricing` },
}

export default function PricingPage() {
  const pricingData = getPricingPayload()

  return (
    <div className="min-h-screen">
      <div className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-12 max-w-[1100px] mx-auto">

        {/* Header — Static server-rendered content */}
        <div className="mb-12 md:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] block mb-5" style={{ color: '#dddadd' }}>Pricing</span>
          <h1 className="font-display font-light mb-4" style={{ fontSize: 'clamp(40px, 10vw, 110px)', letterSpacing: '-0.05em', lineHeight: 0.95, color: '#f5f0eb' }}>
            Simple.<br />
            <span style={{ color: 'rgba(245,240,235,0.25)' }}>Honest.</span>
          </h1>
          <p className="text-sm md:text-base max-w-md leading-relaxed mt-6" style={{ color: '#dddadd' }}>
            Private studio. Expert coaching available on request. No hidden fees — what you see is what you pay.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Open 10 AM – 10 PM', 'Walk-ins welcome', 'No booking fee', 'Private sessions'].map(p => (
              <span key={p} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: 'rgba(86,84,86,0.35)', border: '1px solid rgba(196,193,196,0.12)', color: '#dddadd' }}>{p}</span>
            ))}
          </div>
        </div>

        {/* Interactive pricing — tabs, countdown, all cards */}
        {/* Data comes from server, rendering is client-side interactive */}
        <PricingClient data={pricingData} />

      </div>
    </div>
  )
}
