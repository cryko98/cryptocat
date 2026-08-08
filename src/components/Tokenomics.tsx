import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Flame, CirclePercent, Coins, Lock, Sparkles, BookOpen, ExternalLink, TrendingUp, Send } from "lucide-react";
import { TELEGRAM_URL, DEXSCREENER_URL, PUMPFUN_URL, RAYDIUM_URL } from "../constants";

export default function Tokenomics() {
  const stats = [
    {
      title: "TOTAL SUPPLY",
      value: "1,000,000,000",
      description: "Fixed 1 Billion $chilltoad minted once in the pond",
      icon: Coins,
      highlight: "100% In Circulation",
    },
    {
      title: "BUY / SELL TAX",
      value: "0% / 0%",
      description: "Zero fees, zero friction, maximum peace of mind",
      icon: CirclePercent,
      highlight: "Pure Zero Tax",
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNED",
      description: "LP tokens sent to the incinerator forever",
      icon: Flame,
      highlight: "Immutable Security",
    },
    {
      title: "CONTRACT OWNERSHIP",
      value: "RENOUNCED",
      description: "Owned purely by the community and the water spirits",
      icon: ShieldCheck,
      highlight: "Community Owned",
    },
  ];

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 bg-[#0b2419] text-white overflow-hidden border-b-2 border-[#2d6a4f] pond-water-grid selection:bg-[#74c69d] selection:text-[#081c15]">
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[25%] right-[15%] w-80 h-80 rounded-full bg-[#52b788]/20 blur-[150px]"></div>
        <div className="absolute bottom-[25%] left-[15%] w-80 h-80 rounded-full bg-[#2d6a4f]/25 blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112d20] border border-[#52b788]/60 shadow-sm">
            <Coins className="w-3.5 h-3.5 text-[#74c69d]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d8f3dc]">
              THE POND LEDGER & TOKENOMICS
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            Pond <span className="text-[#74c69d]">Tokenomics</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#b7e4c7] font-medium max-w-2xl mx-auto leading-relaxed">
            No insider allocations, no hidden VC reserves, 0% tax. Pure unbothered toad energy engineered for everlasting composure on Solana!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#0088cc] hover:bg-[#0099e6] text-white font-mono font-bold text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: t.me/chilltoad</span>
            </a>

            <a
              href={DEXSCREENER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] border border-[#52b788] text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#74c69d]" />
              <span>DexScreener Chart</span>
            </a>

            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#143621] hover:bg-[#1e4a30] border border-[#2d6a4f] text-[#86efac] font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <span>💊</span>
              <span>Pump.fun Market</span>
            </a>
          </div>
        </div>

        {/* 4 Large Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="pond-card p-6 sm:p-7 rounded-2xl border-2 border-[#52b788] shadow-xl flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Decorative Pin */}
                <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#52b788] border border-[#d8f3dc]"></div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#163824] border border-[#52b788] flex items-center justify-center text-[#74c69d] shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#74c69d] uppercase tracking-wider block">
                      {stat.title}
                    </span>
                    <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {stat.value}
                    </div>
                  </div>

                  <p className="font-sans text-xs text-[#b7e4c7] font-medium leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2d6a4f] flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#74c69d]">
                    {stat.highlight}
                  </span>
                  <span className="text-sm">🐸</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Transparency Banner */}
        <div className="max-w-4xl mx-auto pond-card p-8 rounded-2xl border-2 border-[#52b788] text-center space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            “No Rush, No Rugs, Just Calm Pond Vibes”
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#d8f3dc] max-w-2xl mx-auto leading-relaxed">
            Chill Toad Pepe was created to be the most relaxing meme token on Solana. Mint authority revoked, freeze authority revoked, liquidity burned to a crisp, and community empowered.
          </p>
          <div className="pt-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0088cc] hover:bg-[#0099e6] text-white font-display font-black text-xs shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Connect with Fellow Chillers on Telegram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
