"use client"

import { useEffect, useRef } from "react"

export default function TokenomicsChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 400
    canvas.height = 400

    // Data for the pie chart - 100% community owned
    const data = [{ value: 100, color: "#3b82f6", label: "Community" }]

    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw the pie chart
    let startAngle = 0
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) * 0.8

    // Add animation
    let animationProgress = 0
    const animationDuration = 1000 // ms
    const startTime = performance.now()

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      animationProgress = Math.min(elapsed / animationDuration, 1)

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background circle
      ctx.fillStyle = "#1f2937"
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fill()

      // Draw segments
      startAngle = 0
      data.forEach((segment) => {
        const segmentAngle = (segment.value / total) * Math.PI * 2 * animationProgress

        ctx.fillStyle = segment.color
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + segmentAngle)
        ctx.closePath()
        ctx.fill()

        // Store the middle angle for the label
        const middleAngle = startAngle + segmentAngle / 2

        // Draw label line and text if animation is complete
        if (animationProgress === 1) {
          const labelRadius = radius * 1.2
          const labelX = centerX + Math.cos(middleAngle) * labelRadius
          const labelY = centerY + Math.sin(middleAngle) * labelRadius

          // Draw line
          ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
          ctx.beginPath()
          ctx.moveTo(centerX + Math.cos(middleAngle) * radius, centerY + Math.sin(middleAngle) * radius)
          ctx.lineTo(labelX, labelY)
          ctx.stroke()

          // Draw label
          ctx.fillStyle = "white"
          ctx.font = "12px sans-serif"
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(`${segment.label} (${segment.value}%)`, centerX, labelY)
        }

        startAngle += segmentAngle
      })

      // Draw center circle (donut hole)
      ctx.fillStyle = "#111827"
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.5, 0, Math.PI * 2)
      ctx.fill()

      // Draw center text
      ctx.fillStyle = "white"
      ctx.font = "bold 16px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("MH20", centerX, centerY - 10)
      ctx.font = "12px sans-serif"
      ctx.fillText("100% Community Owned", centerX, centerY + 10)

      // Add logo image if available
      if (typeof window !== "undefined") {
        const img = new Image()
        img.crossOrigin = "anonymous"
        img.onload = () => {
          const logoSize = radius * 0.3
          ctx.drawImage(img, centerX - logoSize / 2, centerY - logoSize / 2 - 30, logoSize, logoSize)
        }
        img.src = "/images/mh20-logo.png"
      }

      if (animationProgress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)

    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        canvas.width = Math.min(400, canvas.offsetWidth)
        canvas.height = canvas.width

        // Redraw at 100% progress
        animationProgress = 1
        animate(performance.now() + animationDuration)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      <canvas ref={canvasRef} className="w-full max-w-[400px] h-auto mx-auto" style={{ aspectRatio: "1/1" }}></canvas>
    </div>
  )
}
