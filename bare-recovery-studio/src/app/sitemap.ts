import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://barerecovery.studio'
  const now = new Date()

  // Static pages with priority weights
  const staticPages: { path: string; priority: number; freq: MetadataRoute.Sitemap[0]['changeFrequency'] }[] = [
    { path: '',               priority: 1.0, freq: 'weekly' },
    { path: '/services',      priority: 0.95, freq: 'weekly' },
    { path: '/pricing',       priority: 0.95, freq: 'weekly' },
    { path: '/contact',       priority: 0.85, freq: 'monthly' },
    { path: '/about',         priority: 0.80, freq: 'monthly' },
    { path: '/faq',           priority: 0.80, freq: 'monthly' },
    { path: '/founder',       priority: 0.75, freq: 'monthly' },
    { path: '/blog',          priority: 0.75, freq: 'weekly' },
    { path: '/terms',         priority: 0.40, freq: 'yearly' },
    { path: '/privacy-policy',priority: 0.40, freq: 'yearly' },
  ]

  // All 6 service slugs
  const services = [
    'cold-plunge',
    'contrast-therapy',
    'traditional-sauna',
    'infrared-sauna',
    'red-light-therapy',
    'compression-therapy',
  ]

  // All blog post slugs
  const blogs = [
    'why-recovery-matters',
    'cold-plunge-science-2025',
    'contrast-therapy-guide',
    'red-light-therapy-guide',
  ]

  const entries: MetadataRoute.Sitemap = []

  // 1. Static pages
  staticPages.forEach(({ path, priority, freq }) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    })
  })

  // 2. Service pages
  services.forEach((slug) => {
    entries.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    })
  })

  // 3. Blog posts
  blogs.forEach((slug) => {
    entries.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.65,
    })
  })

  return entries
}
