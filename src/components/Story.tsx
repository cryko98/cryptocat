import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShieldCheck, Quote, Flame, Zap, Eye, Crown, Radio } from "lucide-react";

export default function Story() {
  const [activeTab, setActiveTab] = useState<"radiancy" | "frequency">("frequency");
  const [showAuraPulse, setShowAuraPulse] = useState(false);

  const handleToggle = (tab: "radiancy" | "frequency") => {
    setActiveTab(tab);
    if (tab === "frequency") {
      setShowAuraPulse(true);
      setTimeout(() => setShowAuraPulse(false), 2200);
    }
  };

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-[#090314] text-white overflow-hidden border-t border-[#3b186b]">
      {/* Background Iridescent Aura Glows */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-25">
        <div className="absolute top-[20%] left-[-5%] w-80 h-80 bg-purple-600 rounded-full blur-[150px] animate-aura-shift"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-pink-600 rounded-full blur-[160px] animate-aura-shift"></div>
        <div className="absolute top-[50%] right-[10%] w-80 h-80 bg-cyan-500 rounded-full blur-[150px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 bg-[#160830] px-4 py-2 rounded-full border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            ✨ THE FELINE ENERGY FIELD
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            The Feline of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Radiant Aura</span>
          </h2>
          <p className="text-purple-200/80 font-sans font-semibold text-base sm:text-lg">
            An eternal symbol of 432 Hz frequency, sovereign composure, and unstoppable iridescent abundance on Solana.
          </p>
        </div>

        {/* Interactive Stance Toggle */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#160830]/90 p-2 rounded-2xl flex max-w-md mx-auto border border-[#3b186b] shadow-2xl">
            <button
              onClick={() => handleToggle("radiancy")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                activeTab === "radiancy"
                  ? "bg-[#25104d] text-purple-300 border border-purple-500/40 shadow-md"
                  : "text-purple-200/60 hover:text-white"
              }`}
            >
              <Eye className="w-4 h-4 text-purple-400" />
              Cosmic Radiancy
            </button>
            <button
              onClick={() => handleToggle("frequency")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                activeTab === "frequency"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black shadow-lg"
                  : "text-purple-200/60 hover:text-white"
              }`}
            >
              <Radio className="w-4 h-4" />
              432 Hz Serenity
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Visual Stance Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border transition-all relative overflow-hidden bg-[#130726]/95 border-[#3b186b] shadow-2xl">
            
            <AnimatePresence mode="wait">
              {activeTab === "radiancy" ? (
                <motion.div
                  key="radiancy-mode"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3.5 rounded-2xl bg-[#0b0318] text-purple-400 border border-[#3b186b]">
                      <Eye className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-white uppercase">
                      Unshakeable Radiancy
                    </h3>
                    <p className="text-sm text-purple-100/80 font-sans leading-relaxed font-medium">
                      Market volatility? FUD waves? Noise in the timeline? Aura Cat remains entirely composed. Protected by an iridescent energy field, our community glows brighter with every candle.
                    </p>
                  </div>

                  <div className="bg-[#0b0318]/90 p-4 rounded-2xl border border-[#3b186b]">
                    <div className="flex justify-between text-xs font-bold text-purple-200 mb-2 font-mono">
                      <span>AURA INTENSITY</span>
                      <span className="text-purple-400">100% SUPREME</span>
                    </div>
                    <div className="h-2 w-full bg-[#1c0b36] rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_12px_#a855f7]"></div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-purple-300 text-center font-bold">
                      ✨ "When your aura is calm, the entire market aligns."
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="frequency-mode"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3.5 rounded-2xl bg-[#200b42] text-pink-400 border border-purple-500/40 animate-pulse">
                      <Radio className="w-8 h-8 text-pink-400" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-pink-400 uppercase flex items-center gap-2">
                      432 Hz Harmonic Pulse <Sparkles className="w-5 h-5 text-cyan-300" />
                    </h3>
                    <p className="text-sm text-purple-100/80 font-sans leading-relaxed font-medium">
                      Tuned to the frequency of cosmic peace, Aura Cat transforms panic into clarity! Every holder becomes a beacon of positive vibration and long-term conviction on Solana.
                    </p>
                  </div>

                  <div className="bg-[#0b0318] p-4 rounded-2xl border border-purple-500/40 shadow-lg">
                    <div className="flex justify-between text-xs font-bold text-purple-200 mb-2 font-mono">
                      <span>VIBRATIONAL PULSE</span>
                      <span className="text-pink-400 font-bold">INFINITE 🔮</span>
                    </div>
                    <div className="h-2 w-full bg-[#1c0b36] rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["80%", "100%", "92%", "100%"] }} 
                        transition={{ duration: 1.8, repeat: Infinity }} 
                        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_18px_rgba(236,72,153,0.6)]"
                      ></motion.div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-cyan-300 text-center font-bold">
                      🔮 "Align your frequency, embrace the feline energy."
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Custom Aura Pulse Effect */}
            {showAuraPulse && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-purple-600/25 backdrop-blur-[2px] flex items-center justify-center pointer-events-none z-20"
              >
                <span className="text-xl sm:text-2xl font-display font-black text-white bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-2xl shadow-2xl border-2 border-white">
                  ✨ HARMONIC 432 HZ AURA ACTIVATED! 🔮
                </span>
              </motion.div>
            )}
          </div>

          {/* Text Story Side */}
          <div className="lg:col-span-7 bg-[#130726]/95 p-8 sm:p-10 rounded-3xl border border-[#3b186b] flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-8">
              <div className="text-purple-400/40">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              <div className="space-y-6 font-sans text-purple-100/80 font-semibold">
                <p className="text-lg leading-relaxed text-white">
                  While ordinary memes burn out on short-term hype, <span className="bg-[#200b42] text-purple-300 border border-purple-500/40 font-bold px-2.5 py-1 rounded-lg">$auracat</span> builds a permanent sanctuary of high vibration!
                </p>
                <p className="text-2xl sm:text-3xl font-display font-black text-white leading-tight uppercase">
                  "Ordinary tokens chase charts. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Aura Cat is the energy.</span>"
                </p>
                <p className="text-base leading-relaxed text-purple-200/80">
                  Aura Cat is built on unshakeable serenity: 0% tax, 100% community resonance, and renounced contract authority. No hidden friction—just pure upward frequency lighting up the Solana ecosystem.
                </p>

                <div className="bg-[#0b0318]/90 p-5 rounded-2xl border-l-4 border-purple-500 border-y border-r border-[#3b186b] space-y-2">
                  <span className="block text-xs font-bold text-purple-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-purple-400" /> Sovereign Aura Rule:
                  </span>
                  <p className="text-sm font-sans text-purple-100 italic">
                    "Hold with serene conviction, radiate positive energy, and watch our collective aura become a legend across Solana."
                  </p>
                </div>
              </div>
            </div>

            {/* Footer story CTA */}
            <div className="pt-8 mt-8 border-t border-[#3b186b] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block text-[11px] font-black text-purple-300/70 tracking-wider uppercase font-mono">
                  IRIDESCENT SOLANA MEME
                </span>
                <p className="font-display font-black text-lg text-white">
                  $auracat — <span className="text-purple-400">The Frequency of Abundance.</span>
                </p>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById("interactive-lounge");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-display font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                Enter Sanctuary ➔
              </button>
            </div>

          </div>

        </div>

        {/* Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#190936] via-[#2a105c] to-[#190936] border border-purple-500/40 text-white p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto shadow-[0_0_40px_rgba(168,85,247,0.3)] text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h4 className="font-display text-2xl sm:text-3xl font-black text-white uppercase drop-shadow-md">
              Are you ready to align your frequency with the most radiant cat on Solana?
            </h4>
            <div className="flex justify-center items-center">
              <button
                onClick={() => {
                  const element = document.getElementById("interactive-lounge");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white font-display font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-none flex items-center gap-2"
              >
                Explore Aura Sanctuary <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


