"use client";

import {useEffect, useState} from "react";

interface Country {
  code: string;
  name: string;
  easeOfBusiness: number | null;
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

  const rankColor = (i: number) =>
    i < 3
      ? "text-green-400"
      : i < 6
        ? "text-yellow-400"
        : i < 9
          ? "text-orange-400"
          : "text-red-400";

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-purple-400" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
          Country Risk <span className="text-zinc-500">Ease of Business</span>
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 text-xs text-zinc-500">Loading...</div>
        ) : (
          <ul className="divide-y divide-zinc-800/50">
            {countries.map((c, i) => (
              <li
                key={c.code}
                className="px-3 py-2 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold w-4 text-right ${rankColor(i)}`}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-xs text-zinc-200">{c.name}</p>
                    <p className="text-[10px] text-zinc-500">{c.code}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-zinc-300 tabular-nums">
                  {c.easeOfBusiness ?? "—"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
