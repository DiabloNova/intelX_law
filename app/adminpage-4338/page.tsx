"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Scale,
  FileText,
  Download,
  Phone,
  Mail,
  User,
  Calendar,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Upload,
  Brain,
} from "lucide-react"
import Link from "next/link"
import PDFManager from "@/components/pdf-manager"

interface Request {
  id: string
  category: string
  title: string
  description: string
  phone: string
  email?: string
  name: string
  province: string
  files: { name: string; url: string; size: number }[]
  createdAt: string
  status: "pending" | "replied" | "closed"
  reply?: string
}

interface AIRequest {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  reason: string
  createdAt: string
  status: "pending" | "contacted" | "approved" | "rejected"
}

export default function AdminPage() {
  const [requests, setRequests] = useState<Request[]>([])
  const [aiRequests, setAIRequests] = useState<AIRequest[]>([])
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRequests()
    fetchAIRequests()
  }, [])

  const fetchRequests = async () => {
    try {
      const response = await fetch("/api/admin/requests")
      if (response.ok) {
        const data = await response.json()
        setRequests(data)
      }
    } catch (error) {
      console.error("Error fetching requests:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchAIRequests = async () => {
    try {
      const response = await fetch("/api/ai-request")
      if (response.ok) {
        const data = await response.json()
        setAIRequests(data)
      }
    } catch (error) {
      console.error("Error fetching AI requests:", error)
    }
  }

  const handleReply = async (requestId: string) => {
    try {
      const response = await fetch("/api/admin/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId,
          reply: replyText[requestId],
        }),
      })

      if (response.ok) {
        fetchRequests()
        setReplyText((prev) => ({ ...prev, [requestId]: "" }))
      }
    } catch (error) {
      console.error("Error sending reply:", error)
    }
  }

  const updateAIRequestStatus = async (requestId: string, status: AIRequest["status"]) => {
    // In production, this would update the database
    setAIRequests((prev) => prev.map((req) => (req.id === requestId ? { ...req, status } : req)))
  }

  const getCategoryName = (category: string) => {
    const categories: { [key: string]: string } = {
      civil: "حقوقی",
      criminal: "کیفری",
      appeal: "اعتراض به آرای بدوی",
      supreme: "پرونده‌های دیوان",
      statement: "اظهارنامه",
      attorney: "قبول وکالت",
    }
    return categories[category] || category
  }

  const getStatusBadge = (status: string) => {
    const statusConfig: { [key: string]: { label: string; variant: "default" | "secondary" | "destructive" } } = {
      pending: { label: "در انتظار", variant: "default" },
      replied: { label: "پاسخ داده شده", variant: "secondary" },
      closed: { label: "بسته شده", variant: "destructive" },
      contacted: { label: "تماس گرفته شده", variant: "secondary" },
      approved: { label: "تایید شده", variant: "secondary" },
      rejected: { label: "رد شده", variant: "destructive" },
    }
    const config = statusConfig[status] || statusConfig.pending
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 transition-smooth hover-scale">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">اینتل ایکس - پنل ادمین</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="touch-target bg-transparent">
              بازگشت به سایت
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-6">
        <Tabs defaultValue="requests" className="w-full">
          <TabsList className="mb-8 grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="requests" className="font-heading">
              <MessageSquare className="ml-2 h-4 w-4" />
              درخواست‌ها
            </TabsTrigger>
            <TabsTrigger value="ai-requests" className="font-heading">
              <Brain className="ml-2 h-4 w-4" />
              درخواست‌های هوش مصنوعی
            </TabsTrigger>
            <TabsTrigger value="pdfs" className="font-heading">
              <Upload className="ml-2 h-4 w-4" />
              مدیریت PDF
            </TabsTrigger>
          </TabsList>

          <TabsContent value="requests">
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">مدیریت درخواست‌ها</h1>
              <p className="text-muted-foreground">مشاهده و پاسخ به درخواست‌های کاربران</p>
            </div>

            {/* Statistics */}
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">کل درخواست‌ها</p>
                      <p className="text-3xl font-bold text-foreground">{requests.length}</p>
                    </div>
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">در انتظار پاسخ</p>
                      <p className="text-3xl font-bold text-primary">
                        {requests.filter((r) => r.status === "pending").length}
                      </p>
                    </div>
                    <MessageSquare className="h-12 w-12 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">پاسخ داده شده</p>
                      <p className="text-3xl font-bold text-secondary-foreground">
                        {requests.filter((r) => r.status === "replied").length}
                      </p>
                    </div>
                    <MessageSquare className="h-12 w-12 text-secondary-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Requests List */}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">در حال بارگذاری...</p>
              </div>
            ) : requests.length === 0 ? (
              <Card className="shadow-soft">
                <CardContent className="p-12 text-center">
                  <FileText className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground">هیچ درخواستی ثبت نشده است</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {requests.map((request) => (
                  <Card key={request.id} className="shadow-medium hover-lift">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <CardTitle className="text-xl">{request.title}</CardTitle>
                            {getStatusBadge(request.status)}
                            <Badge variant="outline">{getCategoryName(request.category)}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              {request.name}
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              {request.phone}
                            </div>
                            {request.email && (
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                {request.email}
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {new Date(request.createdAt).toLocaleDateString("fa-IR")}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setExpandedId(expandedId === request.id ? null : request.id)}
                        >
                          {expandedId === request.id ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>

                    {expandedId === request.id && (
                      <CardContent className="space-y-6 border-t border-border pt-6">
                        <div>
                          <h4 className="mb-2 font-semibold text-foreground">شرح درخواست:</h4>
                          <p className="whitespace-pre-wrap rounded-lg bg-muted/50 p-4 text-sm leading-relaxed">
                            {request.description}
                          </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h4 className="mb-2 font-semibold text-foreground">اطلاعات کاربر:</h4>
                            <div className="space-y-2 rounded-lg bg-muted/50 p-4 text-sm">
                              <p>
                                <span className="font-medium">نام:</span> {request.name}
                              </p>
                              <p>
                                <span className="font-medium">استان:</span> {request.province}
                              </p>
                              <p>
                                <span className="font-medium">شماره تماس:</span> {request.phone}
                              </p>
                              {request.email && (
                                <p>
                                  <span className="font-medium">ایمیل:</span> {request.email}
                                </p>
                              )}
                            </div>
                          </div>

                          {request.files.length > 0 && (
                            <div>
                              <h4 className="mb-2 font-semibold text-foreground">فایل‌های پیوست:</h4>
                              <div className="space-y-2">
                                {request.files.map((file, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between rounded-lg bg-muted/50 p-3"
                                  >
                                    <div className="flex items-center gap-3">
                                      <FileText className="h-5 w-5 text-primary" />
                                      <div>
                                        <p className="text-sm font-medium">{file.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                          {(file.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                      </div>
                                    </div>
                                    <Button variant="ghost" size="sm" asChild>
                                      <a href={file.url} download>
                                        <Download className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <Label htmlFor={`reply-${request.id}`} className="mb-2 block text-base font-semibold">
                            پاسخ به درخواست:
                          </Label>
                          <Textarea
                            id={`reply-${request.id}`}
                            value={replyText[request.id] || ""}
                            onChange={(e) => setReplyText((prev) => ({ ...prev, [request.id]: e.target.value }))}
                            placeholder="پاسخ خود را اینجا بنویسید..."
                            className="mb-3 min-h-[120px] text-right"
                            dir="rtl"
                          />
                          <Button
                            onClick={() => handleReply(request.id)}
                            className="bg-primary text-primary-foreground hover:bg-primary/90 ripple-effect touch-target"
                            disabled={!replyText[request.id]?.trim()}
                          >
                            ارسال پاسخ
                          </Button>
                        </div>

                        {request.reply && (
                          <div>
                            <h4 className="mb-2 font-semibold text-foreground">پاسخ قبلی:</h4>
                            <p className="whitespace-pre-wrap rounded-lg bg-primary/10 p-4 text-sm leading-relaxed">
                              {request.reply}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* AI Requests Tab */}
          <TabsContent value="ai-requests">
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">درخواست‌های هوش مصنوعی</h1>
              <p className="text-muted-foreground">مشاهده و مدیریت درخواست‌های استفاده از هوش مصنوعی حقوقی</p>
            </div>

            {/* AI Statistics */}
            <div className="mb-8 grid gap-4 md:grid-cols-4">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">کل درخواست‌ها</p>
                      <p className="text-3xl font-bold text-foreground">{aiRequests.length}</p>
                    </div>
                    <Brain className="h-12 w-12 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">در انتظار</p>
                      <p className="text-3xl font-bold text-primary">
                        {aiRequests.filter((r) => r.status === "pending").length}
                      </p>
                    </div>
                    <MessageSquare className="h-12 w-12 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">تایید شده</p>
                      <p className="text-3xl font-bold text-green-600">
                        {aiRequests.filter((r) => r.status === "approved").length}
                      </p>
                    </div>
                    <MessageSquare className="h-12 w-12 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">رد شده</p>
                      <p className="text-3xl font-bold text-destructive">
                        {aiRequests.filter((r) => r.status === "rejected").length}
                      </p>
                    </div>
                    <MessageSquare className="h-12 w-12 text-destructive" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Requests List */}
            {aiRequests.length === 0 ? (
              <Card className="shadow-soft">
                <CardContent className="p-12 text-center">
                  <Brain className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground">هیچ درخواستی برای هوش مصنوعی ثبت نشده است</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {aiRequests.map((request) => (
                  <Card key={request.id} className="shadow-medium hover-lift">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <CardTitle className="text-xl">
                              {request.firstName} {request.lastName}
                            </CardTitle>
                            {getStatusBadge(request.status)}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              {request.phone}
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              {request.email}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {new Date(request.createdAt).toLocaleDateString("fa-IR")}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setExpandedId(expandedId === request.id ? null : request.id)}
                        >
                          {expandedId === request.id ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>

                    {expandedId === request.id && (
                      <CardContent className="space-y-6 border-t border-border pt-6">
                        <div>
                          <h4 className="mb-2 font-semibold text-foreground">دلیل درخواست:</h4>
                          <p className="whitespace-pre-wrap rounded-lg bg-muted/50 p-4 text-sm leading-relaxed">
                            {request.reason}
                          </p>
                        </div>

                        <div>
                          <h4 className="mb-3 font-semibold text-foreground">تغییر وضعیت:</h4>
                          <div className="flex flex-wrap gap-3">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateAIRequestStatus(request.id, "contacted")}
                              disabled={request.status === "contacted"}
                            >
                              تماس گرفته شد
                            </Button>
                            <Button
                              size="sm"
                              variant="default"
                              onClick={() => updateAIRequestStatus(request.id, "approved")}
                              disabled={request.status === "approved"}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              تایید
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => updateAIRequestStatus(request.id, "rejected")}
                              disabled={request.status === "rejected"}
                            >
                              رد
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="pdfs">
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">مدیریت فایل‌های PDF</h1>
              <p className="text-muted-foreground">آپلود و اختصاص فایل‌های PDF به صفحات مختلف</p>
            </div>

            <PDFManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
