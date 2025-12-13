'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Gamification() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-digital-night/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Level Up Your{' '}
              <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
                Real Life
              </span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              The only app that uses gaming psychology to help you quit gaming
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">XP System</h3>
              <p className="text-text-tertiary">Earn experience points for every day you stay game-free</p>
            </div>
            <div className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Achievements</h3>
              <p className="text-text-tertiary">Unlock badges and celebrate every milestone</p>
            </div>
            <div className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Level Progression</h3>
              <p className="text-text-tertiary">Level up and unlock new features as you progress</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

