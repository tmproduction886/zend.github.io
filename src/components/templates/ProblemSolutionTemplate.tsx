'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProgrammaticPageData } from '@/lib/programmatic-seo/types'
import { 
  generateStructuredData, 
  generateFAQSchema, 
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateHowToSchema,
  generateWebPageSchema,
  getRelatedPages
} from '@/lib/programmatic-seo/utils'
import Link from 'next/link'

interface ProblemSolutionTemplateProps {
  data: ProgrammaticPageData
}

export default function ProblemSolutionTemplate({ data }: ProblemSolutionTemplateProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const structuredData = generateStructuredData(data)
  const faqSchema = generateFAQSchema(data)
  const breadcrumbSchema = generateBreadcrumbSchema(data)
  const articleSchema = generateArticleSchema(data)
  const howToSchema = generateHowToSchema(data)
  const webPageSchema = generateWebPageSchema(data)
  const relatedPages = getRelatedPages(data.slug, 5)

  return (
    <>
      {/* Structured Data - Multiple Schemas for Better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      {/* Hero Section - Semantic HTML for SEO */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-digital-night via-void-black to-digital-night" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 bg-gradient-to-r from-focus-green via-vibrant-teal to-focus-green-light bg-clip-text text-transparent"
            >
              {data.hero.h1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-text-secondary mb-4 max-w-2xl mx-auto"
            >
              {data.hero.subheading}
            </motion.p>

            {data.hero.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-text-tertiary mb-8 max-w-2xl mx-auto"
              >
                {data.hero.description}
              </motion.p>
            )}

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
            </motion.div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      {data.problem && (
        <section className="py-20 bg-digital-night/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-center"
              >
                {data.problem.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-text-secondary mb-8 text-center"
              >
                {data.problem.content}
              </motion.p>

              {data.problem.statistics && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  {data.problem.statistics.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                    >
                      <div className="text-4xl font-bold text-focus-green mb-2">{stat.value}</div>
                      <div className="text-text-secondary">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Solution Section */}
      {data.solution && (
        <section className="py-20 bg-void-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-center"
              >
                {data.solution.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-text-secondary mb-12 text-center"
              >
                {data.solution.content}
              </motion.p>

              {data.solution.steps && (
                <ol className="space-y-6" itemScope itemType="https://schema.org/HowTo">
                  {data.solution.steps.map((step, index) => (
                    <motion.li
                      key={index}
                      id={`step-${index + 1}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                      itemProp="step"
                      itemScope
                      itemType="https://schema.org/HowToStep"
                    >
                      <meta itemProp="position" content={String(index + 1)} />
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-focus-green/20 rounded-full flex items-center justify-center text-focus-green font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2" itemProp="name">{step.title}</h3>
                          <p className="text-text-secondary" itemProp="text">{step.description}</p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-digital-night/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center"
            >
              Features That Help You{' '}
              <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
                {data.primaryKeyword.includes('quit') ? 'Quit Gaming' : 'Recover'}
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.features.map((feature, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  itemScope
                  itemType="https://schema.org/SoftwareFeature"
                >
                  <h3 className="text-xl font-semibold mb-3" itemProp="name">{feature.title}</h3>
                  <p className="text-text-secondary mb-4" itemProp="description">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-text-tertiary">
                          <svg className="w-4 h-4 text-focus-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {data.benefits && (
        <section className="py-20 bg-void-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center"
              >
                Experience Life-Changing{' '}
                <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
                  Benefits
                </span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                  >
                    <svg className="w-6 h-6 text-focus-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-20 bg-digital-night/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold font-poppins mb-12 text-center"
              >
                Real Users,{' '}
                <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
                  Real Results
                </span>
              </motion.h2>

              <div className="space-y-6">
                {data.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  >
                    <p className="text-text-secondary mb-4 italic">"{testimonial.quote}"</p>
                    {testimonial.author && (
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">{testimonial.author}</div>
                        {testimonial.role && (
                          <span className="text-text-tertiary">• {testimonial.role}</span>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-void-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              Everything you need to know about {data.primaryKeyword}
            </p>

            <div className="space-y-4">
              {data.faq.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-focus-green flex-shrink-0 transition-transform ${
                        openFAQIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQIndex === index && (
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

      {/* Related Pages - Internal Linking */}
      {relatedPages.length > 0 && (
        <section className="py-20 bg-digital-night/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-center">
                Related{' '}
                <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
                  Resources
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedPages.map((page, index) => (
                  <Link
                    key={index}
                    href={`/${page.slug}`}
                    className="block bg-card-bg/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-focus-green/50 transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-focus-green">{page.title}</h3>
                    <p className="text-sm text-text-secondary">{page.primaryKeyword}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-digital-night to-void-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-focus-green to-vibrant-teal bg-clip-text text-transparent">
                Start Your Journey?
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
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'app_store_click', {
                      event_category: 'programmatic_seo',
                      event_label: data.slug,
                      keyword: data.primaryKeyword,
                      page_type: 'programmatic'
                    })
                  }
                }}
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
    </>
  )
}

