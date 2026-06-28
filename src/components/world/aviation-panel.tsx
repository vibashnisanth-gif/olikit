"use client";

import {useEffect, useState} from "react";

interface Delay {
  airport: string;
  name: string;
  status: string;
  reason: string;
}

export function AviationPanel() {
  const [delays, setDelays] = useState<Delay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/world/aviation")
      .then((r) => r.json())
      .then((d) => setDelays(d.delays))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
          Aviation Delays
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 text-xs text-zinc-500">Loading...</div>
        ) : delays.length === 0 ? (
          <div className="p-4 text-xs text-zinc-500">No active delays</div>
        ) : (
          <ul className="divide-y divide-zinc-800/50">
            {delays.map((d, i) => (
              <li key={i} className="px-3 py-2 hover:bg-zinc-800/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-zinc-200">{d.airport}</p>
                    <p className="text-[10px] text-zinc-500 truncate max-w-[180px]">{d.name}</p>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-900/40 text-red-300 font-medium">
                    {d.status}
                  </span>
                </div>
                {d.reason && (
                  <p className="text-[10px] text-zinc-500 mt-0.5 truncate">{d.reason}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
