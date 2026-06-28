"use client";

import {useEffect, useState} from "react";

interface Quake {
  id: string;
  place: string;
  mag: number;
  time: number;
  url: string;
  tsunami: number;
  coord: number[];
}

export function EarthquakesPanel() {
  const [quakes, setQuakes] = useState<Quake[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/world/earthquakes")
      .then((r) => r.json())
      .then((d) => setQuakes(d.features))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const magColor = (m: number) =>
    m >= 5 ? "text-red-400" : m >= 4 ? "text-orange-400" : "text-yellow-400";

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
          Earthquakes <span className="text-zinc-500">M2.5+ (7d)</span>
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 text-xs text-zinc-500">Loading...</div>
        ) : quakes.length === 0 ? (
          <div className="p-4 text-xs text-zinc-500">No recent earthquakes</div>
        ) : (
          <ul className="divide-y divide-zinc-800/50">
            {quakes.map((q) => (
              <li key={q.id} className="px-3 py-2 hover:bg-zinc-800/30 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-200 truncate">{q.place}</p>
                    <p className="text-[10px] text-zinc-500">
                      {new Date(q.time).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      {q.tsunami ? " · Tsunami warning" : ""}
                    </p>
                  </div>
                  <span className={`text-sm font-bold tabular-nums ${magColor(q.mag)}`}>
                    {q.mag.toFixed(1)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
