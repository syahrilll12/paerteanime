"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Play, Plus, Star } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

interface AnimeCardProps {
  anime: {
    id: string;
    title: string;
    image: string;
    category: string;
    rating: string;
    link?: string;
  };
}

export const AnimeCard = ({ anime }: AnimeCardProps) => {
  const watchUrl = anime.link 
    ? `/watch/${anime.id}?url=${encodeURIComponent(anime.link)}`
    : `/watch/${anime.id}?title=${encodeURIComponent(anime.title)}`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative flex-none w-40 md:w-48 group select-none"
    >
      <div className="relative aspect-[3/4.2] rounded-lg overflow-hidden mb-3 shadow-xl border border-white/5">
          <img
              src={anime.image}
              alt={anime.title}
              referrerPolicy="no-referrer"
              draggable={false}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Top Badge */}
          <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-brand-primary text-black text-[9px] font-black rounded-sm italic uppercase">
              FREE
          </div>

          {/* Rating Overlay */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-bold text-white drop-shadow-md">
              <Star className="w-2.5 h-2.5 fill-brand-primary text-brand-primary" />
              {anime.rating}
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link 
                href={watchUrl} 
                draggable={false}
                className="w-12 h-12 bg-brand-primary text-background rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl hover:scale-110 active:scale-90"
              >
                  <Play className="w-6 h-6 fill-current ml-1" />
              </Link>
          </div>
      </div>
      
      <h3 className="text-sm font-bold line-clamp-1 group-hover:text-brand-primary transition-colors pr-2">
          {anime.title}
      </h3>
      <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider mt-0.5">
          {anime.category}
      </p>
    </motion.div>
  );
};

export const AnimeRow = ({ title, data }: { title: string; data: any[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { scrollWidth, offsetWidth } = containerRef.current;
      setConstraints({ left: -(scrollWidth - offsetWidth + 48), right: 0 });
    }
  }, [data]);

  return (
    <div className="mb-12 overflow-hidden">
      <div className="container mx-auto px-6 mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-3">
          <span className="w-1.5 h-6 bg-brand-primary rounded-full shadow-[0_0_10px_#0ea5e9]" />
          {title}
        </h2>
        <Link href="#" className="text-xs font-bold text-white/30 hover:text-brand-primary transition-colors">
          View More
        </Link>
      </div>
      
      <div className="px-6" ref={containerRef}>
        <motion.div 
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
          className="flex gap-4 cursor-grab active:cursor-grabbing"
        >
          {data.map((anime, index) => (
            <AnimeCard key={`${anime.id}-${index}`} anime={anime} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
