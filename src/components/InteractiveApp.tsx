import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Calculator, Sparkles, RefreshCw, Coins, Compass, Heart, Feather } from "lucide-react";

interface FloatingSpark {
  id: number;
  x: number;
  y: number;
  size: number;
  text: string;
}

export default function InteractiveApp() {
  const [sparkCount, setSparkCount] = useState(0);
  const [curiosityRank, setCuriosityRank] = useState("Dawn Market Wanderer");
  const [solInvestment, setSolInvestment] = useState(1);
  const [floatingSparks, setFloatingSparks] = useState<FloatingSpark[]>([]);
  const sparkIdRef = useRef(0);

  const marketLoreQuotes = [
    "CURIOSITY CREATES OPPORTUNITY!",
    "A LEGEND IN EVERY PAWSTEP!",
    "SEES WHAT OTHERS MISS!",
    "WANDERED INTO THE MARKET AT DAWN!",
    "CURIOUS, CALM, AND TIMELESS!",
    "TURNING ORDINARY INTO EXTRAORDINARY!",
    "A SPARK OF FELINE LUCK!",
    "A GOLDEN FIGURE ON THE WINDOWSILL!",
    "NO ONE KNOWS WHERE SHE CAME FROM!",
    "PATIENCE IN THE QUIET DETAILS!"
  ];

  const handleSparkTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSparkCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 100) setCuriosityRank("👑 Legendary Market Pioneer");
      else if (newCount >= 50) setCuriosityRank("✨ Golden Opportunity Master");
      else if (newCount >= 25) setCuriosityRank("📜 Curious Alley Explorer");
      else if (newCount >= 10) setCuriosityRank("🐾 Windowsill Observer");
      else setCuriosityRank("Dawn Market Wanderer");
      return newCount;
    });

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomQuote = marketLoreQuotes[Math.floor(Math.random() * marketLoreQuotes.length)];
    const randomSize = Math.floor(Math.random() * 24) + 20;

    const newSpark: FloatingSpark = {
      id: sparkIdRef.current++,
      x,
      y: y - 20,
      size: randomSize,
      text: randomQuote,
    };

    setFloatingSparks((prev) => [...prev, newSpark]);

    setTimeout(() => {
      setFloatingSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
    }, 1600);
  };

  const calculateStats = (sol: number) => {
    const cashcateTokens = Math.floor(sol * 10000000);
    const curiosityIndex = Math.min(100, 95 + sol * 0.05).toFixed(1);
    const opportunitySparks = Math.floor(sol * 1750);
    const timelessMultiplier = (sol * 12.5).toFixed(1);
    return { cashcateTokens, curiosityIndex, opportunitySparks, timelessMultiplier };
  };

  const stats = calculateStats(solInvestment);

  return (
    <section id="interactive-lounge" className="relative py-20 sm:py-28 bg-[#f8edd1] text-[#1c1305] overflow-hidden border-t-2 border-b-2 border-[#b48c3c] vintage-ledger-grid selection:bg-[#fde047] selection:text-[#1c1305]">
      
      {/* Background warm golden ambient glows */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-[#f59e0b]/25 blur-[140px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-[#fbbf24]/30 blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fcf6e8] border border-[#b48c3c] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#78350f]">
              INTERACTIVE SANCTUARY
            </span>
          </div>

          <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#1c1305] tracking-tight uppercase">
            Curiosity & Opportunity <span className="text-[#b45309]">Lounge</span>
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#78350f] font-semibold max-w-2xl mx-auto">
            Tap the Golden Cashcate Medallion to unleash market sparks, unlock timeless ranks, and simulate your $cashcate curiosity potential!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Interactive Tap & Lore Spark Generator */}
          <div className="lg:col-span-6 parchment-card p-6 sm:p-8 rounded-sm border-2 border-[#b48c3c] shadow-xl flex flex-col justify-between relative overflow-hidden text-[#1c1305]">
            
            {/* Top pushpins on corners */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 rounded-full bg-[#1c1305] border-2 border-[#78350f]"></div>
            <div className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full bg-[#1c1305] border-2 border-[#78350f]"></div>

            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-[#cbb07a] pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#faedd0] text-[#78350f] text-xs font-mono font-bold border border-[#b48c3c]">
                  <Award className="w-3.5 h-3.5 text-[#b45309]" /> Curiosity Resonator
                </span>
                <span className="text-xs font-mono font-bold text-[#92400e] uppercase tracking-wider">
                  Live Market Sparks
                </span>
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#78350f]">
                  Golden Curiosity Sparks Generated
                </h3>
                <div className="font-serif font-black text-5xl sm:text-6xl text-[#b45309] tabular-nums drop-shadow-sm">
                  {sparkCount.toLocaleString()}
                </div>
                <div className="inline-block px-4 py-1.5 rounded bg-[#fef08a] border border-[#eab308] shadow-sm">
                  <span className="text-xs font-mono font-bold text-[#1c1305]">
                    Honorary Rank: <span className="text-[#b45309] font-black">{curiosityRank}</span>
                  </span>
                </div>
              </div>

              {/* Clicker Coin Area */}
              <div className="relative h-64 bg-[#faebd0]/80 rounded-sm border-2 border-dashed border-[#b48c3c] flex items-center justify-center group overflow-hidden">
                
                <button
                  onClick={handleSparkTap}
                  id="spark-cashcate-btn"
                  className="relative z-10 w-44 h-44 rounded-full p-2 bg-gradient-to-tr from-[#92400e] via-[#f59e0b] to-[#fef08a] shadow-[0_0_35px_rgba(217,119,6,0.45)] focus:outline-none group-hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer border-none"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-08-07_20-34-51.jpg?v=1786124116"
                    alt="Cashcate Spark Clicker"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-[#eab308]/10 group-hover:bg-transparent rounded-full transition-colors"></div>
                </button>

                <span className="absolute bottom-3 text-xs font-mono font-bold text-[#78350f] select-none text-center px-4">
                  🪙 TAP CASHCATE TO SPARK GOLDEN MARKET CURIOSITY!
                </span>

                {/* Floating Lore Sparks */}
                <AnimatePresence>
                  {floatingSparks.map((spark) => (
                    <motion.div
                      key={spark.id}
                      initial={{ opacity: 1, y: spark.y, x: spark.x, scale: 0.8 }}
                      animate={{ opacity: 0, y: spark.y - 120, scale: 1.15, x: spark.x + (Math.random() * 40 - 20) }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="absolute z-20 flex flex-col items-center pointer-events-none"
                    >
                      <div 
                        style={{ height: `${spark.size}px`, width: `${spark.size}px` }}
                        className="rounded-full bg-gradient-to-tr from-[#d97706] to-[#fde047] shadow-[0_0_15px_rgba(234,179,8,0.8)] opacity-80"
                      ></div>
                      <span className="mt-2 text-[10px] font-mono font-black text-[#1c1305] bg-[#fef08a] px-2.5 py-1 rounded shadow-md uppercase tracking-tight select-none border border-[#ca8a04]">
                        {spark.text}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>

            <div className="pt-5 mt-5 border-t border-[#cbb07a] flex justify-between items-center text-xs font-mono text-[#78350f]">
              <span className="font-semibold">
                “Curiosity can turn the ordinary into the extraordinary.”
              </span>
              <button
                onClick={() => {
                  setSparkCount(0);
                  setCuriosityRank("Dawn Market Wanderer");
                }}
                className="hover:text-[#1c1305] font-bold flex items-center gap-1 cursor-pointer border-none bg-transparent"
              >
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

          </div>

          {/* Golden Opportunity Calculator */}
          <div className="lg:col-span-6 parchment-card p-6 sm:p-8 rounded-sm border-2 border-[#b48c3c] shadow-xl flex flex-col justify-between text-[#1c1305] relative">
            
            {/* Pushpins */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 rounded-full bg-[#1c1305] border-2 border-[#78350f]"></div>
            <div className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full bg-[#1c1305] border-2 border-[#78350f]"></div>

            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-[#cbb07a] pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#faedd0] text-[#78350f] text-xs font-mono font-bold border border-[#b48c3c]">
                  <Calculator className="w-3.5 h-3.5 text-[#b45309]" /> Opportunity Simulator
                </span>
                <span className="text-xs font-mono font-bold text-[#92400e] uppercase tracking-wider">
                  $cashcate Ledger
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-lg font-black text-[#1c1305]">
                  Simulate Your Market Conviction
                </h3>
                <p className="text-xs font-serif text-[#78350f] leading-relaxed font-semibold">
                  Adjust the SOL slider to calculate estimated $cashcate tokens, serenity index, and golden opportunity multiplier!
                </p>
              </div>

              {/* Slider */}
              <div className="bg-[#faebd0]/90 p-5 rounded border border-[#cbb07a] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-[#78350f]">SIMULATED SOL ALLOCATION</span>
                  <span className="font-serif font-black text-2xl text-[#b45309]">{solInvestment} SOL</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solInvestment}
                  onChange={(e) => setSolInvestment(parseFloat(e.target.value))}
                  className="w-full h-2.5 bg-[#e5d2a8] rounded-lg appearance-none cursor-pointer accent-[#b45309]"
                />
                <div className="flex justify-between text-[10px] text-[#78350f] font-bold font-mono">
                  <span>0.1 SOL (Wanderer)</span>
                  <span>50 SOL (Windowsill)</span>
                  <span>100 SOL (Pioneer)</span>
                </div>
              </div>

              {/* Stats Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="p-4 rounded bg-[#fcf6e8] border border-[#cbb07a] text-center space-y-1 shadow-sm">
                  <span className="block text-[10px] font-bold text-[#78350f] uppercase tracking-wider font-mono">$cashcate TOKENS</span>
                  <span className="font-serif font-black text-xl sm:text-2xl text-[#b45309]">{stats.cashcateTokens.toLocaleString()}</span>
                </div>

                <div className="p-4 rounded bg-[#fcf6e8] border border-[#cbb07a] text-center space-y-1 shadow-sm">
                  <span className="block text-[10px] font-bold text-[#78350f] uppercase tracking-wider font-mono">CURIOSITY INDEX</span>
                  <span className="font-serif font-black text-xl sm:text-2xl text-[#d97706]">{stats.curiosityIndex}% 📜</span>
                </div>

                <div className="p-4 rounded bg-[#fcf6e8] border border-[#cbb07a] text-center space-y-1 shadow-sm">
                  <span className="block text-[10px] font-bold text-[#78350f] uppercase tracking-wider font-mono">COMPOSURE RATING</span>
                  <span className="font-serif font-black text-xl sm:text-2xl text-[#1c1305]">100% Serene</span>
                </div>

                <div className="p-4 rounded bg-[#fcf6e8] border border-[#cbb07a] text-center space-y-1 shadow-sm">
                  <span className="block text-[10px] font-bold text-[#78350f] uppercase tracking-wider font-mono">OPPORTUNITY POWER</span>
                  <span className="font-serif font-black text-xl sm:text-2xl text-[#b45309]">{stats.timelessMultiplier}x ⚡</span>
                </div>

              </div>

            </div>

            <div className="pt-5 mt-5 border-t border-[#cbb07a] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#78350f] font-serif font-semibold text-center sm:text-left">
                Join the Cashcate sanctuary on Solana!
              </span>
              <button
                onClick={() => {
                  const element = document.getElementById("tokenomics");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#261a08] hover:bg-[#38260d] text-[#fef08a] font-mono font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-[#785317]"
              >
                <Coins className="w-4 h-4 text-[#facc15]" /> View Golden Ledger
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
