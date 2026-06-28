import {NextResponse} from "next/server";

export const revalidate = 3600;

const SERIES = [
  {id: "Global", name: "Global Temp Anomaly", sid: "010-012"},
  {id: "CO2", name: "CO2 (Mauna Loa)", sid: "011-008"},
];

export async function GET() {
  try {
    const results = await Promise.allSettled(
      SERIES.map(async (s) => {
        const res = await fetch(
          `https://www.ncdc.noaa.gov/cag/global/time-series/globe/land_ocean/1/0/${s.sid}/1880-2026.json`,
          {next: {revalidate: 3600}, headers: {"User-Agent": "Olikit/1.0"}}
        );
        const text = await res.text();
        let data: Record<string, unknown>;
        try {
          data = JSON.parse(text);
        } catch {
          return {id: s.id, name: s.name, entries: []};
        }
        const entries = Object.entries(
          (data as Record<string, Record<string, unknown>>).data ?? {}
        ).slice(-12);
        return {id: s.id, name: s.name, entries: entries.map(([k, v]) => ({date: k, value: v}))};
      })
    );
    const series = results
      .filter(
        (
          r
        ): r is PromiseFulfilledResult<{
          id: string;
          name: string;
          entries: {date: string; value: unknown}[];
        }> => r.status === "fulfilled"
      )
      .map((r) => r.value);
    return NextResponse.json({series});
  } catch {
    return NextResponse.json({series: []});
  }
}
