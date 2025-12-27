/**
 * Script to generate 5000 programmatic SEO pages
 * Run with: node scripts/generate-5000-pages.js
 */

const fs = require('fs')
const path = require('path')

const OUTPUT_DIR = path.join(__dirname, '../src/lib/programmatic-seo/pages')
const GENERATED_PAGES_FILE = path.join(OUTPUT_DIR, 'generated-5000-pages.ts')
const TARGET_PAGES = 5000

// Import generators (we'll need to compile or use a different approach)
// For now, let's inline the logic

// Base keyword arrays - expanded for 5000 pages
const problems = [
  'gaming addiction', 'video game addiction', 'online gaming addiction', 
  'mobile gaming addiction', 'pc gaming addiction', 'console gaming addiction',
  'gaming disorder', 'problematic gaming', 'excessive gaming', 'compulsive gaming',
  'internet gaming disorder', 'gaming dependency', 'video game dependency',
  'gaming compulsion', 'addictive gaming', 'gaming habit', 'gaming problem',
  'gaming obsession', 'gaming overuse', 'gaming misuse', 'gaming compulsion disorder',
  'pathological gaming', 'gaming withdrawal', 'gaming tolerance', 'gaming preoccupation',
  'mmorpg addiction', 'mobile game addiction', 'fortnite addiction', 'league of legends addiction',
  'world of warcraft addiction', 'call of duty addiction', 'minecraft addiction', 'roblox addiction',
  'esports addiction', 'streaming addiction', 'twitch addiction', 'youtube gaming addiction'
]

const solutions = [
  'quit gaming', 'stop gaming', 'overcome gaming', 'recover from gaming',
  'break gaming habit', 'end gaming addiction', 'cure gaming addiction',
  'treat gaming addiction', 'manage gaming addiction', 'control gaming',
  'reduce gaming', 'limit gaming', 'cut back gaming', 'curb gaming',
  'break free from gaming', 'escape gaming', 'free from gaming',
  'heal from gaming', 'recover gaming', 'beat gaming addiction',
  'conquer gaming addiction', 'defeat gaming addiction', 'eliminate gaming',
  'overcome gaming compulsion', 'break gaming cycle', 'end gaming dependency',
  'recover from video games', 'quit video games', 'stop video games',
  'overcome video game addiction', 'break video game habit', 'end video game addiction'
]

const features = [
  'screen time blocker', 'game blocker', 'gaming blocker', 'app blocker',
  'time tracker', 'habit tracker', 'recovery tracker', 'progress tracker',
  'gamified recovery', 'xp system', 'streak tracker', 'community support',
  'meditation', 'urge surfing', 'panic button', 'analytics dashboard',
  'block games', 'block gaming apps', 'time limit', 'schedule blocker',
  'focus mode', 'distraction blocker', 'productivity tracker', 'wellness tracker',
  'parental controls', 'app restrictions', 'website blocker', 'content filter',
  'usage monitor', 'activity tracker', 'goal setting', 'milestone tracker',
  'reward system', 'achievement system', 'badge system', 'level system',
  'guild system', 'support group', 'accountability partner', 'coach support'
]

const demographics = [
  'teen', 'adult', 'student', 'professional', 'parent', 'college student',
  'high school', 'young adult', 'working professional', 'gamer',
  'teenager', 'adolescent', 'millennial', 'gen z', 'gen x', 'middle school',
  'elementary', 'university student', 'graduate student', 'employee',
  'teenage boy', 'teenage girl', 'young adult male', 'young adult female',
  'college student', 'university student', 'graduate student', 'high school student',
  'middle school student', 'elementary student', 'working parent', 'stay at home parent',
  'single parent', 'married parent', 'divorced parent', 'retired adult',
  'senior citizen', 'elderly', 'adult male', 'adult female', 'young professional',
  'corporate professional', 'entrepreneur', 'freelancer', 'remote worker'
]

