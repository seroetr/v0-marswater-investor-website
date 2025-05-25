import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Zap, DollarSign, Users } from "lucide-react"

export default function NftSection() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="space-y-2 text-center">
        <div className="inline-block rounded-lg bg-orange-500/20 px-3 py-1 text-sm text-orange-300">
          Exclusive Benefits
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">MH20 NFT Collection</h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Token holders receive exclusive NFTs that provide additional profit-sharing opportunities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl mt-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Layers className="h-5 w-5 text-orange-400" />
              NFT Benefits
            </CardTitle>
            <CardDescription className="text-gray-400">Exclusive advantages for MH20 token holders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-orange-600/20 p-1 mt-1">
                  <DollarSign className="h-3 w-3 text-orange-300" />
                </div>
                <span className="text-gray-300">Additional profit sharing from company revenues</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-orange-600/20 p-1 mt-1">
                  <Zap className="h-3 w-3 text-orange-300" />
                </div>
                <span className="text-gray-300">Priority access to new technology developments</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-orange-600/20 p-1 mt-1">
                  <Users className="h-3 w-3 text-orange-300" />
                </div>
                <span className="text-gray-300">Exclusive community access and voting rights</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-orange-400" />
              Distribution Model
            </CardTitle>
            <CardDescription className="text-gray-400">How NFTs are distributed to the community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-orange-600/20 p-1 mt-1">
                  <Layers className="h-3 w-3 text-orange-300" />
                </div>
                <span className="text-gray-300">Free NFTs for holders of certain amounts of MH20 tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-orange-600/20 p-1 mt-1">
                  <Layers className="h-3 w-3 text-orange-300" />
                </div>
                <span className="text-gray-300">NFT sales fund technology company operations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-orange-600/20 p-1 mt-1">
                  <Layers className="h-3 w-3 text-orange-300" />
                </div>
                <span className="text-gray-300">Profit sharing determined by smart contract</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
