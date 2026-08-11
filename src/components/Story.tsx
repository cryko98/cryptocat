import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Sparkles, Send, Dumbbell, Trophy, Zap, ShieldAlert, Award } from "lucide-react";
import { TELEGRAM_URL, GIGATOAD_LOGO } from "../constants";

export default function Story() {
  const [selectedChronicle, setSelectedChronicle] = useState<number>(0);

  const toadChronicles = [
    {
      id: "lore-1",
      tag: "THE ORIGIN • CHAPTER I",
      title: "Forged on the Iron Lily Pad — The Rise of the Alpha",
      subtitle: "The Genesis of Pure Muscular Greatness",
      quote: "While ordinary frogs hopped away from heavy weights, Giga Toad loaded another 500kg onto the bar.",
      fullText: [
        "In the deepest, most turbulent waters of the Solana blockchain, where weak-handed tadpoles washed away in the currents, one amphibian stood tall. He didn't just survive the volatility—he used it as progressive overload.",
        "Equipped with an unyielding mindset and massive iron lily pad barbells, Giga Toad Pepe began a rigorous training regimen. Every red candle became a deep squat; every consolidation became a 1,000-rep bench press session.",
        "From that moment on, the Solana ecosystem witnessed the birth of its ultimate apex titan: the most muscular, most alpha toad in the entire universe.",
      ],
      highlightPhrase: "Unshakable discipline, 1000kg bench press, pure hypertrophy",
      stat: "ALPHA TITAN • SOLANA UNIVERSE",
    },
    {
      id: "lore-2",
      tag: "ALPHA MENTALITY • CHAPTER II",
      title: "“Bench The Bear Market Into Green God Candles”",
      subtitle: "The Timeless Chad Toad Creed",
      quote: "FUD is just psychological cardio. Real Chads build massive portfolios with pure iron hands.",
      fullText: [
        "Some called his gains impossible. But the wise knew better—it was the pure law of hypertrophy and unwavering conviction. Giga Toad Pepe proved that true strength isn't about avoiding the dip; it's about benching the entire market back to all-time highs.",
        "While other communities panic over minor pullbacks, Giga Toad takes another scoop of pure Solana pre-workout, flexes his 24-inch green biceps, and leads the charge with massive green volume.",
        "Holding $GIGATOAD isn't just holding a memecoin; it's an initiation into the most jacked, high-testosterone brotherhood on Solana.",
      ],
      highlightPhrase: "No skipped workouts, no weak hands, pure gains",
      stat: "100% ALPHA GUARANTEE",
    },
    {
      id: "lore-3",
      tag: "SOLANA OLYMPUS • CHAPTER III",
      title: "Solana’s Most Jacked Amphibian Takes the Crown",
      subtitle: "Apex Predator of the Crypto Universe",
      quote: "The pond belongs to the strongest. The Giga Toad's jawline was carved by pure cryptographic proof-of-history.",
      fullText: [
        "Through every market cycle, thousands of skinny tokens appear and vanish. Yet whenever traders look toward the Giga Toad's gym sanctuary, they see an immovable mountain of muscle and green aura.",
        "“Did the validator stop pumping?” asks Giga Toad. “No. Did the iron get lighter? No. Then strap on your lifting belt, lock in, and push through the pain.”",
        "His alpha philosophy has transformed timid paper hands into stone-hard diamond chads capable of lifting generational wealth.",
      ],
      highlightPhrase: "Apex predator of the blockchain ecosystem",
      stat: "ZERO WEAKNESS RECORD",
    },
    {
      id: "lore-4",
      tag: "ETERNAL DYNASTY • CHAPTER IV",
      title: "The Giga Toad Pump Dynasty on Solana",
      subtitle: "The Eternal Alpha Community",
      quote: "Through bull runs and bear storms, Giga Toad's reign is etched in pure iron.",
      fullText: [
        "Today, the Giga Toad movement spans across every corner of the decentralized world. Tens of thousands of alpha traders gather daily to share PRs, push high-volume market raids, and flex their unstoppable momentum.",
        "With 0% tax, 100% burned liquidity pool, and zero corporate weak points, Giga Toad Pepe embodies the rawest power of community-driven Chad culture.",
        "The legend is written in green candles, verified on the blockchain, and carried forward by every believer who refuses to stay average.",
      ],
      highlightPhrase: "The most dominant community in the Solana universe",
      stat: "IMMORTAL CHAD LEGACY",
    },
  ];

  return (
    <section
      id="giga-lore"
      className="relative py-16 sm:py-24 bg-[#0047db] text-white overflow-hidden border-t border-b border-white/20 selection:bg-[#00ff88] selection:text-[#003bb5]"
    >
      {/* Soft Ambient Glow (No Grids) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-40">
        <div className="absolute top-[30%] left-[10%] w-[450px] h-[450px] bg-[#00ff88]/15 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#0038b8] rounded-full blur-[160px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003bb5] border border-white/30 shadow-sm">
            <Dumbbell className="w-3.5 h-3.5 text-[#00ff88]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00ff88]">
              THE CHRONICLES OF GIGA TOAD PEPE
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            The Lore of the <span className="text-[#00ff88]">Most Alpha Toad</span>
          </h2>
          <p className="font-sans text-base sm:text-xl text-white/95 font-medium max-w-2xl mx-auto">
            Discover the epic saga of how a muscle-bound amphibian forged in heavy iron became the undisputed king of the Solana universe.
          </p>
        </div>

        {/* 4 Interactive Parchment Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {toadChronicles.map((item, idx) => {
            const isSelected = selectedChronicle === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedChronicle(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative cursor-pointer ${
                  isSelected
                    ? "bg-[#0038b5] border-[#00ff88] shadow-[0_8px_30px_rgba(0,255,136,0.3)] scale-[1.02] ring-2 ring-[#00ff88]/40"
                    : "bg-[#003dbd]/80 border-white/20 hover:bg-[#0038b5] hover:border-white opacity-85 hover:opacity-100"
                }`}
              >
                {/* Floating Badge indicator if selected */}
                {isSelected && (
                  <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-[#00ff88] text-[#003bb5] text-[10px] font-mono font-black shadow-sm flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#003bb5]" /> ACTIVE CHAPTER
                  </div>
                )}

                <div className="space-y-2">
                  <span className="block text-[10px] font-mono font-bold text-[#00ff88] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <h3 className="font-display font-black text-lg text-white line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <span className="block text-xs font-sans text-white/80 font-medium">
                    {item.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Chronicle Reading Stand */}
        <AnimatePresence mode="wait">
          <motion.div
            key={toadChronicles[selectedChronicle].id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="giga-card p-8 sm:p-12 rounded-3xl border-2 border-white/40 shadow-2xl relative"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-6 mb-8">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#00ff88] uppercase tracking-widest block">
                  {toadChronicles[selectedChronicle].tag}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                  {toadChronicles[selectedChronicle].title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-[#00319e] text-[#00ff88] font-mono font-bold text-xs border border-white/20">
                  {toadChronicles[selectedChronicle].stat}
                </span>
              </div>
            </div>

            {/* Quote Block */}
            <div className="p-6 rounded-2xl bg-[#0038b5] border border-white/30 mb-8 relative">
              <span className="text-4xl text-[#00ff88] font-serif leading-none absolute top-2 left-3 opacity-50">“</span>
              <p className="font-serif italic text-lg sm:text-2xl text-white pl-6 font-medium leading-relaxed">
                {toadChronicles[selectedChronicle].quote}
              </p>
            </div>

            {/* Paragraph Content */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-white/95 leading-relaxed max-w-4xl">
              {toadChronicles[selectedChronicle].fullText.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Bottom highlight pill */}
            <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-[#00ff88]" />
                <span className="text-xs font-mono font-bold text-[#00ff88]">
                  {toadChronicles[selectedChronicle].highlightPhrase}
                </span>
              </div>

              {TELEGRAM_URL ? (
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#0088cc] hover:bg-[#0099e6] text-white font-mono font-bold text-xs flex items-center gap-2 shadow-md transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join the Giga Chat: Telegram</span>
                </a>
              ) : (
                <span className="px-4 py-2 rounded-xl bg-[#00319e] text-white font-mono font-bold text-xs border border-white/20">
                  ⚡ The Most Alpha Community on Solana
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
