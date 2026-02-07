import { NextResponse } from 'next/server';
import { scrapeSamehadaku } from '@/lib/scraper';

export async function GET() {
  const results = await scrapeSamehadaku();
  return NextResponse.json({ 
    success: true, 
    count: results.length,
    data: results 
  });
}
