import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://barerecovery.studio'

  // Static site pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/contact',
    '/faq',
    '/founder',
    '/terms',
    '/privacy-policy',
    '/blog',
  ]

  // Dynamic services matching src/app/services/[slug]
  const services = [
    'traditional-sauna',
    'cold-plunge',
    'red-light-therapy',
    'compression-therapy',
    'contrast-therapy',
  ]

  // Dynamic blogs matching src/app/blog/[slug]
  const blogs = [
    'why-recovery-matters',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // 1. Add static page paths
  staticPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: page === '' ? 1.0 : 0.8,
    })
  })

  // 2. Add dynamic services paths
  services.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // 3. Add dynamic blog paths
  blogs.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  return sitemapEntries
}
