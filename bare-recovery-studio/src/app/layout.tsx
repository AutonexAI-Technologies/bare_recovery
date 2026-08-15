import type { Metadata } from 'next'
import { Marcellus, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import TopAnnouncementBar from '@/components/shared/TopAnnouncementBar'
import Footer from '@/components/shared/Footer'
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp'
import { SITE_CONFIG } from '@/lib/constants'

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Kompally, Secunderabad`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Hyderabad's First Recovery Studio`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Bare Recovery Studio — Cold Plunge, Sauna, Red Light Therapy in Kompally, Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Kompally, Secunderabad`,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo/bare-recovery-logo.png',
    shortcut: '/images/logo/bare-recovery-logo.png',
    apple: '/images/logo/bare-recovery-logo.png',
  },
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad, Telangana',
    'geo.position': '17.5043;78.4682',
    'ICBM': '17.5043, 78.4682',
  },
}

// JSON-LD LocalBusiness structured data — biggest local SEO signal
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['HealthAndBeautyBusiness', 'LocalBusiness', 'SportsActivityLocation'],
      '@id': `${SITE_CONFIG.url}/#business`,
      name: 'Bare Recovery Studio',
      alternateName: 'Bare Recovery',
      url: SITE_CONFIG.url,
      description: "Hyderabad's first dedicated recovery studio offering Cold Plunge, Traditional Sauna, Infrared Sauna, Red Light Therapy, Compression Therapy, Contrast Therapy, and Full Circuit sessions.",
      telephone: '+91-7670861496',
      email: 'barerecovery@gmail.com',
      priceRange: '₹799–₹2,999',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Card',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Raichandani, Jeedimetla',
        addressLocality: 'Kompally',
        addressRegion: 'Telangana',
        postalCode: '500010',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '17.5043',
        longitude: '78.4682',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          opens: '10:00',
          closes: '22:00',
        },
      ],
      sameAs: [
        'https://www.instagram.com/bare.recovery',
        'https://youtube.com/@abhinavliftsvlogs',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Recovery Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cold Plunge', url: `${SITE_CONFIG.url}/services/cold-plunge` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Traditional Sauna', url: `${SITE_CONFIG.url}/services/traditional-sauna` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infrared Sauna', url: `${SITE_CONFIG.url}/services/infrared-sauna` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Red Light Therapy', url: `${SITE_CONFIG.url}/services/red-light-therapy` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compression Therapy', url: `${SITE_CONFIG.url}/services/compression-therapy` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contrast Therapy', url: `${SITE_CONFIG.url}/services/contrast-therapy` } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: 'Bare Recovery Studio',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_CONFIG.url}/services/{search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${inter.variable} min-h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${marcellus.variable} ${inter.variable} min-h-screen flex flex-col text-[#F5F5F2]`}>
        <TopAnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
