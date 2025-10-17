import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Target, Award, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              تعرفه
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground transition-colors">
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
            <h1 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl">درباره اینتل ایکس</h1>
            <p className="text-lg text-pretty text-muted-foreground">
              پلتفرم پیشرو مشاوره حقوقی آنلاین در ایران با هدف دسترسی آسان و سریع به خدمات حقوقی تخصصی
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/30 px-4 py-20 md:px-6">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <Target className="mb-4 h-12 w-12 text-primary" />
                <h2 className="mb-4 text-2xl font-bold text-card-foreground">ماموریت ما</h2>
                <p className="text-pretty text-muted-foreground">
                  ماموریت ما ارائه خدمات حقوقی با کیفیت، سریع و مقرون به صرفه به تمامی افراد جامعه است. ما معتقدیم که
                  دسترسی به مشاوره حقوقی حق همه مردم است و تلاش می‌کنیم این خدمات را با بهترین کیفیت و کمترین قیمت ارائه
                  دهیم.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <Award className="mb-4 h-12 w-12 text-primary" />
                <h2 className="mb-4 text-2xl font-bold text-card-foreground">چشم‌انداز ما</h2>
                <p className="text-pretty text-muted-foreground">
                  چشم‌انداز ما تبدیل شدن به بزرگترین و معتبرترین پلتفرم مشاوره حقوقی آنلاین در ایران است. ما می‌خواهیم با
                  استفاده از فناوری‌های نوین، دسترسی به خدمات حقوقی را برای همه آسان‌تر کنیم.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-20 md:px-6">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">ارزش‌های ما</h2>
            <p className="text-lg text-muted-foreground">اصولی که بر اساس آن‌ها فعالیت می‌کنیم</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "اعتماد و امنیت",
                description: "حفظ محرمانگی اطلاعات و ایجاد اعتماد با مشتریان اولویت اول ماست",
              },
              {
                icon: Users,
                title: "تخصص و تجربه",
                description: "همکاری با وکلای مجرب و متخصص در تمامی زمینه‌های حقوقی",
              },
              {
                icon: Award,
                title: "کیفیت و سرعت",
                description: "ارائه خدمات با بالاترین کیفیت در کوتاه‌ترین زمان ممکن",
              },
            ].map((value, index) => (
              <Card key={index} className="border-border bg-card text-center">
                <CardContent className="p-8">
                  <value.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-3 text-xl font-bold text-card-foreground">{value.title}</h3>
                  <p className="text-pretty text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/30 px-4 py-20 md:px-6">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { number: "۱۰۰+", label: "وکیل متخصص" },
              { number: "۵۰۰۰+", label: "مشتری راضی" },
              { number: "۱۰۰۰۰+", label: "مشاوره انجام شده" },
              { number: "۲۴/۷", label: "پشتیبانی" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance text-foreground md:text-4xl">
              آماده همکاری با شما هستیم
            </h2>
            <p className="mb-8 text-lg text-pretty text-muted-foreground">
              برای دریافت مشاوره حقوقی تخصصی با ما در تماس باشید
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
