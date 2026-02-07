"use client";

import { useEffect, useState } from "react";
import { AnimeRow } from "./AnimeRow";
import { Loader2 } from "lucide-react";

export const RecentReleaseRow = ({ title }: { title: string }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/scrape`);
        const json = await res.json();
        if (json.success) {
          // Format to match AnimeCard expectations
          const formatted = json.data.map((item: any) => ({
            ...item,
            category: "Latest Release",
            rating: (Math.random() * 1.5 + 8.0).toFixed(1)
          }));
          setData(formatted);
        }
      } catch (err) {
        console.error(`Failed to fetch recent releases`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-6 mb-12 flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-widest">
        <Loader2 className="w-3 h-3 animate-spin" />
        Retrieving {title} Node...
      </div>
    );
  }

  if (data.length === 0) return null;

  return (
    <AnimeRow title={title} data={data} />
  );
};
