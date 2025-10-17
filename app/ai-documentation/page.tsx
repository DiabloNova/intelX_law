import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Brain, Database, Sparkles, ExternalLink, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "مستندات هوش مصنوعی حقوقی | اینتل ایکس",
  description: "اطلاعات کامل درباره هوش مصنوعی حقوقی اینتل ایکس - آموزش داده شده با Google Notebook و Open Notebook",
  keywords: "هوش مصنوعی حقوقی، Google Notebook، Open Notebook، مشاوره حقوقی هوشمند",
}

export default function AIDocumentationPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10">
            <Brain className="h-10 w-10 text-primary" />
          </div>
          <h1 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl font-heading">
            مستندات هوش مصنوعی حقوقی
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-pretty text-muted-foreground leading-relaxed">
            اینتل ایکس با استفاده از پیشرفته‌ترین تکنولوژی‌های هوش مصنوعی، اولین دستیار حقوقی هوشمند کشور را ارائه می‌دهد
          </p>
        </div>

        {/* Google Notebook Section */}
        <Card className="mb-8 shadow-medium hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl font-heading">
              <Sparkles className="h-8 w-8 text-primary" />
              Google Notebook LM
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Google Notebook LM یک ابزار هوش مصنوعی پیشرفته است که توسط گوگل توسعه یافته و قادر به تحلیل و پردازش اسناد
              حقوقی پیچیده است. این سیستم با استفاده از مدل‌های زبانی بزرگ (LLM)، قادر به درک عمیق متون حقوقی و ارائه
              پاسخ‌های دقیق و متناسب با قوانین ایران است.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-muted/50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-bold font-heading">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  قابلیت‌های کلیدی
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>تحلیل هوشمند اسناد حقوقی</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>پاسخگویی به سوالات تخصصی</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>خلاصه‌سازی متون پیچیده</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>ارجاع به منابع معتبر</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-muted/50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-bold font-heading">
                  <Database className="h-5 w-5 text-primary" />
                  داده‌های آموزشی
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>قوانین مدنی و کیفری ایران</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>آرای وحدت رویه دیوان عالی</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>نظریات مشورتی اداره حقوقی</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>رویه قضایی دادگاه‌ها</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button asChild variant="outline" className="w-full md:w-auto bg-transparent">
              <a
                href="https://notebooklm.google.com/notebook/f45f2f70-5ad1-41ef-985c-5abe54c6583e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                مشاهده Google Notebook
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Open Notebook Section */}
        <Card className="mb-8 shadow-medium hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl font-heading">
              <BookOpen className="h-8 w-8 text-primary" />
              Open Notebook
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Open Notebook یک جایگزین متن‌باز و متمرکز بر حریم خصوصی برای Google Notebook LM است. این پلتفرم به اینتل
              ایکس امکان می‌دهد تا کنترل کامل بر داده‌های حقوقی داشته باشد و از مدل‌های هوش مصنوعی مختلف استفاده کند.
            </p>

            <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
              <h3 className="mb-4 text-xl font-bold font-heading">مزایای Open Notebook</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">حریم خصوصی کامل</p>
                      <p className="text-sm text-muted-foreground">داده‌های شما کاملاً محرمانه و امن می‌ماند</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">انتخاب مدل هوش مصنوعی</p>
                      <p className="text-sm text-muted-foreground">پشتیبانی از 16+ ارائه‌دهنده مختلف</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">پردازش محتوای چندرسانه‌ای</p>
                      <p className="text-sm text-muted-foreground">PDF، ویدیو، صوت و صفحات وب</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">تولید پادکست حرفه‌ای</p>
                      <p className="text-sm text-muted-foreground">با قابلیت 1 تا 4 گوینده</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">API کامل</p>
                      <p className="text-sm text-muted-foreground">دسترسی برنامه‌نویسی به تمام قابلیت‌ها</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">متن‌باز و قابل سفارشی‌سازی</p>
                      <p className="text-sm text-muted-foreground">امکان توسعه و بهبود مستمر</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-muted/50 p-6">
              <h3 className="mb-4 text-xl font-bold font-heading">ویژگی‌های فنی</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="mb-2 font-semibold text-foreground">پلتفرم</p>
                  <p className="text-sm text-muted-foreground">Python, FastAPI, SurrealDB</p>
                </div>
                <div>
                  <p className="mb-2 font-semibold text-foreground">استقرار</p>
                  <p className="text-sm text-muted-foreground">Docker, Cloud, Local</p>
                </div>
                <div>
                  <p className="mb-2 font-semibold text-foreground">مدل‌های پشتیبانی شده</p>
                  <p className="text-sm text-muted-foreground">OpenAI, Anthropic, Ollama و...</p>
                </div>
              </div>
            </div>

            <Button asChild variant="outline" className="w-full md:w-auto bg-transparent">
              <a
                href="https://github.com/DiabloNova/open-notebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                مشاهده مستندات Open Notebook
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-8 shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-heading">نحوه عملکرد</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  ۱
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold font-heading">جمع‌آوری داده‌های حقوقی</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    تمامی قوانین، آرا، نظریات و رویه‌های قضایی ایران جمع‌آوری و سازماندهی می‌شود.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  ۲
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold font-heading">آموزش مدل هوش مصنوعی</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    مدل‌های هوش مصنوعی با استفاده از این داده‌ها آموزش داده می‌شوند تا بتوانند به سوالات حقوقی پاسخ دهند.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  ۳
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold font-heading">ارائه خدمات به کاربران</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    کاربران می‌توانند سوالات خود را مطرح کرده و پاسخ‌های دقیق و مستند دریافت کنند.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-strong">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold font-heading">
              آماده استفاده از هوش مصنوعی حقوقی هستید؟
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              برای دسترسی به این سرویس پیشرفته، درخواست خود را ثبت کنید
            </p>
            <Link href="/ai-request">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                ثبت درخواست استفاده از هوش مصنوعی
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>

      <SiteFooter />
    </div>
  )
}
