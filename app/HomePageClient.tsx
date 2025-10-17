"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Scale,
  Shield,
  Clock,
  CheckCircle2,
  Users,
  FileText,
  Phone,
  Mail,
  Sparkles,
  BookOpen,
  Send,
} from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PodcastPlayer } from "@/components/podcast-player"
import { PodcastPopup } from "@/components/podcast-popup"
import { useRef } from "react"
import type { PodcastPlayerRef } from "@/components/podcast-player"
import { FloatingActions } from "@/components/floating-actions"

export default function HomePageClient() {
  const podcastPlayerRef = useRef<PodcastPlayerRef>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 bg-background">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.9 0.01 85) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.9 0.01 85) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Site Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-20 md:px-6 md:py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-tight text-balance text-foreground md:text-6xl lg:text-7xl font-heading animate-fade-in">
              مشاوره حقوقی تخصصی
              <span className="text-primary font-heading"> آنلاین</span>
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl lg:text-2xl max-w-3xl mx-auto animate-fade-in-delay">
              دسترسی سریع و آسان به وکلای متخصص در تمامی زمینه‌های حقوقی تحت قوانین جمهوری اسلامی ایران
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-delay-2">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto ripple-effect touch-target transition-smooth hover:shadow-strong hover:scale-105 focus-enhanced text-base md:text-lg px-8 py-6 font-heading"
                >
                  شروع مشاوره رایگان
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent ripple-effect touch-target transition-smooth hover:shadow-medium hover:scale-105 focus-enhanced text-base md:text-lg px-8 py-6 font-heading"
                >
                  مشاهده تعرفه‌ها
                </Button>
              </Link>
            </div>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm md:text-base text-muted-foreground animate-fade-in-delay-3">
              <div className="flex items-center gap-3 transition-smooth hover:text-foreground hover:scale-105">
                <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="font-medium">پاسخگویی ۲۴ ساعته</span>
              </div>
              <div className="flex items-center gap-3 transition-smooth hover:text-foreground hover:scale-105">
                <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="font-medium">وکلای مجرب</span>
              </div>
              <div className="flex items-center gap-3 transition-smooth hover:text-foreground hover:scale-105">
                <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="font-medium">محرمانگی کامل</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Legal Assistant Section */}
      <section className="relative z-10 px-4 py-20 md:px-6 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-primary/20 bg-card/95 backdrop-blur-sm shadow-strong hover:shadow-extra-strong transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
              <CardContent className="relative p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                    <Sparkles className="h-16 w-16 text-primary relative z-10 animate-bounce-slow" />
                  </div>
                </div>
                <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-center text-balance text-foreground font-heading">
                  اولین هوش مصنوعی حقوقدان کشور
                </h2>
                <p className="mb-10 text-base md:text-lg leading-relaxed text-center text-pretty text-muted-foreground max-w-3xl mx-auto">
                  اینتل ایکس برای اولین بار در کشور اقدام به آموزش هوش مصنوعی گوگل برای کسب مهارت در تمام مسائل حقوقی و
                  قانونی کشور و ارائه آن به شما هموطنان گرامی کرده است. برای مطالعه مستندات مربوط به این برنامه و یا
                  استفاده از آن از بخش زیر اقدام نمایید
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/ai-documentation" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full group relative overflow-hidden border-2 border-primary/30 hover:border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base md:text-lg px-8 py-6 font-heading shadow-medium hover:shadow-strong"
                    >
                      <BookOpen className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                      <span>مستندات برنامه</span>
                    </Button>
                  </Link>
                  <Link href="/ai-request" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground transition-all duration-300 text-base md:text-lg px-8 py-6 font-heading shadow-strong hover:shadow-extra-strong hover:scale-105"
                    >
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      <span>ثبت درخواست</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Podcast Player Section */}
      <section className="relative z-10 px-4 py-20 md:px-6 md:py-24">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-balance text-foreground md:text-4xl lg:text-5xl font-heading">
              پادکست‌های حقوقی اینتل ایکس
            </h2>
            <p className="text-lg md:text-xl text-pretty text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              گوش دادن به آخرین مباحث حقوقی و قانونی کشور
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <PodcastPlayer ref={podcastPlayerRef} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 bg-secondary/30 px-4 py-20 md:px-6 md:py-24">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-balance text-foreground md:text-4xl lg:text-5xl font-heading">
              خدمات مشاوره حقوقی
            </h2>
            <p className="text-lg md:text-xl text-pretty text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ارائه خدمات تخصصی در تمامی زمینه‌های حقوقی
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {[
              {
                icon: FileText,
                title: "حقوق خانواده",
                description: "مشاوره در امور طلاق، نفقه، حضانت و مهریه",
                link: "/civil-law#family",
              },
              {
                icon: Scale,
                title: "حقوق کیفری",
                description: "دفاع در پرونده‌های کیفری و جرائم مختلف",
                link: "/criminal-law#crimes",
              },
              {
                icon: Users,
                title: "حقوق تجاری",
                description: "مشاوره در قراردادها، شرکت‌ها و معاملات تجاری",
                link: "/civil-law#commerce",
              },
              {
                icon: Shield,
                title: "حقوق ملکی",
                description: "مشاوره در خرید و فروش، اجاره و مالکیت",
                link: "/civil-law#official-documents",
              },
              {
                icon: FileText,
                title: "حقوق کار",
                description: "مشاوره در روابط کارگر و کارفرما",
                link: "/civil-law#legal-entities",
              },
              {
                icon: Scale,
                title: "حقوق مدنی",
                description: "مشاوره در دعاوی مدنی و قراردادها",
                link: "/civil-law#family",
              },
            ].map((service, index) => (
              <Link key={index} href={service.link}>
                <Card
                  className="border-border bg-card hover-lift shadow-soft hover:shadow-medium transition-smooth group cursor-pointer h-full"
                  role="article"
                  aria-label={service.title}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <service.icon
                        className="h-8 w-8 text-primary group-hover:scale-110 transition-smooth"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mb-3 text-xl md:text-2xl font-bold text-card-foreground font-heading">
                      {service.title}
                    </h3>
                    <p className="text-pretty text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative z-10 px-4 py-20 md:px-6 md:py-24">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-balance text-foreground md:text-4xl lg:text-5xl font-heading">
              فرآیند دریافت مشاوره
            </h2>
            <p className="text-lg md:text-xl text-pretty text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              در سه گام ساده به مشاوره حقوقی دسترسی پیدا کنید
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {[
              {
                number: "۱",
                title: "ثبت درخواست",
                description: "موضوع حقوقی خود را به صورت خلاصه برای ما ارسال کنید",
              },
              {
                number: "۲",
                title: "تماس مشاوران متخصص با شما",
                description: "مشاوران متخصص ما در اسرع وقت با شما تماس می‌گیرند",
              },
              {
                number: "۳",
                title: "دریافت مشاوره",
                description: "از طریق تماس تلفنی یا حضوری مشاوره تخصصی دریافت کنید",
              },
            ].map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground shadow-medium group-hover:shadow-strong transition-smooth hover-scale font-heading">
                  {step.number}
                </div>
                <h3 className="mb-4 text-xl md:text-2xl font-bold text-foreground font-heading">{step.title}</h3>
                <p className="text-pretty text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-secondary/30 px-4 py-20 md:px-6 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-balance text-foreground md:text-4xl lg:text-5xl font-heading">
                چرا اینتل ایکس؟
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: Shield,
                    title: "امنیت و محرمانگی",
                    description: "تمامی اطلاعات شما کاملاً محرمانه و امن نگهداری می‌شود",
                  },
                  {
                    icon: Clock,
                    title: "پاسخگویی سریع",
                    description: "دسترسی به وکلا در کمتر از ۲۴ ساعت",
                  },
                  {
                    icon: Users,
                    title: "وکلای متخصص",
                    description: "تیمی از وکلای مجرب با سابقه درخشان",
                  },
                  {
                    icon: CheckCircle2,
                    title: "قیمت مناسب",
                    description: "تعرفه‌های شفاف و رقابتی",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth shadow-soft">
                        <feature.icon
                          className="h-7 w-7 text-primary group-hover:scale-110 transition-smooth"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg md:text-xl font-bold text-foreground font-heading">
                        {feature.title}
                      </h3>
                      <p className="text-pretty text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full border-border bg-card p-8 md:p-10 shadow-strong hover-lift">
                <CardContent className="space-y-8 p-0">
                  <div className="text-center">
                    <div className="mx-auto mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10">
                      <Scale className="h-10 w-10 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="mb-4 text-2xl md:text-3xl font-bold text-card-foreground font-heading">
                      مشاوره رایگان ۱۵ دقیقه‌ای
                    </h3>
                    <p className="text-pretty text-muted-foreground leading-relaxed text-base md:text-lg">
                      برای آشنایی با خدمات ما، اولین مشاوره را رایگان دریافت کنید
                    </p>
                  </div>
                  <Link href="/contact">
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 ripple-effect touch-target transition-smooth hover:shadow-medium focus-enhanced text-base md:text-lg py-6 font-heading"
                      size="lg"
                    >
                      درخواست مشاوره رایگان
                    </Button>
                  </Link>
                  <p className="text-center text-sm text-muted-foreground">بدون نیاز به پرداخت هزینه</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-4 py-20 md:px-6 md:py-24">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-balance text-foreground md:text-4xl lg:text-5xl font-heading">
              تعرفه خدمات
            </h2>
            <p className="text-lg md:text-xl text-pretty text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              قیمت‌گذاری شفاف و منصفانه برای ثبت لوایح حقوقی
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {[
              {
                name: "تنظیم دادخواست حقوقی",
                price: "۲,۰۰۰,۰۰۰",
                description: "توسط وکیل متخصص",
                features: ["بررسی کامل پرونده", "تنظیم دادخواست حرفه‌ای", "مشاوره رایگان", "پشتیبانی تلفنی"],
              },
              {
                name: "تنظیم شکواییه",
                price: "۱,۰۰۰,۰۰۰",
                description: "با کمترین قیمت",
                features: ["تنظیم شکواییه استاندارد", "بررسی مدارک", "راهنمایی قانونی", "ارسال سریع"],
              },
              {
                name: "تنظیم اظهارنامه",
                price: "۱,۰۰۰,۰۰۰",
                description: "یا پاسخ به آن",
                features: ["تنظیم اظهارنامه", "پاسخ به اظهارنامه", "بررسی حقوقی", "مشاوره تخصصی"],
              },
              {
                name: "تنظیم اعتراض به رای",
                price: "۲,۰۰۰,۰۰۰",
                description: "با استدلال قوی",
                features: ["بررسی دقیق رای", "تنظیم اعتراض حرفه‌ای", "استدلال حقوقی قوی", "پیگیری پرونده"],
              },
              {
                name: "بررسی تخصصی پرونده",
                price: "۲ تا ۲۰ میلیون",
                description: "با گزارش کامل",
                features: [
                  "بررسی شرایط پرونده",
                  "ارائه راه‌حل",
                  "مواد قانونی مرتبط",
                  "دادنامه‌های مشابه",
                  "آرای وحدت رویه",
                  "گزارش مستند و کامل",
                ],
                popular: true,
              },
              {
                name: "مشاوره تلفنی",
                price: "۲۰۰,۰۰۰",
                description: "با وکیل متخصص",
                features: ["مشاوره تلفنی مستقیم", "پاسخگویی سریع", "راهنمایی حقوقی", "بدون محدودیت زمانی"],
              },
              {
                name: "وکالت جلسه اورژانسی",
                price: "۳,۰۰۰,۰۰۰",
                description: "برای یک جلسه",
                features: ["حضور در دادگاه", "دفاع تخصصی", "آماده‌سازی سریع", "پشتیبانی کامل"],
              },
              {
                name: "پرونده‌های خاص",
                price: "توافقی",
                description: "بر اساس پیچیدگی",
                features: ["بررسی اولیه رایگان", "قیمت‌گذاری منصفانه", "مشاوره تخصصی", "پیگیری کامل"],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative border-border bg-card hover-lift shadow-soft hover:shadow-medium transition-smooth group ${
                  plan.popular ? "border-2 border-primary shadow-medium" : ""
                }`}
                role="article"
                aria-label={plan.name}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-2 text-sm font-bold text-primary-foreground shadow-medium font-heading">
                    محبوب‌ترین
                  </div>
                )}
                <CardContent className="p-8 md:p-12">
                  <h3 className="mb-3 text-xl md:text-2xl font-bold text-card-foreground font-heading">{plan.name}</h3>
                  <div className="mb-3">
                    <span className="text-3xl md:text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-base"> تومان</span>
                  </div>
                  <p className="mb-8 text-sm md:text-base text-muted-foreground">{plan.description}</p>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm md:text-base text-card-foreground"
                      >
                        <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className={`w-full ripple-effect touch-target transition-smooth hover:shadow-soft focus-enhanced font-heading ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      درخواست خدمت
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 bg-secondary/30 px-4 py-20 md:px-6 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-balance text-foreground md:text-4xl lg:text-5xl font-heading">
              آماده پاسخگویی به شما هستیم
            </h2>
            <p className="mb-12 text-lg md:text-xl text-pretty text-muted-foreground leading-relaxed">
              برای دریافت مشاوره یا اطلاعات بیشتر با ما در تماس باشید
            </p>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
              <div className="flex items-center gap-4 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth shadow-soft">
                  <Phone className="h-7 w-7 text-primary group-hover:scale-110 transition-smooth" aria-hidden="true" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">تماس تلفنی</p>
                  <p className="font-bold text-foreground text-lg">۰۹۳۰۹۱۹۸۶۸۶</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth shadow-soft">
                  <Mail className="h-7 w-7 text-primary group-hover:scale-110 transition-smooth" aria-hidden="true" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">ایمیل</p>
                  <p className="font-bold text-foreground text-lg">info@intelx.ir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Popup */}
      <PodcastPopup
        onPlay={() => {
          const podcastSection = document.querySelector("[data-podcast-player]")
          if (podcastSection) {
            podcastSection.scrollIntoView({ behavior: "smooth", block: "center" })
          }
          setTimeout(() => {
            podcastPlayerRef.current?.play()
          }, 800)
        }}
      />

      {/* Floating Actions */}
      <FloatingActions />

      {/* Site Footer */}
      <SiteFooter />
    </div>
  )
}
