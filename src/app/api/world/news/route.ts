import {NextResponse} from "next/server";

export const revalidate = 600;

const FEEDS = [
  {name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml"},
  {name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml"},
  {name: "Reuters", url: "https://www.reutersagency.com/feed/"},
];

interface RssItem {
  title?: string;
  link?: string;
  pubDate?: string;
  source?: string;
  image?: string;
}

function parseRss(xml: string, source: string): RssItem[] {
  const items: RssItem[] = [];
  const matches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);
  for (const m of matches) {
    const block = m[1];
    const title =
      block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
      block.match(/<title>(.*?)<\/title>/)?.[1];
    const link = block.match(/<link>(.*?)<\/link>/)?.[1];
    const pubDate = block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1];
    const image =
      block.match(/<media:content[^>]*url="([^"]+)"/)?.[1] ??
      block.match(/<enclosure[^>]*url="([^"]+)"/)?.[1] ??
      block.match(/<media:thumbnail[^>]*url="([^"]+)"/)?.[1] ??
      block.match(/<image><url>(.*?)<\/url>/)?.[1] ??
      undefined;
    if (title)
      items.push({
        title: title.replace(/&amp;/g, "&").replace(/&#39;/g, "'"),
        link,
        pubDate,
        source,
        image,
      });
  }
  return items.slice(0, 10);
}

export async function GET() {
  try {
    const results = await Promise.allSettled(
      FEEDS.map(async (feed) => {
        const res = await fetch(feed.url, {
          next: {revalidate: 600},
          headers: {"User-Agent": "Olikit/1.0"},
        });
        const text = await res.text();
        return parseRss(text, feed.name);
      })
    );
    const allItems = results
      .filter((r): r is PromiseFulfilledResult<RssItem[]> => r.status === "fulfilled")
      .flatMap((r) => r.value)
      .sort((a, b) => {
        if (!a.pubDate || !b.pubDate) return 0;
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
      })
      .slice(0, 30);
    return NextResponse.json({items: allItems});
  } catch {
    return NextResponse.json({items: []});
  }
}
