export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold font-poppins mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-text-secondary mb-6">
            Please read these Terms of Service carefully before using Zend.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-text-secondary mb-4">
            By accessing or using Zend, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
          <p className="text-text-secondary mb-4">
            Permission is granted to temporarily use Zend for personal, non-commercial purposes. This license shall automatically terminate if you violate any of these restrictions.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Subscription Terms</h2>
          <p className="text-text-secondary mb-4">
            Zend offers subscription services. By subscribing, you agree to pay the subscription fees and understand that subscriptions automatically renew unless cancelled.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="text-text-secondary">
            If you have questions about these Terms of Service, please contact us at support@zend.now
          </p>
        </div>
      </div>
    </div>
  )
}

