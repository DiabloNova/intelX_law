"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, LogIn } from "lucide-react"

const iranProvinces = [
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "اردبیل",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "فارس",
  "قزوین",
  "قم",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه و بویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مرکزی",
  "هرمزگان",
  "همدان",
  "یزد",
]

export function AuthSection() {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    province: "",
    password: "",
  })

  const [loginData, setLoginData] = useState({
    phone: "",
    password: "",
  })

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signup data:", signupData)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login data:", loginData)
  }

  return (
    <section className="relative z-10 px-4 py-20 md:px-6 md:py-24" dir="rtl">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-balance text-foreground md:text-4xl lg:text-5xl">
            ورود یا ثبت نام
          </h2>
          <p className="text-lg md:text-xl text-pretty text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            برای دسترسی به خدمات و پیگیری درخواست‌های خود، وارد حساب کاربری شوید
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-auto p-1">
              <TabsTrigger
                value="signup"
                className="gap-2 touch-target transition-smooth focus-enhanced text-base md:text-lg py-3"
              >
                <UserPlus className="h-5 w-5" aria-hidden="true" />
                ثبت نام
              </TabsTrigger>
              <TabsTrigger
                value="login"
                className="gap-2 touch-target transition-smooth focus-enhanced text-base md:text-lg py-3"
              >
                <LogIn className="h-5 w-5" aria-hidden="true" />
                ورود
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signup">
              <Card className="shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader className="text-right space-y-3 pb-6">
                  <CardTitle className="text-2xl md:text-3xl">ایجاد حساب کاربری</CardTitle>
                  <CardDescription className="text-base">اطلاعات خود را برای ثبت نام وارد کنید</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="block text-right text-base font-semibold">
                          نام <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="نام خود را وارد کنید"
                          required
                          value={signupData.firstName}
                          onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                          className="text-right touch-target transition-smooth focus-enhanced"
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="block text-right text-base font-semibold">
                          نام خانوادگی <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="نام خانوادگی خود را وارد کنید"
                          required
                          value={signupData.lastName}
                          onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                          className="text-right touch-target transition-smooth focus-enhanced"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="block text-right text-base font-semibold">
                        شماره تلفن <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        required
                        value={signupData.phone}
                        onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                        className="text-right touch-target transition-smooth focus-enhanced"
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="block text-right text-base font-semibold">
                        آدرس ایمیل (اختیاری)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                        className="text-right touch-target transition-smooth focus-enhanced"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="province" className="block text-right text-base font-semibold">
                        استان محل سکونت <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        required
                        value={signupData.province}
                        onValueChange={(value) => setSignupData({ ...signupData, province: value })}
                      >
                        <SelectTrigger
                          id="province"
                          className="text-right touch-target transition-smooth focus-enhanced"
                          aria-required="true"
                        >
                          <SelectValue placeholder="استان خود را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent className="text-right">
                          {iranProvinces.map((province) => (
                            <SelectItem
                              key={province}
                              value={province}
                              className="text-right transition-smooth hover:bg-secondary/80"
                            >
                              {province}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="signup-password" className="block text-right text-base font-semibold">
                        رمز عبور <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="رمز عبور خود را وارد کنید"
                        required
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        className="text-right touch-target transition-smooth focus-enhanced"
                        aria-required="true"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 ripple-effect touch-target transition-smooth hover:shadow-medium focus-enhanced text-base md:text-lg py-6"
                    >
                      ثبت نام
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="login">
              <Card className="shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader className="text-right space-y-3 pb-6">
                  <CardTitle className="text-2xl md:text-3xl">ورود به حساب کاربری</CardTitle>
                  <CardDescription className="text-base">شماره تلفن و رمز عبور خود را وارد کنید</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="login-phone" className="block text-right text-base font-semibold">
                        شماره تلفن
                      </Label>
                      <Input
                        id="login-phone"
                        type="tel"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        required
                        value={loginData.phone}
                        onChange={(e) => setLoginData({ ...loginData, phone: e.target.value })}
                        className="text-right touch-target transition-smooth focus-enhanced"
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="login-password" className="block text-right text-base font-semibold">
                        رمز عبور
                      </Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="رمز عبور خود را وارد کنید"
                        required
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="text-right touch-target transition-smooth focus-enhanced"
                        aria-required="true"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 ripple-effect touch-target transition-smooth hover:shadow-medium focus-enhanced text-base md:text-lg py-6"
                    >
                      ورود
                    </Button>

                    <div className="text-center">
                      <Button
                        variant="link"
                        className="text-sm text-muted-foreground hover:text-foreground transition-smooth focus-enhanced"
                      >
                        رمز عبور خود را فراموش کرده‌اید؟
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
