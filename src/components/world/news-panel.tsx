"use client";

import {useEffect, useState} from "react";

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
}

interface Feed {
  source: string;
  items: FeedItem[];
}

export function NewsPanel() {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/world/news")
      .then((r) => r.json())
      .then((d) => setFeeds(d.feeds))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const current = feeds[active];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Live News</h3>
      </div>
      <div className="flex gap-1 border-b border-zinc-800 px-4 py-2 overflow-x-auto">
        {feeds.map((f, i) => (
          <button
            key={f.source}
            onClick={() => setActive(i)}
            className={`text-[11px] px-2.5 py-1 rounded-md whitespace-nowrap transition-all font-medium ${
              i === active
                ? "bg-zinc-700 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
            }`}
          >
            {f.source}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4 space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-1.5">
                <div className="h-3 bg-zinc-800 rounded w-full animate-pulse" />
                <div className="h-3 bg-zinc-800 rounded w-2/3 animate-pulse" />
              </div>
            ))}
          </div>
        ) : !current ? (
          <div className="p-4 text-xs text-zinc-500">No news available</div>
        ) : (
          <ul className="divide-y divide-zinc-800/50">
            {current.items.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 hover:bg-zinc-800/20 transition-colors"
                >
                  <p className="text-[13px] text-zinc-200 leading-snug line-clamp-2 hover:text-white">
                    {item.title}
                  </p>
                  {item.pubDate && (
                    <p className="text-[10px] text-zinc-500 mt-1.5">
                      {new Date(item.pubDate).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  )}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
