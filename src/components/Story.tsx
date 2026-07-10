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
    <section id="story" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Absolute Decorative elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40">
        <div className="absolute top-[30%] left-[-5%] w-64 h-64 bg-green-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-emerald-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#22c55e] bg-green-50 px-3.5 py-2 rounded-full border border-green-100">
            🐱 The Legend of Crypto Cat
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            How He Went From Broke to Based
          </h2>
          <p className="text-neutral-500 font-sans font-medium text-base">
            Every legend has a beginning. Witness the transformation of the decade: Cash Cat is gone forever.
          </p>
        </div>

        {/* Interactive Mood Toggle Swapper */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-100 p-2 rounded-2xl flex max-w-md mx-auto shadow-inner border border-slate-200">
            <button
              onClick={() => handleToggle("cash")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "cash"
                  ? "bg-neutral-800 text-white shadow"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              <Frown className={`w-4 h-4 ${activeTab === "cash" ? "text-red-400" : ""}`} />
              Sad Cash Cat
            </button>
            <button
              onClick={() => handleToggle("crypto")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "crypto"
                  ? "bg-[#22c55e] text-white shadow"
                  : "text-neutral-500 hover:text-[#22c55e]"
              }`}
            >
              <Smile className={`w-4 h-4 ${activeTab === "crypto" ? "text-yellow-300" : ""}`} />
              Based Crypto Cat
            </button>
          </div>
        </div>

        {/* Main Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Visual Transformation Side */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border-2 transition-all relative overflow-hidden bg-slate-50 border-slate-200 shadow-sm">
            
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
                    <div className="inline-block p-3 rounded-2xl bg-neutral-200 text-neutral-600">
                      <Frown className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-neutral-800">
                      Depressed Cash Cat Era
                    </h3>
                    <p className="text-sm text-neutral-500 font-sans leading-relaxed">
                      Sigh... holding physical fiat that depreciates 10% a year. Meowing for pocket change. Watching banks close. Depressed hood cat struggling with rent and gas fees.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-neutral-100 shadow-inner">
                    <div className="flex justify-between text-xs font-bold text-neutral-400 mb-2">
                      <span>PORTFOLIO BALANCE</span>
                      <span className="text-red-500">-99.4%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-1 bg-red-400"></div>
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
                    <div className="inline-block p-3 rounded-2xl bg-green-100 text-green-600 animate-bounce">
                      <Smile className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-green-800 flex items-center gap-2">
                      Degen King Era <Sparkles className="w-5 h-5 text-yellow-500 animate-spin" />
                    </h3>
                    <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                      Tail wagging, sunglasses on, surrounded by Lambos, big stacks, and non-stop rocket ships. Constantly grinning because his Solana portfolio is printing gains daily!
                    </p>
                  </div>

                  {/* Fun Live Purr sound gauge */}
                  <div className="bg-white p-4 rounded-2xl border border-green-100 shadow-md">
                    <div className="flex justify-between text-xs font-bold text-green-600 mb-2">
                      <span>PURR INTENSITY GAUGE</span>
                      <span className="text-green-500">MAXIMUM PURR 🔥</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["40%", "95%", "75%", "100%", "50%", "95%"] }} 
                        transition={{ duration: 2, repeat: Infinity }} 
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                      ></motion.div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-green-600 text-center font-bold">
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
                className="absolute inset-0 bg-green-500/10 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
              >
                <span className="text-3xl font-display font-black text-green-600 rotate-[-5deg] bg-white px-4 py-2 rounded-xl shadow-lg border-2 border-green-400">
                  BASED GAINS! 🚀
                </span>
              </motion.div>
            )}
          </div>

          {/* Text Story Side - Verbatim story text as requested */}
          <div className="lg:col-span-7 bg-[#fbfdfa] p-8 sm:p-10 rounded-3xl border border-green-100 flex flex-col justify-between shadow-lg shadow-green-50/20">
            
            <div className="space-y-8">
              {/* Quote icon styling */}
              <div className="text-green-300">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Story Content verbatim */}
              <div className="space-y-6 font-sans text-neutral-700 font-medium">
                <p className="text-lg leading-relaxed text-neutral-800">
                  He is no longer <span className="bg-red-50 text-red-600 font-black px-2 py-0.5 rounded border border-red-100">Cash Cat</span>.
                </p>
                <p className="text-xl sm:text-2xl font-display font-extrabold text-neutral-900 leading-tight">
                  He is <span className="text-green-600">Crypto Cat</span> — the happiest cat in the entire blockchain.
                </p>
                <p className="text-base leading-relaxed">
                  Tail wagging, sunglasses on, surrounded by Lambos and fat bags. Constantly grinning because his portfolio is printing money. Every green candle makes him happier. He went from depressed hood cat to degen king.
                </p>
                <p className="text-lg font-display font-black tracking-tight text-[#22c55e]">
                  From sad meows to loud PURRRRRRS.
                </p>
                <p className="text-base leading-relaxed">
                  Crypto Cat doesn’t chase money anymore… <br />
                  <span className="text-neutral-900 font-black text-lg italic">The money chases him.</span>
                </p>

                {/* Moral Highlight */}
                <div className="bg-white p-5 rounded-2xl border-l-4 border-[#22c55e] shadow-sm space-y-2">
                  <span className="block text-xs font-bold text-green-600 uppercase tracking-wider">
                    Moral of the story:
                  </span>
                  <p className="text-sm font-sans text-neutral-600 italic">
                    Even the saddest cat can become a legend once he finds the right chain and starts stacking gains.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer story slogan verbatim */}
            <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block text-[11px] font-black text-neutral-400 tracking-wider uppercase">
                  THE FINAL VERDICT
                </span>
                <p className="font-display font-black text-lg text-neutral-900">
                  $CRYPTOCAT — <span className="text-green-600">From broke to based.</span>
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
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-900 hover:bg-[#22c55e] text-white font-display font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Become Crypto Cat Now ➔
              </button>
            </div>

          </div>

        </div>

        {/* Verbatim Question Box */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-3xl max-w-4xl mx-auto shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <h4 className="font-display text-2xl sm:text-3xl font-black">
              Are you still a sad Cash Cat… or are you ready to become Crypto Cat?
            </h4>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-full bg-white text-green-700 font-display font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Get $CRYPTOCAT Now 🚀
              </button>
              <a
                href="https://t.me/cryptocatsol"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-green-700/50 text-white border border-green-400 hover:bg-green-700/80 font-display font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
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
