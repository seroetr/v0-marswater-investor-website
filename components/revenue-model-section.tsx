import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Coins, Zap, BarChart3 } from "lucide-react"

export default function RevenueModelSection() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="space-y-2 text-center">
        <div className="inline-block rounded-lg bg-green-600/20 px-3 py-1 text-sm text-green-300">
          Financial Benefits
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Revenue Model</h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          How MH20 token holders benefit from the project's success and future company profits.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 w-full max-w-5xl">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-400" />
              Profit Sharing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              Investors holding a specified amount of MH20 tokens will receive profit shares from the established or
              acquired company at the end of each fiscal year. This profit distribution will be no less than 20% of the
              company's total profits.
            </p>
            <div className="bg-gray-900 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Coins className="h-4 w-4 text-green-400" />
                <h4 className="font-medium text-white">Key Benefits</h4>
              </div>
              <ul className="space-y-2 text-gray-300 pl-6 list-disc">
                <li>Minimum 20% of company profits distributed to token holders</li>
                <li>Annual distribution schedule</li>
                <li>Transparent profit calculation and distribution mechanism</li>
                <li>Proportional allocation based on token holdings</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-400" />
              NFT-Based Revenue
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              NFTs will be issued in connection with MH20 (free for holders of a specified amount of tokens). The sale
              of these NFTs will fund companies working in teleportation, space technologies, or other fields. NFT
              holders will receive a share of the company's profits at year-end, with the percentage determined by smart
              contract.
            </p>
            <div className="bg-gray-900 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-4 w-4 text-orange-400" />
                <h4 className="font-medium text-white">NFT Advantages</h4>
              </div>
              <ul className="space-y-2 text-gray-300 pl-6 list-disc">
                <li>Free NFTs for qualifying MH20 token holders</li>
                <li>Additional revenue stream through NFT sales</li>
                <li>Separate profit-sharing mechanism for NFT holders</li>
                <li>Contract-guaranteed profit distribution</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
