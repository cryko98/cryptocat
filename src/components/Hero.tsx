import React, { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, ExternalLink, ArrowUpRight, TrendingUp, ShieldCheck, Heart, Sparkles } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-12 pb-20 sm:pb-28">
      {/* Dynamic Background Elements styled after the user's design */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Faint Grid Layer */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Floating Bitcoin Bubble (Dark Outline) */}
        <div className="absolute top-[12%] left-[8%] md:left-[15%] w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 bg-zinc-900/60 backdrop-blur-sm flex items-center justify-center shadow-sm animate-float-slow">
          <span className="text-xl md:text-2xl font-bold text-[#14F195]/70">₿</span>
        </div>

        {/* Floating Ethereum Bubble (Dark Outline) */}
        <div className="absolute top-[8%] right-[10%] md:right-[32%] w-12 h-12 md:h-14 md:w-14 rounded-full border border-white/10 bg-zinc-900/60 backdrop-blur-sm flex items-center justify-center shadow-sm animate-float-slower">
          <span className="text-lg md:text-xl font-bold text-[#9945FF]/70">Ξ</span>
        </div>

        {/* Extra Solana Bubble */}
        <div className="absolute bottom-[20%] left-[5%] md:left-[10%] w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#14F195]/20 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center shadow-sm animate-float-slower">
          <span className="text-xs font-mono font-bold text-[#14F195]/80">SOL</span>
        </div>

        {/* Floating Green/Purple Candles styled like the background chart */}
        <div className="absolute bottom-[10%] right-[5%] md:right-[15%] w-32 h-24 opacity-30 animate-float-chart hidden sm:block">
          <div className="flex items-end space-x-2 h-full">
            <div className="w-4 bg-[#9945FF]/30 h-[20%] rounded-sm"></div>
            <div className="w-4 bg-[#9945FF]/50 h-[35%] rounded-sm"></div>
            <div className="w-4 bg-[#14F195]/60 h-[60%] rounded-sm"></div>
            <div className="w-4 bg-[#14F195] h-[90%] rounded-sm"></div>
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
              className="inline-flex items-center space-x-2 px-3  py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[#14F195] text-xs font-mono font-bold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#14F195] animate-spin" />
              <span>THE HAPPY CAT ERA IS HERE</span>
            </motion.div>

            {/* Main Title & Ticker */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none uppercase italic"
              >
                Meet <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14F195] via-[#9945FF] to-[#14F195] drop-shadow-[0_0_20px_rgba(20,241,149,0.2)]">
                  Crypto Cat
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-black text-3xl sm:text-5xl text-zinc-300 tracking-tight"
              >
                Ticker: <span className="text-[#14F195] uppercase italic">$cryptocat</span>
              </motion.p>
            </div>

            {/* Quick Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-zinc-400 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              No longer sad. No longer struggling. The happiest feline on the Solana blockchain, surrounded by green candles, fat bags, and loud purrs! 🐱💸
            </motion.p>

            {/* Interactive Contract Address Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl mx-auto lg:mx-0"
            >
              <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full text-left">
                  <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    OFFICIAL SOLANA CONTRACT ADDRESS
                  </span>
                  <div className="font-mono text-sm font-semibold text-[#14F195] bg-black/50 px-3 py-2.5 rounded-lg border border-white/5 overflow-hidden text-ellipsis whitespace-nowrap">
                    {contractAddress}
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  id="copy-ca-hero"
                  className={`w-full sm:w-auto h-12 px-6 rounded-xl flex items-center justify-center gap-2 font-display font-black text-sm transition-all cursor-pointer ${
                    copied
                      ? "bg-emerald-600 text-white shadow-md scale-95"
                      : "bg-[#14F195] hover:bg-[#10c379] text-black shadow-[0_0_15px_rgba(20,241,149,0.3)] hover:shadow-[0_0_25px_rgba(20,241,149,0.5)] active:scale-95"
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

            {/* Call to Actions (Raydium, TG, Dexscreener) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="https://t.me/cryptocatsolana"
                target="_blank"
                rel="noreferrer"
                id="tg-hero-cta"
                className="px-8 py-4 rounded-2xl bg-[#229ED9] hover:bg-[#2090c5] text-white font-display font-black shadow-xl shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Join Telegram
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.1-3.48 3.84-1.6 4.64-1.88 5.16-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.2-.04.22z"/>
                </svg>
              </a>

              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noreferrer"
                id="chart-hero-cta"
                className="px-8 py-4 rounded-2xl bg-zinc-900 border-2 border-white/10 hover:border-[#14F195] hover:text-[#14F195] text-zinc-300 font-display font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Live Chart <TrendingUp className="w-5 h-5 text-[#14F195]" />
              </a>
            </motion.div>

            {/* Soft trust tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 pt-4 text-xs font-semibold text-zinc-400"
            >
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#14F195]" /> Liquidity Locked</span>
              <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-[#9945FF]" /> Community Devoted</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#14F195]" /> No Dev Tokens</span>
            </motion.div>

          </div>

          {/* Hero Right Content - The Beautiful Image styled after user's sketch */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            {/* Soft glowing radial background behind cat */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#14F195]/20 to-[#9945FF]/10 blur-3xl opacity-80 animate-pulse-subtle"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-md sm:max-w-lg aspect-square sm:aspect-[4/3] lg:aspect-auto rounded-3xl overflow-hidden border-4 border-zinc-900 shadow-2xl bg-zinc-900/40 backdrop-blur-sm"
            >
              {/* Outer frame matching the Shopify layout style */}
              <img
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-10_15-56-40.jpg?v=1783688211"
                alt="Crypto Cat holding phone showing green chart"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[20px]"
              />

              {/* Extra Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-black/90 backdrop-blur-md border border-[#14F195]/30 text-[#14F195] px-4 py-2 rounded-2xl shadow-[0_0_15px_rgba(20,241,149,0.3)] flex items-center gap-2 animate-bounce">
                <span className="w-2.5 h-2.5 rounded-full bg-[#14F195] animate-ping"></span>
                <span className="text-xs font-mono font-bold">CANDLES PRINTING RIGHT NOW!</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
