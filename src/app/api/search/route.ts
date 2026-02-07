import { NextResponse } from 'next/server';
import { searchAnime, getLatestEpisodes } from '@/lib/scraper';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');

  if (!q) {
    return NextResponse.json({ success: false, error: 'Query is required' }, { status: 400 });
  }

  // Fungsi helper untuk membersihkan judul agar pencarian lebih akurat
  const cleanTitle = (text: string) => {
    return text
      .replace(/Episode \d+/gi, '')
      .replace(/Subtitle Indonesia/gi, '')
      .replace(/Part \d+/gi, '')
      .trim();
  };

  let results = await searchAnime(q);
  
  // Jika pencarian dengan judul lengkap gagal, coba dengan judul yang sudah dibersihkan
  if (results.length === 0) {
    const cleanedQ = cleanTitle(q);
    if (cleanedQ !== q) {
      results = await searchAnime(cleanedQ);
    }
  }
  
  if (results.length > 0) {
    const firstResult = results[0];
    
    // Cek apakah link yang ditemukan sebenarnya adalah halaman episode langsung
    // Halaman episode biasanya mengandung "-episode-" atau diakhiri dengan angka yang didahului oleh nomor episode
    const isDirectEpisode = firstResult.link.includes('-episode-') || (firstResult.link.includes('subtitle-indonesia') && !firstResult.link.includes('/anime/'));
    
    if (isDirectEpisode) {
        return NextResponse.json({ 
            success: true, 
            results,
            latestEpisode: { title: firstResult.title, url: firstResult.link }
        });
    }

    const episodes = await getLatestEpisodes(firstResult.link);
    
    return NextResponse.json({ 
      success: true, 
      results,
      latestEpisode: episodes[0] || null
    });
  }

  return NextResponse.json({ 
    success: true, 
    results: []
  });
}
