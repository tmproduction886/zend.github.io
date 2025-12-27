/**
 * Script to check for duplicate slugs and analyze keyword coverage
 */

const fs = require('fs')
const path = require('path')

// Check both 1000 and 5000 page files
const generated1000File = path.join(__dirname, '../src/lib/programmatic-seo/pages/generated-1000-pages.ts')
const generated5000File = path.join(__dirname, '../src/lib/programmatic-seo/pages/generated-5000-pages.ts')
const generatedFile = fs.existsSync(generated5000File) ? generated5000File : generated1000File
const dataFile = path.join(__dirname, '../src/lib/programmatic-seo/data.ts')

console.log('Checking for duplicates and analyzing coverage...\n')

// Read generated pages file
const content = fs.readFileSync(generatedFile, 'utf8')

// Extract all slugs
const slugRegex = /"slug":\s*"([^"]+)"/g
const slugs = []
let match
while ((match = slugRegex.exec(content)) !== null) {
  slugs.push(match[1])
}

// Extract all primary keywords
const keywordRegex = /"primaryKeyword":\s*"([^"]+)"/g
const keywords = []
while ((match = keywordRegex.exec(content)) !== null) {
  keywords.push(match[1])
}

// Extract categories
const categoryRegex = /"category":\s*"([^"]+)"/g
const categories = []
while ((match = categoryRegex.exec(content)) !== null) {
  categories.push(match[1])
}

// Check for duplicate slugs
const slugCounts = {}
slugs.forEach(slug => {
  slugCounts[slug] = (slugCounts[slug] || 0) + 1
})

const duplicateSlugs = Object.entries(slugCounts)
  .filter(([slug, count]) => count > 1)
  .map(([slug]) => slug)

// Check for duplicate keywords
const keywordCounts = {}
keywords.forEach(keyword => {
  keywordCounts[keyword] = (keywordCounts[keyword] || 0) + 1
})

const duplicateKeywords = Object.entries(keywordCounts)
  .filter(([keyword, count]) => count > 1)
  .map(([keyword]) => keyword)

// Analyze category distribution
const categoryCounts = {}
categories.forEach(cat => {
  categoryCounts[cat] = (categoryCounts[cat] || 0) + 1
})

// Check keyword coverage - extract base terms
const baseTerms = {
  problems: new Set(),
  solutions: new Set(),
  features: new Set(),
  demographics: new Set(),
  platforms: new Set(),
  symptoms: new Set(),
}

keywords.forEach(keyword => {
  const lower = keyword.toLowerCase()
  
  // Extract problem terms
  if (lower.includes('gaming addiction') || lower.includes('video game') || lower.includes('gaming disorder')) {
    baseTerms.problems.add('gaming addiction')
  }
  if (lower.includes('mobile gaming')) baseTerms.problems.add('mobile gaming')
  if (lower.includes('pc gaming')) baseTerms.problems.add('pc gaming')
  if (lower.includes('online gaming')) baseTerms.problems.add('online gaming')
  
  // Extract solution terms
  if (lower.includes('quit')) baseTerms.solutions.add('quit')
  if (lower.includes('stop')) baseTerms.solutions.add('stop')
  if (lower.includes('overcome')) baseTerms.solutions.add('overcome')
  if (lower.includes('recover')) baseTerms.solutions.add('recover')
  if (lower.includes('block')) baseTerms.solutions.add('block')
  if (lower.includes('reduce')) baseTerms.solutions.add('reduce')
  
  // Extract feature terms
  if (lower.includes('screen time')) baseTerms.features.add('screen time blocker')
  if (lower.includes('game blocker')) baseTerms.features.add('game blocker')
  if (lower.includes('tracker')) baseTerms.features.add('tracker')
  if (lower.includes('gamified')) baseTerms.features.add('gamified')
  
  // Extract demographic terms
  if (lower.includes('teen')) baseTerms.demographics.add('teen')
  if (lower.includes('adult')) baseTerms.demographics.add('adult')
  if (lower.includes('student')) baseTerms.demographics.add('student')
  if (lower.includes('professional')) baseTerms.demographics.add('professional')
  
  // Extract platform terms
  if (lower.includes('ios') || lower.includes('iphone')) baseTerms.platforms.add('iOS')
  if (lower.includes('android')) baseTerms.platforms.add('Android')
  if (lower.includes('mobile')) baseTerms.platforms.add('mobile')
  
  // Extract symptom terms
  if (lower.includes('withdrawal')) baseTerms.symptoms.add('withdrawal')
  if (lower.includes('anxiety')) baseTerms.symptoms.add('anxiety')
  if (lower.includes('depression')) baseTerms.symptoms.add('depression')
})

