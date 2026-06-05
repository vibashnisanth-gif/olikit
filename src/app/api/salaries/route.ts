import { NextRequest, NextResponse } from 'next/server';
import { createServices } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { salaryDB } = createServices();
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action') || 'query';

    switch (action) {
      case 'query': {
        const result = await salaryDB.query({
          countryCode: searchParams.get('countryCode') || undefined,
          professionSlug: searchParams.get('professionSlug') || undefined,
          year: searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined,
          page: searchParams.get('page') ? parseInt(searchParams.get('page')!) : undefined,
          pageSize: searchParams.get('pageSize') ? parseInt(searchParams.get('pageSize')!) : undefined,
        });
        return NextResponse.json(result);
      }

      case 'top-paid': {
        const countryCode = searchParams.get('countryCode');
        if (!countryCode) {
          return NextResponse.json({ error: 'countryCode is required' }, { status: 400 });
        }
        const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
        const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
        const result = await salaryDB.getTopPaid(countryCode, year, limit);
        return NextResponse.json(result);
      }

      case 'compare': {
        const professionSlug = searchParams.get('professionSlug');
        const countryA = searchParams.get('countryA');
        const countryB = searchParams.get('countryB');
        if (!professionSlug || !countryA || !countryB) {
          return NextResponse.json(
            { error: 'professionSlug, countryA, and countryB are required' },
            { status: 400 }
          );
        }
        const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
        const result = await salaryDB.compare(professionSlug, countryA, countryB, year);
        if (!result) {
          return NextResponse.json({ error: 'Comparison data not found' }, { status: 404 });
        }
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
