import {NextResponse} from "next/server";

export const revalidate = 3600;

const COUNTRIES = [
  {code: "US", name: "United States"},
  {code: "GB", name: "United Kingdom"},
  {code: "AU", name: "Australia"},
  {code: "CA", name: "Canada"},
  {code: "DE", name: "Germany"},
  {code: "FR", name: "France"},
  {code: "JP", name: "Japan"},
  {code: "CN", name: "China"},
  {code: "IN", name: "India"},
  {code: "BR", name: "Brazil"},
  {code: "UA", name: "Ukraine"},
  {code: "RU", name: "Russia"},
];

export async function GET() {
  const results = await Promise.allSettled(
    COUNTRIES.map(async (c) => {
      const res = await fetch(
        `https://api.worldbank.org/v2/country/${c.code}/indicator/IC.BUS.EASE.XQ?format=json&per_page=1&date=2020:2024`,
        {next: {revalidate: 3600}}
      );
      const data = await res.json();
      const val = data[1]?.[0]?.value;
      return {code: c.code, name: c.name, easeOfBusiness: val ?? null};
    })
  );
  const countries = results
    .filter(
      (
        r
      ): r is PromiseFulfilledResult<{code: string; name: string; easeOfBusiness: number | null}> =>
        r.status === "fulfilled"
    )
    .map((r) => r.value)
    .sort((a, b) => (a.easeOfBusiness ?? 999) - (b.easeOfBusiness ?? 999));
  return NextResponse.json({countries});
}