// Print results
console.log('=== DUPLICATE CHECK ===')
console.log(`Total pages: ${slugs.length}`)
console.log(`Unique slugs: ${new Set(slugs).size}`)
console.log(`Duplicate slugs: ${duplicateSlugs.length}`)
if (duplicateSlugs.length > 0) {
  console.log('\nDuplicate slugs found:')
  duplicateSlugs.slice(0, 10).forEach(slug => {
    console.log(`  - ${slug} (appears ${slugCounts[slug]} times)`)
  })
}

console.log(`\nUnique keywords: ${new Set(keywords).size}`)
console.log(`Duplicate keywords: ${duplicateKeywords.length}`)
if (duplicateKeywords.length > 0) {
  console.log('\nDuplicate keywords found:')
  duplicateKeywords.slice(0, 10).forEach(keyword => {
    console.log(`  - ${keyword} (appears ${keywordCounts[keyword]} times)`)
  })
}

console.log('\n=== CATEGORY DISTRIBUTION ===')
Object.entries(categoryCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count} pages`)
  })

console.log('\n=== KEYWORD COVERAGE ANALYSIS ===')
console.log('Problem terms covered:', baseTerms.problems.size, Array.from(baseTerms.problems))
console.log('Solution terms covered:', baseTerms.solutions.size, Array.from(baseTerms.solutions))
console.log('Feature terms covered:', baseTerms.features.size, Array.from(baseTerms.features))
console.log('Demographic terms covered:', baseTerms.demographics.size, Array.from(baseTerms.demographics))
console.log('Platform terms covered:', baseTerms.platforms.size, Array.from(baseTerms.platforms))
console.log('Symptom terms covered:', baseTerms.symptoms.size, Array.from(baseTerms.symptoms))

// Check existing pages for conflicts
console.log('\n=== CHECKING EXISTING PAGES FOR CONFLICTS ===')
const dataContent = fs.readFileSync(dataFile, 'utf8')
const existingSlugRegex = /slug:\s*['"]([^'"]+)['"]/g
const existingSlugs = new Set()
while ((match = existingSlugRegex.exec(dataContent)) !== null) {
  if (match[1] !== 'slug') { // Skip the word 'slug' itself
    existingSlugs.add(match[1])
  }
}

const conflictingSlugs = duplicateSlugs.filter(slug => existingSlugs.has(slug))
if (conflictingSlugs.length > 0) {
  console.log(`Found ${conflictingSlugs.length} slugs that conflict with existing pages:`)
  conflictingSlugs.slice(0, 10).forEach(slug => console.log(`  - ${slug}`))
} else {
  console.log('No conflicts with existing pages found.')
}

console.log('\n=== SUMMARY ===')
if (duplicateSlugs.length === 0 && duplicateKeywords.length === 0) {
  console.log('✅ No duplicates found!')
} else {
  console.log('⚠️  Duplicates found - regeneration recommended')
}

const coverageScore = (
  baseTerms.problems.size * 10 +
  baseTerms.solutions.size * 10 +
  baseTerms.features.size * 10 +
  baseTerms.demographics.size * 5 +
  baseTerms.platforms.size * 5 +
  baseTerms.symptoms.size * 5
)
console.log(`Coverage score: ${coverageScore}/100`)
if (coverageScore >= 80) {
  console.log('✅ Good keyword coverage')
} else {
  console.log('⚠️  Could improve keyword coverage')
}

