"use client";

import { useState, useEffect } from "react";
import { Search, Bell, User, Menu, Calendar, LayoutGrid, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [showSchedule, setShowSchedule] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: null },
    { name: "Schedule", icon: <Calendar className="w-3.5 h-3.5" />, dropdown: true },
    { name: "Seasons", icon: <LayoutGrid className="w-3.5 h-3.5" />, dropdown: true },
    { name: "Popular", icon: null }
  ];

  const releaseSchedule = [
    { day: "Mon", titles: ["Tensei shitara Dragon no Tamago datta", "Ao no Miburo"] },
    { day: "Tue", titles: ["Sousou no Frieren 2nd Season", "Android wa Keiken Ninzuu"] },
    { day: "Wed", titles: ["Hell Mode: Yarikomizuki", "Dark Moon: Tsuki no Saidan"] },
    { day: "Thu", titles: ["Jujutsu Kaisen: Shimetsu Kaiyuu", "Mato Seihei no Slave 2"] },
    { day: "Fri", titles: ["Enen no Shouboutai: San no Shou", "Champignon no Majo"] },
    { day: "Sat", titles: ["Douse, Koishite Shimaunda", "Omae Gotoki ga Maou ni Kateru"] },
    { day: "Sun", titles: ["One Piece", "Solo Leveling"] },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-[#0b0c10]/95 backdrop-blur-md shadow-2xl py-3" : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center font-black text-black italic text-xl">T</div>
            <h1 className="text-xl font-bold tracking-tight text-white uppercase">
              Telana<span className="text-brand-primary italic">Nime</span>
            </h1>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.name === "Schedule" && setShowSchedule(true)}
                onMouseLeave={() => item.name === "Schedule" && setShowSchedule(false)}
              >
                <button
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center gap-1.5 text-sm font-semibold transition-all relative ${
                    activeTab === item.name ? "text-brand-primary scale-110" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.icon}
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />}
                  {activeTab === item.name && (
                    <motion.div 
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary" 
                    />
                  )}
                </button>

                {/* Mega Menu Schedule */}
                {item.name === "Schedule" && (
                    <AnimatePresence>
                        {showSchedule && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 mt-4 w-[800px] bg-[#1a1c23] border border-white/5 shadow-2xl rounded-xl p-8 grid grid-cols-7 gap-6"
                            >
                                {releaseSchedule.map((d) => (
                                    <div key={d.day} className="space-y-4 text-center">
                                        <div className="text-[12px] font-black uppercase text-brand-primary bg-brand-primary/10 py-1.5 rounded-md tracking-widest">{d.day}</div>
                                        <div className="flex flex-col gap-3">
                                            {d.titles.map(t => (
                                                <div key={t} className="text-[10px] font-bold text-white/50 hover:text-brand-primary cursor-pointer transition-colors leading-snug">
                                                    {t}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}

                {/* Simple Seasons Dropdown */}
                {item.name === "Seasons" && (
                    <div className="absolute top-full left-0 mt-4 w-48 bg-[#1a1c23] border border-white/5 shadow-2xl rounded-xl p-4 hidden group-hover:block animate-in fade-in slide-in-from-top-2">
                        {["Winter 2026", "Fall 2025", "Summer 2025", "Spring 2025"].map(s => (
                             <div key={s} className="px-3 py-2 text-xs font-bold text-white/50 hover:text-brand-primary hover:bg-white/5 rounded-lg cursor-pointer transition-all">
                                {s}
                             </div>
                        ))}
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search Anime..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/10 border border-white/5 rounded-full px-5 py-1.5 text-xs w-64 focus:w-80 focus:bg-white/20 transition-all outline-none"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
              <Search className="w-4 h-4 text-white/40 hover:text-brand-primary transition-colors" />
            </button>
          </form>
          
          <div className="flex items-center gap-5">
            <Bell className="w-5 h-5 text-white/60 cursor-pointer hover:text-brand-primary transition-colors" />
            <div className="w-8 h-8 rounded-full bg-surface-high flex items-center justify-center border border-white/10 cursor-pointer hover:border-brand-primary transition-all overflow-hidden">
                <User className="w-4 h-4" />
            </div>
            <Menu className="lg:hidden w-6 h-6" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
