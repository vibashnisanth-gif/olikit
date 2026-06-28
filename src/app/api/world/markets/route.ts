import {NextResponse} from "next/server";

export const revalidate = 300;

const SYMBOLS = ["^GSPC", "^DJI", "^IXIC", "^FTSE", "^N225", "GC=F", "CL=F", "BTC-USD"];

export async function GET() {
  try {
    const results = await Promise.allSettled(
      SYMBOLS.map(async (sym) => {
        const res = await fetch(
          `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?range=1d&interval=1d`,
          {next: {revalidate: 300}, headers: {"User-Agent": "Mozilla/5.0"}}
        );
        const text = await res.text();
        let data: Record<string, unknown>;
        try {
          data = JSON.parse(text);
        } catch {
          return null;
        }
        const chart = (data as Record<string, unknown>).chart as
          | Record<string, unknown>
          | undefined;
        const result = chart?.result as Array<Record<string, unknown>> | undefined;
        const meta = result?.[0]?.meta as Record<string, unknown> | undefined;
        if (!meta) return null;
        const price = meta.regularMarketPrice as number;
        const prev = meta.chartPreviousClose as number;
        return {
          symbol: sym,
          name: (meta.shortName as string) ?? (meta.symbol as string) ?? sym,
          price,
          change: price - prev,
          pctChange: ((price - prev) / prev) * 100,
        };
      })
    );
    const quotes = results
      .filter(
        (
          r
        ): r is PromiseFulfilledResult<{
          symbol: string;
          name: string;
          price: number;
          change: number;
          pctChange: number;
        } | null> => r.status === "fulfilled" && r.value !== null
      )
      .map((r) => r.value!);
    return NextResponse.json({quotes});
  } catch {
    return NextResponse.json({quotes: []});
  }
}
