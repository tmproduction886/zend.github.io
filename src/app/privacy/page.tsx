export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold font-poppins mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary mb-4">
            Last updated: December 13, 2025
          </p>
          <p className="text-text-secondary mb-6">
            Your privacy is important to us. This Privacy Policy explains how Zend collects, uses, and protects your information when you use our mobile application and services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide</h3>
          <p className="text-text-secondary mb-4">
            We collect information that you provide directly to us, such as:
          </p>
          <ul className="text-text-secondary mb-4 list-disc list-inside space-y-2">
            <li>Account information (display name, email if provided)</li>
            <li>Recovery goals and preferences</li>
            <li>Content you create (posts, check-ins, reflections)</li>
            <li>Support requests and communications</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Information Collected Automatically</h3>
          <p className="text-text-secondary mb-4">
            When you use Zend, we automatically collect certain information:
          </p>
          <ul className="text-text-secondary mb-4 list-disc list-inside space-y-2">
            <li><strong>User ID:</strong> Unique identifier for your account (Firebase Authentication)</li>
            <li><strong>Product Interaction:</strong> App usage data, feature interactions, and engagement metrics (Firebase Analytics)</li>
            <li><strong>Purchase History:</strong> Subscription status and purchase information (RevenueCat)</li>
            <li><strong>Usage Data:</strong> Screen Time API data for app blocking functionality</li>
            <li><strong>Diagnostic Data:</strong> Crash reports and performance metrics (Firebase Crashlytics)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Screen Time API Usage</h3>
          <p className="text-text-secondary mb-4">
            Zend uses Apple's Family Controls API (Screen Time) to help you block distracting apps during focus sessions. This allows us to:
          </p>
          <ul className="text-text-secondary mb-4 list-disc list-inside space-y-2">
            <li>Set up Screen Time schedules that prevent access to selected apps during your designated focus hours</li>
            <li>Monitor when focus sessions are active</li>
            <li>Track which apps you've selected to block</li>
          </ul>
          <p className="text-text-secondary mb-4">
            This data is stored locally on your device and is not transmitted to our servers. We only access the apps you explicitly select for blocking through the iOS Family Activity Picker.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services and SDKs</h2>
          <p className="text-text-secondary mb-4">
            We use the following third-party services that may collect information:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Firebase Services (Google)</h3>
          <ul className="text-text-secondary mb-4 list-disc list-inside space-y-2">
            <li><strong>Firebase Authentication:</strong> User account management and authentication</li>
            <li><strong>Firebase Analytics:</strong> App usage analytics and user behavior insights</li>
            <li><strong>Cloud Firestore:</strong> Database for storing your app data (goals, streaks, posts, etc.)</li>
            <li><strong>Firebase Crashlytics:</strong> Crash reporting and app stability monitoring</li>
          </ul>
          <p className="text-text-secondary mb-4">
            Firebase's privacy policy: <a href="https://policies.google.com/privacy" className="text-focus-green hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">RevenueCat</h3>
          <p className="text-text-secondary mb-4">
            We use RevenueCat to manage subscriptions and process payments. RevenueCat collects purchase history and subscription status to provide subscription management services.
          </p>
          <p className="text-text-secondary mb-4">
            RevenueCat's privacy policy: <a href="https://www.revenuecat.com/privacy" className="text-focus-green hover:underline" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a>
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Facebook SDK</h3>
          <p className="text-text-secondary mb-4">
            We use Facebook SDK for app analytics and advertising attribution. This helps us understand how users discover our app and measure the effectiveness of our marketing efforts.
          </p>
          <p className="text-text-secondary mb-4">
            Facebook's privacy policy: <a href="https://www.facebook.com/privacy/explanation" className="text-focus-green hover:underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/explanation</a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-text-secondary mb-4">
            We use the information we collect to:
          </p>
          <ul className="text-text-secondary mb-4 list-disc list-inside space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and manage subscriptions</li>
            <li>Send you notifications and reminders related to your recovery journey</li>
            <li>Analyze app usage to improve user experience</li>
            <li>Respond to your support requests</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Sharing and Disclosure</h2>
          <p className="text-text-secondary mb-4">
            We do not sell your personal information. We may share your information only in the following circumstances:
          </p>
          <ul className="text-text-secondary mb-4 list-disc list-inside space-y-2">
            <li><strong>Service Providers:</strong> With third-party service providers (Firebase, RevenueCat) who help us operate our services</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights and Choices</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Access and Export</h3>
          <p className="text-text-secondary mb-4">
            You can request a copy of your personal data by contacting us at privacy@zend.now. We will provide your data in a machine-readable format within 30 days of your request.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Deletion</h3>
          <p className="text-text-secondary mb-4">
            You can request deletion of your account and associated data by:
          </p>
          <ul className="text-text-secondary mb-4 list-disc list-inside space-y-2">
            <li>Contacting us at privacy@zend.now</li>
            <li>Using the account deletion feature in the app (if available)</li>
          </ul>
          <p className="text-text-secondary mb-4">
            We will delete your data within 30 days, except where we are required to retain it for legal or regulatory purposes.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Opt-Out of Analytics</h3>
          <p className="text-text-secondary mb-4">
            You can opt-out of analytics data collection by disabling analytics in your device settings or by contacting us at privacy@zend.now. Note that this may affect app functionality and support.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Push Notifications</h3>
          <p className="text-text-secondary mb-4">
            You can manage push notification preferences in the app's notification settings. You can disable notifications at any time through your device settings.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p className="text-text-secondary mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="text-text-secondary mb-4 list-disc list-inside space-y-2">
            <li>Encryption of data in transit and at rest</li>
            <li>Secure authentication and authorization systems</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and employee training</li>
          </ul>
          <p className="text-text-secondary mb-4">
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
          <p className="text-text-secondary mb-4">
            Zend is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately at privacy@zend.now and we will delete such information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">International Users</h2>
          <p className="text-text-secondary mb-4">
            If you are using Zend from outside the United States, please note that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our services, you consent to the transfer of your information to the United States.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-text-secondary mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="text-text-secondary mb-4">
            If you have questions about this Privacy Policy, your data, or wish to exercise your rights, please contact us at:
          </p>
          <p className="text-text-secondary mb-4">
            <strong>Email:</strong> privacy@zend.now<br />
            <strong>Support:</strong> support@zend.now
          </p>
        </div>
      </div>
    </div>
  )
}
