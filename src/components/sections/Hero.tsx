'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-digital-night via-void-black to-digital-night" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-focus-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibrant-teal/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 bg-gradient-to-r from-focus-green via-vibrant-teal to-focus-green-light bg-clip-text text-transparent">
              Quit Gaming.
              <br />
              Rebuild Your Life.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            Zend is the gamified recovery app that helps you quit gaming addiction using Apple Screen Time, XP tracking, and community support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
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
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center border-2 border-focus-green text-focus-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-focus-green/10 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text-tertiary text-sm"
          >
            <p>✨ Start your 7-day free trial • Cancel anytime</p>
          </motion.div>
        </div>

        {/* App Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-focus-green/20 to-vibrant-teal/20 blur-3xl rounded-3xl" />
            <div className="relative bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-3xl p-4 md:p-8">
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
                <Image
                  src="/dashboard.png"
                  alt="Zend gaming recovery app dashboard showing streak tracking, XP progress, daily check-ins, and gamified recovery features for quitting gaming addiction"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

