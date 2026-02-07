"use client";

import { useEffect, useState } from "react";
import { AnimeRow } from "./AnimeRow";
import { Loader2, CalendarDays, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FilterType = "today" | "week" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export const ScrapedAnimeList = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState<FilterType>("today");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/scrape");
        const json = await res.json();
        if (json.success) {
          setData(json.data);
        }
      } catch (err) {
        console.error("Failed to fetch scraped anime", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const updatedAt = new Date(item.updatedAt);
    const now = new Date();
    
    // Fix: Use local time for better consistency in day filtering
    if (timeFilter === "today") {
      return updatedAt.toDateString() === now.toDateString();
    } else if (timeFilter === "week") {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(now.getDate() - 7);
      return updatedAt >= oneWeekAgo;
    } else {
      const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      const itemDayIndex = updatedAt.getDay();
      return days[itemDayIndex] === timeFilter;
    }
  });

  if (loading) {
    return (
      <div className="container mx-auto px-6 mb-12 flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-widest">
        <Loader2 className="w-3 h-3 animate-spin" />
        Syncing Global Transmission...
      </div>
    );
  }

  if (data.length === 0) return null;

  const formattedData = filteredData.map(item => ({
    ...item,
    category: "Latest Update",
    rating: (Math.random() * 1.5 + 8.0).toFixed(1) // Visual consistency
  }));

  const dayButtons = [
    { id: "mon", label: "Mon" },
    { id: "tue", label: "Tue" },
    { id: "wed", label: "Wed" },
    { id: "thu", label: "Thu" },
    { id: "fri", label: "Fri" },
    { id: "sat", label: "Sat" },
    { id: "sun", label: "Sun" },
  ];

  const getTitle = () => {
    if (timeFilter === "today") return "New Episodes Today";
    if (timeFilter === "week") return "Weekly Fresh Updates";
    const dayNames: {[key: string]: string} = {
        mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday"
    };
    return `Updates on ${dayNames[timeFilter]}`;
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
                Live Sync: {formattedData.length} Matches Found
            </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={timeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {formattedData.length > 0 ? (
            <AnimeRow title={getTitle()} data={formattedData} />
          ) : (
            <div className="container mx-auto px-6 py-12">
              <div className="bg-[#14161a] border border-white/5 rounded-3xl p-16 text-center space-y-4">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <History className="w-8 h-8 text-white/10" />
                </div>
                <h3 className="text-xl font-display font-black italic uppercase text-white/40 tracking-tighter">No Transmission Data</h3>
                <p className="text-white/20 font-mono text-xs uppercase tracking-[0.2em] max-w-sm mx-auto">No releases were captured for this period. Try switching to 'This Week' for more results.</p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
