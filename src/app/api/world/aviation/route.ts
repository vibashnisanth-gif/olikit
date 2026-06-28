import {NextResponse} from "next/server";

export const revalidate = 300;

export async function GET() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch("https://nasstatus.faa.gov/api/airport-status-list", {
      next: {revalidate: 300},
      headers: {"User-Agent": "Olikit/1.0"},
      signal: controller.signal,
    });
    clearTimeout(timeout);
    const text = await res.text();
    let data: Record<string, unknown>[];
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json({delays: []});
    }
    const delays = (Array.isArray(data) ? data : [])
      .filter((d) => d.delay === true || d.status === "Ground Delay" || d.status === "Ground Stop")
      .slice(0, 10)
      .map((d) => ({
        airport: d.IATA ?? d.icao ?? d.airport ?? "???",
        name: d.name ?? "",
        status: d.status ?? "Delay",
        reason: (d.reason as string) ?? (d.TMC as string) ?? "",
      }));
    return NextResponse.json({delays});
  } catch {
    return NextResponse.json({delays: []});
  }
}
