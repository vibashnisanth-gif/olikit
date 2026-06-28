"use client";

import {NewsPanel} from "@/components/world/news-panel";
import {MarketsPanel} from "@/components/world/markets-panel";
import {RiskPanel} from "@/components/world/risk-panel";

export function WorldDashboard() {
  return (
    <div className="bg-zinc-50">
      <div className="bg-white border-b border-zinc-100">
        <NewsPanel />
      </div>
      <div className="bg-white border-b border-zinc-100">
        <MarketsPanel />
      </div>
      <div className="bg-white">
        <RiskPanel />
      </div>
    </div>
  );
}
