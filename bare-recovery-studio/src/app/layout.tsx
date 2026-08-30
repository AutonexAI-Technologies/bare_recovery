import type { Metadata } from 'next'
import { Marcellus, Inter } from 'next/font/google'
import Script from 'next/script'
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

const GA_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Cold Plunge, Sauna & Recovery Studio, Kompally Hyderabad`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Hyderabad's First Recovery Studio`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Bare Recovery Studio — Cold Plunge, Sauna, Red Light Therapy in Kompally, Hyderabad',
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Cold Plunge & Sauna, Kompally Hyderabad`,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/images/og-image.jpg`],
    creator: '@bare_recovery',
  },

  // ── Robots ───────────────────────────────────────────────────────────────────
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

  // ── Icons / Favicon ──────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },

  // ── Web App Manifest ─────────────────────────────────────────────────────────
  manifest: '/manifest.json',

  // ── Google Search Console Verification ──────────────────────────────────────
  ...(GSC_VERIFICATION && {
    verification: {
      google: GSC_VERIFICATION,
    },
  }),

  // ── Geo + Local SEO meta ─────────────────────────────────────────────────────
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad, Telangana',
    'geo.position': '17.5043;78.4682',
    'ICBM': '17.5043, 78.4682',
    // Tells Google Maps / local search
    'og:locality': 'Kompally',
    'og:region': 'Telangana',
    'og:country-name': 'India',
    'og:postal-code': '500010',
    'og:latitude': '17.5043',
    'og:longitude': '78.4682',
  },
}

// ── JSON-LD LocalBusiness structured data ────────────────────────────────────
// This is the #1 signal for local SEO ranking — comprehensive schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['HealthAndBeautyBusiness', 'LocalBusiness', 'SportsActivityLocation'],
      '@id': `${SITE_CONFIG.url}/#business`,
      name: 'Bare Recovery Studio',
      alternateName: ['Bare Recovery', 'Bare Recovery Kompally', 'Bare Recovery Hyderabad'],
      url: SITE_CONFIG.url,
      description: "Hyderabad's first dedicated recovery studio offering Cold Plunge, Traditional Sauna, Infrared Sauna, Red Light Therapy, Compression Therapy, Contrast Therapy, and Full Circuit sessions. Located in Kompally, Secunderabad.",
      telephone: '+91-8096407555',
      email: 'barerecovery@gmail.com',
      priceRange: '₹799–₹2,999',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Card',
      image: `${SITE_CONFIG.url}/images/og-image.jpg`,
      logo: `${SITE_CONFIG.url}/images/logo/nav-logo.png`,
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
      hasMap: 'https://maps.google.com/?q=Bare+Recovery+Studio+Kompally+Hyderabad',
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
        'https://wa.me/918096407555',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '3',
        bestRating: '5',
        worstRating: '1',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Recovery Services — Bare Recovery Studio',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cold Plunge', description: 'Full body cold immersion at 10-15°C for recovery and performance', url: `${SITE_CONFIG.url}/services/cold-plunge` }, price: '1199', priceCurrency: 'INR' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Traditional Sauna', description: 'Dry heat sauna at 70-80°C for deep muscle recovery', url: `${SITE_CONFIG.url}/services/traditional-sauna` }, price: '999', priceCurrency: 'INR' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infrared Sauna', description: 'Infrared sauna therapy for deep tissue recovery', url: `${SITE_CONFIG.url}/services/infrared-sauna` }, price: '999', priceCurrency: 'INR' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Red Light Therapy', description: '660nm & 850nm photobiomodulation therapy', url: `${SITE_CONFIG.url}/services/red-light-therapy` }, price: '799', priceCurrency: 'INR' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compression Therapy', description: 'Dynamic air compression therapy for legs and upper body', url: `${SITE_CONFIG.url}/services/compression-therapy` }, price: '799', priceCurrency: 'INR' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contrast Therapy', description: 'Hot-cold contrast therapy combining sauna and cold plunge', url: `${SITE_CONFIG.url}/services/contrast-therapy` }, price: '1799', priceCurrency: 'INR' },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: 'Bare Recovery Studio',
      description: "Hyderabad's first dedicated recovery studio in Kompally",
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_CONFIG.url}/services/{search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_CONFIG.url}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_CONFIG.url}/services` },
        { '@type': 'ListItem', position: 3, name: 'Pricing', item: `${SITE_CONFIG.url}/pricing` },
        { '@type': 'ListItem', position: 4, name: 'About', item: `${SITE_CONFIG.url}/about` },
        { '@type': 'ListItem', position: 5, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
        { '@type': 'ListItem', position: 6, name: 'Contact', item: `${SITE_CONFIG.url}/contact` },
      ],
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
        {/* JSON-LD Structured Data — critical for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics 4 — only loads when GA_ID is set */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                  allow_google_signals: false,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
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
