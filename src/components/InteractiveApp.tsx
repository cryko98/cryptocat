import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Skull, Calculator, Coins, RefreshCw, Zap } from "lucide-react";

interface FloatingCandle {
  id: number;
  x: number;
  y: number;
  height: number;
  text: string;
}

export default function InteractiveApp() {
  const [biteCount, setBiteCount] = useState(0);
  const [predatorRank, setPredatorRank] = useState("Baby Reef Shark Cat");
  const [solInvestment, setSolInvestment] = useState(1);
  const [floatingCandles, setFloatingCandles] = useState<FloatingCandle[]>([]);
  const candleIdRef = useRef(0);

  const sharkSounds = [
    "CHOMP!",
    "SHARK BITE!",
    "PAPER HANDS SHREDDED!",
    "SOLANA APEX!",
    "GREEN CANDLE!",
    "$sharkcat!",
    "BEARS OBLITERATED!",
    "RAZOR JAWS!",
    "OCEAN KING!",
    "DEEP SEA PUMP!"
  ];

  const handleBite = (e: React.MouseEvent<HTMLButtonElement>) => {
    setBiteCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 100) setPredatorRank("👑 SUPREME SOLANA APEX MEGASHARK CAT");
      else if (newCount >= 50) setPredatorRank("🦈 Great White Shark Cat Alpha");
      else if (newCount >= 25) setPredatorRank("🩸 Razor-Fanged Bull Shark Cat");
      else if (newCount >= 10) setPredatorRank("⚡ Tiger Shark Cat");
      else setPredatorRank("🐟 Hungry Reef Shark Cat");
      return newCount;
    });

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomText = sharkSounds[Math.floor(Math.random() * sharkSounds.length)];
    const randomHeight = Math.floor(Math.random() * 40) + 25;

    const newCandle: FloatingCandle = {
      id: candleIdRef.current++,
      x,
      y: y - 20,
      height: randomHeight,
      text: randomText,
    };

    setFloatingCandles((prev) => [...prev, newCandle]);

    setTimeout(() => {
      setFloatingCandles((prev) => prev.filter((c) => c.id !== newCandle.id));
    }, 1500);
  };

  const calculateStats = (sol: number) => {
    const sharkcatTokens = Math.floor(sol * 8500000);
    const bearProtection = Math.min(100, 75 + sol * 0.3).toFixed(1);
    const paperHandsShredded = Math.floor(sol * 1240);
    const greenCandlePower = (sol * 12.5).toFixed(1);
    return { sharkcatTokens, bearProtection, paperHandsShredded, greenCandlePower };
  };

  const stats = calculateStats(solInvestment);

  return (
    <section id="interactive-hunt" className="relative py-20 sm:py-28 bg-slate-900 text-white overflow-hidden border-t border-b border-slate-800">
      
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-sky-500/10 blur-[130px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-blue-600/10 blur-[130px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-300 bg-slate-800 px-4 py-2 rounded-full border border-sky-500/30 shadow-md">
            🎮 INTERACTIVE FEEDING ARENA
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tight">
            Shark Cat <span className="text-sky-400">Feeding Frenzy</span>
          </h2>
          <p className="text-slate-300 font-sans font-semibold text-base sm:text-lg">
            Unleash Shark Cat’s razor-sharp jaws, test your apex predator rank, and calculate your $sharkcat token power!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Interactive Clicker Game */}
          <div className="lg:col-span-6 bg-slate-800/90 p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-2xl flex flex-col justify-between relative overflow-hidden text-white">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-sky-400 text-xs font-mono font-bold border border-slate-700">
                  <Skull className="w-3.5 h-3.5 text-sky-400 animate-pulse" /> Feeding Frenzy Arena
                </span>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Live Bite Counter
                </span>
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-display text-base font-bold text-slate-300">Total Paper Hands Shredded</h3>
                <div className="font-display font-black text-5xl sm:text-6xl text-sky-400 tabular-nums drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  {biteCount.toLocaleString()}
                </div>
                <p className="text-xs font-semibold text-sky-300 bg-slate-900/80 inline-block px-3.5 py-1.5 rounded-full border border-sky-500/30">
                  Apex Rank: <span className="text-white font-black">{predatorRank}</span>
                </p>
              </div>

              {/* Clicker Button Area */}
              <div className="relative h-64 bg-slate-900/90 rounded-2xl border border-slate-700/80 flex items-center justify-center group overflow-hidden">
                
                <button
                  onClick={handleBite}
                  id="feed-sharkcat-main-btn"
                  className="relative z-10 w-44 h-44 rounded-full overflow-hidden border-4 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.4)] focus:outline-none focus:ring-4 focus:ring-sky-400 group-hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer bg-slate-950"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/shark.png?v=1785074178"
                    alt="Shark Cat Feeding Frenzy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-sky-500/10 group-hover:bg-transparent transition-colors"></div>
                </button>

                <span className="absolute bottom-3 text-xs font-mono font-bold text-sky-300/90 select-none animate-pulse text-center px-4">
                  🖱️ CLICK SHARK CAT TO CHOMP PAPER HANDS!
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
                      <div 
                        style={{ height: `${candle.height}px` }}
                        className="w-3 bg-sky-400 rounded-sm relative flex justify-center shadow-[0_0_12px_#38bdf8]"
                      >
                        <div className="absolute top-[-8px] w-0.5 h-[calc(100%+16px)] bg-sky-300"></div>
                      </div>
                      <span className="mt-2 text-[10px] font-mono font-black text-slate-950 bg-sky-400 px-2 py-0.5 rounded-md shadow-xl uppercase tracking-tight select-none border border-white font-bold">
                        {candle.text}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-700 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-sans font-semibold">
                Click Shark Cat to trigger green candle feeding frenzy!
              </span>
              <button
                onClick={() => {
                  setBiteCount(0);
                  setPredatorRank("Baby Reef Shark Cat");
                }}
                className="text-xs text-slate-400 hover:text-sky-400 font-bold flex items-center gap-1 cursor-pointer border-none bg-transparent"
              >
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

          </div>

          {/* Calculator */}
          <div className="lg:col-span-6 bg-slate-800/90 p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-2xl flex flex-col justify-between text-white">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-sky-400 text-xs font-mono font-bold border border-slate-700">
                  <Calculator className="w-3.5 h-3.5 text-sky-400" /> Apex Profit Calculator
                </span>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  $sharkcat Simulator
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-white">Simulate Your SOL Bags</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  Adjust the SOL amount to see your estimated $sharkcat token power and green candle impact!
                </p>
              </div>

              {/* Slider */}
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400">SIMULATED DEPOSIT</span>
                  <span className="font-display font-black text-xl text-sky-400">{solInvestment} SOL</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solInvestment}
                  onChange={(e) => setSolInvestment(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold font-mono">
                  <span>0.1 SOL</span>
                  <span>50 SOL</span>
                  <span>100 SOL (Apex Titan)</span>
                </div>
              </div>

              {/* Stats Metrics */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">$sharkcat TOKENS</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-sky-400">{stats.sharkcatTokens.toLocaleString()}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">BEAR PROTECTION</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-emerald-400">{stats.bearProtection}% 🛡️</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">PAPER HANDS SHREDDED</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-slate-200">{stats.paperHandsShredded} 🩸</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center space-y-1">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">GREEN CANDLE POWER</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-sky-300">{stats.greenCandlePower}x ⚡</span>
                </div>

              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-sans font-semibold text-center sm:text-left">
                Join the apex predator and lock in your $sharkcat position!
              </span>
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-display font-black text-xs shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
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
