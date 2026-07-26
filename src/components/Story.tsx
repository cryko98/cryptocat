import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShieldCheck, Waves, Quote, Skull, Zap, Eye, Trophy } from "lucide-react";

export default function Story() {
  const [activeTab, setActiveTab] = useState<"stealth" | "frenzy">("frenzy");
  const [showBiteEffect, setShowBiteEffect] = useState(false);

  const handleToggle = (tab: "stealth" | "frenzy") => {
    setActiveTab(tab);
    if (tab === "frenzy") {
      setShowBiteEffect(true);
      setTimeout(() => setShowBiteEffect(false), 2000);
    }
  };

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      {/* Ocean depth glows */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute top-[20%] left-[-5%] w-80 h-80 bg-sky-500 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-300 bg-slate-800 px-4 py-2 rounded-full border border-sky-500/30 shadow-md">
            🦈 THE LORE OF SHARK CAT
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tight">
            The Razor-Sharp Apex <span className="text-sky-400">Predator</span>
          </h2>
          <p className="text-slate-300 font-sans font-semibold text-base sm:text-lg">
            Born from the deepest ocean trenches of Solana, combining unmatched feline stealth with bloodthirsty shark jaws.
          </p>
        </div>

        {/* Interactive Stance Toggle */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/90 p-2 rounded-2xl flex max-w-md mx-auto border border-slate-700 shadow-xl">
            <button
              onClick={() => handleToggle("stealth")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                activeTab === "stealth"
                  ? "bg-slate-700 text-sky-300 border border-sky-500/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Eye className="w-4 h-4 text-sky-400" />
              Ocean Stealth Mode
            </button>
            <button
              onClick={() => handleToggle("frenzy")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                activeTab === "frenzy"
                  ? "bg-sky-500 text-slate-950 font-black shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Skull className="w-4 h-4" />
              Apex Attack Frenzy
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Visual Stance Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border transition-all relative overflow-hidden bg-slate-800/90 border-slate-700 shadow-2xl">
            
            <AnimatePresence mode="wait">
              {activeTab === "stealth" ? (
                <motion.div
                  key="stealth-mode"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3.5 rounded-2xl bg-slate-900 text-sky-400 border border-slate-700">
                      <Waves className="w-8 h-8 text-sky-400" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-white uppercase italic">
                      Silent Underwater Stalker
                    </h3>
                    <p className="text-sm text-slate-300 font-sans leading-relaxed">
                      Shark Cat glides silently through Solana’s blockchain ocean, completely undetected by weak retail bots. It waits for the perfect moment to strike bears and paper hands.
                    </p>
                  </div>

                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-700">
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2 font-mono">
                      <span>STEALTH RADAR LEVEL</span>
                      <span className="text-sky-400">100% GHOST MODE</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-sky-400 shadow-[0_0_10px_#38bdf8]"></div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-sky-300 text-center font-bold">
                      🌊 Stealth activated — zero friction, zero mercy!
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="frenzy-mode"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3.5 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/40 animate-pulse">
                      <Skull className="w-8 h-8 text-sky-400" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-sky-400 uppercase italic flex items-center gap-2">
                      Bloodthirsty Apex Frenzy <Zap className="w-5 h-5 text-sky-300 animate-spin" />
                    </h3>
                    <p className="text-sm text-slate-200 font-sans leading-relaxed">
                      When Shark Cat bites into paper hands, green candles erupt across the charts. Its razor-sharp jaws shred sell pressure and create massive momentum for diamond-fanged $sharkcat holders!
                    </p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-2xl border border-sky-500/30 shadow-lg">
                    <div className="flex justify-between text-xs font-bold text-slate-200 mb-2 font-mono">
                      <span>FEEDING FRENZY POWER</span>
                      <span className="text-sky-400 font-bold">OVERFLOWING ⚡</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["80%", "100%", "90%", "100%"] }} 
                        transition={{ duration: 1.5, repeat: Infinity }} 
                        className="h-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                      ></motion.div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-sky-400 text-center font-bold">
                      🔥 "Razor jaws unlocked — bear market obliterated!"
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Custom Bite Flash */}
            {showBiteEffect && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-sky-500/20 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
              >
                <span className="text-2xl font-display font-black text-slate-950 rotate-[-5deg] bg-sky-400 px-5 py-2.5 rounded-2xl shadow-2xl border-2 border-white">
                  CHOMP! APEX ATTACK! 🦈🔥
                </span>
              </motion.div>
            )}
          </div>

          {/* Text Story Side */}
          <div className="lg:col-span-7 bg-slate-800/90 p-8 sm:p-10 rounded-3xl border border-slate-700 flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-8">
              <div className="text-sky-400/30">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              <div className="space-y-6 font-sans text-slate-200 font-semibold">
                <p className="text-lg leading-relaxed text-slate-100">
                  In a market overrun by soft memes and paper-pawed coins, <span className="bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold px-2.5 py-1 rounded-lg">$sharkcat</span> emerged to dominate Solana!
                </p>
                <p className="text-2xl sm:text-3xl font-display font-black text-white leading-tight uppercase italic">
                  "Equal parts <span className="text-sky-400">cunning feline</span> and <span className="text-sky-300">razor-jawed shark</span>!"
                </p>
                <p className="text-base leading-relaxed text-slate-300">
                  Shark Cat doesn't ask for permission. It hunts bear market dips, shreds doubt, and delivers relentless green candles to its pack. With a renounced contract, burned liquidity, and 0% buy/sell tax, it stands as an invincible titan of the meme ocean.
                </p>

                <div className="bg-slate-900/90 p-5 rounded-2xl border-l-4 border-sky-400 border-y border-r border-slate-700 space-y-2">
                  <span className="block text-xs font-bold text-sky-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-sky-400" /> Apex Rule of the Solana Deep:
                  </span>
                  <p className="text-sm font-sans text-slate-300 italic">
                    Stop swimming with fragile tokens. Join the apex predator that rips through paper hands and claims the throne of Solana!
                  </p>
                </div>
              </div>
            </div>

            {/* Footer story CTA */}
            <div className="pt-8 mt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block text-[11px] font-black text-slate-400 tracking-wider uppercase font-mono">
                  MINT & CONTRACT SECURITY
                </span>
                <p className="font-display font-black text-lg text-white">
                  $sharkcat — <span className="text-sky-400">100% Immutable Apex Code.</span>
                </p>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById("interactive-hunt");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-display font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                Launch Feeding Frenzy ➔
              </button>
            </div>

          </div>

        </div>

        {/* Callout Box */}
        <div className="mt-16 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto shadow-[0_0_40px_rgba(14,165,233,0.3)] text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h4 className="font-display text-2xl sm:text-3xl font-black text-white uppercase italic drop-shadow-md">
              Are you ready to ride the razor-sharp wave with Shark Cat or will you get left behind in the deep?
            </h4>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-950 font-display font-black text-sm shadow-xl hover:bg-sky-50 hover:scale-105 active:scale-95 transition-all cursor-pointer border-none"
              >
                Acquire $sharkcat Now ⚡
              </button>
              
              <a
                href="https://t.me/sharkcattonsol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-sky-300 font-display font-black text-sm shadow-xl hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all border border-sky-500/40 cursor-pointer flex items-center justify-center gap-2"
              >
                Join Official Telegram
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
