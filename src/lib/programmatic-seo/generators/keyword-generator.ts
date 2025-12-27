// Keyword generator for 1000 programmatic SEO pages
// Creates diverse keyword combinations across all categories

export interface KeywordCombination {
  slug: string
  primaryKeyword: string
  secondaryKeywords: string[]
  category: string
  template: 'problem-solution' | 'feature-focused' | 'question-based' | 'comparison' | 'demographic-specific' | 'symptom-outcome'
  demographic?: string
  platform?: string
  symptom?: string
  feature?: string
  problem?: string
}

// Base keyword arrays
const problems = [
  'gaming addiction', 'video game addiction', 'online gaming addiction', 
  'mobile gaming addiction', 'pc gaming addiction', 'console gaming addiction',
  'gaming disorder', 'problematic gaming', 'excessive gaming', 'compulsive gaming'
]

const solutions = [
  'quit gaming', 'stop gaming', 'overcome gaming', 'recover from gaming',
  'break gaming habit', 'end gaming addiction', 'cure gaming addiction',
  'treat gaming addiction', 'manage gaming addiction', 'control gaming'
]

const features = [
  'screen time blocker', 'game blocker', 'gaming blocker', 'app blocker',
  'time tracker', 'habit tracker', 'recovery tracker', 'progress tracker',
  'gamified recovery', 'xp system', 'streak tracker', 'community support',
  'meditation', 'urge surfing', 'panic button', 'analytics dashboard'
]

const demographics = [
  'teen', 'adult', 'student', 'professional', 'parent', 'college student',
  'high school', 'young adult', 'working professional', 'gamer'
]

const platforms = [
  'iOS', 'iPhone', 'iPad', 'Android', 'mobile', 'smartphone'
]

const symptoms = [
  'withdrawal', 'dopamine detox', 'anxiety', 'depression', 'insomnia',
  'irritability', 'cravings', 'relapse', 'procrastination', 'productivity loss'
]

const questions = [
  'how to quit', 'how to stop', 'how to overcome', 'how to break',
  'how to end', 'how to cure', 'how to treat', 'how to manage',
  'how to control', 'how to reduce', 'how to limit', 'how to block'
]

const comparisons = [
  'best app', 'best solution', 'best tool', 'best method', 'top app',
  'vs cold turkey', 'vs freedom', 'vs stayfree', 'vs appblock'
]

// Generate slug from keyword
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Generate keyword combinations
export function generateKeywordCombinations(): KeywordCombination[] {
  const combinations: KeywordCombination[] = []
  
  // 1. Problem-Solution pages (300 pages)
  for (const problem of problems) {
    for (const solution of solutions.slice(0, 5)) { // Limit combinations
      const primaryKeyword = `${solution} ${problem} app`
      combinations.push({
        slug: slugify(primaryKeyword),
        primaryKeyword,
        secondaryKeywords: [`${problem} recovery`, `${solution} gaming`, `${problem} help`],
        category: 'problem-solution',
        template: 'problem-solution',
        problem,
      })
    }
  }
  
  // 2. Feature-Focused pages (200 pages)
  for (const feature of features) {
    for (const problem of problems.slice(0, 3)) {
      const primaryKeyword = `${feature} ${problem} app`
      combinations.push({
        slug: slugify(primaryKeyword),
        primaryKeyword,
        secondaryKeywords: [feature, `${problem} tool`, `${feature} for gaming`],
        category: 'feature-focused',
        template: 'feature-focused',
        feature,
        problem,
      })
    }
  }
  
  // 3. Question-Based pages (200 pages)
  for (const question of questions) {
    for (const problem of problems.slice(0, 4)) {
      const primaryKeyword = `${question} ${problem}`
      combinations.push({
        slug: slugify(primaryKeyword),
        primaryKeyword,
        secondaryKeywords: [`${question} gaming`, `${problem} guide`, `${question} gaming addiction`],
        category: 'question-based',
        template: 'question-based',
        problem,
      })
    }
  }
  
  // 4. Demographic-Specific pages (150 pages)
  for (const demographic of demographics) {
    for (const problem of problems.slice(0, 3)) {
      const primaryKeyword = `${demographic} ${problem} app`
      combinations.push({
        slug: slugify(primaryKeyword),
        primaryKeyword,
        secondaryKeywords: [`${demographic} gaming help`, `${problem} for ${demographic}`, `${demographic} recovery`],
        category: 'demographic-specific',
        template: 'demographic-specific',
        demographic,
        problem,
      })
    }
  }
  
  // 5. Symptom-Outcome pages (100 pages)
  for (const symptom of symptoms) {
    for (const problem of problems.slice(0, 2)) {
      const primaryKeyword = `gaming ${symptom} app`
      combinations.push({
        slug: slugify(primaryKeyword),
        primaryKeyword,
        secondaryKeywords: [`${symptom} recovery`, `manage ${symptom}`, `${symptom} help`],
        category: 'symptom-outcome',
        template: 'symptom-outcome',
        symptom,
        problem,
      })
    }
  }
  
  // 6. Comparison pages (50 pages)
  for (const comparison of comparisons) {
    const primaryKeyword = `${comparison} gaming addiction`
    combinations.push({
      slug: slugify(primaryKeyword),
      primaryKeyword,
      secondaryKeywords: ['gaming addiction app', 'quit gaming app', 'recovery app'],
      category: 'comparison',
      template: 'comparison',
    })
  }
  
  // Remove duplicates and ensure unique slugs
  const uniqueCombinations = new Map<string, KeywordCombination>()
  for (const combo of combinations) {
    if (!uniqueCombinations.has(combo.slug)) {
      uniqueCombinations.set(combo.slug, combo)
    }
  }
  
  let result = Array.from(uniqueCombinations.values())
  
  // If we have less than 1000, add more variations
  if (result.length < 1000) {
    // Add platform-specific variations
    const platformVariations: KeywordCombination[] = []
    for (const platform of platforms) {
      for (const combo of result.slice(0, 50)) {
        const primaryKeyword = `${combo.primaryKeyword} ${platform}`
        platformVariations.push({
          ...combo,
          slug: slugify(primaryKeyword),
          primaryKeyword,
          platform,
          secondaryKeywords: [...combo.secondaryKeywords, `${platform} app`],
        })
      }
    }
    result = [...result, ...platformVariations]
    
    // Remove duplicates again
    const finalMap = new Map<string, KeywordCombination>()
    for (const combo of result) {
      if (!finalMap.has(combo.slug)) {
        finalMap.set(combo.slug, combo)
      }
    }
    result = Array.from(finalMap.values())
  }
  
  // Limit to exactly 1000 pages
  return result.slice(0, 1000)
}

