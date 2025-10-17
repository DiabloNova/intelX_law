"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, FileText, Clock, Settings, LogOut, X, Home } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface DashboardSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-80 border-l border-border bg-sidebar transition-transform duration-300 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:translate-x-0",
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
        )}
        dir="rtl"
      >
        <div className="flex h-full flex-col p-6">
          {/* Close button for mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-4 md:hidden"
            onClick={onClose}
            aria-label="بستن"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* User Profile */}
          <Card className="mb-6 shadow-soft">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">کاربر عزیز</CardTitle>
                  <p className="text-sm text-muted-foreground">خوش آمدید</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Activity Summary */}
          <Card className="mb-6 shadow-soft">
            <CardHeader>
              <CardTitle className="text-base">فعالیت‌های اخیر</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm">درخواست‌های ارسالی</span>
                </div>
                <span className="text-lg font-bold text-primary">۰</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">در انتظار پاسخ</span>
                </div>
                <span className="text-lg font-bold text-muted-foreground">۰</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-2">
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">دسترسی سریع</h3>
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start gap-3 text-right" dir="rtl">
                <Home className="h-5 w-5" />
                صفحه اصلی
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-3 text-right" dir="rtl">
                <FileText className="h-5 w-5" />
                درخواست‌های من
              </Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button variant="ghost" className="w-full justify-start gap-3 text-right" dir="rtl">
                <Settings className="h-5 w-5" />
                تنظیمات
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start gap-3 text-destructive text-right" dir="rtl">
              <LogOut className="h-5 w-5" />
              خروج
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
