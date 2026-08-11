import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Flame, CirclePercent, Coins, Lock, Sparkles, Dumbbell, ExternalLink, TrendingUp, Send, Copy, Check, Zap, Trophy } from "lucide-react";
import { GIGATOAD_CA, GIGATOAD_NAME, GIGATOAD_TICKER, TELEGRAM_URL, DEXSCREENER_URL, PUMPFUN_URL, RAYDIUM_URL, SOLSCAN_URL } from "../constants";

export default function Tokenomics() {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(GIGATOAD_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2000);
  };

  const stats = [
    {
      title: "TOTAL SUPPLY",
      value: "1,000,000,000",
      description: "Fixed 1 Billion $gigatoad minted once in the Solana universe",
      icon: Coins,
      highlight: "100% In Circulation",
    },
    {
      title: "BUY / SELL TAX",
      value: "0% / 0%",
      description: "Zero fees, zero friction, maximum alpha gains for Chads",
      icon: CirclePercent,
      highlight: "Pure Zero Tax",
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNED",
      description: "LP tokens sent to the incinerator forever for unshakeable security",
      icon: Flame,
      highlight: "Ironclad Security",
    },
    {
      title: "CONTRACT OWNERSHIP",
      value: "RENOUNCED",
      description: "Owned purely by the alpha community and the Solana validators",
      icon: ShieldCheck,
      highlight: "100% Community Owned",
    },
  ];

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 bg-[#050d1a] text-white overflow-hidden border-b-2 border-[#1e3a8a] giga-blue-grid selection:bg-[#00ff88] selection:text-[#050d1a]">
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[25%] right-[15%] w-80 h-80 rounded-full bg-[#00ff88]/10 blur-[150px]"></div>
        <div className="absolute bottom-[25%] left-[15%] w-80 h-80 rounded-full bg-[#0052FF]/20 blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a2040] border border-[#00ff88]/60 shadow-sm">
            <Coins className="w-3.5 h-3.5 text-[#00ff88]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00ff88]">
              THE ALPHA LEDGER & TOKENOMICS
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            Chad <span className="text-[#00ff88]">Tokenomics</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
            No insider allocations, no hidden team tokens, 0% tax. Pure muscle hypertrophy engineered for everlasting domination on Solana!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {TELEGRAM_URL ? (
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#0088cc] hover:bg-[#0099e6] text-white font-mono font-bold text-xs flex items-center gap-2 shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Join Telegram</span>
              </a>
            ) : (
              <span className="px-5 py-2.5 rounded-xl bg-[#0a2040] text-[#38bdf8] font-mono font-bold text-xs border border-[#1e3a8a]">
                ⚡ 100% Alpha & Zero Fees
              </span>
            )}

            <a
              href={DEXSCREENER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#0b213f] hover:bg-[#0f2b52] border border-[#00ff88]/60 text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#00ff88]" />
              <span>DexScreener Chart</span>
            </a>

            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#092244] hover:bg-[#0d2e5b] border border-[#00ff88] text-[#00ff88] font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <span>💊</span>
              <span>Pump.fun Market</span>
            </a>
          </div>
        </div>

        {/* Verified Solana Contract Address Highlight Box */}
        <div className="max-w-4xl mx-auto mb-12 giga-card p-6 sm:p-7 rounded-2xl border-2 border-[#00ff88] shadow-2xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e3a8a] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00ff88]">
                OFFICIAL SOLANA CONTRACT ADDRESS (CA)
              </span>
            </div>
            <a
              href={SOLSCAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-[#38bdf8] hover:text-white flex items-center gap-1 underline"
            >
              View on Solscan <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full flex-1 bg-[#050d1a] px-4 py-3 rounded-xl border border-[#1e3a8a] font-mono text-xs sm:text-sm text-white select-all break-all sm:truncate">
              {GIGATOAD_CA}
            </div>

            <button
              onClick={handleCopyCA}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                copiedCA
                  ? "bg-[#00ff88] text-[#050d1a] border border-[#00ff88]"
                  : "bg-[#0b213f] hover:bg-[#0f2b52] text-white border border-[#00ff88]/60"
              }`}
            >
              {copiedCA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCA ? "Copied to Clipboard!" : "Copy Contract Address"}</span>
            </button>
          </div>
        </div>

        {/* 4 Large Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="giga-card p-6 sm:p-7 rounded-2xl border-2 border-[#00ff88]/60 shadow-xl flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Decorative Pin */}
                <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#00ff88] border border-white"></div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0c2244] border border-[#00ff88]/50 flex items-center justify-center text-[#00ff88] shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00ff88] uppercase tracking-wider block">
                      {stat.title}
                    </span>
                    <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {stat.value}
                    </div>
                  </div>

                  <p className="font-sans text-xs text-white/80 font-medium leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1e3a8a] flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#00ff88]">
                    {stat.highlight}
                  </span>
                  <span className="text-sm">💪</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Transparency Banner */}
        <div className="max-w-4xl mx-auto giga-card p-8 rounded-2xl border-2 border-[#00ff88] text-center space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            “No Weak Hands, No Rugs, Pure Iron Hypertrophy”
          </h3>
          <p className="font-sans text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            {GIGATOAD_NAME} was engineered to be the most dominant meme token on Solana. Mint authority revoked, freeze authority revoked, liquidity burned to ash, and community fueled by pure alpha strength.
          </p>
          <div className="pt-2">
            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#38bdf8] text-[#050d1a] font-display font-black text-xs shadow-lg transition-all hover:scale-105"
            >
              <Trophy className="w-4 h-4 text-[#050d1a]" />
              <span>Dominate the Market with {GIGATOAD_TICKER}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
