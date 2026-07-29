import React, { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, TrendingUp, ShieldCheck, Send, Award, Flame, Sparkles } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#180f0a] text-[#fbf0da] pt-12 pb-20 sm:pb-28">
      {/* Vintage Wooden & Amber Glow Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Vintage Grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#d97706_1px,transparent_1px),linear-gradient(to_bottom,#d97706_1px,transparent_1px)] bg-[size:36px_36px]"></div>

        {/* Tobacco amber glow spheres */}
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-[#92400e]/25 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-[#78350f]/20 rounded-full blur-[130px]"></div>

        {/* Floating Gentleman Badges */}
        <div className="absolute top-[12%] left-[5%] md:left-[10%] w-20 h-20 rounded-2xl border border-[#d97706]/40 bg-[#251710]/90 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl animate-float-slow">
          <span className="text-sm font-display font-bold text-[#f59e0b]">📜 CLASS</span>
          <span className="text-[10px] font-mono font-bold text-[#d4bca0]">GENTLEMAN</span>
        </div>

        <div className="absolute top-[8%] right-[8%] md:right-[28%] w-16 h-16 rounded-2xl border border-[#b45309]/40 bg-[#251710]/90 backdrop-blur-md flex items-center justify-center shadow-2xl animate-float-slower">
          <span className="text-2xl">🍂</span>
        </div>

        <div className="absolute bottom-[18%] left-[4%] md:left-[8%] w-16 h-16 rounded-2xl border border-[#d97706]/40 bg-[#251710]/90 backdrop-blur-md flex items-center justify-center shadow-2xl animate-float-slower">
          <span className="text-xs font-mono font-bold text-[#f59e0b]">$pipedog</span>
        </div>

        {/* Floating Candlestick Visualizer */}
        <div className="absolute bottom-[10%] right-[5%] md:right-[12%] w-32 h-24 opacity-30 animate-float-chart hidden sm:block">
          <div className="flex items-end space-x-2 h-full">
            <div className="w-4 bg-[#d97706]/40 h-[35%] rounded-sm"></div>
            <div className="w-4 bg-[#f59e0b]/60 h-[60%] rounded-sm"></div>
            <div className="w-4 bg-[#f59e0b] h-[80%] rounded-sm"></div>
            <div className="w-4 bg-emerald-400 h-[100%] rounded-sm shadow-[0_0_12px_#10b981]"></div>
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
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#251710]/90 border border-[#d97706]/40 text-[#fef3c7] text-xs font-mono font-bold uppercase tracking-wider shadow-lg"
            >
              <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>THE GENTLEMAN MEME OF SOLANA</span>
            </motion.div>

            {/* Main Title & Ticker */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase"
              >
                Pipe <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]">
                  Dog
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-black text-3xl sm:text-5xl text-[#fbf0da] tracking-tight"
              >
                Ticker: <span className="text-[#f59e0b] uppercase">$pipedog</span>
              </motion.p>
            </div>

            {/* Story Slogan */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-[#e4cbaf] font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold"
              >
                Pipe Dog is the ultimate gentleman of Solana. While others panic and chase noise, Pipe Dog sits comfortably in his vintage leather armchair, lights up his pipe, exhales pure wisdom, and watches the green candles roll in with unshakeable composure! 🍂💨💎
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#251710]/90 border border-[#d97706]/30 text-[#fef3c7] text-xs font-mono font-bold shadow-md">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]"></span>
                  </span>
                  <span>Pipe Dog Lounge is OPEN on Solana</span>
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
              <div className="bg-[#251710]/95 backdrop-blur-md p-4 rounded-2xl border border-[#4a2e1d] shadow-2xl flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full text-left">
                  <span className="block text-[10px] font-bold text-[#f59e0b] uppercase tracking-wider mb-1 font-mono">
                    OFFICIAL CONTRACT ADDRESS (CA)
                  </span>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-[#fbf0da] bg-[#140b07] px-3 py-2.5 rounded-xl border border-[#3e271a] overflow-hidden text-ellipsis whitespace-nowrap">
                    {contractAddress}
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  id="copy-ca-hero"
                  className={`w-full sm:w-auto h-12 px-6 rounded-xl flex items-center justify-center gap-2 font-display font-black text-sm transition-all cursor-pointer border-none shrink-0 ${
                    copied
                      ? "bg-emerald-500 text-[#120b08] shadow-md scale-95"
                      : "bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-[#120b08] shadow-[0_0_20px_rgba(217,119,6,0.3)] active:scale-95"
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
                href="https://t.me/pipedogonsol"
                target="_blank"
                rel="noopener noreferrer"
                id="tg-hero-cta"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-[#120b08] font-display font-black shadow-[0_0_25px_rgba(217,119,6,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border-none"
              >
                Join Telegram
                <Send className="w-5 h-5 fill-current" />
              </a>

              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noreferrer"
                id="chart-hero-cta"
                className="px-8 py-4 rounded-2xl bg-[#251710] hover:bg-[#321f16] border-2 border-[#4a2e1d] hover:border-[#f59e0b] text-[#fbf0da] font-display font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Live Chart <TrendingUp className="w-5 h-5 text-[#f59e0b]" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 pt-2 text-xs font-bold text-[#d4bca0]"
            >
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#f59e0b]" /> Mint Renounced</span>
              <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-[#f59e0b]" /> Liquidity Pool Burned</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#f59e0b]" /> 0% Buy / Sell Tax</span>
            </motion.div>

          </div>

          {/* Hero Right Content - Pipe Dog Image */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            {/* Glowing amber aura */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#d97706]/40 to-[#92400e]/30 blur-3xl opacity-80 animate-pulse-subtle"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-3xl overflow-hidden border-4 border-[#d97706]/50 bg-[#251710]/90 backdrop-blur-sm animate-float-slow shadow-2xl"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-29_11-30-45.jpg?v=1785313952"
                alt="Pipe Dog Gentleman"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[20px]"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-[#140b07]/95 backdrop-blur-md border border-[#d97706]/50 text-[#fef3c7] px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] animate-ping"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wide">PUFFING WISDOM 🍂</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
