import { NextResponse } from "next/server"
import { requests } from "../../submit-request/route"

export async function GET() {
  try {
    // In production, fetch from database
    // Sort by newest first
    const sortedRequests = [...requests].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

    return NextResponse.json(sortedRequests)
  } catch (error) {
    console.error("Error fetching requests:", error)
    return NextResponse.json({ error: "Failed to fetch requests" }, { status: 500 })
  }
}
