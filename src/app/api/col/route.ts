import { NextRequest, NextResponse } from 'next/server';
import { createServices } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { colDB } = createServices();
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action') || 'entries';

    switch (action) {
      case 'entries': {
        const result = await colDB.getEntries({
          countryCode: searchParams.get('countryCode') || undefined,
          cityId: searchParams.get('cityId') ? parseInt(searchParams.get('cityId')!) : undefined,
          categorySlug: searchParams.get('categorySlug') || undefined,
          year: searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined,
          page: searchParams.get('page') ? parseInt(searchParams.get('page')!) : undefined,
          pageSize: searchParams.get('pageSize') ? parseInt(searchParams.get('pageSize')!) : undefined,
        });
        return NextResponse.json(result);
      }

      case 'city-summary': {
        const cityIdStr = searchParams.get('cityId');
        if (!cityIdStr) {
          return NextResponse.json({ error: 'cityId is required' }, { status: 400 });
        }
        const cityId = parseInt(cityIdStr);
        if (isNaN(cityId)) {
          return NextResponse.json({ error: 'cityId must be a number' }, { status: 400 });
        }
        const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
        const result = await colDB.getCitySummary(cityId, year);
        if (!result) {
          return NextResponse.json({ error: 'City summary not found' }, { status: 404 });
        }
        return NextResponse.json(result);
      }

      case 'top-cities': {
        const countryCode = searchParams.get('countryCode') || undefined;
        const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
        const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
        const result = await colDB.getTopCities(countryCode, year, limit);
        return NextResponse.json(result);
      }

      default:
        return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const runtime = 'edge';
