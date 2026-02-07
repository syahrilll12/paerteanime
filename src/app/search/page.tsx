"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { AnimeCard } from "@/components/AnimeRow";
import { Loader2, Search, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const json = await res.json();
        if (json.success) {
          // Format the results to match AnimeCard expectations
          const formattedResults = json.results.map((item: any) => ({
            ...item,
            id: item.link.split('/').filter(Boolean).pop() || Math.random().toString(36).substr(2, 9),
            category: "Anime",
            rating: item.score || "0.0"
          }));
          setResults(formattedResults);
        } else {
          throw new Error(json.error || "Failed to fetch search results");
        }
      } catch (err: any) {
        console.error("Search error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-20">
        <Loader2 className="w-10 h-10 text-brand-primary animate-spin mb-4" />
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/20 animate-pulse">Scanning Transmission Frequencies...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/5 pb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-5 h-5 text-brand-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Search Results</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black italic tracking-tighter uppercase leading-none">
            Query: <span className="text-brand-primary">"{query}"</span>
          </h1>
        </div>
        <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
          {results.length} Matches Found
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-6">
          {results.map((anime, index) => (
            <motion.div
              key={anime.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <AnimeCard anime={anime} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="min-h-[40vh] flex flex-col items-center justify-center bg-white/5 rounded-3xl border border-white/5 p-12 text-center">
            <AlertCircle className="w-12 h-12 text-white/10 mb-4" />
            <h3 className="text-xl font-bold uppercase italic tracking-tight mb-2">No Results Found</h3>
            <p className="text-sm text-white/40 max-w-md">We couldn't find any anime matching your query. Please check your spelling or try a different title.</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white">
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-brand-primary animate-spin" />
        </div>
      }>
        <SearchContent />
      </Suspense>
    </main>
  );
}