const platforms = [
  'iOS', 'iPhone', 'iPad', 'Android', 'mobile', 'smartphone',
  'tablet', 'device', 'phone', 'ios device', 'android phone',
  'android tablet', 'iphone se', 'iphone pro', 'iphone max',
  'ipad pro', 'ipad air', 'ipad mini', 'samsung', 'google pixel',
  'oneplus', 'xiaomi', 'huawei', 'windows phone', 'mac', 'pc',
  'windows', 'macos', 'linux', 'chrome os'
]

const symptoms = [
  'withdrawal', 'dopamine detox', 'anxiety', 'depression', 'insomnia',
  'irritability', 'cravings', 'relapse', 'procrastination', 'productivity loss',
  'stress', 'loneliness', 'isolation', 'mood swings', 'attention problems',
  'focus issues', 'time management', 'social withdrawal', 'academic problems',
  'sleep problems', 'sleep deprivation', 'fatigue', 'exhaustion', 'burnout',
  'emotional numbness', 'lack of motivation', 'low self esteem', 'guilt',
  'shame', 'anger', 'frustration', 'restlessness', 'boredom', 'emptiness',
  'relationship problems', 'family conflict', 'work problems', 'school problems',
  'financial problems', 'health problems', 'weight gain', 'eye strain', 'headaches',
  'back pain', 'carpal tunnel', 'poor posture', 'sedentary lifestyle'
]

const questions = [
  'how to quit', 'how to stop', 'how to overcome', 'how to break',
  'how to end', 'how to cure', 'how to treat', 'how to manage',
  'how to control', 'how to reduce', 'how to limit', 'how to block',
  'how to break free', 'how to recover', 'how to heal', 'how to beat',
  'how to cut back', 'how to curb', 'how to escape', 'how to free',
  'how to conquer', 'how to defeat', 'how to eliminate', 'how to overcome',
  'how to get help', 'how to find support', 'how to get treatment',
  'how to start recovery', 'how to begin recovery', 'how to stay clean',
  'how to prevent relapse', 'how to maintain recovery', 'how to build new habits'
]

const comparisons = [
  'best app', 'best solution', 'best tool', 'best method', 'top app',
  'vs cold turkey', 'vs freedom', 'vs stayfree', 'vs appblock',
  'alternative to', 'compared to', 'better than', 'vs competitors',
  'top rated', 'most effective', 'leading', 'premium',
  'vs screen time', 'vs downtime', 'vs moment', 'vs one sec',
  'vs forest', 'vs flipd', 'vs rescue time', 'vs time doctor',
  'vs offtime', 'vs space', 'vs quality time', 'vs action dash',
  'best free app', 'best paid app', 'best premium app', 'best free solution'
]

