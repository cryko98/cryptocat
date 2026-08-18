import React from "react";
import {
  Crown,
  Sparkles,
  Flame,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Send,
} from "lucide-react";
import {
  CATSEYE_NAME,
  CATSEYE_TICKER,
  PUMPFUN_URL,
  TELEGRAM_URL,
} from "../constants";

export default function AuraRoadmap() {
  const phases = [
    {
      phaseNumber: "PHASE 01",
      phaseTitle: "The Feline Awakening",
      status: "COMPLETED",
      statusColor: "bg-[#00f076] text-black",
      description: "Deploy $catseye on pump.fun, assemble the Telegram group, and initiate the cat meta takeover.",
      items: [
        "Fair launch on pump.fun (0% dev allocations)",
        "Launch of official Telegram group (t.me/catseyetggroup)",
        "Establishing the narrative: Cat supremacy over the $5M bull",
        "Initial 1,000+ dedicated feline holders",
      ],
      icon: "🐱",
      cardColor: "bg-[#eafff3] border-[#00c961]",
    },
    {
      phaseNumber: "PHASE 02",
      phaseTitle: "Overtaking the $5M Bull",
      status: "IN PROGRESS",
      statusColor: "bg-black text-white",
      description: "Surpass the $5,000,000 market cap mark set by the bulls and claim the top trending position.",
      items: [
        "DexScreener boost & animated banner update",
        "Flipping the Bull's Eye token in volume and holders",
        "Viral Telegram and X raid competitions",
        "Community voice stages and cat meme rewards",
      ],
      icon: "👑",
      cardColor: "bg-white border-black",
    },
    {
      phaseNumber: "PHASE 03",
      phaseTitle: "Raydium DEX Velocity",
      status: "UPCOMING",
      statusColor: "bg-gray-200 text-black",
      description: "Graduate from pump.fun bonding curve with 100% LP tokens burned forever to Raydium.",
      items: [
        "100% bonding curve completion on pump.fun",
        "Liquidity locked and burned forever",
        "CoinGecko & CoinMarketCap fast-track verification",
        "Solana cat ecosystem partnerships",
      ],
      icon: "🚀",
      cardColor: "bg-white border-black",
    },
    {
      phaseNumber: "PHASE 04",
      phaseTitle: "Solana Cat Hegemony",
      status: "VISION",
      statusColor: "bg-gray-200 text-black",
      description: "Establish CAT'S EYE ($catseye) alongside the legendary tier-1 Solana cats.",
      items: [
        "Tier-1 Centralized Exchange (CEX) listings",
        "Official CAT'S EYE apparel & interactive mobile apps",
        "Decentralized feline DAO treasury governance",
        "Centering $catseye at the 9-figure valuation tier",
      ],
      icon: "💎",
      cardColor: "bg-white border-black",
    },
  ];

  return (
    <section id="roadmap" className="relative py-16 sm:py-24 bg-white text-black overflow-hidden border-b-4 border-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white border-2 border-black shadow-[4px_4px_0px_#00f076]">
            <Crown className="w-4 h-4 text-[#00f076]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              ROADMAP TO CAT SUPREMACY
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#00f076]">
            The <span className="text-[#00c961]">CAT'S EYE</span> Trajectory
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-xl mx-auto">
            From launching on pump.fun to flipping the $5M bull and conquering the entire Solana ecosystem.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className={`cat-card ${phase.cardColor} p-6 sm:p-8 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-200 relative`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{phase.icon}</span>
                    <span className="font-comic text-xl text-black">{phase.phaseNumber}</span>
                  </div>
                  <span className={`text-[10px] font-mono font-black px-3 py-1 rounded-full border border-black shadow-[2px_2px_0px_#000] ${phase.statusColor}`}>
                    {phase.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-2xl text-black">
                    {phase.phaseTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/80 font-bold mt-1 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Checklist */}
                <div className="space-y-2 pt-2 border-t-2 border-black/10">
                  {phase.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2.5 text-xs font-mono font-bold text-black">
                      <CheckCircle2 className="w-4 h-4 text-[#00a850] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between text-xs font-mono font-black text-black">
                <span>PHASE {idx + 1} OF 04</span>
                <span className="text-[#00a850]">UNSTOPPABLE FELINE META</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA */}
        <div className="text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cat-btn cat-btn-tg inline-flex items-center gap-2 px-6 py-4 text-white font-display font-bold text-sm sm:text-base"
          >
            <Send className="w-5 h-5 fill-current" />
            <span>Join Telegram: t.me/catseyetggroup</span>
          </a>

          <a
            href={PUMPFUN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cat-btn cat-btn-green inline-flex items-center gap-2 px-6 py-4 text-black font-display font-black text-sm sm:text-base"
          >
            <span>💊 Buy {CATSEYE_TICKER} on Pump.fun</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
