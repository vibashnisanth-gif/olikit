import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || "Free Finance Tools"
    const locale = searchParams.get("locale") || "United States"
    const type = searchParams.get("type") || "tool"
    const year = searchParams.get("year") || "2026"

    const label = type === "guide" ? "GUIDE" : type === "compare" ? "COMPARE" : type === "state" ? "STATE" : "CALCULATOR"

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "60px 80px",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#10b981",
                  letterSpacing: "2px",
                }}
              >
                OLIKIT
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#64748b",
                  background: "#1e293b",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  border: "1px solid #334155",
                }}
              >
                {label}
              </span>
            </div>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: 800,
                color: "#f8fafc",
                lineHeight: 1.2,
                margin: 0,
                marginBottom: "16px",
                maxWidth: "700px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {title}
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "auto",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  color: "#94a3b8",
                  fontWeight: 500,
                }}
              >
                {locale}
              </span>
              <span style={{ fontSize: "20px", color: "#475569" }}>|</span>
              <span
                style={{
                  fontSize: "20px",
                  color: "#10b981",
                  fontWeight: 600,
                }}
              >
                Tax Year {year}
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch {
    return new Response("Failed to generate og image", { status: 500 })
  }
}
