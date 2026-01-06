const fs = require('fs');
const path = require('path');

// Read the original data.ts to extract existing pages
const dataFile = path.join(__dirname, '../src/lib/programmatic-seo/data.ts');
const content = fs.readFileSync(dataFile, 'utf-8');

// Read new pages JSON
const newPagesFile = path.join(__dirname, '../src/lib/programmatic-seo/pages/new-pages.json');
const newPages = JSON.parse(fs.readFileSync(newPagesFile, 'utf-8'));

// Helper to generate a page object string
function generatePageObject(pageDef, isNew = false) {
  const { slug, keyword, category } = pageDef;
  const variations = [
    keyword.replace('app', 'solution'),
    keyword.replace('app', 'tool'),
    keyword + ' help',
    keyword + ' support'
  ].slice(0, 3);

  if (category === 'problem-solution') {
    return `  {
    slug: '${slug}',
    category: '${category}',
    template: 'problem-solution',
    primaryKeyword: '${keyword}',
    secondaryKeywords: ${JSON.stringify(variations)},
    meta: {
      title: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - Zend | #1 Recovery Solution',
      description: '${keyword} with Zend, the #1 gamified recovery app. Uses Screen Time blocking, XP tracking, and community support. Start your 7-day free trial today.',
      keywords: '${keyword}, ${variations.join(', ')}',
      ogTitle: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - Zend',
      ogDescription: 'The gamified recovery app that helps with ${keyword}. Start your free trial today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - The #1 Recovery App',
      subheading: 'Join 10,000+ users who\'ve successfully recovered using our gamified recovery system',
      description: 'Gaming addiction affects millions of people worldwide. If you\'re struggling with ${keyword}, you\'re not alone. Zend is the first app to use gamification psychology to help you overcome gaming addiction.'
    },
    problem: {
      title: 'The Gaming Addiction Problem',
      content: 'Gaming addiction affects over 2.5 billion gamers worldwide, with studies showing that 8-10% of gamers exhibit problematic gaming behaviors.',
      statistics: [
        { label: 'Gamers Worldwide', value: '2.5B+' },
        { label: 'Problematic Gaming', value: '8-10%' },
        { label: 'Screen Time Increase', value: '40%' }
      ]
    },
    solution: {
      title: 'How Zend Helps You',
      content: 'Zend takes an innovative approach: instead of fighting gaming psychology, we harness it. By gamifying the recovery process itself, we create a recovery system that\'s as engaging as the games users are trying to quit.',
      steps: [
        {
          title: 'Set Up Screen Time Blocking',
          description: 'Use native iOS Screen Time to block gaming apps during your scheduled focus hours.'
        },
        {
          title: 'Start Earning XP',
          description: 'Every day you stay gaming-free, you earn XP and level up.'
        },
        {
          title: 'Join a Guild',
          description: 'Connect with others on the same journey. Get support and stay accountable.'
        },
        {
          title: 'Track Your Progress',
          description: 'See your recovery journey visualized. Time reclaimed, habits built, milestones achieved.'
        }
      ]
    },
    features: baseFeatures.slice(0, 4),
    benefits: [
      'Regain control of your time',
      'Improve focus and productivity',
      'Better relationships',
      'Increased motivation',
      'Break the dopamine cycle',
      'Real-life achievements'
    ],
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with ${keyword}?',
        answer: 'Zend combines system-level blocking, gamified motivation, and community support to help you with ${keyword}. Our comprehensive approach addresses both behavioral and psychological aspects.'
      },
      {
        question: 'Is there a free trial?',
        answer: 'Yes! Zend offers a 7-day free trial so you can experience all features risk-free. No credit card required to start.'
      },
      {
        question: 'What makes Zend different?',
        answer: 'Zend is the first app to use gamification psychology to fight gaming addiction. Combined with native iOS Screen Time blocking, it\'s the most effective solution available.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  }`;
  } else if (category === 'question-based') {
    return `  {
    slug: '${slug}',
    category: '${category}',
    template: 'question-based',
    primaryKeyword: '${keyword}',
    secondaryKeywords: ${JSON.stringify(variations)},
    meta: {
      title: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)}: Complete Guide | Zend',
      description: 'Learn ${keyword} with this comprehensive guide. Step-by-step methods, proven techniques, and tools to help you. Start today.',
      keywords: '${keyword}, ${variations.join(', ')}',
      ogTitle: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)}: Complete Guide',
      ogDescription: 'A comprehensive guide to ${keyword} with proven methods and tools.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)}: Complete Guide',
      subheading: 'Proven methods and step-by-step strategies',
      description: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)} requires a comprehensive approach. This guide covers everything you need to know, from understanding the problem to practical recovery strategies.'
    },
    solution: {
      title: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)}: Step-by-Step',
      content: 'Follow these proven steps to achieve your goals.',
      steps: [
        {
          title: 'Step 1: Acknowledge the Problem',
          description: 'The first step is recognizing that gaming has become a problem in your life.'
        },
        {
          title: 'Step 2: Set Clear Goals',
          description: 'Define what success means to you. Set specific, measurable goals.'
        },
        {
          title: 'Step 3: Use Technology to Your Advantage',
          description: 'Zend uses native iOS Screen Time to block gaming apps during your scheduled focus hours.'
        },
        {
          title: 'Step 4: Build New Habits',
          description: 'Replace gaming time with positive activities. Zend\'s gamified system helps you track and celebrate these new habits.'
        }
      ]
    },
    features: baseFeatures,
    faq: [
      {
        question: 'How long does it take?',
        answer: 'Recovery timelines vary, but most users see significant improvement within the first month. Zend\'s gamified approach helps maintain motivation throughout the process.'
      },
      {
        question: 'Can I really do this?',
        answer: 'Yes! Zend combines multiple evidence-based approaches: system-level blocking, gamified motivation, community support, and science-based recovery tools.'
      },
      {
        question: 'What makes Zend different?',
        answer: 'Zend is the first app to use gamification psychology to fight gaming addiction. Instead of just blocking games, we transform recovery into an engaging journey.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  }`;
  } else {
    // Default template for other categories
    return `  {
    slug: '${slug}',
    category: '${category}',
    template: '${category}',
    primaryKeyword: '${keyword}',
    secondaryKeywords: ${JSON.stringify(variations)},
    meta: {
      title: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - Zend',
      description: '${keyword} with Zend. Start your recovery journey today.',
      keywords: '${keyword}, ${variations.join(', ')}',
      ogTitle: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - Zend',
      ogDescription: '${keyword} with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: '${keyword.charAt(0).toUpperCase() + keyword.slice(1)}',
      subheading: 'Get help with ${keyword}',
      description: 'Zend provides comprehensive support for ${keyword}.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with ${keyword}?',
        answer: 'Zend provides comprehensive tools and support to help with ${keyword}.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  }`;
  }
}

