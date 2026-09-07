import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

export function generatePageMetadata(
    title: string,
    description: string,
    path: string = ''
): Metadata {
    const url = `${SITE_CONFIG.url}${path}`
    const ogImage = `${SITE_CONFIG.url}/images/og-image.jpg`

    return {
        title: `${title} | ${SITE_CONFIG.name}`,
        description,
        keywords: SITE_CONFIG.keywords,
        authors: [{ name: SITE_CONFIG.name }],
        creator: SITE_CONFIG.name,
        publisher: SITE_CONFIG.name,
        metadataBase: new URL(SITE_CONFIG.url),
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'website',
            locale: 'en_IN',
            url,
            title,
            description,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
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
    }
}

export function generateServiceMetadata(serviceName: string, description: string, slug: string) {
    return generatePageMetadata(
        serviceName,
        description,
        `/services/${slug}`
    )
}

export function generateStructuredData(type: 'organization' | 'localBusiness') {
    const baseData = {
        '@context': 'https://schema.org',
        '@type': type === 'organization' ? 'Organization' : 'LocalBusiness',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/images/misc/logo-white.svg`,
        description: SITE_CONFIG.description,
    }

    if (type === 'localBusiness') {
        return {
            ...baseData,
            '@type': 'HealthAndBeautyBusiness',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '3rd Floor, Raichandani Orion, NH44, Bashirabad',
                addressLocality: 'Kompally, Secunderabad',
                addressRegion: 'Telangana',
                postalCode: '500067',
                addressCountry: 'IN',
            },
            telephone: '+917670861496',
            email: 'barerecovery@gmail.com',
            priceRange: '₹₹₹',
            openingHours: ['Mo-Fr 06:00-22:00', 'Sa 08:00-20:00', 'Su 08:00-16:00'],
        }
    }

    return baseData
}