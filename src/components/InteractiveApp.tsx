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
  const [chirpCount, setChirpCount] = useState(0);
  const [cliqueLevel, setCliqueLevel] = useState("Slightly curious raccoon");
  const [solInvestment, setSolInvestment] = useState(1);
  const [floatingCandles, setFloatingCandles] = useState<FloatingCandle[]>([]);
  const candleIdRef = useRef(0);

  // Sound effects adapted to Casper the Albino Raccoon
  const raccoonSounds = [
    "CHIRP!",
    "SQUEAK!",
    "LUCKY CHARM!",
    "DIAMOND PAW!",
    "$Casper!",
    "GREEN CANDLES!",
    "1 in 750k!",
    "SOLANA MOON!",
    "COZY REHAB!",
    "HIP HEALED!"
  ];

  const handlePetRaccoon = (e: React.MouseEvent<HTMLButtonElement>) => {
    setChirpCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 100) setCliqueLevel("👑 THE SUPREME ALBINO RACCOON PACK");
      else if (newCount >= 50) setCliqueLevel("🚀 Wildwood Rehabilitator Alpha");
      else if (newCount >= 25) setCliqueLevel("🕶️ Diamond Hand Bandit");
      else if (newCount >= 10) setCliqueLevel("😄 Super Lucky Raccoon");
      else setCliqueLevel("🦝 Cozy Casper Fan");
      return newCount;
    });

    // Create a floating candle feedback
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomText = raccoonSounds[Math.floor(Math.random() * raccoonSounds.length)];
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
    const luckyMultipliers = (sol * 7.5).toFixed(1);
    const lightningProtection = Math.min(100, 50 + sol * 0.5);
    const cozyHammocks = Math.floor(sol * 3.5);
    const paperFiatBurned = Math.floor(sol * 148);
    return { luckyMultipliers, lightningProtection, cozyHammocks, paperFiatBurned };
  };

  const stats = calculateStats(solInvestment);

  return (
    <section id="interactive-raccoon" className="relative py-20 sm:py-28 bg-[#FFFDFD] overflow-hidden border-t border-b border-rose-100">
      
      {/* Absolute floating decorations */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[10%] left-[5%] w-16 h-16 rounded-full border border-rose-100 bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-sm animate-float-slow">
          <span className="text-xl font-bold text-rose-500/70">🍀</span>
        </div>
        <div className="absolute bottom-[10%] right-[8%] w-14 h-14 rounded-full border border-rose-100 bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-sm animate-float-slower">
          <span className="text-lg font-bold text-rose-400/70">⚡</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-800 bg-rose-50 px-3.5 py-2 rounded-full border border-rose-100 shadow-sm">
            🎮 Play & Interact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#4C0519] uppercase italic tracking-tight">
            Casper's Diamond Paw Simulator
          </h2>
          <p className="text-rose-950/80 font-sans font-semibold text-base">
            Activate the rarest albino raccoon multipliers, check your lightning strike protection, and feed Casper cozy clicks!
          </p>
        </div>

        {/* Two Columns: Game and Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Interactive Clicker Game */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-lg flex flex-col justify-between relative overflow-hidden text-rose-950">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-mono font-bold border border-rose-100 shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" /> Pet Casper Clicker
                </span>
                <span className="text-xs font-mono font-bold text-rose-800/40 uppercase tracking-widest">
                  Local lucky clicks
                </span>
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-display text-base font-bold text-rose-900">Casper's Good Luck Meter</h3>
                <div className="font-display font-black text-5xl sm:text-6xl text-rose-600 tabular-nums">
                  {chirpCount.toLocaleString()}
                </div>
                <p className="text-xs font-semibold text-rose-800 bg-rose-50/50 inline-block px-3 py-1 rounded-full border border-rose-100">
                  Rarity level: <span className="text-rose-700 font-black">{cliqueLevel}</span>
                </p>
              </div>

              {/* Raccoon Clicker Area */}
              <div className="relative h-64 bg-rose-50/20 rounded-2xl border border-rose-100/50 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                <button
                  onClick={handlePetRaccoon}
                  id="pet-raccoon-main-action"
                  className="relative z-10 w-44 h-44 rounded-full overflow-hidden border-4 border-rose-200 shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-400 group-hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/casper.png?v=1784562261"
                    alt="The Albino Raccoon Casper"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </button>

                {/* Ambient instructions */}
                <span className="absolute bottom-3 text-xs font-mono font-bold text-rose-800/80 select-none animate-pulse text-center px-4">
                  🖱️ CLICK CASPER TO INJECT PALE RED CANDLES!
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
                        className="w-2.5 bg-rose-400 rounded-sm relative flex justify-center"
                      >
                        <div className="absolute top-[-8px] w-0.5 h-[calc(100%+16px)] bg-rose-400"></div>
                      </div>
                      <span className="mt-2 text-[10px] font-mono font-black text-white bg-rose-600 px-1.5 py-0.5 rounded shadow-md uppercase tracking-tight select-none border border-rose-400">
                        {candle.text}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-rose-100 flex justify-between items-center">
              <span className="text-xs text-rose-900/60 font-sans font-semibold">
                Tap Casper to trigger maximum luck index.
              </span>
              <button
                onClick={() => {
                  setChirpCount(0);
                  setCliqueLevel("Slightly curious raccoon");
                }}
                className="text-xs text-rose-800/60 hover:text-rose-600 font-bold flex items-center gap-1 cursor-pointer border-none bg-transparent"
              >
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

          </div>

          {/* Portfolio Strength Calculator */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-lg flex flex-col justify-between text-rose-950">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-mono font-bold border border-rose-100 shadow-sm">
                  <Calculator className="w-3.5 h-3.5 text-rose-500" /> Luck Multiplier Calculator
                </span>
                <span className="text-xs font-mono font-bold text-rose-800/40 uppercase tracking-widest">
                  $Casper SOL Simulator
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-rose-900">Calculate Your Casper Fortune</h3>
                <p className="text-xs text-rose-950/70 leading-relaxed font-semibold">
                  Adjust the slider to simulate your SOL contribution and watch Casper's miracle algorithms amplify your luck indices!
                </p>
              </div>

              {/* Slider Controls */}
              <div className="bg-rose-50/30 p-5 rounded-2xl border border-rose-100/50 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-rose-800/60">SIMULATED AMOUNT</span>
                  <span className="font-display font-black text-xl text-rose-600">{solInvestment} SOL</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solInvestment}
                  onChange={(e) => setSolInvestment(parseFloat(e.target.value))}
                  className="w-full h-2 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
                />
                <div className="flex justify-between text-[10px] text-rose-800/60 font-bold font-mono">
                  <span>0.1 SOL (Pup)</span>
                  <span>50 SOL (Rare Companion)</span>
                  <span>100 SOL (Albino Legend)</span>
                </div>
              </div>

              {/* Output Stats Metrics */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Multipliers */}
                <div className="p-4 rounded-xl bg-rose-50/20 border border-rose-100/50 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-rose-800/50 uppercase tracking-wider">LUCK MULTIPLIER</span>
                  <span className="font-display font-black text-2xl text-[#4C0519]">{stats.luckyMultipliers}x 🍀</span>
                </div>

                {/* Lightning protection */}
                <div className="p-4 rounded-xl bg-rose-50/20 border border-rose-100/50 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-rose-800/50 uppercase tracking-wider">LIGHTNING PROTECTION</span>
                  <span className="font-display font-black text-2xl text-[#4C0519]">{stats.lightningProtection}% ⚡</span>
                </div>

                {/* Cozy Hammocks */}
                <div className="p-4 rounded-xl bg-rose-50/20 border border-rose-100/50 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-rose-800/50 uppercase tracking-wider font-mono">COZY HAMMOCKS</span>
                  <span className="font-display font-black text-2xl text-rose-600">{stats.cozyHammocks} 🛌</span>
                </div>

                {/* Fiat devalued */}
                <div className="p-4 rounded-xl bg-rose-50/20 border border-rose-100/50 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-rose-800/50 uppercase tracking-wider">FIAT PAPER DEVALUED</span>
                  <span className="font-display font-black text-2xl text-rose-700">${stats.paperFiatBurned} 💵🔥</span>
                </div>

              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-rose-800/60 font-sans font-semibold text-center sm:text-left">
                Keep Casper comfortable in his custom non-releasable habitat!
              </span>
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-display font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
              >
                <Coins className="w-4 h-4 text-white" /> Swap {solInvestment} SOL Now
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
