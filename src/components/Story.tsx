import React from "react";
import { Brain, Zap, Sparkles, ArrowRight } from "lucide-react";
import {
  SLINGTARD_NAME,
  SLINGTARD_TICKER,
  SLINGTARD_LOGO,
  X_COMMUNITY_URL,
  PUMPFUN_URL,
} from "../constants";

export default function Story() {
  const steps = [
    {
      num: "01",
      icon: "🤤",
      badge: "THE FUMBLE",
      title: "The 0 IQ KOL",
      description:
        "Slingtard was a crypto KOL who hyped up his previous coin and ruined it because he is simply a retard.",
      cardColor: "comic-card-yellow",
    },
    {
      num: "02",
      icon: "🕶️",
      badge: "THE MEME",
      title: "Named 'Slingtard'",
      description:
        "The crypto timeline roasted his 0 IQ moment, turned him into a meme, and permanently crowned him Slingtard.",
      cardColor: "comic-card-pink",
    },
    {
      num: "03",
      icon: "👑",
      badge: "THE COIN",
      title: "Community Takes Over",
      description:
        "The community launched $slingtartd on pump.fun. 100% community owned with 0% dev control and 0% tax.",
      cardColor: "comic-card-cyan",
    },
  ];

  return (
    <section id="lore" className="relative py-16 sm:py-20 bg-[#ffd600] text-black overflow-hidden border-t-4 border-b-4 border-black comic-dots">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff007a]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-[#00f0ff] border-2 border-black shadow-[3px_3px_0px_#ff007a]">
            <Brain className="w-4 h-4 text-[#ff007a]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              HOW IT HAPPENED
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#fff]">
            The Story in <span className="text-[#ff007a]">3 Simple Steps</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-xl mx-auto">
            No long essays or complicated excuses. Just a pure 0 IQ moment that gave birth to Solana's best meme.
          </p>
        </div>

        {/* 3 Step Comic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`${step.cardColor} p-6 sm:p-8 flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-white px-2.5 py-1 rounded-xl bg-black border border-black shadow-[2px_2px_0px_#ff007a]">
                    {step.badge}
                  </span>
                  <span className="font-comic text-2xl text-black/40 group-hover:text-black transition-colors">
                    {step.num}
                  </span>
                </div>

                <div className="text-5xl my-2">{step.icon}</div>

                <h3 className="font-display font-black text-2xl text-black">
                  {step.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-black font-bold leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between text-xs font-mono font-black text-black/80">
                <span>STEP {step.num} OF 03</span>
                <Zap className="w-4 h-4 text-[#ff007a]" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA banner */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn px-6 py-3.5 bg-[#ff007a] hover:bg-[#ff1a80] text-white font-display font-black text-xs sm:text-sm flex items-center gap-2"
            >
              <span>💊 Buy {SLINGTARD_TICKER} on Pump.fun</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={X_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn px-6 py-3.5 bg-black hover:bg-[#1a1a24] text-white font-display font-bold text-xs sm:text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Join the X Community</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
