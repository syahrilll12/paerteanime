"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Play } from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface TopChartProps {
  data: any[];
}

export const TopChart = ({ data }: TopChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  // Take top 10
  const topTen = data.slice(0, 10);

  useEffect(() => {
    if (containerRef.current) {
      const { scrollWidth, offsetWidth } = containerRef.current;
      setConstraints({ left: -(scrollWidth - offsetWidth + 48), right: 0 });
    }
  }, [data]);

  return (
    <div className="mb-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="w-1.5 h-8 bg-brand-primary rounded-full shadow-[0_0_15px_#0ea5e9]" />
          Top 10 Global Chart
        </h2>
      </div>

      <div className="px-6" ref={containerRef}>
        <motion.div 
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
          className="flex gap-12 cursor-grab active:cursor-grabbing items-end"
        >
          {topTen.map((anime, index) => {
            const watchUrl = anime.link 
              ? `/watch/${anime.id}?url=${encodeURIComponent(anime.link)}`
              : `/watch/${anime.id}?title=${encodeURIComponent(anime.title)}`;

            return (
              <motion.div
                key={anime.id}
                whileHover={{ y: -15 }}
                className="relative flex-none flex items-end group select-none"
              >
                {/* Rank Number Background */}
                <span className="absolute -left-10 bottom-0 text-[180px] font-black leading-none text-white/5 italic select-none group-hover:text-brand-primary/10 transition-colors pointer-events-none tracking-tighter">
                  {index + 1}
                </span>

                <div className="relative z-10 w-44 md:w-52">
                  <div className="relative aspect-[3/4.2] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                    <img
                      src={anime.image}
                      alt={anime.title}
                      referrerPolicy="no-referrer"
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    
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

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 px-1.5 py-0.5 bg-black/60 backdrop-blur-md rounded-md border border-white/10">
                          <Star className="w-2.5 h-2.5 fill-brand-primary text-brand-primary" />
                          <span className="text-[10px] font-bold">{anime.rating || "8.5"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-sm font-bold truncate group-hover:text-brand-primary transition-colors">
                      {anime.title}
                    </h3>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-mono mt-1">
                      #{index + 1} Trending
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
