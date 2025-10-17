import { type NextRequest, NextResponse } from "next/server"
import { requests } from "../../submit-request/route"

export async function POST(request: NextRequest) {
  try {
    const { requestId, reply } = await request.json()

    // Find and update request
    const requestIndex = requests.findIndex((r) => r.id === requestId)

    if (requestIndex === -1) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 })
    }

    requests[requestIndex].reply = reply
    requests[requestIndex].status = "replied"
    requests[requestIndex].repliedAt = new Date().toISOString()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending reply:", error)
    return NextResponse.json({ error: "Failed to send reply" }, { status: 500 })
  }
}
