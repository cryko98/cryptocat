import React from "react";
import { Sparkles, ArrowRight, Zap, Crown, Send } from "lucide-react";
import {
  CATSEYE_NAME,
  CATSEYE_TICKER,
  CATSEYE_LOGO,
  TELEGRAM_URL,
  PUMPFUN_URL,
} from "../constants";

export default function Story() {
  const steps = [
    {
      num: "01",
      icon: "🐱",
      badge: "THE UNDEFEATED META",
      title: "Solana Belongs to the Cats",
      description:
        "From Popcat to MEW, everyone knows the most legendary, high-flying memecoins on Solana always revolve around cats.",
      cardBg: "bg-white border-black",
      badgeBg: "bg-black text-[#00f076]",
    },
    {
      num: "02",
      icon: "🐂",
      badge: "THE $5M TRIGGER",
      title: "Bull's Eye Hit $5,000,000",
      description:
        "When the Bull's Eye coin smashed through a $5M market cap, the call was obvious: it's time to unleash the ultimate feline answer.",
      cardBg: "bg-[#eafff3] border-[#00c961]",
      badgeBg: "bg-[#00f076] text-black",
    },
    {
      num: "03",
      icon: "👑",
      badge: "THE SUPREME FLIP",
      title: "CAT'S EYE Takes The Throne",
      description:
        "We launched CAT'S EYE ($catseye) to easily outshine and surpass the bulls with razor-sharp precision and 100% community momentum.",
      cardBg: "bg-white border-black",
      badgeBg: "bg-black text-white",
    },
  ];

  return (
    <section id="lore" className="relative py-16 sm:py-24 bg-[#f8f9fa] text-black overflow-hidden border-b-4 border-black cat-grid">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f076]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white border-2 border-black shadow-[3px_3px_0px_#00f076]">
            <Crown className="w-4 h-4 text-[#00f076]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              THE CAT META SAGA
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#ffffff]">
            Why <span className="text-[#00c961]">CAT'S EYE</span> Will Outshine Them All
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-xl mx-auto">
            Bulls run in straight lines. Cats conquer the entire timeline. Here is why $catseye is destined to flip the bulls.
          </p>
        </div>

        {/* 3 Step Comic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`cat-card ${step.cardBg} p-6 sm:p-8 flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-black px-2.5 py-1 rounded-xl border border-black shadow-[2px_2px_0px_#000] ${step.badgeBg}`}>
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

                <p className="font-sans text-sm sm:text-base text-black/90 font-bold leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between text-xs font-mono font-black text-black/80">
                <span>CHAPTER {step.num} OF 03</span>
                <Zap className="w-4 h-4 text-[#00c961]" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action CTAs */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cat-btn cat-btn-tg px-6 py-3.5 text-white font-display font-bold text-xs sm:text-sm flex items-center gap-2"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>Join the Official Telegram Group</span>
            </a>

            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cat-btn cat-btn-green px-6 py-3.5 text-black font-display font-black text-xs sm:text-sm flex items-center gap-2"
            >
              <span>💊 Buy {CATSEYE_TICKER} on Pump.fun</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
