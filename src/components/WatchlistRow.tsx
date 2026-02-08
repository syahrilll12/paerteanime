"use client";

import { useEffect, useState } from "react";
import { AnimeRow } from "./AnimeRow";
import { Loader2, Bookmark } from "lucide-react";
import { useSession } from "next-auth/react";

export const WatchlistRow = () => {
  const { data: session } = useSession();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/user/bookmarks`);
        const json = await res.json();
        if (json.success) {
          const formatted = json.data.map((item: any) => ({
            ...item.anime,
            category: "Watchlist",
            rating: item.anime.rating || "8.5"
          }));
          setData(formatted);
        }
      } catch (err) {
        console.error(`Failed to fetch watchlist`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session]);

  if (!session || (data.length === 0 && !loading)) return null;

  if (loading) {
    return (
      <div className="container mx-auto px-6 mb-12 flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-widest">
        <Loader2 className="w-3 h-3 animate-spin" />
        Syncing Your Watchlist...
      </div>
    );
  }

  return (
    <AnimeRow title="Your Watchlist" data={data} />
  );
};
