"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AnimeRow } from "@/components/AnimeRow";
import { ScrapedAnimeList } from "@/components/ScrapedAnimeList";
import { TopChart } from "@/components/TopChart";
import { GenreGrid } from "@/components/GenreGrid";
import { animeData } from "@/data/anime";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    if (!selectedGenre) return animeData;
    return animeData.filter(a => a.category.toLowerCase().includes(selectedGenre.toLowerCase()));
  }, [selectedGenre]);

  return (
    <main className="min-h-screen bg-[#0b0c10] text-white">
      <Navbar />
      <Hero />
      
      <div className="relative z-10 -mt-20 space-y-4 pb-32 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10] to-transparent pt-20">
        <GenreGrid 
          selectedGenre={selectedGenre} 
          onGenreSelect={setSelectedGenre} 
        />
        
        <AnimatePresence mode="wait">
          {!selectedGenre ? (
            <motion.div
              key="all-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              <ScrapedAnimeList />
              
              <TopChart data={animeData} />

              <AnimeRow 
                  title="Recommended For You" 
                  data={[...animeData].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))} 
              />
              
              <AnimeRow 
                  title="Recently Added" 
                  data={[...animeData].reverse()} 
              />
              
              <AnimeRow 
                  title="Action & Sci-Fi Masterpieces" 
                  data={animeData.filter(a => a.category === "Action" || a.category === "Sci-Fi")} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="filtered-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[50vh] pt-10"
            >
              <div className="container mx-auto px-6 mb-12">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <h2 className="text-3xl font-display font-black italic uppercase tracking-tighter">
                    Results for <span className="text-brand-primary">{selectedGenre}</span>
                  </h2>
                  <button 
                    onClick={() => setSelectedGenre(null)}
                    className="text-xs font-mono text-white/20 hover:text-white uppercase tracking-widest transition-colors"
                  >
                    Clear Filter [×]
                  </button>
                </div>
              </div>

              {filteredData.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 container mx-auto px-6">
                  {/* Reuse components or layout for filtered results */}
                  {/* For now we can use AnimeRow layout style but as a grid */}
                  <AnimeRow title={`Explore ${selectedGenre}`} data={filteredData} />
                </div>
              ) : (
                <div className="container mx-auto px-6 py-20 text-center">
                  <p className="text-white/20 font-mono uppercase tracking-[0.3em]">No direct match found in Local DB. Try searching global.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="py-24 border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-2 space-y-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-primary rounded-sm flex items-center justify-center font-black text-black italic text-2xl">T</div>
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
            <p>© 2026 PAERTE LABS INTEGRATED. ALL RIGHTS RESERVED.</p>
            <p>DATA SYNCHRONIZED VIA SAMEHADAKU PROTOCOL</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
