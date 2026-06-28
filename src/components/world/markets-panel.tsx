"use client";

import {useEffect, useState} from "react";

interface Quote {
  symbol: string;
  name: string;
  price: number;
  change: number;
  pctChange: number;
}

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

  const fmt = (n: number, sym: string) =>
    sym.includes("BTC")
      ? `$${(n / 1000).toFixed(1)}k`
      : n.toLocaleString("en-US", {maximumFractionDigits: 2});

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Markets</h3>
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between">
                <div className="space-y-1.5">
                  <div className="h-3 bg-zinc-800 rounded w-24 animate-pulse" />
                  <div className="h-2 bg-zinc-800 rounded w-12 animate-pulse" />
                </div>
                <div className="space-y-1.5 text-right">
                  <div className="h-3 bg-zinc-800 rounded w-16 animate-pulse" />
                  <div className="h-2 bg-zinc-800 rounded w-10 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : quotes.length === 0 ? (
          <div className="p-4 text-xs text-zinc-500">No market data</div>
        ) : (
          <ul className="divide-y divide-zinc-800/50">
            {quotes.map((q) => (
              <li
                key={q.symbol}
                className="px-4 py-3 flex items-center justify-between hover:bg-zinc-800/20 transition-colors"
              >
                <div>
                  <p className="text-[13px] font-medium text-zinc-100">{q.name}</p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">{q.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-zinc-100 tabular-nums">
                    {fmt(q.price, q.symbol)}
                  </p>
                  <p
                    className={`text-[11px] font-semibold tabular-nums ${
                      q.pctChange >= 0 ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {q.pctChange >= 0 ? "+" : ""}
                    {q.pctChange.toFixed(2)}%
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
