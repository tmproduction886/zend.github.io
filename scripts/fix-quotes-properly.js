const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/lib/programmatic-seo/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ts'));

// Patterns to fix - only in string content, not string delimiters
const fixes = [
  { pattern: /(subheading|description|content|title|question|answer|quote|h1):\s*'([^']*?)who've([^']*?)'/g, replacement: "$1: '$2who\\'ve$3'" },
  { pattern: /(subheading|description|content|title|question|answer|quote|h1):\s*'([^']*?)you're([^']*?)'/g, replacement: "$1: '$2you\\'re$3'" },
  { pattern: /(subheading|description|content|title|question|answer|quote|h1):\s*'([^']*?)Zend's([^']*?)'/g, replacement: "$1: '$2Zend\\'s$3'" },
  { pattern: /(subheading|description|content|title|question|answer|quote|h1):\s*'([^']*?)you've([^']*?)'/g, replacement: "$1: '$2you\\'ve$3'" },
  { pattern: /(subheading|description|content|title|question|answer|quote|h1):\s*'([^']*?)that's([^']*?)'/g, replacement: "$1: '$2that\\'s$3'" },
  { pattern: /(subheading|description|content|title|question|answer|quote|h1):\s*'([^']*?)it's([^']*?)'/g, replacement: "$1: '$2it\\'s$3'" },
  { pattern: /(subheading|description|content|title|question|answer|quote|h1):\s*'([^']*?)don't([^']*?)'/g, replacement: "$1: '$2don\\'t$3'" },
  { pattern: /(subheading|description|content|title|question|answer|quote|h1):\s*'([^']*?)can't([^']*?)'/g, replacement: "$1: '$2can\\'t$3'" },
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Apply all fixes
  fixes.forEach(({ pattern, replacement }) => {
    content = content.replace(pattern, replacement);
  });
  
  // Also fix standalone patterns in any single-quoted strings
  content = content.replace(/'([^']*?)who've([^']*?)'/g, "'$1who\\'ve$2'");
  content = content.replace(/'([^']*?)you're([^']*?)'/g, "'$1you\\'re$2'");
  content = content.replace(/'([^']*?)Zend's([^']*?)'/g, "'$1Zend\\'s$2'");
  content = content.replace(/'([^']*?)you've([^']*?)'/g, "'$1you\\'ve$2'");
  content = content.replace(/'([^']*?)that's([^']*?)'/g, "'$1that\\'s$2'");
  content = content.replace(/'([^']*?)it's([^']*?)'/g, "'$1it\\'s$2'");
  content = content.replace(/'([^']*?)don't([^']*?)'/g, "'$1don\\'t$2'");
  content = content.replace(/'([^']*?)can't([^']*?)'/g, "'$1can\\'t$2'");
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed quotes in ${file}`);
});

console.log('✅ All quotes fixed properly');


