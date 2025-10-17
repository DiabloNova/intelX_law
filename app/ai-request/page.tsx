"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Brain, CheckCircle2, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AIRequestPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/ai-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          router.push("/")
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting request:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background" dir="rtl">
        <SiteHeader />
        <main className="container mx-auto px-4 py-20 md:px-6">
          <Card className="mx-auto max-w-2xl border-2 border-primary/20 shadow-strong">
            <CardContent className="p-12 text-center">
              <div className="mx-auto mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h2 className="mb-4 text-3xl font-bold font-heading">درخواست شما ثبت شد!</h2>
              <p className="text-lg text-muted-foreground">
                تیم ما در اسرع وقت با شما تماس خواهد گرفت. در حال انتقال به صفحه اصلی...
              </p>
            </CardContent>
          </Card>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mx-auto mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10">
              <Brain className="h-10 w-10 text-primary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl font-heading">
              درخواست استفاده از هوش مصنوعی حقوقی
            </h1>
            <p className="text-lg md:text-xl text-pretty text-muted-foreground leading-relaxed">
              لطفاً اطلاعات خود را وارد کنید تا تیم ما در اسرع وقت با شما تماس بگیرد
            </p>
          </div>

          {/* Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">فرم ثبت درخواست</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">نام *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="نام خود را وارد کنید"
                      className="text-right"
                      dir="rtl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">نام خانوادگی *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="نام خانوادگی خود را وارد کنید"
                      className="text-right"
                      dir="rtl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="text-left"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">شماره تماس *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="09123456789"
                    className="text-left"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">دلیل نیاز به استفاده از هوش مصنوعی حقوقی *</Label>
                  <Textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    placeholder="لطفاً دلیل نیاز خود به استفاده از هوش مصنوعی حقوقی را به طور مختصر توضیح دهید..."
                    className="min-h-[150px] text-right"
                    dir="rtl"
                  />
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    با ثبت این فرم، اطلاعات شما به صورت محرمانه نزد ما نگهداری می‌شود و تیم ما در اسرع وقت با شما تماس
                    خواهد گرفت.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                      در حال ارسال...
                    </>
                  ) : (
                    "ثبت درخواست"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
