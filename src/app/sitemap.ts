import { MetadataRoute } from 'next'
import { getAllPages } from '@/lib/programmatic-seo/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zend.now'
  const currentDate = new Date().toISOString()
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
  
  // Programmatic pages
  const programmaticPages = getAllPages()
  const dynamicPages: MetadataRoute.Sitemap = programmaticPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency || 'weekly',
    priority: page.priority || 0.7,
  }))
  
  return [...staticPages, ...dynamicPages]
}

