import { ProgrammaticPageData, TemplateType } from './types'
import { getPageBySlug } from './data'

export function getPageData(slug: string): ProgrammaticPageData | null {
  const page = getPageBySlug(slug)
  if (!page) return null
  return page
}

export function getTemplateComponent(template: TemplateType) {
  // Dynamic import based on template type
  switch (template) {
    case 'problem-solution':
      return require('@/components/templates/ProblemSolutionTemplate').default
    case 'feature-focused':
      return require('@/components/templates/FeatureTemplate').default
    case 'question-based':
      return require('@/components/templates/QuestionTemplate').default
    case 'comparison':
      return require('@/components/templates/ComparisonTemplate').default
    case 'demographic-specific':
      return require('@/components/templates/DemographicTemplate').default
    case 'symptom-outcome':
      return require('@/components/templates/SymptomTemplate').default
    default:
      return require('@/components/templates/ProblemSolutionTemplate').default
  }
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

