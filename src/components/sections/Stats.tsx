'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '85%', label: 'Success Rate', description: 'Users maintain 30+ day streaks' },
  { value: '4.8', label: 'App Rating', description: 'Based on user reviews' },
  { value: '2.5h', label: 'Time Saved Daily', description: 'Average time reclaimed' },
  { value: '10K+', label: 'Active Users', description: 'Join the recovery journey' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-digital-night/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-poppins text-focus-green mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-text-tertiary">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

