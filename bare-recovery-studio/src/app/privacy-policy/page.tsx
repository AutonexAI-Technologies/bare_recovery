import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bare Recovery Studio',
  description: 'Privacy Policy for Bare Recovery Studio, Kompally, Secunderabad — how we collect, use, and protect your personal information under Indian law.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0f0e0e' }}>
      <div className="pt-36 pb-28 px-6 md:px-16 max-w-[860px] mx-auto">

        {/* Header */}
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(188,163,134,0.70)', display: 'block', marginBottom: 16 }}>Legal Document</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,6vw,64px)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#f5f0eb', marginBottom: 12 }}>
          Privacy Policy
        </h1>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, color: 'rgba(245,240,235,0.50)' }}>Last updated: August 2026</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(245,240,235,0.20)', display: 'inline-block' }} />
          <span style={{ fontSize: 13, color: 'rgba(245,240,235,0.50)' }}>Bare Recovery Studio · Kompally, Secunderabad</span>
        </div>
        <p style={{ fontSize: 15, color: 'rgba(245,240,235,0.55)', marginBottom: 48, lineHeight: 1.7 }}>
          Effective for all users interacting with Bare Recovery Studio services, websites, and communication channels.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>1. About This Policy</h2>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85, marginBottom: 12 }}>
              Bare Recovery Studio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the recovery studio located at 3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067, India, and the website at <strong style={{ color: '#f5f0eb' }}>barerecovery.studio</strong>.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85 }}>
              This Privacy Policy describes how we collect, use, store, and disclose personal information. It is governed by the <strong style={{ color: '#f5f0eb' }}>Information Technology Act, 2000</strong>, the <strong style={{ color: '#f5f0eb' }}>IT (Amendment) Act, 2008</strong>, the <strong style={{ color: '#f5f0eb' }}>IT (SPDI) Rules, 2011</strong>, and the <strong style={{ color: '#f5f0eb' }}>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>2. Information We Collect</h2>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85, marginBottom: 16 }}>We collect the following categories of personal information:</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { head: 'Identity & Contact Information', body: 'Your name, mobile number, and email address when you contact us or make a booking enquiry via WhatsApp, email, or our website contact form.' },
                { head: 'Health & Medical Information', body: 'Health-related disclosures you voluntarily provide before or during your first session (e.g., pre-existing conditions, medications) for your safety. This is classified as Sensitive Personal Data or Information (SPDI) under the IT Rules, 2011.' },
                { head: 'Usage Data', body: 'Anonymous analytics data including device type, browser, pages visited, and session duration when you use our website. This data cannot be used to personally identify you.' },
                { head: 'Communication Records', body: 'Messages, enquiries, and feedback you send us via WhatsApp, email, or Instagram.' },
              ].map((item) => (
                <li key={item.head} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(188,163,134,0.60)', flexShrink: 0, marginTop: 9 }} />
                  <span style={{ fontSize: 16, color: 'rgba(245,240,235,0.72)', lineHeight: 1.8 }}><strong style={{ color: '#f5f0eb', fontWeight: 600 }}>{item.head}:</strong> {item.body}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>3. How We Use Your Information</h2>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85, marginBottom: 16 }}>We use your personal information only for the following lawful purposes:</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'To respond to your booking enquiries and service-related communications.',
                'To send booking confirmations and session reminders via WhatsApp or SMS.',
                'To ensure your health and safety during recovery sessions.',
                'To comply with applicable legal and regulatory obligations under Indian law.',
                'To improve the quality and scope of our services.',
                'To send you promotional communications about services or offers — only with your express consent.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(188,163,134,0.60)', flexShrink: 0, marginTop: 9 }} />
                  <span style={{ fontSize: 16, color: 'rgba(245,240,235,0.72)', lineHeight: 1.8 }}>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>4. Sharing of Personal Information</h2>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85, marginBottom: 12 }}>
              We do <strong style={{ color: '#f5f0eb' }}>not sell, rent, or trade</strong> your personal information to any third party for commercial or marketing purposes.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85, marginBottom: 16 }}>We may share your information only in these limited circumstances:</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'With technology service providers (e.g., WhatsApp/Meta, Google Analytics) who assist us in operating our business, under strict confidentiality obligations.',
                'When required by applicable Indian law, court order, or a request from a government authority.',
                'In the event of a merger, acquisition, or transfer of our business assets, your data may be transferred — with prior notice to you.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(188,163,134,0.60)', flexShrink: 0, marginTop: 9 }} />
                  <span style={{ fontSize: 16, color: 'rgba(245,240,235,0.72)', lineHeight: 1.8 }}>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>5. Data Retention</h2>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85 }}>
              We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Health disclosures are retained for a minimum of 3 years from your last session. Contact information is retained until you request deletion or withdraw consent.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>6. Your Rights Under Indian Law</h2>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85, marginBottom: 16 }}>Under the DPDP Act 2023 and IT Rules 2011, you have the right to:</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Access a summary of your personal data held by us.',
                'Correct or update inaccurate personal information.',
                'Request the erasure of your personal data (subject to applicable legal retention obligations).',
                'Withdraw consent for processing at any time (this does not affect lawfulness of prior processing).',
                'Nominate a representative to exercise these rights on your behalf.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(188,163,134,0.60)', flexShrink: 0, marginTop: 9 }} />
                  <span style={{ fontSize: 16, color: 'rgba(245,240,235,0.72)', lineHeight: 1.8 }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.60)', lineHeight: 1.85, marginTop: 14 }}>To exercise any of these rights, contact our Grievance Officer (Section 8 below).</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>7. Security of Personal Data</h2>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85 }}>
              We implement reasonable security practices and procedures as required under Rule 8 of the IT (SPDI) Rules, 2011, including access controls, encrypted communication channels, and limited access to personal data. However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>8. Grievance Officer</h2>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85, marginBottom: 16 }}>
              As required under Rule 5(9) of the IT (SPDI) Rules, 2011, we have designated a Grievance Officer for handling complaints and questions related to your personal data:
            </p>
            <div style={{ padding: '24px 28px', borderRadius: 20, background: 'rgba(20,20,20,0.90)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ fontSize: 15, color: 'rgba(245,240,235,0.70)', lineHeight: 1.6 }}><strong style={{ color: '#f5f0eb', fontWeight: 600 }}>Name:</strong> Abhinav (Founder)</p>
              <p style={{ fontSize: 15, color: 'rgba(245,240,235,0.70)', lineHeight: 1.6 }}><strong style={{ color: '#f5f0eb', fontWeight: 600 }}>Organisation:</strong> Bare Recovery Studio</p>
              <p style={{ fontSize: 15, color: 'rgba(245,240,235,0.70)', lineHeight: 1.6 }}><strong style={{ color: '#f5f0eb', fontWeight: 600 }}>Address:</strong> 3rd Floor, Raichandani Orion, NH44, Bashirabad, Kompally, Secunderabad, Telangana 500067</p>
              <p style={{ fontSize: 15, color: 'rgba(245,240,235,0.70)', lineHeight: 1.6 }}><strong style={{ color: '#f5f0eb', fontWeight: 600 }}>Email:</strong> <a href="mailto:barerecovery@gmail.com" style={{ color: 'rgba(188,163,134,0.80)', textDecoration: 'underline' }}>barerecovery@gmail.com</a></p>
              <p style={{ fontSize: 15, color: 'rgba(245,240,235,0.70)', lineHeight: 1.6 }}><strong style={{ color: '#f5f0eb', fontWeight: 600 }}>Response Time:</strong> Within 30 days of receipt of grievance</p>
            </div>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>9. Governing Law &amp; Jurisdiction</h2>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85 }}>
              This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f5f0eb', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>10. Changes to This Policy</h2>
            <p style={{ fontSize: 16, color: 'rgba(245,240,235,0.75)', lineHeight: 1.85 }}>
              We may update this Privacy Policy from time to time. The revised policy will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of our services after such changes constitutes your acceptance of the revised policy.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
