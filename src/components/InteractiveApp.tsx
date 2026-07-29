import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Calculator, Coins, RefreshCw, Flame, Sparkles } from "lucide-react";

interface FloatingSmoke {
  id: number;
  x: number;
  y: number;
  height: number;
  text: string;
}

export default function InteractiveApp() {
  const [puffCount, setPuffCount] = useState(0);
  const [gentlemanRank, setGentlemanRank] = useState("Junior Pipe Enthusiast");
  const [solInvestment, setSolInvestment] = useState(1);
  const [floatingSmokes, setFloatingSmokes] = useState<FloatingSmoke[]>([]);
  const smokeIdRef = useRef(0);

  const pipeQuotes = [
    "PUFF WISDOM!",
    "CLASSIC COMPOSURE!",
    "GREEN SMOKE!",
    "$pipedog!",
    "UNSHAKEABLE HOLD!",
    "NOISE IGNORED!",
    "GENTLEMAN KING!",
    "SOLANA APEX!",
    "SOLANA GENTLEMAN!",
    "DIAMOND PIPE!"
  ];

  const handlePuff = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPuffCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 100) setGentlemanRank("👑 LORD PIPE DOG APEX TITAN");
      else if (newCount >= 50) setGentlemanRank("📜 High Gentleman Lounge Master");
      else if (newCount >= 25) setGentlemanRank("💼 Distinguished Pipe Connoisseur");
      else if (newCount >= 10) setGentlemanRank("🍂 Vintage Pipe Enthusiast");
      else setGentlemanRank("Junior Pipe Enthusiast");
      return newCount;
    });

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomText = pipeQuotes[Math.floor(Math.random() * pipeQuotes.length)];
    const randomHeight = Math.floor(Math.random() * 40) + 25;

    const newSmoke: FloatingSmoke = {
      id: smokeIdRef.current++,
      x,
      y: y - 20,
      height: randomHeight,
      text: randomText,
    };

    setFloatingSmokes((prev) => [...prev, newSmoke]);

    setTimeout(() => {
      setFloatingSmokes((prev) => prev.filter((s) => s.id !== newSmoke.id));
    }, 1500);
  };

  const calculateStats = (sol: number) => {
    const pipedogTokens = Math.floor(sol * 8500000);
    const gentlemanComposure = Math.min(100, 80 + sol * 0.25).toFixed(1);
    const paperHandsOutclassed = Math.floor(sol * 1450);
    const greenSmokePower = (sol * 15.0).toFixed(1);
    return { pipedogTokens, gentlemanComposure, paperHandsOutclassed, greenSmokePower };
  };

  const stats = calculateStats(solInvestment);

  return (
    <section id="interactive-lounge" className="relative py-20 sm:py-28 bg-[#180f0a] text-[#fbf0da] overflow-hidden border-t border-b border-[#2d1b11]">
      
      {/* Background amber glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-[#92400e]/20 blur-[130px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-[#d97706]/20 blur-[130px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b] bg-[#251710] px-4 py-2 rounded-full border border-[#d97706]/40 shadow-md">
            🎮 INTERACTIVE PIPE LOUNGE
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#fbf0da] uppercase tracking-tight">
            Pipe Dog <span className="text-[#f59e0b]">Wisdom Simulator</span>
          </h2>
          <p className="text-[#e4cbaf] font-sans font-semibold text-base sm:text-lg">
            Puff the pipe to unlock gentleman wisdom, level up your rank, and calculate your $pipedog token power!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Interactive Clicker Game */}
          <div className="lg:col-span-6 bg-[#251710]/95 p-6 sm:p-8 rounded-3xl border border-[#4a2e1d] shadow-2xl flex flex-col justify-between relative overflow-hidden text-[#fbf0da]">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#140b07] text-[#f59e0b] text-xs font-mono font-bold border border-[#3e271a]">
                  <Award className="w-3.5 h-3.5 text-[#f59e0b]" /> Pipe Lounge Arena
                </span>
                <span className="text-xs font-mono font-bold text-[#d4bca0] uppercase tracking-widest">
                  Live Puff Counter
                </span>
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-display text-base font-bold text-[#e4cbaf]">Total Wisdom Puffs Exhaled</h3>
                <div className="font-display font-black text-5xl sm:text-6xl text-[#f59e0b] tabular-nums drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  {puffCount.toLocaleString()}
                </div>
                <p className="text-xs font-semibold text-[#fef3c7] bg-[#140b07]/90 inline-block px-3.5 py-1.5 rounded-full border border-[#d97706]/40">
                  Gentleman Rank: <span className="text-[#f59e0b] font-black">{gentlemanRank}</span>
                </p>
              </div>

              {/* Clicker Button Area */}
              <div className="relative h-64 bg-[#140b07] rounded-2xl border border-[#3e271a] flex items-center justify-center group overflow-hidden">
                
                <button
                  onClick={handlePuff}
                  id="puff-pipedog-main-btn"
                  className="relative z-10 w-44 h-44 rounded-full overflow-hidden border-4 border-[#d97706] shadow-[0_0_25px_rgba(217,119,6,0.4)] focus:outline-none focus:ring-4 focus:ring-[#f59e0b] group-hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer bg-[#251710]"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-29_11-30-45.jpg?v=1785313952"
                    alt="Pipe Dog Puff Simulator"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-[#d97706]/10 group-hover:bg-transparent transition-colors"></div>
                </button>

                <span className="absolute bottom-3 text-xs font-mono font-bold text-[#f59e0b] select-none animate-pulse text-center px-4">
                  🖱️ CLICK PIPE DOG TO PUFF WISDOM & EXHALE GREEN CANDLE SMOKE!
                </span>

                {/* Floating Smoke Animations */}
                <AnimatePresence>
                  {floatingSmokes.map((smoke) => (
                    <motion.div
                      key={smoke.id}
                      initial={{ opacity: 1, y: smoke.y, x: smoke.x, scale: 0.8 }}
                      animate={{ opacity: 0, y: smoke.y - 120, scale: 1.2, x: smoke.x + (Math.random() * 40 - 20) }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute z-20 flex flex-col items-center pointer-events-none"
                    >
                      <div 
                        style={{ height: `${smoke.height}px` }}
                        className="w-3 bg-[#f59e0b] rounded-sm relative flex justify-center shadow-[0_0_12px_#f59e0b]"
                      >
                        <div className="absolute top-[-8px] w-0.5 h-[calc(100%+16px)] bg-[#fef3c7]"></div>
                      </div>
                      <span className="mt-2 text-[10px] font-mono font-black text-[#120b08] bg-[#f59e0b] px-2 py-0.5 rounded-md shadow-xl uppercase tracking-tight select-none border border-white font-bold">
                        {smoke.text}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-[#3e271a] flex justify-between items-center">
              <span className="text-xs text-[#d4bca0] font-sans font-semibold">
                Click Pipe Dog to exhale green candle smoke!
              </span>
              <button
                onClick={() => {
                  setPuffCount(0);
                  setGentlemanRank("Junior Pipe Enthusiast");
                }}
                className="text-xs text-[#d4bca0] hover:text-[#f59e0b] font-bold flex items-center gap-1 cursor-pointer border-none bg-transparent"
              >
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

          </div>

          {/* Calculator */}
          <div className="lg:col-span-6 bg-[#251710]/95 p-6 sm:p-8 rounded-3xl border border-[#4a2e1d] shadow-2xl flex flex-col justify-between text-[#fbf0da]">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#140b07] text-[#f59e0b] text-xs font-mono font-bold border border-[#3e271a]">
                  <Calculator className="w-3.5 h-3.5 text-[#f59e0b]" /> Gentleman Profit Simulator
                </span>
                <span className="text-xs font-mono font-bold text-[#d4bca0] uppercase tracking-widest">
                  $pipedog Calculator
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-[#fbf0da]">Simulate Your SOL Bags</h3>
                <p className="text-xs text-[#e4cbaf] leading-relaxed font-semibold">
                  Adjust the SOL amount to calculate your estimated $pipedog token power and gentleman composure rating!
                </p>
              </div>

              {/* Slider */}
              <div className="bg-[#140b07] p-5 rounded-2xl border border-[#3e271a] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#d4bca0]">SIMULATED DEPOSIT</span>
                  <span className="font-display font-black text-xl text-[#f59e0b]">{solInvestment} SOL</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solInvestment}
                  onChange={(e) => setSolInvestment(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#251710] rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
                />
                <div className="flex justify-between text-[10px] text-[#d4bca0] font-bold font-mono">
                  <span>0.1 SOL</span>
                  <span>50 SOL</span>
                  <span>100 SOL (Lord Pipe Dog)</span>
                </div>
              </div>

              {/* Stats Metrics */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-[#140b07] border border-[#3e271a] text-center space-y-1">
                  <span className="block text-[10px] font-bold text-[#d4bca0] uppercase tracking-wider font-mono">$pipedog TOKENS</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-[#f59e0b]">{stats.pipedogTokens.toLocaleString()}</span>
                </div>

                <div className="p-4 rounded-xl bg-[#140b07] border border-[#3e271a] text-center space-y-1">
                  <span className="block text-[10px] font-bold text-[#d4bca0] uppercase tracking-wider font-mono">COMPOSURE RATING</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-emerald-400">{stats.gentlemanComposure}% 📜</span>
                </div>

                <div className="p-4 rounded-xl bg-[#140b07] border border-[#3e271a] text-center space-y-1">
                  <span className="block text-[10px] font-bold text-[#d4bca0] uppercase tracking-wider font-mono">PAPER HANDS OUTCLASSED</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-[#fbf0da]">{stats.paperHandsOutclassed} 🍂</span>
                </div>

                <div className="p-4 rounded-xl bg-[#140b07] border border-[#3e271a] text-center space-y-1">
                  <span className="block text-[10px] font-bold text-[#d4bca0] uppercase tracking-wider font-mono">GREEN SMOKE POWER</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-[#fef3c7]">{stats.greenSmokePower}x 💨</span>
                </div>

              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-[#3e271a] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#d4bca0] font-sans font-semibold text-center sm:text-left">
                Join the gentleman's lounge and secure your $pipedog position!
              </span>
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-[#120b08] font-display font-black text-xs shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
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
