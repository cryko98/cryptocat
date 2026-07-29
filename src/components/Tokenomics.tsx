import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Flame, CirclePercent, Coins, Lock, Award } from "lucide-react";

interface TokenomicsProps {
  contractAddress: string;
}

export default function Tokenomics({ contractAddress }: TokenomicsProps) {
  const stats = [
    {
      title: "TOTAL SUPPLY",
      value: "1,000,000,000",
      description: "1 Billion $pipedog tokens minted on Solana",
      icon: <Coins className="w-6 h-6 text-[#f59e0b]" />,
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNED",
      description: "LP tokens burned forever in tobacco fire",
      icon: <Flame className="w-6 h-6 text-[#f59e0b] animate-pulse" />,
    },
    {
      title: "BUY / SELL TAX",
      value: "0% TAXES",
      description: "Zero friction, maximum trading efficiency",
      icon: <CirclePercent className="w-6 h-6 text-[#f59e0b]" />,
    },
    {
      title: "MINT CONTRACT",
      value: "RENOUNCED",
      description: "Mint authority revoked — immutable token code",
      icon: <ShieldCheck className="w-6 h-6 text-[#f59e0b]" />,
    },
  ];

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 bg-[#140b07] text-[#fbf0da] overflow-hidden border-t border-[#2d1b11]">
      
      {/* Visual floating glows */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 z-0">
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-[#92400e] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 bg-[#d97706] rounded-full blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b] bg-[#251710] px-4 py-2 rounded-full border border-[#d97706]/40 shadow-md">
            📊 GENTLEMAN TOKENOMICS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#fbf0da] uppercase tracking-tight">
            100% Fair <span className="text-[#f59e0b]">Community Token</span>
          </h2>
          <p className="text-[#e4cbaf] font-sans font-semibold text-base sm:text-lg">
            No team allocations, no hidden VC dumps, no taxes. Pure gentleman power engineered for explosive green candles!
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
              className="p-6 rounded-3xl border border-[#4a2e1d] bg-[#251710]/95 shadow-xl hover:border-[#f59e0b] hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono font-bold text-[#f59e0b] tracking-widest uppercase">
                  {stat.title}
                </span>
                <div className="p-2.5 rounded-2xl bg-[#140b07] border border-[#3e271a] shadow-inner">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-2">
                <span className="block font-display font-black text-2xl sm:text-3xl text-[#fbf0da] leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs text-[#e4cbaf] font-sans font-semibold">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Distribution Details Card */}
        <div className="max-w-4xl mx-auto bg-[#251710]/95 p-8 sm:p-10 rounded-3xl border border-[#4a2e1d] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual SVG Progress Gauge */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-48 flex items-center justify-center">
                
                {/* SVG Ring with Warm Amber Shades */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#140b07"
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
                    stroke="#f59e0b"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="238.64" /* 95% */
                  />
                </svg>

                <div className="absolute text-center">
                  <span className="block font-display font-black text-3xl text-[#f59e0b]">95%</span>
                  <span className="block text-[10px] font-mono font-bold text-[#e4cbaf] uppercase tracking-widest">
                    Raydium LP
                  </span>
                </div>

              </div>
            </div>

            {/* Distribution Legend Information */}
            <div className="md:col-span-7 space-y-6 text-[#e4cbaf]">
              <div>
                <h4 className="font-display text-2xl font-black text-[#fbf0da] uppercase italic">Supply Allocation</h4>
                <p className="text-sm text-[#e4cbaf] font-sans mt-1 font-semibold">
                  100% transparent and engineered for fair, explosive growth across the Solana ecosystem.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#f59e0b] mt-1 flex-shrink-0 shadow-[0_0_10px_#f59e0b]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-[#fbf0da]">
                      95% - Fair Launch Liquidity Pool
                    </span>
                    <span className="block text-xs text-[#d4bca0] font-sans font-semibold">
                      Directly deposited to Raydium LP and burned upon token launch.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#b45309] mt-1 flex-shrink-0 shadow-[0_0_10px_#b45309]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-[#fbf0da]">
                      5% - Exchange Listings & Community Marketing
                    </span>
                    <span className="block text-xs text-[#d4bca0] font-sans font-semibold">
                      Reserved strictly for CEX listings, DEX tools, and viral meme marketing campaigns.
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#140b07] border border-[#3e271a] flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#f59e0b] flex-shrink-0" />
                <span className="text-xs font-mono font-bold text-[#e4cbaf]">
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
