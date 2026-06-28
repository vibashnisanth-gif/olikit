import {NextResponse} from "next/server";

export const revalidate = 300;

const SYMBOLS = ["^GSPC", "^DJI", "^IXIC", "^FTSE", "^N225", "GC=F", "CL=F", "BTC-USD"];

export async function GET() {
  const results = await Promise.allSettled(
    SYMBOLS.map(async (sym) => {
      const res = await fetch(
        `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?range=1d&interval=1d`,
        {next: {revalidate: 300}, headers: {"User-Agent": "Mozilla/5.0"}}
      );
      const data = await res.json();
      const meta = data.chart?.result?.[0]?.meta;
      if (!meta) return null;
      return {
        symbol: sym,
        name: meta.shortName ?? meta.symbol ?? sym,
        price: meta.regularMarketPrice,
        change: meta.regularMarketPrice - meta.chartPreviousClose,
        pctChange:
          ((meta.regularMarketPrice - meta.chartPreviousClose) / meta.chartPreviousClose) * 100,
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
}
