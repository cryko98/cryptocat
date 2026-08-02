import React, { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, Flame, Sparkles, Zap, Eye, Copy, Check } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "6wfbCEwBDE8D75QaQCSgawiNfKwJDCyAYA32F768pump";

  const handleCopyCA = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#080312] text-white pt-12 pb-20 sm:pb-28">
      {/* Radiant Iridescent Aura Background Glows */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Subtle Violet Grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#a855f7_1px,transparent_1px),linear-gradient(to_bottom,#a855f7_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Iridescent aura glow spheres */}
        <div className="absolute top-[-10%] left-[15%] w-[550px] h-[550px] bg-purple-600/30 rounded-full blur-[160px] animate-aura-shift"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-pink-600/25 rounded-full blur-[150px] animate-aura-shift"></div>
        <div className="absolute top-[30%] right-[30%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[140px]"></div>

        {/* Floating Aura Badges */}
        <div className="absolute top-[12%] left-[5%] md:left-[10%] px-4 py-2 rounded-2xl border border-purple-500/40 bg-[#140828]/90 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl animate-float-slow">
          <span className="text-sm font-display font-bold text-purple-300">✨ 100% AURA</span>
          <span className="text-[10px] font-mono font-bold text-purple-200/80">RADIANCY</span>
        </div>

        <div className="absolute top-[8%] right-[8%] md:right-[28%] w-16 h-16 rounded-2xl border border-pink-500/40 bg-[#140828]/90 backdrop-blur-md flex items-center justify-center shadow-2xl animate-float-slower">
          <span className="text-2xl">🔮</span>
        </div>

        <div className="absolute bottom-[18%] left-[4%] md:left-[8%] px-4 py-2 rounded-2xl border border-cyan-500/40 bg-[#140828]/90 backdrop-blur-md flex items-center justify-center shadow-2xl animate-float-slower">
          <span className="text-xs font-mono font-bold text-cyan-300">$auracat</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Promo Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#130726]/90 border border-purple-500/40 text-purple-100 text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>THE FELINE OF INFINITE VIBRATION</span>
            </motion.div>

            {/* Main Title & Ticker */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase"
              >
                Aura <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.45)]">
                  Cat
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight"
              >
                Ticker: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 uppercase">$auracat</span>
              </motion.p>
            </div>

            {/* Story Slogan */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-purple-100/90 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold"
              >
                Aura Cat is the sovereign guardian of feline energy on Solana! Emitting a mystical iridescent glow, pure 432 Hz frequency, and unshakeable serenity, $auracat aligns your portfolio with high-vibration cosmic abundance! ✨🔮🐾
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#130726]/90 border border-purple-500/30 text-purple-100 text-xs font-mono font-bold shadow-md">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                  </span>
                  <span>Aura Sanctuary is Resonating LIVE</span>
                </div>
              </motion.div>
            </div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 relative pt-2"
            >
              <button
                onClick={() => scrollToSection("interactive-lounge")}
                id="explore-base-hero-cta"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-display font-black shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border-none"
              >
                Explore Aura Sanctuary
                <Sparkles className="w-5 h-5" />
              </button>

              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noreferrer"
                id="chart-hero-cta"
                className="px-8 py-4 rounded-2xl bg-[#160830] hover:bg-[#200c46] border-2 border-[#3b186b] hover:border-purple-400 text-white font-display font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Live Chart <TrendingUp className="w-5 h-5 text-purple-400" />
              </a>
            </motion.div>

            {/* Copyable Solana Contract Address Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="w-full max-w-xl mx-auto lg:mx-0 pt-3"
            >
              <div
                onClick={handleCopyCA}
                className="group relative flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#130726]/95 border-2 border-purple-500/50 hover:border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] cursor-pointer transition-all duration-200 select-none overflow-hidden"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="flex-shrink-0 px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-[10px] sm:text-xs font-mono font-black text-white uppercase tracking-wider shadow">
                    SOL CA
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-purple-100 group-hover:text-white truncate">
                    {contractAddress}
                  </span>
                </div>

                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#200b42] group-hover:bg-purple-600 text-xs font-mono font-bold text-purple-200 group-hover:text-white transition-all">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-cyan-300" />
                      <span className="text-cyan-300 font-black">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY CA</span>
                    </>
                  )}
                </div>

                {/* Subtle Iridescent glow effect on copy */}
                {copied && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 pointer-events-none"
                  />
                )}
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 pt-2 text-xs font-bold text-purple-200/80"
            >
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-purple-400" /> Mint Renounced</span>
              <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-pink-400" /> Liquidity Pool Burned</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-cyan-400" /> 0% Tax Forever</span>
            </motion.div>

          </div>

          {/* Hero Right Content - Aura Cat Image */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            {/* Glowing Iridescent aura */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-purple-600/45 via-pink-600/35 to-cyan-500/30 blur-3xl opacity-90 animate-pulse-subtle"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-3xl overflow-hidden border-4 border-purple-500/60 bg-[#160830]/90 backdrop-blur-sm animate-float-slow shadow-[0_0_50px_rgba(168,85,247,0.35)]"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/auracat.png?v=1785688369"
                alt="Aura Cat - Feline of Infinite Radiance"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[20px]"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-[#080312]/95 backdrop-blur-md border border-purple-500/50 text-white px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wide">432 HZ AURA RESONANCE ✨</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}


