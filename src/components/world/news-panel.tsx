"use client";

import {useEffect, useState} from "react";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  image?: string;
  description?: string;
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

  const hero = items[0];
  const rest = items.slice(1, 13);

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <h3 className="text-sm font-bold text-zinc-900 tracking-tight">News</h3>
        </div>
        <span className="text-[10px] text-zinc-400 font-medium">LIVE</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-5 space-y-4">
            <div className="h-44 bg-zinc-100 rounded-xl animate-pulse" />
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-24 bg-zinc-100 rounded-lg animate-pulse" />
                  <div className="h-3 bg-zinc-100 rounded w-full animate-pulse" />
                  <div className="h-3 bg-zinc-100 rounded w-2/3 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        ) : items.length === 0 ? (
          <div className="p-5 text-sm text-zinc-400">No news available</div>
        ) : (
          <>
            {hero && (
              <a
                href={hero.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 pb-4 group"
              >
                {hero.image && (
                  <div className="relative overflow-hidden rounded-xl mb-3">
                    <img
                      src={hero.image}
                      alt=""
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-[15px] font-bold leading-snug line-clamp-2 drop-shadow-lg">
                        {hero.title}
                      </p>
                      {hero.description && (
                        <p className="text-white/75 text-[12px] leading-relaxed mt-1.5 line-clamp-2">
                          {hero.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[10px] text-white/70 font-semibold uppercase tracking-wide">
                          {hero.source}
                        </span>
                        <span className="text-white/30">·</span>
                        <span className="text-[10px] text-white/70 font-medium">
                          {timeAgo(hero.pubDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {!hero.image && (
                  <div>
                    <p className="text-[15px] font-bold text-zinc-900 leading-snug line-clamp-2 group-hover:text-zinc-600 transition-colors">
                      {hero.title}
                    </p>
                    {hero.description && (
                      <p className="text-[12px] text-zinc-500 leading-relaxed mt-1.5 line-clamp-2">
                        {hero.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wide">
                        {hero.source}
                      </span>
                      <span className="text-zinc-200">·</span>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        {timeAgo(hero.pubDate)}
                      </span>
                    </div>
                  </div>
                )}
              </a>
            )}
            <div className="border-t border-zinc-100 px-5 pt-3 pb-4">
              <div className="grid grid-cols-2 gap-3">
                {rest.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-zinc-100 overflow-hidden hover:shadow-md hover:border-zinc-200 transition-all"
                  >
                    {item.image && (
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-3">
                      <p className="text-[12px] font-bold text-zinc-800 leading-[1.35] line-clamp-2 group-hover:text-zinc-950">
                        {item.title}
                      </p>
                      {item.description && (
                        <p className="text-[11px] text-zinc-500 leading-snug mt-1.5 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="text-[9px] text-zinc-400 font-semibold uppercase tracking-wider">
                          {item.source}
                        </span>
                        <span className="text-zinc-200">·</span>
                        <span className="text-[9px] text-zinc-400 font-medium">
                          {timeAgo(item.pubDate)}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
