import { ProgrammaticPageData } from '../types'
import { baseFeatures, baseTestimonials } from '../constants'

// Existing pages from original data.ts
export const symptomoutcomePages: ProgrammaticPageData[] = [
  { slug: 'gaming-withdrawal-symptoms',
    category: 'symptom-outcome',
    template: 'symptom-outcome',
    primaryKeyword: 'gaming withdrawal symptoms',
    secondaryKeywords: ['gaming addiction withdrawal', 'gaming withdrawal', 'quit gaming withdrawal'],
    meta: {
      title: 'Gaming Withdrawal Symptoms - How to Manage | Zend',
      description: 'Learn about gaming withdrawal symptoms and how to manage them. Zend provides tools and support to help you through gaming withdrawal.',
      keywords: 'gaming withdrawal symptoms, gaming addiction withdrawal, gaming withdrawal, quit gaming withdrawal',
      ogTitle: 'Gaming Withdrawal Symptoms - How to Manage',
      ogDescription: 'Learn about gaming withdrawal symptoms and get support to manage them.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Gaming Withdrawal Symptoms - How to Manage Them',
      subheading: 'Understand and manage gaming withdrawal symptoms with Zend\'s support tools',
      description: 'Gaming withdrawal symptoms are common when quitting gaming. Learn what to expect and how Zend helps you manage these symptoms effectively.'
    },
    problem: {
      title: 'Understanding Gaming Withdrawal',
      content: 'Gaming withdrawal symptoms occur when you stop gaming after prolonged use. These symptoms are similar to other addiction withdrawals and can include irritability, restlessness, cravings, and mood changes.',
      statistics: [
        { label: 'Peak Symptoms', value: 'Week 1' },
        { label: 'Duration', value: '2-4 weeks' },
        { label: 'Manageable', value: 'Yes' }
      ]
    },
    solution: {
      title: 'Managing Gaming Withdrawal with Zend',
      content: 'Zend provides tools and support to help you manage gaming withdrawal symptoms effectively.',
      steps: [
        {
          title: 'Understand Symptoms',
          description: 'Learn what withdrawal symptoms to expect: irritability, restlessness, cravings, mood changes, and sleep disturbances.'
        },
        {
          title: 'Use Recovery Tools',
          description: 'Zend\'s meditation, urge surfing, and panic button features help manage withdrawal symptoms in real-time.'
        },
        {
          title: 'Stay Connected',
          description: 'Community support through Guilds helps you through difficult moments. You\'re not alone in this journey.'
        },
        {
          title: 'Track Progress',
          description: 'Seeing your progress and achievements helps maintain motivation during withdrawal periods.'
        }
      ]
    },
    features: [
      baseFeatures[4], // Recovery Tools
      baseFeatures[2], // Streak Tracking
      baseFeatures[3]  // Community Support
    ],
    faq: [
      {
        question: 'What are gaming withdrawal symptoms?',
        answer: 'Gaming withdrawal symptoms include irritability, restlessness, cravings, mood changes, sleep disturbances, and difficulty concentrating. These symptoms typically peak within the first week and gradually decrease over 2-4 weeks.'
      },
      {
        question: 'How long do gaming withdrawal symptoms last?',
        answer: 'Gaming withdrawal symptoms typically peak within the first week and gradually decrease over 2-4 weeks. Most people find symptoms become much more manageable after the first week.'
      },
      {
        question: 'How can I manage gaming withdrawal symptoms?',
        answer: 'Zend provides multiple tools to manage withdrawal symptoms: meditation for stress and cravings, urge surfing techniques, panic button for immediate support, and community support through Guilds. These tools help you navigate withdrawal more effectively.'
      },
      {
        question: 'Are gaming withdrawal symptoms dangerous?',
        answer: 'Gaming withdrawal symptoms are generally not dangerous, but they can be uncomfortable. If you experience severe symptoms or have concerns, we recommend consulting with a healthcare professional.'
      },
      {
        question: 'Will withdrawal symptoms go away?',
        answer: 'Yes, withdrawal symptoms are temporary and will gradually decrease over time. Most people find symptoms become much more manageable after the first week, and they typically subside within 2-4 weeks.'
      }
    ],
    priority: 0.75,
    changeFrequency: 'weekly'
  },
  { slug: 'gaming-dopamine-detox-app',
    category: 'symptom-outcome',
    template: 'symptom-outcome',
    primaryKeyword: 'gaming dopamine detox app',
    secondaryKeywords: ['dopamine detox gaming', 'gaming dopamine reset', 'reset dopamine gaming'],
    meta: {
      title: 'Gaming Dopamine Detox App - Reset Your Brain | Zend',
      description: 'Gaming dopamine detox app to reset your brain\'s reward system. Break the dopamine cycle and rebuild healthy habits with Zend.',
      keywords: 'gaming dopamine detox app, dopamine detox gaming, gaming dopamine reset, reset dopamine gaming',
      ogTitle: 'Gaming Dopamine Detox App - Zend',
      ogDescription: 'Reset your brain\'s reward system and break the dopamine cycle with Zend.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Gaming Dopamine Detox App - Reset Your Brain',
      subheading: 'Break the dopamine cycle and rebuild healthy reward systems',
      description: 'Gaming creates a dopamine cycle that makes quitting difficult. Zend helps you break this cycle and rebuild healthy reward systems through gamified recovery and alternative rewards.'
    },
    problem: {
      title: 'The Gaming Dopamine Cycle',
      content: 'Gaming triggers dopamine release, creating a cycle of reward and craving. This makes quitting difficult because your brain has been conditioned to seek gaming for dopamine hits. Breaking this cycle requires time and alternative rewards.',
      statistics: [
        { label: 'Dopamine Reset Time', value: '2-4 weeks' },
        { label: 'Alternative Rewards', value: 'XP, Levels' },
        { label: 'Success Rate', value: '73%' }
      ]
    },
    solution: {
      title: 'How Zend Helps with Dopamine Detox',
      content: 'Zend provides alternative rewards and activities to help reset your dopamine system while breaking the gaming cycle.',
      steps: [
        {
          title: 'Remove Gaming Rewards',
          description: 'Screen Time blocking removes access to gaming, breaking the immediate dopamine cycle.'
        },
        {
          title: 'Provide Alternative Rewards',
          description: 'Zend\'s gamification system provides alternative dopamine rewards through XP, levels, and achievements for real-life progress.'
        },
        {
          title: 'Build Healthy Habits',
          description: 'Track and celebrate healthy habits that provide natural dopamine rewards.'
        },
        {
          title: 'Time for Reset',
          description: 'Over 2-4 weeks, your brain\'s reward system resets, making recovery more sustainable.'
        }
      ]
    },
    features: [
      baseFeatures[1], // Gamified Recovery
      baseFeatures[0], // Screen Time Blocking
      baseFeatures[5]  // Progress Analytics
    ],
    faq: [
      {
        question: 'What is a gaming dopamine detox?',
        answer: 'A gaming dopamine detox involves breaking the cycle of gaming-induced dopamine release and allowing your brain\'s reward system to reset. This typically takes 2-4 weeks and involves removing gaming rewards and replacing them with healthier alternatives.'
      },
      {
        question: 'How does Zend help with dopamine detox?',
        answer: 'Zend helps with dopamine detox by: 1) Blocking games to remove immediate dopamine hits, 2) Providing alternative rewards through gamification (XP, levels, achievements), 3) Supporting healthy habit building, and 4) Giving your brain time to reset its reward system.'
      },
      {
        question: 'How long does dopamine detox take?',
        answer: 'Dopamine detox typically takes 2-4 weeks. During this time, your brain\'s reward system resets, making it easier to maintain recovery long-term. Zend supports you throughout this process.'
      },
      {
        question: 'Will I feel bad during dopamine detox?',
        answer: 'You may experience some discomfort during dopamine detox, including cravings, irritability, and restlessness. These are normal and temporary. Zend\'s recovery tools and community support help you manage these symptoms.'
      },
      {
        question: 'What happens after dopamine detox?',
        answer: 'After dopamine detox, your brain\'s reward system has reset, making it easier to find satisfaction in real-life activities. You\'ll have built healthy habits and alternative reward systems that make long-term recovery more sustainable.'
      }
    ],
    priority: 0.75,
    changeFrequency: 'weekly'
  },
{
    slug: 'gaming-addiction-anxiety',
    category: 'symptom-outcome',
    template: 'symptom-outcome',
    primaryKeyword: 'gaming addiction anxiety',
    secondaryKeywords: ["gaming addiction anxiety","gaming addiction anxiety","gaming addiction anxiety help"],
    meta: {
      title: 'Gaming addiction anxiety - Zend',
      description: 'gaming addiction anxiety with Zend. Start your recovery journey today.',
      keywords: 'gaming addiction anxiety, gaming addiction anxiety, gaming addiction anxiety, gaming addiction anxiety help',
      ogTitle: 'Gaming addiction anxiety - Zend',
      ogDescription: 'gaming addiction anxiety with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Gaming addiction anxiety',
      subheading: 'Get help with gaming addiction anxiety',
      description: 'Zend provides comprehensive support for gaming addiction anxiety.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with gaming addiction anxiety?',
        answer: 'Zend provides comprehensive tools and support to help with gaming addiction anxiety.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'gaming-addiction-depression',
    category: 'symptom-outcome',
    template: 'symptom-outcome',
    primaryKeyword: 'gaming addiction depression',
    secondaryKeywords: ["gaming addiction depression","gaming addiction depression","gaming addiction depression help"],
    meta: {
      title: 'Gaming addiction depression - Zend',
      description: 'gaming addiction depression with Zend. Start your recovery journey today.',
      keywords: 'gaming addiction depression, gaming addiction depression, gaming addiction depression, gaming addiction depression help',
      ogTitle: 'Gaming addiction depression - Zend',
      ogDescription: 'gaming addiction depression with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Gaming addiction depression',
      subheading: 'Get help with gaming addiction depression',
      description: 'Zend provides comprehensive support for gaming addiction depression.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with gaming addiction depression?',
        answer: 'Zend provides comprehensive tools and support to help with gaming addiction depression.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'gaming-addiction-stress',
    category: 'symptom-outcome',
    template: 'symptom-outcome',
    primaryKeyword: 'gaming addiction stress',
    secondaryKeywords: ["gaming addiction stress","gaming addiction stress","gaming addiction stress help"],
    meta: {
      title: 'Gaming addiction stress - Zend',
      description: 'gaming addiction stress with Zend. Start your recovery journey today.',
      keywords: 'gaming addiction stress, gaming addiction stress, gaming addiction stress, gaming addiction stress help',
      ogTitle: 'Gaming addiction stress - Zend',
      ogDescription: 'gaming addiction stress with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Gaming addiction stress',
      subheading: 'Get help with gaming addiction stress',
      description: 'Zend provides comprehensive support for gaming addiction stress.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with gaming addiction stress?',
        answer: 'Zend provides comprehensive tools and support to help with gaming addiction stress.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'gaming-addiction-insomnia',
    category: 'symptom-outcome',
    template: 'symptom-outcome',
    primaryKeyword: 'gaming addiction insomnia',
    secondaryKeywords: ["gaming addiction insomnia","gaming addiction insomnia","gaming addiction insomnia help"],
    meta: {
      title: 'Gaming addiction insomnia - Zend',
      description: 'gaming addiction insomnia with Zend. Start your recovery journey today.',
      keywords: 'gaming addiction insomnia, gaming addiction insomnia, gaming addiction insomnia, gaming addiction insomnia help',
      ogTitle: 'Gaming addiction insomnia - Zend',
      ogDescription: 'gaming addiction insomnia with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Gaming addiction insomnia',
      subheading: 'Get help with gaming addiction insomnia',
      description: 'Zend provides comprehensive support for gaming addiction insomnia.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with gaming addiction insomnia?',
        answer: 'Zend provides comprehensive tools and support to help with gaming addiction insomnia.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'gaming-addiction-fatigue',
    category: 'symptom-outcome',
    template: 'symptom-outcome',
    primaryKeyword: 'gaming addiction fatigue',
    secondaryKeywords: ["gaming addiction fatigue","gaming addiction fatigue","gaming addiction fatigue help"],
    meta: {
      title: 'Gaming addiction fatigue - Zend',
      description: 'gaming addiction fatigue with Zend. Start your recovery journey today.',
      keywords: 'gaming addiction fatigue, gaming addiction fatigue, gaming addiction fatigue, gaming addiction fatigue help',
      ogTitle: 'Gaming addiction fatigue - Zend',
      ogDescription: 'gaming addiction fatigue with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Gaming addiction fatigue',
      subheading: 'Get help with gaming addiction fatigue',
      description: 'Zend provides comprehensive support for gaming addiction fatigue.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with gaming addiction fatigue?',
        answer: 'Zend provides comprehensive tools and support to help with gaming addiction fatigue.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'gaming-addiction-headaches',
    category: 'symptom-outcome',
    template: 'symptom-outcome',
    primaryKeyword: 'gaming addiction headaches',
    secondaryKeywords: ["gaming addiction headaches","gaming addiction headaches","gaming addiction headaches help"],
    meta: {
      title: 'Gaming addiction headaches - Zend',
      description: 'gaming addiction headaches with Zend. Start your recovery journey today.',
      keywords: 'gaming addiction headaches, gaming addiction headaches, gaming addiction headaches, gaming addiction headaches help',
      ogTitle: 'Gaming addiction headaches - Zend',
      ogDescription: 'gaming addiction headaches with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Gaming addiction headaches',
      subheading: 'Get help with gaming addiction headaches',
      description: 'Zend provides comprehensive support for gaming addiction headaches.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with gaming addiction headaches?',
        answer: 'Zend provides comprehensive tools and support to help with gaming addiction headaches.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'gaming-addiction-back-pain',
    category: 'symptom-outcome',
    template: 'symptom-outcome',
    primaryKeyword: 'gaming addiction back pain',
    secondaryKeywords: ["gaming addiction back pain","gaming addiction back pain","gaming addiction back pain help"],
    meta: {
      title: 'Gaming addiction back pain - Zend',
      description: 'gaming addiction back pain with Zend. Start your recovery journey today.',
      keywords: 'gaming addiction back pain, gaming addiction back pain, gaming addiction back pain, gaming addiction back pain help',
      ogTitle: 'Gaming addiction back pain - Zend',
      ogDescription: 'gaming addiction back pain with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Gaming addiction back pain',
      subheading: 'Get help with gaming addiction back pain',
      description: 'Zend provides comprehensive support for gaming addiction back pain.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with gaming addiction back pain?',
        answer: 'Zend provides comprehensive tools and support to help with gaming addiction back pain.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'gaming-addiction-eye-strain',
    category: 'symptom-outcome',
    template: 'symptom-outcome',
    primaryKeyword: 'gaming addiction eye strain',
    secondaryKeywords: ["gaming addiction eye strain","gaming addiction eye strain","gaming addiction eye strain help"],
    meta: {
      title: 'Gaming addiction eye strain - Zend',
      description: 'gaming addiction eye strain with Zend. Start your recovery journey today.',
      keywords: 'gaming addiction eye strain, gaming addiction eye strain, gaming addiction eye strain, gaming addiction eye strain help',
      ogTitle: 'Gaming addiction eye strain - Zend',
      ogDescription: 'gaming addiction eye strain with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Gaming addiction eye strain',
      subheading: 'Get help with gaming addiction eye strain',
      description: 'Zend provides comprehensive support for gaming addiction eye strain.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with gaming addiction eye strain?',
        answer: 'Zend provides comprehensive tools and support to help with gaming addiction eye strain.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
]
