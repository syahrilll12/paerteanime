"use client";

import { useEffect, useState } from "react";
import { AnimeRow } from "./AnimeRow";
import { Loader2 } from "lucide-react";

export const SeasonAnimeRow = ({ season, title }: { season: string; title: string }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/seasons?season=${season}`);
        const json = await res.json();
        if (json.success) {
          setData(json.data);
        }
      } catch (err) {
        console.error(`Failed to fetch season ${season}`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [season]);

  if (loading) {
    return (
      <div className="container mx-auto px-6 mb-12 flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-widest">
        <Loader2 className="w-3 h-3 animate-spin" />
        Retrieving {title} Data...
      </div>
    );
  }

  if (data.length === 0) return null;

  return (
    <AnimeRow title={title} data={data} />
  );
};
