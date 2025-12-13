'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Block Distractions',
    description: 'Set up Screen Time blocking for gaming apps during focus hours',
    icon: '🛡️',
  },
  {
    number: '02',
    title: 'Track Your Progress',
    description: 'Build streaks, earn XP, and level up as you progress',
    icon: '📊',
  },
  {
    number: '03',
    title: 'Build Better Habits',
    description: 'Use meditations, focus sessions, and daily check-ins',
    icon: '🧘',
  },
  {
    number: '04',
    title: 'Join a Community',
    description: 'Connect with others in guilds for accountability and support',
    icon: '👥',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="how-it-works" className="py-20 bg-digital-night/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Your journey to recovery in four simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-focus-green/50 transition-all duration-300">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-focus-green text-sm font-semibold mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-tertiary">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

