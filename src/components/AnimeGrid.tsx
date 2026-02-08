"use client";

import { motion } from "framer-motion";
import { AnimeCard } from "./AnimeRow";

interface AnimeGridProps {
  title: string;
  data: any[];
}

export const AnimeGrid = ({ title, data }: AnimeGridProps) => {
  return (
    <div className="mb-20">
      {title && (
        <div className="container mx-auto px-6 mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3 italic tracking-tight uppercase text-brand-primary">
            <span className="w-1.5 h-8 bg-brand-primary rounded-full shadow-[0_0_15px_#0ea5e9]" />
            {title}
          </h2>
        </div>
      )}

      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
        {data.map((anime, index) => (
          <motion.div
            key={`${anime.id}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (index % 12) * 0.05 }}
          >
            <AnimeCard anime={anime} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
