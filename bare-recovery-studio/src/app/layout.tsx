import type { Metadata } from 'next'
import { Marcellus, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Kompally's Premier Recovery Studio`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo/bare-recovery-logo.png',
    shortcut: '/images/logo/bare-recovery-logo.png',
    apple: '/images/logo/bare-recovery-logo.png',
  },
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
      <body className={`${marcellus.variable} ${inter.variable} min-h-screen flex flex-col text-[#F5F5F2]`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
