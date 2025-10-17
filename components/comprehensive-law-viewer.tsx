"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, Printer, ZoomIn, ZoomOut } from "lucide-react"

interface ComprehensiveLawViewerProps {
  title: string
  description: string
  pdfUrl?: string
  pageKey?: string
}

export default function ComprehensiveLawViewer({ title, description, pdfUrl, pageKey }: ComprehensiveLawViewerProps) {
  const [zoom, setZoom] = useState(100)
  const [assignedPdfUrl, setAssignedPdfUrl] = useState<string | null>(null)

  useEffect(() => {
    if (pageKey) {
      const assignments = JSON.parse(localStorage.getItem("pdfAssignments") || "{}")
      const fileId = assignments[pageKey]

      if (fileId) {
        const files = JSON.parse(localStorage.getItem("pdfFiles") || "[]")
        const file = files.find((f: any) => f.id === fileId)
        if (file) {
          setAssignedPdfUrl(file.url)
        }
      }
    }
  }, [pageKey])

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 10, 200))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 10, 50))

  const displayPdfUrl = assignedPdfUrl || pdfUrl

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-heading text-foreground md:text-5xl text-right">{title}</h1>
          <p className="text-lg text-muted-foreground text-right leading-relaxed">{description}</p>
        </div>

        {/* Description Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 text-right">
                <h2 className="mb-2 text-xl font-heading text-foreground">درباره این مجموعه قوانین</h2>
                <p className="text-muted-foreground leading-relaxed">
                  این مجموعه شامل تمامی قوانین، مقررات، آیین‌نامه‌ها و دستورالعمل‌های مرتبط با {title} می‌باشد. برای مشاهده
                  متن کامل قوانین، از بخش مشاهده اسناد استفاده نمایید.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PDF Viewer Controls */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card p-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleZoomOut} className="font-heading bg-transparent">
              <ZoomOut className="ml-2 h-4 w-4" />
              کوچک‌تر
            </Button>
            <Button variant="outline" size="sm" onClick={handleZoomIn} className="font-heading bg-transparent">
              <ZoomIn className="ml-2 h-4 w-4" />
              بزرگ‌تر
            </Button>
            <span className="flex items-center px-3 text-sm text-muted-foreground">{zoom}%</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="font-heading bg-transparent">
              <Download className="ml-2 h-4 w-4" />
              دانلود
            </Button>
            <Button variant="outline" size="sm" className="font-heading bg-transparent">
              <Printer className="ml-2 h-4 w-4" />
              چاپ
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <Card>
          <CardContent className="p-0">
            <div className="relative min-h-[800px] w-full overflow-hidden rounded-lg bg-muted/30">
              {displayPdfUrl ? (
                <iframe
                  src={displayPdfUrl}
                  className="h-[800px] w-full border-0"
                  style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
                  title={title}
                />
              ) : (
                <div className="flex h-[800px] items-center justify-center">
                  <div className="text-center">
                    <FileText className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                    <p className="text-lg font-heading text-muted-foreground">فایل PDF در حال حاضر در دسترس نیست</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      لطفاً بعداً مراجعه فرمایید یا با پشتیبانی تماس بگیرید
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="mb-4 text-xl font-heading text-foreground text-right">راهنمای استفاده</h3>
            <ul className="space-y-2 text-right text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>برای بزرگ‌نمایی یا کوچک‌نمایی متن از دکمه‌های بالای صفحه استفاده کنید</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>می‌توانید فایل PDF را دانلود کرده یا چاپ نمایید</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>برای جستجو در متن قانون از قابلیت جستجوی مرورگر خود استفاده کنید</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
