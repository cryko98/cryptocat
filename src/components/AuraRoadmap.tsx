import React from "react";
import { motion } from "motion/react";
import { Sparkles, Zap, Shield, Eye, Orbit, Crown } from "lucide-react";

export default function AuraRoadmap() {
  const phases = [
    {
      num: "01",
      title: "Vibrational Awakening",
      description: "Opening the feline third eye. Aura Cat emits its first iridescent frequency pulse across the Solana blockchain, aligning cosmic energy.",
      icon: <Eye className="w-6 h-6 text-purple-400" />,
      tag: "COMPLETED",
      color: "from-purple-500 to-indigo-500",
    },
    {
      num: "02",
      title: "Radiant Resonance",
      description: "Expanding the neon aura sphere. Building the highest-vibration community on Solana with zero friction and infinite serenity.",
      icon: <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />,
      tag: "IN PROGRESS",
      color: "from-pink-500 to-purple-500",
    },
    {
      num: "03",
      title: "Harmonic Convergence",
      description: "Unlocking aura-enhanced tools, real-time frequency visualizers, and decentralized community governance for all $auracat holders.",
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      tag: "UPCOMING",
      color: "from-cyan-400 to-purple-500",
    },
    {
      num: "04",
      title: "Omnipresent Aura",
      description: "Aura Cat transcends standard charts to become an eternal symbol of calm, high-energy abundance throughout the entire crypto galaxy!",
      icon: <Crown className="w-6 h-6 text-amber-300" />,
      tag: "UPCOMING",
      color: "from-amber-400 to-pink-500",
    },
  ];

  return (
    <section id="aura-roadmap" className="relative py-20 sm:py-28 bg-[#080312] text-[#f3e8ff] overflow-hidden border-t border-[#2e1065]">
      
      {/* Radiant Iridescent Background Aura Glows */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[30%] left-[-5%] w-80 h-80 bg-purple-600 rounded-full blur-[150px] opacity-25 animate-aura-shift"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-pink-600 rounded-full blur-[160px] opacity-25 animate-aura-shift"></div>
        <div className="absolute top-[60%] right-[30%] w-72 h-72 bg-cyan-500 rounded-full blur-[160px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 bg-[#140826] px-4 py-2 rounded-full border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            ✨ HARMONIC FREQUENCY ROADMAP
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            Aura Cat <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Evolution</span>
          </h2>
          <p className="text-purple-200/80 font-sans font-semibold text-base sm:text-lg">
            Follow the 4 phases of vibrational ascension as Aura Cat illuminates the Solana ecosystem!
          </p>
        </div>

        {/* Steps Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-[#110624]/90 p-6 rounded-3xl border border-[#3b186b] shadow-xl flex flex-col justify-between group hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-all duration-300 text-white"
            >
              <div className="space-y-6">
                
                <div className="flex justify-between items-center">
                  <span className="font-display font-black text-4xl text-[#3b186b] group-hover:text-purple-400/50 transition-colors">
                    {phase.num}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#0b0318] border border-[#3b186b] text-purple-300">
                      {phase.tag}
                    </span>
                    <div className="p-3 rounded-2xl border border-[#3b186b] bg-[#0b0318] shadow-inner">
                      {phase.icon}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-white">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-purple-200/80 font-sans leading-relaxed font-semibold">
                    {phase.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Aura Frequency Telemetry Bottom block */}
        <div className="max-w-4xl mx-auto bg-[#110624]/95 border border-[#3b186b] p-8 sm:p-10 rounded-3xl shadow-2xl text-center space-y-6 relative overflow-hidden">
          {/* subtle aura border glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-3xl opacity-25 pointer-events-none"></div>

          <div className="space-y-2 relative z-10">
            <span className="text-[10px] font-mono font-black text-purple-400 uppercase tracking-widest block">
              VIBRATIONAL TELEMETRY
            </span>
            <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
              Radiating Infinite Feline Frequency
            </h4>
            <p className="text-xs sm:text-sm text-purple-200/80 max-w-2xl mx-auto font-sans font-semibold">
              Aura Cat ($auracat) is engineered for permanent high-frequency resonance. No stress, no FUD—just pure iridescent serenity and community momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 relative z-10">
            <div className="p-4 rounded-2xl bg-[#090316] border border-[#3b186b] text-center">
              <span className="block text-[10px] font-mono font-bold text-purple-300 uppercase">Frequency</span>
              <span className="font-display font-black text-lg text-white">432 Hz / 0% FUD</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#090316] border border-[#3b186b] text-center">
              <span className="block text-[10px] font-mono font-bold text-purple-300 uppercase">Aura Energy</span>
              <span className="font-display font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">100% Radiant</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#090316] border border-[#3b186b] text-center">
              <span className="block text-[10px] font-mono font-bold text-purple-300 uppercase">Serenity Index</span>
              <span className="font-display font-black text-lg text-cyan-300">Unshakeable Zen</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
