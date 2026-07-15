import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart, Calculator, Coins, RefreshCw } from "lucide-react";

interface FloatingCandle {
  id: number;
  x: number;
  y: number;
  height: number;
  text: string;
}

export default function InteractiveApp() {
  const [purrCount, setPurrCount] = useState(0);
  const [pettingLevel, setPettingLevel] = useState("Slightly barking");
  const [solInvestment, setSolInvestment] = useState(1);
  const [floatingCandles, setFloatingCandles] = useState<FloatingCandle[]>([]);
  const candleIdRef = useRef(0);

  // Sound effects text adapted to Bulldog
  const purrSounds = ["WOOF!", "BARK!", "DIAMOND PAWS!", "$BULLDOG!", "GREEN CANDLES!", "BULL RUN!", "UNLEASHED!", "LAMBO!", "YARD KING!"];

  const handlePetCat = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPurrCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 100) setPettingLevel("THE SUPREME BULLY PACK 👑");
      else if (newCount >= 50) setPettingLevel("Yard Guard Alpha 🏎️");
      else if (newCount >= 25) setPettingLevel("Heavy Spikes Activated 😎");
      else if (newCount >= 10) setPettingLevel("Incredibly Loud Woofs 😄");
      else setPettingLevel("Fierce Bull Dog on Solana 😸");
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

  // Happiness Math based on SOL investment adapted
  const calculateStats = (sol: number) => {
    const lambos = Math.floor(sol * 0.4);
    const wagFrequency = Math.min(120, 10 + sol * 5);
    const grinPercentage = Math.min(1000, 100 + sol * 9);
    const billsBurned = Math.floor(sol * 135);
    return { lambos, wagFrequency, grinPercentage, billsBurned };
  };

  const stats = calculateStats(solInvestment);

  return (
    <section id="interactive-cat" className="relative py-20 sm:py-28 bg-[#FCFAF6] overflow-hidden border-t border-b border-amber-200/40">
      
      {/* Absolute floating decorations */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[10%] left-[5%] w-16 h-16 rounded-full border border-amber-200/60 bg-amber-50/60 backdrop-blur-sm flex items-center justify-center shadow-md animate-float-slow">
          <span className="text-xl font-bold text-amber-600/70">₿</span>
        </div>
        <div className="absolute bottom-[10%] right-[8%] w-14 h-14 rounded-full border border-amber-200/60 bg-amber-50/60 backdrop-blur-sm flex items-center justify-center shadow-md animate-float-slower">
          <span className="text-lg font-bold text-amber-500/70">Ξ</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-2 rounded-full border border-amber-200 shadow-sm">
            🎮 Play & Interact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#451A03] uppercase italic tracking-tight">
            The Bull Dog's Degen Lounge
          </h2>
          <p className="text-amber-950/80 font-sans font-medium text-base">
            Test his bullish metrics, trigger barking multiplier candles, and watch how high the green bars stack!
          </p>
        </div>

        {/* Two Columns: Game and Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Interactive Clicker Game */}
          <div className="lg:col-span-6 bg-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-xl flex flex-col justify-between relative overflow-hidden text-amber-950">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-bold border border-amber-200 shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-amber-600 fill-current animate-pulse" /> Dog Bark Clicker
                </span>
                <span className="text-xs font-mono font-bold text-amber-800/40 uppercase tracking-widest">
                  Live local clicks
                </span>
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-display text-base font-bold text-amber-900">The Bull Dog's Strength Meter</h3>
                <div className="font-display font-black text-5xl sm:text-6xl text-amber-600 tabular-nums">
                  {purrCount.toLocaleString()}
                </div>
                <p className="text-xs font-semibold text-amber-800 bg-amber-50/50 inline-block px-3 py-1 rounded-full border border-amber-100">
                  Status: <span className="text-amber-700 font-black">{pettingLevel}</span>
                </p>
              </div>

              {/* Dog Clicker Area */}
              <div className="relative h-64 bg-amber-50/30 rounded-2xl border border-amber-100 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                <button
                  onClick={handlePetCat}
                  id="pet-cat-main-action"
                  className="relative z-10 w-44 h-44 rounded-full overflow-hidden border-4 border-amber-200 shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-500 group-hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/thebulldog.png?v=1784136622"
                    alt="The Bull Dog"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </button>

                {/* Ambient instructions */}
                <span className="absolute bottom-3 text-xs font-mono font-bold text-amber-800/80 select-none animate-pulse">
                  🖱️ CLICK ON THE DOG TO BARK MASSIVE CANDLES!
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
                      {/* Candlestick Graphic */}
                      <div 
                        style={{ height: `${candle.height}px` }}
                        className="w-2.5 bg-amber-500 rounded-sm relative flex justify-center"
                      >
                        <div className="absolute top-[-8px] w-0.5 h-[calc(100%+16px)] bg-amber-500"></div>
                      </div>
                      <span className="mt-2 text-[10px] font-mono font-black text-white bg-amber-600 px-1.5 py-0.5 rounded shadow-lg uppercase tracking-tight select-none border border-amber-500">
                        {candle.text}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-amber-200/40 flex justify-between items-center">
              <span className="text-xs text-amber-900/60 font-sans font-medium">
                Feed him clicks to level up the pack.
              </span>
              <button
                onClick={() => {
                  setPurrCount(0);
                  setPettingLevel("Slightly barking");
                }}
                className="text-xs text-amber-800/60 hover:text-amber-600 font-bold flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Reset count
              </button>
            </div>

          </div>

          {/* Portfolio Strength Calculator */}
          <div className="lg:col-span-6 bg-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-xl flex flex-col justify-between text-amber-950">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-bold border border-amber-200 shadow-sm">
                  <Calculator className="w-3.5 h-3.5" /> Yard Guard Calculator
                </span>
                <span className="text-xs font-mono font-bold text-amber-800/40 uppercase tracking-widest">
                  SOL Integration Simulator
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-amber-900">Simulate Your $BULLDOG Bag</h3>
                <p className="text-xs text-amber-950/70 leading-relaxed">
                  Drag the slider to define your potential investment in SOL and observe how it fuels The Bull Dog's protective bark power!
                </p>
              </div>

              {/* Slider Controls */}
              <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-amber-800/60">INVESTMENT AMOUNT</span>
                  <span className="font-display font-black text-xl text-amber-600">{solInvestment} SOL</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solInvestment}
                  onChange={(e) => setSolInvestment(parseFloat(e.target.value))}
                  className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[10px] text-amber-800/60 font-bold font-mono">
                  <span>0.1 SOL (Pup)</span>
                  <span>50 SOL (Smart Dog)</span>
                  <span>100 SOL (Alpha Bull)</span>
                </div>
              </div>

              {/* Output Stats Metrics */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Lambos */}
                <div className="p-4 rounded-xl bg-amber-50/30 border border-amber-100 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-amber-800/50 uppercase tracking-wider">LAMBOS IN GARAGE</span>
                  <span className="font-display font-black text-2xl text-[#451A03]">{stats.lambos || "0"} 🏎️</span>
                </div>

                {/* Bark Rate */}
                <div className="p-4 rounded-xl bg-amber-50/30 border border-amber-100 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-amber-800/50 uppercase tracking-wider">BARK ATTACK SPEED</span>
                  <span className="font-display font-black text-2xl text-[#451A03]">{stats.wagFrequency} Hz ⚡</span>
                </div>

                {/* Bark Power */}
                <div className="p-4 rounded-xl bg-amber-50/30 border border-amber-100 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-amber-800/50 uppercase tracking-wider font-mono">BULL POWER %</span>
                  <span className="font-display font-black text-2xl text-amber-600">{stats.grinPercentage}% 🐕</span>
                </div>

                {/* Paper Bills Burned */}
                <div className="p-4 rounded-xl bg-amber-50/30 border border-amber-100 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-amber-800/50 uppercase tracking-wider">PAPER FIAT DEVALUED</span>
                  <span className="font-display font-black text-2xl text-amber-700">{stats.billsBurned} 💵🔥</span>
                </div>

              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-amber-200/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-amber-800/60 font-sans font-medium text-center sm:text-left">
                Every green candlestick expands his guard perimeter!
              </span>
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-display font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
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
