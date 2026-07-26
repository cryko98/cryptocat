import React from "react";
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
      description: "1 Billion $sharkcat tokens minted on Solana",
      icon: <Coins className="w-6 h-6 text-sky-400" />,
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNED",
      description: "LP tokens incinerated to ashes forever",
      icon: <Flame className="w-6 h-6 text-sky-400 animate-pulse" />,
    },
    {
      title: "BUY / SELL TAX",
      value: "0% TAXES",
      description: "Zero friction, maximum trading efficiency",
      icon: <CirclePercent className="w-6 h-6 text-sky-400" />,
    },
    {
      title: "MINT CONTRACT",
      value: "RENOUNCED",
      description: "Mint authority revoked — zero inflation possible",
      icon: <ShieldCheck className="w-6 h-6 text-sky-400" />,
    },
  ];

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      
      {/* Visual floating glows */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 z-0">
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-sky-500 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 bg-blue-600 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-300 bg-slate-800 px-4 py-2 rounded-full border border-sky-500/30 shadow-md">
            📊 APEX TOKENOMICS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tight">
            100% Fair <span className="text-sky-400">Community Owned</span>
          </h2>
          <p className="text-slate-300 font-sans font-semibold text-base sm:text-lg">
            No team allocations, no hidden VC dumps, no taxes. Pure apex power engineered for maximum green candle momentum!
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
              className="p-6 rounded-3xl border border-slate-700 bg-slate-800/90 shadow-xl hover:border-sky-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono font-bold text-sky-400 tracking-widest uppercase">
                  {stat.title}
                </span>
                <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-700 shadow-inner">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-2">
                <span className="block font-display font-black text-2xl sm:text-3xl text-white leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs text-slate-300 font-sans font-semibold">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Distribution Details Card */}
        <div className="max-w-4xl mx-auto bg-slate-800/90 p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual SVG Progress Gauge */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-48 h-48 flex items-center justify-center">
                
                {/* SVG Ring with Blue & Sky Shades */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#1e293b"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#60a5fa"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="12.56" /* 5% */
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#38bdf8"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="238.64" /* 95% */
                  />
                </svg>

                <div className="absolute text-center">
                  <span className="block font-display font-black text-3xl text-sky-400">95%</span>
                  <span className="block text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">
                    Raydium LP
                  </span>
                </div>

              </div>
            </div>

            {/* Distribution Legend Information */}
            <div className="md:col-span-7 space-y-6 text-slate-200">
              <div>
                <h4 className="font-display text-2xl font-black text-white uppercase italic">Supply Allocation</h4>
                <p className="text-sm text-slate-300 font-sans mt-1 font-semibold">
                  100% transparent and designed for fair, explosive growth across the Solana ecosystem.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-sky-400 mt-1 flex-shrink-0 shadow-[0_0_10px_#38bdf8]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-white">
                      95% - Fair Launch Liquidity Pool
                    </span>
                    <span className="block text-xs text-slate-300 font-sans font-semibold">
                      Directly deposited to Raydium LP and burned upon token launch.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-400 mt-1 flex-shrink-0 shadow-[0_0_10px_#60a5fa]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-white">
                      5% - Exchange Listings & Marketing
                    </span>
                    <span className="block text-xs text-slate-300 font-sans font-semibold">
                      Reserved strictly for CEX listings, DEX tools, and viral marketing campaigns.
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 flex items-center gap-3">
                <Lock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-xs font-mono font-bold text-slate-300">
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
