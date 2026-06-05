import { NextRequest, NextResponse } from 'next/server';
import { createServices } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { taxDB } = createServices();
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action') || 'summary';

    switch (action) {
      case 'summary': {
        const countryCode = searchParams.get('countryCode');
        if (!countryCode) {
          return NextResponse.json({ error: 'countryCode is required' }, { status: 400 });
        }
        const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
        const result = await taxDB.getCountrySummary(countryCode, year);
        if (!result) {
          return NextResponse.json({ error: 'Tax summary not found' }, { status: 404 });
        }
        return NextResponse.json(result);
      }

      case 'rates': {
        const countryCode = searchParams.get('countryCode');
        if (!countryCode) {
          return NextResponse.json({ error: 'countryCode is required' }, { status: 400 });
        }
        const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
        const result = await taxDB.getRates(countryCode, year);
        return NextResponse.json(result);
      }

      case 'calculate-income-tax': {
        const countryCode = searchParams.get('countryCode');
        const incomeStr = searchParams.get('annualIncome');
        if (!countryCode || !incomeStr) {
          return NextResponse.json(
            { error: 'countryCode and annualIncome are required' },
            { status: 400 }
          );
        }
        const annualIncome = parseInt(incomeStr);
        if (isNaN(annualIncome) || annualIncome < 0) {
          return NextResponse.json({ error: 'annualIncome must be a positive number' }, { status: 400 });
        }
        const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
        const result = await taxDB.calculateIncomeTax(countryCode, annualIncome, year);
        if (!result) {
          return NextResponse.json(
            { error: `Income tax configuration not found for ${countryCode}` },
            { status: 404 }
          );
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
