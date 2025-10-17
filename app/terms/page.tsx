import { Scale } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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

      {/* Content */}
      <section className="px-4 py-20 md:px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-4xl font-bold text-foreground">شرایط و قوانین استفاده</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                با استفاده از خدمات اینتل ایکس، شما با شرایط و قوانین زیر موافقت می‌کنید. لطفاً این شرایط را با دقت مطالعه
                کنید.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-foreground">۱. تعاریف</h2>
              <p>
                در این سند، "ما"، "اینتل ایکس" و "پلتفرم" به سایت و خدمات اینتل ایکس اشاره دارد. "شما" و "کاربر" به هر
                شخصی که از خدمات ما استفاده می‌کند، اشاره دارد.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-foreground">۲. خدمات</h2>
              <p>
                اینتل ایکس یک پلتفرم مشاوره حقوقی آنلاین است که ارتباط بین کاربران و وکلای متخصص را فراهم می‌کند. خدمات
                ما شامل مشاوره حقوقی، تنظیم لوایح و وکالت در دادگاه می‌شود.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-foreground">۳. مسئولیت‌های کاربر</h2>
              <ul className="list-inside list-disc space-y-2">
                <li>ارائه اطلاعات صحیح و کامل</li>
                <li>رعایت قوانین جمهوری اسلامی ایران</li>
                <li>پرداخت به موقع هزینه خدمات</li>
                <li>احترام به وکلا و کارکنان</li>
                <li>عدم سوء استفاده از خدمات</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-foreground">۴. مسئولیت‌های اینتل ایکس</h2>
              <ul className="list-inside list-disc space-y-2">
                <li>ارائه خدمات با کیفیت</li>
                <li>حفظ محرمانگی اطلاعات</li>
                <li>همکاری با وکلای مجرب و دارای پروانه</li>
                <li>پشتیبانی از کاربران</li>
                <li>شفافیت در قیمت‌گذاری</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-foreground">۵. پرداخت و بازپرداخت</h2>
              <p>
                تمامی پرداخت‌ها از طریق درگاه‌های امن بانکی انجام می‌شود. در صورت عدم ارائه خدمات به دلایل مربوط به اینتل
                ایکس، هزینه پرداختی به حساب شما بازگردانده می‌شود.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-foreground">۶. محدودیت مسئولیت</h2>
              <p>
                اینتل ایکس یک پلتفرم واسط است و مسئولیت نتایج پرونده‌های حقوقی بر عهده وکلای مربوطه است. ما تلاش می‌کنیم
                بهترین خدمات را ارائه دهیم، اما نمی‌توانیم نتیجه خاصی را تضمین کنیم.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-foreground">۷. تغییرات در شرایط</h2>
              <p>
                اینتل ایکس حق دارد این شرایط را در هر زمان تغییر دهد. تغییرات از طریق سایت اعلام می‌شود و استفاده مستمر
                از خدمات به معنای پذیرش تغییرات است.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-foreground">۸. قانون حاکم</h2>
              <p>
                این شرایط تحت قوانین جمهوری اسلامی ایران است و هرگونه اختلاف در دادگاه‌های صالح ایران حل و فصل می‌شود.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-foreground">۹. تماس با ما</h2>
              <p>
                برای هرگونه سوال یا ابهام در مورد این شرایط، می‌توانید از طریق صفحه{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  تماس با ما
                </Link>{" "}
                با ما در ارتباط باشید.
              </p>

              <p className="mt-8 text-sm">آخرین به‌روزرسانی: آذر ۱۴۰۳</p>
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
