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

// Optimize title length (50-60 characters for best SEO)
function optimizeTitle(title: string): string {
  if (title.length <= 60) return title
  // Try to cut at a natural break point
  const cutAt = title.lastIndexOf(' ', 57)
  return cutAt > 0 ? title.substring(0, cutAt) + '...' : title.substring(0, 57) + '...'
}

// Optimize description length (150-160 characters for best SEO)
function optimizeDescription(description: string): string {
  if (description.length <= 160) return description
  // Try to cut at a natural break point
  const cutAt = description.lastIndexOf('.', 157)
  if (cutAt > 140) return description.substring(0, cutAt + 1)
  const spaceCut = description.lastIndexOf(' ', 157)
  return spaceCut > 140 ? description.substring(0, spaceCut) + '...' : description.substring(0, 157) + '...'
}

export function generateMetadata(pageData: ProgrammaticPageData) {
  const baseUrl = 'https://zend.now'
  
  // Optimize title and description lengths
  const optimizedTitle = optimizeTitle(pageData.meta.title)
  const optimizedDescription = optimizeDescription(pageData.meta.description)
  const optimizedOgTitle = pageData.meta.ogTitle ? optimizeTitle(pageData.meta.ogTitle) : optimizedTitle
  const optimizedOgDescription = pageData.meta.ogDescription ? optimizeDescription(pageData.meta.ogDescription) : optimizedDescription
  
  return {
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: pageData.meta.keywords || pageData.secondaryKeywords.join(', '),
    authors: [{ name: 'Zend' }],
    creator: 'Zend',
    publisher: 'Zend',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${pageData.slug}/`,
    },
    openGraph: {
      title: optimizedOgTitle,
      description: optimizedOgDescription,
      url: `${baseUrl}/${pageData.slug}/`,
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
      title: optimizedOgTitle,
      description: optimizedOgDescription,
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
    // Additional SEO metadata
    category: pageData.category || 'gaming addiction recovery',
    classification: 'Health & Wellness',
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
        item: `${baseUrl}/${pageData.slug}/`
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
      name: 'Zend',
      url: baseUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zend',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icon.png`,
        width: 512,
        height: 512
      }
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/${pageData.slug}/`
    },
    articleSection: 'Gaming Addiction Recovery',
    keywords: pageData.secondaryKeywords.join(', ')
  }
}

// Generate HowTo schema for question-based pages with steps
export function generateHowToSchema(pageData: ProgrammaticPageData) {
  if (pageData.template !== 'question-based' || !pageData.solution?.steps) return null
  
  const baseUrl = 'https://zend.now'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: pageData.hero.h1,
    description: pageData.meta.description,
    image: `${baseUrl}${pageData.meta.ogImage || '/dashboard.png'}`,
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    step: pageData.solution.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      url: `${baseUrl}/${pageData.slug}/#step-${index + 1}`
    }))
  }
}

// Generate WebPage schema for all pages
export function generateWebPageSchema(pageData: ProgrammaticPageData) {
  const baseUrl = 'https://zend.now'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageData.hero.h1,
    description: pageData.meta.description,
    url: `${baseUrl}/${pageData.slug}/`,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Zend',
      url: baseUrl
    },
    about: {
      '@type': 'Thing',
      name: pageData.primaryKeyword
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${baseUrl}${pageData.meta.ogImage || '/dashboard.png'}`,
      width: 1200,
      height: 630
    },
    breadcrumb: {
      '@id': `${baseUrl}/${pageData.slug}/#breadcrumb`
    }
  }
}

