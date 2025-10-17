"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Trash2, LinkIcon, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface PDFFile {
  id: string
  name: string
  url: string
  size: number
  uploadedAt: string
  assignedTo?: string
}

const PAGE_OPTIONS = [
  { value: "civil-family", label: "حقوق مدنی - خانواده" },
  { value: "civil-inheritance", label: "حقوق مدنی - ارث" },
  { value: "civil-commerce", label: "حقوق مدنی - تجارت" },
  { value: "civil-legal-entities", label: "حقوق مدنی - اشخاص حقوقی" },
  { value: "civil-official-documents", label: "حقوق مدنی - اسناد رسمی" },
  { value: "civil-execution", label: "حقوق مدنی - اجرای احکام" },
  { value: "civil-objection", label: "حقوق مدنی - اعتراض به احکام" },
  { value: "criminal-aggravated", label: "کیفری - جرایم تشدید شده" },
  { value: "criminal-diya", label: "کیفری - دیه" },
  { value: "criminal-complaint", label: "کیفری - نحوه ثبت شکایت" },
  { value: "criminal-procedure", label: "کیفری - رسیدگی کیفری" },
  { value: "criminal-objection", label: "کیفری - اعتراض به آراء کیفری" },
  { value: "comprehensive-water", label: "قانون جامع آب" },
  { value: "comprehensive-statistics", label: "قانون جامع آمار و سرشماری" },
  { value: "comprehensive-higher-education", label: "قانون جامع آموزش عالی" },
  { value: "comprehensive-education", label: "قانون جامع آموزش و پرورش" },
  { value: "comprehensive-civil-procedure", label: "قانون جامع آیین رسیدگی مدنی" },
  { value: "comprehensive-criminal-procedure", label: "قانون جامع آیین رسیدگی کیفری" },
  { value: "comprehensive-administrative", label: "قانون جامع اداری و استخدامی" },
  { value: "comprehensive-information", label: "قانون جامع اطلاعات و امنیت" },
  { value: "comprehensive-government-property", label: "قانون جامع اموال و معاملات دولتی" },
  { value: "comprehensive-judicial-affairs", label: "قانون جامع امور اداری و استخدامی قضات" },
  { value: "comprehensive-customs", label: "قانون جامع امور گمرکی" },
  { value: "comprehensive-agriculture", label: "قانون جامع امور کشاورزی" },
  { value: "comprehensive-elections", label: "قانون جامع انتخابات" },
  { value: "comprehensive-endowments", label: "قانون جامع اوقاف" },
  { value: "comprehensive-electricity", label: "قانون جامع برق و انرژی" },
  { value: "comprehensive-stock", label: "قانون جامع بورس" },
  { value: "comprehensive-insurance", label: "قانون جامع بیمه" },
  { value: "comprehensive-banking", label: "قانون جامع امور پولی و بانکی" },
  { value: "comprehensive-social-security", label: "قانون جامع تامین اجتماعی" },
  { value: "comprehensive-commerce", label: "قانون جامع تجارت" },
  { value: "comprehensive-cooperation", label: "قانون جامع تعاون" },
  { value: "comprehensive-government-penalties", label: "قانون جامع تعزیرات حکومتی" },
  { value: "comprehensive-civil-registration", label: "قانون جامع ثبت احوال" },
  { value: "comprehensive-property-registration", label: "قانون جامع ثبت اسناد و املاک" },
  { value: "comprehensive-company-registration", label: "قانون جامع ثبت شرکت‌ها" },
  { value: "comprehensive-family", label: "قانون جامع خانواده" },
  { value: "comprehensive-traffic", label: "قانون جامع راهنمایی و رانندگی" },
  { value: "comprehensive-media", label: "قانون جامع رسانه" },
  { value: "comprehensive-passport", label: "قانون جامع گذرنامه" },
  { value: "comprehensive-patents", label: "قانون جامع ثبت اختراعات" },
  { value: "comprehensive-civil", label: "قانون جامع مدنی و امور حسبی" },
  { value: "comprehensive-military-service", label: "قانون جامع نظام وظیفه" },
  { value: "comprehensive-labor", label: "قانون جامع کار" },
  { value: "comprehensive-import-export", label: "قانون جامع صادرات و واردات" },
  { value: "comprehensive-criminal", label: "قانون جامع کیفری" },
  { value: "superior-constitutional", label: "اسناد بالادستی - قوانین اساسی" },
  { value: "superior-program", label: "اسناد بالادستی - قوانین برنامه" },
  { value: "superior-budget", label: "اسناد بالادستی - قوانین بودجه" },
]

