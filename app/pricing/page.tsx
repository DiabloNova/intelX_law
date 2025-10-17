import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
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
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              خدمات
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-foreground transition-colors">
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
            <h1 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl">تعرفه خدمات حقوقی</h1>
            <p className="text-lg text-pretty text-muted-foreground">
              قیمت‌گذاری شفاف و منصفانه برای تمامی خدمات حقوقی با کمترین قیمت بازار
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20 md:px-6">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">ثبت لوایح حقوقی</h2>
            <p className="text-muted-foreground">تنظیم انواع لوایح حقوقی توسط وکلای متخصص</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                className={`relative border-border bg-card transition-all hover:shadow-xl ${
                  plan.popular ? "border-2 border-primary shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                    محبوب‌ترین
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground"> تومان</span>
                  </div>
                  <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-card-foreground">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className={`w-full ${
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

      {/* Additional Info */}
      <section className="bg-secondary/30 px-4 py-20 md:px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground">نکات مهم</h2>
            <div className="space-y-4">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">مشاوره رایگان</h3>
                  <p className="text-sm text-muted-foreground">
                    قبل از هر خدمتی، می‌توانید از مشاوره رایگان اولیه استفاده کنید تا با خدمات ما آشنا شوید.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">قیمت‌گذاری شفاف</h3>
                  <p className="text-sm text-muted-foreground">
                    تمامی قیمت‌ها از قبل مشخص و شفاف است و هیچ هزینه پنهانی وجود ندارد.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-card-foreground">پرونده‌های خاص</h3>
                  <p className="text-sm text-muted-foreground">
                    برای پرونده‌های پیچیده و خاص، پس از بررسی اولیه رایگان، قیمت توافقی اعلام می‌شود.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance text-foreground md:text-4xl">سوالی دارید؟</h2>
            <p className="mb-8 text-lg text-pretty text-muted-foreground">
              برای اطلاعات بیشتر و مشاوره رایگان با ما تماس بگیرید
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                تماس با ما
              </Button>
            </Link>
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