const modifiers = [
  'free', 'premium', 'effective', 'proven', 'scientific', 'evidence-based',
  'professional', 'expert', 'certified', 'trusted', 'reliable', 'safe',
  'best', 'top', 'leading', 'award winning', 'highly rated', 'popular',
  'recommended', 'endorsed', 'approved', 'validated', 'tested', 'reviewed',
  'affordable', 'budget friendly', 'cost effective', 'value', 'quality',
  'advanced', 'innovative', 'cutting edge', 'modern', 'contemporary', 'up to date'
]

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function generateKeywordCombinations() {
  const combinations = []
  const seen = new Set()
  
  // Target distribution: 5000 pages total
  // - Problem-Solution: 2000 pages (40%)
  // - Feature-Focused: 1500 pages (30%)
  // - Question-Based: 800 pages (16%)
  // - Demographic-Specific: 400 pages (8%)
  // - Symptom-Outcome: 200 pages (4%)
  // - Comparison: 100 pages (2%)
  
  // 1. Problem-Solution pages (2000 pages)
  for (const problem of problems) {
    for (const solution of solutions) {
      const primaryKeyword = `${solution} ${problem} app`
      const slug = slugify(primaryKeyword)
      if (!seen.has(slug) && combinations.length < TARGET_PAGES) {
        seen.add(slug)
        combinations.push({
          slug,
          primaryKeyword,
          secondaryKeywords: [`${problem} recovery`, `${solution} gaming`, `${problem} help`],
          category: 'problem-solution',
          template: 'problem-solution',
          problem,
        })
        const catCount = combinations.filter(c => c.category === 'problem-solution').length
        if (catCount >= 2000) break
      }
    }
    const catCount = combinations.filter(c => c.category === 'problem-solution').length
    if (catCount >= 2000) break
  }
  
  // 2. Feature-Focused pages (1500 pages)
  for (const feature of features) {
    for (const problem of problems) {
      const primaryKeyword = `${feature} ${problem} app`
      const slug = slugify(primaryKeyword)
      if (!seen.has(slug) && combinations.length < TARGET_PAGES) {
        seen.add(slug)
        combinations.push({
          slug,
          primaryKeyword,
          secondaryKeywords: [feature, `${problem} tool`, `${feature} for gaming`],
          category: 'feature-focused',
          template: 'feature-focused',
          feature,
          problem,
        })
        const catCount = combinations.filter(c => c.category === 'feature-focused').length
        if (catCount >= 1500) break
      }
    }
    const catCount = combinations.filter(c => c.category === 'feature-focused').length
    if (catCount >= 1500) break
  }
  
  // 3. Question-Based pages (800 pages)
  for (const question of questions) {
    for (const problem of problems) {
      const primaryKeyword = `${question} ${problem}`
      const slug = slugify(primaryKeyword)
      if (!seen.has(slug) && combinations.length < TARGET_PAGES) {
        seen.add(slug)
        combinations.push({
          slug,
          primaryKeyword,
          secondaryKeywords: [`${question} gaming`, `${problem} guide`, `${question} gaming addiction`],
          category: 'question-based',
          template: 'question-based',
          problem,
        })
        const catCount = combinations.filter(c => c.category === 'question-based').length
        if (catCount >= 800) break
      }
    }
    const catCount = combinations.filter(c => c.category === 'question-based').length
    if (catCount >= 800) break
  }
  
  // 4. Demographic-Specific pages (400 pages)
  for (const demographic of demographics) {
    for (const problem of problems) {
      const primaryKeyword = `${demographic} ${problem} app`
      const slug = slugify(primaryKeyword)
      if (!seen.has(slug) && combinations.length < TARGET_PAGES) {
        seen.add(slug)
        combinations.push({
          slug,
          primaryKeyword,
          secondaryKeywords: [`${demographic} gaming help`, `${problem} for ${demographic}`, `${demographic} recovery`],
          category: 'demographic-specific',
          template: 'demographic-specific',
          demographic,
          problem,
        })
        const catCount = combinations.filter(c => c.category === 'demographic-specific').length
        if (catCount >= 400) break
      }
    }
    const catCount = combinations.filter(c => c.category === 'demographic-specific').length
    if (catCount >= 400) break
  }
  
  // 5. Symptom-Outcome pages (200 pages)
  for (const symptom of symptoms) {
    for (const problem of problems.slice(0, 10)) {
      const primaryKeyword = `gaming ${symptom} app`
      const slug = slugify(primaryKeyword)
      if (!seen.has(slug) && combinations.length < TARGET_PAGES) {
        seen.add(slug)
        combinations.push({
          slug,
          primaryKeyword,
          secondaryKeywords: [`${symptom} recovery`, `manage ${symptom}`, `${symptom} help`],
          category: 'symptom-outcome',
          template: 'symptom-outcome',
          symptom,
          problem,
        })
        const catCount = combinations.filter(c => c.category === 'symptom-outcome').length
        if (catCount >= 200) break
      }
    }
    const catCount = combinations.filter(c => c.category === 'symptom-outcome').length
    if (catCount >= 200) break
  }
  
  // Add more symptom variations
  const symptomCount = combinations.filter(c => c.category === 'symptom-outcome').length
  if (symptomCount < 200) {
    for (const symptom of symptoms) {
      const variations = [
        `manage gaming ${symptom}`,
        `${symptom} from gaming`,
        `gaming ${symptom} help`,
        `overcome gaming ${symptom}`,
        `treat gaming ${symptom}`,
        `recover from gaming ${symptom}`,
        `gaming ${symptom} treatment`,
        `gaming ${symptom} recovery`,
      ]
      for (const variation of variations) {
        const primaryKeyword = `${variation} app`
        const slug = slugify(primaryKeyword)
        if (!seen.has(slug) && combinations.length < TARGET_PAGES) {
          seen.add(slug)
          combinations.push({
            slug,
            primaryKeyword,
            secondaryKeywords: [`${symptom} recovery`, `manage ${symptom}`, `${symptom} help`],
            category: 'symptom-outcome',
            template: 'symptom-outcome',
            symptom,
          })
          const catCount = combinations.filter(c => c.category === 'symptom-outcome').length
          if (catCount >= 200) break
        }
      }
      const catCount = combinations.filter(c => c.category === 'symptom-outcome').length
      if (catCount >= 200) break
    }
  }
  
  // 6. Comparison pages (100 pages)
  for (const comparison of comparisons) {
    for (const problem of problems.slice(0, 15)) {
      const primaryKeyword = `${comparison} ${problem}`
      const slug = slugify(primaryKeyword)
      if (!seen.has(slug) && combinations.length < TARGET_PAGES) {
        seen.add(slug)
        combinations.push({
          slug,
          primaryKeyword,
          secondaryKeywords: ['gaming addiction app', 'quit gaming app', 'recovery app'],
          category: 'comparison',
          template: 'comparison',
        })
        const catCount = combinations.filter(c => c.category === 'comparison').length
        if (catCount >= 100) break
      }
    }
    const catCount = combinations.filter(c => c.category === 'comparison').length
    if (catCount >= 100) break
  }
  
  // 7. Platform-specific variations (fill remaining slots)
  const remaining = TARGET_PAGES - combinations.length
  if (remaining > 0) {
    const platformVariations = []
    const baseCombos = combinations.slice(0, Math.min(remaining, combinations.length))
    for (const platform of platforms) {
      for (const combo of baseCombos.slice(0, Math.floor(remaining / platforms.length))) {
        const primaryKeyword = `${combo.primaryKeyword} ${platform}`
        const slug = slugify(primaryKeyword)
        if (!seen.has(slug) && combinations.length + platformVariations.length < TARGET_PAGES) {
          seen.add(slug)
          platformVariations.push({
            ...combo,
            slug,
            primaryKeyword,
            platform,
            secondaryKeywords: [...combo.secondaryKeywords, `${platform} app`],
          })
        }
      }
    }
    combinations.push(...platformVariations)
  }
  
  // 8. Modifier variations (fill any remaining slots)
  const stillRemaining = TARGET_PAGES - combinations.length
  if (stillRemaining > 0) {
    const modifierVariations = []
    const baseCombos = combinations.slice(0, Math.min(stillRemaining * 3, combinations.length))
    for (const modifier of modifiers) {
      for (const combo of baseCombos.slice(0, Math.floor(stillRemaining / modifiers.length))) {
        const primaryKeyword = `${modifier} ${combo.primaryKeyword}`
        const slug = slugify(primaryKeyword)
        if (!seen.has(slug) && combinations.length + modifierVariations.length < TARGET_PAGES) {
          seen.add(slug)
          modifierVariations.push({
            ...combo,
            slug,
            primaryKeyword,
            secondaryKeywords: [...combo.secondaryKeywords, `${modifier} solution`],
          })
        }
      }
    }
    combinations.push(...modifierVariations)
  }
  
  // 9. Additional combinations to reach exactly 5000
  const finalRemaining = TARGET_PAGES - combinations.length
  if (finalRemaining > 0) {
    // Add more specific game title combinations
    const gameTitles = ['fortnite', 'league of legends', 'world of warcraft', 'call of duty', 'minecraft', 'roblox', 'valorant', 'apex legends', 'overwatch', 'csgo', 'dota', 'pubg', 'gta', 'fifa', 'nba']
    for (const game of gameTitles) {
      for (const solution of solutions.slice(0, Math.min(3, Math.floor(finalRemaining / gameTitles.length) + 1))) {
        const primaryKeyword = `${solution} ${game} addiction app`
        const slug = slugify(primaryKeyword)
        if (!seen.has(slug) && combinations.length < TARGET_PAGES) {
          seen.add(slug)
          combinations.push({
            slug,
            primaryKeyword,
            secondaryKeywords: [`${game} addiction recovery`, `${solution} ${game}`, `${game} addiction help`],
            category: 'problem-solution',
            template: 'problem-solution',
            problem: `${game} addiction`,
          })
          if (combinations.length >= TARGET_PAGES) break
        }
      }
      if (combinations.length >= TARGET_PAGES) break
    }
    
    // Add more platform + demographic combinations if still needed
    const stillNeeded = TARGET_PAGES - combinations.length
    if (stillNeeded > 0) {
      for (const platform of platforms.slice(0, 5)) {
        for (const demographic of demographics.slice(0, Math.min(5, Math.floor(stillNeeded / 5) + 1))) {
          for (const problem of problems.slice(0, 2)) {
            const primaryKeyword = `${demographic} ${problem} ${platform} app`
            const slug = slugify(primaryKeyword)
            if (!seen.has(slug) && combinations.length < TARGET_PAGES) {
              seen.add(slug)
              combinations.push({
                slug,
                primaryKeyword,
                secondaryKeywords: [`${demographic} gaming help`, `${problem} for ${demographic}`, `${platform} app`],
                category: 'demographic-specific',
                template: 'demographic-specific',
                demographic,
                platform,
                problem,
              })
              if (combinations.length >= TARGET_PAGES) break
            }
          }
          if (combinations.length >= TARGET_PAGES) break
        }
        if (combinations.length >= TARGET_PAGES) break
      }
    }
  }
  
  return combinations.slice(0, TARGET_PAGES)
}

