"use client";

import {useEffect, useState} from "react";

interface Country {
  code: string;
  name: string;
  rank: number;
}

const FLAGS: Record<string, string> = {
  SG: "🇸🇬",
  HK: "🇭🇰",
  NZ: "🇳🇿",
  DK: "🇩🇰",
  KR: "🇰🇷",
  US: "🇺🇸",
  GB: "🇬🇧",
  NO: "🇳🇴",
  SE: "🇸🇪",
  DE: "🇩🇪",
  AU: "🇦🇺",
  CA: "🇨🇦",
  FR: "🇫🇷",
  JP: "🇯🇵",
  CN: "🇨🇳",
  IN: "🇮🇳",
  BR: "🇧🇷",
  RU: "🇷🇺",
  UA: "🇺🇦",
  NG: "🇳🇬",
};

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

  const maxRank = Math.max(...countries.map((c) => c.rank));

  const tier = (rank: number) => {
    const pct = rank / maxRank;
    if (pct <= 0.2) return {bar: "bg-emerald-500", text: "text-emerald-400", label: "Easy"};
    if (pct <= 0.4) return {bar: "bg-green-500", text: "text-green-400", label: "Good"};
    if (pct <= 0.6) return {bar: "bg-yellow-500", text: "text-yellow-400", label: "Moderate"};
    if (pct <= 0.8) return {bar: "bg-orange-500", text: "text-orange-400", label: "Hard"};
    return {bar: "bg-red-500", text: "text-red-400", label: "Difficult"};
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Country Risk</h3>
        </div>
        <span className="text-[10px] text-zinc-500">Ease of Business Rank</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 text-xs text-zinc-500">Loading...</div>
        ) : countries.length === 0 ? (
          <div className="p-4 text-xs text-zinc-500">No data available</div>
        ) : (
          <div className="divide-y divide-zinc-800/50">
            {countries.map((c) => {
              const t = tier(c.rank);
              const barPct = ((maxRank - c.rank) / maxRank) * 100;
              return (
                <div key={c.code} className="px-4 py-3 hover:bg-zinc-800/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg leading-none">{FLAGS[c.code] ?? "🏳️"}</span>
                    <span className="text-sm font-medium text-zinc-100 flex-1">{c.name}</span>
                    <span className="text-xs font-bold tabular-nums text-zinc-300">#{c.rank}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${t.bar}`}
                        style={{width: `${barPct}%`}}
                      />
                    </div>
                    <span className={`text-[10px] font-semibold w-16 text-right ${t.text}`}>
                      {t.label}
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
