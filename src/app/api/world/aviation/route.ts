import {NextResponse} from "next/server";

export const revalidate = 300;

export async function GET() {
  const res = await fetch("https://nasstatus.faa.gov/api/airport-status-list", {
    next: {revalidate: 300},
    headers: {"User-Agent": "Olikit/1.0"},
  });
  const data = await res.json();
  const delays = (Array.isArray(data) ? data : [])
    .filter(
      (d: Record<string, unknown>) =>
        d.delay === true || d.status === "Ground Delay" || d.status === "Ground Stop"
    )
    .slice(0, 10)
    .map((d: Record<string, unknown>) => ({
      airport: d.IATA ?? d.icao ?? d.airport,
      name: d.name,
      status: d.status,
      reason: d.reason ?? d.TMC,
    }));
  return NextResponse.json({delays});
}
