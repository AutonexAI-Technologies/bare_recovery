import type { Metadata } from 'next'
import type { CSSProperties, ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Bare Recovery Studio',
  description: 'Terms and Conditions for using Bare Recovery Studio services in Kompally, Secunderabad — governed by Indian consumer protection and contract law.',
}

const S = {
  h2: { fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' } as CSSProperties,
  p: { fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85 } as CSSProperties,
  dot: { width: 6, height: 6, borderRadius: '50%', background: 'rgba(188,163,134,0.60)', flexShrink: 0, marginTop: 9 } as CSSProperties,
  li: { fontSize: 16, color: 'rgba(245,240,235,0.72)', lineHeight: 1.8 } as CSSProperties,
}

function Section({ children }: { children: ReactNode }) {
  return <section style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>{children}</section>
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span style={S.dot} />
          <span style={S.li}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

import type React from 'react'

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0f0e0e' }}>
      <div style={{ paddingTop: 144, paddingBottom: 112, paddingLeft: 'clamp(20px,5vw,64px)', paddingRight: 'clamp(20px,5vw,64px)', maxWidth: 860, margin: '0 auto' }}>

        {/* Header */}
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(188,163,134,0.70)', display: 'block', marginBottom: 16 }}>Legal Document</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6vw,64px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#f5f0eb', marginBottom: 12 }}>
          Terms &amp; Conditions
        </h1>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, color: 'rgba(245,240,235,0.50)' }}>Last updated: August 2026</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(245,240,235,0.20)', display: 'inline-block' }} />
          <span style={{ fontSize: 13, color: 'rgba(245,240,235,0.50)' }}>Bare Recovery Studio · Kompally, Secunderabad</span>
        </div>
        <p style={{ fontSize: 15, color: 'rgba(245,240,235,0.55)', marginBottom: 48, lineHeight: 1.7 }}>
          These Terms govern all services provided by Bare Recovery Studio. Please read carefully before using our services.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

          <Section>
            <h2 style={S.h2}>1. Parties &amp; Agreement</h2>
            <p style={{ ...S.p, marginBottom: 12 }}>
              These Terms constitute a legally binding agreement between you (&ldquo;Client&rdquo; or &ldquo;User&rdquo;) and{' '}
              <strong style={{ color: '#f5f0eb' }}>Bare Recovery Studio</strong>, located at 3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067, India (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By booking a session, entering our premises, or using our website, you agree to these Terms in full.
            </p>
            <p style={S.p}>
              These Terms are governed by the <strong style={{ color: '#f5f0eb' }}>Indian Contract Act, 1872</strong>, the{' '}
              <strong style={{ color: '#f5f0eb' }}>Consumer Protection Act, 2019</strong>, and the{' '}
              <strong style={{ color: '#f5f0eb' }}>Information Technology Act, 2000</strong>.
            </p>
          </Section>

          <Section>
            <h2 style={S.h2}>2. Services</h2>
            <p style={{ ...S.p, marginBottom: 16 }}>Bare Recovery Studio provides the following evidence-based recovery modalities:</p>
            <BulletList items={[
              'Compression Therapy (Sequential Air Compression)',
              'Red Light Therapy (Photobiomodulation)',
              'Traditional Finnish Sauna (Dry Heat)',
              'Cold Plunge (Cold Water Immersion)',
              'Contrast Therapy (Alternating Heat & Cold)',
            ]} />
            <p style={{ ...S.p, marginTop: 16 }}>
              Our services are for wellness and recovery purposes only and do not constitute medical treatment, diagnosis, or advice. Nothing provided by Bare Recovery Studio should be construed as a substitute for professional medical care.
            </p>
          </Section>

          <Section>
            <h2 style={S.h2}>3. Bookings</h2>
            <p style={{ ...S.p, marginBottom: 16 }}>All session bookings are made via WhatsApp (+91 80964 07555) or our contact form.</p>
            <BulletList items={[
              'Bookings are confirmed only upon receiving explicit confirmation from Bare Recovery Studio.',
              'Sessions are subject to availability and may be rescheduled by us with reasonable notice.',
              'Walk-in sessions are available subject to availability.',
            ]} />
          </Section>

          <Section>
            <h2 style={S.h2}>4. Cancellations &amp; Late Arrivals</h2>
            <BulletList items={[
              'Cancellations or rescheduling of private sessions must be made at least 6 hours before the scheduled time via WhatsApp.',
              'Group/movement class cancellations (if scheduled) must be made at least 3 hours before start time.',
              'Late cancellations (inside the above windows) will result in forfeiture of the session fee or deduction from your membership allowance.',
              'Late Arrivals: Arriving more than 10 minutes late for a private session will shorten your session accordingly, with no refund. Arriving more than 5 minutes late for a class may result in non-admission.',
              'No-shows (failure to attend without cancellation) will result in full session forfeiture.',
              'Bare Recovery Studio reserves the right to cancel or reschedule sessions due to operational or safety requirements, with a full credit or refund provided in such cases.',
            ]} />
          </Section>

          <Section>
            <h2 style={S.h2}>5. Memberships &amp; Payments</h2>
            <BulletList items={[
              'Monthly memberships are billed in advance on a calendar-month basis and can be cancelled with 5 days\' written notice before the next billing cycle.',
              '3-Month plans are non-refundable after purchase, as permitted under the Consumer Protection Act, 2019, given the discounted nature of the plan.',
              'Unused sessions within a billing period do not roll over to the next period.',
              'Session packs (if purchased) are valid for 90 days from the date of purchase and are non-transferable.',
              'All prices are inclusive of any applicable taxes. GST invoices are available on request.',
            ]} />
          </Section>

          <Section>
            <h2 style={S.h2}>6. Health, Safety &amp; Liability Waiver</h2>
            <p style={{ ...S.p, marginBottom: 16 }}>You acknowledge and agree to the following:</p>
            <BulletList items={[
              'You will complete a health and safety waiver before your first session, disclosing all relevant medical conditions.',
              'You represent that you are in good physical health and not aware of any medical condition that would make participation inadvisable.',
              'Known contraindications include (but are not limited to): pregnancy, active cardiovascular disease, open wounds, severe Raynaud\'s syndrome, recent surgery (within 4 weeks), and severe hypertension. Please consult a physician if you have any concerns.',
              'Bare Recovery Studio shall not be liable for any adverse health outcomes arising from undisclosed medical conditions or failure to follow session guidelines.',
              'To the maximum extent permitted under Indian law, our liability for any claim shall not exceed the amount paid by you for the specific session in question.',
            ]} />
          </Section>

          <Section>
            <h2 style={S.h2}>7. Code of Conduct &amp; Studio Etiquette</h2>
            <p style={{ ...S.p, marginBottom: 16 }}>To preserve the tranquil and premium environment of Bare Recovery Studio, all clients must adhere to our Studio Etiquette:</p>
            <BulletList items={[
              'Mobile Phones: Phones must be silenced or set to vibrate in all therapy, lounge, and recovery spaces.',
              'Guest Privacy: Filming or photography of other clients or sessions is strictly prohibited to protect the privacy of guests.',
              'Food & Drink: No food or beverages beyond the reception lobby (clean drinking water in closed containers is permitted).',
              'Hygiene & Attire: Clean, appropriate swimwear is mandatory for saunas and cold plunges. Clean athletic wear is required for compression or lounge therapies.',
              'Respect & Behaviour: Disrespectful, abusive, or threatening behaviour towards staff or other guests will result in immediate termination of the session and/or membership without refund.',
              'Substance Use: Intoxication or being under the influence of any recreational substance on the premises is strictly forbidden.',
              'Safety Compliance: All posted temperature, exposure duration, and safety instructions must be followed exactly.',
            ]} />
          </Section>

          <Section>
            <h2 style={S.h2}>8. Intellectual Property</h2>
            <p style={S.p}>
              All content on barerecovery.studio, including text, images, logos, and service descriptions, is the exclusive intellectual property of Bare Recovery Studio. Reproduction or use without prior written consent is prohibited under the <strong style={{ color: '#f5f0eb' }}>Copyright Act, 1957</strong>.
            </p>
          </Section>

          <Section>
            <h2 style={S.h2}>9. Dispute Resolution</h2>
            <p style={{ ...S.p, marginBottom: 16 }}>In the event of a dispute:</p>
            <BulletList items={[
              'You agree to first contact us at barerecovery@gmail.com to attempt an amicable resolution within 30 days.',
              'If unresolved, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, by a mutually appointed sole arbitrator. The seat of arbitration shall be Hyderabad, Telangana.',
              'For consumer grievances under the Consumer Protection Act, 2019, you may approach the appropriate Consumer Disputes Redressal Commission.',
            ]} />
          </Section>

          <Section>
            <h2 style={S.h2}>10. Governing Law &amp; Jurisdiction</h2>
            <p style={S.p}>
              These Terms shall be governed by the laws of India. Subject to the arbitration clause above, any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </Section>

          <Section>
            <h2 style={S.h2}>11. Contact</h2>
            <div style={{ padding: '24px 28px', borderRadius: 20, background: 'rgba(20,20,20,0.90)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ fontSize: 15, color: 'rgba(245,240,235,0.70)', lineHeight: 1.6 }}>
                <strong style={{ color: '#f5f0eb', fontWeight: 600 }}>Email:</strong>{' '}
                <a href="mailto:barerecovery@gmail.com" style={{ color: 'rgba(188,163,134,0.80)', textDecoration: 'underline' }}>barerecovery@gmail.com</a>
              </p>
              <p style={{ fontSize: 15, color: 'rgba(245,240,235,0.70)', lineHeight: 1.6 }}>
                <strong style={{ color: '#f5f0eb', fontWeight: 600 }}>WhatsApp:</strong>{' '}
                <a href="https://wa.me/918096407555" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(188,163,134,0.80)', textDecoration: 'underline' }}>+91 80964 07555</a>
              </p>
              <p style={{ fontSize: 15, color: 'rgba(245,240,235,0.70)', lineHeight: 1.6 }}>
                <strong style={{ color: '#f5f0eb', fontWeight: 600 }}>Address:</strong> 3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067
              </p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}
