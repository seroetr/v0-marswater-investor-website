import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, Calendar, LinkIcon } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WhitepaperSection() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="space-y-2 text-center">
        <div className="inline-block rounded-lg bg-green-600/20 px-3 py-1 text-sm text-green-300">
          Official Documentation
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Marswater Whitepaper</h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Our comprehensive whitepaper details the vision, technology, and roadmap for Marswater (MH20).
        </p>
      </div>

      <div className="w-full max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
              <Image
                src="/images/whitepaper-cover.png"
                alt="Marswater Whitepaper Cover"
                fill
                className="object-cover"
              />
            </div>

            <Card className="bg-gray-800 border-gray-700 mt-6">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-600/20 p-3">
                    <FileText className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Whitepaper Details</h3>
                    <p className="text-gray-400 text-sm">Complete project documentation</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Publication Date</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-green-400" />
                      <span className="text-white">May 1, 2025</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Token Symbol</span>
                    <span className="text-white">MH20</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Blockchain</span>
                    <span className="text-white">Binance Smart Chain (BEP-20)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Contract Address</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs truncate max-w-[120px] sm:max-w-[180px]">
                        0x4cb7d5af4c9850a397c81ef4c47f1255c47f9cc6
                      </span>
                      <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                        <LinkIcon className="h-3 w-3 text-green-400" />
                      </Button>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white mt-4">
                  <Download className="mr-2 h-4 w-4" /> Download Whitepaper
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 bg-gray-800 rounded-xl border border-gray-700 p-6">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid grid-cols-3 sm:grid-cols-5 bg-gray-900 mb-6">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="vision">Vision</TabsTrigger>
                <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                <TabsTrigger value="value">Value</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Executive Summary</h3>
                  <p className="text-gray-300">
                    Marswater (<strong>MH20</strong>) is a 100% community‑owned, no‑team token launched on Binance Smart
                    Chain. Our collective mission: finance technologies that will secure a sustainable water supply on
                    Mars and accelerate breakthroughs in teleportation and other deep‑space innovations. All tokens are
                    already in circulation—there is no team, private‑sale, or VC allocation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Introduction</h3>
                  <p className="text-gray-300">
                    Human settlement on Mars demands radical advances in life‑support logistics and transport. Water
                    (H₂O) is the cornerstone resource. MH20 pools decentralised capital to back R&D that can turn this
                    vision into reality, rewarding early community supporters along the way.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Conclusion</h3>
                  <p className="text-gray-300">
                    Mars needs water—the future needs pioneers. By uniting space enthusiasts, technologists, and DeFi
                    investors, MH20 empowers its community to fund humanity's next giant leap.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                      Telegram
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                      GitHub
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vision" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Vision & Mission</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-bold text-white mb-2">Vision</h4>
                      <p className="text-gray-300">
                        Develop the breakthrough technologies that make life on Mars sustainable and interplanetary
                        travel routine.
                      </p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-bold text-white mb-2">Mission</h4>
                      <p className="text-gray-300">
                        Use community‑driven funding to create—or acquire—a technology company focused on water
                        extraction, storage, and teleportation research.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Marketing & Community Strategy</h3>
                  <ul className="space-y-2 text-gray-300 list-disc pl-5">
                    <li>Sponsor university aerospace & blockchain clubs.</li>
                    <li>
                      Support research groups focused on in‑situ resource utilisation (ISRU) and teleportation sciences.
                    </li>
                    <li>Partner with space‑tech startups through grants or accelerator programmes.</li>
                    <li>
                      Engage strategic investors and cultivate a global community via social media and live events.
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="roadmap" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Exchange Listings</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-gray-300">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="py-2 px-4 text-left">Phase</th>
                          <th className="py-2 px-4 text-left">Timeline</th>
                          <th className="py-2 px-4 text-left">Target Exchange</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 px-4">I</td>
                          <td className="py-2 px-4">2025 – 2027</td>
                          <td className="py-2 px-4">MEXC Global</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 px-4">II</td>
                          <td className="py-2 px-4">2027 – 2028</td>
                          <td className="py-2 px-4">Gate.io</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">III</td>
                          <td className="py-2 px-4">2028 – 2030</td>
                          <td className="py-2 px-4">Binance.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Market‑Cap Milestone</h3>
                  <p className="text-gray-300">
                    If MH20's fully‑diluted market capitalisation reaches <strong>USD 500 million</strong>, the
                    community will, within six months, incorporate or acquire a dedicated space‑tech company, secure
                    patents, and establish partnerships with universities, research groups, and startups.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="value" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Value Proposition</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-bold text-white mb-2">1. Profit‑Sharing</h4>
                      <p className="text-gray-300">
                        Holders meeting snapshot criteria will receive <strong>≥ 20%</strong> of net profits generated
                        by the MH20‑backed company, distributed annually.
                      </p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="font-bold text-white mb-2">2. NFT Utility</h4>
                      <p className="text-gray-300">
                        Free, limited‑edition NFTs will be airdropped to qualifying wallets; these NFTs can entitle
                        holders to additional profit‑share or ecosystem perks.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Risk Disclosure</h3>
                  <p className="text-gray-300">
                    MH20 does <strong>not</strong> represent equity, debt, or any traditional security. Cryptocurrency
                    investments carry substantial market, technological, and regulatory risks. Prospective participants
                    should perform independent due diligence.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Token Details</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-gray-300">
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 px-4 font-medium">Name</td>
                          <td className="py-2 px-4">Marswater</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 px-4 font-medium">Symbol</td>
                          <td className="py-2 px-4">MH20</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 px-4 font-medium">Standard</td>
                          <td className="py-2 px-4">BEP-20</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 px-4 font-medium">Total Supply</td>
                          <td className="py-2 px-4">100% circulating – zero team allocation</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 px-4 font-medium">Contract Address</td>
                          <td className="py-2 px-4 break-all">0x4cb7d5af4c9850a397c81ef4c47f1255c47f9cc6</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-medium">Logo</td>
                          <td className="py-2 px-4 flex items-center">
                            <div className="relative h-8 w-8 overflow-hidden mr-2">
                              <Image
                                src="/images/mh20-logo.png"
                                alt="MH20 Logo"
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            Official logo
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
