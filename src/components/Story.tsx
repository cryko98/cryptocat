import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, TrendingUp, Frown, Smile, DollarSign, Wallet, Compass, Quote } from "lucide-react";

export default function Story() {
  const [activeTab, setActiveTab] = useState<"cash" | "crypto">("crypto");
  const [purrMultiplier, setPurrMultiplier] = useState(1);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleToggle = (tab: "cash" | "crypto") => {
    setActiveTab(tab);
    if (tab === "crypto") {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
    }
  };

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-[#0a0a0a] overflow-hidden">
      {/* Absolute Decorative elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute top-[30%] left-[-5%] w-64 h-64 bg-[#14F195] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-[#9945FF] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#14F195] bg-zinc-900 px-3.5 py-2 rounded-full border border-white/10">
            🐱 The Legend of Crypto Cat
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase italic tracking-tight">
            How He Went From Broke to Based
          </h2>
          <p className="text-zinc-400 font-sans font-medium text-base">
            Every legend has a beginning. Witness the transformation of the decade: Cash Cat is gone forever.
          </p>
        </div>

        {/* Interactive Mood Toggle Swapper */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-zinc-900/90 p-2 rounded-2xl flex max-w-md mx-auto border border-white/10">
            <button
              onClick={() => handleToggle("cash")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "cash"
                  ? "bg-red-500/20 border border-red-500/30 text-red-400 shadow"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Frown className={`w-4 h-4 ${activeTab === "cash" ? "text-red-400" : ""}`} />
              Sad Cash Cat
            </button>
            <button
              onClick={() => handleToggle("crypto")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "crypto"
                  ? "bg-[#14F195]/20 border border-[#14F195]/30 text-[#14F195] shadow"
                  : "text-zinc-400 hover:text-[#14F195]"
              }`}
            >
              <Smile className={`w-4 h-4 ${activeTab === "crypto" ? "text-[#14F195]" : ""}`} />
              Based Crypto Cat
            </button>
          </div>
        </div>

        {/* Main Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Visual Transformation Side */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border transition-all relative overflow-hidden bg-zinc-900/80 border-white/10 shadow-2xl backdrop-blur-md">
            
            <AnimatePresence mode="wait">
              {activeTab === "cash" ? (
                <motion.div
                  key="cash-side"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3 rounded-2xl bg-zinc-800 text-red-400">
                      <Frown className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-white uppercase italic">
                      Depressed Cash Cat Era
                    </h3>
                    <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                      Sigh... holding physical fiat that depreciates 10% a year. Meowing for pocket change. Watching banks close. Depressed hood cat struggling with rent and gas fees.
                    </p>
                  </div>

                  <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                    <div className="flex justify-between text-xs font-bold text-zinc-500 mb-2">
                      <span>PORTFOLIO BALANCE</span>
                      <span className="text-red-500">-99.4%</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full w-1 bg-red-500"></div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-red-400 text-center font-bold">
                      🚫 "Is this all there is to life? *sad meow*"
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="crypto-side"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3 rounded-2xl bg-[#14F195]/10 text-[#14F195] animate-bounce">
                      <Smile className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-[#14F195] uppercase italic flex items-center gap-2">
                      Degen King Era <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
                    </h3>
                    <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                      Tail wagging, sunglasses on, surrounded by Lambos, big stacks, and non-stop rocket ships. Constantly grinning because his Solana portfolio is printing gains daily!
                    </p>
                  </div>

                  {/* Fun Live Purr sound gauge */}
                  <div className="bg-black/40 p-4 rounded-2xl border border-[#14F195]/10 shadow-md">
                    <div className="flex justify-between text-xs font-bold text-[#14F195] mb-2">
                      <span>PURR INTENSITY GAUGE</span>
                      <span className="text-[#14F195]">MAXIMUM PURR 🔥</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["40%", "95%", "75%", "100%", "50%", "95%"] }} 
                        transition={{ duration: 2, repeat: Infinity }} 
                        className="h-full bg-gradient-to-r from-[#14F195] to-[#9945FF]"
                      ></motion.div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-[#14F195] text-center font-bold">
                      🚀 "PURRRRRRRRRRRRRRRRRRRRRRRRRRR"
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Micro Celebratory Confetti Banner */}
            {showCelebration && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#14F195]/10 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
              >
                <span className="text-3xl font-display font-black text-black rotate-[-5deg] bg-[#14F195] px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(20,241,149,0.5)] border-2 border-white/25">
                  BASED GAINS! 🚀
                </span>
              </motion.div>
            )}
          </div>

          {/* Text Story Side - Verbatim story text as requested */}
          <div className="lg:col-span-7 bg-zinc-900/80 p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between shadow-2xl backdrop-blur-md">
            
            <div className="space-y-8">
              {/* Quote icon styling */}
              <div className="text-[#14F195]/20">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Story Content verbatim */}
              <div className="space-y-6 font-sans text-zinc-300 font-medium">
                <p className="text-lg leading-relaxed text-zinc-200">
                  He is no longer <span className="bg-red-500/10 text-red-400 font-black px-2 py-0.5 rounded border border-red-500/20">Cash Cat</span>.
                </p>
                <p className="text-xl sm:text-2xl font-display font-black text-white leading-tight uppercase italic">
                  He is <span className="text-[#14F195]">Crypto Cat</span> — the happiest cat in the entire blockchain.
                </p>
                <p className="text-base leading-relaxed">
                  Tail wagging, sunglasses on, surrounded by Lambos and fat bags. Constantly grinning because his portfolio is printing money. Every green candle makes him happier. He went from depressed hood cat to degen king.
                </p>
                <p className="text-lg font-display font-black tracking-tight text-[#14F195]">
                  From sad meows to loud PURRRRRRS.
                </p>
                <p className="text-base leading-relaxed">
                  Crypto Cat doesn’t chase money anymore… <br />
                  <span className="text-[#9945FF] font-black text-lg italic">The money chases him.</span>
                </p>

                {/* Moral Highlight */}
                <div className="bg-black/50 p-5 rounded-2xl border-l-4 border-[#14F195] border-t border-r border-b border-white/5 space-y-2">
                  <span className="block text-xs font-bold text-[#14F195] uppercase tracking-wider font-mono">
                    Moral of the story:
                  </span>
                  <p className="text-sm font-sans text-zinc-400 italic">
                    Even the saddest cat can become a legend once he finds the right chain and starts stacking gains.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer story slogan verbatim */}
            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block text-[11px] font-black text-zinc-500 tracking-wider uppercase font-mono">
                  THE FINAL VERDICT
                </span>
                <p className="font-display font-black text-lg text-white">
                  $CRYPTOCAT — <span className="text-[#14F195]">From broke to based.</span>
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveTab("crypto");
                  setShowCelebration(true);
                  setTimeout(() => setShowCelebration(false), 2000);
                  const element = document.getElementById("interactive-cat");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-black hover:bg-[#14F195] hover:text-black text-[#14F195] border border-[#14F195]/20 hover:border-transparent font-display font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Become Crypto Cat Now ➔
              </button>
            </div>

          </div>

        </div>

        {/* Verbatim Question Box */}
        <div className="mt-16 bg-gradient-to-r from-[#9945FF] to-[#14F195] text-black p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto shadow-[0_0_35px_rgba(153,69,255,0.4)] text-center relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <h4 className="font-display text-2xl sm:text-3xl font-black text-white uppercase italic drop-shadow-md">
              Are you still a sad Cash Cat… or are you ready to become Crypto Cat?
            </h4>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 rounded-full bg-black text-[#14F195] font-display font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Get $CRYPTOCAT Now 🚀
              </button>
              <a
                href="https://t.me/cryptocatsol"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#229ED9] text-white hover:bg-[#2090c5] font-display font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                Join Telegram Chat
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
