import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dumbbell, Sparkles, RefreshCw, Zap, Trophy, Flame, Shield, TrendingUp } from "lucide-react";
import { TELEGRAM_URL, GIGATOAD_LOGO, GIGATOAD_TICKER, GIGATOAD_CA } from "../constants";

interface FloatingVibe {
  id: number;
  x: number;
  y: number;
  size: number;
  text: string;
}

export default function InteractiveApp() {
  const [repCount, setRepCount] = useState(0);
  const [chadRank, setChadRank] = useState("Tadpole Lifter");
  const [solInvestment, setSolInvestment] = useState(1);
  const [floatingVibes, setFloatingVibes] = useState<FloatingVibe[]>([]);
  const vibeIdRef = useRef(0);

  const toadQuotes = [
    "LIGHTWEIGHT BABY!",
    "ANOTHER 500KG BENCH PRESS!",
    "PURE ALPHA POWER!",
    "NO WEAK HANDS IN THE GYM!",
    "SOLANA’S APEX PREDATOR!",
    "0% TAX, 100% HYPERTROPHY!",
    "GIGA GAINS ONLY!",
    "DIAMOND DELTOIDS!",
    "CHAD TOAD UNSTOPPABLE!",
    "GREEN CANDLES & HEAVY SQUATS!"
  ];

  const handleRepTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRepCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 100) setChadRank("👑 Apex Giga Chad Toad Monarch");
      else if (newCount >= 50) setChadRank("⚡ Master of Solana Hypertrophy");
      else if (newCount >= 25) setChadRank("💪 Shredded Iron Amphibian");
      else if (newCount >= 10) setChadRank("🏋️ Gym Bro Toad");
      else setChadRank("Tadpole Lifter");
      return newCount;
    });

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomQuote = toadQuotes[Math.floor(Math.random() * toadQuotes.length)];
    const randomSize = Math.floor(Math.random() * 16) + 18;

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
    }, 1500);
  };

  const calculateStats = (sol: number) => {
    const gigaTokens = Math.floor(sol * 1000000);
    const alphaScore = Math.min(100, 97.5 + sol * 0.05).toFixed(1);
    const benchPressKg = Math.floor(sol * 250 + 200);
    const chadMultiplier = (sol * 24.5).toFixed(1);
    return { gigaTokens, alphaScore, benchPressKg, chadMultiplier };
  };

  const stats = calculateStats(solInvestment);

  return (
    <section id="alpha-gym" className="relative py-16 sm:py-24 bg-[#0047db] text-white overflow-hidden border-t border-b border-white/20 selection:bg-[#00ff88] selection:text-[#003bb5]">
      
      {/* Soft background ambient glows */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-40">
        <div className="absolute top-[20%] left-[10%] w-80 h-80 rounded-full bg-[#00ff88]/15 blur-[150px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-[#0038b8] blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003bb5] border border-white/30 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#00ff88]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00ff88]">
              INTERACTIVE GIGA TOAD GYM & GAINS LAB
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            Alpha Power & <span className="text-[#00ff88]">Gains Station</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/95 font-medium max-w-2xl mx-auto">
            Tap Giga Toad to pump iron, level up your Solana Chad Rank, and calculate your maximum hypertrophy {GIGATOAD_TICKER} bag!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Interactive Tap & Reps Generator */}
          <div className="lg:col-span-6 giga-card p-6 sm:p-8 rounded-3xl border-2 border-white/40 shadow-xl flex flex-col justify-between relative overflow-hidden text-white">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#00319e] text-[#00ff88] text-xs font-mono font-bold border border-white/20">
                  <Dumbbell className="w-3.5 h-3.5" /> Giga-Rep Counter
                </span>
                <span className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider">
                  Real-Time Muscle Pumping
                </span>
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-display text-sm sm:text-base font-bold text-white/90 uppercase">
                  Total Heavy Reps Completed
                </h3>
                <div className="font-display font-black text-5xl sm:text-6xl text-[#00ff88] tabular-nums drop-shadow-[0_0_15px_rgba(0,255,136,0.4)]">
                  {repCount.toLocaleString()}
                </div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#00319e] border border-white/30 shadow-sm">
                  <span className="text-xs font-mono font-bold text-white">
                    Chad Rank: <span className="text-[#00ff88] font-black">{chadRank}</span>
                  </span>
                </div>
              </div>

              {/* Clicker Area */}
              <div className="relative h-64 bg-[#0038b5] rounded-2xl border-2 border-dashed border-white/40 flex items-center justify-center group overflow-hidden shadow-inner">
                
                {/* Floating gains on click */}
                <AnimatePresence>
                  {floatingVibes.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 1, y: item.y, x: item.x, scale: 0.8 }}
                      animate={{ opacity: 0, y: item.y - 120, x: item.x + (Math.random() * 40 - 20), scale: 1.2 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute pointer-events-none z-30 font-display font-black text-[#00ff88] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] whitespace-nowrap"
                      style={{ fontSize: `${item.size}px` }}
                    >
                      {item.text}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Big Muscle Tap Button */}
                <button
                  onClick={handleRepTap}
                  className="relative z-20 w-44 h-44 rounded-full bg-gradient-to-tr from-[#0038b5] via-[#0047db] to-[#00ff88] border-4 border-white shadow-[0_0_40px_rgba(0,255,136,0.4)] flex flex-col items-center justify-center p-3 text-center cursor-pointer hover:scale-105 active:scale-95 transition-transform group"
                  aria-label="Tap to pump iron with Giga Toad Pepe"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white mb-1 shadow-md">
                    <img
                      src={GIGATOAD_LOGO}
                      alt="Giga Toad Pepe"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="text-[11px] font-mono font-black text-[#003bb5] bg-[#00ff88] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    PUMP THE IRON
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-white/80">
              <span>Target: 100 reps for Apex Monarch</span>
              <button
                onClick={() => {
                  setRepCount(0);
                  setChadRank("Tadpole Lifter");
                }}
                className="hover:text-[#00ff88] flex items-center gap-1 underline cursor-pointer bg-transparent border-none text-white/80"
              >
                <RefreshCw className="w-3 h-3" /> Reset Reps
              </button>
            </div>

          </div>

          {/* $gigatoad Alpha Gains Calculator */}
          <div className="lg:col-span-6 giga-card p-6 sm:p-8 rounded-3xl border-2 border-white/40 shadow-xl flex flex-col justify-between text-white">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/20 pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#00319e] text-[#00ff88] text-xs font-mono font-bold border border-white/20">
                  <TrendingUp className="w-3.5 h-3.5" /> Hypertrophy Calculator
                </span>
                <span className="text-xs font-mono font-bold text-[#70d6ff]">
                  SOL to {GIGATOAD_TICKER}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-display font-bold text-sm text-white">
                    Select Your SOL Commitment:
                  </label>
                  <span className="font-mono font-black text-lg text-[#00ff88] bg-[#00319e] px-3 py-1 rounded-xl border border-white/20">
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
                  className="w-full h-3 bg-[#00319e] rounded-lg appearance-none cursor-pointer accent-[#00ff88]"
                />

                <div className="flex justify-between text-[11px] font-mono text-white/80">
                  <span>0.1 SOL (Warmup Set)</span>
                  <span>10 SOL (Heavy Lifting)</span>
                  <span>50 SOL (Giga Olympus)</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#0038b5] border border-white/20">
                  <span className="text-[10px] font-mono text-[#00ff88] uppercase font-bold block">
                    Estimated {GIGATOAD_TICKER} Bag
                  </span>
                  <span className="font-display font-black text-xl sm:text-2xl text-white">
                    {stats.gigaTokens.toLocaleString()}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#0038b5] border border-white/20">
                  <span className="text-[10px] font-mono text-[#00ff88] uppercase font-bold block">
                    Alpha Aura Rating
                  </span>
                  <span className="font-display font-black text-xl sm:text-2xl text-[#00ff88]">
                    {stats.alphaScore}%
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#0038b5] border border-white/20">
                  <span className="text-[10px] font-mono text-[#00ff88] uppercase font-bold block">
                    Equivalent Bench Press
                  </span>
                  <span className="font-display font-black text-xl sm:text-2xl text-white">
                    {stats.benchPressKg.toLocaleString()} kg
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#0038b5] border border-white/20">
                  <span className="text-[10px] font-mono text-[#00ff88] uppercase font-bold block">
                    Chad Multiplier
                  </span>
                  <span className="font-display font-black text-xl sm:text-2xl text-[#00ff88]">
                    {stats.chadMultiplier}x
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="p-3 rounded-2xl bg-[#00319e] border border-white/20 text-center">
                <span className="font-mono text-xs text-white/90">
                  Contract Address: <span className="text-[#00ff88] font-bold break-all">{GIGATOAD_CA}</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
