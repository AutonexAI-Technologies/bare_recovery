import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Major search engines — full access to content pages
        userAgent: ['Googlebot', 'Googlebot-Image', 'Bingbot', 'DuckDuckBot'],
        allow: '/',
        disallow: [
          '/api/',      // Block all API endpoints — no crawler access
          '/_next/',    // Next.js internals
          '/static/',   // Static assets directory
        ],
      },
      {
        // All other bots — restrict to crawl-safe paths only
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',      // Critical: prevent API abuse via scrapers
          '/_next/',
          '/static/',
        ],
      },
    ],
    sitemap: 'https://barerecovery.studio/sitemap.xml',
    host: 'https://barerecovery.studio',
  }
}
