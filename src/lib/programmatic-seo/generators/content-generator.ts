// Content generator for programmatic SEO pages
// Generates unique content for each page based on keywords

import { KeywordCombination } from './keyword-generator'
import { ProgrammaticPageData } from '../types'
import { baseFeatures, baseTestimonials } from '../constants'

// Content variations for uniqueness
const introVariations = [
  (keyword: string, problem?: string) => 
    `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} is a growing concern affecting millions worldwide. If you're searching for ${keyword}, you're taking the first step toward recovery.`,
  (keyword: string, problem?: string) => 
    `Struggling with ${problem || 'gaming addiction'}? You're not alone. ${keyword.charAt(0).toUpperCase() + keyword.slice(1)} has become essential for those seeking real change.`,
  (keyword: string, problem?: string) => 
    `Finding the right ${keyword} can be challenging. Zend offers a unique approach that combines proven recovery methods with innovative technology.`,
]

const problemVariations = [
  (problem?: string) => 
    `${problem || 'Gaming addiction'} affects over 2.5 billion people globally, with research showing that 8-10% of gamers struggle with problematic gaming behaviors.`,
  (problem?: string) => 
    `The impact of ${problem || 'gaming addiction'} extends beyond screen time - it affects relationships, careers, mental health, and overall well-being.`,
  (problem?: string) => 
    `Studies reveal that ${problem || 'excessive gaming'} can lead to sleep disorders, social isolation, and decreased academic or professional performance.`,
]

const solutionVariations = [
  (keyword: string) => 
    `Zend revolutionizes ${keyword} by using gamification psychology - turning the mechanisms that create addiction into tools for recovery.`,
  (keyword: string) => 
    `Unlike traditional approaches, Zend makes ${keyword} engaging through XP systems, achievements, and community support.`,
  (keyword: string) => 
    `Zend's approach to ${keyword} combines system-level blocking with psychological support, creating a comprehensive recovery system.`,
]

// Generate unique FAQ questions
function generateFAQ(keyword: string, category: string, demographic?: string, symptom?: string): Array<{ question: string; answer: string }> {
  const baseFAQs = [
    {
      question: `How does Zend help with ${keyword}?`,
      answer: `Zend uses a gamified recovery system that makes quitting gaming as engaging as the games themselves. Through Screen Time blocking, XP tracking, and community support, Zend provides a comprehensive solution for ${keyword}.`
    },
    {
      question: `Is Zend free to use?`,
      answer: `Zend offers a 7-day free trial, allowing you to experience all features before committing. After the trial, premium features are available through a subscription that supports ongoing development and community features.`
    },
    {
      question: `How long does it take to see results with Zend?`,
      answer: `Many users report feeling more in control within the first week of using Zend. Long-term recovery varies by individual, but consistent use of Zend's features typically leads to significant improvement within 30-90 days.`
    },
    {
      question: `Can Zend block games on my device?`,
      answer: `Yes, Zend uses native iOS Screen Time API to provide system-level game blocking. This means games are blocked at the operating system level, making it much harder to bypass than app-level blockers.`
    },
    {
      question: `Does Zend work for all types of gaming addiction?`,
      answer: `Zend is designed to help with all forms of gaming addiction, including mobile gaming, PC gaming, console gaming, and online gaming. The app's flexible blocking and tracking features adapt to your specific gaming habits.`
    },
  ]
  
  // Add category-specific FAQs
  if (demographic) {
    baseFAQs.push({
      question: `Is Zend suitable for ${demographic}s?`,
      answer: `Yes, Zend is designed to be effective for ${demographic}s. The app includes age-appropriate features and privacy controls, making it suitable for ${demographic}s seeking help with gaming addiction.`
    })
  }
  
  if (symptom) {
    baseFAQs.push({
      question: `Can Zend help with gaming ${symptom}?`,
      answer: `Zend includes specific features to help manage gaming ${symptom}, including meditation tools, urge surfing techniques, and community support. Many users find these features essential for managing ${symptom} during recovery.`
    })
  }
  
  return baseFAQs.slice(0, 6) // Return 6 FAQs
}

