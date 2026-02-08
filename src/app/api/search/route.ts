import { NextResponse } from 'next/server';
import { searchAnime } from '@/lib/scraper';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');

  if (!q) {
    return NextResponse.json({ success: false, error: 'Query is required' }, { status: 400 });
  }

  const cleanTitle = (text: string) => {
    return text
      .replace(/Episode \d+/gi, '')
      .replace(/Subtitle Indonesia/gi, '')
      .replace(/Part \d+/gi, '')
      .trim();
  };

  let results = await searchAnime(q);
  
  if (results.length === 0) {
    const cleanedQ = cleanTitle(q);
    if (cleanedQ !== q) {
      results = await searchAnime(cleanedQ);
    }
  }
  
  if (results.length > 0) {
    const firstResult = results[0];
    const isDirectEpisode = firstResult.link.includes('-episode-') || (firstResult.link.includes('subtitle-indonesia') && !firstResult.link.includes('/anime/'));
    
    return NextResponse.json({ 
        success: true, 
        results,
        latestEpisode: isDirectEpisode ? { title: firstResult.title, url: firstResult.link } : null
    });
  }

  return NextResponse.json({ 
    success: true, 
    results: []
  });
}
