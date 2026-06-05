import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const dataset = searchParams.get('dataset') || 'all';

  return NextResponse.json({
    dataset,
    available: ['salary', 'tax', 'cost-of-living'],
    description: 'Proprietary dataset pipeline for Salary, Tax, and Cost-of-Living data',
    note: 'D1 database bindings are available only in the Cloudflare Workers runtime. ' +
          'In Next.js, use these datasets through the API endpoints or seed the data directly.',
    seedDataEndpoint: '/api/datasets/seed-info',
    endpoints: {
      salary: '/api/salaries',
      tax: '/api/taxes',
      col: '/api/col',
    },
  });
}
