import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { animeId, episodeId, progress } = await request.json();

  if (!animeId || !episodeId) {
    return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
  }

  try {
    const history = await prisma.watchHistory.upsert({
      where: {
        userId_animeId_episodeId: {
          userId: session.user.id,
          animeId,
          episodeId,
        },
      },
      update: {
        progress,
        updatedAt: new Date(),
      },
      create: {
        userId: session.user.id,
        animeId,
        episodeId,
        progress,
      },
    });

    return NextResponse.json({ success: true, data: history });
  } catch (error: any) {
    console.error("[API History] Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const history = await prisma.watchHistory.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
      take: 10,
      include: {
        anime: true,
        episode: true,
      },
    });

    return NextResponse.json({ success: true, data: history });
  } catch (error: any) {
    console.error("[API History GET] Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
