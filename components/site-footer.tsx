import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border bg-background px-4 py-12 md:px-6 md:py-16">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-4 md:gap-12">
          <div>
            <Link
              href="/"
              className="mb-6 flex items-center gap-2 transition-smooth hover-scale"
              aria-label="صفحه اصلی اینتل ایکس"
            >
              <img src="/images/logo.png" alt="لوگو اینتل ایکس" className="h-8 w-8" />
              <span className="text-xl font-bold text-foreground font-heading">اینتل ایکس</span>
            </Link>
            <p className="text-sm text-pretty text-muted-foreground leading-relaxed">
              پلتفرم مشاوره حقوقی آنلاین تحت قوانین جمهوری اسلامی ایران
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-foreground text-base font-heading">خدمات</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services"
                  className="transition-smooth hover:text-foreground hover:translate-x-1 inline-block focus-enhanced"
                >
                  تمام خدمات
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="transition-smooth hover:text-foreground hover:translate-x-1 inline-block focus-enhanced"
                >
                  تعرفه‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-smooth hover:text-foreground hover:translate-x-1 inline-block focus-enhanced"
                >
                  درخواست مشاوره
                </Link>
              </li>
              <li>
                <Link
                  href="/comprehensive-laws"
                  className="transition-smooth hover:text-foreground hover:translate-x-1 inline-block focus-enhanced"
                >
                  قوانین جامع
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-foreground text-base font-heading">شرکت</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="transition-smooth hover:text-foreground hover:translate-x-1 inline-block focus-enhanced"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-smooth hover:text-foreground hover:translate-x-1 inline-block focus-enhanced"
                >
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-smooth hover:text-foreground hover:translate-x-1 inline-block focus-enhanced"
                >
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-smooth hover:text-foreground hover:translate-x-1 inline-block focus-enhanced"
                >
                  شرایط استفاده
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-foreground text-base font-heading">تماس با ما</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <div className="leading-relaxed">
                  <div>۰۹۳۰۹۱۹۸۶۸۶</div>
                  <div>۰۲۱۸۸۵۵۲۶۲۴</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="leading-relaxed">law@intelx.ir</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="leading-relaxed">
                  تهران، یوسف آباد، خیابان عبدالمجید اکبری، برج سپهر ساعی، طبقه دهم، واحد ۱۰۰۴
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© ۱۴۰۳ اینتل ایکس. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
