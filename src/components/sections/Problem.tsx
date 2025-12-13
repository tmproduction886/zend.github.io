'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const problems = [
    '1 in 10 gamers struggle with addiction',
    'Impact on relationships, work, and mental health',
    'Dopamine cycle keeps you trapped',
    'Real consequences: lost time, opportunities, connections',
  ]

  return (
    <section ref={ref} id="problem" className="py-20 bg-void-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Gaming Addiction is{' '}
            <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
              Real
            </span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            The struggle is real, but so is the solution.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-alert-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-alert-orange" />
                  </div>
                  <p className="text-text-secondary">{problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

