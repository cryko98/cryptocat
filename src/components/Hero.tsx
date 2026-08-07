import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, TrendingUp, BookOpen, Volume2, VolumeX, Compass, Heart, Share2 } from "lucide-react";

export default function Hero() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [likedCount, setLikedCount] = useState(742);
  const [hasLiked, setHasLiked] = useState(false);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      // Play a soft serene bell tone using web audio API
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(432, audioCtx.currentTime); // 432 Hz serene golden frequency
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 1.5);
      } catch (e) {
        // audio context fallback
      }
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikedCount((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] bg-[#f8edd1] text-[#1c1305] overflow-hidden border-b-2 border-[#b48c3c]/50 pt-8 pb-16 lg:py-20 vintage-ledger-grid selection:bg-[#fde047] selection:text-[#1c1305]"
    >
      {/* Golden Aura ambient glows */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-[#fbbf24] rounded-full blur-[140px] opacity-45 animate-pulse-subtle"></div>
        <div className="absolute top-[5%] right-[10%] w-[350px] h-[350px] bg-[#f59e0b] rounded-full blur-[120px] opacity-35"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[380px] h-[380px] bg-[#d97706] rounded-full blur-[130px] opacity-30"></div>
      </div>

      {/* Decorative 4-pointed golden sparkle stars as in original artwork */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <span className="absolute top-[12%] left-[18%] text-[#d97706] text-xl animate-sparkle">✦</span>
        <span className="absolute top-[24%] right-[22%] text-[#eab308] text-2xl animate-sparkle" style={{ animationDelay: "1s" }}>✦</span>
        <span className="absolute bottom-[28%] left-[28%] text-[#b45309] text-base animate-sparkle" style={{ animationDelay: "2s" }}>✦</span>
        <span className="absolute bottom-[18%] right-[15%] text-[#ca8a04] text-xl animate-sparkle" style={{ animationDelay: "1.5s" }}>✦</span>
        <span className="absolute top-[48%] left-[12%] text-[#d97706] text-sm animate-sparkle" style={{ animationDelay: "0.5s" }}>✦</span>
        <span className="absolute top-[52%] right-[10%] text-[#eab308] text-lg animate-sparkle" style={{ animationDelay: "2.5s" }}>✦</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Title Badge Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fae8b8] border border-[#b48c3c] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#d97706] animate-ping"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#78350f]">
              📜 HISTORIC MARKET SANCTUARY • SOLANA
            </span>
          </div>

          <h1 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl text-[#1c1305] tracking-tight uppercase leading-[1.08]">
            Cash<span className="text-[#b45309]">cate</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-[#78350f] font-semibold max-w-2xl mx-auto">
            “A Cat Walked Into the Market — Curiosity Sparked a Legend”
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={toggleSound}
              className="px-3.5 py-1.5 rounded-full bg-[#fdf3d7] hover:bg-[#fae8b8] border border-[#b48c3c] text-xs font-mono font-bold text-[#78350f] transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#b45309]" /> : <VolumeX className="w-3.5 h-3.5 text-[#92400e]" />}
              <span>{soundEnabled ? "432 Hz Resonance On" : "Enable Serene Chime"}</span>
            </button>

            <button
              onClick={handleLike}
              className="px-3.5 py-1.5 rounded-full bg-[#fdf3d7] hover:bg-[#fae8b8] border border-[#b48c3c] text-xs font-mono font-bold text-[#78350f] transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Heart className={`w-3.5 h-3.5 ${hasLiked ? "fill-[#b45309] text-[#b45309]" : "text-[#92400e]"}`} />
              <span>{likedCount} Paws of Respect</span>
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* EXACT VISUAL RECREATION OF THE ATTACHED ARTWORK COMPOSITION   */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: 2 Pinned Lore Clippings */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Note 1: Market Lore • Est. Long Ago */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative p-6 sm:p-7 rounded-sm bg-[#fcf6e8] border border-[#cbb07a] shadow-[0_10px_25px_rgba(58,38,7,0.18)] rotate-[-1deg] hover:rotate-0 transition-transform duration-300 group"
            >
              {/* Yellow Masking Tape on Top-Left Corner */}
              <div className="absolute -top-3.5 -left-3.5 w-14 h-7 bg-[#fef08a]/90 border border-[#eab308]/60 rotate-[-25deg] shadow-sm pointer-events-none z-20"></div>

              {/* Pushpin at top left */}
              <div className="absolute top-2 left-3 w-4 h-4 rounded-full bg-[#1c1305] border-2 border-[#78350f] shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-20"></div>

              <div className="space-y-3 pt-2">
                <span className="inline-block text-[11px] font-mono font-bold text-[#78350f] uppercase tracking-wider border-b border-[#cbb07a] pb-1">
                  MARKET LORE • EST. LONG AGO
                </span>

                <h3 className="font-serif font-black text-xl sm:text-2xl text-[#1c1305] leading-tight">
                  A Cat Walked Into the Market— Curiosity Sparked a Legend
                </h3>

                <p className="font-serif text-sm sm:text-base text-[#38260d] leading-relaxed">
                  They say a curious cat named <span className="highlight-yellow">CASHCATE</span> wandered into the market at dawn. No one knows where she came from, but she had a way of showing up at the right moment. From that day on, the legend of <span className="highlight-yellow">CASHCATE</span> began.
                </p>
              </div>
            </motion.div>

            {/* Note 2: Founders' Note • Passed Down */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 sm:p-7 rounded-sm bg-[#fcf6e8] border border-[#cbb07a] shadow-[0_10px_25px_rgba(58,38,7,0.18)] rotate-[1.2deg] hover:rotate-0 transition-transform duration-300 group"
            >
              {/* Yellow Masking Tape on Bottom-Left Corner */}
              <div className="absolute -bottom-3.5 -left-3.5 w-14 h-7 bg-[#fef08a]/90 border border-[#eab308]/60 rotate-[28deg] shadow-sm pointer-events-none z-20"></div>

              {/* Pushpin at top left */}
              <div className="absolute top-2 left-3 w-4 h-4 rounded-full bg-[#1c1305] border-2 border-[#78350f] shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-20"></div>

              {/* Dot Grid accent as on the left margin */}
              <div className="absolute left-2 top-10 flex flex-col gap-1.5 opacity-30 text-[#78350f] text-[8px] font-mono select-none">
                <span>• • •</span>
                <span>• • •</span>
                <span>• • •</span>
                <span>• • •</span>
              </div>

              <div className="space-y-3 pl-4 pt-1">
                <span className="inline-block text-[11px] font-mono font-bold text-[#78350f] uppercase tracking-wider border-b border-[#cbb07a] pb-1">
                  FOUNDERS' NOTE • PASSED DOWN
                </span>

                <h3 className="font-serif font-black text-xl sm:text-2xl text-[#1c1305] leading-tight">
                  “Curiosity Creates Opportunity,” — That’s Why We Love <span className="highlight-yellow">CASHCATE</span>.
                </h3>

                <p className="font-serif text-sm sm:text-base text-[#38260d] leading-relaxed">
                  Some called her lucky. Some called it fate. But those who saw her knew—she had a spark. <span className="highlight-yellow">CASHCATE</span> reminds us that curiosity can turn the ordinary into the extraordinary.
                </p>
              </div>
            </motion.div>

          </div>

          {/* CENTER COLUMN: The Golden Coin Medallion with large engraved "C" & Golden Cat */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center my-4 lg:my-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative group select-none"
            >
              {/* Outer Golden Ray Concentric Ring */}
              <div className="absolute -inset-6 sm:-inset-8 rounded-full border-2 border-dashed border-[#d97706]/40 animate-[spin_60s_linear_infinite] pointer-events-none"></div>
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-[#f59e0b]/50 pointer-events-none"></div>

              {/* Main Golden Embossed Coin Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-[#92400e] via-[#f59e0b] to-[#fef08a] shadow-[0_0_50px_rgba(217,119,6,0.5),0_15px_35px_rgba(0,0,0,0.35)] animate-gold-glow flex items-center justify-center overflow-hidden">
                
                {/* Golden Relief Ring */}
                <div className="w-full h-full rounded-full border-4 border-[#b45309] bg-[#d97706] p-1.5 flex items-center justify-center overflow-hidden relative shadow-inner">
                  
                  {/* Outer Golden Coin Texture */}
                  <img
                    src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-08-07_20-34-51.jpg?v=1786124116"
                    alt="Cashcate Golden Coin Medallion"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gentle shimmering reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none group-hover:opacity-40 transition-opacity"></div>
                </div>

              </div>

              {/* Golden Coin Sub-Label Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-[#1c1305] text-[#fef08a] border-2 border-[#eab308] shadow-lg flex items-center gap-2 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
                <span className="font-mono font-black text-xs uppercase tracking-widest">
                  THE GOLDEN EMBLEM • $CASHCATE
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 2 Pinned Chronicle Clippings with Vintage Illustrations */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Note 3: Windowsill Chronicle */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative p-6 sm:p-7 rounded-sm bg-[#fcf6e8] border border-[#cbb07a] shadow-[0_10px_25px_rgba(58,38,7,0.18)] rotate-[0.8deg] hover:rotate-0 transition-transform duration-300 group"
            >
              {/* Pushpin at top right */}
              <div className="absolute top-2 right-3 w-4 h-4 rounded-full bg-[#1c1305] border-2 border-[#78350f] shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-20"></div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <div className="sm:col-span-8 space-y-2.5">
                  <span className="inline-block text-[11px] font-mono font-bold text-[#78350f] uppercase tracking-wider border-b border-[#cbb07a] pb-1">
                    WINDOWSILL CHRONICLE
                  </span>

                  <h3 className="font-serif font-black text-xl sm:text-2xl text-[#1c1305] leading-tight">
                    A Golden Figure on the Windowsill Sees What Others Miss
                  </h3>

                  <p className="font-serif text-sm text-[#38260d] leading-relaxed">
                    Every morning, a golden cat appears. She watches in silence, sees what others overlook, and finds beauty in the quiet details. The newcomer has a name: <span className="highlight-yellow">CASHCATE</span>.
                  </p>
                </div>

                {/* Vintage Woodcut Cat on Windowsill Thumbnail */}
                <div className="sm:col-span-4 flex justify-center">
                  <div className="relative p-1 bg-[#faebd0] border border-[#b48c3c] shadow-inner rounded-sm overflow-hidden w-24 h-24 sm:w-28 sm:h-28">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-08-07_20-34-51.jpg?v=1786124116"
                      alt="Windowsill Cat Chronicle"
                      className="w-full h-full object-cover grayscale contrast-125 sepia hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-[#1c1305]/80 text-[#fef08a] text-[8px] font-mono text-center py-0.5">
                      Windowsill View
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Note 4: Market Chronicles • Vol. 1 • No. 7 */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative p-6 sm:p-7 rounded-sm bg-[#fcf6e8] border border-[#cbb07a] shadow-[0_10px_25px_rgba(58,38,7,0.18)] rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 group"
            >
              {/* Yellow Masking Tape on Bottom-Right Corner */}
              <div className="absolute -bottom-3.5 -right-3.5 w-14 h-7 bg-[#fef08a]/90 border border-[#eab308]/60 rotate-[-28deg] shadow-sm pointer-events-none z-20"></div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <div className="sm:col-span-8 space-y-2.5">
                  <div className="flex justify-between items-center border-b border-[#cbb07a] pb-1">
                    <span className="text-[11px] font-mono font-bold text-[#78350f] uppercase tracking-wider">
                      MARKET CHRONICLES
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#92400e] uppercase">
                      VOL. 1 • NO. 7
                    </span>
                  </div>

                  <h3 className="font-serif font-black text-xl sm:text-2xl text-[#1c1305] leading-tight">
                    <span className="highlight-yellow">CASHCATE</span> Roams the Market Still— A Legend in Every Pawstep.
                  </h3>

                  <p className="font-serif text-sm text-[#38260d] leading-relaxed">
                    She explores every corner, from busy streets to quiet alleys. Through every season, through every change, <span className="highlight-yellow">CASHCATE</span> is here—curious, calm, and timeless.
                  </p>
                </div>

                {/* Vintage Woodcut Alley Thumbnail */}
                <div className="sm:col-span-4 flex justify-center">
                  <div className="relative p-1 bg-[#faebd0] border border-[#b48c3c] shadow-inner rounded-sm overflow-hidden w-24 h-24 sm:w-28 sm:h-28">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-08-07_20-34-51.jpg?v=1786124116"
                      alt="Market Street Wanderer"
                      className="w-full h-full object-cover grayscale contrast-125 sepia hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-[#1c1305]/80 text-[#fef08a] text-[8px] font-mono text-center py-0.5">
                      Market Alley
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Interactive Navigation & Action Bar */}
        <div className="mt-14 pt-8 border-t border-[#b48c3c]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-[#78350f] font-mono text-xs font-bold">
            <span className="w-3 h-3 rounded-full bg-[#eab308]"></span>
            <span>NO TAX • 100% BURNED LP • IMMUTABLE CONTRACT • PURE COMMUNITY SANCTUARY</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection("market-lore")}
              className="px-5 py-2.5 rounded-xl bg-[#261a08] hover:bg-[#38260d] text-[#fef08a] font-mono font-bold text-xs shadow-md transition-all flex items-center gap-2 border border-[#785317]"
            >
              <BookOpen className="w-4 h-4 text-[#facc15]" /> Read Full Lore
            </button>

            <button
              onClick={() => scrollToSection("interactive-lounge")}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#eab308] hover:from-[#b45309] hover:to-[#d97706] text-[#1c1305] font-display font-black text-xs shadow-lg transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Golden Opportunity Lounge
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
