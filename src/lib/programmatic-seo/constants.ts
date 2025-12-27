import { FeatureData, TestimonialData } from './types'

// Base content that can be reused across pages
export const baseFeatures: FeatureData[] = [
  {
    title: 'Screen Time Blocking',
    description: 'Native iOS Screen Time integration provides system-level game blocking that can\'t be easily bypassed.',
    benefits: ['System-level blocking', 'Cannot be bypassed', 'Scheduled blocks', 'Custom block lists']
  },
  {
    title: 'Gamified Recovery System',
    description: 'Earn XP, level up, and unlock achievements for real-life progress. Transform recovery into an engaging journey.',
    benefits: ['XP and leveling system', 'Achievement badges', 'Quest system', 'Progress tracking']
  },
  {
    title: 'Streak Tracking',
    description: 'Track your recovery streak and build momentum. Every day counts toward your goal.',
    benefits: ['Daily streak counter', 'Milestone celebrations', 'Visual progress', 'Motivation boost']
  },
  {
    title: 'Community Support',
    description: 'Join Guilds and connect with others on the same journey. Accountability and support when you need it.',
    benefits: ['Guild system', 'Peer support', 'Accountability', 'Shared experiences']
  },
  {
    title: 'Recovery Tools',
    description: 'Access meditations, urge surfing techniques, panic button, and science-based recovery methods.',
    benefits: ['Guided meditations', 'Urge surfing', 'Panic button', 'CBT techniques']
  },
  {
    title: 'Progress Analytics',
    description: 'Detailed insights into your recovery journey. See time reclaimed, habits built, and milestones achieved.',
    benefits: ['Time tracking', 'Habit analytics', 'Progress charts', 'Data-driven insights']
  }
]

export const baseTestimonials: TestimonialData[] = [
  {
    quote: 'Zend changed my life. The gamification made recovery actually engaging, and the Screen Time blocking was the key to success.',
    author: 'Alex M.',
    role: 'Recovered Gamer'
  },
  {
    quote: 'I tried everything to quit gaming. Zend was the only thing that worked because it addressed the psychological side, not just blocking.',
    author: 'Jordan K.',
    role: 'Student'
  },
  {
    quote: 'The community support in Zend kept me accountable. Knowing others were on the same journey made all the difference.',
    author: 'Sam T.',
    role: 'Professional'
  }
]


