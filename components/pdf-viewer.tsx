"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ZoomIn, ZoomOut } from "lucide-react"

interface PDFViewerProps {
  title: string
  pdfUrl: string
  description?: string
}

export function PDFViewer({ title, pdfUrl, description }: PDFViewerProps) {
  const [zoom, setZoom] = useState(100)

  return (
    <Card className="shadow-soft hover-lift">
      <CardHeader className="text-right">
        <CardTitle className="font-heading flex items-center justify-end gap-2">
          <span>{title}</span>
          <FileText className="h-5 w-5 text-primary" />
        </CardTitle>
        {description && <CardDescription className="text-right">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-2 rounded-lg bg-muted p-3">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setZoom(Math.max(50, zoom - 10))}
              className="touch-target"
              aria-label="کوچک‌تر کردن"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{zoom}%</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setZoom(Math.min(200, zoom + 10))}
              className="touch-target"
              aria-label="بزرگ‌تر کردن"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="default" size="sm" asChild className="ripple-effect font-heading">
            <a href={pdfUrl} download>
              <Download className="ml-2 h-4 w-4" />
              دانلود PDF
            </a>
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-border bg-muted/30">
          <iframe
            src={`${pdfUrl}#zoom=${zoom}`}
            className="h-[600px] w-full"
            title={title}
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
