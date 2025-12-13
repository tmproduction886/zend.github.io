'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Community() {
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
            Join a{' '}
            <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
              Supportive Community
            </span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            Connect with others on the same journey. Share experiences, celebrate milestones, and find encouragement.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold font-poppins text-focus-green mb-2">10K+</div>
              <div className="text-text-tertiary">Active Members</div>
            </div>
            <div className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold font-poppins text-focus-green mb-2">500+</div>
              <div className="text-text-tertiary">Daily Check-ins</div>
            </div>
            <div className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold font-poppins text-focus-green mb-2">85%</div>
              <div className="text-text-tertiary">Success Rate</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-left"
          >
            <h3 className="text-2xl font-bold mb-4">Guild System</h3>
            <p className="text-text-secondary mb-4">
              Join or create accountability groups (guilds) where you can share progress, support each other, and stay motivated together.
            </p>
            <ul className="space-y-2 text-text-tertiary">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-focus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Private or public guilds</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-focus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Group challenges and goals</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-focus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Share progress and celebrate wins</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

