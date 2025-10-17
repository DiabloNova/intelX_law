"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Scale, FileText, Gavel, Building2, FileCheck, Briefcase, Upload, X, Menu } from "lucide-react"
import Link from "next/link"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { useToast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter((file) => {
        if (file.size > 20 * 1024 * 1024) {
          toast({
            title: "خطا",
            description: `فایل ${file.name} بیشتر از ۲۰ مگابایت است`,
            variant: "destructive",
          })
          return false
        }
        return true
      })
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, category: string) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("category", category)

    files.forEach((file) => {
      formData.append("files", file)
    })

    try {
      const response = await fetch("/api/submit-request", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        toast({
          title: "موفقیت",
          description: "درخواست شما با موفقیت ارسال شد",
        })
        e.currentTarget.reset()
        setFiles([])
      } else {
        throw new Error("خطا در ارسال درخواست")
      }
    } catch (error) {
      toast({
        title: "خطا",
        description: "مشکلی در ارسال درخواست پیش آمد",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const categories = [
    { id: "civil", name: "حقوقی", icon: Scale, description: "دعاوی حقوقی و مدنی" },
    { id: "criminal", name: "کیفری", icon: Gavel, description: "پرونده‌های کیفری" },
    { id: "appeal", name: "اعتراض به آرای بدوی", icon: FileText, description: "اعتراض به رای دادگاه" },
    { id: "supreme", name: "پرونده‌های دیوان", icon: Building2, description: "دیوان عدالت اداری" },
    { id: "statement", name: "اظهارنامه", icon: FileCheck, description: "تنظیم اظهارنامه" },
    { id: "attorney", name: "قبول وکالت", icon: Briefcase, description: "درخواست وکالت" },
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="منو"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Link href="/" className="flex items-center gap-2 transition-smooth hover-scale">
              <Scale className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">اینتل ایکس</span>
            </Link>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground focus-enhanced"
            >
              صفحه اصلی
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground focus-enhanced"
            >
              خدمات
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground focus-enhanced"
            >
              تعرفه
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">پنل کاربری</h1>
              <p className="text-muted-foreground">درخواست خدمات حقوقی خود را ثبت کنید</p>
            </div>

            <Tabs defaultValue="civil" className="w-full" dir="rtl">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-muted/50 p-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-smooth"
                  >
                    <category.icon className="h-5 w-5" />
                    <span className="text-xs md:text-sm font-medium">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  <Card className="shadow-medium">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <category.icon className="h-7 w-7 text-primary" />
                        {category.name}
                      </CardTitle>
                      <CardDescription className="text-base">{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={(e) => handleSubmit(e, category.id)} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor={`title-${category.id}`} className="text-right block text-base font-medium">
                            عنوان درخواست <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id={`title-${category.id}`}
                            name="title"
                            required
                            placeholder="عنوان مختصری برای درخواست خود وارد کنید"
                            className="text-right touch-target"
                            dir="rtl"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor={`description-${category.id}`}
                            className="text-right block text-base font-medium"
                          >
                            شرح درخواست <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id={`description-${category.id}`}
                            name="description"
                            required
                            placeholder="لطفاً موضوع حقوقی خود را به طور کامل شرح دهید..."
                            className="min-h-[200px] text-right"
                            dir="rtl"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`phone-${category.id}`} className="text-right block text-base font-medium">
                            شماره تماس <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id={`phone-${category.id}`}
                            name="phone"
                            type="tel"
                            required
                            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                            className="text-right touch-target"
                            dir="rtl"
                          />
                        </div>

                        <div className="space-y-4">
                          <Label className="text-right block text-base font-medium">
                            پیوست فایل (حداکثر ۲۰ مگابایت)
                          </Label>
                          <div className="flex items-center gap-4">
                            <Button
                              type="button"
                              variant="outline"
                              className="touch-target bg-transparent"
                              onClick={() => document.getElementById(`file-${category.id}`)?.click()}
                            >
                              <Upload className="ml-2 h-5 w-5" />
                              انتخاب فایل
                            </Button>
                            <Input
                              id={`file-${category.id}`}
                              type="file"
                              multiple
                              onChange={handleFileChange}
                              className="hidden"
                              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            />
                            <span className="text-sm text-muted-foreground">
                              {files.length > 0 ? `${files.length} فایل انتخاب شده` : "فایلی انتخاب نشده"}
                            </span>
                          </div>

                          {files.length > 0 && (
                            <div className="space-y-2">
                              {files.map((file, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-3"
                                >
                                  <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-primary" />
                                    <div>
                                      <p className="text-sm font-medium">{file.name}</p>
                                      <p className="text-xs text-muted-foreground">
                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                      </p>
                                    </div>
                                  </div>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeFile(index)}
                                    className="h-8 w-8"
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 ripple-effect touch-target transition-smooth text-base py-6"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "در حال ارسال..." : "ارسال درخواست"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
