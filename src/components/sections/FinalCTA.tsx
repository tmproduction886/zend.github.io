'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-digital-night to-void-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Start Your Recovery{' '}
            <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
              Journey Today
            </span>
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join thousands who have taken control of their gaming habits and rebuilt their lives
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://apps.apple.com/us/app/zend-quit-gaming-now/id6756012283"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-focus-green to-focus-green-light text-void-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-focus-green/50 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-.96-1.24 0-2 .5-3.04.99-1.12.51-2.2.47-3.25-.4C2.79 18.25 3.51 11.97 7.1 11.81c1.05.07 1.83.5 2.76.5.9 0 1.58-.43 2.66-.43 1.12 0 1.82.43 2.66.5 1.1-.15 1.9-.75 2.5-1.4-2.1-2.5-2.4-6.1-1.1-7.7 1.2-1.4 3.1-2.1 4.7-2.1 1.6 0 2.9.6 3.9 1.3-3.4 1.9-2.9 5.5-1.1 7.1.9 1 1.9 1.6 3.1 1.5-.3 1.1-.6 2.1-1.3 3.1zM15.78 2.4c.7-.8 1.2-2 1-3.1-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.3z"/>
              </svg>
              Download on App Store
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-tertiary">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-focus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>7-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-focus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-focus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

