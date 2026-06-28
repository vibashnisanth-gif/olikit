"use client";

import {Shell} from "@/components/shell";
import {NewsPanel} from "@/components/world/news-panel";
import {MarketsPanel} from "@/components/world/markets-panel";
import {RiskPanel} from "@/components/world/risk-panel";

export default function WorldPage() {
  return (
    <Shell>
      <div className="-mx-4 sm:-mx-4">
        <div className="px-4 sm:px-6 py-5 border-b border-zinc-200">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-zinc-950 flex items-center justify-center">
              <span className="text-white text-sm font-bold">W</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-950">World Monitor</h1>
              <p className="text-xs text-zinc-500">Live global intelligence dashboard</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200">
          <div className="bg-white h-[480px] overflow-hidden">
            <NewsPanel />
          </div>
          <div className="bg-white h-[480px] overflow-hidden">
            <MarketsPanel />
          </div>
          <div className="bg-white h-[480px] overflow-hidden">
            <RiskPanel />
          </div>
        </div>

        <div className="px-4 sm:px-6 py-3 bg-zinc-50 border-t border-zinc-200">
          <p className="text-[11px] text-zinc-400">
            Data: Yahoo Finance, World Bank, public RSS feeds · Map:{" "}
            <a
              href="https://github.com/koala73/worldmonitor"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-600"
            >
              World Monitor
            </a>{" "}
            (AGPL-3.0)
          </p>
        </div>
      </div>
    </Shell>
  );
}