// Generate page data from keyword combination
export function generatePageData(combo: KeywordCombination): ProgrammaticPageData {
  const introVariation = introVariations[Math.floor(Math.random() * introVariations.length)]
  const problemVariation = problemVariations[Math.floor(Math.random() * problemVariations.length)]
  const solutionVariation = solutionVariations[Math.floor(Math.random() * solutionVariations.length)]
  
  // Generate unique H1
  const h1Variations = [
    `${combo.primaryKeyword.charAt(0).toUpperCase() + combo.primaryKeyword.slice(1)} - Zend | #1 Recovery Solution`,
    `Best ${combo.primaryKeyword} - Zend Recovery App`,
    `${combo.primaryKeyword.charAt(0).toUpperCase() + combo.primaryKeyword.slice(1)} with Zend`,
  ]
  const h1 = h1Variations[Math.floor(Math.random() * h1Variations.length)]
  
  // Generate meta description
  const metaDescription = `${combo.primaryKeyword.charAt(0).toUpperCase() + combo.primaryKeyword.slice(1)} with Zend, the #1 gamified recovery app. Uses Screen Time blocking, XP tracking, and community support. Start your 7-day free trial today.`
  
  // Select relevant features (4-6 features)
  const selectedFeatures = baseFeatures.slice(0, 4 + Math.floor(Math.random() * 3))
  
  // Generate hero content
  const hero = {
    h1,
    subheading: `Join 10,000+ users who've successfully overcome gaming addiction using our gamified recovery system`,
    description: introVariation(combo.primaryKeyword, combo.problem),
  }
  
  // Generate problem section (if applicable)
  const problem = combo.template === 'problem-solution' || combo.template === 'question-based' ? {
    title: `The ${combo.problem || 'Gaming Addiction'} Problem`,
    content: problemVariation(combo.problem),
    statistics: [
      { label: 'Gamers Worldwide', value: '2.5B+' },
      { label: 'Problematic Gaming', value: '8-10%' },
      { label: 'Screen Time Increase', value: '40%' }
    ]
  } : undefined
  
  // Generate solution section
  const solution = {
    title: `How Zend Helps with ${combo.primaryKeyword}`,
    content: solutionVariation(combo.primaryKeyword),
    steps: [
      {
        title: 'Set Up Screen Time Blocking',
        description: 'Use native iOS Screen Time to block gaming apps during your scheduled focus hours. System-level blocking that can\'t be easily bypassed.'
      },
      {
        title: 'Start Earning XP',
        description: 'Every day you stay gaming-free, you earn XP and level up. Transform recovery from a struggle into an engaging journey.'
      },
      {
        title: 'Join a Guild',
        description: 'Connect with others on the same journey. Get support, share progress, and stay accountable.'
      },
      {
        title: 'Track Your Progress',
        description: 'Monitor your recovery journey with detailed analytics. See time reclaimed, habits built, and milestones achieved.'
      }
    ]
  }
  
  // Generate FAQ
  const faq = generateFAQ(combo.primaryKeyword, combo.category, combo.demographic, combo.symptom)
  
  // Set priority based on category
  const priorityMap: Record<string, number> = {
    'problem-solution': 0.9,
    'question-based': 0.85,
    'feature-focused': 0.8,
    'demographic-specific': 0.75,
    'symptom-outcome': 0.7,
    'comparison': 0.8,
  }
  
  return {
    slug: combo.slug,
    category: combo.category,
    template: combo.template,
    primaryKeyword: combo.primaryKeyword,
    secondaryKeywords: combo.secondaryKeywords,
    meta: {
      title: h1,
      description: metaDescription,
      keywords: [combo.primaryKeyword, ...combo.secondaryKeywords].join(', '),
      ogTitle: h1,
      ogDescription: metaDescription,
      ogImage: '/dashboard.png'
    },
    hero,
    problem,
    solution,
    features: selectedFeatures,
    testimonials: baseTestimonials,
    faq,
    demographic: combo.demographic,
    platform: combo.platform,
    symptom: combo.symptom,
    priority: priorityMap[combo.category] || 0.7,
    changeFrequency: 'weekly',
  }
}

