import { MetadataRoute } from 'next'

/**
 * Sitemap Index - Organizes multiple sitemaps by category
 * 
 * For 100 pages, a single sitemap is sufficient (well under 50,000 URL limit).
 * However, using a sitemap index provides:
 * - Better organization by category
 * - Easier maintenance and updates
 * - Scalability for future growth
 * - Better performance for large sites
 * 
 * Note: Next.js doesn't natively support sitemap index files in the same way.
 * This is a reference implementation. For production, you may want to:
 * 1. Generate separate sitemap files per category
 * 2. Create a sitemap-index.xml manually or via build script
 * 3. Submit the sitemap index to Google Search Console
 */
export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zend.now'
  const currentDate = new Date().toISOString()
  
  // Sitemap index structure
  // In practice, you'd generate separate sitemap files and reference them here
  return [
    {
      url: `${baseUrl}/sitemap.xml`, // Main sitemap (includes all pages)
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Future: Add category-specific sitemaps if needed
    // {
    //   url: `${baseUrl}/sitemap-problem-solution.xml`,
    //   lastModified: currentDate,
    // },
    // {
    //   url: `${baseUrl}/sitemap-question-based.xml`,
    //   lastModified: currentDate,
    // },
  ]
}