function generatePageData(combo) {
  const h1 = `${combo.primaryKeyword.charAt(0).toUpperCase() + combo.primaryKeyword.slice(1)} - Zend | #1 Recovery Solution`
  const metaDescription = `${combo.primaryKeyword.charAt(0).toUpperCase() + combo.primaryKeyword.slice(1)} with Zend, the #1 gamified recovery app. Uses Screen Time blocking, XP tracking, and community support. Start your 7-day free trial today.`
  
  const hero = {
    h1,
    subheading: `Join 10,000+ users who've successfully overcome gaming addiction using our gamified recovery system`,
    description: `${combo.primaryKeyword.charAt(0).toUpperCase() + combo.primaryKeyword.slice(1)} is a growing concern affecting millions worldwide. If you're searching for ${combo.primaryKeyword}, you're taking the first step toward recovery.`,
  }
  
  const problem = combo.template === 'problem-solution' || combo.template === 'question-based' ? {
    title: `The ${combo.problem || 'Gaming Addiction'} Problem`,
    content: `${combo.problem || 'Gaming addiction'} affects over 2.5 billion people globally, with research showing that 8-10% of gamers struggle with problematic gaming behaviors.`,
    statistics: [
      { label: 'Gamers Worldwide', value: '2.5B+' },
      { label: 'Problematic Gaming', value: '8-10%' },
      { label: 'Screen Time Increase', value: '40%' }
    ]
  } : undefined
  
  const solution = {
    title: `How Zend Helps with ${combo.primaryKeyword}`,
    content: `Zend revolutionizes ${combo.primaryKeyword} by using gamification psychology - turning the mechanisms that create addiction into tools for recovery.`,
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
  
  const faq = [
    {
      question: `How does Zend help with ${combo.primaryKeyword}?`,
      answer: `Zend uses a gamified recovery system that makes quitting gaming as engaging as the games themselves. Through Screen Time blocking, XP tracking, and community support, Zend provides a comprehensive solution for ${combo.primaryKeyword}.`
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
  
  if (combo.demographic) {
    faq.push({
      question: `Is Zend suitable for ${combo.demographic}s?`,
      answer: `Yes, Zend is designed to be effective for ${combo.demographic}s. The app includes age-appropriate features and privacy controls, making it suitable for ${combo.demographic}s seeking help with gaming addiction.`
    })
  }
  
  if (combo.symptom) {
    faq.push({
      question: `Can Zend help with gaming ${combo.symptom}?`,
      answer: `Zend includes specific features to help manage gaming ${combo.symptom}, including meditation tools, urge surfing techniques, and community support. Many users find these features essential for managing ${combo.symptom} during recovery.`
    })
  }
  
  const priorityMap = {
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
    features: [
      {
        title: 'Screen Time Blocking',
        description: 'Native iOS Screen Time integration provides system-level game blocking that can\'t be easily bypassed.',
        benefits: ['System-level blocking', 'Cannot be bypassed', 'Scheduled blocks', 'Custom block lists']
      },
      {
        title: 'Gamified Recovery System',
        description: 'Earn XP, level up, and unlock achievements for real-life progress. Transform recovery into an engaging journey.',
        benefits: ['XP and leveling system', 'Achievement badges', 'Quest system', 'Progress tracking']
      },
      {
        title: 'Streak Tracking',
        description: 'Track your recovery streak and build momentum. Every day counts toward your goal.',
        benefits: ['Daily streak counter', 'Milestone celebrations', 'Visual progress', 'Motivation boost']
      },
      {
        title: 'Community Support',
        description: 'Join Guilds and connect with others on the same journey. Accountability and support when you need it.',
        benefits: ['Guild system', 'Peer support', 'Accountability', 'Shared experiences']
      },
    ],
    testimonials: [
      {
        quote: 'Zend changed my life. The gamification made recovery actually engaging, and the Screen Time blocking was the key to success.',
        author: 'Alex M.',
        role: 'Recovered Gamer'
      },
      {
        quote: 'I tried everything to quit gaming. Zend was the only thing that worked because it addressed the psychological side, not just blocking.',
        author: 'Jordan K.',
        role: 'Student'
      },
    ],
    faq: faq.slice(0, 6),
    demographic: combo.demographic,
    platform: combo.platform,
    symptom: combo.symptom,
    priority: priorityMap[combo.category] || 0.7,
    changeFrequency: 'weekly',
  }
}

// Main execution
console.log(`Generating ${TARGET_PAGES} programmatic SEO pages...`)

const combinations = generateKeywordCombinations()
console.log(`Generated ${combinations.length} unique keyword combinations`)

const pagesByCategory = {
  'problem-solution': [],
  'feature-focused': [],
  'question-based': [],
  'demographic-specific': [],
  'symptom-outcome': [],
  'comparison': [],
}

for (const combo of combinations) {
  const pageData = generatePageData(combo)
  pagesByCategory[combo.category].push(pageData)
}

// Generate TypeScript file
let fileContent = `// @ts-nocheck
// Auto-generated file: ${TARGET_PAGES} programmatic SEO pages
// Generated on: ${new Date().toISOString()}
// DO NOT EDIT MANUALLY - Regenerate using: node scripts/generate-5000-pages.js

import { ProgrammaticPageData } from '../types'

`

for (const [category, pages] of Object.entries(pagesByCategory)) {
  const categoryName = category.replace(/-/g, '')
  const exportName = `${categoryName}Pages`
  
  fileContent += `// ${category} pages (${pages.length} pages)\n`
  const pagesJson = JSON.stringify(pages, null, 2)
  fileContent += `export const ${exportName}: ProgrammaticPageData[] = ${pagesJson}\n\n`
}

fileContent += `// All generated pages combined\n`
fileContent += `export const allGeneratedPages = [\n`
for (const [category, pages] of Object.entries(pagesByCategory)) {
  const categoryName = category.replace(/-/g, '')
  fileContent += `  ...${categoryName}Pages,\n`
}
fileContent += `] as ProgrammaticPageData[]\n`

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Write to file
fs.writeFileSync(GENERATED_PAGES_FILE, fileContent, 'utf-8')

console.log(`\n✅ Generated ${combinations.length} pages:`)
for (const [category, pages] of Object.entries(pagesByCategory)) {
  console.log(`   - ${category}: ${pages.length} pages`)
}
console.log(`\n📁 Output file: ${GENERATED_PAGES_FILE}`)
console.log(`\n⚠️  Next steps:`)
console.log(`   1. Review the generated file`)
console.log(`   2. Update data.ts to import from generated-5000-pages.ts`)
console.log(`   3. Run build to verify all pages generate correctly`)
console.log(`   4. Consider sitemap index for ${TARGET_PAGES} pages`)

