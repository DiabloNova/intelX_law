"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, ZoomIn, ZoomOut, Search, List } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface LawTextViewerProps {
  title: string
  lawText: string
  description?: string
}

export function LawTextViewer({ title, lawText, description }: LawTextViewerProps) {
  const [fontSize, setFontSize] = useState(16)
  const [searchTerm, setSearchTerm] = useState("")
  const [showToc, setShowToc] = useState(false)

  // Extract table of contents from the law text
  const tableOfContents = useMemo(() => {
    const lines = lawText.split("\n")
    const toc: { title: string; id: string; level: number }[] = []

    lines.forEach((line, index) => {
      const trimmed = line.trim()
      // Match "باب" (Book), "فصل" (Chapter), "مبحث" (Section)
      if (trimmed.startsWith("باب ") || trimmed.startsWith("فصل ") || trimmed.startsWith("مبحث ")) {
        const level = trimmed.startsWith("باب ") ? 1 : trimmed.startsWith("فصل ") ? 2 : 3
        toc.push({
          title: trimmed,
          id: `section-${index}`,
          level,
        })
      }
    })

    return toc
  }, [lawText])

  // Format the law text with proper styling
  const formattedText = useMemo(() => {
    const lines = lawText.split("\n")
    return lines.map((line, index) => {
      const trimmed = line.trim()

      // Book titles (باب)
      if (trimmed.startsWith("باب ")) {
        return (
          <h2
            key={index}
            id={`section-${index}`}
            className="mb-4 mt-8 text-2xl font-heading text-primary"
            style={{ fontSize: `${fontSize * 1.5}px` }}
          >
            {trimmed}
          </h2>
        )
      }

      // Chapter titles (فصل)
      if (trimmed.startsWith("فصل ")) {
        return (
          <h3
            key={index}
            id={`section-${index}`}
            className="mb-3 mt-6 text-xl font-heading text-primary"
            style={{ fontSize: `${fontSize * 1.3}px` }}
          >
            {trimmed}
          </h3>
        )
      }

      // Section titles (مبحث)
      if (trimmed.startsWith("مبحث ")) {
        return (
          <h4
            key={index}
            id={`section-${index}`}
            className="mb-3 mt-5 text-lg font-heading text-primary"
            style={{ fontSize: `${fontSize * 1.2}px` }}
          >
            {trimmed}
          </h4>
        )
      }

      // Article titles (ماده)
      if (trimmed.startsWith("ماده ") || trimmed.match(/^ماده \d+/)) {
        return (
          <p
            key={index}
            className="mb-2 mt-4 font-heading font-bold text-foreground"
            style={{ fontSize: `${fontSize * 1.1}px` }}
          >
            {trimmed}
          </p>
        )
      }

      // Note titles (تبصره)
      if (trimmed.startsWith("تبصره")) {
        return (
          <p
            key={index}
            className="mb-2 mt-3 font-heading font-semibold text-muted-foreground"
            style={{ fontSize: `${fontSize}px` }}
          >
            {trimmed}
          </p>
        )
      }

      // Empty lines
      if (trimmed === "") {
        return <div key={index} className="h-2" />
      }

      // Regular text with search highlighting
      const highlightedText = searchTerm
        ? trimmed.split(new RegExp(`(${searchTerm})`, "gi")).map((part, i) =>
            part.toLowerCase() === searchTerm.toLowerCase() ? (
              <mark key={i} className="bg-yellow-300 dark:bg-yellow-700">
                {part}
              </mark>
            ) : (
              part
            ),
          )
        : trimmed

      return (
        <p key={index} className="mb-2 leading-relaxed text-foreground" style={{ fontSize: `${fontSize}px` }}>
          {highlightedText}
        </p>
      )
    })
  }, [lawText, fontSize, searchTerm])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setShowToc(false)
    }
  }

  return (
    <Card className="shadow-soft hover-lift">
      <CardHeader className="text-right">
        <CardTitle className="font-heading flex items-center justify-end gap-2">
          <span>{title}</span>
          <FileText className="h-5 w-5 text-primary" />
        </CardTitle>
        {description && <p className="text-right text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Reading tools */}
        <div className="flex flex-col gap-3 rounded-lg bg-muted p-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Font size controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFontSize(Math.max(12, fontSize - 2))}
              className="touch-target"
              aria-label="کوچک‌تر کردن متن"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{fontSize}px</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFontSize(Math.min(24, fontSize + 2))}
              className="touch-target"
              aria-label="بزرگ‌تر کردن متن"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          {/* Search and TOC */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="جستجو در متن..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>

            <Sheet open={showToc} onOpenChange={setShowToc}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="touch-target bg-transparent">
                  <List className="ml-2 h-4 w-4" />
                  فهرست
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-right font-heading">فهرست مطالب</SheetTitle>
                </SheetHeader>
                <ScrollArea className="mt-6 h-[calc(100vh-8rem)]">
                  <div className="space-y-2 pr-4">
                    {tableOfContents.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-right text-sm hover:text-primary ${
                          item.level === 1 ? "font-bold" : item.level === 2 ? "mr-4 font-semibold" : "mr-8"
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Law text content */}
        <div className="relative overflow-hidden rounded-lg border border-border bg-background">
          <ScrollArea className="h-[600px] p-6">
            <div className="mx-auto max-w-4xl text-right">{formattedText}</div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}
