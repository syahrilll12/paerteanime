"use client";

import { useEffect, useState } from "react";
import { AnimeRow } from "./AnimeRow";
import { Loader2 } from "lucide-react";

export const RecommendedRow = ({ title }: { title: string }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // We can fetch from a random season or search for popular terms to get real data
        const res = await fetch(`/api/seasons?season=winter-2026`);
        const json = await res.json();
        if (json.success) {
          // Sort by rating to make it "Recommended"
          const sorted = json.data.sort((a: any, b: any) => parseFloat(b.rating) - parseFloat(a.rating));
          setData(sorted);
        }
      } catch (err) {
        console.error(`Failed to fetch recommended`, err);
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
        Analyzing User Preferences...
      </div>
    );
  }

  if (data.length === 0) return null;

  return (
    <AnimeRow title={title} data={data} />
  );
};
