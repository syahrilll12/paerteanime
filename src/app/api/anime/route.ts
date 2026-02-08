import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const day = searchParams.get('day');
  const season = searchParams.get('season');

  try {
    const where: any = {};
    
    if (type) {
      if (['japan', 'china'].includes(type.toLowerCase())) {
        where.type = {
          contains: type,
          mode: 'insensitive'
        };
      } else {
        where.title = {
          contains: type,
          mode: 'insensitive'
        };
      }
    }

    if (day) {
        where.scheduledDay = day.toLowerCase();
    }

    if (season) {
        where.season = season.toLowerCase();
    }
    
    const animes = await prisma.anime.findMany({
      where,
      orderBy: { updatedAt: 'desc' },
      take: 100
    });

    const formatted = animes.map((a: any) => ({
      ...a,
      category: a.type || 'Anime',
      rating: "8.5" 
    }));

    return NextResponse.json({ success: true, data: formatted });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
