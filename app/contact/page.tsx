import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Scale, Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              درباره ما
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground transition-colors">
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
            <h1 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl">تماس با ما</h1>
            <p className="text-lg text-pretty text-muted-foreground">
              برای دریافت مشاوره رایگان یا اطلاعات بیشتر، از طریق فرم زیر یا راه‌های ارتباطی با ما در تماس باشید
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 pb-20 md:px-6">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-card-foreground">فرم تماس</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-card-foreground">
                      نام و نام خانوادگی
                    </label>
                    <Input id="name" placeholder="نام خود را وارد کنید" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-card-foreground">
                      شماره تماس
                    </label>
                    <Input id="phone" type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-card-foreground">
                      ایمیل (اختیاری)
                    </label>
                    <Input id="email" type="email" placeholder="example@email.com" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-card-foreground">
                      موضوع
                    </label>
                    <Input id="subject" placeholder="موضوع مشاوره خود را بنویسید" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-card-foreground">
                      پیام
                    </label>
                    <Textarea
                      id="message"
                      placeholder="توضیحات بیشتر در مورد موضوع حقوقی خود را بنویسید..."
                      className="min-h-32 w-full"
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                    ارسال درخواست
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-card-foreground">تماس تلفنی</h3>
                      <p className="mb-1 text-muted-foreground">۰۹۳۰۹۱۹۸۶۸۶</p>
                      <p className="mb-1 text-muted-foreground">۰۲۱۸۸۵۵۲۶۲۴</p>
                      <p className="text-sm text-muted-foreground">شنبه تا پنجشنبه، ۹ صبح تا ۶ عصر</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-card-foreground">ایمیل</h3>
                      <p className="mb-1 text-muted-foreground">law@intelx.ir</p>
                      <p className="text-sm text-muted-foreground">پاسخگویی در کمتر از ۲۴ ساعت</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-card-foreground">آدرس دفتر</h3>
                      <p className="text-muted-foreground">
                        تهران، یوسف آباد، خیابان عبدالمجید اکبری، برج سپهر ساعی، طبقه دهم، واحد ۱۰۰۴
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-card-foreground">ساعات کاری</h3>
                      <p className="mb-1 text-muted-foreground">شنبه تا چهارشنبه: ۹:۰۰ - ۱۸:۰۰</p>
                      <p className="text-muted-foreground">پنجشنبه: ۹:۰۰ - ۱۴:۰۰</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-card-foreground">مشاوره رایگان ۱۵ دقیقه‌ای</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    برای آشنایی با خدمات ما، اولین مشاوره را رایگان دریافت کنید
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    درخواست مشاوره رایگان
                  </Button>
                </CardContent>
              </Card>
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
