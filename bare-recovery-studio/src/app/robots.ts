import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all major search engines full access
        userAgent: ['Googlebot', 'Googlebot-Image', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider', 'YandexBot', '*'],
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: 'https://barerecovery.studio/sitemap.xml',
    host: 'https://barerecovery.studio',
  }
}
