import {NextResponse} from "next/server";

export const revalidate = 300;

export async function GET() {
  const res = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson",
    {next: {revalidate: 300}}
  );
  const data = await res.json();
  const features = data.features.slice(0, 20).map((f: Record<string, unknown>) => {
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
  return NextResponse.json({features, count: data.metadata?.count ?? 0});
}
