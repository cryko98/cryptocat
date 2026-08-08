import React from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, Send, CheckCircle2, ArrowRight, Leaf, Waves } from "lucide-react";
import { TELEGRAM_URL } from "../constants";

export default function AuraRoadmap() {
  const phases = [
    {
      step: "LILY PAD 1",
      title: "The First Ribbit",
      status: "COMPLETED",
      description: "Genesis of the Chill Toad, fair launch on Solana, Telegram sanctuary establishment, and initial vibes.",
      items: [
        "Fair launch with 0% tax",
        "100% LP Burned permanently",
        "Official Telegram launch: t.me/chilltoad",
        "First viral toad meme wave",
      ],
      icon: "🪷",
      color: "#52b788",
    },
    {
      step: "LILY PAD 2",
      title: "Expanding the Marsh",
      status: "CURRENT FOCUS",
      description: "Growing the global community of chillers, spreading zen toad philosophy across CT and Solana.",
      items: [
        "DexScreener & trend listing updates",
        "Daily community vibe spaces",
        "Collaborations with chill ecosystem creators",
        "Meme contest & webbed foot rewards",
      ],
      icon: "🐸",
      color: "#74c69d",
    },
    {
      step: "LILY PAD 3",
      title: "The Great Lily Pad Gathering",
      status: "UPCOMING",
      description: "Elevating the toad experience with custom tools, animations, and exclusive community events.",
      items: [
        "Interactive Toad Soundboard & Vibe App",
        "Community governance of the Pond Treasury",
        "Global ambient chill livestream",
        "Major Solana ecosystem alliances",
      ],
      icon: "🍃",
      color: "#52b788",
    },
    {
      step: "LILY PAD 4",
      title: "Eternal Zen Sanctuary",
      status: "FUTURE HORIZON",
      description: "Solidifying $chilltoad as the undisputed cultural standard for unbothered peace and meme greatness.",
      items: [
        "Pond DAO voting on community initiatives",
        "Real-world marsh preservation charity initiatives",
        "Multi-chain toad ambassadors",
        "Permanent legend in the Solana history books",
      ],
      icon: "👑",
      color: "#ffd166",
    },
  ];

  return (
    <section id="roadmap" className="relative py-20 sm:py-28 bg-[#081c15] text-white overflow-hidden border-b-2 border-[#2d6a4f] pond-water-grid selection:bg-[#74c69d] selection:text-[#081c15]">
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 rounded-full bg-[#52b788]/20 blur-[140px]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-72 h-72 rounded-full bg-[#2d6a4f]/25 blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112d20] border border-[#52b788]/60 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#74c69d]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d8f3dc]">
              LILY PAD HOPPING • THE EXPEDITION
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            Lily Pad <span className="text-[#74c69d]">Roadmap</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#b7e4c7] font-medium max-w-2xl mx-auto leading-relaxed">
            No frantic rushes, no impossible deadlines. Just a methodical, steady hop from one sunny lily pad to the next.
          </p>
        </div>

        {/* 4 Roadmap Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="pond-card p-6 sm:p-7 rounded-2xl border-2 border-[#52b788] shadow-xl flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#74c69d] uppercase tracking-wider px-2.5 py-1 rounded bg-[#163824] border border-[#52b788]">
                    {phase.step}
                  </span>
                  <span className="text-2xl">{phase.icon}</span>
                </div>

                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                    {phase.title}
                  </h3>
                  <div className="text-[10px] font-mono font-bold text-[#74c69d] mt-1">
                    STATUS: {phase.status}
                  </div>
                </div>

                <p className="font-sans text-xs text-[#b7e4c7] leading-relaxed">
                  {phase.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#2d6a4f]">
                  {phase.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs font-sans text-[#d8f3dc] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#74c69d] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#2d6a4f] flex items-center justify-between text-[11px] font-mono text-[#b7e4c7]">
                <span>Hop {idx + 1} of 4</span>
                <Leaf className="w-3.5 h-3.5 text-[#52b788]" />
              </div>
            </div>
          ))}
        </div>

        {/* Telegram Invitation Banner */}
        <div className="max-w-4xl mx-auto pond-card p-8 rounded-2xl border-2 border-[#52b788] text-center space-y-4">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            “Hop On the Lily Pad With Us”
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#b7e4c7] max-w-xl mx-auto leading-relaxed">
            The community gathers in the pond daily. Share your favorite toad art, relax with fellow holders, and enjoy the comfiest hold on Solana.
          </p>
          <div className="pt-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0088cc] hover:bg-[#0099e6] text-white font-display font-black text-sm shadow-xl transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Join t.me/chilltoad</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
