import React from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, Send, CheckCircle2, Dumbbell, Zap, Trophy, ShieldAlert, Award } from "lucide-react";
import { GIGATOAD_NAME, GIGATOAD_TICKER, TELEGRAM_URL, PUMPFUN_URL } from "../constants";

export default function AuraRoadmap() {
  const phases = [
    {
      step: "PHASE 1: THE GENESIS REP",
      title: "Iron Awakening",
      status: "COMPLETED",
      description: "Genesis of Giga Toad Pepe on Solana, fair launch with 0% tax, 100% LP burned forever, and initial Chad momentum.",
      items: [
        "Fair launch with 0% tax & burned LP",
        "Official contract address verified on Solana",
        "Genesis viral meme & lifting raid waves",
        "DexScreener & Raydium integration",
      ],
      icon: "🏋️‍♂️",
      color: "#00ff88",
    },
    {
      step: "PHASE 2: PROGRESSIVE OVERLOAD",
      title: "Solana Market Raids",
      status: "CURRENT FOCUS",
      description: "Mobilizing tens of thousands of alpha traders to shatter resistance levels and dominate high-volume decentralized feeds.",
      items: [
        "Trending campaigns across DexScreener & CT",
        "Alpha meme competitions with massive PR prizes",
        "Daily community raid spaces & lifting sessions",
        "Ecosystem partnerships with Solana powerhouses",
      ],
      icon: "⚡",
      color: "#38bdf8",
    },
    {
      step: "PHASE 3: MAXIMUM HYPERTROPHY",
      title: "The Iron Olympus Gathering",
      status: "UPCOMING",
      description: "Elevating the Giga Toad brand with next-level interactive tools, custom artwork drops, and multi-tier rewards.",
      items: [
        "Interactive Alpha Gym & Soundboard ecosystem",
        "Community governance of the Chad Treasury",
        "Global high-octane live raids & chart pumps",
        "Tier-1 decentralized liquidity amplification",
      ],
      icon: "🏆",
      color: "#00ff88",
    },
    {
      step: "PHASE 4: IMMORTAL ALPHA DYNASTY",
      title: "Apex Predator of Solana",
      status: "FUTURE HORIZON",
      description: "Solidifying $GIGATOAD as the eternal standard of muscular greatness and financial dominance across Web3.",
      items: [
        "Chad DAO voting on strategic community growth",
        "Real-world fitness & athlete sponsorship initiatives",
        "Multi-chain Giga Toad ambassador squad",
        "Permanent legend in the Solana history archives",
      ],
      icon: "👑",
      color: "#ffd166",
    },
  ];

  return (
    <section id="roadmap" className="relative py-20 sm:py-28 bg-[#050d1a] text-white overflow-hidden border-b-2 border-[#1e3a8a] giga-blue-grid selection:bg-[#00ff88] selection:text-[#050d1a]">
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-[20%] w-80 h-80 rounded-full bg-[#00ff88]/10 blur-[150px]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-80 h-80 rounded-full bg-[#0052FF]/20 blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a2040] border border-[#00ff88]/60 shadow-sm">
            <Dumbbell className="w-3.5 h-3.5 text-[#00ff88]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00ff88]">
              PROGRESSIVE OVERLOAD • THE EXPEDITION
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            Alpha <span className="text-[#00ff88]">Roadmap</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
            No skipped workouts, no missed sets. Just a ruthless, steady push from one PR to the next.
          </p>
        </div>

        {/* 4 Roadmap Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="giga-card p-6 sm:p-7 rounded-2xl border-2 border-[#00ff88]/60 shadow-xl flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#00ff88] uppercase tracking-wider px-2.5 py-1 rounded bg-[#0c2244] border border-[#00ff88]/40">
                    {phase.step}
                  </span>
                  <span className="text-2xl">{phase.icon}</span>
                </div>

                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                    {phase.title}
                  </h3>
                  <div className="text-[10px] font-mono font-bold text-[#00ff88] mt-1">
                    STATUS: {phase.status}
                  </div>
                </div>

                <p className="font-sans text-xs text-white/80 leading-relaxed">
                  {phase.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#1e3a8a]">
                  {phase.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs font-sans text-white/90 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1e3a8a] flex items-center justify-between text-[11px] font-mono text-white/70">
                <span>Phase {idx + 1} of 4</span>
                <Zap className="w-3.5 h-3.5 text-[#00ff88]" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="max-w-4xl mx-auto giga-card p-8 rounded-2xl border-2 border-[#00ff88] text-center space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            “Join the Most Muscular Movement on Solana”
          </h3>
          <p className="font-sans text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
            The brotherhood gathers daily to push volume, share massive gains, and ride the unstoppable momentum of {GIGATOAD_NAME}.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            {TELEGRAM_URL ? (
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0088cc] hover:bg-[#0099e6] text-white font-display font-black text-sm shadow-xl transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Join Official Telegram</span>
              </a>
            ) : null}

            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#38bdf8] text-[#050d1a] font-display font-black text-sm shadow-xl transition-all hover:scale-105"
            >
              <Trophy className="w-4 h-4 text-[#050d1a]" />
              <span>Pump {GIGATOAD_TICKER} on Pump.fun</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
