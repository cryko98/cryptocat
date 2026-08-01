import React from "react";
import { motion } from "motion/react";
import { Rocket, Globe, Shield, Sparkles, Orbit, Flag } from "lucide-react";

export default function MarsMission() {
  const phases = [
    {
      num: "01",
      title: "Interstellar Launch",
      description: "Igniting zero-G plasma thrusters. Mars Cat departs Earth's orbit with escape velocity, setting trajectory for the Red Planet.",
      icon: <Rocket className="w-6 h-6 text-orange-400" />,
      tag: "COMPLETED",
    },
    {
      num: "02",
      title: "Atmospheric Entry",
      description: "Navigating deep space and Martian dust storms. Deploying heat shields and radar arrays to map the Martian landing zone.",
      icon: <Orbit className="w-6 h-6 text-orange-400" />,
      tag: "IN PROGRESS",
    },
    {
      num: "03",
      title: "Olympus Mons Touchdown",
      description: "Touchdown on the highest volcano in the solar system. Establishing the first feline solar dome colony on Mars.",
      icon: <Flag className="w-6 h-6 text-orange-400" />,
      tag: "UPCOMING",
    },
    {
      num: "04",
      title: "Galactic Civilization",
      description: "Terraforming the red soil, harvesting cosmic energy, and expanding the Mars Cat ($marscat) interplanetary network!",
      icon: <Sparkles className="w-6 h-6 text-orange-400 animate-pulse" />,
      tag: "UPCOMING",
    },
  ];

  return (
    <section id="mars-mission" className="relative py-20 sm:py-28 bg-[#0b0504] text-[#fed7aa] overflow-hidden border-t border-[#2d1209]">
      
      {/* Visual background Martian ambient glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[30%] left-[-5%] w-72 h-72 bg-orange-600 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-red-600 rounded-full blur-[160px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 bg-[#1c0a06] px-4 py-2 rounded-full border border-orange-500/30 shadow-md">
            🚀 RED PLANET COLONIZATION
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            Mars Cat <span className="text-orange-500">Mission Roadmap</span>
          </h2>
          <p className="text-orange-200/80 font-sans font-semibold text-base sm:text-lg">
            Follow the 4 phases of our interplanetary expedition as Mars Cat conquers the Red Planet!
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
              className="relative bg-[#170805]/90 p-6 rounded-3xl border border-[#3f160b] shadow-xl flex flex-col justify-between group hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] transition-all duration-300 text-white"
            >
              <div className="space-y-6">
                
                <div className="flex justify-between items-center">
                  <span className="font-display font-black text-4xl text-[#4a180b] group-hover:text-orange-500/40 transition-colors">
                    {phase.num}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#0b0504] border border-[#3f160b] text-orange-400">
                      {phase.tag}
                    </span>
                    <div className="p-3 rounded-2xl border border-[#3f160b] bg-[#0b0504] shadow-inner">
                      {phase.icon}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-white">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-orange-200/80 font-sans leading-relaxed font-semibold">
                    {phase.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Martian Colony Telemetry Bottom block */}
        <div className="max-w-4xl mx-auto bg-[#170805]/95 border border-[#3f160b] p-8 sm:p-10 rounded-3xl shadow-2xl text-center space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-black text-orange-500 uppercase tracking-widest block">
              INTERPLANETARY TELEMETRY
            </span>
            <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
              First Feline on the Martian Surface
            </h4>
            <p className="text-xs sm:text-sm text-orange-200/80 max-w-2xl mx-auto font-sans font-semibold">
              Mars Cat ($marscat) is engineered for deep space endurance. From launchpad to Olympus Mons, our community exploration fleet is unstoppable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-[#0e0403] border border-[#3f160b] text-center">
              <span className="block text-[10px] font-mono font-bold text-orange-400 uppercase">Atmosphere</span>
              <span className="font-display font-black text-lg text-white">95% CO₂ / 0% FUD</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0e0403] border border-[#3f160b] text-center">
              <span className="block text-[10px] font-mono font-bold text-orange-400 uppercase">Surface Temp</span>
              <span className="font-display font-black text-lg text-orange-500">-63°C (Hot Engines)</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0e0403] border border-[#3f160b] text-center">
              <span className="block text-[10px] font-mono font-bold text-orange-400 uppercase">Gravity</span>
              <span className="font-display font-black text-lg text-white">3.721 m/s² (Moonshot)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
