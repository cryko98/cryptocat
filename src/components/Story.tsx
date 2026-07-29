import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShieldCheck, Quote, Flame, Award, Coffee, BookOpen, Crown } from "lucide-react";

export default function Story() {
  const [activeTab, setActiveTab] = useState<"composure" | "puff">("puff");
  const [showPuffEffect, setShowPuffEffect] = useState(false);

  const handleToggle = (tab: "composure" | "puff") => {
    setActiveTab(tab);
    if (tab === "puff") {
      setShowPuffEffect(true);
      setTimeout(() => setShowPuffEffect(false), 2200);
    }
  };

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-[#140b07] text-[#fbf0da] overflow-hidden border-t border-[#2d1b11]">
      {/* Background warm amber glows */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute top-[20%] left-[-5%] w-80 h-80 bg-[#92400e] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-[#d97706] rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b] bg-[#251710] px-4 py-2 rounded-full border border-[#d97706]/40 shadow-md">
            📜 THE LEGEND OF PIPE DOG
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#fbf0da] uppercase tracking-tight">
            The Most Gentleman <span className="text-[#f59e0b]">Meme</span>
          </h2>
          <p className="text-[#e4cbaf] font-sans font-semibold text-base sm:text-lg">
            An iconic symbol of wisdom, vintage class, and unshakeable composure in the wild world of Solana crypto.
          </p>
        </div>

        {/* Interactive Stance Toggle */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#251710]/90 p-2 rounded-2xl flex max-w-md mx-auto border border-[#4a2e1d] shadow-2xl">
            <button
              onClick={() => handleToggle("composure")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                activeTab === "composure"
                  ? "bg-[#382318] text-[#f59e0b] border border-[#d97706]/40 shadow-md"
                  : "text-[#d4bca0] hover:text-[#fbf0da]"
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#f59e0b]" />
              Classic Composure
            </button>
            <button
              onClick={() => handleToggle("puff")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                activeTab === "puff"
                  ? "bg-gradient-to-r from-[#d97706] to-[#b45309] text-[#120b08] font-black shadow-lg"
                  : "text-[#d4bca0] hover:text-[#fbf0da]"
              }`}
            >
              <Flame className="w-4 h-4" />
              Pipe Puff Wisdom
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Visual Stance Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border transition-all relative overflow-hidden bg-[#251710]/95 border-[#4a2e1d] shadow-2xl">
            
            <AnimatePresence mode="wait">
              {activeTab === "composure" ? (
                <motion.div
                  key="composure-mode"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3.5 rounded-2xl bg-[#140b07] text-[#f59e0b] border border-[#3e271a]">
                      <Coffee className="w-8 h-8 text-[#f59e0b]" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-[#fbf0da] uppercase">
                      Unshakeable Gentleman
                    </h3>
                    <p className="text-sm text-[#e4cbaf] font-sans leading-relaxed font-medium">
                      Market volatility? Red candles? Noise on Twitter? Pipe Dog remains entirely unbothered. He relaxes in his oak study, sips fine tea, and holds his $pipedog bags with ultimate serenity.
                    </p>
                  </div>

                  <div className="bg-[#140b07]/90 p-4 rounded-2xl border border-[#3e271a]">
                    <div className="flex justify-between text-xs font-bold text-[#e4cbaf] mb-2 font-mono">
                      <span>GENTLEMAN COMPOSURE</span>
                      <span className="text-[#f59e0b]">100% ZEN</span>
                    </div>
                    <div className="h-2 w-full bg-[#251710] rounded-full overflow-hidden">
                      <div className="h-full w-full bg-[#f59e0b] shadow-[0_0_10px_#f59e0b]"></div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-[#f59e0b] text-center font-bold">
                      🍂 "Patience is the virtue of true market kings."
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="puff-mode"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3.5 rounded-2xl bg-[#382318] text-[#f59e0b] border border-[#d97706]/40 animate-pulse">
                      <Flame className="w-8 h-8 text-[#f59e0b]" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-[#f59e0b] uppercase flex items-center gap-2">
                      Puff of Pure Wisdom <Sparkles className="w-5 h-5 text-[#fef3c7]" />
                    </h3>
                    <p className="text-sm text-[#e4cbaf] font-sans leading-relaxed font-medium">
                      With every puff of his carved tobacco pipe, Pipe Dog exhales clarity over the charts. Paper hands sell out in panic, while Pipe Dog and his gentlemen's club absorb the floor and send green candles skyrocketing!
                    </p>
                  </div>

                  <div className="bg-[#140b07] p-4 rounded-2xl border border-[#d97706]/40 shadow-lg">
                    <div className="flex justify-between text-xs font-bold text-[#e4cbaf] mb-2 font-mono">
                      <span>PIPE PUFF POWER</span>
                      <span className="text-[#f59e0b] font-bold">LEGENDARY 🍂</span>
                    </div>
                    <div className="h-2 w-full bg-[#251710] rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["80%", "100%", "92%", "100%"] }} 
                        transition={{ duration: 1.8, repeat: Infinity }} 
                        className="h-full bg-gradient-to-r from-[#d97706] to-[#f59e0b] shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                      ></motion.div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-[#f59e0b] text-center font-bold">
                      💨 "Exhale the fear, inhale the green candles!"
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Custom Pipe Puff Effect */}
            {showPuffEffect && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#d97706]/20 backdrop-blur-[2px] flex items-center justify-center pointer-events-none z-20"
              >
                <span className="text-xl sm:text-2xl font-display font-black text-[#120b08] bg-[#f59e0b] px-6 py-3 rounded-2xl shadow-2xl border-2 border-white">
                  💨 PUFF! PIPE DOG WISDOM UNLOCKED! 🍂
                </span>
              </motion.div>
            )}
          </div>

          {/* Text Story Side */}
          <div className="lg:col-span-7 bg-[#251710]/95 p-8 sm:p-10 rounded-3xl border border-[#4a2e1d] flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-8">
              <div className="text-[#f59e0b]/40">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              <div className="space-y-6 font-sans text-[#e4cbaf] font-semibold">
                <p className="text-lg leading-relaxed text-[#fbf0da]">
                  In an ocean of chaotic, fast-fading crypto tokens, <span className="bg-[#382318] text-[#f59e0b] border border-[#d97706]/40 font-bold px-2.5 py-1 rounded-lg">$pipedog</span> brings timeless class back to Solana!
                </p>
                <p className="text-2xl sm:text-3xl font-display font-black text-[#fbf0da] leading-tight uppercase">
                  "Class is permanent. <span className="text-[#f59e0b]">Pipe Dog is forever.</span>"
                </p>
                <p className="text-base leading-relaxed text-[#d4bca0]">
                  Pipe Dog doesn't panic. Pipe Dog doesn't rug. He sits gracefully, pipe in hand, guiding holders with veteran composure. Backed by a 100% renounced contract, burned liquidity, and 0% taxes, $pipedog is the noble sanctuary for true meme connoisseurs.
                </p>

                <div className="bg-[#140b07]/90 p-5 rounded-2xl border-l-4 border-[#f59e0b] border-y border-r border-[#3e271a] space-y-2">
                  <span className="block text-xs font-bold text-[#f59e0b] uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-[#f59e0b]" /> Golden Rule of Pipe Dog:
                  </span>
                  <p className="text-sm font-sans text-[#e4cbaf] italic">
                    "Hold with gentleman dignity, let the paper hands exit, and watch the green smoke rise to the heavens."
                  </p>
                </div>
              </div>
            </div>

            {/* Footer story CTA */}
            <div className="pt-8 mt-8 border-t border-[#3e271a] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block text-[11px] font-black text-[#d4bca0] tracking-wider uppercase font-mono">
                  IMMUTABLE SOLANA TOKEN
                </span>
                <p className="font-display font-black text-lg text-[#fbf0da]">
                  $pipedog — <span className="text-[#f59e0b]">Pure Gentleman Code.</span>
                </p>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById("interactive-lounge");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-[#120b08] font-display font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                Enter Pipe Lounge ➔
              </button>
            </div>

          </div>

        </div>

        {/* Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#2a1a10] via-[#452a1a] to-[#2a1a10] border border-[#d97706]/40 text-[#fbf0da] p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto shadow-[0_0_40px_rgba(217,119,6,0.2)] text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h4 className="font-display text-2xl sm:text-3xl font-black text-[#fbf0da] uppercase drop-shadow-md">
              Are you ready to join the most distinguished gentlemen's club on Solana?
            </h4>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#f59e0b] text-[#120b08] font-display font-black text-sm shadow-xl hover:bg-[#fbbf24] hover:scale-105 active:scale-95 transition-all cursor-pointer border-none"
              >
                Acquire $pipedog Now 🍂
              </button>
              
              <a
                href="https://t.me/pipedogonsol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#140b07] text-[#fef3c7] font-display font-black text-sm shadow-xl hover:bg-[#251710] hover:scale-105 active:scale-95 transition-all border border-[#d97706]/40 cursor-pointer flex items-center justify-center gap-2"
              >
                Join Telegram Lounge
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
