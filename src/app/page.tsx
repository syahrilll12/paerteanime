"use client";

import { useState, useMemo, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AnimeRow } from "@/components/AnimeRow";
import { AnimeGrid } from "@/components/AnimeGrid";
import { ScrapedAnimeList } from "@/components/ScrapedAnimeList";
import { TopChart } from "@/components/TopChart";
import { GenreGrid } from "@/components/GenreGrid";
import { SeasonAnimeRow } from "@/components/SeasonAnimeRow";
import { RecentReleaseRow } from "@/components/RecentReleaseRow";
import { RecommendedRow } from "@/components/RecommendedRow";
import { WatchlistRow } from "@/components/WatchlistRow";
import { ContinueWatching } from "@/components/ContinueWatching";
import { animeData } from "@/data/anime";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [viewMoreContent, setViewMoreContent] = useState<{title: string, data: any[]} | null>(null);

  // Determine if it's an origin filter (Japan/China)
  const isOriginFilter = selectedGenre && ['japan', 'china'].includes(selectedGenre.toLowerCase());

  const filteredData = useMemo(() => {
    if (!selectedGenre || isOriginFilter) return [];
    const lowerSelected = selectedGenre.toLowerCase();
    return animeData.filter(a => a.category.toLowerCase().includes(lowerSelected));
  }, [selectedGenre, isOriginFilter]);

  useEffect(() => {
    if (selectedGenre) setViewMoreContent(null);
  }, [selectedGenre]);

  return (
    <main className="min-h-screen bg-[#0b0c10] text-white pb-20">
      <Navbar />
      <Hero />
      
      <div className="relative z-10 -mt-20 space-y-4 pb-32 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10] to-transparent pt-20">
        <GenreGrid 
          selectedGenre={selectedGenre} 
          onGenreSelect={setSelectedGenre} 
        />
        
        <AnimatePresence mode="wait">
          {isOriginFilter ? (
            <motion.div
              key="origin-filter-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[50vh] pt-10 space-y-12"
            >
              <div className="container mx-auto px-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <h2 className="text-3xl font-display font-black italic uppercase tracking-tighter">
                    Transmission Node: <span className="text-brand-primary">{selectedGenre}</span>
                  </h2>
                  <button 
                    onClick={() => setSelectedGenre(null)}
                    className="text-xs font-mono text-white/20 hover:text-white uppercase tracking-widest transition-colors"
                  >
                    Reset Link [×]
                  </button>
                </div>
              </div>

              {/* Show Live Data with sub-filters when Japan/China is selected */}
              <ScrapedAnimeList originFilter={selectedGenre} />
            </motion.div>
          ) : selectedGenre ? (
            <motion.div
              key="genre-filter-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[50vh] pt-10"
            >
              <div className="container mx-auto px-6 mb-12">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <h2 className="text-3xl font-display font-black italic uppercase tracking-tighter">
                    Category: <span className="text-brand-primary">{selectedGenre}</span>
                  </h2>
                  <button 
                    onClick={() => setSelectedGenre(null)}
                    className="text-xs font-mono text-white/20 hover:text-white uppercase tracking-widest transition-colors"
                  >
                    Reset Link [×]
                  </button>
                </div>
              </div>

              <div className="container mx-auto px-6">
                {filteredData.length > 0 ? (
                  <AnimeGrid title="" data={filteredData} />
                ) : (
                  <div className="py-20 text-center">
                    <p className="text-white/20 font-mono uppercase tracking-[0.3em]">No direct match found in Local Archive.</p>
                  </div>
                )}
              </div>
            </motion.div>
          ) : viewMoreContent ? (
            <motion.div
              key="view-more-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="min-h-[60vh] pt-10"
            >
               <div className="container mx-auto px-6 mb-12">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <h2 className="text-3xl font-display font-black italic uppercase tracking-tighter text-brand-primary">
                    {viewMoreContent.title}
                  </h2>
                  <button 
                    onClick={() => setViewMoreContent(null)}
                    className="flex items-center gap-2 text-xs font-mono text-white/20 hover:text-white uppercase tracking-widest transition-colors"
                  >
                    Back to Feed [Esc]
                  </button>
                </div>
              </div>
              <AnimeGrid title="" data={viewMoreContent.data} />
            </motion.div>
          ) : (
            <motion.div
              key="all-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              <ContinueWatching />
              <WatchlistRow />

              <ScrapedAnimeList />
              
              <SeasonAnimeRow 
                season="winter-2026" 
                title="Winter 2026 Spotlight" 
                onViewMore={(t, d) => setViewMoreContent({title: t, data: d})} 
              />
              
              <TopChart data={animeData} />

              <RecommendedRow 
                title="Recommended For You" 
                onViewMore={(t, d) => setViewMoreContent({title: t, data: d})} 
              />

              <RecentReleaseRow 
                title="Recently Added Episodes" 
                onViewMore={(t, d) => setViewMoreContent({title: t, data: d})} 
              />

              <SeasonAnimeRow 
                season="fall-2025" 
                title="Flashback: Fall 2025" 
                onViewMore={(t, d) => setViewMoreContent({title: t, data: d})} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="py-24 border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-2 space-y-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-primary rounded-sm flex items-center justify-center font-black text-black italic text-2xl shadow-[0_0_15px_rgba(14,165,233,0.4)]">T</div>
                <h2 className="text-3xl font-bold tracking-tighter text-white uppercase">
                    Telana<span className="text-brand-primary italic">Nime</span>
                </h2>
              </Link>
              <p className="text-sm text-white/40 max-w-sm leading-relaxed">
                Experience anime like never before. High-fidelity streaming, curated collections, and a community built for the modern otaku.
              </p>
              <div className="flex gap-6">
                {["Twitter", "Instagram", "Discord", "YouTube"].map(social => (
                    <a key={social} href="#" className="text-xs font-bold text-white/20 hover:text-brand-primary transition-colors">{social}</a>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-white">Platform</h3>
                <ul className="space-y-4 text-sm text-white/40">
                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Premium Benefits</a></li>
                </ul>
            </div>

            <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-white">Support</h3>
                <ul className="space-y-4 text-sm text-white/40">
                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/10 uppercase tracking-widest">
            <p>© 2026 TELANA LABS INTEGRATED. ALL RIGHTS RESERVED.</p>
            <p>DATA SYNCHRONIZED VIA GLOBAL TRANSMISSION NODES</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
