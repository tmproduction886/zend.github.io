'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  'Regain control of your time',
  'Improve focus and productivity',
  'Better relationships',
  'Increased motivation',
  'Break the dopamine cycle',
  'Real-life achievements',
  'Better sleep',
  'Reduced anxiety',
]

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-void-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Experience{' '}
            <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
              Life-Changing Benefits
            </span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            Unlock a healthier, more focused, and fulfilling life when you choose recovery
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center space-x-3 bg-card-bg/30 rounded-lg p-4"
              >
                <div className="w-6 h-6 rounded-full bg-focus-green/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-focus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-text-secondary">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

