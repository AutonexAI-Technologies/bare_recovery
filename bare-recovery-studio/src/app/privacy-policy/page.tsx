import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bare Recovery Studio',
  description: 'Privacy Policy for Bare Recovery Studio, Kompally, Secunderabad — how we collect, use, and protect your personal information under Indian law.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-24 px-5 md:px-16 max-w-[800px] mx-auto">

        {/* Header */}
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8e9192] block mb-4">Legal</span>
        <h1 className="font-display text-[40px] md:text-[56px] font-black text-[#F5F5F2] mb-4" style={{ letterSpacing: '-0.03em', lineHeight: 1.0 }}>
          Privacy Policy
        </h1>
        <p className="text-[#8e9192] text-sm mb-2">Last updated: June 2025</p>
        <p className="text-[#8e9192] text-sm mb-12">
          Effective for all users interacting with Bare Recovery Studio services, websites, and communication channels.
        </p>

        <div className="space-y-10 text-[#c4c7c7] leading-[1.85]">

          {/* 1 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              1. About This Policy
            </h2>
            <p className="text-sm mb-3">
              Bare Recovery Studio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the recovery studio located at 3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067, India, and the website at <strong className="text-[#F5F5F2]">barerecovery.studio</strong>.
            </p>
            <p className="text-sm">
              This Privacy Policy describes how we collect, use, store, and disclose personal information about our clients and website visitors. This policy is governed by the <strong className="text-[#F5F5F2]">Information Technology Act, 2000</strong>, the <strong className="text-[#F5F5F2]">Information Technology (Amendment) Act, 2008</strong>, the <strong className="text-[#F5F5F2]">Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and the principles of the <strong className="text-[#F5F5F2]">Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              2. Information We Collect
            </h2>
            <p className="text-sm mb-3">We collect the following categories of personal information:</p>
            <ul className="space-y-3 text-sm">
              {[
                { head: 'Identity & Contact Information', body: 'Your name, mobile number, and email address when you contact us, make a booking enquiry via WhatsApp, email, or our website contact form.' },
                { head: 'Health & Medical Information', body: 'Health-related disclosures you voluntarily provide before or during your first session (e.g., pre-existing conditions, medications) as required for your safety. This is classified as Sensitive Personal Data or Information (SPDI) under the IT Rules, 2011.' },
                { head: 'Usage Data', body: 'Anonymous analytics data including device type, browser, pages visited, and session duration when you use our website. This data cannot be used to personally identify you.' },
                { head: 'Communication Records', body: 'Messages, enquiries, and feedback you send us via WhatsApp, email, or Instagram.' },
              ].map((item) => (
                <li key={item.head} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] flex-shrink-0 mt-2" />
                  <span><strong className="text-[#F5F5F2]">{item.head}:</strong> {item.body}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              3. How We Use Your Information
            </h2>
            <p className="text-sm mb-3">We use your personal information only for the following lawful purposes:</p>
            <ul className="space-y-2 text-sm">
              {[
                'To respond to your booking enquiries and service-related communications.',
                'To send booking confirmations and session reminders via WhatsApp or SMS.',
                'To ensure your health and safety during recovery sessions.',
                'To comply with applicable legal and regulatory obligations under Indian law.',
                'To improve the quality and scope of our services.',
                'To send you promotional communications about services or offers — only with your express consent.',
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
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              4. Sharing of Personal Information
            </h2>
            <p className="text-sm mb-3">
              We do <strong className="text-[#F5F5F2]">not sell, rent, or trade</strong> your personal information to any third party for commercial or marketing purposes.
            </p>
            <p className="text-sm mb-3">We may share your information only in these limited circumstances:</p>
            <ul className="space-y-2 text-sm">
              {[
                'With technology service providers (e.g., WhatsApp/Meta, Google Analytics) who assist us in operating our business, under strict confidentiality obligations.',
                'When required by applicable Indian law, court order, or a request from a government authority.',
                'In the event of a merger, acquisition, or transfer of our business assets, your data may be transferred — with prior notice to you.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              5. Data Retention
            </h2>
            <p className="text-sm">
              We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Health disclosures are retained for a minimum of 3 years from your last session. Contact information is retained until you request deletion or withdraw consent.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              6. Your Rights Under Indian Law
            </h2>
            <p className="text-sm mb-3">Under the DPDP Act 2023 and IT Rules 2011, you have the right to:</p>
            <ul className="space-y-2 text-sm">
              {[
                'Access a summary of your personal data held by us.',
                'Correct or update inaccurate personal information.',
                'Request the erasure of your personal data (subject to applicable legal retention obligations).',
                'Withdraw consent for processing at any time (this does not affect lawfulness of prior processing).',
                'Nominate a representative to exercise these rights on your behalf.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9c6c5] flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm mt-3">To exercise any of these rights, contact our Grievance Officer (Section 8 below).</p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              7. Security of Personal Data
            </h2>
            <p className="text-sm">
              We implement reasonable security practices and procedures as required under Rule 8 of the IT (SPDI) Rules, 2011, including access controls, encrypted communication channels, and limited access to personal data. However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              8. Grievance Officer
            </h2>
            <p className="text-sm mb-3">
              As required under Rule 5(9) of the IT (SPDI) Rules, 2011, we have designated a Grievance Officer for handling complaints and questions related to your personal data:
            </p>
            <div
              className="p-6 rounded-2xl text-sm space-y-2"
              style={{ background: 'rgba(20,20,20,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p><strong className="text-[#F5F5F2]">Name:</strong> Abhinav (Founder)</p>
              <p><strong className="text-[#F5F5F2]">Organisation:</strong> Bare Recovery Studio</p>
              <p><strong className="text-[#F5F5F2]">Address:</strong> 3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067</p>
              <p><strong className="text-[#F5F5F2]">Email:</strong> <a href="mailto:barerecovery@gmail.com" className="text-[#c9c6c5] hover:text-white transition-colors">barerecovery@gmail.com</a></p>
              <p><strong className="text-[#F5F5F2]">Response Time:</strong> Within 30 days of receipt of grievance</p>
            </div>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              9. Governing Law & Jurisdiction
            </h2>
            <p className="text-sm">
              This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F5F5F2] mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              10. Changes to This Policy
            </h2>
            <p className="text-sm">
              We may update this Privacy Policy from time to time. The revised policy will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of our services after such changes constitutes your acceptance of the revised policy.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
