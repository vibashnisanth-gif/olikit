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
        color: "bg-blue-500",
        text: "text-blue-700",
        bg: "bg-blue-50",
        ring: "ring-blue-200",
        label: "Easy",
      };
    if (pct <= 0.3)
      return {
        color: "bg-green-500",
        text: "text-green-700",
        bg: "bg-green-50",
        ring: "ring-green-200",
        label: "Good",
      };
    if (pct <= 0.5)
      return {
        color: "bg-amber-400",
        text: "text-amber-700",
        bg: "bg-amber-50",
        ring: "ring-amber-200",
        label: "Moderate",
      };
    if (pct <= 0.75)
      return {
        color: "bg-orange-400",
        text: "text-orange-700",
        bg: "bg-orange-50",
        ring: "ring-orange-200",
        label: "Hard",
      };
    return {
      color: "bg-red-400",
      text: "text-red-700",
      bg: "bg-red-50",
      ring: "ring-red-200",
      label: "Difficult",
    };
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
          </span>
          <h3 className="text-sm font-bold text-zinc-900 tracking-tight">Country Risk</h3>
        </div>
        <span className="text-[10px] text-zinc-400 font-medium">Ease of Business</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-5 space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <div className="h-10 w-10 bg-zinc-100 rounded-xl animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-zinc-100 rounded w-24 animate-pulse" />
                  <div className="h-2 bg-zinc-50 rounded-full w-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : countries.length === 0 ? (
          <div className="p-5 text-sm text-zinc-400">No data available</div>
        ) : (
          <div className="px-5 space-y-2 pb-4">
            {countries.map((c, i) => {
              const t = tier(c.rank);
              const barPct = ((maxRank - c.rank + 1) / maxRank) * 100;
              return (
                <div
                  key={c.code}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all hover:shadow-sm ${t.bg} border-transparent ring-1 ${t.ring}`}
                >
                  <div className="relative">
                    <img
                      src={`https://flagcdn.com/40x30/${c.code.toLowerCase()}.webp`}
                      alt={`${c.name} flag`}
                      width={40}
                      height={30}
                      className="rounded-lg object-cover shadow-sm"
                      loading="lazy"
                    />
                    <span className="absolute -top-1.5 -left-1.5 bg-zinc-900 text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13px] font-bold text-zinc-800 truncate">{c.name}</span>
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full ${t.bg} ${t.text} ring-1 ${t.ring}`}
                      >
                        {t.label}
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${t.color}`}
                        style={{width: `${barPct}%`}}
                      />
                    </div>
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
