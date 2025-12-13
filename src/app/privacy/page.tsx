export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold font-poppins mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-text-secondary mb-6">
            Your privacy is important to us. This Privacy Policy explains how Zend collects, uses, and protects your information.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p className="text-text-secondary mb-4">
            We collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-text-secondary mb-4">
            We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p className="text-text-secondary mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="text-text-secondary">
            If you have questions about this Privacy Policy, please contact us at privacy@zend.now
          </p>
        </div>
      </div>
    </div>
  )
}

