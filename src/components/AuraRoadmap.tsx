import React from "react";
import {
  CheckCircle2,
  Zap,
  TrendingUp,
  Brain,
  Sparkles,
  Trophy,
} from "lucide-react";
import {
  SLINGTARD_NAME,
  SLINGTARD_TICKER,
  X_COMMUNITY_URL,
  PUMPFUN_URL,
} from "../constants";

export default function AuraRoadmap() {
  const phases = [
    {
      step: "PHASE 1 • COMPLETE",
      title: "Previous Coin Fumble & New Launch",
      time: "GENESIS",
      icon: "🚨",
      description:
        "The KOL ruins his previous project because he is dumb, the community nicknames him Slingtard, and launches THIS brand new token $slingtartd on pump.fun.",
      items: [
        "KOL Fucks Up Previous Coin",
        "Community Christens Him 'Slingtard'",
        "Brand New $slingtartd Token Launched",
        "100% Community Ownership Established",
      ],
      cardColor: "comic-card-yellow",
    },
    {
      step: "PHASE 2 • IN PROGRESS",
      title: "Viral CTO & Retard-Core Meta",
      time: "VIRAL EXPANSION",
      icon: "🤤",
      description:
        "The community unites around the hilarious $slingtartd lore with raids and memes storming the Solana timeline.",
      items: [
        "DexScreener Profile & Banner Verification",
        "Active X Community Raids & Meme Contests",
        "Pump.fun Bonding Curve Blitz",
        "KOL Apology Confession Generator",
      ],
      cardColor: "comic-card-pink",
    },
    {
      step: "PHASE 3 • UPCOMING",
      title: "Raydium Graduation & Global Cult",
      time: "GRADUATION",
      icon: "🚀",
      description:
        "Graduating pump.fun with 100% burned liquidity into Raydium. Multi-million market cap ascent.",
      items: [
        "Automatic Raydium LP Migration & Burn",
        "CoinGecko & CoinMarketCap Fast-Track",
        "Buy Slingtard A New Pair Of Rainbow Shades",
        "Tier-1 Meme Partnerships & Space Takeovers",
      ],
      cardColor: "comic-card-cyan",
    },
    {
      step: "PHASE 4 • THE DESTINY",
      title: "Flipping Every 'Smart' Dev",
      time: "SOLANA DOMINANCE",
      icon: "👑",
      description:
        "Proving that a united 0 IQ degen community is infinitely stronger than any cabal of over-promising devs.",
      items: [
        "$100M+ Market Cap Hyper-Meme Status",
        "Slingtard Statue with Real Rainbow Shades",
        "Zero Sell Pressure Ever From Dev",
        "Solana Retard-Core Supremacy",
      ],
      cardColor: "comic-card-yellow",
    },
  ];

  return (
    <section id="roadmap" className="relative py-16 sm:py-24 bg-[#ffd600] text-black overflow-hidden border-b-4 border-black comic-dots">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#ff007a]/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00f0ff]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-[#00f0ff] border-2 border-black shadow-[4px_4px_0px_#ff007a]">
            <Brain className="w-4 h-4 text-[#ffe600]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              THE 0 IQ MASTERPLAN & ROADMAP
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#fff]">
            Slingtard <span className="text-[#ff007a]">Roadmap</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-2xl mx-auto leading-relaxed">
            No empty whitepapers, no complex roadmaps. Just a ruthless, hilarious push from one green candle to the next.
          </p>
        </div>

        {/* 4 Step Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className={`${phase.cardColor} p-6 sm:p-7 flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-black text-white uppercase tracking-wider px-2.5 py-1 rounded-xl bg-black border border-black shadow-[2px_2px_0px_#ff007a]">
                    {phase.step}
                  </span>
                  <span className="text-3xl">{phase.icon}</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono font-black text-black/70 block">
                    {phase.time}
                  </span>
                  <h3 className="font-display font-black text-xl text-black leading-snug mt-1">
                    {phase.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-black font-bold leading-relaxed">
                  {phase.description}
                </p>

                <ul className="space-y-2 pt-2 border-t-2 border-black">
                  {phase.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs font-sans text-black font-bold flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff007a] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t-2 border-black flex items-center justify-between text-[11px] font-mono text-black font-bold">
                <span>Phase {idx + 1} of 4</span>
                <Zap className="w-3.5 h-3.5 text-[#ff007a]" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="max-w-4xl mx-auto comic-card p-8 bg-white border-4 border-black text-center space-y-4 shadow-[8px_8px_0px_#000]">
          <h3 className="font-comic text-2xl sm:text-3xl text-black">
            “Join the Most Unhinged Community on Solana”
          </h3>
          <p className="font-sans text-sm sm:text-base text-black font-bold max-w-xl mx-auto leading-relaxed">
            The brotherhood gathers daily on X to raid, share 0 IQ memes, and ride the unstoppable momentum of {SLINGTARD_NAME}.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={X_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn inline-flex items-center gap-2 px-6 py-3.5 bg-black hover:bg-[#1a1a24] text-white font-display font-bold text-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Join Official X Community</span>
            </a>

            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn inline-flex items-center gap-2 px-6 py-3.5 bg-[#ff007a] hover:bg-[#ff1a80] text-white font-display font-black text-xs"
            >
              <span>💊 Pump {SLINGTARD_TICKER} on Pump.fun</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
