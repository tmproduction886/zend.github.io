// Content generator for programmatic SEO pages
// Generates unique content for each page based on keywords

import { KeywordCombination } from './keyword-generator'
import { ProgrammaticPageData } from '../types'
import { baseFeatures, baseTestimonials } from '../constants'

// Helper function to deterministically select variation based on slug
// This ensures each page gets a unique combination
function selectVariation<T>(variations: T[], slug: string, index: number = 0): T {
  // Use slug hash to deterministically select variation
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i) + index
    hash = hash & hash // Convert to 32-bit integer
  }
  return variations[Math.abs(hash) % variations.length]
}

// Enhanced content variations for better uniqueness (10+ variations each)
const introVariations = [
  (keyword: string, problem?: string) => 
    `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} is a growing concern affecting millions worldwide. If you're searching for ${keyword}, you're taking the first step toward recovery.`,
  (keyword: string, problem?: string) => 
    `Struggling with ${problem || 'gaming addiction'}? You're not alone. ${keyword.charAt(0).toUpperCase() + keyword.slice(1)} has become essential for those seeking real change.`,
  (keyword: string, problem?: string) => 
    `Finding the right ${keyword} can be challenging. Zend offers a unique approach that combines proven recovery methods with innovative technology.`,
  (keyword: string, problem?: string) => 
    `Millions of people worldwide are searching for effective solutions to ${problem || 'gaming addiction'}. ${keyword.charAt(0).toUpperCase() + keyword.slice(1)} represents a modern, evidence-based approach to recovery.`,
  (keyword: string, problem?: string) => 
    `When traditional methods fail, ${keyword} offers a new path forward. Zend combines cutting-edge technology with psychological insights to create lasting change.`,
  (keyword: string, problem?: string) => 
    `The search for ${keyword} often begins with frustration and failed attempts. Zend provides a different solution - one that works with your psychology, not against it.`,
  (keyword: string, problem?: string) => 
    `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} isn't just about stopping - it's about rebuilding your life. Zend helps you transform recovery into a positive journey.`,
  (keyword: string, problem?: string) => 
    `If you're looking for ${keyword}, you've already taken the hardest step: recognizing the need for change. Zend makes the rest of the journey achievable.`,
  (keyword: string, problem?: string) => 
    `Effective ${keyword} requires more than willpower. Zend provides the tools, support, and structure needed to succeed where other methods fall short.`,
  (keyword: string, problem?: string) => 
    `The path to overcoming ${problem || 'gaming addiction'} starts with finding the right ${keyword}. Zend offers a comprehensive solution that addresses both the symptoms and root causes.`,
  (keyword: string, problem?: string) => 
    `Research shows that ${keyword} is most effective when it addresses the psychological drivers of addiction. Zend's gamified approach does exactly that.`,
  (keyword: string, problem?: string) => 
    `Many people find that ${keyword} becomes easier when recovery itself is engaging. Zend transforms the difficult process of quitting into an empowering experience.`,
]

const problemVariations = [
  (problem?: string) => 
    `${problem || 'Gaming addiction'} affects over 2.5 billion people globally, with research showing that 8-10% of gamers struggle with problematic gaming behaviors.`,
  (problem?: string) => 
    `The impact of ${problem || 'gaming addiction'} extends beyond screen time - it affects relationships, careers, mental health, and overall well-being.`,
  (problem?: string) => 
    `Studies reveal that ${problem || 'excessive gaming'} can lead to sleep disorders, social isolation, and decreased academic or professional performance.`,
  (problem?: string) => 
    `${problem || 'Gaming addiction'} has become a global health concern, with the World Health Organization recognizing gaming disorder as a medical condition.`,
  (problem?: string) => 
    `The consequences of ${problem || 'uncontrolled gaming'} are far-reaching: strained relationships, declining work performance, financial stress, and deteriorating physical health.`,
  (problem?: string) => 
    `Research indicates that ${problem || 'problematic gaming'} shares neurological similarities with substance addiction, making it a serious condition requiring proper treatment.`,
  (problem?: string) => 
    `Many people with ${problem || 'gaming addiction'} experience withdrawal symptoms, mood changes, and difficulty functioning in daily life when unable to game.`,
  (problem?: string) => 
    `The digital age has made ${problem || 'gaming addiction'} more prevalent than ever, with mobile games and online platforms designed to maximize engagement.`,
  (problem?: string) => 
    `${problem || 'Excessive gaming'} can disrupt sleep patterns, reduce physical activity, and interfere with real-world responsibilities and relationships.`,
  (problem?: string) => 
    `The psychological impact of ${problem || 'gaming addiction'} includes anxiety, depression, and a sense of loss of control over one's gaming habits.`,
  (problem?: string) => 
    `Studies show that ${problem || 'problematic gaming behaviors'} often co-occur with other mental health conditions, requiring a comprehensive treatment approach.`,
  (problem?: string) => 
    `The social and economic costs of ${problem || 'gaming addiction'} are significant, affecting not just individuals but families, workplaces, and communities.`,
]

