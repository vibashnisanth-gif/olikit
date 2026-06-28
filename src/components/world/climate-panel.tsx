"use client";

import {useEffect, useState} from "react";

interface ClimateEntry {
  date: string;
  value: unknown;
}

interface ClimateSeries {
  id: string;
  name: string;
  entries: ClimateEntry[];
}

export function ClimatePanel() {
  const [series, setSeries] = useState<ClimateSeries[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/world/climate")
      .then((r) => r.json())
      .then((d) => setSeries(d.series))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-blue-400" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Climate</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        {loading ? (
          <div className="text-xs text-zinc-500">Loading...</div>
        ) : series.length === 0 ? (
          <div className="text-xs text-zinc-500">No climate data</div>
        ) : (
          <div className="space-y-4">
            {series.map((s) => (
              <div key={s.id}>
                <p className="text-[10px] font-bold uppercase text-zinc-400 mb-1">{s.name}</p>
                {s.entries.slice(-6).map((e, i) => (
                  <div key={i} className="flex items-center justify-between py-0.5">
                    <span className="text-[10px] text-zinc-500">{e.date}</span>
                    <span className="text-[10px] font-medium text-zinc-200 tabular-nums">
                      {typeof e.value === "number" ? e.value.toFixed(2) : String(e.value)}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
