"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Circle, Clock } from "lucide-react"

export default function RoadmapTimeline() {
  const [activePhase, setActivePhase] = useState("phase1")

  const phases = [
    {
      id: "phase1",
      title: "Phase 1: Initial Growth",
      period: "2025 - 2027",
      status: "in-progress",
      description: "MEXC Global listing and initial community building.",
      milestones: [
        { text: "Whitepaper release (May 1, 2025)", completed: true },
        { text: "Community building and marketing", completed: true },
        { text: "MEXC Global listing", completed: false },
        { text: "University partnerships and sponsorships", completed: false },
      ],
    },
    {
      id: "phase2",
      title: "Phase 2: Expansion",
      period: "2027 - 2028",
      status: "upcoming",
      description: "Gate.io listing and technology company establishment.",
      milestones: [
        { text: "Gate.io Global listing", completed: false },
        { text: "Reach $500M MarketCap", completed: false },
        { text: "Establish/acquire technology company", completed: false },
        { text: "Begin R&D in teleportation and space technologies", completed: false },
      ],
    },
    {
      id: "phase3",
      title: "Phase 3: Global Recognition",
      period: "2028 - 2030",
      status: "upcoming",
      description: "Binance listing and technology patent acquisition.",
      milestones: [
        { text: "Binance Global listing", completed: false },
        { text: "Acquire space technology patents", completed: false },
        { text: "Expand university research partnerships", completed: false },
        { text: "First profit sharing with token holders", completed: false },
      ],
    },
    {
      id: "phase4",
      title: "Phase 4: Mars Mission",
      period: "2030+",
      status: "upcoming",
      description: "Full-scale deployment of Mars hydration technology.",
      milestones: [
        { text: "Launch first prototype to Mars surface", completed: false },
        { text: "Conduct remote extraction tests", completed: false },
        { text: "Begin teleportation experiments", completed: false },
        { text: "Establish sustainable water cycle on Mars", completed: false },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <Tabs defaultValue="phase1" value={activePhase} onValueChange={setActivePhase} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-gray-800">
          {phases.map((phase) => (
            <TabsTrigger
              key={phase.id}
              value={phase.id}
              className={`data-[state=active]:${
                phase.status === "in-progress" ? "bg-blue-600/20 text-blue-300" : "bg-purple-600/20 text-purple-300"
              }`}
            >
              {phase.id === "phase1"
                ? "Phase 1"
                : phase.id === "phase2"
                  ? "Phase 2"
                  : phase.id === "phase3"
                    ? "Phase 3"
                    : "Phase 4"}
            </TabsTrigger>
          ))}
        </TabsList>

        {phases.map((phase) => (
          <TabsContent key={phase.id} value={phase.id} className="mt-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">{phase.title}</CardTitle>
                    <CardDescription className="text-gray-400">{phase.period}</CardDescription>
                  </div>
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      phase.status === "in-progress"
                        ? "bg-blue-900/30 text-blue-300"
                        : "bg-purple-900/30 text-purple-300"
                    }`}
                  >
                    {phase.status === "in-progress" ? (
                      <>
                        <Clock className="h-4 w-4" />
                        <span>In Progress</span>
                      </>
                    ) : (
                      <>
                        <Circle className="h-4 w-4" />
                        <span>Upcoming</span>
                      </>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">{phase.description}</p>
                <div className="space-y-3 mt-4">
                  <h4 className="font-medium text-white">Key Milestones:</h4>
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, index) => (
                      <li key={index} className="flex items-start gap-2">
                        {milestone.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <Circle className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={milestone.completed ? "text-white" : "text-gray-400"}>{milestone.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="relative">
        <div className="absolute left-0 right-0 h-1 bg-gray-800 top-4"></div>
        <div className="relative flex justify-between">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              className="relative flex flex-col items-center"
              onClick={() => setActivePhase(phase.id)}
            >
              <div
                className={`w-8 h-8 rounded-full z-10 flex items-center justify-center ${
                  activePhase === phase.id
                    ? phase.status === "in-progress"
                      ? "bg-blue-600"
                      : "bg-purple-600"
                    : "bg-gray-700"
                }`}
              >
                <span className="text-xs text-white">{index + 1}</span>
              </div>
              <span className={`text-xs mt-2 ${activePhase === phase.id ? "text-white font-medium" : "text-gray-500"}`}>
                {phase.period.split(" - ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
