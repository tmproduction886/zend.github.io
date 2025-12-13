'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <div className="w-10 h-10 bg-gradient-to-br from-focus-green to-vibrant-teal rounded-lg flex items-center justify-center">
              <span className="text-void-black font-bold text-xl">Z</span>
            </div>
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

          {/* CTA Button */}
          <a
            href="https://apps.apple.com/app/zend"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-focus-green to-focus-green-light text-void-black px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-focus-green/50 transition-all duration-300 hover:scale-105"
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  )
}

