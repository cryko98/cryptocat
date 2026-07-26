import React, { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, TrendingUp, ShieldCheck, Send, Waves, Skull, Zap } from "lucide-react";

interface HeroProps {
  contractAddress: string;
}

export default function Hero({ contractAddress }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-12 pb-20 sm:pb-28">
      {/* Dynamic Ocean & Grid Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Deep Ocean Grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Ambient ocean blue glow spheres */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[130px]"></div>

        {/* Floating Stat Badges */}
        <div className="absolute top-[12%] left-[5%] md:left-[12%] w-16 h-16 rounded-2xl border border-sky-500/30 bg-slate-800/90 backdrop-blur-md flex flex-col items-center justify-center shadow-lg animate-float-slow">
          <span className="text-xs font-mono font-bold text-sky-400">🦈 APEX</span>
          <span className="text-[10px] font-mono font-bold text-slate-300">PREDATOR</span>
        </div>

        <div className="absolute top-[8%] right-[8%] md:right-[30%] w-14 h-14 rounded-2xl border border-blue-500/30 bg-slate-800/90 backdrop-blur-md flex items-center justify-center shadow-lg animate-float-slower">
          <span className="text-xl font-bold text-sky-400">⚡</span>
        </div>

        <div className="absolute bottom-[20%] left-[4%] md:left-[8%] w-14 h-14 rounded-2xl border border-sky-500/30 bg-slate-800/90 backdrop-blur-md flex items-center justify-center shadow-lg animate-float-slower">
          <span className="text-xs font-mono font-bold text-sky-300">$sharkcat</span>
        </div>

        {/* Floating Candlestick Visualizer */}
        <div className="absolute bottom-[10%] right-[5%] md:right-[12%] w-32 h-24 opacity-30 animate-float-chart hidden sm:block">
          <div className="flex items-end space-x-2 h-full">
            <div className="w-4 bg-sky-500/40 h-[30%] rounded-sm"></div>
            <div className="w-4 bg-sky-400/60 h-[55%] rounded-sm"></div>
            <div className="w-4 bg-sky-400 h-[80%] rounded-sm"></div>
            <div className="w-4 bg-emerald-400 h-[100%] rounded-sm shadow-[0_0_10px_#10b981]"></div>
          </div>
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
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800/90 border border-sky-500/40 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider shadow-md"
            >
              <Zap className="w-3.5 h-3.5 text-sky-400 animate-spin" />
              <span>THE BLOODTHIRSTY SOLANA APEX PREDATOR</span>
            </motion.div>

            {/* Main Title & Ticker */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase italic"
              >
                Shark <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                  Cat
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-black text-3xl sm:text-5xl text-slate-200 tracking-tight"
              >
                Ticker: <span className="text-sky-400 uppercase italic">$sharkcat</span>
              </motion.p>
            </div>

            {/* Story Slogan */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold"
              >
                Armed with razor-sharp shark jaws and relentless feline stealth, Shark Cat rules the deep waters of Solana. It hunts down bears, tears paper hands to shreds, and drags holders to unbelievable green heights! Fear the fin, embrace the claw, and claim your spot in the ocean feeding frenzy! 🦈🩸💎
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/90 border border-sky-500/30 text-sky-300 text-xs font-mono font-bold shadow-md">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                  <span>Solana Ocean Feeding Frenzy is ACTIVE</span>
                </div>
              </motion.div>
            </div>

            {/* Interactive Contract Address Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl mx-auto lg:mx-0"
            >
              <div className="bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full text-left">
                  <span className="block text-[10px] font-bold text-sky-400 uppercase tracking-wider mb-1">
                    OFFICIAL CONTRACT ADDRESS (CA)
                  </span>
                  <div className="font-mono text-sm font-semibold text-slate-200 bg-slate-900/80 px-3 py-2.5 rounded-xl border border-slate-700 overflow-hidden text-ellipsis whitespace-nowrap">
                    {contractAddress}
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  id="copy-ca-hero"
                  className={`w-full sm:w-auto h-12 px-6 rounded-xl flex items-center justify-center gap-2 font-display font-black text-sm transition-all cursor-pointer border-none shrink-0 ${
                    copied
                      ? "bg-emerald-500 text-slate-950 shadow-md scale-95"
                      : "bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-95"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copy CA
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 relative"
            >
              {/* Telegram Link */}
              <a
                href="https://t.me/sharkcattonsol"
                target="_blank"
                rel="noopener noreferrer"
                id="tg-hero-cta"
                className="px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-display font-black shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border-none"
              >
                Join Telegram
                <Send className="w-5 h-5 fill-current" />
              </a>

              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noreferrer"
                id="chart-hero-cta"
                className="px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-sky-500 text-slate-200 hover:text-white font-display font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Live Chart <TrendingUp className="w-5 h-5 text-sky-400" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 pt-2 text-xs font-bold text-slate-400"
            >
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-sky-400" /> Mint Renounced</span>
              <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-sky-400" /> Liquidity Pool Burned</span>
              <span className="flex items-center gap-1.5"><Skull className="w-4 h-4 text-sky-400" /> 0% Buy / Sell Taxes</span>
            </motion.div>

          </div>

          {/* Hero Right Content - Shark Cat Image */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            {/* Glowing ocean blue aura */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-sky-500/30 to-blue-600/20 blur-3xl opacity-80 animate-pulse-subtle"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-3xl overflow-hidden border-4 border-sky-400/40 bg-slate-800/80 backdrop-blur-sm animate-float-slow shadow-2xl"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/shark.png?v=1785074178"
                alt="Shark Cat Apex Predator"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[20px]"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-sky-500/40 text-sky-300 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wide">SHARK CAT IS HUNTING 🦈</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
