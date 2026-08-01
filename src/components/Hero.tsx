import React from "react";
import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, Award, Flame, Sparkles, Rocket, Orbit } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0e0403] text-white pt-12 pb-20 sm:pb-28">
      {/* Cosmic Martian & Red Planet Glow Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Martian Grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ea580c_1px,transparent_1px),linear-gradient(to_bottom,#ea580c_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Mars red/orange glow spheres */}
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-orange-600/25 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-red-600/20 rounded-full blur-[140px]"></div>

        {/* Floating Mars Badges */}
        <div className="absolute top-[12%] left-[5%] md:left-[10%] w-24 h-20 rounded-2xl border border-orange-500/40 bg-[#1c0805]/90 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl animate-float-slow">
          <span className="text-sm font-display font-bold text-orange-400">🚀 ZERO-G</span>
          <span className="text-[10px] font-mono font-bold text-orange-200/80">THRUSTERS</span>
        </div>

        <div className="absolute top-[8%] right-[8%] md:right-[28%] w-16 h-16 rounded-2xl border border-red-500/40 bg-[#1c0805]/90 backdrop-blur-md flex items-center justify-center shadow-2xl animate-float-slower">
          <span className="text-2xl">🪐</span>
        </div>

        <div className="absolute bottom-[18%] left-[4%] md:left-[8%] px-4 py-2 rounded-2xl border border-orange-500/40 bg-[#1c0805]/90 backdrop-blur-md flex items-center justify-center shadow-2xl animate-float-slower">
          <span className="text-xs font-mono font-bold text-orange-400">$marscat</span>
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
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1e0a06]/90 border border-orange-500/40 text-orange-100 text-xs font-mono font-bold uppercase tracking-wider shadow-lg"
            >
              <Rocket className="w-3.5 h-3.5 text-orange-500" />
              <span>THE FIRST FELINE ON THE RED PLANET</span>
            </motion.div>

            {/* Main Title & Ticker */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase"
              >
                Mars <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                  Cat
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight"
              >
                Ticker: <span className="text-orange-500 uppercase">$marscat</span>
              </motion.p>
            </div>

            {/* Story Slogan */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-orange-100/90 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold"
              >
                Mars Cat is the pioneering interplanetary feline of Solana! Equipped with zero-G thrusters, laser focus, and an unshakeable pioneer spirit, Mars Cat has left Earth orbit behind to establish the first feline colony on Olympus Mons! 🚀🪐🐾
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1e0a06]/90 border border-orange-500/30 text-orange-100 text-xs font-mono font-bold shadow-md">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  <span>Olympus Mons Surface Colony is LIVE</span>
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
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-orange-600 text-white font-display font-black shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border-none"
              >
                Explore Mars Base
                <Rocket className="w-5 h-5" />
              </button>

              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noreferrer"
                id="chart-hero-cta"
                className="px-8 py-4 rounded-2xl bg-[#1f0a07] hover:bg-[#2e100a] border-2 border-[#4f1b0f] hover:border-orange-500 text-white font-display font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Live Chart <TrendingUp className="w-5 h-5 text-orange-500" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 pt-2 text-xs font-bold text-orange-200/80"
            >
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-orange-500" /> Mint Renounced</span>
              <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-orange-500" /> Liquidity Pool Burned</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-orange-500" /> 0% Buy / Sell Tax</span>
            </motion.div>

          </div>

          {/* Hero Right Content - Mars Cat Image */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            {/* Glowing red/orange Martian aura */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-orange-600/40 to-red-600/30 blur-3xl opacity-80 animate-pulse-subtle"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-3xl overflow-hidden border-4 border-orange-500/50 bg-[#1c0805]/90 backdrop-blur-sm animate-float-slow shadow-2xl"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/marslogo.jpg?v=1785580623"
                alt="Mars Cat Pioneer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[20px]"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-[#0e0403]/95 backdrop-blur-md border border-orange-500/50 text-white px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wide">MARS ORBIT TOUCHDOWN 🪐</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

