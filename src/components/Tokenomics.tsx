import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Flame, CirclePercent, Coins, Lock } from "lucide-react";

interface TokenomicsProps {
  contractAddress: string;
}

export default function Tokenomics({ contractAddress }: TokenomicsProps) {
  const stats = [
    {
      title: "TOTAL SUPPLY",
      value: "1,000,000,000",
      description: "1 Billion $Casper tokens minted on Solana",
      icon: <Coins className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNED",
      description: "LP keys burned forever, locked in the safe",
      icon: <Flame className="w-6 h-6 text-rose-600 animate-pulse" />,
    },
    {
      title: "BUY / SELL TAX",
      value: "0% TAXES",
      description: "Zero friction for long-term believers",
      icon: <CirclePercent className="w-6 h-6 text-rose-400" />,
    },
    {
      title: "MINT CONTRACT",
      value: "RENOUNCED",
      description: "Mint permissions revoked, safe community token",
      icon: <ShieldCheck className="w-6 h-6 text-rose-700" />,
    },
  ];

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 bg-[#FFFDFD] overflow-hidden">
      
      {/* Visual floating charts background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 z-0">
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-rose-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 bg-rose-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-800 bg-rose-50 px-3.5 py-2 rounded-full border border-rose-100 shadow-sm">
            📊 Tokenomics Dashboard
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#4C0519] uppercase italic tracking-tight">
            Protected Economics, Fully Community-Owned
          </h2>
          <p className="text-rose-950/80 font-sans font-semibold text-base">
            No sneaky venture capitalists or team dump wallets. Just transparent, fair mechanics designed to boost our lucky survivor Casper!
          </p>
        </div>

        {/* Dashboard Grid Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl border border-rose-150 bg-white shadow-md hover:border-rose-400 hover:shadow-[0_0_25px_rgba(244,63,94,0.1)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono font-bold text-rose-800/60 tracking-widest uppercase">
                  {stat.title}
                </span>
                <div className="p-2.5 rounded-2xl bg-rose-50 border border-rose-100 shadow-sm animate-pulse">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-2">
                <span className="block font-display font-black text-2xl sm:text-3xl text-[#4C0519] leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs text-rose-950/70 font-sans font-semibold">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Distribution Details Card */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-rose-100 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual SVG Progress Gauge */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-48 flex items-center justify-center">
                
                {/* SVG Ring with Rose/Pink Shades */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Outer circle track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#FFE4E6"
                    strokeWidth="10"
                  />
                  {/* Exchange & Promo (5%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#FDA4AF"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="12.56" /* 5% of 251.2 */
                  />
                  {/* Liquidity Pool (95%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#F43F5E"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="238.64" /* 95% of 251.2 */
                  />
                </svg>

                {/* Inner Stats Text */}
                <div className="absolute text-center">
                  <span className="block font-display font-black text-2xl text-rose-600">95%</span>
                  <span className="block text-[10px] font-mono font-bold text-rose-800/60 uppercase tracking-widest">
                    Fair Pool
                  </span>
                </div>

              </div>
            </div>

            {/* Distribution Legend Information */}
            <div className="md:col-span-7 space-y-6 text-rose-950">
              <div>
                <h4 className="font-display text-xl font-black text-[#4C0519] uppercase italic">Allocation Strategy</h4>
                <p className="text-sm text-rose-950/70 font-sans mt-1 font-semibold">
                  We believe in organic growth. No pre-sales or private allocations that can dump on retail.
                </p>
              </div>

              <div className="space-y-4">
                {/* 95% fair launch */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-rose-500 mt-1 flex-shrink-0 shadow-[0_0_10px_rgba(244,63,94,0.3)]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-[#4C0519]">
                      95% - Fair Launch Liquidity Pool
                    </span>
                    <span className="block text-xs text-rose-950/70 font-sans font-semibold">
                      Locked and burned in Raydium AMM immediately at launch. Safest and most decentralized structure possible.
                    </span>
                  </div>
                </div>

                {/* 5% marketing / Listings */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-rose-300 mt-1 flex-shrink-0 shadow-[0_0_10px_rgba(253,164,175,0.3)]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-[#4C0519]">
                      5% - Exchange Listings & Casper Promotions
                    </span>
                    <span className="block text-xs text-rose-950/70 font-sans font-semibold">
                      Reserved strictly for paying centralized exchange listings, wildlife charity awareness, and top tier influencers.
                    </span>
                  </div>
                </div>
              </div>

              {/* Secure Renounced Warning Alert block */}
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-center gap-3">
                <Lock className="w-5 h-5 text-rose-700 flex-shrink-0" />
                <span className="text-xs font-mono font-bold text-rose-800">
                  Verified Contract: Solana Token Program mint permissions are fully renounced. Zero extra tokens can ever be printed!
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
