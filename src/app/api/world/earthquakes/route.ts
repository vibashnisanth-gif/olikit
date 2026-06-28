import {NextResponse} from "next/server";

export const revalidate = 300;

export async function GET() {
  try {
    const res = await fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson",
      {next: {revalidate: 300}}
    );
    const text = await res.text();
    let data: Record<string, unknown>;
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json({features: [], count: 0});
    }
    const feats = ((data.features as Array<Record<string, unknown>>) ?? [])
      .slice(0, 20)
      .map((f) => {
        const props = f.properties as Record<string, unknown>;
        const coords = f.geometry as Record<string, unknown>;
        return {
          id: f.id,
          place: props.place,
          mag: props.mag,
          time: props.time,
          url: props.url,
          tsunami: props.tsunami,
          coord: (coords.coordinates as number[]).slice(0, 2),
        };
      });
    return NextResponse.json({
      features: feats,
      count: (data.metadata as Record<string, unknown>)?.count ?? 0,
    });
  } catch {
    return NextResponse.json({features: [], count: 0});
  }
}
