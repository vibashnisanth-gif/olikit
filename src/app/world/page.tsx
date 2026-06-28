"use client";

import {Shell} from "@/components/shell";
import {EarthquakesPanel} from "@/components/world/earthquakes-panel";
import {NewsPanel} from "@/components/world/news-panel";
import {MarketsPanel} from "@/components/world/markets-panel";
import {ClimatePanel} from "@/components/world/climate-panel";
import {AviationPanel} from "@/components/world/aviation-panel";
import {RiskPanel} from "@/components/world/risk-panel";

export default function WorldPage() {
  return (
    <Shell>
      <div className="-mx-4 sm:-mx-4">
        <div className="px-4 sm:px-4 py-4">
          <h1 className="text-2xl font-bold text-zinc-950">World Monitor</h1>
          <p className="mt-1 text-sm text-zinc-600">Live global intelligence dashboard.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border-y border-zinc-200">
          <div className="bg-white h-[400px]">
            <EarthquakesPanel />
          </div>
          <div className="bg-white h-[400px]">
            <NewsPanel />
          </div>
          <div className="bg-white h-[400px]">
            <MarketsPanel />
          </div>
          <div className="bg-white h-[400px]">
            <ClimatePanel />
          </div>
          <div className="bg-white h-[400px]">
            <AviationPanel />
          </div>
          <div className="bg-white h-[400px]">
            <RiskPanel />
          </div>
        </div>

        <div className="px-4 sm:px-4 py-4">
          <p className="text-xs text-zinc-400">
            Data from USGS, NOAA, FAA, World Bank, and public RSS feeds. Map powered by{" "}
            <a
              href="https://github.com/koala73/worldmonitor"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-600"
            >
              World Monitor
            </a>{" "}
            (AGPL-3.0).
          </p>
        </div>
      </div>
    </Shell>
  );
}