// Group new pages by category
const pagesByCategory = {};
newPages.forEach(page => {
  if (!pagesByCategory[page.category]) {
    pagesByCategory[page.category] = [];
  }
  pagesByCategory[page.category].push(page);
});

// Create category files with new pages
const pagesDir = path.join(__dirname, '../src/lib/programmatic-seo/pages');
Object.keys(pagesByCategory).forEach(category => {
  const categoryName = category.replace(/-/g, '');
  const categoryFile = path.join(pagesDir, `${category}.ts`);
  
  let fileContent = `import { ProgrammaticPageData } from '../types'\n`;
  fileContent += `import { baseFeatures, baseTestimonials } from '../constants'\n\n`;
  fileContent += `// Note: Existing pages from data.ts should be added here manually\n`;
  fileContent += `// This file contains newly generated pages\n\n`;
  fileContent += `export const ${categoryName}Pages: ProgrammaticPageData[] = [\n`;
  
  const pages = pagesByCategory[category];
  pages.forEach((page, index) => {
    fileContent += generatePageObject(page, true);
    if (index < pages.length - 1) {
      fileContent += ',\n';
    }
  });
  
  fileContent += '\n]\n';
  
  fs.writeFileSync(categoryFile, fileContent);
  console.log(`Created ${categoryFile} with ${pages.length} new pages`);
});

console.log(`\n✅ Created category files with ${newPages.length} new pages`);
console.log(`\n⚠️  Note: You still need to manually extract existing 27 pages from data.ts and add them to the respective category files.`);






