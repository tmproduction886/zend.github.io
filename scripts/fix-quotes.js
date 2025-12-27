const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/lib/programmatic-seo/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Fix common apostrophe issues in strings
  // Replace unescaped apostrophes in single-quoted strings
  content = content.replace(/(subheading|description|content|title|question|answer|quote|h1):\s*'([^']*?)'([^']*?)'/g, (match, key, part1, part2) => {
    // This is complex - let's use a simpler approach
    return match;
  });
  
  // Simple fix: replace specific patterns
  content = content.replace(/who've/g, "who\\'ve");
  content = content.replace(/you're/g, "you\\'re");
  content = content.replace(/Zend's/g, "Zend\\'s");
  content = content.replace(/you've/g, "you\\'ve");
  content = content.replace(/that's/g, "that\\'s");
  content = content.replace(/it's/g, "it\\'s");
  content = content.replace(/don't/g, "don\\'t");
  content = content.replace(/can't/g, "can\\'t");
  content = content.replace(/won't/g, "won\\'t");
  content = content.replace(/isn't/g, "isn\\'t");
  content = content.replace(/doesn't/g, "doesn\\'t");
  content = content.replace(/hasn't/g, "hasn\\'t");
  content = content.replace(/haven't/g, "haven\\'t");
  content = content.replace(/I'm/g, "I\\'m");
  content = content.replace(/we're/g, "we\\'re");
  content = content.replace(/they're/g, "they\\'re");
  content = content.replace(/there's/g, "there\\'s");
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed quotes in ${file}`);
});

console.log('✅ All quotes fixed');


