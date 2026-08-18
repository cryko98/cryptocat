import React, { useState } from "react";
import {
  Coins,
  ShieldCheck,
  Flame,
  Zap,
  TrendingUp,
  ExternalLink,
  Copy,
  Check,
  Lock,
  Brain,
} from "lucide-react";
import {
  SLINGTARD_NAME,
  SLINGTARD_TICKER,
  SLINGTARD_CA,
  X_COMMUNITY_URL,
  DEXSCREENER_URL,
  PUMPFUN_URL,
  SOLSCAN_URL,
} from "../constants";

export default function Tokenomics() {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(SLINGTARD_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2500);
  };

  const stats = [
    {
      title: "Total Supply",
      value: "1,000,000,000",
      description: "Fixed total supply of $slingtartd on Solana blockchain.",
      icon: Coins,
      highlight: "1 BILLION FIXED SUPPLY",
      cardColor: "comic-card-yellow",
    },
    {
      title: "Dev Holdings",
      value: "0.00%",
      description: "Launched by community after the KOL ruined his previous coin. 0% dev bag.",
      icon: Brain,
      highlight: "0% DEV • 100% COMMUNITY",
      cardColor: "comic-card-pink",
    },
    {
      title: "Buy & Sell Tax",
      value: "0% / 0%",
      description: "0% tax on buy and sell. Pure frictionless meme trading on Solana.",
      icon: Zap,
      highlight: "ZERO TAX • ZERO FEES",
      cardColor: "comic-card-cyan",
    },
    {
      title: "Liquidity Status",
      value: "100% Burned",
      description: "LP tokens burned to pump.fun ash. Cannot be rugpulled.",
      icon: Flame,
      highlight: "IMMUTABLE & REVOKED",
      cardColor: "comic-card-yellow",
    },
    {
      title: "Mint Authority",
      value: "Revoked",
      description: "No new $slingtartd tokens can ever be minted into existence.",
      icon: ShieldCheck,
      highlight: "HARD CAP VERIFIED",
      cardColor: "comic-card-cyan",
    },
    {
      title: "Freeze Authority",
      value: "Revoked",
      description: "No wallets can ever be blacklisted or frozen. 100% freedom.",
      icon: Lock,
      highlight: "CENSORSHIP RESISTANT",
      cardColor: "comic-card-pink",
    },
  ];

  return (
    <section id="tokenomics" className="relative py-16 sm:py-24 bg-[#ffd600] text-black overflow-hidden border-b-4 border-black comic-dots">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#00f0ff]/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#ff007a]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-[#ffe600] border-2 border-black shadow-[4px_4px_0px_#ff007a]">
            <Coins className="w-4 h-4 text-[#00f0ff]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              THE 0 IQ TOKENOMICS & LEDGER
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#fff]">
            Slingtard <span className="text-[#ff007a]">Tokenomics</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-2xl mx-auto leading-relaxed">
            No insider allocations, zero dev dump risk because the dev already dumped himself out, 0% tax, and infinite community momentum on Solana!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={X_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn px-4 py-2 bg-black text-white font-mono font-bold text-xs flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Join X Community</span>
            </a>

            <a
              href={DEXSCREENER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn px-4 py-2 bg-[#00f0ff] hover:bg-[#38f4ff] text-black font-mono font-black text-xs flex items-center gap-1.5"
            >
              <TrendingUp className="w-3.5 h-3.5 text-black" />
              <span>DexScreener Chart</span>
            </a>

            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn px-4 py-2 bg-[#ff007a] hover:bg-[#ff1a80] text-white font-mono font-black text-xs flex items-center gap-1.5"
            >
              <span>💊</span>
              <span>Pump.fun Market</span>
            </a>
          </div>
        </div>

        {/* Verified Solana Contract Address Highlight Box */}
        <div className="max-w-4xl mx-auto mb-12 comic-card p-6 sm:p-8 bg-white border-4 border-black shadow-[8px_8px_0px_#000] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-3 border-black pb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#00f0ff] animate-ping"></span>
              <span className="text-xs font-mono font-black uppercase tracking-wider text-[#ff007a]">
                VERIFIED SOLANA CONTRACT ADDRESS (CA)
              </span>
            </div>

            <a
              href={SOLSCAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-black hover:text-[#ff007a] flex items-center gap-1 underline"
            >
              View on Solscan <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full flex-1 bg-[#fff9c4] px-4 py-3 rounded-2xl border-2 border-black font-mono text-xs sm:text-sm text-black font-bold select-all break-all sm:truncate">
              {SLINGTARD_CA}
            </div>

            <button
              onClick={handleCopyCA}
              className={`w-full sm:w-auto comic-btn px-6 py-3 font-mono font-black text-xs flex items-center justify-center gap-2 ${
                copiedCA
                  ? "bg-[#00f0ff] text-black"
                  : "bg-[#ff007a] hover:bg-[#ff1a80] text-white"
              }`}
            >
              {copiedCA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCA ? "Copied to Clipboard!" : "Copy Contract Address"}</span>
            </button>
          </div>
        </div>

        {/* 6 Metric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`${stat.cardColor} p-6 sm:p-7 flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Decorative Comic Pin */}
                <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-black border-2 border-white"></div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-black shadow-[3px_3px_0px_#000]">
                    <Icon className="w-6 h-6 text-[#ff007a]" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-black/70 uppercase tracking-wide">
                      {stat.title}
                    </span>
                    <div className="font-comic text-3xl sm:text-4xl text-black tracking-tight mt-0.5">
                      {stat.value}
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-black font-bold leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between">
                  <span className="text-[11px] font-mono font-black text-[#ff007a]">
                    {stat.highlight}
                  </span>
                  <Zap className="w-3.5 h-3.5 text-black" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Transparency Banner */}
        <div className="max-w-4xl mx-auto comic-card p-8 bg-white border-4 border-black text-center space-y-4 shadow-[8px_8px_0px_#000]">
          <h3 className="font-comic text-2xl sm:text-3xl text-black">
            “100% Community Tribute, 0% Dev Danger”
          </h3>
          <p className="font-sans text-sm sm:text-base text-black font-bold max-w-2xl mx-auto leading-relaxed">
            The KOL wrecked his previous token, so the community launched {SLINGTARD_TICKER} as a 100% decentralized tribute. No dev wallet, no rugpull risk, and 100% degen power on Solana.
          </p>
          <div className="pt-2">
            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn inline-flex items-center gap-2 px-8 py-4 bg-[#ff007a] hover:bg-[#ff1a80] text-white font-display font-black text-sm shadow-[4px_4px_0px_#000]"
            >
              <span>💊 Dominate with {SLINGTARD_TICKER} on Pump.fun</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
