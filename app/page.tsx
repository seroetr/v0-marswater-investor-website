import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Globe, Rocket, Users, Zap, FileText, Coins } from "lucide-react"
import TokenomicsChart from "@/components/tokenomics-chart"
import RoadmapTimeline from "@/components/roadmap-timeline"
import NewsletterSignup from "@/components/newsletter-signup"
import WhitepaperSection from "@/components/whitepaper-section"
import NftSection from "@/components/nft-section"
import RevenueModelSection from "@/components/revenue-model-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden">
                <Image src="/images/mh20-logo.png" alt="MH20 Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="inline-block font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-400">
                Marswater
              </span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#revenue"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Revenue Model
              </Link>
              <Link
                href="#technology"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Technology
              </Link>
              <Link
                href="#tokenomics"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Tokenomics
              </Link>
              <Link
                href="#roadmap"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Roadmap
              </Link>
              <Link
                href="#whitepaper"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Whitepaper
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
                <Link href="#contact">Contact</Link>
              </Button>
              <Button asChild size="sm" className="bg-gradient-to-r from-red-600 to-orange-400 text-white">
                <Link href="#invest">Invest Now</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-sm text-red-300 mb-4">
                  BEP-20 Community Token
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-blue-400">
                  Hydrating Mars, One Token at a Time
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Marswater (MH20) is a community-driven token on Binance Smart Chain pioneering the future of Mars
                  colonization through revolutionary hydration and teleportation technology.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-orange-400 text-white">
                    <Link href="#invest">Become an Investor</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-red-600/40 text-red-300">
                    <Link href="#whitepaper" className="flex items-center gap-1">
                      View Whitepaper <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/20 via-orange-400/20 to-blue-400/20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-red-600/30 via-orange-400/30 to-blue-400/30 animate-pulse [animation-delay:1s]"></div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-red-600/40 via-orange-400/40 to-blue-400/40 animate-pulse [animation-delay:2s]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/mh20-logo-full.png"
                      alt="Marswater Token"
                      width={300}
                      height={300}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-12">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-red-600/20 p-2">
                  <Rocket className="h-5 w-5 text-red-300" />
                </div>
                <span className="text-sm font-medium text-gray-300">Mars Hydration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-orange-400/20 p-2">
                  <Zap className="h-5 w-5 text-orange-300" />
                </div>
                <span className="text-sm font-medium text-gray-300">Teleportation Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-400/20 p-2">
                  <Globe className="h-5 w-5 text-blue-300" />
                </div>
                <span className="text-sm font-medium text-gray-300">Binance Smart Chain</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-purple-400/20 p-2">
                  <Users className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-sm font-medium text-gray-300">100% Community Owned</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-sm text-red-300">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Vision & Mission</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Marswater (MH20) is a visionary project aiming to establish a technology company that will develop
                  advanced space technologies for Mars water supply and teleportation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-white">Vision</h3>
                    <p className="text-gray-400">
                      Develop technologies that will make life sustainable on Mars and enable humanity's interplanetary
                      journey.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-white">Mission</h3>
                    <p className="text-gray-400">
                      Conduct R&D in teleportation and space technologies through a technology company that will be
                      established or acquired with investor support.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-white">Community Driven</h3>
                    <p className="text-gray-400">
                      MH20 is 100% community owned with no team allocation, ensuring that all token holders are equal
                      participants in this revolutionary journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/mars-planet.png"
                  alt="Mars Planet"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500/20 px-3 py-1 text-sm text-orange-300">
                  Breakthrough Technology
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">How Marswater Works</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our revolutionary technology combines quantum physics, molecular engineering, and blockchain to create
                  a sustainable water ecosystem on Mars.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-5xl">
              <Tabs defaultValue="hydration" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-900">
                  <TabsTrigger
                    value="hydration"
                    className="data-[state=active]:bg-red-600/20 data-[state=active]:text-red-300"
                  >
                    Hydration Technology
                  </TabsTrigger>
                  <TabsTrigger
                    value="teleportation"
                    className="data-[state=active]:bg-blue-600/20 data-[state=active]:text-blue-300"
                  >
                    Teleportation Network
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="hydration" className="mt-6 space-y-4">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <Image
                      src="/images/mars-hydration-system.png"
                      alt="Mars Hydration System on Martian Surface"
                      width={600}
                      height={400}
                      className="mx-auto rounded-xl object-cover"
                    />
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">Mars Hydration System</h3>
                      <p className="text-gray-400">
                        Our patented MH20 Extraction Units use minimal energy to extract hydrogen and oxygen molecules
                        from Mars' atmosphere and regolith, combining them to form pure water.
                      </p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-red-600/20 p-1 mt-1">
                            <ChevronRight className="h-3 w-3 text-red-300" />
                          </div>
                          <span>Atmospheric extraction of trace water vapor</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-red-600/20 p-1 mt-1">
                            <ChevronRight className="h-3 w-3 text-red-300" />
                          </div>
                          <span>Subsurface ice mining and purification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-red-600/20 p-1 mt-1">
                            <ChevronRight className="h-3 w-3 text-red-300" />
                          </div>
                          <span>Molecular recombination using quantum catalysts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-red-600/20 p-1 mt-1">
                            <ChevronRight className="h-3 w-3 text-red-300" />
                          </div>
                          <span>Solar-powered continuous operation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="teleportation" className="mt-6 space-y-4">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">Quantum Teleportation Network</h3>
                      <p className="text-gray-400">
                        Our revolutionary teleportation technology enables instant transfer of water molecules between
                        Earth and Mars, solving the logistics challenge of interplanetary resource transport.
                      </p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-blue-600/20 p-1 mt-1">
                            <ChevronRight className="h-3 w-3 text-blue-300" />
                          </div>
                          <span>Quantum entanglement of water molecules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-blue-600/20 p-1 mt-1">
                            <ChevronRight className="h-3 w-3 text-blue-300" />
                          </div>
                          <span>Instantaneous state transfer across space</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-blue-600/20 p-1 mt-1">
                            <ChevronRight className="h-3 w-3 text-blue-300" />
                          </div>
                          <span>Zero-latency interplanetary communication</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-blue-600/20 p-1 mt-1">
                            <ChevronRight className="h-3 w-3 text-blue-300" />
                          </div>
                          <span>Blockchain-verified transfer authentication</span>
                        </li>
                      </ul>
                    </div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Teleportation Technology"
                      width={600}
                      height={400}
                      className="mx-auto rounded-xl object-cover lg:order-first"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-600/20 px-3 py-1 text-sm text-blue-300">
                  Token Economics
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">MH20 Tokenomics</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Marswater token (MH20) powers our ecosystem, funding research and development while providing
                  governance and utility.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-6xl grid gap-8 lg:grid-cols-2">
              <div className="flex justify-center">
                <TokenomicsChart />
              </div>
              <div className="space-y-8">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Token Information</CardTitle>
                    <CardDescription className="text-gray-400">Total Supply: 1,000,000,000 MH20</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Token Name</span>
                        <span className="text-blue-300 font-medium">Marswater</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Symbol</span>
                        <span className="text-blue-300 font-medium">MH20</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Blockchain</span>
                        <span className="text-blue-300 font-medium">Binance Smart Chain (BEP-20)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Contract Address</span>
                        <span className="text-blue-300 font-medium text-xs sm:text-sm">
                          0x4cb7d5af4c9850a397c81ef4c47f1255c47f9cc6
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Distribution</span>
                        <span className="text-blue-300 font-medium">100% Community Owned</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Token Utility</CardTitle>
                    <CardDescription className="text-gray-400">How MH20 powers the Marswater ecosystem</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-600/20 p-1 mt-1">
                          <ChevronRight className="h-3 w-3 text-blue-300" />
                        </div>
                        <span>Profit sharing from established/acquired company (minimum 20% of profits)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-600/20 p-1 mt-1">
                          <ChevronRight className="h-3 w-3 text-blue-300" />
                        </div>
                        <span>Access to exclusive NFTs for token holders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-600/20 p-1 mt-1">
                          <ChevronRight className="h-3 w-3 text-blue-300" />
                        </div>
                        <span>Governance voting rights for project direction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-600/20 p-1 mt-1">
                          <ChevronRight className="h-3 w-3 text-blue-300" />
                        </div>
                        <span>Priority access to future technology developments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-600/20 p-1 mt-1">
                          <ChevronRight className="h-3 w-3 text-blue-300" />
                        </div>
                        <span>Community participation in research direction</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Model Section */}
        <section id="revenue" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="container px-4 md:px-6">
            <RevenueModelSection />
          </div>
        </section>

        {/* NFT Section */}
        <section id="nft" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <NftSection />
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-600/20 px-3 py-1 text-sm text-purple-300">
                  Project Timeline
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Marswater Roadmap</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our ambitious plan to revolutionize Mars exploration and colonization through water technology.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
              <RoadmapTimeline />
            </div>
          </div>
        </section>

        {/* Whitepaper Section */}
        <section id="whitepaper" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <WhitepaperSection />
          </div>
        </section>

        {/* Investment Section */}
        <section id="invest" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-sm text-red-300 mb-4">
                  Investment Opportunity
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Join the Future of Mars Exploration
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Invest in Marswater (MH20) and become part of humanity's most ambitious interplanetary venture. Token
                  holders gain exclusive benefits and potential returns as we revolutionize Mars colonization.
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-gray-900 border-gray-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-white text-2xl">$500M</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-400">MarketCap Target</CardDescription>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-900 border-gray-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-white text-2xl">20%+</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-400">Profit Sharing</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <Button asChild size="lg" className="w-full bg-gradient-to-r from-red-600 to-orange-400 text-white">
                    <Link href="#contact">Request Investment Details</Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4 bg-gray-900/60 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold">Revenue Model</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-red-900/30 to-orange-800/30 border border-red-700/30">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-red-300">Profit Sharing</h4>
                      <span className="text-sm bg-red-900/50 px-2 py-0.5 rounded text-red-300">20%+ of Profits</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Token holders receive at least 20% of the profits from the established or acquired technology
                      company at the end of each year.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-orange-900/30 to-yellow-800/30 border border-orange-700/30">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-orange-300">NFT Benefits</h4>
                      <span className="text-sm bg-orange-900/50 px-2 py-0.5 rounded text-orange-300">
                        Free for Holders
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">
                      MH20 holders receive free NFTs that provide additional profit-sharing opportunities from company
                      revenues.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-900/30 to-purple-800/30 border border-blue-700/30">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-blue-300">Technology Company</h4>
                      <span className="text-sm bg-blue-900/50 px-2 py-0.5 rounded text-blue-300">$500M MarketCap</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      When MarketCap reaches $500M, a technology company focused on teleportation and space technologies
                      will be established or acquired.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-purple-900/30 to-pink-800/30 border border-purple-700/30">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-purple-300">Research Partnerships</h4>
                      <span className="text-sm bg-purple-900/50 px-2 py-0.5 rounded text-purple-300">
                        Universities & Startups
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Partnerships with university research groups, clubs, and startups working on space technology and
                      teleportation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-600/20 px-3 py-1 text-sm text-blue-300">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Join the Marswater Mission
                </h2>
                <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in investing or learning more about our revolutionary technology? Contact our community for
                  exclusive information and investment opportunities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-blue-600/20 p-2">
                      <Globe className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="text-gray-300">Blockchain: Binance Smart Chain (BEP-20)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-blue-600/20 p-2">
                      <Coins className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="text-gray-300">Contract: 0x4cb7d5af4c9850a397c81ef4c47f1255c47f9cc6</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-blue-600/20 p-2">
                      <FileText className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="text-gray-300">Whitepaper Release: May 1, 2025</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-black text-gray-400 border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="relative h-8 w-8 overflow-hidden">
                  <Image
                    src="/images/mh20-logo.png"
                    alt="MH20 Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-400">
                  Marswater
                </span>
              </div>
              <p className="text-sm">Revolutionizing Mars exploration through water technology and teleportation.</p>
              <p className="text-xs">Contract: 0x4cb7d5af4c9850a397c81ef4c47f1255c47f9cc6</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Project</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#about" className="text-sm hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="text-sm hover:text-white transition-colors">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#tokenomics" className="text-sm hover:text-white transition-colors">
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <Link href="#whitepaper" className="text-sm hover:text-white transition-colors">
                    Whitepaper
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#whitepaper" className="text-sm hover:text-white transition-colors">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="text-sm hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-sm hover:text-white transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/privacy-policy" className="text-sm hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-sm hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-sm hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-sm hover:text-white transition-colors">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs">© {new Date().getFullYear()} Marswater (MH20). All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="https://twitter.com/marswater" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="https://t.me/marswater" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Telegram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </Link>
              <Link href="https://discord.gg/marswater" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Discord</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </Link>
              <Link href="https://github.com/marswater" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
