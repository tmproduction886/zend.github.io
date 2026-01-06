'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

interface PageData {
  slug: string
  category: string
  priority: number
  hero: {
    h1: string
  }
}

export default function ProgrammaticPages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [topPages, setTopPages] = useState<PageData[]>([])
  
  useEffect(() => {
    // Dynamically import to avoid SSR issues
    import('@/lib/programmatic-seo/data').then(({ getAllPages }) => {
      const allPages = getAllPages()
      const sorted = allPages
        .sort((a, b) => (b.priority || 0.7) - (a.priority || 0.7))
        .slice(0, 24)
        .map(p => ({
          slug: p.slug,
          category: p.category,
          priority: p.priority || 0.7,
          hero: p.hero
        }))
      setTopPages(sorted)
    })
  }, [])
  
  // Group pages by category
  const pagesByCategory = {
    'problem-solution': topPages.filter(p => p.category === 'problem-solution').slice(0, 6),
    'question-based': topPages.filter(p => p.category === 'question-based').slice(0, 6),
    'feature-focused': topPages.filter(p => p.category === 'feature-focused').slice(0, 6),
    'demographic-specific': topPages.filter(p => p.category === 'demographic-specific').slice(0, 6),
  }

  // Show loading state if pages haven't loaded yet
  if (topPages.length === 0) {
    return null // Or return a loading skeleton
  }

  const categoryLabels: Record<string, string> = {
    'problem-solution': 'Problem & Solution',
    'question-based': 'How-To Guides',
    'feature-focused': 'Features',
    'demographic-specific': 'By Audience',
  }

  return (
    <section ref={ref} className="py-20 bg-digital-night/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
                Resources
              </span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Find answers, guides, and solutions for every aspect of gaming addiction recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(pagesByCategory).map(([category, pages]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold font-poppins mb-4 text-focus-green">
                  {categoryLabels[category] || category}
                </h3>
                <ul className="space-y-3">
                  {pages.map((page) => (
                    <li key={page.slug}>
                      <Link
                        href={`/${page.slug}/`}
                        className="text-text-secondary hover:text-focus-green transition-colors text-sm block py-1"
                      >
                        {page.hero.h1.replace(' - Zend', '').replace(' | #1 Recovery Solution', '').substring(0, 60)}
                        {page.hero.h1.length > 60 ? '...' : ''}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/category/${category}/`}
                  className="mt-4 text-focus-green hover:text-vibrant-teal text-sm font-semibold inline-flex items-center"
                >
                  View all →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/all-pages/"
              className="inline-flex items-center justify-center border-2 border-focus-green text-focus-green px-8 py-3 rounded-xl font-semibold hover:bg-focus-green/10 transition-all duration-300"
            >
              Browse All Resources
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

