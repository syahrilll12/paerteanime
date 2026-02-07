"use client";

import { motion } from "framer-motion";
import { Play, Info, Plus } from "lucide-react";
import { animeData } from "@/data/anime";
import Link from "next/link";

export const Hero = () => {
  const featured = animeData[1]; // Cyberpunk: Edgerunners

  return (
    <div className="relative h-[85vh] w-full flex items-center overflow-hidden bg-[#0b0c10]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={featured.image}
          alt={featured.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* iQIYI Style Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-brand-primary text-black text-[10px] font-black uppercase italic rounded-sm">
                NEW
            </div>
            <span className="text-sm font-bold text-white/80">
              {featured.category} • {featured.year} • ★{featured.rating}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6 text-white uppercase leading-tight">
            {featured.title}
          </h1>

          <p className="text-base text-white/60 mb-10 max-w-lg leading-relaxed line-clamp-3">
            {featured.description}
          </p>

          <div className="flex items-center gap-4">
            <Link 
              href={`/watch/${featured.id}?title=${encodeURIComponent(featured.title)}`}
              className="flex items-center gap-3 bg-brand-primary text-black px-10 py-4 rounded-full font-black hover:bg-white transition-all transform hover:scale-105 active:scale-95 uppercase italic tracking-tight"
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Now
            </Link>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md">
              <Plus className="w-5 h-5" />
              My List
            </button>
          </div>
        </motion.div>
      </div>

      {/* Side Featured Tag */}
      <div className="absolute right-10 bottom-20 hidden lg:flex flex-col items-end gap-2">
        <div className="w-1.5 h-12 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 rotate-90 origin-right translate-y-12">
            FEATURED_CONTENT
        </span>
      </div>
    </div>
  );
};
