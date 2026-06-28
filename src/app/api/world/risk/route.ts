import {NextResponse} from "next/server";

export const revalidate = 86400;

const COUNTRIES = [
  {code: "SG", name: "Singapore", rank: 1},
  {code: "HK", name: "Hong Kong", rank: 2},
  {code: "NZ", name: "New Zealand", rank: 3},
  {code: "DK", name: "Denmark", rank: 4},
  {code: "KR", name: "South Korea", rank: 5},
  {code: "US", name: "United States", rank: 6},
  {code: "GB", name: "United Kingdom", rank: 8},
  {code: "NO", name: "Norway", rank: 9},
  {code: "SE", name: "Sweden", rank: 10},
  {code: "DE", name: "Germany", rank: 11},
  {code: "AU", name: "Australia", rank: 14},
  {code: "CA", name: "Canada", rank: 15},
  {code: "FR", name: "France", rank: 25},
  {code: "JP", name: "Japan", rank: 29},
  {code: "CN", name: "China", rank: 31},
  {code: "IN", name: "India", rank: 63},
  {code: "BR", name: "Brazil", rank: 66},
  {code: "RU", name: "Russia", rank: 72},
  {code: "UA", name: "Ukraine", rank: 97},
  {code: "NG", name: "Nigeria", rank: 137},
];

export async function GET() {
  return NextResponse.json({countries: COUNTRIES});
}
