import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Bare Recovery Studio',
  description: 'Terms and Conditions for using Bare Recovery Studio services in Kompally, Secunderabad — governed by Indian consumer protection and contract law.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-24 px-5 md:px-16 max-w-[800px] mx-auto">

        {/* Header */}
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8e9192] block mb-4">Legal</span>
        <h1 className="font-display text-[40px] md:text-[56px] font-black text-[#F5F5F2] mb-4" style={{ letterSpacing: '-0.03em', lineHeight: 1.0 }}>
          Terms & Conditions
        </h1>
        <p className="text-[#8e9192] text-sm mb-2">Last updated: June 2025</p>
        <p className="text-[#8e9192] text-sm mb-12">
          These Terms govern all services provided by Bare Recovery Studio. Please read carefully before using our services.
        </p>

        <div className="space-y-10 text-[#c4c7c7] leading-[1.85]">

          {/* 1 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              1. Parties & Agreement
            </h2>
            <p className="text-sm">
              These Terms constitute a legally binding agreement between you (&ldquo;Client&rdquo; or &ldquo;User&rdquo;) and <strong className="text-[#F5F5F2]">Bare Recovery Studio</strong>, located at 3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067, India (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By booking a session, entering our premises, or using our website, you agree to these Terms in full. If you do not agree, please do not use our services.
            </p>
            <p className="text-sm mt-3">
              These Terms are governed by the <strong className="text-[#F5F5F2]">Indian Contract Act, 1872</strong>, the <strong className="text-[#F5F5F2]">Consumer Protection Act, 2019</strong>, and the <strong className="text-[#F5F5F2]">Information Technology Act, 2000</strong>.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              2. Services
            </h2>
            <p className="text-sm mb-3">
              Bare Recovery Studio provides the following evidence-based recovery modalities:
            </p>
            <ul className="space-y-2 text-sm">
              {[
                'Compression Therapy (Sequential Air Compression)',
                'Red Light Therapy (Photobiomodulation)',
                'Traditional Finnish Sauna (Dry Heat)',
                'Cold Plunge (Cold Water Immersion)',
                'Contrast Therapy (Alternating Heat & Cold)',
              ].map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] flex-shrink-0 mt-2" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm mt-3">
              Our services are for wellness and recovery purposes only and do not constitute medical treatment, diagnosis, or advice. Nothing provided by Bare Recovery Studio should be construed as a substitute for professional medical care.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              3. Bookings
            </h2>
            <p className="text-sm mb-3">All session bookings are made via WhatsApp (+91 76708 61496) or our contact form.</p>
            <ul className="space-y-2 text-sm">
              {[
                'Bookings are confirmed only upon receiving explicit confirmation from Bare Recovery Studio.',
                'Sessions are subject to availability and may be rescheduled by us with reasonable notice.',
                'Walk-in sessions are available subject to availability.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#FFFBF5] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              4. Cancellations & Late Arrivals
            </h2>
            <ul className="space-y-2 text-sm">
              {[
                'Cancellations or rescheduling of private wellness & contrast sessions must be made at least 6 hours before the scheduled time via WhatsApp.',
                'Cancellations of movement or group classes (if scheduled) must be made at least 3 hours before start time.',
                'Cancellations made late (less than 6 hours for private sessions or 3 hours for classes) will result in forfeiture of the session fee or deduction from your membership allowance.',
                'Late Arrivals: If you arrive more than 10 minutes late for a private recovery session, the session will be shortened accordingly to maintain other bookings, without any refund or discount. If you arrive more than 5 minutes late for a class, entry may not be permitted.',
                'No-shows (failure to attend without cancellation) will result in full session forfeiture.',
                'Bare Recovery Studio reserves the right to cancel or reschedule sessions due to operational or safety requirements, with a full credit or refund provided in such cases.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BCA386] flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              5. Memberships & Payments
            </h2>
            <ul className="space-y-2 text-sm">
              {[
                'Monthly memberships are billed in advance on a calendar-month basis and can be cancelled with 5 days\' written notice before the next billing cycle.',
                '3-Month plans are non-refundable after purchase, as permitted under the Consumer Protection Act, 2019, given the discounted nature of the plan.',
                'Unused sessions within a billing period do not roll over to the next period.',
                'Session packs (if purchased) are valid for 90 days from the date of purchase and are non-transferable.',
                'All prices are inclusive of any applicable taxes. GST invoices are available on request.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              6. Health, Safety & Liability Waiver
            </h2>
            <p className="text-sm mb-3">
              You acknowledge and agree to the following:
            </p>
            <ul className="space-y-2 text-sm">
              {[
                'You will complete a health and safety waiver before your first session, disclosing all relevant medical conditions.',
                'You represent that you are in good physical health and not aware of any medical condition that would make your participation in recovery services inadvisable.',
                'Known contraindications include (but are not limited to): pregnancy, active cardiovascular disease, open wounds, severe Raynaud\'s syndrome, recent surgery (within 4 weeks), and severe hypertension. Please consult a physician if you have any concerns.',
                'Bare Recovery Studio shall not be liable for any adverse health outcomes arising from undisclosed medical conditions or failure to follow session guidelines.',
                'To the maximum extent permitted under Indian law, our liability for any claim arising from use of our services shall not exceed the amount paid by you for the specific session in question.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#FFFBF5] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              7. Code of Conduct & Studio Etiquette
            </h2>
            <p className="text-sm mb-3">
              To preserve the tranquil and premium environment of Bare Recovery Studio, all clients must adhere to our Studio Etiquette:
            </p>
            <ul className="space-y-2 text-sm">
              {[
                'Mobile Phones: Mobile phones must be silenced or set to vibrate in all therapy, lounge, and recovery spaces.',
                'Guest Privacy: Filming or photography of other clients, classes, or sessions is strictly prohibited to protect the privacy of guests.',
                'Food & Drink: No food or beverages of any kind are allowed beyond the reception lobby (clean drinking water in closed containers is permitted).',
                'Hygiene & Attire: Clean, appropriate swimwear is mandatory for saunas and cold plunges. For compression or lounge therapies, clean athletic wear is required. Grip socks are recommended where applicable.',
                'Respect & Behavior: Disrespectful, abusive, disruptive, or threatening behavior towards our coaches, staff, or other guests will result in immediate termination of the session and/or membership without a refund.',
                'Substance Use: Intoxication or being under the influence of any recreational substance on the premises is strictly forbidden.',
                'Safety Compliance: All posted temperature, exposure duration, and safety instructions for saunas, ice plunges, and compression units must be followed exactly.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BCA386] flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              8. Intellectual Property
            </h2>
            <p className="text-sm">
              All content on barerecovery.studio, including text, images, logos, and service descriptions, is the exclusive intellectual property of Bare Recovery Studio. Reproduction or use without prior written consent is prohibited under the Copyright Act, 1957.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              9. Dispute Resolution
            </h2>
            <p className="text-sm mb-3">
              In the event of a dispute:
            </p>
            <ul className="space-y-2 text-sm">
              {[
                'You agree to first contact us at barerecovery@gmail.com to attempt an amicable resolution within 30 days.',
                'If unresolved, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, by a mutually appointed sole arbitrator. The seat of arbitration shall be Hyderabad, Telangana.',
                'For consumer grievances under the Consumer Protection Act, 2019, you may approach the appropriate Consumer Disputes Redressal Commission.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              10. Governing Law & Jurisdiction
            </h2>
            <p className="text-sm">
              These Terms shall be governed by the laws of India. Subject to the arbitration clause above, any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              11. Contact
            </h2>
            <div
              className="p-6 rounded-2xl text-sm space-y-2"
              style={{ background: 'rgba(20,20,20,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p><strong className="text-[#F5F5F2]">Email:</strong> <a href="mailto:barerecovery@gmail.com" className="text-[#c9c6c5] hover:text-white transition-colors">barerecovery@gmail.com</a></p>
              <p><strong className="text-[#F5F5F2]">WhatsApp:</strong> <a href="https://wa.me/917670861496" target="_blank" rel="noopener noreferrer" className="text-[#c9c6c5] hover:text-white transition-colors">+91 76708 61496</a></p>
              <p><strong className="text-[#F5F5F2]">Address:</strong> 3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
