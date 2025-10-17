import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for demo purposes
// In production, use a database
const requests: any[] = []

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const phone = formData.get("phone") as string
    const category = formData.get("category") as string
    const files = formData.getAll("files") as File[]

    // Get user info from session/auth (mock for now)
    const userInfo = {
      name: "کاربر تست", // This should come from auth session
      email: "user@example.com",
      province: "تهران",
    }

    // Process files
    const processedFiles = await Promise.all(
      files.map(async (file) => {
        // In production, upload to storage service (Vercel Blob, S3, etc.)
        const buffer = await file.arrayBuffer()
        const base64 = Buffer.from(buffer).toString("base64")

        return {
          name: file.name,
          size: file.size,
          url: `data:${file.type};base64,${base64}`, // Mock URL
        }
      }),
    )

    // Create request object
    const newRequest = {
      id: Date.now().toString(),
      category,
      title,
      description,
      phone,
      name: userInfo.name,
      email: userInfo.email,
      province: userInfo.province,
      files: processedFiles,
      createdAt: new Date().toISOString(),
      status: "pending",
    }

    requests.push(newRequest)

    return NextResponse.json({ success: true, id: newRequest.id })
  } catch (error) {
    console.error("Error submitting request:", error)
    return NextResponse.json({ error: "Failed to submit request" }, { status: 500 })
  }
}

function getCategoryName(category: string) {
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

// Export requests for admin access
export { requests }
