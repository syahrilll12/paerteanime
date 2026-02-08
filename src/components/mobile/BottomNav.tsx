"use client";

import { Home, Search, History, User, Bookmark } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const BottomNav = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Search", icon: Search, path: "/search?q=" },
    { name: "History", icon: History, path: "/history" },
    { name: "Bookmarks", icon: Bookmark, path: "/bookmarks" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[120] bg-[#0b0c10]/95 backdrop-blur-xl border-t border-white/5 pb-safe">
      <div className="flex items-center justify-around h-16">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path.split('?')[0]));
          
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className="relative flex flex-col items-center justify-center w-full h-full gap-1 transition-colors"
            >
              <item.icon 
                className={`w-5 h-5 transition-all ${isActive ? 'text-brand-primary scale-110' : 'text-white/30'}`} 
              />
              <span className={`text-[8px] font-black uppercase tracking-widest ${isActive ? 'text-brand-primary' : 'text-white/20'}`}>
                {item.name}
              </span>
              
              {isActive && (
                <motion.div 
                  layoutId="bottomNavActive"
                  className="absolute -top-px left-1/4 right-1/4 h-0.5 bg-brand-primary shadow-[0_0_10px_#0ea5e9]"
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
