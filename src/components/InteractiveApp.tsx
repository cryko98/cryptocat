import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Sparkles, RefreshCw, Send, Heart, Leaf, Smile, Waves } from "lucide-react";
import { TELEGRAM_URL, CHILLTOAD_LOGO } from "../constants";

interface FloatingVibe {
  id: number;
  x: number;
  y: number;
  size: number;
  text: string;
}

export default function InteractiveApp() {
  const [vibeCount, setVibeCount] = useState(0);
  const [chillRank, setChillRank] = useState("Tadpole Chiller");
  const [solInvestment, setSolInvestment] = useState(1);
  const [floatingVibes, setFloatingVibes] = useState<FloatingVibe[]>([]);
  const vibeIdRef = useRef(0);

  const toadQuotes = [
    "JUST CHILL, BRO!",
    "NO STRESS ON THE LILY PAD!",
    "VIBES ARE IMMACULATE!",
    "SERENE AS THE MORNING POND!",
    "UNBOTHERED & UNSTOPPABLE!",
    "0% TAX, 100% RELAXATION!",
    "CROAKING WITH PURE PEACE!",
    "PATIENCE WINS THE RACE!",
    "NEVER FUMBLED, JUST CHILLED!",
    "WATER IS CLEAR, MINDS ARE CALM!"
  ];

  const handleVibeTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVibeCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 100) setChillRank("👑 Ultimate Zen Toad Monarch");
      else if (newCount >= 50) setChillRank("🪷 Grand Lilypad Sage");
      else if (newCount >= 25) setChillRank("🍃 Serene Marsh Master");
      else if (newCount >= 10) setChillRank("🐸 Reed Lounger");
      else setChillRank("Tadpole Chiller");
      return newCount;
    });

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomQuote = toadQuotes[Math.floor(Math.random() * toadQuotes.length)];
    const randomSize = Math.floor(Math.random() * 20) + 18;

    const newVibe: FloatingVibe = {
      id: vibeIdRef.current++,
      x,
      y: y - 20,
      size: randomSize,
      text: randomQuote,
    };

    setFloatingVibes((prev) => [...prev, newVibe]);

    setTimeout(() => {
      setFloatingVibes((prev) => prev.filter((s) => s.id !== newVibe.id));
    }, 1600);
  };

  const calculateStats = (sol: number) => {
    const chillTokens = Math.floor(sol * 1000000);
    const serenityScore = Math.min(100, 96 + sol * 0.04).toFixed(1);
    const stressFreeHours = Math.floor(sol * 240);
    const chillMultiplier = (sol * 15.2).toFixed(1);
    return { chillTokens, serenityScore, stressFreeHours, chillMultiplier };
  };

  const stats = calculateStats(solInvestment);

  return (
    <section id="chill-lounge" className="relative py-20 sm:py-28 bg-[#081c15] text-white overflow-hidden border-t-2 border-b-2 border-[#2d6a4f] pond-water-grid selection:bg-[#74c69d] selection:text-[#081c15]">
      
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-[#2d6a4f]/30 blur-[140px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-[#52b788]/20 blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112d20] border border-[#52b788]/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#74c69d]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d8f3dc]">
              INTERACTIVE CHILL SANCTUARY
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            The Chill Toad Pepe <span className="text-[#74c69d]">Lounge</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#b7e4c7] font-medium max-w-2xl mx-auto">
            Tap the sacred Lily Pad to unleash serene vibes, upgrade your honorary Marsh Rank, and calculate your ultimate zero-stress $chilltoad bag!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Interactive Tap & Vibe Generator */}
          <div className="lg:col-span-6 pond-card p-6 sm:p-8 rounded-2xl border-2 border-[#52b788] shadow-xl flex flex-col justify-between relative overflow-hidden text-white">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-[#2d6a4f] pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#163824] text-[#74c69d] text-xs font-mono font-bold border border-[#52b788]">
                  <Award className="w-3.5 h-3.5" /> Chill-O-Meter
                </span>
                <span className="text-xs font-mono font-bold text-[#b7e4c7] uppercase tracking-wider">
                  Live Pond Ripples
                </span>
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-display text-sm sm:text-base font-bold text-[#b7e4c7]">
                  Serene Toad Vibes Generated
                </h3>
                <div className="font-display font-black text-5xl sm:text-6xl text-[#74c69d] tabular-nums drop-shadow-sm">
                  {vibeCount.toLocaleString()}
                </div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#112d20] border border-[#52b788] shadow-sm">
                  <span className="text-xs font-mono font-bold text-white">
                    Honorary Rank: <span className="text-[#74c69d] font-black">{chillRank}</span>
                  </span>
                </div>
              </div>

              {/* Clicker Lilypad Area */}
              <div className="relative h-64 bg-[#0c261b] rounded-xl border-2 border-dashed border-[#52b788]/60 flex items-center justify-center group overflow-hidden">
                
                {/* Floating Vibes on click */}
                <AnimatePresence>
                  {floatingVibes.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 1, y: item.y, x: item.x, scale: 0.8 }}
                      animate={{ opacity: 0, y: item.y - 120, x: item.x + (Math.random() * 40 - 20), scale: 1.2 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute pointer-events-none z-30 font-display font-black text-[#74c69d] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] whitespace-nowrap"
                      style={{ fontSize: `${item.size}px` }}
                    >
                      {item.text}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Big Lilypad Tap Button */}
                <button
                  onClick={handleVibeTap}
                  className="relative z-20 w-44 h-44 rounded-full bg-gradient-to-tr from-[#163824] via-[#2d6a4f] to-[#52b788] border-4 border-[#74c69d] shadow-[0_0_40px_rgba(82,183,136,0.4)] flex flex-col items-center justify-center p-3 text-center cursor-pointer hover:scale-105 active:scale-95 transition-transform group"
                  aria-label="Tap to generate chill toad vibes"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/50 mb-1 shadow-md">
                    <img
                      src={CHILLTOAD_LOGO}
                      alt="Chill Toad Pepe"
                      className="w-full h-full object-cover group-hover:rotate-6 transition-transform"
                    />
                  </div>
                  <span className="text-[11px] font-mono font-black text-[#081c15] bg-[#d8f3dc] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    TAP THE TOAD
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2d6a4f] flex items-center justify-between text-xs font-mono text-[#b7e4c7]">
              <span>Tap target: 100 vibes for Sage Rank</span>
              <button
                onClick={() => {
                  setVibeCount(0);
                  setChillRank("Tadpole Chiller");
                }}
                className="hover:text-white flex items-center gap-1 underline cursor-pointer bg-transparent border-none"
              >
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

          </div>

          {/* $chilltoad Serenity Bag Calculator */}
          <div className="lg:col-span-6 pond-card p-6 sm:p-8 rounded-2xl border-2 border-[#52b788] shadow-xl flex flex-col justify-between text-white">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-[#2d6a4f] pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#163824] text-[#74c69d] text-xs font-mono font-bold border border-[#52b788]">
                  <Waves className="w-3.5 h-3.5" /> Serenity Calculator
                </span>
                <span className="text-xs font-mono font-bold text-[#b7e4c7]">
                  SOL to $CHILLTOAD
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-display font-bold text-sm text-[#d8f3dc]">
                    Choose Your SOL Commitment:
                  </label>
                  <span className="font-mono font-black text-lg text-[#74c69d] bg-[#112d20] px-3 py-1 rounded-lg border border-[#2d6a4f]">
                    {solInvestment} SOL
                  </span>
                </div>

                <input
                  type="range"
                  min="0.1"
                  max="50"
                  step="0.1"
                  value={solInvestment}
                  onChange={(e) => setSolInvestment(parseFloat(e.target.value))}
                  className="w-full h-3 bg-[#112d20] rounded-lg appearance-none cursor-pointer accent-[#52b788]"
                />

                <div className="flex justify-between text-[11px] font-mono text-[#b7e4c7]">
                  <span>0.1 SOL (Casual Chill)</span>
                  <span>10 SOL (Marsh Guru)</span>
                  <span>50 SOL (Lilypad Legend)</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#0b2419] border border-[#2d6a4f]">
                  <span className="text-[10px] font-mono text-[#74c69d] uppercase font-bold block">
                    Estimated $chilltoad Bag
                  </span>
                  <span className="font-display font-black text-xl sm:text-2xl text-white">
                    {stats.chillTokens.toLocaleString()}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#0b2419] border border-[#2d6a4f]">
                  <span className="text-[10px] font-mono text-[#74c69d] uppercase font-bold block">
                    Peace of Mind Score
                  </span>
                  <span className="font-display font-black text-xl sm:text-2xl text-[#74c69d]">
                    {stats.serenityScore}%
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#0b2419] border border-[#2d6a4f]">
                  <span className="text-[10px] font-mono text-[#74c69d] uppercase font-bold block">
                    Stress-Free Hours Unlocked
                  </span>
                  <span className="font-display font-black text-xl sm:text-2xl text-white">
                    {stats.stressFreeHours.toLocaleString()} hrs
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#0b2419] border border-[#2d6a4f]">
                  <span className="text-[10px] font-mono text-[#74c69d] uppercase font-bold block">
                    Zen Multiplier
                  </span>
                  <span className="font-display font-black text-xl sm:text-2xl text-[#74c69d]">
                    {stats.chillMultiplier}x
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2d6a4f]">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#0088cc] hover:bg-[#0099e6] text-white font-display font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Join Official Telegram & Vibe with the Pond</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
