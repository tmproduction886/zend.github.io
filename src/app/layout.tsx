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
  keywords: 'quit gaming, gaming addiction, screen time blocker, recovery app, gaming addiction help',
  openGraph: {
    title: 'Zend - Quit Gaming & Rebuild Your Life',
    description: 'The gamified recovery app that helps you quit gaming addiction.',
    url: 'https://zend.now',
    siteName: 'Zend',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zend - Quit Gaming & Rebuild Your Life',
    description: 'The gamified recovery app that helps you quit gaming addiction.',
  },
  robots: {
    index: true,
    follow: true,
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1000"
              }
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

