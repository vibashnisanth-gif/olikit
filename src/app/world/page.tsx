"use client";

import {Shell} from "@/components/shell";
import {NewsPanel} from "@/components/world/news-panel";
import {MarketsPanel} from "@/components/world/markets-panel";
import {RiskPanel} from "@/components/world/risk-panel";

export default function WorldPage() {
  return (
    <Shell>
      <div className="-mx-4 sm:-mx-4">
        <div className="px-5 sm:px-8 py-5 bg-white border-b border-zinc-100">
          <h1 className="text-lg font-bold text-zinc-900 tracking-tight">World Monitor</h1>
          <p className="text-xs text-zinc-400 mt-0.5">Live global intelligence</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 bg-zinc-50">
          <div className="bg-white border-r border-zinc-100 h-[520px] overflow-hidden">
            <NewsPanel />
          </div>
          <div className="bg-white border-r border-zinc-100 h-[520px] overflow-hidden">
            <MarketsPanel />
          </div>
          <div className="bg-white h-[520px] overflow-hidden">
            <RiskPanel />
          </div>
        </div>

        <div className="px-5 sm:px-8 py-3 bg-white border-t border-zinc-100">
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
