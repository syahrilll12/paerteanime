import { auth, signOut } from "@/lib/auth";
import { Navbar } from "@/components/Navbar";
import { redirect } from "next/navigation";
import Image from "next/image";
import { LogOut, Bookmark, History, Settings, ShieldCheck } from "lucide-react";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="min-h-screen bg-[#0b0c10] text-white">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-10 rounded-3xl border border-white/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-brand-primary/20 p-1">
                  <Image 
                    src={session.user.image || "/file.svg"} 
                    alt={session.user.name || "User"} 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-primary text-black p-1.5 rounded-full shadow-lg">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl font-display font-black italic uppercase tracking-tight text-white mb-2">
                  {session.user.name}
                </h1>
                <p className="text-white/40 font-mono text-xs uppercase tracking-widest mb-6">
                  {session.user.email}
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2">
                    <History className="w-4 h-4 text-brand-primary" />
                    <span className="text-[10px] font-black uppercase">12 Watched</span>
                  </div>
                  <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-brand-primary" />
                    <span className="text-[10px] font-black uppercase">5 Bookmarked</span>
                  </div>
                </div>
              </div>

              <form action={async () => {
                "use server";
                await signOut();
              }}>
                <button className="flex items-center gap-2 px-8 py-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-full text-xs font-black transition-all uppercase italic tracking-tighter border border-red-500/20">
                    <LogOut className="w-4 h-4" /> Logout
                </button>
              </form>
            </div>
          </div>

          {/* Settings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-primary/20 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                <Settings className="w-6 h-6 text-white/20 group-hover:text-brand-primary transition-colors" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">General Settings</h3>
              <p className="text-xs text-white/40 leading-relaxed">Manage your default resolution, autoplay preferences, and theme nodes.</p>
            </div>
            
            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-primary/20 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                <Bookmark className="w-6 h-6 text-white/20 group-hover:text-brand-primary transition-colors" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">My Bookmarks</h3>
              <p className="text-xs text-white/40 leading-relaxed">Quickly access your saved anime titles and seasonal favorites.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
