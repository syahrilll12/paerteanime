"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Plus, Star, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { animeData } from "@/data/anime";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  
  // Featured list for carousel
  const featuredList = animeData.slice(0, 5);
  const current = featuredList[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setImageLoading(true);
    setCurrentIndex((prev) => (prev + 1) % featuredList.length);
  };

  const handlePrev = () => {
    setImageLoading(true);
    setCurrentIndex((prev) => (prev - 1 + featuredList.length) % featuredList.length);
  };

  const hdImage = current.image.split('?')[0].replace(/https:\/\/i\d\.wp\.com\//, 'https://');

  return (
    <div className="relative h-[85vh] w-full flex items-center overflow-hidden bg-[#0b0c10]">
      {/* Background Layer with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {hdImage && (
            <Image
              src={hdImage}
              alt={current.title}
              fill
              priority
              className={`object-cover transition-all duration-1000 ${imageLoading ? 'scale-110 blur-2xl opacity-0' : 'scale-100 blur-0 opacity-100'}`}
              onLoad={() => setImageLoading(false)}
              unoptimized
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-brand-primary text-black text-[10px] font-black uppercase italic rounded-sm">
                  SPOTLIGHT
              </div>
              <span className="text-sm font-bold text-white/80">
                {current.category} • {current.year} • ★{current.rating}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6 text-white uppercase leading-tight drop-shadow-2xl">
              {current.title}
            </h1>

            <p className="text-base text-white/60 mb-10 max-w-lg leading-relaxed line-clamp-3">
              {current.description}
            </p>

            <div className="flex items-center gap-4">
              <Link 
                href={`/watch/${current.id}?title=${encodeURIComponent(current.title)}`}
                className="flex items-center gap-3 bg-brand-primary text-black px-10 py-4 rounded-full font-black hover:bg-white transition-all transform hover:scale-105 active:scale-95 uppercase italic tracking-tight shadow-[0_0_30px_rgba(14,165,233,0.3)]"
              >
                <Play className="w-5 h-5 fill-current" />
                Watch Now
              </Link>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md border border-white/5">
                <Plus className="w-5 h-5" />
                My List
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Centered Style */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20 bg-black/20 backdrop-blur-xl px-6 py-3 rounded-full border border-white/5 shadow-2xl">
        <button 
          onClick={handlePrev}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:text-brand-primary transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
            {featuredList.map((_, i) => (
                <button
                    key={i}
                    onClick={() => {
                        setImageLoading(true);
                        setCurrentIndex(i);
                    }}
                    className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-8 bg-brand-primary' : 'w-1.5 bg-white/20 hover:bg-white/40'}`} 
                />
            ))}
        </div>
        <button 
          onClick={handleNext}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:text-brand-primary transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Vertical Featured Tag */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-2 pointer-events-none opacity-20">
        <div className="w-1.5 h-24 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white rotate-90 origin-right translate-y-20 whitespace-nowrap">
            PREMIUM_SELECTION
        </span>
      </div>
    </div>
  );
};
