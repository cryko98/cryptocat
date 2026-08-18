import React, { useState } from "react";
import {
  Coins,
  ShieldCheck,
  Flame,
  Zap,
  Lock,
  Target,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import {
  BULLSEYE_NAME,
  BULLSEYE_TICKER,
  BULLSEYE_CA,
  X_COMMUNITY_URL,
  DEXSCREENER_URL,
  PUMPFUN_URL,
  SOLSCAN_URL,
} from "../constants";

export default function Tokenomics() {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(BULLSEYE_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2500);
  };

  const stats = [
    {
      title: "Total Supply",
      value: "1,000,000,000",
      description: "Fixed supply of $bullseye on the Solana blockchain.",
      icon: Coins,
      highlight: "1 BILLION FIXED SUPPLY",
      cardColor: "bg-white",
      borderColor: "border-black",
      badgeColor: "bg-black text-white",
    },
    {
      title: "Dev Allocation",
      value: "0.00%",
      description: "Launched fairly by the community to fix the typo coin. 0% dev bag.",
      icon: Target,
      highlight: "0% DEV • 100% COMMUNITY",
      cardColor: "bg-[#fff5f5]",
      borderColor: "border-[#e60012]",
      badgeColor: "bg-[#e60012] text-white",
    },
    {
      title: "Buy & Sell Tax",
      value: "0% / 0%",
      description: "0% tax on buy and sell. Pure frictionless meme trading on Solana.",
      icon: Zap,
      highlight: "ZERO TAX • ZERO FEES",
      cardColor: "bg-white",
      borderColor: "border-black",
      badgeColor: "bg-black text-white",
    },
    {
      title: "Liquidity Status",
      value: "100% Burned",
      description: "LP tokens burned to pump.fun ash. Cannot be rugpulled.",
      icon: Flame,
      highlight: "IMMUTABLE & REVOKED",
      cardColor: "bg-white",
      borderColor: "border-black",
      badgeColor: "bg-black text-white",
    },
    {
      title: "Mint Authority",
      value: "Revoked",
      description: "No new $bullseye tokens can ever be minted into existence.",
      icon: ShieldCheck,
      highlight: "HARD CAP VERIFIED",
      cardColor: "bg-[#fff5f5]",
      borderColor: "border-[#e60012]",
      badgeColor: "bg-[#e60012] text-white",
    },
    {
      title: "Freeze Authority",
      value: "Revoked",
      description: "No wallets can ever be blacklisted or frozen. 100% censorship free.",
      icon: Lock,
      highlight: "CENSORSHIP RESISTANT",
      cardColor: "bg-white",
      borderColor: "border-black",
      badgeColor: "bg-black text-white",
    },
  ];

  return (
    <section id="tokenomics" className="relative py-16 sm:py-24 bg-[#f8f9fa] text-black overflow-hidden border-b-4 border-black target-grid">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#e60012]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white border-2 border-black shadow-[4px_4px_0px_#e60012]">
            <Coins className="w-4 h-4 text-[#e60012]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              TOKENOMICS & TRANSPARENCY
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#ffffff]">
            The <span className="text-[#e60012]">Bullseye</span> Breakdown
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-xl mx-auto">
            100% fair metrics. No hidden fees, zero insider allocations, and pure community governance.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`target-card ${stat.cardColor} ${stat.borderColor} p-6 sm:p-7 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-200`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-black border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] text-white">
                      <Icon className="w-6 h-6 text-[#e60012]" />
                    </div>
                    <span className={`text-[10px] font-mono font-black px-2.5 py-1 rounded-full border border-black ${stat.badgeColor}`}>
                      {stat.highlight}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono font-black text-gray-600 uppercase tracking-wider">
                      {stat.title}
                    </h3>
                    <div className="font-comic text-3xl sm:text-4xl text-black mt-1">
                      {stat.value}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-black/80 font-bold leading-relaxed pt-1">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t-2 border-black/20 flex items-center justify-between text-[11px] font-mono font-bold text-gray-500">
                  <span>METRIC #{idx + 1}</span>
                  <span className="text-[#e60012]">VERIFIED ON SOLANA</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contract Address & External Links Box */}
        <div className="max-w-4xl mx-auto target-card p-6 sm:p-8 bg-white space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e60012] border-2 border-black flex items-center justify-center text-white font-black shadow-[2px_2px_0px_#000]">
                🎯
              </div>
              <div>
                <div className="text-xs font-mono font-black text-gray-500 uppercase">SOLANA CONTRACT ADDRESS</div>
                <div className="font-mono text-sm sm:text-base font-black text-black">
                  {BULLSEYE_CA}
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyCA}
              className={`target-btn px-5 py-2.5 text-xs font-mono font-bold flex items-center gap-2 shrink-0 ${
                copiedCA ? "bg-[#e60012] text-white" : "bg-black text-white hover:bg-[#1a1a1a]"
              }`}
            >
              {copiedCA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCA ? "Copied to Clipboard!" : "Copy CA"}</span>
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 border-t-2 border-black/10">
            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="target-btn target-btn-red px-4 py-2 text-xs font-display font-black flex items-center gap-1.5"
            >
              <span>💊 Pump.fun</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={DEXSCREENER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="target-btn px-4 py-2 bg-white text-black text-xs font-display font-bold flex items-center gap-1.5"
            >
              <span>📈 DexScreener</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={X_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="target-btn px-4 py-2 bg-black text-white text-xs font-display font-bold flex items-center gap-1.5"
            >
              <span>Join X Community</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
