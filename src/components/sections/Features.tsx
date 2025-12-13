'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const features = [
  {
    title: 'Screen Time Blocker',
    description: 'Native iOS Screen Time integration blocks games during focus hours',
    icon: '🛡️',
    screenshot: '/block.png',
  },
  {
    title: 'Gamified Recovery',
    description: 'Earn XP, level up, and unlock achievements as you progress',
    icon: '🎮',
    screenshot: '/achievements.png',
  },
  {
    title: 'Streak Tracking',
    description: 'Track your recovery journey with daily check-ins and milestone celebrations',
    icon: '🔥',
    screenshot: '/dashboard.png',
  },
  {
    title: 'Recovery Tools',
    description: 'Meditations, urge surfing, panic button, and focus sessions',
    icon: '🧘',
    screenshot: '/tools.png',
  },
  {
    title: 'Community Support',
    description: 'Join guilds, share progress, and get accountability from others',
    icon: '👥',
    screenshot: '/community.png',
  },
  {
    title: 'Progress Analytics',
    description: 'See detailed insights into your recovery journey and patterns',
    icon: '📈',
    screenshot: '/analytics.png',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

        {/* Feature Screenshots Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="relative aspect-[9/16] rounded-xl overflow-hidden border border-white/10 hover:border-focus-green/50 transition-all duration-300 group"
            >
              <Image
                src={feature.screenshot}
                alt={`${feature.title} - Zend App Screenshot`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

