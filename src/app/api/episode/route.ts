import { NextResponse } from 'next/server';
import { scrapeEpisodeDetails, getDirectVideoLink } from '@/lib/scraper';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ success: false, error: 'URL is required' }, { status: 400 });
  }

  try {
    const result = await scrapeEpisodeDetails(url);
    
    if (!result) {
      return NextResponse.json({ success: false, error: 'Failed to scrape details' }, { status: 500 });
    }

    // Coba ekstraksi link direct untuk setiap stream
    const enrichedStreams = await Promise.all(result.streams.map(async (s: any) => {
      try {
        const directUrl = await getDirectVideoLink(s.url);
        return {
            ...s,
            directUrl: directUrl !== s.url ? directUrl : null,
            isMp4: directUrl.includes('googlevideo.com') || directUrl.includes('.mp4')
        };
      } catch (err) {
        return { ...s, directUrl: null, isMp4: false };
      }
    }));

    return NextResponse.json({ 
      success: true, 
      ...result,
      streams: enrichedStreams
    });
  } catch (error: any) {
    console.error('[API Episode] Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
