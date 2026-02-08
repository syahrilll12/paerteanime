"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Play, Server, ChevronLeft, AlertCircle, Share2, Download, Heart, Monitor, Layers, Loader2, FastForward, Rewind, Settings, RotateCcw } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";

interface Stream {
  provider: string;
  url: string;
  directUrl?: string | null;
  isMp4?: boolean;
}

interface DownloadLink {
  quality: string;
  provider: string;
  url: string;
}

interface EpisodeData {
  title: string;
  streams: Stream[];
  episodes: { title: string; url: string; date: string }[];
  downloads?: DownloadLink[];
}

function TelanaWatchContent() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const url = searchParams.get("url");
  const titleParam = searchParams.get("title");
  
  const [data, setData] = useState<EpisodeData | null>(null);
  const [latestEpisodes, setLatestEpisodes] = useState<any[]>([]);
  const [activeStream, setActiveStream] = useState<Stream | null>(null);
  const [loading, setLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [resumeTime, setResumeTime] = useState<number | null>(null);
  const [showResumeAlert, setShowResumeAlert] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMp4Failed, setIsMp4Failed] = useState(false);
  const [showNextOverlay, setShowNextOverlay] = useState(false);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch("/api/scrape");
        const json = await res.json();
        if (json.success) {
          setLatestEpisodes(json.data.slice(0, 10));
        }
      } catch (err) {
        console.error("Failed to fetch latest episodes", err);
      }
    };
    fetchLatest();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      setDetailsLoading(true);
      setError(null);
      const cleanTitleParam = getCleanTitle(titleParam || "");
      if (!data || (cleanTitleParam && !getCleanTitle(data.title).includes(cleanTitleParam))) {
        setData(null);
      }

      try {
        let targetUrl = url;
        if (!targetUrl && titleParam) {
          const searchRes = await fetch(`/api/search?q=${encodeURIComponent(titleParam)}`);
          const searchJson = await searchRes.json();
          if (searchJson.success && searchJson.latestEpisode) {
            targetUrl = searchJson.latestEpisode.url;
          } else {
            throw new Error("Could not find streaming link.");
          }
        }

        if (!targetUrl) throw new Error("No URL provided.");

        const res = await fetch(`/api/episode?url=${encodeURIComponent(targetUrl)}`);
        const json = await res.json();
        
        if (json.success) {
          setData(json);
          if (json.streams.length > 0) {
            setActiveStream(json.streams[0]);
          }
        } else {
          throw new Error(json.error || "Failed to load stream.");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setDetailsLoading(false);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [url, titleParam]);

  const syncHistoryToCloud = async (progress: number) => {
    if (!session?.user || !data || !url) return;
    try {
      await fetch("/api/user/history", {
        method: "POST",
        body: JSON.stringify({
          animeId: url.split('/').filter(Boolean).slice(-2, -1)[0] || "unknown",
          episodeId: 1, // Placeholder
          progress,
        }),
      });
    } catch (e) {}
  };

  const toggleBookmark = async () => {
    if (!session?.user || !url) return;
    const animeId = url.split('/').filter(Boolean).slice(-2, -1)[0] || "unknown";
    try {
      const res = await fetch("/api/user/bookmarks", {
        method: "POST",
        body: JSON.stringify({ animeId }),
      });
      const json = await res.json();
      if (json.success) setIsBookmarked(json.bookmarked);
    } catch (e) {}
  };

  useEffect(() => {
    if (url) {
      const savedTime = localStorage.getItem(`resume-${url}`);
      if (savedTime) {
        setResumeTime(parseFloat(savedTime));
        setShowResumeAlert(true);
        setTimeout(() => setShowResumeAlert(false), 10000);
      }
    }
  }, [url]);

  useEffect(() => {
    const video = document.querySelector('video');
    if (!video) return;

    let lastSync = 0;
    const handleTimeUpdate = () => {
      if (url && video.currentTime > 5) {
        localStorage.setItem(`resume-${url}`, video.currentTime.toString());
        if (video.currentTime - lastSync > 30) {
          syncHistoryToCloud(video.currentTime);
          lastSync = video.currentTime;
        }
        if (video.duration - video.currentTime < 10 && !showNextOverlay) {
          setShowNextOverlay(true);
        }
      }
    };

    const handleEnded = () => {
      handleNextEpisode();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [url, data, showNextOverlay, session]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") skipTime(10);
      else if (e.key === "ArrowLeft") skipTime(-10);
      else if (e.code === "Space") { e.preventDefault(); togglePlay(); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying]);

  useEffect(() => {
    setIsMp4Failed(false);
    setIsPlaying(false);
    setIsBuffering(false);
    setShowSettings(false);
    setShowDownloadMenu(false);
    setShowNextOverlay(false);
  }, [activeStream]);

  const togglePlay = () => {
    const video = document.querySelector('video');
    if (video) {
      if (video.paused) { video.play().catch(() => setIsMp4Failed(true)); setIsPlaying(true); }
      else { video.pause(); setIsPlaying(false); }
    }
  };

  const skipTime = (seconds: number) => {
    const video = document.querySelector('video');
    if (video) { video.currentTime += seconds; setIsBuffering(true); }
  };

  const handleResume = () => {
    const video = document.querySelector('video');
    if (video && resumeTime) { video.currentTime = resumeTime; video.play(); }
    setShowResumeAlert(false);
  };

  const handleNextEpisode = () => {
    if (data?.episodes && data.episodes.length > 0) {
      const currentIdx = [...data.episodes].reverse().findIndex(ep => ep.url === url);
      if (currentIdx !== -1 && currentIdx < data.episodes.length - 1) {
        const nextEp = [...data.episodes].reverse()[currentIdx + 1];
        router.push(`/watch/${currentIdx + 1}?url=${encodeURIComponent(nextEp.url)}&title=${encodeURIComponent(titleParam || '')}`);
      }
    }
  };

  function getCleanTitle(fullTitle: string) {
    if (!fullTitle) return "";
    return fullTitle.replace(/ - Samehadaku.*/gi, '').replace(/ Episode \d+.*/gi, '').replace(/ Subtitle Indonesia.*/gi, '').trim();
  }

  const displayTitle = data?.title || titleParam || "Loading...";
  const currentEpisodeLabel = displayTitle.match(/Episode \d+/gi)?.[0] || (titleParam || "").match(/Episode \d+/gi)?.[0] || "Episode ?";

  if (loading) return (
    <div className="min-h-screen bg-[#0b0c10] flex flex-col items-center justify-center text-center p-6">
        <Loader2 className="w-12 h-12 text-brand-primary animate-spin mb-4" />
        <h2 className="text-xl font-display font-black italic uppercase tracking-[0.2em] text-white">Initializing Telana Protocol</h2>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-[#0b0c10] flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="w-16 h-16 text-brand-primary mb-6" />
        <h2 className="text-2xl font-display font-black italic uppercase mb-4">Transmission Error</h2>
        <p className="text-white/40 font-mono text-xs mb-8 max-w-md">{error}</p>
        <Link href="/" className="px-8 py-3 bg-brand-primary text-background font-display font-bold uppercase italic tracking-tighter transition-all hover:bg-white">Return to Base</Link>
    </div>
  );

  const currentPlayUrl = activeStream?.isMp4 
    ? `/api/proxy-video?url=${encodeURIComponent(activeStream.directUrl || activeStream.url)}`
    : activeStream?.url;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0b0c10] text-[#e0e0e0] font-sans pt-20">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="w-full bg-black aspect-video relative group border-b border-white/5 shadow-2xl">
          {detailsLoading && (
            <div className="absolute inset-0 z-[40] bg-black/60 backdrop-blur-md flex flex-col items-center justify-center">
                <Loader2 className="w-12 h-12 text-brand-primary animate-spin mb-4" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-primary animate-pulse">Syncing New Stream Node...</p>
            </div>
          )}

          <AnimatePresence>
            {showNextOverlay && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="absolute bottom-16 right-8 z-[50] glass p-6 rounded-2xl border-brand-primary/20 shadow-2xl flex flex-col gap-3 max-w-[200px]">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Next Episode Starting</span>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 10, ease: "linear" }} className="h-full bg-brand-primary" />
                </div>
                <button onClick={handleNextEpisode} className="flex items-center justify-between w-full px-4 py-2 bg-brand-primary text-background text-[10px] font-black uppercase rounded-lg">Play Now <FastForward className="w-3 h-3" /></button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showResumeAlert && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-20 left-1/2 -translate-x-1/2 z-[50] glass px-6 py-3 rounded-full flex items-center gap-4 shadow-2xl border-brand-primary/20">
                <div className="w-8 h-8 bg-brand-primary/20 rounded-full flex items-center justify-center"><RotateCcw className="w-4 h-4 text-brand-primary" /></div>
                <span className="text-xs font-bold uppercase tracking-widest">Resume where you left off?</span>
                <div className="flex items-center gap-2 ml-4">
                  <button onClick={handleResume} className="px-4 py-1.5 bg-brand-primary text-background text-[10px] font-black uppercase rounded-full hover:bg-white">Yes</button>
                  <button onClick={() => setShowResumeAlert(false)} className="px-4 py-1.5 bg-white/5 text-white/40 text-[10px] font-bold uppercase rounded-full hover:bg-white/10">No</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {currentPlayUrl ? (
                activeStream?.isMp4 && !isMp4Failed ? (
                  <motion.div key="video-player" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full relative">
                    <video key={currentPlayUrl} src={currentPlayUrl} controls className="w-full h-full object-contain" onPlay={() => { setIsPlaying(true); setIsBuffering(false); }} onPause={() => setIsPlaying(false)} onWaiting={() => setIsBuffering(true)} onPlaying={() => setIsBuffering(false)} onSeeked={() => setIsBuffering(false)} onError={() => setIsMp4Failed(true)} crossOrigin="anonymous" />
                    {isBuffering && <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-20 pointer-events-none"><Loader2 className="w-12 h-12 text-brand-primary animate-spin" /></div>}
                    {!isPlaying && !isBuffering && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                            <div className="flex items-center gap-8">
                                <button onClick={() => skipTime(-10)} className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all group"><Rewind className="w-8 h-8 text-white group-active:scale-90" /></button>
                                <button onClick={togglePlay} className="w-24 h-24 bg-brand-primary text-background rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_50px_rgba(14,165,233,0.3)]"><Play className="w-12 h-12 fill-current ml-2" /></button>
                                <button onClick={() => skipTime(10)} className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all group"><FastForward className="w-8 h-8 text-white group-active:scale-90" /></button>
                            </div>
                        </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.iframe key="iframe-player" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} src={currentPlayUrl} className="w-full h-full" allowFullScreen frameBorder="0" referrerPolicy="no-referrer" sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation" />
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/20"><Monitor className="w-20 h-20 mb-4 opacity-10" /></div>
              )}
          </AnimatePresence>
          
          <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between z-20">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-brand-primary transition-colors"><ChevronLeft className="w-5 h-5" /><span>Back to Home</span></Link>
            <div className="flex items-center gap-6 relative">
                <button onClick={() => setShowSettings(!showSettings)} className={`p-2 rounded-full transition-colors ${showSettings ? 'bg-brand-primary text-black' : 'hover:bg-white/10'}`}><Settings className="w-5 h-5 cursor-pointer" /></button>
                <Share2 className="w-5 h-5 cursor-pointer hover:text-brand-primary transition-colors" />
                <button onClick={toggleBookmark}><Heart className={`w-5 h-5 cursor-pointer transition-colors ${isBookmarked ? 'fill-brand-primary text-brand-primary' : 'hover:text-brand-primary'}`} /></button>
                <AnimatePresence>
                  {showSettings && (
                    <motion.div initial={{ opacity: 0, scale: 0.9, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 10 }} className="absolute top-full right-0 mt-4 w-48 bg-[#1a1c23] border border-white/10 shadow-2xl rounded-xl p-4 z-[50]">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 border-b border-white/5 pb-2">Select Resolution</h3>
                      <div className="space-y-1">
                        {data?.streams.map((s, i) => {
                          const resMatch = s.provider.match(/\d+p/);
                          const resLabel = resMatch ? resMatch[0] : s.provider;
                          return (<button key={i} onClick={() => { setActiveStream(s); setShowSettings(false); }} className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[10px] font-bold transition-all ${activeStream?.url === s.url ? 'bg-brand-primary text-black' : 'text-white/60 hover:bg-white/5'}`}><span>{resLabel}</span>{s.isMp4 && <span className="text-[7px] font-black opacity-60">DIRECT</span>}</button>);
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-12 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-2xl md:text-3xl font-display font-black tracking-tight uppercase text-white leading-tight">{getCleanTitle(displayTitle)}</h1>
                    <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-bold rounded-sm border border-brand-primary/20 tracking-tighter uppercase">{currentEpisodeLabel}</span>
                        <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase italic text-xs">TELANA-EXCLUSIVE • HD 1080P • SUB INDO</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 relative">
                    <button onClick={() => setShowDownloadMenu(!showDownloadMenu)} className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-colors ${showDownloadMenu ? 'bg-brand-primary text-black' : 'bg-[#1a1c23] hover:bg-[#252833]'}`}><Download className="w-4 h-4" /> Download</button>
                    <AnimatePresence>
                      {showDownloadMenu && data?.downloads && data.downloads.length > 0 && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute bottom-full mb-4 right-0 w-64 bg-[#1a1c23] border border-white/10 shadow-2xl rounded-xl p-4 z-[50]">
                          <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 border-b border-white/5 pb-2">Available Nodes</h3>
                          <div className="max-h-60 overflow-y-auto no-scrollbar space-y-1">
                            {data.downloads.map((dl, i) => (
                              <a key={i} href={dl.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg text-[10px] font-bold text-white/60 hover:text-brand-primary hover:bg-white/5 transition-all"><span>{dl.quality}</span><span className="opacity-40">{dl.provider}</span></a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div className="flex items-center gap-8 border-b border-white/5 pb-4"><button className="text-brand-primary font-bold text-sm border-b-2 border-brand-primary pb-4 -mb-[17px]">Episodes</button></div>
                    <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3">
                        {data?.episodes && data.episodes.length > 0 ? (
                            [...data.episodes].reverse().map((ep, idx) => {
                                const epNum = ep.title.match(/\d+/)?.[0] || (idx + 1).toString();
                                return (
                                    <button key={idx} onClick={() => { router.push(`/watch/${idx}?url=${encodeURIComponent(ep.url)}&title=${encodeURIComponent(titleParam || '')}`); }} className={`aspect-square flex items-center justify-center rounded-sm text-xs font-bold transition-all ${ep.url === url ? 'bg-brand-primary text-background' : 'bg-[#1a1c23] hover:bg-[#252833] text-white/60'}`}>{epNum}</button>
                                );
                            })
                        ) : (
                            <>
                                {titleParam && <div className="aspect-square flex items-center justify-center rounded-sm text-xs font-bold bg-brand-primary/20 text-brand-primary border border-brand-primary/30 animate-pulse">{(titleParam || "").match(/\d+/)?.[0] || "?"}</div>}
                                {Array.from({ length: titleParam ? 11 : 12 }).map((_, ep) => (<div key={ep} className="aspect-square bg-white/5 animate-pulse rounded-sm" />))}
                            </>
                        )}
                    </div>
                </div>
                <div className="space-y-6 hidden md:block">
                    <div className="glass p-6 rounded-xl border-l-2 border-brand-primary space-y-2">
                        <h4 className="text-[10px] font-black uppercase text-brand-primary tracking-widest text-xs">Protocol Tip</h4>
                        <p className="text-[10px] leading-relaxed text-white/40 font-medium">Use [SPACE] to toggle playback, and [ARROWS] to seek. Select resolutions from the settings icon on player node.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="w-full lg:w-96 bg-[#0b0c10] border-l border-white/5 p-8 overflow-y-auto hidden lg:block pb-32">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-3"><Layers className="w-4 h-4 text-brand-primary" />Up Next</h2>
        <div className="space-y-6">
            {latestEpisodes.map((episode) => (
                <Link key={episode.id} href={`/watch/${episode.id}?url=${encodeURIComponent(episode.link)}`} className="flex gap-4 group cursor-pointer">
                    <div className="relative w-32 aspect-video flex-none rounded-sm overflow-hidden bg-[#1a1c23] border border-white/5">
                        <img src={episode.image} alt={episode.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                        <div className="absolute bottom-1 right-1 px-1 bg-brand-primary text-background text-[7px] font-black rounded-xs italic uppercase">{episode.episode}</div>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <h4 className="text-[11px] font-bold line-clamp-2 leading-tight group-hover:text-brand-primary transition-colors uppercase italic">{episode.title}</h4>
                        <span className="text-[9px] text-white/30 font-mono tracking-widest uppercase text-xs">Global Transmission</span>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10]">
      <Navbar />
      <Suspense fallback={null}>
        <TelanaWatchContent />
      </Suspense>
    </main>
  );
}
