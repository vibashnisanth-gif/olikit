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

const CATEGORY: Record<string, string> = {
  "^GSPC": "index",
  "^DJI": "index",
  "^IXIC": "index",
  "^FTSE": "index",
  "^N225": "index",
  "GC=F": "commodity",
  "CL=F": "commodity",
  "BTC-USD": "crypto",
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

  const indices = quotes.filter((q) => CATEGORY[q.symbol] === "index");
  const commodities = quotes.filter((q) => CATEGORY[q.symbol] === "commodity");
  const crypto = quotes.filter((q) => CATEGORY[q.symbol] === "crypto");

  const rows = (items: Quote[]) =>
    items.map((q) => (
      <div key={q.symbol} className="flex items-center justify-between py-2.5 px-1">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-zinc-800 truncate">
            {DISPLAY[q.symbol] ?? q.name}
          </p>
        </div>
        <div className="text-right shrink-0 ml-3">
          <p className="text-[13px] font-bold text-zinc-900 tabular-nums">
            {fmt(q.price, q.symbol)}
          </p>
          <p
            className={`text-[11px] font-semibold tabular-nums ${
              q.pctChange >= 0 ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {q.pctChange >= 0 ? "+" : ""}
            {q.pctChange.toFixed(2)}%
          </p>
        </div>
      </div>
    ));

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Markets</h3>
        </div>
        <span className="text-[10px] text-zinc-400 font-medium">Real-time</span>
      </div>
      <div className="flex-1 overflow-y-auto border-t border-zinc-100 pt-3">
        {loading ? (
          <div className="px-5 space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between py-2">
                <div className="h-3.5 bg-zinc-100 rounded w-20 animate-pulse" />
                <div className="h-3.5 bg-zinc-100 rounded w-14 animate-pulse" />
              </div>
            ))}
          </div>
        ) : quotes.length === 0 ? (
          <div className="px-5 py-4 text-sm text-zinc-400">No market data</div>
        ) : (
          <div className="space-y-1">
            {indices.length > 0 && (
              <div className="px-5 pb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Indices
                </p>
                <div className="divide-y divide-zinc-100">{rows(indices)}</div>
              </div>
            )}
            {commodities.length > 0 && (
              <div className="px-5 pb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Commodities
                </p>
                <div className="divide-y divide-zinc-100">{rows(commodities)}</div>
              </div>
            )}
            {crypto.length > 0 && (
              <div className="px-5 pb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Crypto
                </p>
                <div className="divide-y divide-zinc-100">{rows(crypto)}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
