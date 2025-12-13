'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    question: 'How does the Screen Time blocker work?',
    answer: 'Zend uses native iOS Family Controls API to block gaming apps during your scheduled focus hours. Once set up, you cannot bypass the blocks without removing the app entirely.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 7-day free trial so you can experience all features risk-free. No credit card required to start.',
  },
  {
    question: 'What happens if I relapse?',
    answer: 'Your streak resets, but you keep all your XP, levels, and achievements. Recovery is a journey, not a destination. Every day is a new opportunity.',
  },
  {
    question: 'Can I use this on Android?',
    answer: 'Currently, Zend is iOS only. We\'re working on an Android version and will announce it soon.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Zend Premium is $19.99/month or $59.99/year (save 75%). Both plans include a 7-day free trial.',
  },
  {
    question: 'Do I need to give up gaming completely?',
    answer: 'You set your own goals. Some users quit completely, others use Zend to reduce gaming time and build healthier habits. The choice is yours.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} id="faq" className="py-20 bg-digital-night/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-center">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-text-secondary mb-12 text-center">
            Everything you need to know about Zend
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-focus-green flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-text-secondary">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

