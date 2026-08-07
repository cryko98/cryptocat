import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Flame, CirclePercent, Coins, Lock, Award, Sparkles, BookOpen } from "lucide-react";

export default function Tokenomics() {
  const stats = [
    {
      title: "TOTAL SUPPLY",
      value: "1,000,000,000",
      description: "1 Billion $cashcate tokens inscribed on Solana",
      icon: <Coins className="w-6 h-6 text-[#b45309]" />,
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNED",
      description: "LP tokens burned forever in immutable market flame",
      icon: <Flame className="w-6 h-6 text-[#d97706] animate-pulse" />,
    },
    {
      title: "MARKET TAX",
      value: "0% TAXES",
      description: "0% buy, 0% sell. Pure golden opportunity",
      icon: <CirclePercent className="w-6 h-6 text-[#ca8a04]" />,
    },
    {
      title: "MINT AUTHORITY",
      value: "RENOUNCED",
      description: "Mint permissions revoked — immutable code forever",
      icon: <ShieldCheck className="w-6 h-6 text-[#b45309]" />,
    },
  ];

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 bg-[#f5e6be] text-[#1c1305] overflow-hidden border-t-2 border-[#b48c3c] vintage-ledger-grid selection:bg-[#fde047] selection:text-[#1c1305]">
      
      {/* Background amber glow */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 z-0">
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-[#f59e0b] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 bg-[#fbbf24] rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fcf6e8] border border-[#b48c3c] shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#b45309]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#78350f]">
              THE GOLDEN LEDGER & TOKENOMICS
            </span>
          </div>

          <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#1c1305] uppercase tracking-tight">
            100% Fair <span className="text-[#b45309]">Market Tokenomics</span>
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#78350f] font-semibold max-w-2xl mx-auto">
            No insider allocations, no hidden VC reserves, 0% tax. Pure golden curiosity engineered for long-term composure on Solana!
          </p>
        </div>

        {/* 4 Ledger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="parchment-card p-6 rounded-sm border-2 border-[#b48c3c] shadow-lg hover:border-[#92400e] hover:shadow-[0_8px_25px_rgba(58,38,7,0.2)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between relative"
            >
              {/* Pushpin */}
              <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 rounded-full bg-[#1c1305] border border-[#78350f]"></div>

              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono font-bold text-[#78350f] tracking-widest uppercase">
                  {stat.title}
                </span>
                <div className="p-2 rounded bg-[#fdf3d7] border border-[#cbb07a] shadow-inner">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-2">
                <span className="block font-serif font-black text-2xl sm:text-3xl text-[#1c1305] leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs text-[#38260d] font-serif font-semibold">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ledger Distribution Card */}
        <div className="max-w-4xl mx-auto parchment-card p-8 sm:p-10 rounded-sm border-2 border-[#b48c3c] shadow-2xl relative">
          
          {/* Top Tape Header Accent */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#fef08a] border border-[#eab308] rotate-[-1deg] shadow-sm pointer-events-none flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-[#78350f] uppercase">
              OFFICIAL LEDGER
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
            
            {/* SVG Doughnut Gauge with Golden Palette */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-48 flex items-center justify-center">
                
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#e5d2a8"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#b45309"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="12.56" /* 5% */
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#eab308"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="238.64" /* 95% */
                  />
                </svg>

                <div className="absolute text-center">
                  <span className="block font-serif font-black text-3xl text-[#1c1305]">95%</span>
                  <span className="block text-[10px] font-mono font-bold text-[#78350f] uppercase tracking-widest">
                    Raydium LP
                  </span>
                </div>

              </div>
            </div>

            {/* Distribution Legend Information */}
            <div className="md:col-span-7 space-y-6 text-[#38260d]">
              <div>
                <h4 className="font-serif text-2xl font-black text-[#1c1305] uppercase italic">
                  Supply Allocation
                </h4>
                <p className="text-sm text-[#78350f] font-serif mt-1 font-semibold">
                  100% transparent and designed for long-term composure across the Solana ecosystem.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#eab308] mt-1 flex-shrink-0 shadow-sm border border-[#ca8a04]"></div>
                  <div>
                    <span className="block font-serif font-bold text-sm text-[#1c1305]">
                      95% — Fair Launch Liquidity Pool
                    </span>
                    <span className="block text-xs text-[#78350f] font-serif font-semibold">
                      Directly deposited to Raydium DEX Liquidity Pool and burned upon token launch.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#b45309] mt-1 flex-shrink-0 shadow-sm border border-[#78350f]"></div>
                  <div>
                    <span className="block font-serif font-bold text-sm text-[#1c1305]">
                      5% — Community Chronicles & Sanctuary Archive
                    </span>
                    <span className="block text-xs text-[#78350f] font-serif font-semibold">
                      Reserved strictly for exchange listings, market scribe chronicles, and community initiatives.
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#faedd0] border border-[#cbb07a] flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#b45309] flex-shrink-0" />
                <span className="text-xs font-mono font-bold text-[#78350f]">
                  Immutable Code: Solana Token Program mint authority is 100% revoked. No new tokens can ever be created.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
