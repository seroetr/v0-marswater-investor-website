import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/">← Back to Home</Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">Last Updated: May 1, 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Investment Risks</h2>
          <p>
            Marswater (MH20) tokens are speculative digital assets. The value of MH20 tokens may fluctuate significantly
            and could potentially drop to zero. You should only invest what you are willing to lose entirely.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Not Financial Advice</h2>
          <p>
            The information provided on this website is for general informational purposes only and should not be
            construed as financial, investment, or legal advice. We do not provide personalized investment
            recommendations or act as financial advisors.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Forward-Looking Statements</h2>
          <p>
            This website contains forward-looking statements about our plans for Mars hydration and teleportation
            technology. These statements involve known and unknown risks, uncertainties, and other factors that may
            cause our actual results to differ materially from those expressed or implied by such forward-looking
            statements.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Technology Risks</h2>
          <p>
            The technologies we aim to develop, including Mars water extraction and teleportation, are highly
            experimental and may not be achievable with current scientific knowledge. There is no guarantee that our
            research and development efforts will be successful.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Regulatory Risks</h2>
          <p>
            The regulatory status of cryptocurrencies and blockchain technology is unclear or unsettled in many
            jurisdictions. Future regulatory actions may impact the value or utility of MH20 tokens. You are responsible
            for determining whether your participation complies with applicable laws in your jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">No Guarantees</h2>
          <p>
            While we aim to establish or acquire a technology company when the market capitalization reaches $500
            million and distribute at least 20% of profits to token holders, these plans are subject to change based on
            market conditions, technological developments, and other factors beyond our control.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Independent Research</h2>
          <p>
            Before making any investment decisions, you should conduct your own research and consult with financial,
            legal, and tax professionals. Do not rely solely on information provided on this website or by community
            members.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <p>If you have any questions about this disclaimer, please contact us at:</p>
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
