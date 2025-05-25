import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/">← Back to Home</Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">Last Updated: May 1, 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Marswater (MH20). This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or interact with our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect information about you in various ways, including:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Information you provide directly (name, email, wallet address)</li>
            <li>Automatically collected information (device information, IP address)</li>
            <li>Blockchain transaction data related to MH20 tokens</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We may use the information we collect about you for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Providing and maintaining our services</li>
            <li>Communicating with you about updates and changes</li>
            <li>Distributing profit shares and NFTs to eligible token holders</li>
            <li>Improving our website and services</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
          <p>We may share information with:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Service providers who assist in our operations</li>
            <li>Legal and regulatory authorities when required by law</li>
            <li>Business partners for specific purposes with your consent</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security</h2>
          <p>
            We implement appropriate security measures to protect your information. However, no method of transmission
            over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your information</li>
            <li>Objection to processing</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mb-6">
            <a href="mailto:privacy@marswater.io" className="text-blue-400 hover:underline">
              privacy@marswater.io
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
