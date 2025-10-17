"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 transition-smooth hover-scale"
          aria-label="صفحه اصلی اینتل ایکس"
        >
          <Image src="/images/logo.png" alt="اینتل ایکس" width={40} height={40} className="h-10 w-10" />
          <span className="text-2xl font-heading text-foreground">اینتل ایکس</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex" role="navigation" aria-label="منوی اصلی">
          <Link
            href="/"
            className="text-sm font-heading text-muted-foreground transition-smooth hover:text-foreground hover:scale-105 focus-enhanced"
          >
            صفحه اصلی
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-heading text-muted-foreground transition-smooth hover:text-foreground hover:scale-105 focus-enhanced">
              خدمات حقوقی
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48" dir="rtl">
              <DropdownMenuItem asChild>
                <Link href="/civil-law" className="font-heading cursor-pointer">
                  حقوق مدنی
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/criminal-law" className="font-heading cursor-pointer">
                  حقوق کیفری
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/comprehensive-laws"
            className="text-sm font-heading text-muted-foreground transition-smooth hover:text-foreground hover:scale-105 focus-enhanced"
          >
            قوانین جامع
          </Link>

          <Link
            href="/services"
            className="text-sm font-heading text-muted-foreground transition-smooth hover:text-foreground hover:scale-105 focus-enhanced"
          >
            خدمات
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-heading text-muted-foreground transition-smooth hover:text-foreground hover:scale-105 focus-enhanced"
          >
            تعرفه
          </Link>
          <Link
            href="/about"
            className="text-sm font-heading text-muted-foreground transition-smooth hover:text-foreground hover:scale-105 focus-enhanced"
          >
            درباره ما
          </Link>
          <Link
            href="/contact"
            className="text-sm font-heading text-muted-foreground transition-smooth hover:text-foreground hover:scale-105 focus-enhanced"
          >
            تماس
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-heading text-muted-foreground transition-smooth hover:text-foreground hover:scale-105 focus-enhanced"
          >
            پنل کاربری
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 ripple-effect touch-target transition-smooth hover:shadow-medium focus-enhanced font-heading">
              ورود / ثبت نام
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden touch-target"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="منو"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute left-0 right-0 top-full z-50 border-b border-border bg-white shadow-strong transition-all duration-300 md:hidden",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <nav className="container mx-auto flex flex-col gap-2 px-4 py-4" role="navigation" aria-label="منوی موبایل">
          <Link
            href="/"
            className="rounded-lg px-4 py-3 text-sm font-heading text-gray-900 transition-smooth hover:bg-gray-100 focus-enhanced"
            onClick={() => setMobileMenuOpen(false)}
          >
            صفحه اصلی
          </Link>
          <Link
            href="/civil-law"
            className="rounded-lg px-4 py-3 text-sm font-heading text-gray-900 transition-smooth hover:bg-gray-100 focus-enhanced"
            onClick={() => setMobileMenuOpen(false)}
          >
            حقوق مدنی
          </Link>
          <Link
            href="/criminal-law"
            className="rounded-lg px-4 py-3 text-sm font-heading text-gray-900 transition-smooth hover:bg-gray-100 focus-enhanced"
            onClick={() => setMobileMenuOpen(false)}
          >
            حقوق کیفری
          </Link>
          <Link
            href="/comprehensive-laws"
            className="rounded-lg px-4 py-3 text-sm font-heading text-gray-900 transition-smooth hover:bg-gray-100 focus-enhanced"
            onClick={() => setMobileMenuOpen(false)}
          >
            قوانین جامع
          </Link>
          <Link
            href="/services"
            className="rounded-lg px-4 py-3 text-sm font-heading text-gray-900 transition-smooth hover:bg-gray-100 focus-enhanced"
            onClick={() => setMobileMenuOpen(false)}
          >
            خدمات
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg px-4 py-3 text-sm font-heading text-gray-900 transition-smooth hover:bg-gray-100 focus-enhanced"
            onClick={() => setMobileMenuOpen(false)}
          >
            تعرفه
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-4 py-3 text-sm font-heading text-gray-900 transition-smooth hover:bg-gray-100 focus-enhanced"
            onClick={() => setMobileMenuOpen(false)}
          >
            درباره ما
          </Link>
          <Link
            href="/contact"
            className="rounded-lg px-4 py-3 text-sm font-heading text-gray-900 transition-smooth hover:bg-gray-100 focus-enhanced"
            onClick={() => setMobileMenuOpen(false)}
          >
            تماس
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg px-4 py-3 text-sm font-heading text-gray-900 transition-smooth hover:bg-gray-100 focus-enhanced"
            onClick={() => setMobileMenuOpen(false)}
          >
            پنل کاربری
          </Link>
          <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 ripple-effect touch-target mt-2 font-heading">
              ورود / ثبت نام
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
