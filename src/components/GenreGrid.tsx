"use client";

import { motion } from "framer-motion";
import { Sword, Zap, Heart, Ghost, Rocket, Sparkles, Globe, Map } from "lucide-react";

export const genres = [
  { name: "Action", icon: Sword, color: "from-red-500/20 to-red-600/5", border: "border-red-500/20" },
  { name: "Fantasy", icon: Sparkles, color: "from-brand-primary/20 to-brand-primary/5", border: "border-brand-primary/20" },
  { name: "Sci-Fi", icon: Rocket, color: "from-blue-500/20 to-blue-600/5", border: "border-blue-500/20" },
  { name: "Romance", icon: Heart, color: "from-pink-500/20 to-pink-600/5", border: "border-pink-500/20" },
  { name: "Japan", icon: Globe, color: "from-purple-500/20 to-purple-600/5", border: "border-purple-500/20" },
  { name: "China", icon: Map, color: "from-yellow-500/20 to-yellow-600/5", border: "border-yellow-500/20" },
];

interface GenreGridProps {
  onGenreSelect?: (genre: string | null) => void;
  selectedGenre?: string | null;
}

export const GenreGrid = ({ onGenreSelect, selectedGenre }: GenreGridProps) => {
  return (
    <div className="container mx-auto px-6 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {genres.map((genre, i) => {
          const isActive = selectedGenre === genre.name;
          
          return (
            <motion.button
              key={genre.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => onGenreSelect?.(isActive ? null : genre.name)}
              className={`relative h-24 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-2 group ${
                isActive 
                ? `border-brand-primary bg-brand-primary/20 shadow-[0_0_20px_rgba(14,165,233,0.2)]` 
                : `${genre.border} bg-gradient-to-br ${genre.color}`
              }`}
            >
              <genre.icon className={`w-6 h-6 transition-all duration-500 ${
                isActive ? "text-brand-primary scale-110" : "text-white/40 group-hover:text-white group-hover:scale-110"
              }`} />
              <span className={`text-xs font-bold tracking-widest uppercase transition-opacity ${
                isActive ? "text-brand-primary opacity-100" : "opacity-40 group-hover:opacity-100"
              }`}>
                {genre.name}
              </span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-2xl transition-colors" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
