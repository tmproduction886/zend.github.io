const fs = require('fs');
const path = require('path');

// Page templates for generating new pages
const pageTemplates = {
  'problem-solution': (slug, keyword, variations) => ({
    slug,
    category: 'problem-solution',
    template: 'problem-solution',
    primaryKeyword: keyword,
    secondaryKeywords: variations,
    meta: {
      title: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - Zend | #1 Recovery Solution`,
      description: `${keyword} with Zend, the #1 gamified recovery app. Uses Screen Time blocking, XP tracking, and community support. Start your 7-day free trial today.`,
      keywords: `${keyword}, ${variations.join(', ')}`,
      ogTitle: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - Zend`,
      ogDescription: `The gamified recovery app that helps with ${keyword}. Start your free trial today.`,
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} - The #1 Recovery App`,
      subheading: 'Join 10,000+ users who\'ve successfully recovered using our gamified recovery system',
      description: `Gaming addiction affects millions of people worldwide. If you're struggling with ${keyword}, you're not alone. Zend is the first app to use gamification psychology to help you overcome gaming addiction.`
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
    features: 'baseFeatures.slice(0, 4)',
    benefits: [
      'Regain control of your time',
      'Improve focus and productivity',
      'Better relationships',
      'Increased motivation',
      'Break the dopamine cycle',
      'Real-life achievements'
    ],
    testimonials: 'baseTestimonials',
    faq: [
      {
        question: `How does Zend help with ${keyword}?`,
        answer: `Zend combines system-level blocking, gamified motivation, and community support to help you with ${keyword}. Our comprehensive approach addresses both behavioral and psychological aspects.`
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
  })
};

// New pages to generate (73 new pages to reach 100 total)
const newPages = [
  // Problem-solution pages (30 more)
  { slug: 'gaming-addiction-counseling-app', keyword: 'gaming addiction counseling app', category: 'problem-solution' },
  { slug: 'gaming-addiction-therapy-app', keyword: 'gaming addiction therapy app', category: 'problem-solution' },
  { slug: 'gaming-addiction-support-app', keyword: 'gaming addiction support app', category: 'problem-solution' },
  { slug: 'gaming-addiction-intervention-app', keyword: 'gaming addiction intervention app', category: 'problem-solution' },
  { slug: 'gaming-addiction-rehab-app', keyword: 'gaming addiction rehab app', category: 'problem-solution' },
  { slug: 'gaming-addiction-treatment-center-app', keyword: 'gaming addiction treatment center app', category: 'problem-solution' },
  { slug: 'gaming-addiction-recovery-program', keyword: 'gaming addiction recovery program', category: 'problem-solution' },
  { slug: 'gaming-addiction-help-center', keyword: 'gaming addiction help center', category: 'problem-solution' },
  { slug: 'gaming-addiction-support-group-app', keyword: 'gaming addiction support group app', category: 'problem-solution' },
  { slug: 'gaming-addiction-coach-app', keyword: 'gaming addiction coach app', category: 'problem-solution' },
  { slug: 'gaming-addiction-mentor-app', keyword: 'gaming addiction mentor app', category: 'problem-solution' },
  { slug: 'gaming-addiction-buddy-app', keyword: 'gaming addiction buddy app', category: 'problem-solution' },
  { slug: 'gaming-addiction-accountability-app', keyword: 'gaming addiction accountability app', category: 'problem-solution' },
  { slug: 'gaming-addiction-tracker-app', keyword: 'gaming addiction tracker app', category: 'problem-solution' },
  { slug: 'gaming-addiction-monitor-app', keyword: 'gaming addiction monitor app', category: 'problem-solution' },
  { slug: 'gaming-addiction-control-app', keyword: 'gaming addiction control app', category: 'problem-solution' },
  { slug: 'gaming-addiction-management-app', keyword: 'gaming addiction management app', category: 'problem-solution' },
  { slug: 'gaming-addiction-prevention-app', keyword: 'gaming addiction prevention app', category: 'problem-solution' },
  { slug: 'gaming-addiction-awareness-app', keyword: 'gaming addiction awareness app', category: 'problem-solution' },
  { slug: 'gaming-addiction-education-app', keyword: 'gaming addiction education app', category: 'problem-solution' },
  { slug: 'gaming-addiction-resources-app', keyword: 'gaming addiction resources app', category: 'problem-solution' },
  { slug: 'gaming-addiction-tools-app', keyword: 'gaming addiction tools app', category: 'problem-solution' },
  { slug: 'gaming-addiction-guide-app', keyword: 'gaming addiction guide app', category: 'problem-solution' },
  { slug: 'gaming-addiction-handbook-app', keyword: 'gaming addiction handbook app', category: 'problem-solution' },
  { slug: 'gaming-addiction-manual-app', keyword: 'gaming addiction manual app', category: 'problem-solution' },
  { slug: 'gaming-addiction-workbook-app', keyword: 'gaming addiction workbook app', category: 'problem-solution' },
  { slug: 'gaming-addiction-journal-app', keyword: 'gaming addiction journal app', category: 'problem-solution' },
  { slug: 'gaming-addiction-diary-app', keyword: 'gaming addiction diary app', category: 'problem-solution' },
  { slug: 'gaming-addiction-log-app', keyword: 'gaming addiction log app', category: 'problem-solution' },
  { slug: 'gaming-addiction-record-app', keyword: 'gaming addiction record app', category: 'problem-solution' },
  
  // Question-based pages (15 more)
  { slug: 'how-to-overcome-gaming-addiction', keyword: 'how to overcome gaming addiction', category: 'question-based' },
  { slug: 'how-to-beat-gaming-addiction', keyword: 'how to beat gaming addiction', category: 'question-based' },
  { slug: 'how-to-cure-gaming-addiction', keyword: 'how to cure gaming addiction', category: 'question-based' },
  { slug: 'how-to-fight-gaming-addiction', keyword: 'how to fight gaming addiction', category: 'question-based' },
  { slug: 'how-to-break-gaming-addiction', keyword: 'how to break gaming addiction', category: 'question-based' },
  { slug: 'how-to-end-gaming-addiction', keyword: 'how to end gaming addiction', category: 'question-based' },
  { slug: 'how-to-get-rid-of-gaming-addiction', keyword: 'how to get rid of gaming addiction', category: 'question-based' },
  { slug: 'how-to-manage-gaming-addiction', keyword: 'how to manage gaming addiction', category: 'question-based' },
  { slug: 'how-to-control-gaming-addiction', keyword: 'how to control gaming addiction', category: 'question-based' },
  { slug: 'how-to-deal-with-gaming-addiction', keyword: 'how to deal with gaming addiction', category: 'question-based' },
  { slug: 'how-to-handle-gaming-addiction', keyword: 'how to handle gaming addiction', category: 'question-based' },
  { slug: 'how-to-cope-with-gaming-addiction', keyword: 'how to cope with gaming addiction', category: 'question-based' },
  { slug: 'how-to-live-with-gaming-addiction', keyword: 'how to live with gaming addiction', category: 'question-based' },
  { slug: 'how-to-survive-gaming-addiction', keyword: 'how to survive gaming addiction', category: 'question-based' },
  { slug: 'how-to-recover-from-gaming-addiction', keyword: 'how to recover from gaming addiction', category: 'question-based' },
  
  // Feature-focused pages (10 more)
  { slug: 'gaming-blocker-app-android', keyword: 'gaming blocker app android', category: 'feature-focused' },
  { slug: 'gaming-blocker-app-windows', keyword: 'gaming blocker app windows', category: 'feature-focused' },
  { slug: 'gaming-blocker-app-mac', keyword: 'gaming blocker app mac', category: 'feature-focused' },
  { slug: 'gaming-blocker-app-pc', keyword: 'gaming blocker app pc', category: 'feature-focused' },
  { slug: 'gaming-blocker-app-desktop', keyword: 'gaming blocker app desktop', category: 'feature-focused' },
  { slug: 'gaming-blocker-app-laptop', keyword: 'gaming blocker app laptop', category: 'feature-focused' },
  { slug: 'gaming-blocker-app-tablet', keyword: 'gaming blocker app tablet', category: 'feature-focused' },
  { slug: 'gaming-blocker-app-ipad', keyword: 'gaming blocker app ipad', category: 'feature-focused' },
  { slug: 'gaming-blocker-app-chrome', keyword: 'gaming blocker app chrome', category: 'feature-focused' },
  { slug: 'gaming-blocker-app-safari', keyword: 'gaming blocker app safari', category: 'feature-focused' },
  
  // Demographic-specific pages (10 more)
  { slug: 'college-student-gaming-addiction', keyword: 'college student gaming addiction', category: 'demographic-specific' },
  { slug: 'high-school-student-gaming-addiction', keyword: 'high school student gaming addiction', category: 'demographic-specific' },
  { slug: 'middle-school-student-gaming-addiction', keyword: 'middle school student gaming addiction', category: 'demographic-specific' },
  { slug: 'parent-gaming-addiction-help', keyword: 'parent gaming addiction help', category: 'demographic-specific' },
  { slug: 'parent-child-gaming-addiction', keyword: 'parent child gaming addiction', category: 'demographic-specific' },
  { slug: 'working-professional-gaming-addiction', keyword: 'working professional gaming addiction', category: 'demographic-specific' },
  { slug: 'remote-worker-gaming-addiction', keyword: 'remote worker gaming addiction', category: 'demographic-specific' },
  { slug: 'stay-at-home-parent-gaming-addiction', keyword: 'stay at home parent gaming addiction', category: 'demographic-specific' },
  { slug: 'retiree-gaming-addiction', keyword: 'retiree gaming addiction', category: 'demographic-specific' },
  { slug: 'elderly-gaming-addiction', keyword: 'elderly gaming addiction', category: 'demographic-specific' },
  
  // Symptom-outcome pages (8 more)
  { slug: 'gaming-addiction-anxiety', keyword: 'gaming addiction anxiety', category: 'symptom-outcome' },
  { slug: 'gaming-addiction-depression', keyword: 'gaming addiction depression', category: 'symptom-outcome' },
  { slug: 'gaming-addiction-stress', keyword: 'gaming addiction stress', category: 'symptom-outcome' },
  { slug: 'gaming-addiction-insomnia', keyword: 'gaming addiction insomnia', category: 'symptom-outcome' },
  { slug: 'gaming-addiction-fatigue', keyword: 'gaming addiction fatigue', category: 'symptom-outcome' },
  { slug: 'gaming-addiction-headaches', keyword: 'gaming addiction headaches', category: 'symptom-outcome' },
  { slug: 'gaming-addiction-back-pain', keyword: 'gaming addiction back pain', category: 'symptom-outcome' },
  { slug: 'gaming-addiction-eye-strain', keyword: 'gaming addiction eye strain', category: 'symptom-outcome' }
];

console.log(`Generating ${newPages.length} new pages...`);

// Group by category
const pagesByCategory = {};
newPages.forEach(page => {
  if (!pagesByCategory[page.category]) {
    pagesByCategory[page.category] = [];
  }
  pagesByCategory[page.category].push(page);
});

// Save to JSON for manual processing
const outputPath = path.join(__dirname, '../src/lib/programmatic-seo/pages/new-pages.json');
fs.writeFileSync(outputPath, JSON.stringify(newPages, null, 2));
console.log(`Saved page definitions to ${outputPath}`);
console.log(`\nPages by category:`);
Object.keys(pagesByCategory).forEach(cat => {
  console.log(`  ${cat}: ${pagesByCategory[cat].length} pages`);
});






