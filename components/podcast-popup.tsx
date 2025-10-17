"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, X } from "lucide-react"

interface PodcastPopupProps {
  onPlay: () => void
}

export function PodcastPopup({ onPlay }: PodcastPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolledPast, setHasScrolledPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past the podcast player (approximately 2000px)
      if (window.scrollY > 2000 && !hasScrolledPast) {
        setHasScrolledPast(true)
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasScrolledPast])

  if (!isVisible) return null

  const handlePlay = () => {
    onPlay()
    setIsVisible(false)
    // Scroll back to podcast player
    window.scrollTo({ top: 1500, behavior: "smooth" })
  }

  const handleDismiss = () => {
    setIsVisible(false)
  }

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in-delay">
      <Card className="border-2 border-primary/30 bg-card/95 backdrop-blur-md shadow-extra-strong max-w-md">
        <CardContent className="p-6">
          <button
            onClick={handleDismiss}
            className="absolute top-3 left-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="بستن"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center space-y-4 pt-2">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Play className="h-8 w-8 text-primary" />
              </div>
            </div>

            <h3 className="text-xl font-bold font-heading">آیا تمایل دارید آخرین پادکست سایت را گوش کنید؟</h3>

            <div className="flex gap-3 pt-2">
              <Button
                onClick={handlePlay}
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-medium hover:shadow-strong transition-all"
              >
                <Play className="ml-2 h-5 w-5" />
                پخش پادکست
              </Button>
              <Button
                onClick={handleDismiss}
                variant="outline"
                className="flex-1 hover:bg-secondary/80 transition-all bg-transparent"
              >
                رد کردن
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
