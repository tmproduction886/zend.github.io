const fs = require('fs');
const path = require('path');

// Read the original data.ts file
const dataFile = path.join(__dirname, '../src/lib/programmatic-seo/data.ts');
const content = fs.readFileSync(dataFile, 'utf-8');

// Extract pages by category
const pagesDir = path.join(__dirname, '../src/lib/programmatic-seo/pages');

// Parse pages from the content
const pages = [];
let currentPage = null;
let braceCount = 0;
let inPage = false;
let pageContent = '';

// Simple parser to extract page objects
const pageMatches = content.matchAll(/\{\s*slug:\s*['"]([^'"]+)['"],[\s\S]*?category:\s*['"]([^'"]+)['"][\s\S]*?\},/g);

// Better approach: extract each page object
const lines = content.split('\n');
let currentPageLines = [];
let inPageObject = false;
let objectBraceCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Detect start of page object
  if (line.trim().startsWith('{') && lines[i-1] && lines[i-1].includes('slug:')) {
    inPageObject = true;
    objectBraceCount = 0;
    currentPageLines = [];
  }
  
  if (inPageObject) {
    currentPageLines.push(line);
    
    // Count braces
    objectBraceCount += (line.match(/\{/g) || []).length;
    objectBraceCount -= (line.match(/\}/g) || []).length;
    
    // End of object
    if (objectBraceCount === 0 && line.trim().endsWith('},')) {
      const pageText = currentPageLines.join('\n');
      const slugMatch = pageText.match(/slug:\s*['"]([^'"]+)['"]/);
      const categoryMatch = pageText.match(/category:\s*['"]([^'"]+)['"]/);
      
      if (slugMatch && categoryMatch) {
        pages.push({
          slug: slugMatch[1],
          category: categoryMatch[1],
          content: pageText
        });
      }
      
      inPageObject = false;
      currentPageLines = [];
    }
  }
}

// Group by category
const pagesByCategory = {};
pages.forEach(page => {
  if (!pagesByCategory[page.category]) {
    pagesByCategory[page.category] = [];
  }
  pagesByCategory[page.category].push(page);
});

// Generate category files
Object.keys(pagesByCategory).forEach(category => {
  const categoryFile = path.join(pagesDir, `${category.replace(/-/g, '-')}.ts`);
  const categoryPages = pagesByCategory[category];
  
  let fileContent = `import { ProgrammaticPageData } from '../types'\n`;
  fileContent += `import { baseFeatures, baseTestimonials } from '../constants'\n\n`;
  fileContent += `export const ${category.replace(/-/g, '')}Pages: ProgrammaticPageData[] = [\n`;
  
  categoryPages.forEach((page, index) => {
    // Replace baseFeatures and baseTestimonials references
    let pageContent = page.content
      .replace(/baseFeatures/g, 'baseFeatures')
      .replace(/baseTestimonials/g, 'baseTestimonials');
    
    fileContent += pageContent;
    if (index < categoryPages.length - 1) {
      fileContent += '\n';
    }
  });
  
  fileContent += '\n]\n';
  
  fs.writeFileSync(categoryFile, fileContent);
  console.log(`Created ${categoryFile} with ${categoryPages.length} pages`);
});

console.log(`\nTotal pages processed: ${pages.length}`);
console.log(`Categories: ${Object.keys(pagesByCategory).join(', ')}`);


