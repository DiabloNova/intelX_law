import { Scale } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
            <h1 className="mb-8 text-4xl font-bold text-foreground">سیاست حریم خصوصی</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                در اینتل ایکس، حفظ حریم خصوصی و امنیت اطلاعات شما برای ما بسیار مهم است. این سند نحوه جمع‌آوری، استفاده و
                محافظت از اطلاعات شخصی شما را توضیح می‌دهد.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-foreground">جمع‌آوری اطلاعات</h2>
              <p>
                ما اطلاعات شخصی شما را تنها در صورتی جمع‌آوری می‌کنیم که شما آن‌ها را به صورت داوطلبانه در اختیار ما قرار
                دهید. این اطلاعات شامل نام، شماره تماس، ایمیل و اطلاعات مربوط به موضوع حقوقی شما می‌شود.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-foreground">استفاده از اطلاعات</h2>
              <p>اطلاعات شما تنها برای موارد زیر استفاده می‌شود:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>ارائه خدمات مشاوره حقوقی</li>
                <li>ارتباط با شما در خصوص درخواست‌های شما</li>
                <li>بهبود کیفیت خدمات ما</li>
                <li>ارسال اطلاعات مربوط به خدمات (در صورت درخواست شما)</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-foreground">محرمانگی اطلاعات</h2>
              <p>
                تمامی اطلاعات شما کاملاً محرمانه است و بدون اجازه شما با هیچ شخص یا سازمان ثالثی به اشتراک گذاشته نمی‌شود.
                ما از روش‌های امنیتی پیشرفته برای محافظت از اطلاعات شما استفاده می‌کنیم.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-foreground">حقوق شما</h2>
              <p>شما حق دارید:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>به اطلاعات شخصی خود دسترسی داشته باشید</li>
                <li>درخواست اصلاح یا حذف اطلاعات خود را بدهید</li>
                <li>از دریافت ایمیل‌های تبلیغاتی انصراف دهید</li>
                <li>در مورد نحوه استفاده از اطلاعات خود سوال کنید</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-foreground">تماس با ما</h2>
              <p>
                در صورت هرگونه سوال یا نگرانی در مورد حریم خصوصی خود، می‌توانید از طریق صفحه{" "}
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