const solutionVariations = [
  (keyword: string) => 
    `Zend revolutionizes ${keyword} by using gamification psychology - turning the mechanisms that create addiction into tools for recovery.`,
  (keyword: string) => 
    `Unlike traditional approaches, Zend makes ${keyword} engaging through XP systems, achievements, and community support.`,
  (keyword: string) => 
    `Zend's approach to ${keyword} combines system-level blocking with psychological support, creating a comprehensive recovery system.`,
  (keyword: string) => 
    `Zend addresses ${keyword} by understanding that recovery needs to be as compelling as the games themselves. Our gamified system provides that motivation.`,
  (keyword: string) => 
    `The key to effective ${keyword} is addressing both the behavioral and psychological aspects. Zend does this through technology and community.`,
  (keyword: string) => 
    `Zend's solution for ${keyword} works because it doesn't fight against gaming psychology - it redirects those same mechanisms toward positive outcomes.`,
  (keyword: string) => 
    `Successful ${keyword} requires structure, support, and motivation. Zend provides all three through its comprehensive recovery platform.`,
  (keyword: string) => 
    `Zend makes ${keyword} achievable by breaking down recovery into manageable steps, tracking progress, and celebrating milestones along the way.`,
  (keyword: string) => 
    `The Zend approach to ${keyword} recognizes that willpower alone isn't enough. We provide the tools and systems needed for lasting change.`,
  (keyword: string) => 
    `Zend's method for ${keyword} combines proven recovery techniques with modern technology, creating a solution that's both effective and engaging.`,
  (keyword: string) => 
    `What makes Zend effective for ${keyword} is its holistic approach - addressing blocking, tracking, support, and psychological factors simultaneously.`,
  (keyword: string) => 
    `Zend transforms ${keyword} from a struggle into a journey by making recovery rewarding, measurable, and supported by a community of peers.`,
]

// Subheading variations
const subheadingVariations = [
  `Join 10,000+ users who've successfully overcome gaming addiction using our gamified recovery system`,
  `Trusted by thousands who have taken control of their gaming habits and rebuilt their lives`,
  `Join a community of 10,000+ people who have transformed their relationship with gaming`,
  `Experience the difference: thousands have found freedom from gaming addiction with Zend`,
  `Be part of a growing community that's reclaiming their time and rebuilding their lives`,
  `Join thousands who have discovered a better way to overcome gaming addiction`,
  `See why 10,000+ users have chosen Zend as their path to gaming freedom`,
  `Join the movement: thousands are using Zend to break free from gaming addiction`,
  `Trusted solution: 10,000+ users have successfully recovered with our gamified approach`,
  `Join thousands who have transformed their lives by overcoming gaming addiction`,
  `Be part of a community that's proven recovery is possible with the right tools`,
  `Join 10,000+ success stories - people who have taken back control of their lives`,
]

// H1 variations
const h1Variations = [
  (keyword: string) => `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - Zend | #1 Recovery Solution`,
  (keyword: string) => `Best ${keyword} - Zend Recovery App`,
  (keyword: string) => `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} with Zend`,
  (keyword: string) => `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - Complete Guide | Zend`,
  (keyword: string) => `Effective ${keyword} - Zend Recovery Platform`,
  (keyword: string) => `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} Made Simple | Zend`,
  (keyword: string) => `The Ultimate ${keyword} Solution - Zend`,
]

