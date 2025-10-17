"use client"

import type React from "react"

import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward, List, Volume2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Podcast {
  id: string
  title: string
  audioUrl: string
  imageUrl: string
  description: string
  date: Date
}

export interface PodcastPlayerRef {
  play: () => void
}

// Mock podcast data - in production, this would scan the multimedia folder
const mockPodcasts: Podcast[] = [
  {
    id: "1",
    title: "پادکست ۱۴۰۳/۰۷/۲۴",
    audioUrl: "/multimedia/podcast-audio/sample1.mp3",
    imageUrl: "/multimedia/podcast-images/cover1.jpg",
    description: "بررسی آخرین تغییرات قوانین حقوقی کشور و تاثیر آن بر زندگی روزمره شهروندان",
    date: new Date(2024, 9, 15),
  },
  {
    id: "2",
    title: "پادکست ۱۴۰۳/۰۷/۱۷",
    audioUrl: "/multimedia/podcast-audio/sample2.mp3",
    imageUrl: "/multimedia/podcast-images/cover2.jpg",
    description: "راهنمای جامع حقوق خانواده و نکات مهم در مورد طلاق و نفقه",
    date: new Date(2024, 9, 8),
  },
  {
    id: "3",
    title: "پادکست ۱۴۰۳/۰۷/۱۰",
    audioUrl: "/multimedia/podcast-audio/sample3.mp3",
    imageUrl: "/multimedia/podcast-images/cover3.jpg",
    description: "حقوق کیفری و چگونگی دفاع از حقوق خود در دادگاه",
    date: new Date(2024, 9, 1),
  },
]

export const PodcastPlayer = forwardRef<PodcastPlayerRef>((props, ref) => {
  const [currentPodcastIndex, setCurrentPodcastIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [showPlaylist, setShowPlaylist] = useState(false)
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentPodcast = mockPodcasts[currentPodcastIndex]

  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
        setIsPlaying(true)
      }
    },
  }))

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      setIsPlaying(false)
      handleNext()
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentPodcastIndex])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleNext = () => {
    setCurrentPodcastIndex((prev) => (prev + 1) % mockPodcasts.length)
    setIsPlaying(false)
  }

  const handlePrevious = () => {
    setCurrentPodcastIndex((prev) => (prev - 1 + mockPodcasts.length) % mockPodcasts.length)
    setIsPlaying(false)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number.parseFloat(e.target.value)
    setCurrentTime(time)
    if (audioRef.current) {
      audioRef.current.currentTime = time
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number.parseFloat(e.target.value)
    setVolume(vol)
    if (audioRef.current) {
      audioRef.current.volume = vol
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const selectPodcast = (index: number) => {
    setCurrentPodcastIndex(index)
    setIsPlaying(false)
    setShowPlaylist(false)
  }

  return (
    <>
      <Card
        className="relative overflow-hidden border border-border/50 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-sm shadow-extra-strong hover:shadow-extra-strong transition-all duration-500 group"
        data-podcast-player
      >
        {/* Neomorphic effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/5 to-transparent opacity-50" />

        <CardContent className="relative p-0">
          {/* Podcast Cover with Title and Description Overlay */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={currentPodcast.imageUrl || "/placeholder.svg?height=400&width=600&query=podcast+cover"}
              alt={currentPodcast.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Title and Description */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 font-heading drop-shadow-lg">
                {currentPodcast.title}
              </h3>
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setIsDescriptionHovered(true)}
                onMouseLeave={() => setIsDescriptionHovered(false)}
              >
                <p
                  className={`text-sm md:text-base text-white/90 leading-relaxed transition-all duration-500 ${
                    isDescriptionHovered ? "blur-sm opacity-70" : "blur-0 opacity-100"
                  }`}
                >
                  {currentPodcast.description}
                </p>
                {isDescriptionHovered && (
                  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/10 rounded-lg animate-fade-in">
                    <span className="text-white font-medium">توضیحات پادکست</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Audio Controls */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary 
                  [&::-webkit-slider-thumb]:shadow-medium [&::-webkit-slider-thumb]:transition-all
                  [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:hover:shadow-strong
                  [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full 
                  [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:shadow-medium [&::-moz-range-thumb]:transition-all
                  [&::-moz-range-thumb]:hover:scale-125"
                style={{
                  background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${
                    (currentTime / duration) * 100
                  }%, hsl(var(--primary) / 0.2) ${(currentTime / duration) * 100}%, hsl(var(--primary) / 0.2) 100%)`,
                }}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                className="h-12 w-12 rounded-full hover:bg-primary/10 transition-all hover:scale-110"
              >
                <SkipBack className="h-6 w-6" />
              </Button>

              <Button
                size="icon"
                onClick={togglePlay}
                className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-strong hover:shadow-extra-strong transition-all hover:scale-110"
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 mr-1" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="h-12 w-12 rounded-full hover:bg-primary/10 transition-all hover:scale-110"
              >
                <SkipForward className="h-6 w-6" />
              </Button>

              <div className="flex items-center gap-2 mr-4">
                <Volume2 className="h-5 w-5 text-muted-foreground" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-2 bg-primary/20 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary
                    [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full 
                    [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPlaylist(true)}
                className="h-12 w-12 rounded-full hover:bg-primary/10 transition-all hover:scale-110"
              >
                <List className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </CardContent>

        <audio ref={audioRef} src={currentPodcast.audioUrl} preload="metadata" />
      </Card>

      {/* Playlist Dialog */}
      <Dialog open={showPlaylist} onOpenChange={setShowPlaylist}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">لیست پادکست‌ها</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {mockPodcasts.map((podcast, index) => (
              <button
                key={podcast.id}
                onClick={() => selectPodcast(index)}
                className={`w-full text-right p-4 rounded-lg border transition-all hover:shadow-medium ${
                  index === currentPodcastIndex
                    ? "border-primary bg-primary/5 shadow-soft"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={podcast.imageUrl || "/placeholder.svg?height=60&width=60&query=podcast"}
                    alt={podcast.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg font-heading mb-1">{podcast.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{podcast.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
})

PodcastPlayer.displayName = "PodcastPlayer"
