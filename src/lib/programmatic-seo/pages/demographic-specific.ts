import { ProgrammaticPageData } from '../types'
import { baseFeatures, baseTestimonials } from '../constants'

// Existing pages from original data.ts
export const demographicspecificPages: ProgrammaticPageData[] = [
  { slug: 'teen-gaming-addiction-app',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'teen gaming addiction app',
    secondaryKeywords: ['teenager gaming addiction', 'gaming addiction teens', 'help teens quit gaming'],
    meta: {
      title: 'Teen Gaming Addiction App - Help for Teenagers | Zend',
      description: 'Gaming addiction app designed for teens. Age-appropriate support, blocking, and community to help teenagers overcome gaming addiction.',
      keywords: 'teen gaming addiction app, teenager gaming addiction, gaming addiction teens, help teens quit gaming',
      ogTitle: 'Teen Gaming Addiction App - Zend',
      ogDescription: 'Help for teenagers struggling with gaming addiction. Start recovery today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Teen Gaming Addiction App - Help for Teenagers',
      subheading: 'Age-appropriate support and tools to help teens overcome gaming addiction',
      description: 'Gaming addiction affects many teenagers. Zend provides age-appropriate support, tools, and community to help teens overcome gaming addiction and build healthier habits.'
    },
    problem: {
      title: 'Gaming Addiction in Teens',
      content: 'Teenagers are particularly vulnerable to gaming addiction due to developing brains, social pressures, and easy access to games. Gaming addiction can impact school performance, relationships, and mental health.',
      statistics: [
        { label: 'Teens Affected', value: '8-10%' },
        { label: 'School Impact', value: 'Significant' },
        { label: 'Recovery Success', value: '73%' }
      ]
    },
    solution: {
      title: 'How Zend Helps Teens',
      content: 'Zend provides age-appropriate tools and support specifically designed to help teenagers overcome gaming addiction.',
      steps: [
        {
          title: 'Safe Blocking',
          description: 'Screen Time blocking helps teens stay focused during study time and sleep hours.'
        },
        {
          title: 'Engaging Recovery',
          description: 'Gamification makes recovery engaging for teens, using the same psychology that makes games addictive.'
        },
        {
          title: 'Peer Support',
          description: 'Guild system connects teens with others their age who are on the same journey.'
        },
        {
          title: 'Parent Involvement',
          description: 'Parents can support their teen\'s recovery journey while respecting privacy and autonomy.'
        }
      ]
    },
    features: baseFeatures.slice(0, 4),
    benefits: [
      'Age-appropriate design',
      'Safe and supportive',
      'Peer connection',
      'School performance',
      'Better sleep',
      'Healthier habits'
    ],
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'Is there a gaming addiction app for teens?',
        answer: 'Yes! Zend is designed to help teenagers overcome gaming addiction. It provides age-appropriate support, tools, and community specifically designed for teens.'
      },
      {
        question: 'How can parents help teens with gaming addiction?',
        answer: 'Parents can support their teen\'s recovery by encouraging use of Zend, respecting their privacy, and providing emotional support. Zend\'s Guild system also provides peer support that complements family support.'
      },
      {
        question: 'Is Zend safe for teenagers?',
        answer: 'Yes, Zend is safe for teenagers. It uses Apple\'s native Screen Time API (which is built into iOS) and provides age-appropriate content and community support.'
      },
      {
        question: 'Can teens use Zend without parent permission?',
        answer: 'Zend can be used by anyone with an iOS device. For teens under 18, we recommend involving parents in the recovery journey for best results.'
      },
      {
        question: 'How does Zend help with school performance?',
        answer: 'Zend helps teens focus on school by blocking games during study time. This helps improve focus, complete homework, and perform better academically.'
      }
    ],
    priority: 0.75,
    changeFrequency: 'weekly'
  },
  { slug: 'adult-gaming-addiction-app',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'adult gaming addiction app',
    secondaryKeywords: ['adult gaming addiction', 'gaming addiction adults', 'adult video game addiction'],
    meta: {
      title: 'Adult Gaming Addiction App - Help for Adults | Zend',
      description: 'Gaming addiction app designed for adults. Professional support, blocking, and recovery tools to help adults overcome gaming addiction.',
      keywords: 'adult gaming addiction app, adult gaming addiction, gaming addiction adults, adult video game addiction',
      ogTitle: 'Adult Gaming Addiction App - Zend',
      ogDescription: 'Help for adults struggling with gaming addiction. Start recovery today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Adult Gaming Addiction App - Help for Adults',
      subheading: 'Professional support and tools to help adults overcome gaming addiction',
      description: 'Gaming addiction affects adults too, impacting careers, relationships, and responsibilities. Zend provides age-appropriate support and tools specifically designed for adults recovering from gaming addiction.'
    },
    problem: {
      title: 'Gaming Addiction in Adults',
      content: 'Adult gaming addiction can be particularly challenging because it conflicts with work responsibilities, relationships, and financial obligations. Many adults struggle in silence, feeling ashamed about their gaming habits.',
      statistics: [
        { label: 'Adults Affected', value: 'Millions' },
        { label: 'Career Impact', value: 'Significant' },
        { label: 'Recovery Success', value: '73%' }
      ]
    },
    solution: {
      title: 'How Zend Helps Adults',
      content: 'Zend provides professional-grade tools and support specifically designed for adults.',
      steps: [
        {
          title: 'Work-Life Balance',
          description: 'Block games during work hours to maintain productivity and professional responsibilities.'
        },
        {
          title: 'Professional Support',
          description: 'Access evidence-based recovery tools and techniques suitable for adults.'
        },
        {
          title: 'Discrete Recovery',
          description: 'Recover privately with Zend. No need to share your journey publicly unless you choose to.'
        },
        {
          title: 'Accountability',
          description: 'Join Guilds with other adults on the same journey. Professional accountability and support.'
        }
      ]
    },
    features: baseFeatures,
    benefits: [
      'Maintain work performance',
      'Improve relationships',
      'Financial stability',
      'Professional support',
      'Discrete recovery',
      'Long-term success'
    ],
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'Is there a gaming addiction app for adults?',
        answer: 'Yes! Zend is designed to help adults overcome gaming addiction. It provides professional-grade tools, blocking technology, and community support specifically designed for adults.'
      },
      {
        question: 'How does gaming addiction affect adults differently?',
        answer: 'Adult gaming addiction often conflicts with work responsibilities, relationships, and financial obligations. Adults may feel more shame and isolation, making recovery more challenging without proper support.'
      },
      {
        question: 'Can I use Zend while working?',
        answer: 'Absolutely! Zend can block games during work hours to help you maintain productivity. You can set custom schedules that fit your work life.'
      },
      {
        question: 'Is Zend appropriate for professional adults?',
        answer: 'Yes, Zend is designed with adults in mind. The tools, language, and approach are professional and suitable for adults in any profession.'
      },
      {
        question: 'Will using Zend affect my career?',
        answer: 'Using Zend should improve your career by helping you maintain focus and productivity. Blocking games during work hours can significantly improve work performance.'
      }
    ],
    priority: 0.8,
    changeFrequency: 'weekly'
  },
  { slug: 'student-gaming-addiction-help',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'student gaming addiction help',
    secondaryKeywords: ['student gaming addiction', 'college gaming addiction', 'gaming addiction students'],
    meta: {
      title: 'Student Gaming Addiction Help - Support for Students | Zend',
      description: 'Gaming addiction help for students. Block games during study time, improve grades, and recover from gaming addiction. Start your recovery today.',
      keywords: 'student gaming addiction help, student gaming addiction, college gaming addiction, gaming addiction students',
      ogTitle: 'Student Gaming Addiction Help - Zend',
      ogDescription: 'Help for students struggling with gaming addiction. Improve grades and focus.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Student Gaming Addiction Help - Support for Students',
      subheading: 'Block games during study time and improve your academic performance',
      description: 'Gaming addiction can severely impact student performance. Zend helps students quit gaming by blocking games during study time and providing support throughout the academic journey.'
    },
    problem: {
      title: 'Gaming Addiction Impact on Students',
      content: 'Gaming addiction significantly impacts student performance, leading to poor grades, missed assignments, and academic struggles. The constant access to games on phones makes it especially challenging for students.',
      statistics: [
        { label: 'Students Affected', value: '8-10%' },
        { label: 'Grade Impact', value: 'Significant' },
        { label: 'Study Time Lost', value: '2+ hours/day' }
      ]
    },
    solution: {
      title: 'How Zend Helps Students',
      content: 'Zend provides tools specifically designed to help students balance gaming and academics.',
      steps: [
        {
          title: 'Block Games During Study Time',
          description: 'Use Screen Time to block games during class hours and study time. Focus on academics without gaming distractions.'
        },
        {
          title: 'Improve Focus',
          description: 'With games blocked, you can focus on studying, completing assignments, and attending classes.'
        },
        {
          title: 'Track Study Progress',
          description: 'See how much time you\'ve reclaimed from gaming. Use that time for studying and improving grades.'
        },
        {
          title: 'Join Student Guilds',
          description: 'Connect with other students on the same journey. Share study tips and support each other.'
        }
      ]
    },
    features: baseFeatures,
    benefits: [
      'Improve grades',
      'Better focus',
      'Complete assignments',
      'Attend classes',
      'Better sleep',
      'Academic success'
    ],
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'Is there help for student gaming addiction?',
        answer: 'Yes! Zend provides comprehensive help for students struggling with gaming addiction. It blocks games during study time and provides support throughout the academic journey.'
      },
      {
        question: 'Can Zend help me improve my grades?',
        answer: 'Absolutely! By blocking games during study time, Zend helps you focus on academics. Many students see significant grade improvements after using Zend.'
      },
      {
        question: 'Can I still game as a student?',
        answer: 'That\'s up to you. Some students quit completely, while others use Zend to limit gaming to weekends or after completing assignments. You set your own goals.'
      },
      {
        question: 'Will blocking games help me study?',
        answer: 'Yes! Removing gaming distractions during study time significantly improves focus and academic performance. Zend makes it easy to block games when you need to study.'
      },
      {
        question: 'Is Zend appropriate for college students?',
        answer: 'Yes, Zend is suitable for students of all ages, including college students. The tools and support are designed to help students balance gaming and academics.'
      }
    ],
    priority: 0.85,
    changeFrequency: 'weekly'
  },
{
    slug: 'college-student-gaming-addiction',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'college student gaming addiction',
    secondaryKeywords: ["college student gaming addiction","college student gaming addiction","college student gaming addiction help"],
    meta: {
      title: 'College student gaming addiction - Zend',
      description: 'college student gaming addiction with Zend. Start your recovery journey today.',
      keywords: 'college student gaming addiction, college student gaming addiction, college student gaming addiction, college student gaming addiction help',
      ogTitle: 'College student gaming addiction - Zend',
      ogDescription: 'college student gaming addiction with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'College student gaming addiction',
      subheading: 'Get help with college student gaming addiction',
      description: 'Zend provides comprehensive support for college student gaming addiction.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with college student gaming addiction?',
        answer: 'Zend provides comprehensive tools and support to help with college student gaming addiction.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'high-school-student-gaming-addiction',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'high school student gaming addiction',
    secondaryKeywords: ["high school student gaming addiction","high school student gaming addiction","high school student gaming addiction help"],
    meta: {
      title: 'High school student gaming addiction - Zend',
      description: 'high school student gaming addiction with Zend. Start your recovery journey today.',
      keywords: 'high school student gaming addiction, high school student gaming addiction, high school student gaming addiction, high school student gaming addiction help',
      ogTitle: 'High school student gaming addiction - Zend',
      ogDescription: 'high school student gaming addiction with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'High school student gaming addiction',
      subheading: 'Get help with high school student gaming addiction',
      description: 'Zend provides comprehensive support for high school student gaming addiction.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with high school student gaming addiction?',
        answer: 'Zend provides comprehensive tools and support to help with high school student gaming addiction.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'middle-school-student-gaming-addiction',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'middle school student gaming addiction',
    secondaryKeywords: ["middle school student gaming addiction","middle school student gaming addiction","middle school student gaming addiction help"],
    meta: {
      title: 'Middle school student gaming addiction - Zend',
      description: 'middle school student gaming addiction with Zend. Start your recovery journey today.',
      keywords: 'middle school student gaming addiction, middle school student gaming addiction, middle school student gaming addiction, middle school student gaming addiction help',
      ogTitle: 'Middle school student gaming addiction - Zend',
      ogDescription: 'middle school student gaming addiction with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Middle school student gaming addiction',
      subheading: 'Get help with middle school student gaming addiction',
      description: 'Zend provides comprehensive support for middle school student gaming addiction.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with middle school student gaming addiction?',
        answer: 'Zend provides comprehensive tools and support to help with middle school student gaming addiction.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'parent-gaming-addiction-help',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'parent gaming addiction help',
    secondaryKeywords: ["parent gaming addiction help","parent gaming addiction help","parent gaming addiction help help"],
    meta: {
      title: 'Parent gaming addiction help - Zend',
      description: 'parent gaming addiction help with Zend. Start your recovery journey today.',
      keywords: 'parent gaming addiction help, parent gaming addiction help, parent gaming addiction help, parent gaming addiction help help',
      ogTitle: 'Parent gaming addiction help - Zend',
      ogDescription: 'parent gaming addiction help with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Parent gaming addiction help',
      subheading: 'Get help with parent gaming addiction help',
      description: 'Zend provides comprehensive support for parent gaming addiction help.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with parent gaming addiction help?',
        answer: 'Zend provides comprehensive tools and support to help with parent gaming addiction help.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'parent-child-gaming-addiction',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'parent child gaming addiction',
    secondaryKeywords: ["parent child gaming addiction","parent child gaming addiction","parent child gaming addiction help"],
    meta: {
      title: 'Parent child gaming addiction - Zend',
      description: 'parent child gaming addiction with Zend. Start your recovery journey today.',
      keywords: 'parent child gaming addiction, parent child gaming addiction, parent child gaming addiction, parent child gaming addiction help',
      ogTitle: 'Parent child gaming addiction - Zend',
      ogDescription: 'parent child gaming addiction with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Parent child gaming addiction',
      subheading: 'Get help with parent child gaming addiction',
      description: 'Zend provides comprehensive support for parent child gaming addiction.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with parent child gaming addiction?',
        answer: 'Zend provides comprehensive tools and support to help with parent child gaming addiction.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'working-professional-gaming-addiction',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'working professional gaming addiction',
    secondaryKeywords: ["working professional gaming addiction","working professional gaming addiction","working professional gaming addiction help"],
    meta: {
      title: 'Working professional gaming addiction - Zend',
      description: 'working professional gaming addiction with Zend. Start your recovery journey today.',
      keywords: 'working professional gaming addiction, working professional gaming addiction, working professional gaming addiction, working professional gaming addiction help',
      ogTitle: 'Working professional gaming addiction - Zend',
      ogDescription: 'working professional gaming addiction with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Working professional gaming addiction',
      subheading: 'Get help with working professional gaming addiction',
      description: 'Zend provides comprehensive support for working professional gaming addiction.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with working professional gaming addiction?',
        answer: 'Zend provides comprehensive tools and support to help with working professional gaming addiction.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'remote-worker-gaming-addiction',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'remote worker gaming addiction',
    secondaryKeywords: ["remote worker gaming addiction","remote worker gaming addiction","remote worker gaming addiction help"],
    meta: {
      title: 'Remote worker gaming addiction - Zend',
      description: 'remote worker gaming addiction with Zend. Start your recovery journey today.',
      keywords: 'remote worker gaming addiction, remote worker gaming addiction, remote worker gaming addiction, remote worker gaming addiction help',
      ogTitle: 'Remote worker gaming addiction - Zend',
      ogDescription: 'remote worker gaming addiction with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Remote worker gaming addiction',
      subheading: 'Get help with remote worker gaming addiction',
      description: 'Zend provides comprehensive support for remote worker gaming addiction.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with remote worker gaming addiction?',
        answer: 'Zend provides comprehensive tools and support to help with remote worker gaming addiction.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'stay-at-home-parent-gaming-addiction',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'stay at home parent gaming addiction',
    secondaryKeywords: ["stay at home parent gaming addiction","stay at home parent gaming addiction","stay at home parent gaming addiction help"],
    meta: {
      title: 'Stay at home parent gaming addiction - Zend',
      description: 'stay at home parent gaming addiction with Zend. Start your recovery journey today.',
      keywords: 'stay at home parent gaming addiction, stay at home parent gaming addiction, stay at home parent gaming addiction, stay at home parent gaming addiction help',
      ogTitle: 'Stay at home parent gaming addiction - Zend',
      ogDescription: 'stay at home parent gaming addiction with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Stay at home parent gaming addiction',
      subheading: 'Get help with stay at home parent gaming addiction',
      description: 'Zend provides comprehensive support for stay at home parent gaming addiction.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with stay at home parent gaming addiction?',
        answer: 'Zend provides comprehensive tools and support to help with stay at home parent gaming addiction.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'retiree-gaming-addiction',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'retiree gaming addiction',
    secondaryKeywords: ["retiree gaming addiction","retiree gaming addiction","retiree gaming addiction help"],
    meta: {
      title: 'Retiree gaming addiction - Zend',
      description: 'retiree gaming addiction with Zend. Start your recovery journey today.',
      keywords: 'retiree gaming addiction, retiree gaming addiction, retiree gaming addiction, retiree gaming addiction help',
      ogTitle: 'Retiree gaming addiction - Zend',
      ogDescription: 'retiree gaming addiction with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Retiree gaming addiction',
      subheading: 'Get help with retiree gaming addiction',
      description: 'Zend provides comprehensive support for retiree gaming addiction.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with retiree gaming addiction?',
        answer: 'Zend provides comprehensive tools and support to help with retiree gaming addiction.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    slug: 'elderly-gaming-addiction',
    category: 'demographic-specific',
    template: 'demographic-specific',
    primaryKeyword: 'elderly gaming addiction',
    secondaryKeywords: ["elderly gaming addiction","elderly gaming addiction","elderly gaming addiction help"],
    meta: {
      title: 'Elderly gaming addiction - Zend',
      description: 'elderly gaming addiction with Zend. Start your recovery journey today.',
      keywords: 'elderly gaming addiction, elderly gaming addiction, elderly gaming addiction, elderly gaming addiction help',
      ogTitle: 'Elderly gaming addiction - Zend',
      ogDescription: 'elderly gaming addiction with Zend. Start your recovery journey today.',
      ogImage: '/dashboard.png'
    },
    hero: {
      h1: 'Elderly gaming addiction',
      subheading: 'Get help with elderly gaming addiction',
      description: 'Zend provides comprehensive support for elderly gaming addiction.'
    },
    features: baseFeatures.slice(0, 4),
    testimonials: baseTestimonials,
    faq: [
      {
        question: 'How does Zend help with elderly gaming addiction?',
        answer: 'Zend provides comprehensive tools and support to help with elderly gaming addiction.'
      }
    ],
    priority: 0.7,
    changeFrequency: 'weekly'
  },
]
