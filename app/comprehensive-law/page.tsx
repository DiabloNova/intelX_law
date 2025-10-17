"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Scale,
  Briefcase,
  Home,
  Users,
  Building2,
  Gavel,
  Shield,
  BookOpen,
  Droplet,
  BarChart3,
  GraduationCap,
  School,
  FileCheck,
  UserCog,
  Lock,
  Landmark,
  Vote,
  Zap,
  TrendingUp,
  Wallet,
  HandshakeIcon,
  AlertTriangle,
  Award as IdCard,
  FileSignature,
  Building,
  Heart,
  Car,
  Radio,
  Plane,
  Lightbulb,
  Flag,
  Package,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ComprehensiveLawsPage() {
  const [activeTab, setActiveTab] = useState("comprehensive")

  const comprehensiveLaws = [
    { title: "قانون جامع آب", slug: "water", icon: Droplet, color: "text-blue-600", bgColor: "bg-blue-50" },
    {
      title: "قانون جامع آمار و سرشماری",
      slug: "statistics",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "قانون جامع آموزش عالی، پژوهش و فناوری",
      slug: "higher-education",
      icon: GraduationCap,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "قانون جامع آموزش و پرورش",
      slug: "education",
      icon: School,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      title: "قانون جامع آیین رسیدگی مدنی و اداری",
      slug: "civil-procedure",
      icon: FileCheck,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "قانون جامع آیین رسیدگی کیفری",
      slug: "criminal-procedure",
      icon: Gavel,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "قانون جامع اداری و استخدامی",
      slug: "administrative",
      icon: UserCog,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
    {
      title: "قانون جامع اطلاعات و امنیت",
      slug: "information-security",
      icon: Lock,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
    },
    {
      title: "قانون جامع اموال و معاملات دولتی",
      slug: "government-property",
      icon: Landmark,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "قانون جامع امور اداری و استخدامی قضات",
      slug: "judicial-affairs",
      icon: Scale,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      title: "قانون جامع امور گمرکی",
      slug: "customs",
      icon: Package,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "قانون جامع امور کشاورزی، روستایی و عشایری",
      slug: "agriculture",
      icon: Landmark,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    { title: "قانون جامع انتخابات", slug: "elections", icon: Vote, color: "text-blue-600", bgColor: "bg-blue-50" },
    {
      title: "قانون جامع اوقاف، اماکن دینی و امور مذهبی",
      slug: "endowments",
      icon: Building,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "قانون جامع برق و انرژی های نوین",
      slug: "energy",
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "قانون جامع بورس",
      slug: "stock-exchange",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    { title: "قانون جامع بیمه", slug: "insurance", icon: Shield, color: "text-cyan-600", bgColor: "bg-cyan-50" },
    {
      title: "قانون جامع امور پولی و بانکی",
      slug: "banking",
      icon: Wallet,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "قانون جامع تامین اجتماعی",
      slug: "social-security",
      icon: Heart,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
    { title: "قانون جامع تجارت", slug: "commerce", icon: Briefcase, color: "text-blue-600", bgColor: "bg-blue-50" },
    {
      title: "قانون جامع تعاون",
      slug: "cooperation",
      icon: HandshakeIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "قانون جامع تعزیرات حکومتی",
      slug: "government-penalties",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "قانون جامع ثبت احوال",
      slug: "civil-registration",
      icon: IdCard,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "قانون جامع ثبت اسناد و املاک",
      slug: "property-registration",
      icon: FileSignature,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      title: "قانون جامع ثبت شرکت ها و موسسات غیر تجاری",
      slug: "company-registration",
      icon: Building2,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
    },
    { title: "قانون جامع خانواده", slug: "family", icon: Home, color: "text-pink-600", bgColor: "bg-pink-50" },
    {
      title: "قانون جامع راهنمایی و رانندگی",
      slug: "traffic",
      icon: Car,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
    { title: "قانون جامع رسانه", slug: "media", icon: Radio, color: "text-purple-600", bgColor: "bg-purple-50" },
    { title: "قانون جامع گذرنامه", slug: "passport", icon: Plane, color: "text-blue-600", bgColor: "bg-blue-50" },
    {
      title: "قانون جامع ثبت اختراعات و مالکیت فکری",
      slug: "intellectual-property",
      icon: Lightbulb,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "قانون جامع مدنی و امور حسبی",
      slug: "civil-probate",
      icon: Scale,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "قانون جامع نظام وظیفه",
      slug: "military-service",
      icon: Flag,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    { title: "قانون جامع کار", slug: "labor", icon: Users, color: "text-orange-600", bgColor: "bg-orange-50" },
    {
      title: "قانون جامع صادرات و واردات",
      slug: "import-export",
      icon: Package,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    { title: "قانون جامع کیفری", slug: "criminal", icon: Gavel, color: "text-red-600", bgColor: "bg-red-50" },
  ]

  const superiorDocuments = [
    {
      title: "مجموعه قوانین اساسی",
      slug: "constitutional",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "قانون اساسی جمهوری اسلامی ایران و اصلاحیه‌های آن",
    },
    {
      title: "مجموعه قوانین برنامه",
      slug: "program",
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "قوانین برنامه‌های توسعه اقتصادی، اجتماعی و فرهنگی کشور",
    },
    {
      title: "مجموعه قوانین بودجه",
      slug: "budget",
      icon: Wallet,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "قوانین بودجه سالانه کل کشور",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-heading text-foreground md:text-5xl">قوانین جامع</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            دسترسی سریع به مجموعه کامل قوانین و مقررات جمهوری اسلامی ایران در دسته‌بندی‌های مختلف
          </p>
        </div>

        <div className="mb-8">
          {/* Mobile Select */}
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 font-heading text-base sm:hidden"
          >
            <option value="comprehensive">قوانین جامع</option>
            <option value="superior">اسناد بالادستی</option>
          </select>

          {/* Desktop Tabs */}
          <div className="hidden sm:flex gap-2 border-b border-border">
            <button
              onClick={() => setActiveTab("comprehensive")}
              className={`px-6 py-3 font-heading text-base transition-colors ${
                activeTab === "comprehensive"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              قوانین جامع
            </button>
            <button
              onClick={() => setActiveTab("superior")}
              className={`px-6 py-3 font-heading text-base transition-colors ${
                activeTab === "superior"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              اسناد بالادستی
            </button>
          </div>
        </div>

        {activeTab === "comprehensive" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {comprehensiveLaws.map((law, index) => {
              const Icon = law.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden transition-all duration-300 hover:shadow-strong hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 ${law.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <CardHeader className="relative">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${law.bgColor}`}>
                      <Icon className={`h-6 w-6 ${law.color}`} />
                    </div>
                    <CardTitle className="font-heading text-right text-lg">{law.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <Link href={`/comprehensive-laws/${law.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full font-heading transition-colors group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                      >
                        مشاهده قوانین
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {activeTab === "superior" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {superiorDocuments.map((doc, index) => {
              const Icon = doc.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden transition-all duration-300 hover:shadow-strong hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 ${doc.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <CardHeader className="relative">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${doc.bgColor}`}>
                      <Icon className={`h-6 w-6 ${doc.color}`} />
                    </div>
                    <CardTitle className="font-heading text-right text-xl">{doc.title}</CardTitle>
                    <CardDescription className="text-right text-sm leading-relaxed">{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <Link href={`/superior-documents/${doc.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full font-heading transition-colors group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                      >
                        مشاهده اسناد
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {/* Additional Info Section */}
        <div className="mt-16 rounded-lg border border-border bg-card p-8 text-center shadow-soft">
          <h2 className="mb-4 text-2xl font-heading text-foreground">نیاز به مشاوره حقوقی دارید؟</h2>
          <p className="mb-6 text-muted-foreground">
            تیم متخصص ما آماده است تا در تمامی زمینه‌های حقوقی به شما مشاوره دهد
          </p>
          <Link href="/contact">
            <Button size="lg" className="font-heading">
              درخواست مشاوره
            </Button>
          </Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
