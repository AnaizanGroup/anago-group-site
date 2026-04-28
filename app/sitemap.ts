import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anagogroup.com'

  // Main static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/industries',
    '/news',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic sector routes
  const sectors = [
    'mining',
    'industrial',
    'agriculture',
    'equipment',
    'realestate',
  ].map((sector) => ({
    url: `${baseUrl}/industries/${sector}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...sectors]
}
