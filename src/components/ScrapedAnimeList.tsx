"use client";

import { useEffect, useState } from "react";
import { AnimeRow } from "./AnimeRow";
import { AnimeGrid } from "./AnimeGrid";
import { Loader2, CalendarDays, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FilterType = "today" | "week" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

interface ScrapedAnimeListProps {
  originFilter?: string | null;
}

export const ScrapedAnimeList = ({ originFilter }: ScrapedAnimeListProps) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState<FilterType>("today");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let endpoint = `/api/anime`;
        const params = new URLSearchParams();
        
        if (originFilter) params.append('type', originFilter);
        
        if (timeFilter === "today") {
            // For 'today', we still use the scrape endpoint or a special filter
            const res = await fetch("/api/scrape");
            const json = await res.json();
            if (json.success) setData(json.data);
        } else if (timeFilter === "week") {
            // For 'week', fetch from DB with a wider range
            const res = await fetch(`${endpoint}?${params.toString()}`);
            const json = await res.json();
            if (json.success) setData(json.data);
        } else {
            // Filter by specific day in DB
            params.append('day', timeFilter);
            const res = await fetch(`${endpoint}?${params.toString()}`);
            const json = await res.json();
            if (json.success) setData(json.data);
        }
      } catch (err) {
        console.error("Failed to fetch anime list", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeFilter, originFilter]);

  if (loading && data.length === 0) {
    return (
      <div className="container mx-auto px-6 mb-12 flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-widest">
        <Loader2 className="w-3 h-3 animate-spin" />
        Syncing Database Records...
      </div>
    );
  }

  const dayButtons = [
    { id: "monday", label: "Mon" },
    { id: "tuesday", label: "Tue" },
    { id: "wednesday", label: "Wed" },
    { id: "thursday", label: "Thu" },
    { id: "friday", label: "Fri" },
    { id: "saturday", label: "Sat" },
    { id: "sunday", label: "Sun" },
  ];

  const getTitle = () => {
    const originLabel = originFilter ? `${originFilter} ` : "";
    if (timeFilter === "today") return `${originLabel}Released Today`;
    if (timeFilter === "week") return `${originLabel}This Week Updates`;
    const dayNames: {[key: string]: string} = {
        monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday", thursday: "Thursday", friday: "Friday", saturday: "Saturday", sunday: "Sunday"
    };
    return `${originLabel}Schedule: ${dayNames[timeFilter]}`;
  };

  return (
    <div className="space-y-8">
      <div className="container mx-auto px-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
                <button 
                    onClick={() => setTimeFilter("today")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.1em] transition-all border ${
                    timeFilter === "today" 
                    ? "bg-brand-primary text-black border-brand-primary shadow-[0_0_20px_rgba(14,165,233,0.3)]" 
                    : "bg-white/5 text-white/40 border-white/5 hover:bg-white/10"
                    }`}
                >
                    <CalendarDays className="w-3.5 h-3.5" />
                    Today
                </button>
                <button 
                    onClick={() => setTimeFilter("week")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.1em] transition-all border ${
                    timeFilter === "week" 
                    ? "bg-brand-primary text-black border-brand-primary shadow-[0_0_20px_rgba(14,165,233,0.3)]" 
                    : "bg-white/5 text-white/40 border-white/5 hover:bg-white/10"
                    }`}
                >
                    <History className="w-3.5 h-3.5" />
                    This Week
                </button>
                
                <div className="h-4 w-px bg-white/10 mx-2 hidden md:block" />

                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                    {dayButtons.map((day) => (
                        <button
                            key={day.id}
                            onClick={() => setTimeFilter(day.id as FilterType)}
                            className={`px-4 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all border ${
                                timeFilter === day.id
                                ? "bg-white/10 text-brand-primary border-brand-primary/50"
                                : "bg-transparent text-white/20 border-white/5 hover:border-white/20"
                            }`}
                        >
                            {day.label}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-3 text-[9px] font-mono text-white/20 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live Sync: {data.length} Matches Found
            </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${timeFilter}-${originFilter}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {data.length > 0 ? (
            originFilter ? (
                <div className="container mx-auto px-6">
                    <AnimeGrid title={getTitle()} data={data} />
                </div>
            ) : (
                <AnimeRow title={getTitle()} data={data} />
            )
          ) : (
            <div className="container mx-auto px-6 py-12">
              <div className="bg-[#14161a] border border-white/5 rounded-3xl p-16 text-center space-y-4">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <History className="w-8 h-8 text-white/10" />
                </div>
                <h3 className="text-xl font-display font-black italic uppercase text-white/40 tracking-tighter">No Data Detected</h3>
                <p className="text-white/20 font-mono text-xs uppercase tracking-[0.2em] max-w-sm mx-auto">No {originFilter || ""} releases found for this period in our Archive.</p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
