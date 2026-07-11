import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart, Zap, Play, Calculator, Coins, TrendingUp, RefreshCw, Smile } from "lucide-react";

interface FloatingCandle {
  id: number;
  x: number;
  y: number;
  height: number;
  text: string;
}

export default function InteractiveApp() {
  const [purrCount, setPurrCount] = useState(0);
  const [pettingLevel, setPettingLevel] = useState("Slightly smiling");
  const [solInvestment, setSolInvestment] = useState(1);
  const [floatingCandles, setFloatingCandles] = useState<FloatingCandle[]>([]);
  const candleIdRef = useRef(0);

  // Sound effects text
  const purrSounds = ["CASH FLOW!", "STACK BILLS!", "$WIFCASH!", "GREEN CANDLE!", "MEOW-MONEY!", "LOUD PURRS!", "BASED!", "LAMBO!", "CASH KING!"];

  const handlePetCat = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPurrCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 100) setPettingLevel("DEGEN CASH SUPREME 👑");
      else if (newCount >= 50) setPettingLevel("Lamborghini Speedracer 🏎️");
      else if (newCount >= 25) setPettingLevel("Gold Chains fully on 😎");
      else if (newCount >= 10) setPettingLevel("Extremely Wealthy 😄");
      else setPettingLevel("Wealthiest Cat on Solana 😸");
      return newCount;
    });

    // Create a floating candle feedback
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomText = purrSounds[Math.floor(Math.random() * purrSounds.length)];
    const randomHeight = Math.floor(Math.random() * 40) + 20;

    const newCandle: FloatingCandle = {
      id: candleIdRef.current++,
      x,
      y: y - 20,
      height: randomHeight,
      text: randomText,
    };

    setFloatingCandles((prev) => [...prev, newCandle]);

    // Clear after 1.5s
    setTimeout(() => {
      setFloatingCandles((prev) => prev.filter((c) => c.id !== newCandle.id));
    }, 1500);
  };

  // Happiness Math based on SOL investment
  const calculateStats = (sol: number) => {
    const lambos = Math.floor(sol * 0.4);
    const wagFrequency = Math.min(120, 10 + sol * 5);
    const grinPercentage = Math.min(1000, 100 + sol * 9);
    const billsBurned = Math.floor(sol * 135);
    return { lambos, wagFrequency, grinPercentage, billsBurned };
  };

  const stats = calculateStats(solInvestment);

  return (
    <section id="interactive-cat" className="relative py-20 sm:py-28 bg-[#050806] overflow-hidden border-t border-b border-white/5">
      
      {/* Absolute floating decorations from prompt image */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[10%] left-[5%] w-16 h-16 rounded-full border border-white/10 bg-zinc-900/40 backdrop-blur-sm flex items-center justify-center shadow-sm animate-float-slow">
          <span className="text-xl font-bold text-[#10B981]/70">₿</span>
        </div>
        <div className="absolute bottom-[10%] right-[8%] w-14 h-14 rounded-full border border-white/10 bg-zinc-900/40 backdrop-blur-sm flex items-center justify-center shadow-sm animate-float-slower">
          <span className="text-lg font-bold text-[#F59E0B]/70">Ξ</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#10B981] bg-zinc-900 px-3.5 py-2 rounded-full border border-white/10">
            🎮 Play & Interact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase italic tracking-tight">
            Cat wif Cash's Degen Lounge
          </h2>
          <p className="text-zinc-400 font-sans font-medium text-base">
            Test his wealth metrics, pump stacks of green bills, and see what happens when you stack $WIFCASH!
          </p>
        </div>

        {/* Two Columns: Game and Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Interactive Purr Game */}
          <div className="lg:col-span-6 bg-zinc-900/80 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-mono font-bold border border-[#10B981]/20">
                  <Heart className="w-3.5 h-3.5 text-[#10B981] fill-current animate-pulse" /> Cash Clicker Game
                </span>
                <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
                  Live local score
                </span>
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-display text-lg font-bold text-zinc-300">Cat wif Cash's Wealth Meter</h3>
                <div className="font-display font-black text-5xl sm:text-6xl text-[#10B981] tabular-nums">
                  {purrCount.toLocaleString()}
                </div>
                <p className="text-xs font-semibold text-zinc-400 bg-black/50 inline-block px-3 py-1 rounded-full border border-white/5">
                  Status: <span className="text-[#10B981] font-black">{pettingLevel}</span>
                </p>
              </div>

              {/* Cat Clicker Area */}
              <div className="relative h-64 bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                {/* Embedded Cat Avatar representing the user's exact uploaded image style */}
                <button
                  onClick={handlePetCat}
                  id="pet-cat-main-action"
                  className="relative z-10 w-44 h-44 rounded-full overflow-hidden border-4 border-zinc-900 shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#10B981] group-hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-11_16-18-33.jpg?v=1783775937"
                    alt="Grinning Cat wif Cash"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </button>

                {/* Ambient instructions */}
                <span className="absolute bottom-3 text-xs font-mono font-bold text-[#10B981]/80 select-none animate-pulse">
                  🖱️ CLICK ON THE CAT TO PUMP STACKS!
                </span>

                {/* Floating Candle Animations */}
                <AnimatePresence>
                  {floatingCandles.map((candle) => (
                    <motion.div
                      key={candle.id}
                      initial={{ opacity: 1, y: candle.y, x: candle.x, scale: 0.8 }}
                      animate={{ opacity: 0, y: candle.y - 120, scale: 1.2, x: candle.x + (Math.random() * 40 - 20) }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute z-20 flex flex-col items-center pointer-events-none"
                    >
                      {/* Green Candlestick Graphic */}
                      <div 
                        style={{ height: `${candle.height}px` }}
                        className="w-2.5 bg-[#10B981] rounded-sm relative flex justify-center"
                      >
                        <div className="absolute top-[-8px] w-0.5 h-[calc(100%+16px)] bg-[#10B981]"></div>
                      </div>
                      <span className="mt-2 text-[10px] font-mono font-black text-black bg-[#10B981] px-1.5 py-0.5 rounded shadow-lg uppercase tracking-tight select-none">
                        {candle.text}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>

            <div className="pt-6 border-t border-white/5 flex justify-between items-center">
              <span className="text-xs text-zinc-500 font-sans font-medium">
                Feed him gains to level up.
              </span>
              <button
                onClick={() => {
                  setPurrCount(0);
                  setPettingLevel("Slightly smiling");
                }}
                className="text-xs text-zinc-500 hover:text-red-400 font-bold flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Reset count
              </button>
            </div>

          </div>

          {/* Portfolio Happiness Calculator */}
          <div className="lg:col-span-6 bg-zinc-900/80 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-mono font-bold border border-[#F59E0B]/20">
                  <Calculator className="w-3.5 h-3.5" /> Happiness Calculator
                </span>
                <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
                  SOL Integration Simulator
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-lg font-bold text-zinc-300">Simulate Your Bag Size</h3>
                <p className="text-xs text-zinc-400">
                  Drag the slider to define your potential investment in SOL and observe how it fuels Cat wif Cash's grin level!
                </p>
              </div>

              {/* Slider Controls */}
              <div className="bg-black/40 p-5 rounded-2xl border border-white/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-zinc-500">INVESTMENT AMOUNT</span>
                  <span className="font-display font-black text-xl text-[#10B981]">{solInvestment} SOL</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solInvestment}
                  onChange={(e) => setSolInvestment(parseFloat(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-bold font-mono">
                  <span>0.1 SOL (Lil bag)</span>
                  <span>50 SOL (Smart buy)</span>
                  <span>100 SOL (Money King)</span>
                </div>
              </div>

              {/* Output Stats Metrics */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Lambos */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">LAMBOS IN GARAGE</span>
                  <span className="font-display font-black text-2xl text-white">{stats.lambos || "0"} 🏎️</span>
                </div>

                {/* Tail Wag */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">TAIL WAG RATE</span>
                  <span className="font-display font-black text-2xl text-white">{stats.wagFrequency} Hz ⚡</span>
                </div>

                {/* Grin Percentage */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono">CASH GAUGE %</span>
                  <span className="font-display font-black text-2xl text-[#10B981]">{stats.grinPercentage}% 😁</span>
                </div>

                {/* Cash Bills Burned */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">PAPER FIAT DEVALUED</span>
                  <span className="font-display font-black text-2xl text-red-400">{stats.billsBurned} 💵🔥</span>
                </div>

              </div>

            </div>

            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-500 font-sans font-medium text-center sm:text-left">
                Every green candle elevates his joy!
              </span>
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-black hover:bg-[#10B981] hover:text-black border border-[#10B981]/20 hover:border-transparent text-[#10B981] font-display font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Coins className="w-4 h-4" /> Swap {solInvestment} SOL Now
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
