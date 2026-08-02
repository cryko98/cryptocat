import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Flame, CirclePercent, Coins, Lock, Award, Sparkles } from "lucide-react";

interface TokenomicsProps {
  contractAddress?: string;
}

export default function Tokenomics({ contractAddress }: TokenomicsProps) {
  const stats = [
    {
      title: "TOTAL SUPPLY",
      value: "1,000,000,000",
      description: "1 Billion $auracat tokens minted on Solana",
      icon: <Coins className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNED",
      description: "LP tokens burned forever in cosmic aura fire",
      icon: <Flame className="w-6 h-6 text-pink-400 animate-pulse" />,
    },
    {
      title: "BUY / SELL TAX",
      value: "0% TAXES",
      description: "Zero friction, maximum vibrational efficiency",
      icon: <CirclePercent className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "MINT CONTRACT",
      value: "RENOUNCED",
      description: "Mint authority revoked — immutable token code",
      icon: <ShieldCheck className="w-6 h-6 text-purple-300" />,
    },
  ];

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 bg-[#090314] text-white overflow-hidden border-t border-[#3b186b]">
      
      {/* Visual floating aura glows */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-25 z-0">
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-purple-600 rounded-full blur-[150px] animate-aura-shift"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 bg-pink-600 rounded-full blur-[150px] animate-aura-shift"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 bg-[#160830] px-4 py-2 rounded-full border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            📊 AURA CAT TOKENOMICS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            100% Serene <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Community Token</span>
          </h2>
          <p className="text-purple-200/80 font-sans font-semibold text-base sm:text-lg">
            No team allocations, no hidden VC dumps, no taxes. Pure 432 Hz frequency engineered for iridescent Solana abundance!
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
              className="p-6 rounded-3xl border border-[#3b186b] bg-[#130726]/95 shadow-xl hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono font-bold text-purple-300 tracking-widest uppercase">
                  {stat.title}
                </span>
                <div className="p-2.5 rounded-2xl bg-[#0d041c] border border-[#3b186b] shadow-inner">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-2">
                <span className="block font-display font-black text-2xl sm:text-3xl text-white leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs text-purple-200 font-sans font-semibold">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Distribution Details Card */}
        <div className="max-w-4xl mx-auto bg-[#130726]/95 p-8 sm:p-10 rounded-3xl border border-[#3b186b] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual SVG Progress Gauge */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-48 flex items-center justify-center">
                
                {/* SVG Ring with Iridescent Aura Shades */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#0d041c"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#ec4899"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="12.56" /* 5% */
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#a855f7"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="238.64" /* 95% */
                  />
                </svg>

                <div className="absolute text-center">
                  <span className="block font-display font-black text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">95%</span>
                  <span className="block text-[10px] font-mono font-bold text-purple-300 uppercase tracking-widest">
                    Raydium LP
                  </span>
                </div>

              </div>
            </div>

            {/* Distribution Legend Information */}
            <div className="md:col-span-7 space-y-6 text-purple-200">
              <div>
                <h4 className="font-display text-2xl font-black text-white uppercase italic">Supply Allocation</h4>
                <p className="text-sm text-purple-200 font-sans mt-1 font-semibold">
                  100% transparent and engineered for serene, high-vibration abundance across the Solana ecosystem.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-purple-400 mt-1 flex-shrink-0 shadow-[0_0_12px_#a855f7]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-white">
                      95% - Fair Launch Liquidity Pool
                    </span>
                    <span className="block text-xs text-purple-300 font-sans font-semibold">
                      Directly deposited to Raydium LP and burned upon token launch.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-pink-400 mt-1 flex-shrink-0 shadow-[0_0_12px_#ec4899]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-white">
                      5% - Sanctuary Listings & Community Resonance
                    </span>
                    <span className="block text-xs text-purple-300 font-sans font-semibold">
                      Reserved strictly for DEX/CEX listings, sanctuary tools, and high-vibration community campaigns.
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0d041c] border border-[#3b186b] flex items-center gap-3">
                <Lock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-xs font-mono font-bold text-purple-200">
                  Verified Contract: Solana Token Program mint permissions are 100% revoked. No new tokens can ever be minted.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
