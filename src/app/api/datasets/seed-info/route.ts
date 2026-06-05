import { NextResponse } from 'next/server';
import { summarize } from '../../../../../db/seed/index';

export async function GET() {
  const summary = summarize();
  return NextResponse.json(summary);
}
