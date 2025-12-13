'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when clicking outside
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-digital-night/95 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/icon.png" 
              alt="Zend Logo" 
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold font-poppins">Zend</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-text-secondary hover:text-focus-green transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-text-secondary hover:text-focus-green transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-text-secondary hover:text-focus-green transition-colors">
              Reviews
            </Link>
            <Link href="#faq" className="text-text-secondary hover:text-focus-green transition-colors">
              FAQ
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://apps.apple.com/app/zend"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-focus-green to-focus-green-light text-void-black px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-focus-green/50 transition-all duration-300 hover:scale-105"
            >
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-focus-green transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-digital-night/98 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                <Link 
                  href="#features" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-focus-green transition-colors text-lg font-semibold"
                >
                  Features
                </Link>
                <Link 
                  href="#how-it-works" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-focus-green transition-colors text-lg font-semibold"
                >
                  How It Works
                </Link>
                <Link 
                  href="#testimonials" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-focus-green transition-colors text-lg font-semibold"
                >
                  Reviews
                </Link>
                <Link 
                  href="#faq" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-focus-green transition-colors text-lg font-semibold"
                >
                  FAQ
                </Link>
                <a
                  href="https://apps.apple.com/app/zend"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-gradient-to-r from-focus-green to-focus-green-light text-void-black px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-focus-green/50 transition-all duration-300"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

