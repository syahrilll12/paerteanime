import { NextResponse } from 'next/server';
import { getDirectVideoLink } from '@/lib/scraper';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ success: false, error: 'URL is required' }, { status: 400 });
  }

  const directUrl = await getDirectVideoLink(url);
  
  return NextResponse.json({ 
    success: true, 
    url: directUrl
  });
}
