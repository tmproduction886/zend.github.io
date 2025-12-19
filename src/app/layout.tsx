import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zend - Quit Gaming & Rebuild Your Life | Gamified Recovery App',
  description: 'Zend helps you quit gaming addiction using gamification, Screen Time blocking, and community support. Start your 7-day free trial today.',
  keywords: 'quit gaming, gaming addiction, screen time blocker, recovery app, gaming addiction help, stop gaming, gaming detox, digital wellness, screen time management',
  authors: [{ name: 'Zend' }],
  creator: 'Zend',
  publisher: 'Zend',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.png', type: 'image/png', sizes: '48x48' },
    ],
    shortcut: ['/favicon.ico', '/favicon.png'],
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
  },
  metadataBase: new URL('https://zend.now'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zend - Quit Gaming & Rebuild Your Life',
    description: 'The gamified recovery app that helps you quit gaming addiction using Apple Screen Time, XP tracking, and community support. Start your 7-day free trial today.',
    url: 'https://zend.now',
    siteName: 'Zend',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Zend App Dashboard - Gamified Recovery App',
      },
      {
        url: '/icon.png',
        width: 1024,
        height: 1024,
        alt: 'Zend Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zend - Quit Gaming & Rebuild Your Life',
    description: 'The gamified recovery app that helps you quit gaming addiction. Start your 7-day free trial today.',
    images: ['/dashboard.png'],
    creator: '@zend',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Apple Smart App Banner - iOS users can directly open App Store */}
        <meta name="apple-itunes-app" content="app-id=6756012283, app-argument=zend://home" />
        {/* Enhanced SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Zend",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "iOS",
              "offers": {
                "@type": "Offer",
                "price": "19.99",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "description": "Zend helps you quit gaming addiction using gamification, Screen Time blocking, and community support. Start your 7-day free trial today.",
              "screenshot": [
                "https://zend.now/dashboard.png",
                "https://zend.now/block.png",
                "https://zend.now/achievements.png"
              ],
              "featureList": [
                "Screen Time Blocking",
                "Gamified Recovery System",
                "Streak Tracking",
                "Recovery Tools",
                "Community Support",
                "Progress Analytics"
              ],
              "applicationSubCategory": "Wellness Application",
              "downloadUrl": "https://apps.apple.com/us/app/zend-quit-gaming-now/id6756012283",
              "softwareVersion": "1.0"
            })
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zend",
              "url": "https://zend.now",
              "logo": "https://zend.now/icon.png",
              "description": "Zend is a gamified recovery app that helps people quit gaming addiction and rebuild their lives.",
              "sameAs": []
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

