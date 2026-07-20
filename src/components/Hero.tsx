import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, TrendingUp, ShieldCheck, Heart, Sparkles, Send } from "lucide-react";

interface HeroProps {
  contractAddress: string;
}

export default function Hero({ contractAddress }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [showTelegramAlert, setShowTelegramAlert] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTelegramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTelegramAlert(true);
    setTimeout(() => setShowTelegramAlert(false), 3000);
  };

  return (
    <section className="relative overflow-hidden bg-[#FFFDFD] pt-12 pb-20 sm:pb-28">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Faint Grid Layer */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#e11d48_1px,transparent_1px),linear-gradient(to_bottom,#e11d48_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Floating Casper Bubble 1 */}
        <div className="absolute top-[12%] left-[8%] md:left-[15%] w-14 h-14 md:w-16 md:h-16 rounded-full border border-rose-100 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center shadow-sm animate-float-slow">
          <span className="text-xs font-mono font-bold text-rose-500">🍀 1 in</span>
          <span className="text-[10px] font-mono font-bold text-rose-800">750k</span>
        </div>

        {/* Floating Ethereum / Solana Bubble */}
        <div className="absolute top-[8%] right-[10%] md:right-[32%] w-12 h-12 md:h-14 md:w-14 rounded-full border border-rose-100 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm animate-float-slower">
          <span className="text-lg md:text-xl font-bold text-rose-400">⚡</span>
        </div>

        {/* Extra Luck Bubble */}
        <div className="absolute bottom-[20%] left-[5%] md:left-[10%] w-10 h-10 md:w-12 md:h-12 rounded-full border border-rose-100 bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm animate-float-slower">
          <span className="text-xs font-mono font-bold text-rose-600">$Casper</span>
        </div>

        {/* Floating Rose/Crimson Candlesticks */}
        <div className="absolute bottom-[10%] right-[5%] md:right-[15%] w-32 h-24 opacity-25 animate-float-chart hidden sm:block">
          <div className="flex items-end space-x-2 h-full">
            <div className="w-4 bg-rose-200 h-[20%] rounded-sm"></div>
            <div className="w-4 bg-rose-300 h-[35%] rounded-sm"></div>
            <div className="w-4 bg-rose-400/80 h-[60%] rounded-sm"></div>
            <div className="w-4 bg-rose-500 h-[90%] rounded-sm"></div>
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
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-900 text-xs font-mono font-bold uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-spin" />
              <span>THE ULTIMATE SOLANA LUCKY CHARM</span>
            </motion.div>

            {/* Main Title & Ticker */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#4C0519] tracking-tight leading-none uppercase italic"
              >
                The Albino <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-rose-700 drop-shadow-[0_0_20px_rgba(244,63,94,0.15)]">
                  Raccoon
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-black text-3xl sm:text-5xl text-rose-900 tracking-tight"
              >
                Ticker: <span className="text-rose-500 uppercase italic">$Casper</span>
              </motion.p>
            </div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-rose-950/80 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold"
            >
              The odds of seeing an albino raccoon are 1 in 750,000. For those familiar with statistics, you have a better chance of being struck by lightning. Casper is the ultimate, rarest luck magnet on the Solana blockchain. No fear, no doubts—only pure albino magic and unstoppable diamond-paw gains! 🦝✨💎
            </motion.p>

            {/* Interactive Contract Address Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl mx-auto lg:mx-0"
            >
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-rose-150 shadow-lg flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full text-left">
                  <span className="block text-[10px] font-bold text-rose-800/60 uppercase tracking-wider mb-1">
                    OFFICIAL MINT CONTRACT ADDRESS
                  </span>
                  <div className="font-mono text-sm font-semibold text-rose-800 bg-rose-50/40 px-3 py-2.5 rounded-lg border border-rose-100 overflow-hidden text-ellipsis whitespace-nowrap">
                    {contractAddress}
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  id="copy-ca-hero"
                  className={`w-full sm:w-auto h-12 px-6 rounded-xl flex items-center justify-center gap-2 font-display font-black text-sm transition-all cursor-pointer border-none ${
                    copied
                      ? "bg-rose-700 text-white shadow-md scale-95"
                      : "bg-rose-600 hover:bg-rose-700 text-white shadow-[0_0_15px_rgba(244,63,94,0.15)] hover:shadow-[0_0_25px_rgba(244,63,94,0.3)] active:scale-95"
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
              {/* Telegram Coming Soon Link */}
              <button
                onClick={handleTelegramClick}
                id="tg-hero-cta"
                className="px-8 py-4 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-950 font-display font-black shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 border border-rose-200 cursor-pointer"
              >
                Join Telegram (Soon)
                <Send className="w-5 h-5 text-rose-500 fill-current" />
              </button>

              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noreferrer"
                id="chart-hero-cta"
                className="px-8 py-4 rounded-2xl bg-white border-2 border-rose-100 hover:border-rose-400 hover:text-rose-700 text-rose-800 font-display font-bold shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Live Chart <TrendingUp className="w-5 h-5 text-rose-500" />
              </a>

              {/* Telegram Info Box */}
              <AnimatePresence>
                {showTelegramAlert && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-0 bottom-16 bg-white border border-rose-200 text-rose-950 px-4 py-3 rounded-2xl shadow-xl z-50 text-xs font-mono font-bold w-64"
                  >
                    💬 Telegram is coming very soon!<br />
                    <span className="text-rose-500 font-bold">Stay tuned, launch is imminent!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Soft trust tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 pt-4 text-xs font-bold text-rose-900/70"
            >
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-rose-500" /> Liquidity Pool Burned</span>
              <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-rose-400" /> 1-in-750,000 Rare Luck</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-rose-500" /> No Team Allocation</span>
            </motion.div>

          </div>

          {/* Hero Right Content - Casper Image */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            {/* Soft glowing radial background behind raccoon */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-rose-300/20 to-rose-100/10 blur-3xl opacity-80 animate-pulse-subtle"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-3xl overflow-hidden border-4 border-rose-200 bg-white/50 backdrop-blur-sm animate-float-slow shadow-xl"
            >
              {/* Outer frame matching the layout style */}
              <img
                src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/casper.png?v=1784562261"
                alt="Casper the Albino Raccoon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[20px]"
              />

              {/* Extra Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-rose-100 text-rose-900 px-4 py-2 rounded-2xl shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                <span className="text-xs font-mono font-bold">CASPER IS WATCHING OVER! 🦝🍀</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
