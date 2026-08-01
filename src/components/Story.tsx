import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShieldCheck, Quote, Flame, Award, Rocket, Orbit, Flag } from "lucide-react";

export default function Story() {
  const [activeTab, setActiveTab] = useState<"orbital" | "thrusters">("thrusters");
  const [showPuffEffect, setShowPuffEffect] = useState(false);

  const handleToggle = (tab: "orbital" | "thrusters") => {
    setActiveTab(tab);
    if (tab === "thrusters") {
      setShowPuffEffect(true);
      setTimeout(() => setShowPuffEffect(false), 2200);
    }
  };

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-[#110604] text-white overflow-hidden border-t border-[#3f160b]">
      {/* Background Martian red/orange glows */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute top-[20%] left-[-5%] w-80 h-80 bg-orange-600 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-red-600 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 bg-[#1c0805] px-4 py-2 rounded-full border border-orange-500/40 shadow-md">
            🪐 THE MARS CAT EXPEDITION
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            The First Feline on <span className="text-orange-500">Mars</span>
          </h2>
          <p className="text-orange-200/80 font-sans font-semibold text-base sm:text-lg">
            An iconic symbol of interplanetary courage, zero-G exploration, and unstoppable community momentum on Solana.
          </p>
        </div>

        {/* Interactive Stance Toggle */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#1c0805]/90 p-2 rounded-2xl flex max-w-md mx-auto border border-[#4f1b0f] shadow-2xl">
            <button
              onClick={() => handleToggle("orbital")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                activeTab === "orbital"
                  ? "bg-[#331109] text-orange-400 border border-orange-500/40 shadow-md"
                  : "text-orange-200/60 hover:text-white"
              }`}
            >
              <Orbit className="w-4 h-4 text-orange-400" />
              Orbital Trajectory
            </button>
            <button
              onClick={() => handleToggle("thrusters")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                activeTab === "thrusters"
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white font-black shadow-lg"
                  : "text-orange-200/60 hover:text-white"
              }`}
            >
              <Rocket className="w-4 h-4" />
              Thruster Ignition
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Visual Stance Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border transition-all relative overflow-hidden bg-[#1a0805]/95 border-[#4f1b0f] shadow-2xl">
            
            <AnimatePresence mode="wait">
              {activeTab === "orbital" ? (
                <motion.div
                  key="orbital-mode"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3.5 rounded-2xl bg-[#0b0302] text-orange-400 border border-[#3f160b]">
                      <Orbit className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-white uppercase">
                      Deep Space Composure
                    </h3>
                    <p className="text-sm text-orange-100/80 font-sans leading-relaxed font-medium">
                      Asteroid belts? Solar storms? Market turbulence? Mars Cat maintains absolute trajectory. Guided by precision avionics and 99.9% community energy, we cruise toward Olympus Mons.
                    </p>
                  </div>

                  <div className="bg-[#0b0302]/90 p-4 rounded-2xl border border-[#3f160b]">
                    <div className="flex justify-between text-xs font-bold text-orange-200 mb-2 font-mono">
                      <span>ORBITAL VELOCITY</span>
                      <span className="text-orange-400">100% ESCAPE</span>
                    </div>
                    <div className="h-2 w-full bg-[#1e0a07] rounded-full overflow-hidden">
                      <div className="h-full w-full bg-orange-500 shadow-[0_0_10px_#ea580c]"></div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-orange-400 text-center font-bold">
                      🪐 "Escape velocity is just the beginning of the journey."
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="thrusters-mode"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3.5 rounded-2xl bg-[#331109] text-orange-400 border border-orange-500/40 animate-pulse">
                      <Rocket className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-orange-400 uppercase flex items-center gap-2">
                      Zero-G Thruster Boost <Sparkles className="w-5 h-5 text-yellow-300" />
                    </h3>
                    <p className="text-sm text-orange-100/80 font-sans leading-relaxed font-medium">
                      When the countdown hits zero, Mars Cat fires plasma thrusters! We turn Martian dust into diamond hands and power the strongest feline colony in the Solana galaxy!
                    </p>
                  </div>

                  <div className="bg-[#0b0302] p-4 rounded-2xl border border-orange-500/40 shadow-lg">
                    <div className="flex justify-between text-xs font-bold text-orange-200 mb-2 font-mono">
                      <span>PLASMA THRUSTERS</span>
                      <span className="text-orange-400 font-bold">MAXIMUM 🚀</span>
                    </div>
                    <div className="h-2 w-full bg-[#1e0a07] rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["80%", "100%", "92%", "100%"] }} 
                        transition={{ duration: 1.8, repeat: Infinity }} 
                        className="h-full bg-gradient-to-r from-orange-600 to-red-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                      ></motion.div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-orange-400 text-center font-bold">
                      🚀 "Leave Earth gravity behind, embrace the Red Planet!"
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Custom Thruster Boost Effect */}
            {showPuffEffect && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-orange-600/20 backdrop-blur-[2px] flex items-center justify-center pointer-events-none z-20"
              >
                <span className="text-xl sm:text-2xl font-display font-black text-white bg-orange-600 px-6 py-3 rounded-2xl shadow-2xl border-2 border-white">
                  🚀 BOOST! MARS CAT THRUSTERS IGNITED! 🪐
                </span>
              </motion.div>
            )}
          </div>

          {/* Text Story Side */}
          <div className="lg:col-span-7 bg-[#1a0805]/95 p-8 sm:p-10 rounded-3xl border border-[#4f1b0f] flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-8">
              <div className="text-orange-500/40">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              <div className="space-y-6 font-sans text-orange-100/80 font-semibold">
                <p className="text-lg leading-relaxed text-white">
                  While ordinary memes stay grounded on Earth, <span className="bg-[#331109] text-orange-400 border border-orange-500/40 font-bold px-2.5 py-1 rounded-lg">$marscat</span> takes Solana exploration interplanetary!
                </p>
                <p className="text-2xl sm:text-3xl font-display font-black text-white leading-tight uppercase">
                  "Earth is temporary. <span className="text-orange-500">Mars is forever.</span>"
                </p>
                <p className="text-base leading-relaxed text-orange-200/80">
                  Mars Cat is built on unshakeable fundamentals: 0% tax, 100% community distribution, and renounced contract authority. No team allocations, no hidden gravity—just pure upward propulsion to the highest peak in the solar system.
                </p>

                <div className="bg-[#0b0302]/90 p-5 rounded-2xl border-l-4 border-orange-500 border-y border-r border-[#3f160b] space-y-2">
                  <span className="block text-xs font-bold text-orange-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Flag className="w-4 h-4 text-orange-500" /> Olympus Mons Colony Rule:
                  </span>
                  <p className="text-sm font-sans text-orange-100 italic">
                    "Hold with pioneer courage, build together on the red sands, and watch our colony become an interplanetary legend."
                  </p>
                </div>
              </div>
            </div>

            {/* Footer story CTA */}
            <div className="pt-8 mt-8 border-t border-[#3f160b] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block text-[11px] font-black text-orange-300/70 tracking-wider uppercase font-mono">
                  INTERPLANETARY SOLANA MEME
                </span>
                <p className="font-display font-black text-lg text-white">
                  $marscat — <span className="text-orange-500">The Red Planet Pioneer.</span>
                </p>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById("interactive-lounge");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-orange-600 text-white font-display font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                Enter Mars Base ➔
              </button>
            </div>

          </div>

        </div>

        {/* Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#2a0e08] via-[#45160c] to-[#2a0e08] border border-orange-500/40 text-white p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto shadow-[0_0_40px_rgba(249,115,22,0.25)] text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h4 className="font-display text-2xl sm:text-3xl font-black text-white uppercase drop-shadow-md">
              Are you ready to join the first feline colony on Olympus Mons?
            </h4>
            <div className="flex justify-center items-center">
              <button
                onClick={() => {
                  const element = document.getElementById("interactive-lounge");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-display font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-none flex items-center gap-2"
              >
                Explore Olympus Mons Colony <Rocket className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

