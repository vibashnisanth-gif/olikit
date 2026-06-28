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
}

function parseRss(xml: string): RssItem[] {
  const items: RssItem[] = [];
  const matches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);
  for (const m of matches) {
    const block = m[1];
    const title =
      block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
      block.match(/<title>(.*?)<\/title>/)?.[1];
    const link = block.match(/<link>(.*?)<\/link>/)?.[1];
    const pubDate = block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1];
    if (title)
      items.push({title: title.replace(/&amp;/g, "&").replace(/&#39;/g, "'"), link, pubDate});
  }
  return items.slice(0, 8);
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
        return {source: feed.name, items: parseRss(text)};
      })
    );
    const feeds = results
      .filter(
        (r): r is PromiseFulfilledResult<{source: string; items: RssItem[]}> =>
          r.status === "fulfilled"
      )
      .map((r) => r.value);
    return NextResponse.json({feeds});
  } catch {
    return NextResponse.json({feeds: []});
  }
}
