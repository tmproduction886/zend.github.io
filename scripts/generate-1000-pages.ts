#!/usr/bin/env ts-node
/**
 * Script to generate 1000 programmatic SEO pages
 * Organizes pages into category files for better maintainability
 */

import * as fs from 'fs'
import * as path from 'path'
import { generateKeywordCombinations } from '../src/lib/programmatic-seo/generators/keyword-generator'
import { generatePageData } from '../src/lib/programmatic-seo/generators/content-generator'

const OUTPUT_DIR = path.join(__dirname, '../src/lib/programmatic-seo/pages')
const GENERATED_PAGES_FILE = path.join(OUTPUT_DIR, 'generated-1000-pages.ts')

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

console.log('Generating 1000 programmatic SEO pages...')

// Generate all keyword combinations
const combinations = generateKeywordCombinations()
console.log(`Generated ${combinations.length} unique keyword combinations`)

// Group by category
const pagesByCategory: Record<string, any[]> = {
  'problem-solution': [],
  'feature-focused': [],
  'question-based': [],
  'demographic-specific': [],
  'symptom-outcome': [],
  'comparison': [],
}

// Generate page data for each combination
for (const combo of combinations) {
  const pageData = generatePageData(combo)
  pagesByCategory[combo.category].push(pageData)
}

// Generate TypeScript file with all pages
let fileContent = `// Auto-generated file: 1000 programmatic SEO pages
// Generated on: ${new Date().toISOString()}
// DO NOT EDIT MANUALLY - Regenerate using: npm run generate:pages

import { ProgrammaticPageData } from '../types'

`

// Export pages by category
for (const [category, pages] of Object.entries(pagesByCategory)) {
  const categoryName = category.replace(/-/g, '')
  const exportName = `${categoryName}Pages`
  
  fileContent += `// ${category} pages (${pages.length} pages)\n`
  fileContent += `export const ${exportName}: ProgrammaticPageData[] = ${JSON.stringify(pages, null, 2)}\n\n`
}

// Export all pages combined
fileContent += `// All generated pages combined\n`
fileContent += `export const allGeneratedPages: ProgrammaticPageData[] = [\n`
for (const [category, pages] of Object.entries(pagesByCategory)) {
  const categoryName = category.replace(/-/g, '')
  fileContent += `  ...${categoryName}Pages,\n`
}
fileContent += `]\n`

// Write to file
fs.writeFileSync(GENERATED_PAGES_FILE, fileContent, 'utf-8')

console.log(`\n✅ Generated ${combinations.length} pages:`)
for (const [category, pages] of Object.entries(pagesByCategory)) {
  console.log(`   - ${category}: ${pages.length} pages`)
}
console.log(`\n📁 Output file: ${GENERATED_PAGES_FILE}`)
console.log(`\n⚠️  Next steps:`)
console.log(`   1. Review the generated file`)
console.log(`   2. Update data.ts to import from generated-1000-pages.ts`)
console.log(`   3. Run build to verify all pages generate correctly`)

