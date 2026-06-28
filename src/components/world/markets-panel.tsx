"use client";

import {useEffect, useState} from "react";

interface Quote {
  symbol: string;
  name: string;
  price: number;
  change: number;
  pctChange: number;
}

const DISPLAY: Record<string, string> = {
  "^GSPC": "S&P 500",
  "^DJI": "Dow Jones",
  "^IXIC": "NASDAQ",
  "^FTSE": "FTSE 100",
  "^N225": "Nikkei 225",
  "GC=F": "Gold",
  "CL=F": "Crude Oil",
  "BTC-USD": "Bitcoin",
};

const ICON: Record<string, string> = {
  "^GSPC": "📈",
  "^DJI": "🏦",
  "^IXIC": "💻",
  "^FTSE": "🇬🇧",
  "^N225": "🇯🇵",
  "GC=F": "🥇",
  "CL=F": "🛢️",
  "BTC-USD": "₿",
};

export function MarketsPanel() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/world/markets")
      .then((r) => r.json())
      .then((d) => setQuotes(d.quotes))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const fmt = (n: number, sym: string) => {
    if (sym === "BTC-USD") return `$${(n / 1000).toFixed(1)}k`;
    if (n >= 10000) return n.toLocaleString("en-US", {maximumFractionDigits: 0});
    return n.toLocaleString("en-US", {maximumFractionDigits: 2});
  };

  const up = (q: Quote) => q.pctChange >= 0;

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <h3 className="text-sm font-bold text-zinc-900 tracking-tight">Markets</h3>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-5 grid grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-20 bg-zinc-50 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : quotes.length === 0 ? (
          <div className="p-5 text-sm text-zinc-400">No market data</div>
        ) : (
          <div className="px-5 grid grid-cols-2 gap-2.5 pb-4">
            {quotes.map((q) => (
              <div
                key={q.symbol}
                className={`rounded-xl p-3.5 border transition-colors ${
                  up(q)
                    ? "bg-emerald-50/60 border-emerald-100 hover:bg-emerald-50"
                    : "bg-red-50/60 border-red-100 hover:bg-red-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">{ICON[q.symbol] ?? "📊"}</span>
                  <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-wide truncate">
                    {DISPLAY[q.symbol] ?? q.name}
                  </span>
                </div>
                <p className="text-lg font-black tabular-nums text-zinc-900 leading-none">
                  {fmt(q.price, q.symbol)}
                </p>
                <p
                  className={`text-xs font-bold tabular-nums mt-1 ${
                    up(q) ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {up(q) ? "▲" : "▼"} {Math.abs(q.pctChange).toFixed(2)}%
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
