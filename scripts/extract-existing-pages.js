const fs = require('fs');
const path = require('path');

// Read the original data.ts
const dataFile = path.join(__dirname, '../src/lib/programmatic-seo/data.ts');
const content = fs.readFileSync(dataFile, 'utf-8');

// Map of existing page slugs to their categories (from grep results)
const existingPages = [
  { slug: 'quit-gaming-addiction-app', category: 'problem-solution', startLine: 58 },
  { slug: 'how-to-quit-gaming-addiction', category: 'question-based', startLine: 143 },
  { slug: 'screen-time-blocker-gaming-app', category: 'feature-focused', startLine: 214 },
  { slug: 'best-quit-gaming-app', category: 'comparison', startLine: 293 },
  { slug: 'gaming-addiction-recovery-app', category: 'problem-solution', startLine: 339 },
  { slug: 'stop-gaming-addiction-app', category: 'problem-solution', startLine: 424 },
  { slug: 'block-games-iphone-app', category: 'feature-focused', startLine: 505 },
  { slug: 'gaming-addiction-help', category: 'problem-solution', startLine: 579 },
  { slug: 'overcome-gaming-addiction', category: 'question-based', startLine: 664 },
  { slug: 'gaming-addiction-treatment-app', category: 'problem-solution', startLine: 739 },
  { slug: 'teen-gaming-addiction-app', category: 'demographic-specific', startLine: 824 },
  { slug: 'gaming-withdrawal-symptoms', category: 'symptom-outcome', startLine: 909 },
  { slug: 'gaming-dopamine-detox-app', category: 'symptom-outcome', startLine: 989 },
  { slug: 'best-app-to-quit-gaming', category: 'comparison', startLine: 1069 },
  { slug: 'gaming-addiction-ios-app', category: 'feature-focused', startLine: 1115 },
  { slug: 'gaming-addiction-app-free', category: 'problem-solution', startLine: 1181 },
  { slug: 'mobile-gaming-addiction-app', category: 'problem-solution', startLine: 1266 },
  { slug: 'video-game-addiction-app', category: 'problem-solution', startLine: 1351 },
  { slug: 'online-gaming-addiction-app', category: 'problem-solution', startLine: 1436 },
  { slug: 'pc-gaming-addiction-app', category: 'problem-solution', startLine: 1521 },
  { slug: 'how-to-stop-gaming-addiction', category: 'question-based', startLine: 1612 },
  { slug: 'how-to-reduce-gaming-time', category: 'question-based', startLine: 1687 },
  { slug: 'how-to-block-games-on-iphone', category: 'question-based', startLine: 1758 },
  { slug: 'gaming-blocker-app-ios', category: 'feature-focused', startLine: 1838 },
  { slug: 'gamified-recovery-app', category: 'feature-focused', startLine: 1912 },
  { slug: 'adult-gaming-addiction-app', category: 'demographic-specific', startLine: 1997 },
  { slug: 'student-gaming-addiction-help', category: 'demographic-specific', startLine: 2082 },
];

// Extract page objects using line-based approach
const lines = content.split('\n');
const pagesByCategory = {};

existingPages.forEach((pageInfo, index) => {
  const nextPageLine = index < existingPages.length - 1 
    ? existingPages[index + 1].startLine - 1 
    : 2166; // End of array
  
  // Extract page content (from startLine to nextPageLine)
  const pageLines = lines.slice(pageInfo.startLine - 1, nextPageLine - 1);
  const pageContent = pageLines.join('\n').trim();
  
  // Remove trailing comma if present
  let cleanContent = pageContent;
  if (cleanContent.endsWith(',')) {
    cleanContent = cleanContent.slice(0, -1);
  }
  
  if (!pagesByCategory[pageInfo.category]) {
    pagesByCategory[pageInfo.category] = [];
  }
  
  pagesByCategory[pageInfo.category].push({
    slug: pageInfo.slug,
    content: cleanContent
  });
});

// Update category files by prepending existing pages
const pagesDir = path.join(__dirname, '../src/lib/programmatic-seo/pages');
Object.keys(pagesByCategory).forEach(category => {
  const categoryFile = path.join(pagesDir, `${category}.ts`);
  
  if (!fs.existsSync(categoryFile)) {
    console.log(`⚠️  Category file ${categoryFile} doesn't exist, skipping...`);
    return;
  }
  
  // Read existing file
  const existingContent = fs.readFileSync(categoryFile, 'utf-8');
  
  // Extract the export array name
  const exportMatch = existingContent.match(/export const (\w+)Pages:/);
  if (!exportMatch) {
    console.log(`⚠️  Could not find export in ${categoryFile}`);
    return;
  }
  
  const exportName = exportMatch[1];
  const existingPages = pagesByCategory[category];
  
  // Build new content
  let newContent = `import { ProgrammaticPageData } from '../types'\n`;
  newContent += `import { baseFeatures, baseTestimonials } from '../constants'\n\n`;
  newContent += `// Existing pages from original data.ts\n`;
  newContent += `export const ${exportName}Pages: ProgrammaticPageData[] = [\n`;
  
  // Add existing pages first
  existingPages.forEach((page, index) => {
    newContent += page.content;
    if (index < existingPages.length - 1) {
      newContent += ',\n';
    } else {
      newContent += ',\n';
    }
  });
  
  // Add new pages from existing file
  const newPagesMatch = existingContent.match(/export const \w+Pages: ProgrammaticPageData\[\] = \[([\s\S]*)\]/);
  if (newPagesMatch) {
    const newPagesContent = newPagesMatch[1].trim();
    if (newPagesContent) {
      newContent += newPagesContent;
      if (!newPagesContent.endsWith(',')) {
        newContent += ',';
      }
      newContent += '\n';
    }
  }
  
  newContent += ']\n';
  
  fs.writeFileSync(categoryFile, newContent);
  console.log(`✅ Updated ${categoryFile} with ${existingPages.length} existing pages`);
});

console.log(`\n✅ Extraction complete!`);


