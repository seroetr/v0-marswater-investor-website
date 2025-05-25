import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/">← Back to Home</Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">Last Updated: May 1, 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Marswater (MH20) website and services, you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
          <p>
            Marswater (MH20) is a community-driven token on the Binance Smart Chain that aims to fund technologies for
            Mars water supply and teleportation research. Our services include providing information about the token,
            facilitating token transactions, and distributing profit shares and NFTs to eligible token holders.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
          <p>As a user of our services, you agree to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your wallet and private keys</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not engage in any fraudulent or harmful activities</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Token Disclaimer</h2>
          <p>
            MH20 tokens do not represent equity, debt, or any traditional security. They are utility tokens designed to
            facilitate community governance and profit sharing. The value of MH20 tokens may fluctuate, and there is no
            guarantee of returns or profits.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            All content on the Marswater website, including text, graphics, logos, and software, is the property of
            Marswater or its content suppliers and is protected by international copyright laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Marswater shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including loss of profits, data, or goodwill, resulting from your access
            to or use of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
            Marswater operates, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of any material changes by
            posting the updated Terms on our website. Your continued use of our services after such modifications
            constitutes your acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mb-6">
            <a href="mailto:legal@marswater.io" className="text-blue-400 hover:underline">
              legal@marswater.io
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
