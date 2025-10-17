"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PDFViewer } from "@/components/pdf-viewer"
import { AlertTriangle, DollarSign, FileText, Gavel, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function CriminalLawPage() {
  const [activeTab, setActiveTab] = useState("aggravated-crimes")

  const tabs = [
    {
      id: "aggravated-crimes",
      label: "جرایم تشدید شده",
      icon: AlertTriangle,
      description: "قوانین و مقررات مربوط به جرایم تشدید شده و مجازات‌های آنها",
      content:
        "جرایم تشدید شده جرایمی هستند که به دلیل شرایط خاص، مجازات سنگین‌تری دارند. این بخش شامل قوانین مربوط به جرایم علیه امنیت کشور، جرایم سازمان‌یافته، جرایم مسلحانه و سایر جرایم تشدید شده است. در این قسمت می‌توانید با قوانین و مجازات‌های این جرایم آشنا شوید.",
      pdfUrl: "/pdfs/criminal-law/aggravated-crimes.pdf",
    },
    {
      id: "diya",
      label: "دیه",
      icon: DollarSign,
      description: "قوانین دیه و خسارات جانی",
      content:
        "دیه خسارتی است که در قبال جنایات بر جان و اعضای بدن پرداخت می‌شود. این بخش شامل قوانین مربوط به میزان دیه، نحوه پرداخت آن، دیه اعضای بدن و سایر مسائل مربوط به دیه است. در این قسمت می‌توانید با جزئیات قوانین دیه آشنا شوید.",
      pdfUrl: "/pdfs/criminal-law/diya.pdf",
    },
    {
      id: "complaint-filing",
      label: "نحوه ثبت شکایت",
      icon: FileText,
      description: "راهنمای ثبت شکایت کیفری و مراحل آن",
      content:
        "ثبت شکایت کیفری اولین گام در پیگیری حقوقی جرایم است. این بخش شامل راهنمای کامل نحوه ثبت شکایت، مدارک مورد نیاز، مراجع صالح و مراحل رسیدگی به شکایت است. در این قسمت می‌توانید با فرآیند کامل ثبت شکایت آشنا شوید.",
      pdfUrl: "/pdfs/criminal-law/complaint-filing.pdf",
    },
    {
      id: "criminal-proceedings",
      label: "رسیدگی کیفری",
      icon: Gavel,
      description: "فرآیند رسیدگی به پرونده‌های کیفری",
      content:
        "رسیدگی کیفری فرآیندی است که طی آن دادگاه به اتهامات وارده رسیدگی می‌کند. این بخش شامل مراحل مختلف رسیدگی، حقوق متهم، نقش وکیل، شهود و سایر جوانب رسیدگی کیفری است. در این قسمت می‌توانید با فرآیند کامل رسیدگی کیفری آشنا شوید.",
      pdfUrl: "/pdfs/criminal-law/criminal-proceedings.pdf",
    },
    {
      id: "criminal-appeal",
      label: "اعتراض به آراء کیفری",
      icon: AlertCircle,
      description: "نحوه اعتراض به احکام کیفری و تجدیدنظر",
      content:
        "اعتراض به آراء کیفری حقی است که قانون برای متهم و شاکی قائل شده تا در صورت عدم رضایت از حکم صادره، بتوانند به آن اعتراض کنند. این بخش شامل قوانین مربوط به تجدیدنظرخواهی، فرجام‌خواهی و سایر طرق اعتراض به احکام کیفری است.",
      pdfUrl: "/pdfs/criminal-law/criminal-appeal.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 md:px-6">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-heading text-foreground md:text-5xl">حقوق کیفری</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            راهنمای جامع قوانین و مقررات حقوق کیفری جمهوری اسلامی ایران
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

              <PDFViewer
                title={`راهنمای ${tab.label}`}
                pdfUrl={tab.pdfUrl}
                description={`مطالعه کامل قوانین و مقررات ${tab.label}`}
              />
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
