import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Calculator, Sparkles, RefreshCw, Eye, Zap, Flame } from "lucide-react";

interface FloatingAura {
  id: number;
  x: number;
  y: number;
  size: number;
  text: string;
}

export default function InteractiveApp() {
  const [auraCount, setAuraCount] = useState(0);
  const [auraRank, setAuraRank] = useState("Junior Feline Resonator");
  const [solInvestment, setSolInvestment] = useState(1);
  const [floatingAuras, setFloatingAuras] = useState<FloatingAura[]>([]);
  const auraIdRef = useRef(0);

  const auraQuotes = [
    "432 HZ RESONANCE!",
    "PURE AURA!",
    "IRIDESCENT ABUNDANCE!",
    "$auracat!",
    "SERENE CONVICTION!",
    "NOISE TRANSMUTED!",
    "SOLANA APEX AURA!",
    "HIGH VIBRATION!",
    "COSMIC HARMONY!",
    "INFINITE LIGHT!"
  ];

  const handleResonate = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAuraCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 100) setAuraRank("👑 SUPREME COSMIC AURA TITAN");
      else if (newCount >= 50) setAuraRank("🔮 High Sanctuary Master");
      else if (newCount >= 25) setAuraRank("✨ Distinguished Vibrational Guardian");
      else if (newCount >= 10) setAuraRank("🐾 Radiant Aura Initiate");
      else setAuraRank("Junior Feline Resonator");
      return newCount;
    });

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomText = auraQuotes[Math.floor(Math.random() * auraQuotes.length)];
    const randomSize = Math.floor(Math.random() * 30) + 25;

    const newAura: FloatingAura = {
      id: auraIdRef.current++,
      x,
      y: y - 20,
      size: randomSize,
      text: randomText,
    };

    setFloatingAuras((prev) => [...prev, newAura]);

    setTimeout(() => {
      setFloatingAuras((prev) => prev.filter((s) => s.id !== newAura.id));
    }, 1500);
  };

  const calculateStats = (sol: number) => {
    const auracatTokens = Math.floor(sol * 9800000);
    const auraHarmony = Math.min(100, 85 + sol * 0.2).toFixed(1);
    const noiseTransmuted = Math.floor(sol * 1680);
    const frequencyMultiplier = (sol * 18.0).toFixed(1);
    return { auracatTokens, auraHarmony, noiseTransmuted, frequencyMultiplier };
  };

  const stats = calculateStats(solInvestment);

  return (
    <section id="interactive-lounge" className="relative py-20 sm:py-28 bg-[#090314] text-white overflow-hidden border-t border-b border-[#3b186b]">
      
      {/* Background Iridescent Aura Glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-purple-600/25 blur-[140px] animate-aura-shift"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-pink-600/20 blur-[140px] animate-aura-shift"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 bg-[#160830] px-4 py-2 rounded-full border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            ✨ INTERACTIVE AURA SANCTUARY
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            Aura Cat <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Resonance Simulator</span>
          </h2>
          <p className="text-purple-200/80 font-sans font-semibold text-base sm:text-lg">
            Tap Aura Cat to elevate your vibrational frequency, unlock sovereign ranks, and calculate your $auracat energy potential!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Interactive Clicker Game */}
          <div className="lg:col-span-6 bg-[#130726]/95 p-6 sm:p-8 rounded-3xl border border-[#3b186b] shadow-2xl flex flex-col justify-between relative overflow-hidden text-white">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d041c] text-purple-300 text-xs font-mono font-bold border border-[#3b186b]">
                  <Award className="w-3.5 h-3.5 text-purple-400" /> Frequency Lounge
                </span>
                <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest">
                  Live Resonance Counter
                </span>
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-display text-base font-bold text-purple-200">Total Harmonic Pulses Resonated</h3>
                <div className="font-display font-black text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 tabular-nums drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                  {auraCount.toLocaleString()}
                </div>
                <p className="text-xs font-semibold text-purple-100 bg-[#0d041c]/90 inline-block px-3.5 py-1.5 rounded-full border border-purple-500/40">
                  Vibrational Rank: <span className="text-pink-400 font-black">{auraRank}</span>
                </p>
              </div>

              {/* Clicker Button Area */}
              <div className="relative h-64 bg-[#0d041c] rounded-2xl border border-[#3b186b] flex items-center justify-center group overflow-hidden">
                
                <button
                  onClick={handleResonate}
                  id="resonate-auracat-main-btn"
                  className="relative z-10 w-44 h-44 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.5)] focus:outline-none focus:ring-4 focus:ring-purple-400 group-hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer bg-[#130726]"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/auracat.png?v=1785688369"
                    alt="Aura Cat Resonance Simulator"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors"></div>
                </button>

                <span className="absolute bottom-3 text-xs font-mono font-bold text-purple-300 select-none animate-pulse text-center px-4">
                  🖱️ CLICK AURA CAT TO RADIATE 432 HZ ENERGY & HARMONY!
                </span>

                {/* Floating Aura Animations */}
                <AnimatePresence>
                  {floatingAuras.map((aura) => (
                    <motion.div
                      key={aura.id}
                      initial={{ opacity: 1, y: aura.y, x: aura.x, scale: 0.8 }}
                      animate={{ opacity: 0, y: aura.y - 120, scale: 1.2, x: aura.x + (Math.random() * 40 - 20) }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute z-20 flex flex-col items-center pointer-events-none"
                    >
                      <div 
                        style={{ height: `${aura.size}px`, width: `${aura.size}px` }}
                        className="rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 relative flex justify-center shadow-[0_0_18px_rgba(168,85,247,0.8)] opacity-75"
                      ></div>
                      <span className="mt-2 text-[10px] font-mono font-black text-white bg-purple-600 px-2 py-0.5 rounded-md shadow-xl uppercase tracking-tight select-none border border-white font-bold">
                        {aura.text}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-[#3b186b] flex justify-between items-center">
              <span className="text-xs text-purple-300 font-sans font-semibold">
                Tap Aura Cat to radiate cosmic serenity!
              </span>
              <button
                onClick={() => {
                  setAuraCount(0);
                  setAuraRank("Junior Feline Resonator");
                }}
                className="text-xs text-purple-300 hover:text-purple-100 font-bold flex items-center gap-1 cursor-pointer border-none bg-transparent"
              >
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

          </div>

          {/* Calculator */}
          <div className="lg:col-span-6 bg-[#130726]/95 p-6 sm:p-8 rounded-3xl border border-[#3b186b] shadow-2xl flex flex-col justify-between text-white">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d041c] text-purple-300 text-xs font-mono font-bold border border-[#3b186b]">
                  <Calculator className="w-3.5 h-3.5 text-purple-400" /> Abundance Simulator
                </span>
                <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest">
                  $auracat Calculator
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-white">Simulate Your Vibrational Alignment</h3>
                <p className="text-xs text-purple-200 leading-relaxed font-semibold">
                  Adjust the SOL amount to calculate your estimated $auracat token resonance and composure rating!
                </p>
              </div>

              {/* Slider */}
              <div className="bg-[#0d041c] p-5 rounded-2xl border border-[#3b186b] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-purple-300">SIMULATED POSITION</span>
                  <span className="font-display font-black text-xl text-purple-400">{solInvestment} SOL</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={solInvestment}
                  onChange={(e) => setSolInvestment(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#1b0a38] rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-[10px] text-purple-300 font-bold font-mono">
                  <span>0.1 SOL</span>
                  <span>50 SOL</span>
                  <span>100 SOL (Supreme Aura)</span>
                </div>
              </div>

              {/* Stats Metrics */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-[#0d041c] border border-[#3b186b] text-center space-y-1">
                  <span className="block text-[10px] font-bold text-purple-300 uppercase tracking-wider font-mono">$auracat TOKENS</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-purple-400">{stats.auracatTokens.toLocaleString()}</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0d041c] border border-[#3b186b] text-center space-y-1">
                  <span className="block text-[10px] font-bold text-purple-300 uppercase tracking-wider font-mono">AURA HARMONY</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-pink-400">{stats.auraHarmony}% ✨</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0d041c] border border-[#3b186b] text-center space-y-1">
                  <span className="block text-[10px] font-bold text-purple-300 uppercase tracking-wider font-mono">NOISE TRANSMUTED</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-cyan-300">{stats.noiseTransmuted} 🔮</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0d041c] border border-[#3b186b] text-center space-y-1">
                  <span className="block text-[10px] font-bold text-purple-300 uppercase tracking-wider font-mono">VIBRATION POWER</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-purple-200">{stats.frequencyMultiplier}x ⚡</span>
                </div>

              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-[#3b186b] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-purple-300 font-sans font-semibold text-center sm:text-left">
                Align your frequency and join the Aura Cat sanctuary!
              </span>
              <button
                onClick={() => {
                  const element = document.getElementById("roadmap");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-display font-black text-xs shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
              >
                <Sparkles className="w-4 h-4" /> View Aura Roadmap
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
