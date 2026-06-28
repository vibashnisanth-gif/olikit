"use client";

import {Shell} from "@/components/shell";

export default function WorldPage() {
  return (
    <Shell>
      <div className="-mx-4 sm:-mx-4">
        <div className="mb-4 px-4 sm:px-4">
          <h1 className="text-2xl font-bold text-zinc-950">World Monitor</h1>
          <p className="mt-1 text-sm text-zinc-600">Live global news and events dashboard.</p>
        </div>

        <div className="overflow-hidden border-y border-zinc-200">
          <iframe
            src="https://worldmonitor.app/embed"
            title="World Monitor — Live Global News & Events"
            className="h-[80vh] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          />
        </div>

        <p className="mt-4 px-4 sm:px-4 text-xs text-zinc-400">
          Powered by{" "}
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
    </Shell>
  );
}
