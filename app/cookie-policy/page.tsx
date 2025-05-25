import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/">← Back to Home</Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">Last Updated: May 1, 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit a website.
            They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p>Marswater (MH20) uses cookies for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Essential cookies: These are necessary for the website to function properly</li>
            <li>Analytical cookies: These help us understand how visitors interact with our website</li>
            <li>Functional cookies: These remember your preferences and settings</li>
            <li>Marketing cookies: These track your activity to deliver personalized ads and content</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          <p>
            We use both session cookies, which are temporary and deleted when you close your browser, and persistent
            cookies, which remain on your device until they expire or you delete them.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third parties on our website. These third parties may include analytics
            providers, advertising networks, and social media platforms. We do not control these third-party cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p>
            You can control and manage cookies in various ways. Most web browsers allow you to manage your cookie
            preferences. You can:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Delete cookies from your device</li>
            <li>
              Block cookies by activating the setting on your browser that allows you to refuse all or some cookies
            </li>
            <li>Set your browser to notify you when you receive a cookie</li>
          </ul>
          <p>
            Please note that if you choose to block or delete cookies, you may not be able to access certain areas or
            features of our website, and some services may not function properly.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Our Cookie Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated
            revision date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about our Cookie Policy, please contact us at:</p>
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
