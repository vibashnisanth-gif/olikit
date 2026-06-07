import { NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "node:fs/promises"
import { join } from "node:path"

const DATA_FILE = join(process.cwd(), "data", "subscribers.json")

type Subscriber = {
  email: string
  locale: string
  source: string
  timestamp: string
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8")
    return JSON.parse(raw) as Subscriber[]
  } catch {
    return []
  }
}

async function saveSubscriber(subscriber: Subscriber): Promise<void> {
  const subscribers = await getSubscribers()
  const exists = subscribers.some((s) => s.email === subscriber.email)
  if (exists) return
  subscribers.push(subscriber)
  const dir = join(process.cwd(), "data")
  await mkdir(dir, { recursive: true })
  await writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2), "utf-8")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, locale, source } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    await saveSubscriber({
      email: email.toLowerCase().trim(),
      locale: locale ?? "unknown",
      source: source ?? "unknown",
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
