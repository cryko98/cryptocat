import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Frown, Smile, Quote } from "lucide-react";

export default function Story() {
  const [activeTab, setActiveTab] = useState<"scared" | "bull">("bull");
  const [showCelebration, setShowCelebration] = useState(false);

  const handleToggle = (tab: "scared" | "bull") => {
    setActiveTab(tab);
    if (tab === "bull") {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
    }
  };

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-[#FCFAF6] overflow-hidden">
      {/* Absolute Decorative elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30">
        <div className="absolute top-[30%] left-[-5%] w-64 h-64 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-yellow-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-2 rounded-full border border-amber-200 shadow-sm">
            🐕 The Legend of The Bull Dog
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#451A03] uppercase italic tracking-tight">
            From Trembling Pup to King of the Yard
          </h2>
          <p className="text-amber-950/80 font-sans font-medium text-base">
            Every legend starts with a choice. Trembling paws are gone forever. The most bullish dog in crypto is in complete control.
          </p>
        </div>

        {/* Interactive Mood Toggle Swapper */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-amber-100/50 p-2 rounded-2xl flex max-w-md mx-auto border border-amber-200">
            <button
              onClick={() => handleToggle("scared")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "scared"
                  ? "bg-amber-500/15 border border-amber-500/30 text-amber-800 shadow-sm"
                  : "text-amber-800/60 hover:text-amber-800"
              }`}
            >
              <Frown className={`w-4 h-4 ${activeTab === "scared" ? "text-amber-700" : ""}`} />
              Trembling Pup
            </button>
            <button
              onClick={() => handleToggle("bull")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "bull"
                  ? "bg-amber-600/15 border border-amber-600/30 text-amber-800 shadow-sm"
                  : "text-amber-800/60 hover:text-amber-800"
              }`}
            >
              <Smile className={`w-4 h-4 ${activeTab === "bull" ? "text-amber-700" : ""}`} />
              The Bull Dog
            </button>
          </div>
        </div>

        {/* Main Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Visual Transformation Side */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border transition-all relative overflow-hidden bg-[#FDFBF7] border-amber-200/80 shadow-xl">
            
            <AnimatePresence mode="wait">
              {activeTab === "scared" ? (
                <motion.div
                  key="scared-side"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                      <Frown className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-amber-900 uppercase italic">
                      Scared Paper-Hand Era
                    </h3>
                    <p className="text-sm text-amber-950/70 font-sans leading-relaxed">
                      Eek! Shaking, looking around in panic, panicking over minor red candles. Checking Twitter influencers for permission to breathe. Zero diamond teeth, empty bags, and weak chattering jaws.
                    </p>
                  </div>

                  <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
                    <div className="flex justify-between text-xs font-bold text-amber-800/60 mb-2">
                      <span>PORTFOLIO CONVICTION</span>
                      <span className="text-amber-600">0% (SCALED OFF)</span>
                    </div>
                    <div className="h-2 w-full bg-amber-100 rounded-full overflow-hidden">
                      <div className="h-full w-1 bg-amber-500"></div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-amber-600 text-center font-bold">
                      🚫 "Is the dev online? I'm trembling! *scared whimper*"
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="bull-side"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3 rounded-2xl bg-amber-100 text-amber-700 border border-amber-200 animate-bounce">
                      <Smile className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-amber-700 uppercase italic flex items-center gap-2">
                      Unstoppable King <Sparkles className="w-5 h-5 text-amber-500 animate-spin" />
                    </h3>
                    <p className="text-sm text-amber-950/80 font-sans leading-relaxed">
                      Heavy heavy golden chains, spike collar locked, designer sunglasses on. Sitting on piles of cash, laughing as the charts print vertical green skyscrapers because he holds forever!
                    </p>
                  </div>

                  {/* Fun Live Cash Counter Gauge */}
                  <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 shadow-sm">
                    <div className="flex justify-between text-xs font-bold text-amber-800 mb-2">
                      <span>BULLISH CHARGING VELOCITY</span>
                      <span className="text-amber-700 font-bold">MAX SPEED 🔥</span>
                    </div>
                    <div className="h-2 w-full bg-amber-100 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["35%", "98%", "80%", "100%", "60%", "98%"] }} 
                        transition={{ duration: 2, repeat: Infinity }} 
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-700"
                      ></motion.div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-amber-700 text-center font-bold">
                      🚀 "DIAMOND PAWS ALWAYS WIN"
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Micro Celebratory Confetti Banner */}
            {showCelebration && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-amber-500/10 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
              >
                <span className="text-3xl font-display font-black text-white rotate-[-5deg] bg-amber-600 px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(217,119,6,0.3)] border-2 border-white/25">
                  BULL POWER! 🐕💎
                </span>
              </motion.div>
            )}
          </div>

          {/* Text Story Side - Verbatim story text but adapted to bulldog */}
          <div className="lg:col-span-7 bg-[#FDFBF7] p-8 sm:p-10 rounded-3xl border border-amber-200 flex flex-col justify-between shadow-xl">
            
            <div className="space-y-8">
              {/* Quote icon styling */}
              <div className="text-amber-200">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Story Content adapted */}
              <div className="space-y-6 font-sans text-amber-950 font-medium">
                <p className="text-lg leading-relaxed text-amber-900">
                  He is no longer a <span className="bg-amber-100 text-amber-800 border border-amber-200 font-black px-2 py-0.5 rounded">Trembling Pup</span>.
                </p>
                <p className="text-xl sm:text-2xl font-display font-black text-amber-950 leading-tight uppercase italic">
                  He is <span className="text-amber-600">The Bull Dog</span> — the most bullish and tenacious dog in the entire blockchain.
                </p>
                <p className="text-base leading-relaxed text-amber-950/80">
                  Heavy heavy golden chains, spike collar locked, designer sunglasses on. Sitting on piles of cash, laughing as the charts print vertical green skyscrapers because he holds forever! Every green candle charges him up. He went from a trembling backyard pet to the degen king of the yard.
                </p>
                <p className="text-lg font-display font-black tracking-tight text-amber-700">
                  From scared whimpers to powerful, roaring BARKS!
                </p>
                <p className="text-base leading-relaxed text-amber-950/80">
                  The Bull Dog doesn’t chase the market anymore… <br />
                  <span className="text-amber-600 font-black text-lg italic">The market follows him.</span>
                </p>

                {/* Moral Highlight */}
                <div className="bg-amber-50/50 p-5 rounded-2xl border-l-4 border-amber-600 border-t border-r border-b border-amber-100/60 space-y-2">
                  <span className="block text-xs font-bold text-amber-700 uppercase tracking-wider font-mono">
                    Moral of the story:
                  </span>
                  <p className="text-sm font-sans text-amber-900/80 italic">
                    Even the most scared pup can become an absolute legend once he grows diamond teeth and joins $bulldog on Solana.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer story slogan */}
            <div className="pt-8 mt-8 border-t border-amber-200/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block text-[11px] font-black text-amber-800/40 tracking-wider uppercase font-mono">
                  THE FINAL VERDICT
                </span>
                <p className="font-display font-black text-lg text-amber-950">
                  $BULLDOG — <span className="text-amber-600">The king of the yard.</span>
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveTab("bull");
                  setShowCelebration(true);
                  setTimeout(() => setShowCelebration(false), 2000);
                  const element = document.getElementById("interactive-cat");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-display font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                Join the Bull Dog Pack ➔
              </button>
            </div>

          </div>

        </div>

        {/* Verbatim Question Box adapted to real Telegram link */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto shadow-[0_0_35px_rgba(217,119,6,0.25)] text-center relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <h4 className="font-display text-2xl sm:text-3xl font-black text-white uppercase italic drop-shadow-md">
              Are you still a trembling paper-handed pup… or are you ready to become a powerful, cash-rich Bull Dog?
            </h4>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-amber-800 hover:text-amber-950 font-display font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-none"
              >
                Get $BULLDOG Now 🚀
              </button>
              {/* Actual Telegram Link */}
              <a
                href="https://t.me/THEBULLDOGSOL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#78350F] text-white hover:bg-[#5C250A] font-display font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                Join Telegram Chat
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
