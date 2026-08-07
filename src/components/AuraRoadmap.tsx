import React from "react";
import { motion } from "motion/react";
import { BookOpen, Compass, Sparkles, Feather, Clock, Award, Eye } from "lucide-react";

export default function AuraRoadmap() {
  const volumes = [
    {
      num: "VOL. I",
      title: "The Genesis at Dawn",
      subtitle: "Curiosity Sparks a Legend",
      description: "A curious cat named Cashcate walks into the market at dawn. Whispers spread of her composure as Solana traders discover the golden feline.",
      icon: <Eye className="w-5 h-5 text-[#b45309]" />,
      tag: "INSCRIBED",
      badgeColor: "bg-[#fef08a] text-[#78350f] border-[#eab308]",
    },
    {
      num: "VOL. II",
      title: "The Windowsill View",
      subtitle: "Seeing What Others Miss",
      description: "High on the sunlit stone windowsill, Cashcate watches the market with serene patience. Launching community chronicles, interactive lounges, and memes.",
      icon: <Sparkles className="w-5 h-5 text-[#d97706]" />,
      tag: "ACTIVE CHAPTER",
      badgeColor: "bg-[#fde047] text-[#1c1305] border-[#ca8a04]",
    },
    {
      num: "VOL. III",
      title: "Roams the Market Still",
      subtitle: "A Legend in Every Pawstep",
      description: "Exploring every busy corner and quiet alley. Tier-1 exchange listings, cross-ecosystem collaborations, and physical golden commemorative tokens.",
      icon: <Compass className="w-5 h-5 text-[#b45309]" />,
      tag: "UPCOMING",
      badgeColor: "bg-[#faedd0] text-[#78350f] border-[#cbb07a]",
    },
    {
      num: "VOL. IV",
      title: "Timeless Composure",
      subtitle: "Turning Ordinary into Extraordinary",
      description: "Establishing Cashcate as the immortal symbol of curiosity, opportunity, and calm conviction across global decentralized culture.",
      icon: <Award className="w-5 h-5 text-[#92400e]" />,
      tag: "HORIZON",
      badgeColor: "bg-[#faedd0] text-[#78350f] border-[#cbb07a]",
    },
  ];

  return (
    <section id="roadmap" className="relative py-20 sm:py-28 bg-[#f5e6be] text-[#1c1305] overflow-hidden border-t-2 border-[#b48c3c] vintage-ledger-grid selection:bg-[#fde047] selection:text-[#1c1305]">
      
      {/* Background warm golden ambient glows */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[30%] left-[-5%] w-80 h-80 bg-[#f59e0b] rounded-full blur-[150px] opacity-25"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-[#fbbf24] rounded-full blur-[160px] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fcf6e8] border border-[#b48c3c] shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#b45309]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#78350f]">
              CHRONICLES OF ASCENSION
            </span>
          </div>

          <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#1c1305] uppercase tracking-tight">
            The Volumes of <span className="text-[#b45309]">Cashcate</span>
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#78350f] font-semibold max-w-2xl mx-auto">
            “Through every season, through every change, Cashcate is here—curious, calm, and timeless.”
          </p>
        </div>

        {/* 4 Volume Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {volumes.map((vol, idx) => (
            <motion.div
              key={vol.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="parchment-card p-6 rounded-sm border-2 border-[#b48c3c] shadow-lg flex flex-col justify-between group hover:border-[#92400e] hover:shadow-[0_8px_25px_rgba(58,38,7,0.2)] hover:scale-[1.02] transition-all duration-300 relative text-[#1c1305]"
            >
              {/* Pushpin */}
              <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 rounded-full bg-[#1c1305] border border-[#78350f]"></div>

              <div className="space-y-4">
                
                <div className="flex justify-between items-center border-b border-[#cbb07a] pb-3">
                  <span className="font-serif font-black text-2xl text-[#b45309]">
                    {vol.num}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded border shadow-sm ${vol.badgeColor}`}>
                      {vol.tag}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-[#78350f] uppercase tracking-wider block">
                    {vol.subtitle}
                  </span>
                  <h3 className="font-serif font-black text-xl text-[#1c1305] leading-snug">
                    {vol.title}
                  </h3>
                  <p className="text-xs text-[#38260d] font-serif leading-relaxed font-semibold pt-1">
                    {vol.description}
                  </p>
                </div>

              </div>

              <div className="pt-4 mt-4 border-t border-[#cbb07a] flex items-center justify-between text-[11px] font-mono font-bold text-[#78350f]">
                <span>Archived Chapter</span>
                <Feather className="w-3.5 h-3.5 text-[#b45309]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Golden Market Manifesto Card */}
        <div className="max-w-4xl mx-auto parchment-card border-2 border-[#b48c3c] p-8 sm:p-10 rounded-sm shadow-2xl text-center space-y-6 relative overflow-hidden">
          
          {/* Masking tape on top center */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#fef08a] border border-[#eab308] rotate-[1deg] shadow-sm pointer-events-none flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-[#78350f] uppercase">
              FOUNDERS' CREED
            </span>
          </div>

          <div className="space-y-2 relative z-10 pt-2">
            <span className="text-[10px] font-mono font-bold text-[#78350f] uppercase tracking-widest block">
              THE CASHCATE PHILOSOPHY
            </span>
            <h4 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1305] uppercase tracking-wide">
              “Curiosity Creates Opportunity”
            </h4>
            <p className="text-xs sm:text-sm text-[#38260d] max-w-2xl mx-auto font-serif font-semibold leading-relaxed">
              Some called her lucky. Some called it fate. But those who saw her knew—she had a spark. Cashcate reminds us that curiosity can turn the ordinary into the extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 relative z-10">
            <div className="p-4 rounded bg-[#fcf6e8] border border-[#cbb07a] text-center shadow-sm">
              <span className="block text-[10px] font-mono font-bold text-[#78350f] uppercase">Market Lore</span>
              <span className="font-serif font-black text-lg text-[#1c1305]">Est. Long Ago</span>
            </div>
            <div className="p-4 rounded bg-[#fcf6e8] border border-[#cbb07a] text-center shadow-sm">
              <span className="block text-[10px] font-mono font-bold text-[#78350f] uppercase">Composure</span>
              <span className="font-serif font-black text-lg text-[#b45309]">100% Serene</span>
            </div>
            <div className="p-4 rounded bg-[#fcf6e8] border border-[#cbb07a] text-center shadow-sm">
              <span className="block text-[10px] font-mono font-bold text-[#78350f] uppercase">Taxation</span>
              <span className="font-serif font-black text-lg text-[#1c1305]">0% Forever</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
