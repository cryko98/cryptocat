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
      description: "1 Billion $wifcash tokens minted",
      icon: <Coins className="w-6 h-6 text-[#10B981]" />,
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNED",
      description: "LP keys burned forever in the furnace",
      icon: <Flame className="w-6 h-6 text-[#F59E0B] animate-pulse" />,
    },
    {
      title: "BUY / SELL TAX",
      value: "0% TAXES",
      description: "Absolutely zero fee friction for holders",
      icon: <CirclePercent className="w-6 h-6 text-[#10B981]" />,
    },
    {
      title: "CONTRACT SECURITY",
      value: "RENOUNCED",
      description: "Mint revoked, fully safe community ownership",
      icon: <ShieldCheck className="w-6 h-6 text-[#F59E0B]" />,
    },
  ];

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 bg-[#050806] overflow-hidden">
      
      {/* Visual floating charts background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 z-0">
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-[#10B981] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 bg-[#F59E0B] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#10B981] bg-zinc-900 px-3.5 py-2 rounded-full border border-white/10">
            📊 Tokenomics Dashboard
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase italic tracking-tight">
            Designed for Holders, Guarded by Felines
          </h2>
          <p className="text-zinc-400 font-sans font-medium text-base">
            Simple, clean, and completely transparent distribution. No hidden team wallets, no rug pulls, just pure cash-rich cat energy.
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
              className="p-6 rounded-3xl border border-white/10 bg-zinc-900/80 shadow-2xl backdrop-blur-md hover:border-[#10B981]/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono font-bold text-zinc-500 tracking-widest uppercase">
                  {stat.title}
                </span>
                <div className="p-2.5 rounded-2xl bg-black border border-white/5 shadow-sm">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-2">
                <span className="block font-display font-black text-2xl sm:text-3xl text-white leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs text-zinc-400 font-sans font-medium">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Layout Card showing distribution pie visualization */}
        <div className="max-w-4xl mx-auto bg-zinc-900/80 p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
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
                    stroke="#1e1e1e"
                    strokeWidth="10"
                  />
                  {/* Marketing / Dev airdrops (5%) */}
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
                    stroke="#10B981"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="238.64" /* 95% of 251.2 */
                  />
                </svg>

                {/* Inner Stats Text */}
                <div className="absolute text-center">
                  <span className="block font-display font-black text-2xl text-[#10B981]">95%</span>
                  <span className="block text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                    Fair Launch
                  </span>
                </div>

              </div>
            </div>

            {/* Distribution Legend Information */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="font-display text-xl font-bold text-white">Distribution Mechanics</h4>
                <p className="text-sm text-zinc-400 font-sans mt-1">
                  Cat wif Cash values the pure decentralized ethos of crypto. No pre-sales, no venture capital locks.
                </p>
              </div>

              <div className="space-y-4">
                {/* 95% fair launch */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#10B981] mt-1 flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-zinc-200">
                      95% - Fair Launch Liquidity Pool
                    </span>
                    <span className="block text-xs text-zinc-400 font-sans">
                      Deposited directly to Raydium and burned immediately. Safest launch possible.
                    </span>
                  </div>
                </div>

                {/* 5% marketing */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#F59E0B] mt-1 flex-shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.4)]"></div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-zinc-200">
                      5% - Marketing & Exchange Listings
                    </span>
                    <span className="block text-xs text-zinc-400 font-sans">
                      Reserved strictly for paying centralized exchanges, local events, and top-tier KOLs.
                    </span>
                  </div>
                </div>
              </div>

              {/* Secure Renounced Warning Alert block */}
              <div className="p-4 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                <span className="text-xs font-mono font-semibold text-[#10B981]">
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
