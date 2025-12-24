import { ProgrammaticPageData, TemplateType } from './types'
import { getPageBySlug } from './data'

export function getPageData(slug: string): ProgrammaticPageData | null {
  const page = getPageBySlug(slug)
  if (!page) return null
  return page
}

export function getTemplateComponent(template: TemplateType) {
  // For now, all pages use ProblemSolutionTemplate
  // In the future, we can add other template types
  // TODO: Create FeatureTemplate, QuestionTemplate, ComparisonTemplate, etc.
  return require('@/components/templates/ProblemSolutionTemplate').default
}

export function generateMetadata(pageData: ProgrammaticPageData) {
  const baseUrl = 'https://zend.now'
  
  return {
    title: pageData.meta.title,
    description: pageData.meta.description,
    keywords: pageData.meta.keywords || pageData.secondaryKeywords.join(', '),
    authors: [{ name: 'Zend' }],
    creator: 'Zend',
    publisher: 'Zend',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${pageData.slug}`,
    },
    openGraph: {
      title: pageData.meta.ogTitle || pageData.meta.title,
      description: pageData.meta.ogDescription || pageData.meta.description,
      url: `${baseUrl}/${pageData.slug}`,
      siteName: 'Zend',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: pageData.meta.ogImage || '/dashboard.png',
          width: 1200,
          height: 630,
          alt: pageData.hero.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: pageData.meta.ogTitle || pageData.meta.title,
      description: pageData.meta.ogDescription || pageData.meta.description,
      images: [pageData.meta.ogImage || '/dashboard.png'],
      creator: '@zend',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  }
}

export function generateStructuredData(pageData: ProgrammaticPageData) {
  const baseUrl = 'https://zend.now'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Zend',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '19.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000',
      bestRating: '5',
      worstRating: '1',
    },
    description: pageData.meta.description,
    screenshot: [
      `${baseUrl}/dashboard.png`,
      `${baseUrl}/block.png`,
      `${baseUrl}/achievements.png`,
    ],
    featureList: pageData.features.map(f => f.title),
    applicationSubCategory: 'Wellness Application',
    downloadUrl: 'https://apps.apple.com/us/app/zend-quit-gaming-now/id6756012283',
    softwareVersion: '1.0',
  }
}

export function generateFAQSchema(pageData: ProgrammaticPageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageData.faq.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Internal linking system - get related pages for internal linking
export function getRelatedPages(currentSlug: string, limit: number = 5): Array<{ slug: string; title: string; primaryKeyword: string }> {
  const { getAllPages } = require('./data')
  const allPages = getAllPages()
  const currentPage = allPages.find((p: ProgrammaticPageData) => p.slug === currentSlug)
  
  if (!currentPage) return []
  
  // Find related pages based on:
  // 1. Same category
  // 2. Shared keywords
  // 3. Similar template type
  const related = allPages
    .filter((page: ProgrammaticPageData) => {
      if (page.slug === currentSlug) return false
      
      // Check for shared keywords
      const sharedKeywords = page.secondaryKeywords.some(kw => 
        currentPage.secondaryKeywords.includes(kw) || 
        currentPage.primaryKeyword.includes(kw) ||
        page.primaryKeyword.includes(currentPage.primaryKeyword.split(' ')[0])
      )
      
      // Check for same category
      const sameCategory = page.category === currentPage.category
      
      // Check for similar template
      const similarTemplate = page.template === currentPage.template
      
      return sharedKeywords || sameCategory || similarTemplate
    })
    .slice(0, limit)
    .map((page: ProgrammaticPageData) => ({
      slug: page.slug,
      title: page.hero.h1,
      primaryKeyword: page.primaryKeyword
    }))
  
  return related
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(pageData: ProgrammaticPageData) {
  const baseUrl = 'https://zend.now'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageData.hero.h1,
        item: `${baseUrl}/${pageData.slug}`
      }
    ]
  }
}

// Generate Article schema for question-based pages
export function generateArticleSchema(pageData: ProgrammaticPageData) {
  if (pageData.template !== 'question-based') return null
  
  const baseUrl = 'https://zend.now'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pageData.hero.h1,
    description: pageData.meta.description,
    author: {
      '@type': 'Organization',
      name: 'Zend'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zend',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icon.png`
      }
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/${pageData.slug}`
    }
  }
}

