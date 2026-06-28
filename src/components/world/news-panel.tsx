"use client";

import {useEffect, useState} from "react";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  image?: string;
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
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/world/news")
      .then((r) => r.json())
      .then((d) => setItems(d.items))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

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
      <div className="flex-1 overflow-y-auto border-t border-zinc-100">
        {loading ? (
          <div className="p-5 space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-3">
                <div className="h-16 w-20 bg-zinc-100 rounded-lg animate-pulse shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-3.5 bg-zinc-100 rounded-md w-full animate-pulse" />
                  <div className="h-3.5 bg-zinc-100 rounded-md w-3/4 animate-pulse" />
                  <div className="h-2.5 bg-zinc-50 rounded w-16 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="p-5 text-sm text-zinc-400">No news available</div>
        ) : (
          <ul>
            {items.map((item, i) => (
              <li key={i} className="border-b border-zinc-50 last:border-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 px-5 py-3.5 hover:bg-zinc-50/80 transition-colors group"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      width={80}
                      height={64}
                      className="rounded-lg object-cover w-20 h-16 shrink-0 bg-zinc-100"
                      loading="lazy"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] text-zinc-800 leading-[1.45] font-medium group-hover:text-zinc-950 line-clamp-2">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[11px] text-zinc-400 font-medium">{item.source}</span>
                      {item.pubDate && (
                        <>
                          <span className="text-zinc-200">·</span>
                          <span className="text-[11px] text-zinc-400 font-medium">
                            {timeAgo(item.pubDate)}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