// Step variations for different approaches
const stepVariations = [
  [
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
  ],
  [
    {
      title: 'Download and Install Zend',
      description: 'Get started in minutes. Download Zend from the App Store and complete the quick setup process.'
    },
    {
      title: 'Configure Your Blocking Schedule',
      description: 'Set up custom blocking times that work with your schedule. Block games during work, study, or sleep hours.'
    },
    {
      title: 'Begin Your Recovery Journey',
      description: 'Start earning XP from day one. Every gaming-free moment contributes to your progress and recovery.'
    },
    {
      title: 'Engage with the Community',
      description: 'Join Guilds, share your story, and connect with others. Community support is key to long-term success.'
    },
    {
      title: 'Monitor and Adjust',
      description: 'Use Zend\'s analytics to track your progress. Adjust your approach based on what works best for you.'
    }
  ],
  [
    {
      title: 'Identify Your Gaming Triggers',
      description: 'Use Zend\'s tracking features to understand when and why you game. Knowledge is the first step to change.'
    },
    {
      title: 'Set Clear Recovery Goals',
      description: 'Define what success looks like for you. Whether it\'s reducing hours or quitting completely, set achievable milestones.'
    },
    {
      title: 'Activate System-Level Blocking',
      description: 'Use iOS Screen Time integration to block games at the system level. This creates a barrier that\'s hard to bypass.'
    },
    {
      title: 'Build New Habits',
      description: 'Replace gaming time with positive activities. Zend helps you track new habits and celebrate progress.'
    },
    {
      title: 'Stay Accountable',
      description: 'Join Guilds and share your journey. Accountability partners and community support increase your chances of success.'
    }
  ],
  [
    {
      title: 'Start Your Free Trial',
      description: 'Begin with Zend\'s 7-day free trial. Experience all features without commitment and see if it\'s right for you.'
    },
    {
      title: 'Complete Your Profile',
      description: 'Set up your recovery profile with your goals, gaming history, and preferred blocking schedule.'
    },
    {
      title: 'Enable Game Blocking',
      description: 'Activate Screen Time blocking for your gaming apps. Choose specific times or set up all-day blocks.'
    },
    {
      title: 'Start Earning Rewards',
      description: 'Begin your gamified recovery journey. Earn XP, unlock achievements, and level up as you progress.'
    },
    {
      title: 'Connect and Grow',
      description: 'Join the Zend community, participate in Guilds, and access recovery tools like meditations and urge surfing.'
    }
  ]
]

// Helper function to deterministically select variation based on slug
// This ensures each page gets a unique combination
function selectVariation<T>(variations: T[], slug: string, index: number = 0): T {
  // Use slug hash to deterministically select variation
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i) + index
    hash = hash & hash // Convert to 32-bit integer
  }
  return variations[Math.abs(hash) % variations.length]
}

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
  // Use deterministic selection based on slug to ensure uniqueness
  const introVariation = selectVariation(introVariations, combo.slug, 0)
  const problemVariation = selectVariation(problemVariations, combo.slug, 1)
  const solutionVariation = selectVariation(solutionVariations, combo.slug, 2)
  
  // Generate unique H1 using deterministic selection
  const h1Generator = selectVariation(h1Variations, combo.slug, 3)
  const h1 = h1Generator(combo.primaryKeyword)
  
  // Generate meta description with variations
  const metaDescVariations = [
    `${combo.primaryKeyword.charAt(0).toUpperCase() + combo.primaryKeyword.slice(1)} with Zend, the #1 gamified recovery app. Uses Screen Time blocking, XP tracking, and community support. Start your 7-day free trial today.`,
    `Discover how Zend helps with ${combo.primaryKeyword}. The #1 gamified recovery app featuring Screen Time blocking, XP rewards, and community support. Try free for 7 days.`,
    `${combo.primaryKeyword.charAt(0).toUpperCase() + combo.primaryKeyword.slice(1)} made simple with Zend. Join 10,000+ users using our gamified recovery system. Free 7-day trial.`,
    `Effective ${combo.primaryKeyword} solution. Zend combines Screen Time blocking, gamification, and community support. Start your recovery journey today with a free trial.`,
  ]
  const metaDescription = selectVariation(metaDescVariations, combo.slug, 4)
  
  // Select relevant features deterministically (4-6 features)
  const featureCount = 4 + (Math.abs(combo.slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % 3)
  const selectedFeatures = baseFeatures.slice(0, featureCount)
  
  // Select subheading deterministically
  const subheading = selectVariation(subheadingVariations, combo.slug, 5)
  
  // Generate hero content
  const hero = {
    h1,
    subheading,
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
  
  // Generate solution section with varied steps
  const selectedSteps = selectVariation(stepVariations, combo.slug, 6)
  
  const solution = {
    title: `How Zend Helps with ${combo.primaryKeyword}`,
    content: solutionVariation(combo.primaryKeyword),
    steps: selectedSteps
  }
  
  // Generate FAQ
  const faq = generateFAQ(combo.primaryKeyword, combo.category, combo.demographic, combo.symptom)
  
  // Select testimonials deterministically (2-3 testimonials per page)
  const testimonialCount = 2 + (Math.abs(combo.slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % 2)
  const testimonialStart = Math.abs(combo.slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % (baseTestimonials.length - testimonialCount + 1)
  const selectedTestimonials = baseTestimonials.slice(testimonialStart, testimonialStart + testimonialCount)
  
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
    testimonials: selectedTestimonials,
    faq,
    demographic: combo.demographic,
    platform: combo.platform,
    symptom: combo.symptom,
    priority: priorityMap[combo.category] || 0.7,
    changeFrequency: 'weekly',
  }
}

