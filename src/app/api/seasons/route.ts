import { NextResponse } from 'next/server';
import { scrapeSeasons } from '@/lib/scraper';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const season = searchParams.get('season');

  if (!season) {
    return NextResponse.json({ success: false, error: 'Season is required' }, { status: 400 });
  }

  const results = await scrapeSeasons(season);
  
  return NextResponse.json({ 
    success: true, 
    data: results
  });
}
