import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Flame, CirclePercent, Coins, Lock } from "lucide-react";

interface TokenomicsProps {
  contractAddress: string;
}

export default function Tokenomics({ contractAddress }: TokenomicsProps) {
  const [copied, setCopied] = useState(false);

  const stats = [
    {
      title: "TOTAL SUPPLY",
      value: "1,000,000,000",
      description: "1 Billion $bulldog tokens minted",
      icon: <Coins className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNED",
      description: "LP keys burned forever in the furnace",
      icon: <Flame className="w-6 h-6 text-amber-500 animate-pulse" />,
    },
    {
      title: "BUY / SELL TAX",
      value: "0% TAXES",
      description: "Absolutely zero fee friction for holders",
      icon: <CirclePercent className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "CONTRACT SECURITY",
      value: "RENOUNCED",
      description: "Mint revoked, fully safe community ownership",
      icon: <ShieldCheck className="w-6 h-6 text-amber-700" />,
    },
  ];

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 bg-[#FCFAF6] overflow-hidden">
      
      {/* Visual floating charts background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 z-0">
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 bg-yellow-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-2 rounded-full border border-amber-200 shadow-sm">
            📊 Tokenomics Dashboard
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#451A03] uppercase italic tracking-tight">
            Designed for Holders, Guarded by The Pack
          </h2>
          <p className="text-amber-950/80 font-sans font-medium text-base">
            Simple, clean, and completely transparent distribution. No hidden dev wallets, no rug pulls, just pure bull-run canine strength.
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
              className="p-6 rounded-3xl border border-amber-200/80 bg-[#FDFBF7] shadow-xl hover:border-amber-500 hover:shadow-[0_0_25px_rgba(217,119,6,0.15)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono font-bold text-amber-800/60 tracking-widest uppercase">
                  {stat.title}
                </span>
                <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-2">
                <span className="block font-display font-black text-2xl sm:text-3xl text-[#451A03] leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs text-amber-950/70 font-sans font-medium">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Layout Card showing distribution pie visualization */}
        <div className="max-w-4xl mx-auto bg-[#FDFBF7] p-8 sm:p-10 rounded-3xl border border-amber-200/80 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual SVG Progress Gauge */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-48 flex items-center justify-center">
                
                {/* SVG Ring */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Outer circle track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#FEF3C7"
                    strokeWidth="10"
                  />
                  {/* Marketing (5%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#F59E0B"
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
                    stroke="#D97706"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="238.64" /* 95% of 251.2 */
                  />
                </svg>

                {/* Inner Stats Text */}
                <div className="absolute text-center">
                  <span className="block font-display font-black text-2xl text-amber-600">95%</span>
                  <span className="block text-[10px] font-mono font-bold text-amber-800/50 uppercase tracking-widest">
                    Fair Launch
                  </span>
                </div>

              </div>
            </div>

            {/* Distribution Legend Information */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="font-display text-xl font-bold text-[#451A03]">Distribution Mechanics</h4>
                <p className="text-sm text-amber-950/70 font-sans mt-1">
                  The Bull Dog believes in pure decentralized power. No pre-sales, no venture capital traps, just raw power for early believers.
                </p>
              </div>

              <div className="space-y-4">
                {/* 95% fair launch */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-amber-600 mt-1 flex-shrink-0 shadow-[0_0_10px_rgba(217,119,6,0.3)]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-[#451A03]">
                      95% - Fair Launch Liquidity Pool
                    </span>
                    <span className="block text-xs text-amber-950/70 font-sans">
                      Deposited directly to the Raydium AMM and burned immediately. Safest launch structure possible.
                    </span>
                  </div>
                </div>

                {/* 5% marketing */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-amber-500 mt-1 flex-shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.3)]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-[#451A03]">
                      5% - Exchange Listings & Bull Campaigns
                    </span>
                    <span className="block text-xs text-amber-950/70 font-sans">
                      Reserved strictly for paying centralized exchange integrations, local meetups, and top-tier promotions.
                    </span>
                  </div>
                </div>
              </div>

              {/* Secure Renounced Warning Alert block */}
              <div className="p-4 rounded-2xl bg-amber-100/50 border border-amber-200/60 flex items-center gap-3">
                <Lock className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span className="text-xs font-mono font-semibold text-amber-800">
                  Verified: Solana Token Program mint permissions are fully renounced. Zero future tokens can ever be printed.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
