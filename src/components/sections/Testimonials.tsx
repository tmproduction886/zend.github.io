'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Alex M.',
    streak: 'Day 60',
    text: 'Zend changed my life. I\'m 60 days game-free and finally getting things done. The gamification makes it fun, and the community keeps me accountable.',
    rating: 5,
  },
  {
    name: 'Jordan K.',
    streak: 'Day 45',
    text: 'The Screen Time blocker is a game-changer. I can\'t even access games during my focus hours. Combined with the streak tracking, I\'ve never felt more in control.',
    rating: 5,
  },
  {
    name: 'Sam T.',
    streak: 'Day 30',
    text: 'I love the XP system and achievements. It feels like I\'m playing a game, but I\'m actually improving my real life. Best decision I\'ve made.',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="testimonials" className="py-20 bg-digital-night/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            What People Say About{' '}
            <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
              Zend
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Real stories from real people on their recovery journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-recovery-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-secondary mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-focus-green text-sm font-semibold">{testimonial.streak}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

