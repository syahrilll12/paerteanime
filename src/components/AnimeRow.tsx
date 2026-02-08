"use client";

import { motion } from "framer-motion";
import { Play, Star, Loader2, Globe, Map } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface AnimeCardProps {
  anime: {
    id: string;
    title: string;
    image: string;
    category: string;
    rating: string;
    link?: string;
    origin?: string;
    type?: string;
  };
}

export const AnimeCard = ({ anime }: AnimeCardProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  const watchUrl = anime.link 
    ? `/watch/${anime.id}?url=${encodeURIComponent(anime.link)}`
    : `/watch/${anime.id}?title=${encodeURIComponent(anime.title)}`;

  const origin = anime.origin || anime.type || "Japan";

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative flex-none w-40 md:w-48 group select-none"
    >
      <div className="relative aspect-[3/4.2] rounded-lg overflow-hidden mb-3 shadow-xl border border-white/5 bg-white/5">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-5 h-5 text-brand-primary animate-spin opacity-20" />
            </div>
          )}
          {anime.image ? (
            <Image
                src={anime.image}
                alt={anime.title}
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className={`object-cover transition-all duration-700 group-hover:scale-105 ${imageLoading ? 'opacity-0 scale-110 blur-xl' : 'opacity-100 scale-100 blur-0'}`}
                onLoad={() => setImageLoading(false)}
                unoptimized 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/10 uppercase font-black italic text-[8px] text-center px-4">
              HD Image Unavailable
            </div>
          )}
          
          <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-brand-primary text-black text-[9px] font-black rounded-sm italic uppercase z-10 shadow-lg">
              FREE
          </div>

          <div className={`absolute top-2 right-2 px-1.5 py-0.5 backdrop-blur-md border border-white/10 rounded-sm flex items-center gap-1 z-10 shadow-lg ${origin === 'China' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'}`}>
              {origin === 'China' ? <Map className="w-2 h-2" /> : <Globe className="w-2 h-2" />}
              <span className="text-[8px] font-black uppercase tracking-tighter">{origin}</span>
          </div>

          <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-bold text-white drop-shadow-md z-10">
              <Star className="w-2.5 h-2.5 fill-brand-primary text-brand-primary" />
              {anime.rating}
          </div>

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
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
      <div className="flex items-center gap-2 mt-0.5">
          <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">
              {anime.category}
          </p>
          <span className="w-1 h-1 bg-white/10 rounded-full" />
          <p className={`text-[9px] font-black uppercase italic ${origin === 'China' ? 'text-orange-500/40' : 'text-blue-500/40'}`}>
              {origin}
          </p>
      </div>
    </motion.div>
  );
};

interface AnimeRowProps {
  title: string;
  data: any[];
  onViewMore?: (title: string, data: any[]) => void;
}

export const AnimeRow = ({ title, data, onViewMore }: AnimeRowProps) => {
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
        {onViewMore && (
            <button 
                onClick={() => onViewMore(title, data)}
                className="text-xs font-bold text-white/30 hover:text-brand-primary transition-colors"
            >
                View More
            </button>
        )}
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
