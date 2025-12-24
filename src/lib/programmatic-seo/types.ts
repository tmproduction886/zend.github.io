export type TemplateType = 
  | 'problem-solution'
  | 'feature-focused'
  | 'question-based'
  | 'comparison'
  | 'demographic-specific'
  | 'symptom-outcome'

export interface FAQ {
  question: string
  answer: string
}

export interface HeroData {
  h1: string
  subheading: string
  description?: string
}

export interface ProblemData {
  title: string
  content: string
  statistics?: Array<{
    label: string
    value: string
  }>
}

export interface SolutionData {
  title: string
  content: string
  steps?: Array<{
    title: string
    description: string
  }>
}

export interface FeatureData {
  title: string
  description: string
  icon?: string
  benefits?: string[]
}

export interface TestimonialData {
  quote: string
  author?: string
  role?: string
}

export interface ProgrammaticPageData {
  // Core identifiers
  slug: string
  category?: string
  template: TemplateType
  
  // SEO
  primaryKeyword: string
  secondaryKeywords: string[]
  longTailKeyword?: string
  
  // Metadata
  meta: {
    title: string
    description: string
    keywords?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
  }
  
  // Content
  hero: HeroData
  problem?: ProblemData
  solution?: SolutionData
  features: FeatureData[]
  benefits?: string[]
  testimonials?: TestimonialData[]
  faq: FAQ[]
  
  // Optional context
  demographic?: string
  platform?: string
  useCase?: string
  symptom?: string
  
  // Priority for sitemap
  priority?: number
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

