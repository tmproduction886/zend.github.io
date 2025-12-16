import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-digital-night border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/icon.png" 
                alt="Zend Logo" 
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold font-poppins">Zend</span>
            </div>
            <p className="text-text-tertiary text-sm max-w-md">
              The gamified recovery app that helps you quit gaming addiction and rebuild your life.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-text-tertiary hover:text-focus-green transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-text-tertiary hover:text-focus-green transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/us/app/zend-quit-gaming-now/id6756012283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-focus-green transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-text-tertiary hover:text-focus-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-tertiary hover:text-focus-green transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-text-tertiary">
          <p>&copy; {new Date().getFullYear()} Zend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

