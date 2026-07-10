import React, { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Flame, CirclePercent, Coins, Lock, Check, Copy } from "lucide-react";

interface TokenomicsProps {
  contractAddress: string;
}

export default function Tokenomics({ contractAddress }: TokenomicsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    {
      title: "TOTAL SUPPLY",
      value: "1,000,000,000",
      description: "1 Billion $cryptocat tokens minted",
      icon: <Coins className="w-6 h-6 text-green-500" />,
      bg: "bg-green-50 border-green-100",
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNED",
      description: "LP keys burned forever in the furnace",
      icon: <Flame className="w-6 h-6 text-orange-500 animate-pulse" />,
      bg: "bg-orange-50 border-orange-100",
    },
    {
      title: "BUY / SELL TAX",
      value: "0% TAXES",
      description: "Absolutely zero fee friction for holders",
      icon: <CirclePercent className="w-6 h-6 text-emerald-500" />,
      bg: "bg-emerald-50 border-emerald-100",
    },
    {
      title: "CONTRACT SECURITY",
      value: "RENOUNCED",
      description: "Mint revoked, fully safe community ownership",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      bg: "bg-blue-50 border-blue-100",
    },
  ];

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      
      {/* Visual floating charts background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 z-0">
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-green-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 bg-emerald-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#22c55e] bg-green-50 px-3.5 py-2 rounded-full border border-green-100">
            📊 Tokenomics Dashboard
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Designed for Holders, Guarded by Felines
          </h2>
          <p className="text-neutral-500 font-sans font-medium text-base">
            Simple, clean, and completely transparent distribution. No hidden team wallets, no rug pulls, just pure happy cat energy.
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
              className={`p-6 rounded-3xl border-2 bg-white ${stat.bg} shadow-md shadow-slate-100/30 hover:scale-[1.02] hover:shadow-lg transition-all duration-200 flex flex-col justify-between`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-neutral-400 tracking-widest uppercase">
                  {stat.title}
                </span>
                <div className="p-2.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-2">
                <span className="block font-display font-black text-2xl sm:text-3xl text-neutral-900 leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs text-neutral-500 font-sans font-medium">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Layout Card showing distribution pie visualization */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-50 to-white p-8 sm:p-10 rounded-3xl border-2 border-slate-100 shadow-xl shadow-slate-100/20">
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
                    stroke="#f1f5f9"
                    strokeWidth="10"
                  />
                  {/* Marketing / Dev airdrops (5%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#3b82f6"
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
                    stroke="#22c55e"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="238.64" /* 95% of 251.2 */
                  />
                </svg>

                {/* Inner Stats Text */}
                <div className="absolute text-center">
                  <span className="block font-display font-black text-2xl text-neutral-800">95%</span>
                  <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Fair Launch
                  </span>
                </div>

              </div>
            </div>

            {/* Distribution Legend Information */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="font-display text-xl font-bold text-neutral-800">Distribution Mechanics</h4>
                <p className="text-sm text-neutral-500 font-sans mt-1">
                  Crypto Cat values the ethos of crypto. No pre-sales, no venture capital locks.
                </p>
              </div>

              <div className="space-y-4">
                {/* 95% fair launch */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-neutral-800">
                      95% - Fair Launch Liquidity Pool
                    </span>
                    <span className="block text-xs text-neutral-500 font-sans">
                      Deposited directly to Raydium and burned immediately. Safest launch possible.
                    </span>
                  </div>
                </div>

                {/* 5% marketing */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 flex-shrink-0"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-neutral-800">
                      5% - Marketing & Exchange Listings
                    </span>
                    <span className="block text-xs text-neutral-500 font-sans">
                      Reserved strictly for paying centralized exchanges, KOLs, and local community events.
                    </span>
                  </div>
                </div>
              </div>

              {/* Secure Renounced Warning Alert block */}
              <div className="p-4 rounded-2xl bg-[#f0fdf4] border border-green-100 flex items-center gap-3">
                <Lock className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-green-800">
                  Verified: Solana Token Program mint permissions are fully set to null. No more tokens can ever be created.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
