"use client";

import { useEffect, useState } from "react";
import { AnimeRow } from "./AnimeRow";
import { History, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const ContinueWatching = () => {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const updateHistory = () => {
      const keys = Object.keys(localStorage).filter(k => k.startsWith('resume-'));
      const items = keys.map(k => {
        const url = k.replace('resume-', '');
        const time = parseFloat(localStorage.getItem(k) || "0");
        // We'd ideally want to store more data like title/image in a real app
        // For now, let's just show what we can or a placeholder
        return { url, time, id: url.split('/').filter(Boolean).pop() };
      }).filter(item => item.time > 30); // Only show if watched > 30s
      
      setHistory(items.reverse().slice(0, 5));
    };

    updateHistory();
    window.addEventListener('storage', updateHistory);
    return () => window.removeEventListener('storage', updateHistory);
  }, []);

  const clearItem = (url: string) => {
    localStorage.removeItem(`resume-${url}`);
    setHistory(prev => prev.filter(h => h.url !== url));
  };

  if (history.length === 0) return null;

  return (
    <div className="mb-20">
      <div className="container mx-auto px-6 mb-8 flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-3">
          <span className="w-1.5 h-6 bg-brand-primary rounded-full shadow-[0_0_15px_#0ea5e9]" />
          Continue Watching
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 pb-6 no-scrollbar">
        {history.map((item, i) => (
          <motion.div
            key={item.url}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex-none w-64 group"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-surface-high shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/5">
                    <History className="w-8 h-8 text-brand-primary/20" />
                </div>
                
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <div className="h-full bg-brand-primary shadow-[0_0_10px_#0ea5e9]" style={{ width: '45%' }} />
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Link 
                        href={`/watch/${item.id}?url=${encodeURIComponent(item.url)}`}
                        className="w-10 h-10 bg-brand-primary text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                    </Link>
                    <button 
                        onClick={() => clearItem(item.url)}
                        className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="mt-3">
                <h3 className="text-[11px] font-bold truncate text-white/80 uppercase tracking-widest">{item.id?.replace(/-/g, ' ')}</h3>
                <p className="text-[9px] text-brand-primary font-mono mt-1 uppercase">Resume from {Math.floor(item.time / 60)}m {Math.floor(item.time % 60)}s</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
