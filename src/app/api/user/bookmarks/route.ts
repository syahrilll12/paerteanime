import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { animeId } = await request.json();

  if (!animeId) {
    return NextResponse.json({ success: false, error: "Missing animeId" }, { status: 400 });
  }

  try {
    const existing = await prisma.bookmark.findUnique({
      where: {
        userId_animeId: {
          userId: session.user.id,
          animeId,
        },
      },
    });

    if (existing) {
      await prisma.bookmark.delete({
        where: { id: existing.id },
      });
      return NextResponse.json({ success: true, bookmarked: false });
    } else {
      await prisma.bookmark.create({
        data: {
          userId: session.user.id,
          animeId,
        },
      });
      return NextResponse.json({ success: true, bookmarked: true });
    }
  } catch (error: any) {
    console.error("[API Bookmarks] Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const bookmarks = await prisma.bookmark.findMany({
      where: { userId: session.user.id },
      include: {
        anime: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, data: bookmarks });
  } catch (error: any) {
    console.error("[API Bookmarks GET] Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
