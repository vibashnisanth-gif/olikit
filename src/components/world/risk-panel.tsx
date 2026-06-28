"use client";

import {useEffect, useState} from "react";

interface Country {
  code: string;
  name: string;
  rank: number;
}

export function RiskPanel() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/world/risk")
      .then((r) => r.json())
      .then((d) => setCountries(d.countries))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const maxRank = Math.max(...countries.map((c) => c.rank), 1);

  const tier = (rank: number) => {
    const pct = rank / maxRank;
    if (pct <= 0.15)
      return {
        color: "bg-emerald-500",
        text: "text-emerald-700",
        bg: "bg-emerald-50",
        label: "Easy",
      };
    if (pct <= 0.3)
      return {color: "bg-green-500", text: "text-green-700", bg: "bg-green-50", label: "Good"};
    if (pct <= 0.5)
      return {color: "bg-amber-400", text: "text-amber-700", bg: "bg-amber-50", label: "Moderate"};
    if (pct <= 0.75)
      return {color: "bg-orange-400", text: "text-orange-700", bg: "bg-orange-50", label: "Hard"};
    return {color: "bg-red-400", text: "text-red-700", bg: "bg-red-50", label: "Difficult"};
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500" />
          </span>
          <h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Country Risk</h3>
        </div>
        <span className="text-[10px] text-zinc-400 font-medium">Ease of Business</span>
      </div>
      <div className="flex-1 overflow-y-auto border-t border-zinc-100">
        {loading ? (
          <div className="p-5 space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <div className="h-6 w-6 bg-zinc-100 rounded-full animate-pulse" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-3 bg-zinc-100 rounded w-24 animate-pulse" />
                  <div className="h-2 bg-zinc-50 rounded-full w-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : countries.length === 0 ? (
          <div className="p-5 text-sm text-zinc-400">No data available</div>
        ) : (
          <div className="divide-y divide-zinc-50">
            {countries.map((c) => {
              const t = tier(c.rank);
              const barPct = ((maxRank - c.rank + 1) / maxRank) * 100;
              return (
                <div key={c.code} className="px-5 py-3 hover:bg-zinc-50/50 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2">
                    <img
                      src={`https://flagcdn.com/24x18/${c.code.toLowerCase()}.webp`}
                      alt={`${c.name} flag`}
                      width={24}
                      height={18}
                      className="rounded-sm object-cover"
                      loading="lazy"
                    />
                    <span className="text-[13px] font-semibold text-zinc-800 flex-1 truncate">
                      {c.name}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${t.bg} ${t.text}`}
                    >
                      {t.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${t.color}`}
                        style={{width: `${barPct}%`}}
                      />
                    </div>
                    <span className="text-[11px] font-bold tabular-nums text-zinc-400 w-6 text-right">
                      #{c.rank}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
