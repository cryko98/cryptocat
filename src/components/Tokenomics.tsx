import React, { useState } from "react";
import {
  Coins,
  ShieldCheck,
  Flame,
  Zap,
  Lock,
  Crown,
  Copy,
  Check,
  Send,
  ExternalLink,
} from "lucide-react";
import {
  CATSEYE_NAME,
  CATSEYE_TICKER,
  CATSEYE_CA,
  TELEGRAM_URL,
  X_COMMUNITY_URL,
  DEXSCREENER_URL,
  PUMPFUN_URL,
  SOLSCAN_URL,
} from "../constants";

export default function Tokenomics() {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(CATSEYE_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2500);
  };

  const stats = [
    {
      title: "Total Supply",
      value: "1,000,000,000",
      description: "Fixed supply of $catseye on the Solana blockchain.",
      icon: Coins,
      highlight: "1 BILLION FIXED SUPPLY",
      cardColor: "bg-white",
      borderColor: "border-black",
      badgeColor: "bg-black text-white",
    },
    {
      title: "Dev Holdings",
      value: "0.00%",
      description: "100% fair launch on pump.fun. Zero dev allocation or team bag.",
      icon: Crown,
      highlight: "0% DEV • 100% COMMUNITY",
      cardColor: "bg-[#eafff3]",
      borderColor: "border-[#00c961]",
      badgeColor: "bg-[#00f076] text-black",
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
      description: "LP tokens burned to pump.fun ash. Cannot be pulled or manipulated.",
      icon: Flame,
      highlight: "IMMUTABLE & REVOKED",
      cardColor: "bg-white",
      borderColor: "border-black",
      badgeColor: "bg-black text-white",
    },
    {
      title: "Mint Authority",
      value: "Revoked",
      description: "No new $catseye tokens can ever be minted into existence.",
      icon: ShieldCheck,
      highlight: "HARD CAP VERIFIED",
      cardColor: "bg-[#eafff3]",
      borderColor: "border-[#00c961]",
      badgeColor: "bg-[#00f076] text-black",
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
    <section id="tokenomics" className="relative py-16 sm:py-24 bg-[#f8f9fa] text-black overflow-hidden border-b-4 border-black cat-grid">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#00f076]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white border-2 border-black shadow-[4px_4px_0px_#00f076]">
            <Coins className="w-4 h-4 text-[#00f076]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              TOKENOMICS & LEDGER
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#ffffff]">
            The <span className="text-[#00c961]">CAT'S EYE</span> Metrics
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-xl mx-auto">
            100% fair launch parameters designed to give the community full control and maximum upside.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`cat-card ${stat.cardColor} ${stat.borderColor} p-6 sm:p-7 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-200`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-black border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] text-white">
                      <Icon className="w-6 h-6 text-[#00f076]" />
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
                  <span className="text-[#00a850]">SOLANA VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contract Address & External Links Box */}
        <div className="max-w-4xl mx-auto cat-card p-6 sm:p-8 bg-white space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00f076] border-2 border-black flex items-center justify-center text-black font-black shadow-[2px_2px_0px_#000]">
                🐱
              </div>
              <div>
                <div className="text-xs font-mono font-black text-gray-500 uppercase">SOLANA CONTRACT ADDRESS</div>
                <div className="font-mono text-sm sm:text-base font-black text-black">
                  {CATSEYE_CA}
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyCA}
              className={`cat-btn px-5 py-2.5 text-xs font-mono font-bold flex items-center gap-2 shrink-0 ${
                copiedCA ? "bg-[#00f076] text-black" : "bg-black text-white hover:bg-[#1a1a1a]"
              }`}
            >
              {copiedCA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCA ? "Copied to Clipboard!" : "Copy CA"}</span>
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 border-t-2 border-black/10">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cat-btn cat-btn-tg px-4 py-2 text-xs font-display font-bold flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 fill-current" />
              <span>Official Telegram</span>
            </a>

            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cat-btn cat-btn-green px-4 py-2 text-xs font-display font-black flex items-center gap-1.5"
            >
              <span>💊 Pump.fun</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={DEXSCREENER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cat-btn px-4 py-2 bg-white text-black text-xs font-display font-bold flex items-center gap-1.5"
            >
              <span>📈 DexScreener</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