export default function PDFManager() {
  const [pdfFiles, setPdfFiles] = useState<PDFFile[]>([])
  const [selectedPage, setSelectedPage] = useState<string>("")
  const [selectedFile, setSelectedFile] = useState<string>("")
  const [uploadStatus, setUploadStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("pdfFiles")
    if (stored) {
      setPdfFiles(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    if (pdfFiles.length > 0) {
      localStorage.setItem("pdfFiles", JSON.stringify(pdfFiles))
    }
  }, [pdfFiles])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploadStatus(null)

    try {
      const newFiles: PDFFile[] = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]

        // Validate file type
        if (file.type !== "application/pdf") {
          setUploadStatus({ type: "error", message: "فقط فایل‌های PDF مجاز هستند" })
          continue
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
          setUploadStatus({ type: "error", message: "حجم فایل نباید بیشتر از 10 مگابایت باشد" })
          continue
        }

        // Convert file to base64 for storage
        const reader = new FileReader()
        const base64Promise = new Promise<string>((resolve) => {
          reader.onload = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })

        const base64 = await base64Promise

        const newFile: PDFFile = {
          id: `pdf-${Date.now()}-${i}`,
          name: file.name,
          url: base64,
          size: file.size,
          uploadedAt: new Date().toISOString(),
        }

        newFiles.push(newFile)
      }

      setPdfFiles((prev) => [...prev, ...newFiles])
      setUploadStatus({ type: "success", message: `${newFiles.length} فایل با موفقیت آپلود شد` })

      // Reset file input
      e.target.value = ""
    } catch (error) {
      console.error("[v0] Error uploading files:", error)
      setUploadStatus({ type: "error", message: "خطا در آپلود فایل" })
    }
  }

  const handleDeleteFile = (fileId: string) => {
    setPdfFiles((prev) => prev.filter((f) => f.id !== fileId))

    // Also remove assignments
    const assignments = JSON.parse(localStorage.getItem("pdfAssignments") || "{}")
    Object.keys(assignments).forEach((key) => {
      if (assignments[key] === fileId) {
        delete assignments[key]
      }
    })
    localStorage.setItem("pdfAssignments", JSON.stringify(assignments))

    setUploadStatus({ type: "success", message: "فایل با موفقیت حذف شد" })
  }

  const handleAssignPDF = () => {
    if (!selectedPage || !selectedFile) {
      setUploadStatus({ type: "error", message: "لطفاً صفحه و فایل را انتخاب کنید" })
      return
    }

    // Store assignment in localStorage
    const assignments = JSON.parse(localStorage.getItem("pdfAssignments") || "{}")
    assignments[selectedPage] = selectedFile
    localStorage.setItem("pdfAssignments", JSON.stringify(assignments))

    // Update file's assignedTo property
    setPdfFiles((prev) => prev.map((file) => (file.id === selectedFile ? { ...file, assignedTo: selectedPage } : file)))

    setUploadStatus({ type: "success", message: "فایل با موفقیت به صفحه اختصاص داده شد" })
    setSelectedPage("")
    setSelectedFile("")
  }

  const handleRemoveAssignment = (fileId: string) => {
    const assignments = JSON.parse(localStorage.getItem("pdfAssignments") || "{}")
    const pageKey = Object.keys(assignments).find((key) => assignments[key] === fileId)

    if (pageKey) {
      delete assignments[pageKey]
      localStorage.setItem("pdfAssignments", JSON.stringify(assignments))
    }

    setPdfFiles((prev) => prev.map((file) => (file.id === fileId ? { ...file, assignedTo: undefined } : file)))

    setUploadStatus({ type: "success", message: "اختصاص فایل حذف شد" })
  }

  const getPageLabel = (pageValue: string) => {
    return PAGE_OPTIONS.find((opt) => opt.value === pageValue)?.label || pageValue
  }

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-heading">
            <Upload className="h-5 w-5 text-primary" />
            آپلود فایل PDF
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="pdf-upload" className="mb-2 block">
              انتخاب فایل‌های PDF (حداکثر 10 مگابایت)
            </Label>
            <Input
              id="pdf-upload"
              type="file"
              accept="application/pdf"
              multiple
              onChange={handleFileUpload}
              className="cursor-pointer"
            />
          </div>

          {uploadStatus && (
            <Alert variant={uploadStatus.type === "error" ? "destructive" : "default"}>
              <AlertDescription>{uploadStatus.message}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Assignment Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-heading">
            <LinkIcon className="h-5 w-5 text-primary" />
            اختصاص PDF به صفحات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="page-select" className="mb-2 block">
                انتخاب صفحه
              </Label>
              <Select value={selectedPage} onValueChange={setSelectedPage}>
                <SelectTrigger id="page-select">
                  <SelectValue placeholder="صفحه را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  {PAGE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="file-select" className="mb-2 block">
                انتخاب فایل PDF
              </Label>
              <Select value={selectedFile} onValueChange={setSelectedFile}>
                <SelectTrigger id="file-select">
                  <SelectValue placeholder="فایل را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  {pdfFiles.map((file) => (
                    <SelectItem key={file.id} value={file.id}>
                      {file.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleAssignPDF} disabled={!selectedPage || !selectedFile} className="w-full font-heading">
            اختصاص فایل به صفحه
          </Button>
        </CardContent>
      </Card>

      {/* Files List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-heading">
            <FileText className="h-5 w-5 text-primary" />
            فایل‌های آپلود شده ({pdfFiles.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {pdfFiles.length === 0 ? (
            <div className="py-12 text-center">
              <FileText className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
              <p className="text-muted-foreground">هیچ فایلی آپلود نشده است</p>
            </div>
          ) : (
            <div className="space-y-3">
              {pdfFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB •{" "}
                          {new Date(file.uploadedAt).toLocaleDateString("fa-IR")}
                        </p>
                        {file.assignedTo && (
                          <Badge variant="secondary" className="mt-1">
                            {getPageLabel(file.assignedTo)}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {file.assignedTo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveAssignment(file.id)}
                        className="text-orange-600 hover:text-orange-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteFile(file.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
