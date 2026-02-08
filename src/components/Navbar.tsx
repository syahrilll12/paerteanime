"use client";

import { useState, useEffect } from "react";
import { Search, Bell, User, Menu, Calendar, LayoutGrid, ChevronDown, Play, Star, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("Home");
  const [showSchedule, setShowSchedule] = useState(false);
  const [showSeasons, setShowSeasons] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [instantResults, setInstantResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showInstantSearch, setShowInstantSearch] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowInstantSearch(false);
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

  useEffect(() => {
    if (pathname === "/") setActiveTab("Home");
    else if (pathname.startsWith("/seasons")) setActiveTab("Seasons");
    else if (pathname.startsWith("/popular")) setActiveTab("Popular");
  }, [pathname]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.length >= 3) {
        setIsSearching(true);
        setShowInstantSearch(true);
        try {
          const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
          const json = await res.json();
          if (json.success) {
            setInstantResults(json.results.slice(0, 5));
          }
        } catch (error) {
          console.error("Instant search failed", error);
        } finally {
          setIsSearching(false);
        }
      } else {
        setInstantResults([]);
        setShowInstantSearch(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const navItems = [
    { name: "Home", icon: null, path: "/" },
    { name: "Schedule", icon: <Calendar className="w-3.5 h-3.5" />, dropdown: true },
    { name: "Seasons", icon: <LayoutGrid className="w-3.5 h-3.5" />, dropdown: true },
    { name: "Popular", icon: null, path: "/search?q=popular" }
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

  const seasonsList = [
    { label: "Winter 2026", id: "winter-2026" },
    { label: "Fall 2025", id: "fall-2025" },
    { label: "Summer 2025", id: "summer-2025" },
    { label: "Spring 2025", id: "spring-2025" },
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
            <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center font-black text-black italic text-xl shadow-[0_0_15px_rgba(14,165,233,0.4)]">T</div>
            <h1 className="text-xl font-bold tracking-tight text-white uppercase">
              Telana<span className="text-brand-primary italic">Nime</span>
            </h1>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => {
                  if (item.name === "Schedule") setShowSchedule(true);
                  if (item.name === "Seasons") setShowSeasons(true);
                }}
                onMouseLeave={() => {
                  if (item.name === "Schedule") setShowSchedule(false);
                  if (item.name === "Seasons") setShowSeasons(false);
                }}
              >
                {item.path ? (
                  <Link
                    href={item.path}
                    onClick={() => setActiveTab(item.name)}
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-all relative py-2 ${
                      activeTab === item.name ? "text-brand-primary scale-110" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                    {activeTab === item.name && (
                      <motion.div 
                        layoutId="navUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary" 
                      />
                    )}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      className={`flex items-center gap-1.5 text-sm font-semibold transition-all relative py-2 ${
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
                    
                    {/* Hover Area Bridging */}
                    <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
                  </div>
                )}

                {/* Mega Menu Schedule */}
                <AnimatePresence>
                  {item.name === "Schedule" && showSchedule && (
                      <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-[calc(100%-4px)] left-0 mt-2 w-[800px] bg-[#1a1c23] border border-white/5 shadow-2xl rounded-xl p-8 grid grid-cols-7 gap-6 z-[110]"
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

                {/* Seasons Dropdown */}
                <AnimatePresence>
                  {item.name === "Seasons" && showSeasons && (
                      <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-[calc(100%-4px)] left-0 mt-2 w-48 bg-[#1a1c23] border border-white/5 shadow-2xl rounded-xl p-4 z-[110]"
                      >
                          {seasonsList.map(s => (
                              <Link 
                                  key={s.id} 
                                  href={`/seasons?s=${s.id}`}
                                  className="block px-3 py-2 text-xs font-bold text-white/50 hover:text-brand-primary hover:bg-white/5 rounded-lg transition-all"
                                  onClick={() => setShowSeasons(false)}
                              >
                                  {s.label}
                              </Link>
                          ))}
                      </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                placeholder="Quick Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.length >= 3 && setShowInstantSearch(true)}
                className="bg-white/10 border border-white/5 rounded-full px-5 py-1.5 text-xs w-64 focus:w-80 focus:bg-white/20 focus:border-brand-primary/50 transition-all outline-none"
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
                {isSearching ? <Loader2 className="w-4 h-4 text-brand-primary animate-spin" /> : <Search className="w-4 h-4 text-white/40 hover:text-brand-primary transition-colors" />}
              </button>
            </form>

            <AnimatePresence>
              {showInstantSearch && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-4 bg-[#1a1c23] border border-white/10 shadow-2xl rounded-2xl p-2 z-[110] overflow-hidden"
                >
                  <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                    {instantResults.length > 0 ? (
                      instantResults.map((anime: any, idx: number) => {
                        const id = anime.link.split('/').filter(Boolean).pop();
                        return (
                          <Link
                            key={idx}
                            href={`/watch/${id}?url=${encodeURIComponent(anime.link)}`}
                            onClick={() => setShowInstantSearch(false)}
                            className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-xl transition-all group"
                          >
                            <div className="relative w-12 h-16 flex-none rounded-lg overflow-hidden bg-black/20">
                              <Image 
                                src={anime.image} 
                                alt={anime.title} 
                                fill 
                                className="object-cover transition-transform group-hover:scale-110" 
                                unoptimized
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-[11px] font-bold text-white truncate uppercase tracking-tight group-hover:text-brand-primary transition-colors">{anime.title}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-[9px] text-white/20 font-mono">TELANA_SYNC</span>
                                <span className="text-[9px] text-brand-primary font-bold">★ {anime.score || "8.5"}</span>
                              </div>
                            </div>
                            <Play className="w-4 h-4 text-brand-primary opacity-0 group-hover:opacity-100 transition-all mr-2" />
                          </Link>
                        );
                      })
                    ) : (
                      !isSearching && <div className="p-8 text-center text-white/20 text-[10px] font-mono uppercase tracking-widest">No Matches Found</div>
                    )}
                    {isSearching && (
                       <div className="p-8 text-center text-brand-primary/40 text-[10px] font-mono uppercase tracking-widest animate-pulse">Establishing Connection...</div>
                    )}
                  </div>
                  {instantResults.length > 0 && (
                    <button 
                      onClick={handleSearch}
                      className="w-full mt-2 py-2 bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-black text-[9px] font-black uppercase tracking-[0.2em] rounded-xl transition-all"
                    >
                      View All Results
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex items-center gap-5">
            <Bell className="w-5 h-5 text-white/60 cursor-pointer hover:text-brand-primary transition-colors" />
            <Link href="/profile" className="w-8 h-8 rounded-full bg-surface-high flex items-center justify-center border border-white/10 cursor-pointer hover:border-brand-primary transition-all overflow-hidden">
                <User className="w-4 h-4" />
            </Link>
            <Menu className="lg:hidden w-6 h-6" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
