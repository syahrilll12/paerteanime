"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { AnimeCard } from "@/components/AnimeRow";
import { Loader2, LayoutGrid, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

function SeasonsContent() {
  const searchParams = useSearchParams();
  const season = searchParams.get("s") || "winter-2026";
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/seasons?season=${encodeURIComponent(season)}`);
        const json = await res.json();
        if (json.success) {
          setResults(json.data);
        } else {
          throw new Error(json.error || "Failed to fetch season data");
        }
      } catch (err: any) {
        console.error("Season error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [season]);

  const formattedSeason = season.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-20">
        <Loader2 className="w-10 h-10 text-brand-primary animate-spin mb-4" />
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/20 animate-pulse">Retrieving Season Archives...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/5 pb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <LayoutGrid className="w-5 h-5 text-brand-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Season Collection</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black italic tracking-tighter uppercase leading-none">
            Season: <span className="text-brand-primary">{formattedSeason}</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
            <select 
                value={season}
                onChange={(e) => window.location.href = `/seasons?s=${e.target.value}`}
                className="bg-[#1a1c23] border border-white/10 rounded-lg px-4 py-2 text-xs font-bold text-white outline-none focus:border-brand-primary transition-colors"
            >
                <option value="winter-2026">Winter 2026</option>
                <option value="fall-2025">Fall 2025</option>
                <option value="summer-2025">Summer 2025</option>
                <option value="spring-2025">Spring 2025</option>
                <option value="winter-2025">Winter 2025</option>
            </select>
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest hidden md:block">
              {results.length} Titles Found
            </p>
        </div>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-6">
          {results.map((anime, index) => (
            <motion.div
              key={anime.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
            >
              <AnimeCard anime={anime} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="min-h-[40vh] flex flex-col items-center justify-center bg-white/5 rounded-3xl border border-white/5 p-12 text-center">
            <AlertCircle className="w-12 h-12 text-white/10 mb-4" />
            <h3 className="text-xl font-bold uppercase italic tracking-tight mb-2">No Data Available</h3>
            <p className="text-sm text-white/40 max-w-md">The requested season archive could not be retrieved from the transmission node.</p>
        </div>
      )}
    </div>
  );
}

export default function SeasonsPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white">
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-brand-primary animate-spin" />
        </div>
      }>
        <SeasonsContent />
      </Suspense>
    </main>
  );
}
