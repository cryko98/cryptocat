import React from "react";
import {
  Target,
  Sparkles,
  Flame,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";
import {
  BULLSEYE_NAME,
  BULLSEYE_TICKER,
  PUMPFUN_URL,
  X_COMMUNITY_URL,
} from "../constants";

export default function AuraRoadmap() {
  const targets = [
    {
      targetNumber: "TARGET 01",
      phaseTitle: "The Grammatical Correction",
      status: "COMPLETED",
      statusColor: "bg-[#e60012] text-white",
      description: "Launch $bullseye on pump.fun with proper spelling, establish the X Community, and initiate the movement.",
      items: [
        "Fair launch on pump.fun (0% dev bags)",
        "Creation of official X Community & meme hub",
        "Fixing the 'BULLS'S EYE' spelling blunder on Solana",
        "Initial 1,000+ community target holders",
      ],
      icon: "🎯",
      cardColor: "bg-[#fff5f5] border-[#e60012]",
    },
    {
      targetNumber: "TARGET 02",
      phaseTitle: "Flipping The Typo Coin",
      status: "IN PROGRESS",
      statusColor: "bg-black text-white",
      description: "Surpass the market cap of the broken typo token and establish $bullseye as the definitive leader.",
      items: [
        "DexScreener update & banner verification",
        "Flipping the typo token in volume and market cap",
        "Viral X raids and target meme propagation",
        "Community spaces and target leaderboards",
      ],
      icon: "👑",
      cardColor: "bg-white border-black",
    },
    {
      targetNumber: "TARGET 03",
      phaseTitle: "Raydium Migration & Velocity",
      status: "UPCOMING",
      statusColor: "bg-gray-200 text-black",
      description: "Graduate from pump.fun bonding curve with 100% LP burned directly to Raydium.",
      items: [
        "100% Bonding curve completion on pump.fun",
        "LP tokens burned forever to Raydium",
        "CoinGecko & CoinMarketCap fast-track listing",
        "Multi-platform Solana ecosystem integrations",
      ],
      icon: "🚀",
      cardColor: "bg-white border-black",
    },
    {
      targetNumber: "TARGET 04",
      phaseTitle: "Center Bullseye Domination",
      status: "VISION",
      statusColor: "bg-gray-200 text-black",
      description: "Global community expansion and premier meme status on the Solana blockchain.",
      items: [
        "Tier-1 CEX listing outreach",
        "Official Bullseye target merchandise & arcade games",
        "Top-ranking Solana community DAO governance",
        "Hitting the 9-figure market cap center bullseye",
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white border-2 border-black shadow-[4px_4px_0px_#e60012]">
            <Target className="w-4 h-4 text-[#e60012]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              TARGET TRAJECTORY ROADMAP
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#e60012]">
            The <span className="text-[#e60012]">Bullseye</span> Targets
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-xl mx-auto">
            From correcting a Solana spelling catastrophe to leading the entire meme meta. Here is our direct target trajectory.
          </p>
        </div>

        {/* 4 Target Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {targets.map((target, idx) => (
            <div
              key={idx}
              className={`target-card ${target.cardColor} p-6 sm:p-8 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-200 relative`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{target.icon}</span>
                    <span className="font-comic text-xl text-black">{target.targetNumber}</span>
                  </div>
                  <span className={`text-[10px] font-mono font-black px-3 py-1 rounded-full border border-black shadow-[2px_2px_0px_#000] ${target.statusColor}`}>
                    {target.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-2xl text-black">
                    {target.phaseTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/80 font-bold mt-1 leading-relaxed">
                    {target.description}
                  </p>
                </div>

                {/* Checklist */}
                <div className="space-y-2 pt-2 border-t-2 border-black/10">
                  {target.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2.5 text-xs font-mono font-bold text-black">
                      <CheckCircle2 className="w-4 h-4 text-[#e60012] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between text-xs font-mono font-black text-black">
                <span>PHASE {idx + 1} OF 04</span>
                <span className="text-[#e60012]">AIM FOR CENTER</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA */}
        <div className="text-center">
          <a
            href={PUMPFUN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="target-btn target-btn-red inline-flex items-center gap-2 px-8 py-4 text-white font-display font-black text-sm sm:text-base"
          >
            <span>🎯 Lock In Target: Buy {BULLSEYE_TICKER} on Pump.fun</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
