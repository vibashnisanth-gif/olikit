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

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
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
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <h3 className="text-sm font-semibold text-zinc-900 tracking-tight">Live News</h3>
        </div>
      </div>
      <div className="flex gap-1.5 px-5 pb-3 overflow-x-auto">
        {feeds.map((f, i) => (
          <button
            key={f.source}
            onClick={() => setActive(i)}
            className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-all font-medium ${
              i === active
                ? "bg-zinc-900 text-white shadow-sm"
                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700"
            }`}
          >
            {f.source}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto border-t border-zinc-100">
        {loading ? (
          <div className="p-5 space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-3.5 bg-zinc-100 rounded-md w-full animate-pulse" />
                <div className="h-3.5 bg-zinc-100 rounded-md w-3/4 animate-pulse" />
                <div className="h-2.5 bg-zinc-50 rounded w-16 animate-pulse" />
              </div>
            ))}
          </div>
        ) : !current ? (
          <div className="p-5 text-sm text-zinc-400">No news available</div>
        ) : (
          <ul>
            {current.items.map((item, i) => (
              <li key={i} className="border-b border-zinc-50 last:border-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3.5 hover:bg-zinc-50/80 transition-colors group"
                >
                  <p className="text-[13px] text-zinc-800 leading-[1.45] font-medium group-hover:text-zinc-950 line-clamp-2">
                    {item.title}
                  </p>
                  {item.pubDate && (
                    <p className="text-[11px] text-zinc-400 mt-1.5 font-medium">
                      {timeAgo(item.pubDate)}
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
