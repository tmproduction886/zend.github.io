'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Screen Time Blocker',
    description: 'Native iOS Screen Time integration blocks games during focus hours',
    icon: '🛡️',
  },
  {
    title: 'Gamified Recovery',
    description: 'Earn XP, level up, and unlock achievements as you progress',
    icon: '🎮',
  },
  {
    title: 'Streak Tracking',
    description: 'Track your recovery journey with daily check-ins and milestone celebrations',
    icon: '🔥',
  },
  {
    title: 'Recovery Tools',
    description: 'Meditations, urge surfing, panic button, and focus sessions',
    icon: '🧘',
  },
  {
    title: 'Community Support',
    description: 'Join guilds, share progress, and get accountability from others',
    icon: '👥',
  },
  {
    title: 'Progress Analytics',
    description: 'See detailed insights into your recovery journey and patterns',
    icon: '📈',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="features" className="py-20 bg-void-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Powerful tools designed to help you quit gaming and rebuild your life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-focus-green/50 hover:shadow-lg hover:shadow-focus-green/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-text-tertiary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

