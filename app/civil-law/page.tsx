"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PDFViewer } from "@/components/pdf-viewer"
import { LawTextViewer } from "@/components/law-text-viewer"
import { Scale, Users, Building2, FileText, Gavel, AlertCircle, BookOpen } from "lucide-react"
import { useState, useEffect } from "react"

export default function CivilLawPage() {
  const [activeTab, setActiveTab] = useState("procedure-law")
  const [civilProcedureLawText, setCivilProcedureLawText] = useState("")

  useEffect(() => {
    fetch("/data/civil-procedure-law.txt")
      .then((res) => res.text())
      .then((text) => setCivilProcedureLawText(text))
      .catch((err) => console.error("[v0] Error loading law text:", err))
  }, [])

  const tabs = [
    {
      id: "procedure-law",
      label: "قانون آیین دادرسی",
      icon: BookOpen,
      description: "قانون آیین دادرسی دادگاههای عمومی و انقلاب در امور مدنی (مصوب 1379)",
      content:
        "قانون آیین دادرسی مدنی مجموعه اصول و مقرراتی است که در مقام رسیدگی به امور حسبی و کلیه دعاوی مدنی و بازرگانی در دادگاههای عمومی، انقلاب، تجدیدنظر، دیوان عالی کشور و سایر مراجع قضایی به کار می‌رود. این قانون در سال 1379 به تصویب مجلس شورای اسلامی رسیده و جایگزین قانون قدیمی مصوب 1318 شده است.",
      lawText: civilProcedureLawText,
    },
    {
      id: "family",
      label: "خانواده",
      icon: Users,
      description: "قوانین و مقررات مربوط به حقوق خانواده شامل ازدواج، طلاق، نفقه و حضانت",
      content:
        "حقوق خانواده یکی از مهم‌ترین شاخه‌های حقوق مدنی است که به روابط خانوادگی می‌پردازد. این بخش شامل قوانین مربوط به ازدواج، طلاق، نفقه، حضانت فرزندان، و سایر مسائل خانوادگی است. در این بخش می‌توانید با قوانین و مقررات مربوط به حقوق خانواده آشنا شوید.",
      pdfUrl: "/pdfs/civil-law/family.pdf",
    },
    {
      id: "inheritance",
      label: "ارث",
      icon: Scale,
      description: "قوانین ارث، تقسیم ترکه و حقوق وراث",
      content:
        "قوانین ارث در حقوق ایران بر اساس فقه اسلامی تنظیم شده است. این بخش شامل نحوه تقسیم ترکه، سهم‌الارث وراث، وصیت‌نامه و سایر مسائل مربوط به ارث است. در این قسمت می‌توانید با جزئیات قوانین ارث آشنا شوید.",
      pdfUrl: "/pdfs/civil-law/inheritance.pdf",
    },
    {
      id: "commerce",
      label: "تجارت",
      icon: Building2,
      description: "قوانین تجارت، شرکت‌ها و معاملات تجاری",
      content:
        "حقوق تجارت به روابط حقوقی بین تجار و معاملات تجاری می‌پردازد. این بخش شامل قوانین مربوط به شرکت‌های تجاری، اوراق تجاری، ورشکستگی و سایر مسائل تجاری است. در این قسمت می‌توانید با قوانین تجارت آشنا شوید.",
      pdfUrl: "/pdfs/civil-law/commerce.pdf",
    },
    {
      id: "legal-entities",
      label: "اشخاص حقوقی",
      icon: Building2,
      description: "قوانین مربوط به اشخاص حقوقی و شرکت‌ها",
      content:
        "اشخاص حقوقی نهادهایی هستند که دارای شخصیت حقوقی مستقل از اعضای خود می‌باشند. این بخش شامل قوانین مربوط به تأسیس، اداره و انحلال اشخاص حقوقی است. در این قسمت می‌توانید با قوانین اشخاص حقوقی آشنا شوید.",
      pdfUrl: "/pdfs/civil-law/legal-entities.pdf",
    },
    {
      id: "official-documents",
      label: "اسناد رسمی",
      icon: FileText,
      description: "قوانین مربوط به اسناد رسمی و دفاتر اسناد رسمی",
      content:
        "اسناد رسمی اسنادی هستند که توسط مأمورین رسمی دولت تنظیم می‌شوند و دارای اعتبار قانونی خاصی هستند. این بخش شامل قوانین مربوط به تنظیم اسناد رسمی، دفاتر اسناد رسمی و اعتبار این اسناد است.",
      pdfUrl: "/pdfs/civil-law/official-documents.pdf",
    },
    {
      id: "execution",
      label: "اجرای احکام",
      icon: Gavel,
      description: "قوانین و مقررات اجرای احکام مدنی",
      content:
        "اجرای احکام فرآیندی است که طی آن احکام صادره از دادگاه‌ها به مورد اجرا گذاشته می‌شود. این بخش شامل قوانین مربوط به نحوه اجرای احکام، توقیف اموال، حراج و سایر مسائل مربوط به اجرای احکام است.",
      pdfUrl: "/pdfs/civil-law/execution.pdf",
    },
    {
      id: "appeal",
      label: "اعتراض به احکام",
      icon: AlertCircle,
      description: "نحوه اعتراض به احکام مدنی و تجدیدنظر",
      content:
        "اعتراض به احکام حقی است که قانون برای طرفین دعوا قائل شده تا در صورت عدم رضایت از حکم صادره، بتوانند به آن اعتراض کنند. این بخش شامل قوانین مربوط به تجدیدنظرخواهی، فرجام‌خواهی و سایر طرق اعتراض به احکام است.",
      pdfUrl: "/pdfs/civil-law/appeal.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 md:px-6">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-heading text-foreground md:text-5xl">حقوق مدنی</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            راهنمای جامع قوانین و مقررات حقوق مدنی جمهوری اسلامی ایران
          </p>
        </div>

        <div className="mb-8">
          {/* Mobile dropdown */}
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              انتخاب بخش
            </label>
            <select
              id="tabs"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop tabs */}
          <ul className="hidden text-center text-sm font-heading text-gray-500 shadow-sm sm:flex dark:text-gray-400">
            {tabs.map((tab, index) => (
              <li key={tab.id} className="w-full focus-within:z-10">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-block w-full border-r border-gray-200 p-4 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-700 ${
                    activeTab === tab.id
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                      : "bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                  } ${index === 0 ? "rounded-s-lg" : ""} ${index === tabs.length - 1 ? "rounded-e-lg border-s-0" : ""}`}
                  aria-current={activeTab === tab.id ? "page" : undefined}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab content */}
        <div className="space-y-6">
          {tabs.map((tab) => (
            <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
              <Card className="shadow-soft">
                <CardHeader className="text-right">
                  <CardTitle className="font-heading flex items-center justify-end gap-2">
                    <span>{tab.label}</span>
                    <tab.icon className="h-6 w-6 text-primary" />
                  </CardTitle>
                  <CardDescription className="text-right text-base">{tab.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-right leading-relaxed text-foreground">{tab.content}</p>
                </CardContent>
              </Card>

              {tab.id === "procedure-law" ? (
                <LawTextViewer
                  title={`متن کامل ${tab.label}`}
                  lawText={tab.lawText || ""}
                  description="مطالعه کامل قانون آیین دادرسی مدنی با امکان جستجو و تنظیم اندازه متن"
                />
              ) : (
                <PDFViewer
                  title={`راهنمای ${tab.label}`}
                  pdfUrl={tab.pdfUrl || ""}
                  description={`مطالعه کامل قوانین و مقررات ${tab.label}`}
                />
              )}
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
