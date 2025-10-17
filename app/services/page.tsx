import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, FileText, Users, Shield, Briefcase, Home, Gavel } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">اینتل ایکس</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/services" className="text-sm font-medium text-foreground transition-colors">
              خدمات
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              تعرفه
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              درباره ما
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              تماس
            </Link>
          </nav>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">دریافت مشاوره</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-20 md:px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl">
              خدمات مشاوره حقوقی تخصصی
            </h1>
            <p className="text-lg text-pretty text-muted-foreground">
              ارائه خدمات حقوقی جامع در تمامی زمینه‌ها توسط وکلای مجرب و متخصص
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20 md:px-6">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "حقوق خانواده",
                description: "مشاوره و وکالت در امور طلاق، نفقه، حضانت، مهریه و سایر مسائل خانوادگی",
                features: ["طلاق توافقی و غیابی", "تعیین نفقه", "حضانت فرزندان", "تقسیم اموال"],
              },
              {
                icon: Gavel,
                title: "حقوق کیفری",
                description: "دفاع تخصصی در پرونده‌های کیفری و جرائم مختلف در دادگاه‌های کیفری",
                features: ["دفاع در دادگاه", "تنظیم لوایح دفاعیه", "پیگیری پرونده", "درخواست تخفیف مجازات"],
              },
              {
                icon: Briefcase,
                title: "حقوق تجاری",
                description: "مشاوره در قراردادها، ثبت شرکت، معاملات تجاری و حل اختلافات تجاری",
                features: ["تنظیم قراردادهای تجاری", "ثبت شرکت", "حل اختلافات تجاری", "مشاوره سرمایه‌گذاری"],
              },
              {
                icon: Home,
                title: "حقوق ملکی",
                description: "مشاوره در خرید و فروش، اجاره، مالکیت و سایر مسائل مربوط به املاک",
                features: ["خرید و فروش ملک", "قراردادهای اجاره", "اختلافات ملکی", "تنظیم سند"],
              },
              {
                icon: FileText,
                title: "حقوق کار",
                description: "مشاوره در روابط کارگر و کارفرما، قراردادهای کار و حقوق بیمه",
                features: ["قراردادهای کار", "اخراج و بازخرید", "حقوق بیمه", "اختلافات کارگری"],
              },
              {
                icon: Scale,
                title: "حقوق مدنی",
                description: "مشاوره در دعاوی مدنی، قراردادها، چک و سفته و سایر امور مدنی",
                features: ["دعاوی مدنی", "چک و سفته", "قراردادها", "خسارات"],
              },
              {
                icon: Shield,
                title: "حقوق بیمه",
                description: "مشاوره در مسائل بیمه‌ای، دریافت خسارت و اختلافات با شرکت‌های بیمه",
                features: ["دریافت خسارت بیمه", "اختلافات بیمه‌ای", "بیمه عمر و درمان", "بیمه اتومبیل"],
              },
              {
                icon: Briefcase,
                title: "حقوق ثبتی",
                description: "مشاوره در امور ثبت اسناد، املاک، شرکت‌ها و علائم تجاری",
                features: ["ثبت املاک", "ثبت شرکت", "ثبت علائم تجاری", "اسناد رسمی"],
              },
              {
                icon: FileText,
                title: "تنظیم لوایح حقوقی",
                description: "تنظیم انواع دادخواست، شکواییه، اظهارنامه و اعتراض به رای با کمترین قیمت",
                features: ["دادخواست حقوقی", "شکواییه", "اظهارنامه", "اعتراض به رای"],
              },
            ].map((service, index) => (
              <Card key={index} className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <service.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-3 text-xl font-bold text-card-foreground">{service.title}</h3>
                  <p className="mb-4 text-sm text-pretty text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-card-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/30 px-4 py-20 md:px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance text-foreground md:text-4xl">
              آماده ارائه خدمات به شما هستیم
            </h2>
            <p className="mb-8 text-lg text-pretty text-muted-foreground">
              برای دریافت مشاوره رایگان و اطلاعات بیشتر با ما تماس بگیرید
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                  درخواست مشاوره
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  مشاهده تعرفه‌ها
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-4 py-12 md:px-6">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="mb-4 flex items-center gap-2">
                <Scale className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">اینتل ایکس</span>
              </Link>
              <p className="text-sm text-pretty text-muted-foreground">
                پلتفرم مشاوره حقوقی آنلاین تحت قوانین جمهوری اسلامی ایران
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-foreground">خدمات</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services" className="transition-colors hover:text-foreground">
                    تمام خدمات
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="transition-colors hover:text-foreground">
                    تعرفه‌ها
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-foreground">
                    درخواست مشاوره
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-foreground">شرکت</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="transition-colors hover:text-foreground">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-foreground">
                    تماس با ما
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-foreground">قوانین</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="transition-colors hover:text-foreground">
                    حریم خصوصی
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="transition-colors hover:text-foreground">
                    شرایط استفاده
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© ۱۴۰۳ اینتل ایکس. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
