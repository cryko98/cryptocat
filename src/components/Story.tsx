import React from "react";
import { Target, Zap, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import {
  BULLSEYE_NAME,
  BULLSEYE_TICKER,
  BULLSEYE_LOGO,
  X_COMMUNITY_URL,
  PUMPFUN_URL,
} from "../constants";

export default function Story() {
  const steps = [
    {
      num: "01",
      icon: "❌",
      badge: "THE TYPO BLUNDER",
      title: "Someone Spelled 'BULLS'S EYE'",
      description:
        "A dev on Solana attempted to launch a coin but butchered the spelling as 'BULLS'S EYE' with an unhinged double apostrophe.",
      cardBg: "bg-gray-50 border-black",
      badgeBg: "bg-red-600 text-white",
    },
    {
      num: "02",
      icon: "🎯",
      badge: "THE CORRECTION",
      title: "Launched The Real $bullseye",
      description:
        "The timeline couldn't stand the typo. We launched the proper, clean BULLSEYE ($bullseye) to restore grammatical honor.",
      cardBg: "bg-[#fff5f5] border-[#e60012]",
      badgeBg: "bg-[#e60012] text-white",
    },
    {
      num: "03",
      icon: "👑",
      badge: "THE TAKEOVER",
      title: "Taking Over The Lead",
      description:
        "100% community owned on pump.fun with 0% dev baggage. We are flipping the typo coin and hitting the direct target.",
      cardBg: "bg-white border-black",
      badgeBg: "bg-black text-white",
    },
  ];

  return (
    <section id="story" className="relative py-16 sm:py-24 bg-[#f8f9fa] text-black overflow-hidden border-b-4 border-black target-grid">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e60012]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white border-2 border-black shadow-[3px_3px_0px_#e60012]">
            <Target className="w-4 h-4 text-[#e60012]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              THE STORY & THE TYPO
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#ffffff]">
            How A Typo Created <span className="text-[#e60012]">The Real $bullseye</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-xl mx-auto">
            Someone launched "BULLS'S EYE" on Solana. We launched the proper, clean Bullseye to fix the timeline and take over the lead.
          </p>
        </div>

        {/* 3 Step Comic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`target-card ${step.cardBg} p-6 sm:p-8 flex flex-col justify-between relative group hover:scale-[1.02] transition-transform duration-300`}
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
                <span>STEP {step.num} OF 03</span>
                <Zap className="w-4 h-4 text-[#e60012]" />
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
              className="target-btn target-btn-red px-6 py-3.5 text-white font-display font-black text-xs sm:text-sm flex items-center gap-2"
            >
              <span>🎯 Buy {BULLSEYE_TICKER} on Pump.fun</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={X_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="target-btn px-6 py-3.5 bg-black hover:bg-[#1a1a1a] text-white font-display font-bold text-xs sm:text-sm flex items-center gap-2"
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
