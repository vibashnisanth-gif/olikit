"use client";

import {useEffect, useState} from "react";

interface Country {
  code: string;
  name: string;
  easeOfBusiness: number | null;
}

const FLAGS: Record<string, string> = {
  US: "🇺🇸",
  GB: "🇬🇧",
  AU: "🇦🇺",
  CA: "🇨🇦",
  DE: "🇩🇪",
  FR: "🇫🇷",
  JP: "🇯🇵",
  CN: "🇨🇳",
  IN: "🇮🇳",
  BR: "🇧🇷",
  UA: "🇺🇦",
  RU: "🇷🇺",
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

  const maxRank = Math.max(...countries.map((c) => c.easeOfBusiness ?? 0), 1);

  const tierColor = (rank: number | null) => {
    if (!rank) return "bg-zinc-700";
    const pct = rank / maxRank;
    if (pct <= 0.33) return "bg-green-500";
    if (pct <= 0.66) return "bg-yellow-500";
    return "bg-red-500";
  };

  const tierLabel = (rank: number | null) => {
    if (!rank) return "—";
    const pct = rank / maxRank;
    if (pct <= 0.33) return "Easy";
    if (pct <= 0.66) return "Moderate";
    return "Difficult";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-purple-400" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Country Risk</h3>
        <span className="text-[10px] text-zinc-500 ml-auto">Ease of Business</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 text-xs text-zinc-500">Loading...</div>
        ) : (
          <div className="divide-y divide-zinc-800/50">
            {countries.map((c, i) => {
              const barWidth = c.easeOfBusiness ? (c.easeOfBusiness / maxRank) * 100 : 0;
              return (
                <div key={c.code} className="px-3 py-2.5 hover:bg-zinc-800/30 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-base leading-none">{FLAGS[c.code] ?? "🏳️"}</span>
                    <span className="text-xs font-medium text-zinc-200 flex-1 truncate">
                      {c.name}
                    </span>
                    <span className="text-[10px] font-bold tabular-nums text-zinc-400">
                      #{c.easeOfBusiness ?? "—"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${tierColor(c.easeOfBusiness)}`}
                        style={{width: `${barWidth}%`}}
                      />
                    </div>
                    <span
                      className={`text-[9px] font-medium w-14 text-right ${
                        c.easeOfBusiness && c.easeOfBusiness / maxRank <= 0.33
                          ? "text-green-400"
                          : c.easeOfBusiness && c.easeOfBusiness / maxRank <= 0.66
                            ? "text-yellow-400"
                            : "text-red-400"
                      }`}
                    >
                      {tierLabel(c.easeOfBusiness)}
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
