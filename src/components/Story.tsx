import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShieldCheck, Heart, Quote, Star, Eye } from "lucide-react";

export default function Story() {
  const [activeTab, setActiveTab] = useState<"wild" | "safe">("safe");
  const [showCelebration, setShowCelebration] = useState(false);

  const handleToggle = (tab: "wild" | "safe") => {
    setActiveTab(tab);
    if (tab === "safe") {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
    }
  };

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-[#FFFDFD] overflow-hidden">
      {/* Decorative ambient blobs */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30">
        <div className="absolute top-[30%] left-[-5%] w-64 h-64 bg-rose-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-rose-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-800 bg-rose-50 px-3.5 py-2 rounded-full border border-rose-100 shadow-sm">
            🦝 The Story of Casper
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#4C0519] uppercase italic tracking-tight">
            The 1-in-750,000 Miracle of the Yard
          </h2>
          <p className="text-rose-950/85 font-sans font-semibold text-base">
            From surviving a dog attack in the wild to becoming the ultimate luck talisman of the Solana ecosystem.
          </p>
        </div>

        {/* Interactive Story Era Toggle Swapper */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-rose-50/50 p-2 rounded-2xl flex max-w-md mx-auto border border-rose-100">
            <button
              onClick={() => handleToggle("wild")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                activeTab === "wild"
                  ? "bg-rose-100 border border-rose-200 text-rose-900 shadow-sm"
                  : "text-rose-950/60 hover:text-rose-950"
              }`}
            >
              <Eye className="w-4 h-4" />
              The Wild Risk
            </button>
            <button
              onClick={() => handleToggle("safe")}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                activeTab === "safe"
                  ? "bg-rose-600/10 border border-rose-600/20 text-rose-900 shadow-sm"
                  : "text-rose-950/60 hover:text-rose-950"
              }`}
            >
              <Heart className="w-4 h-4 text-rose-600" />
              Safe Solana Haven
            </button>
          </div>
        </div>

        {/* Main Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Visual Transformation Side */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border transition-all relative overflow-hidden bg-white border-rose-100 shadow-lg">
            
            <AnimatePresence mode="wait">
              {activeTab === "wild" ? (
                <motion.div
                  key="wild-era"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100">
                      <Star className="w-8 h-8 text-rose-400" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-rose-900 uppercase italic">
                      Survival Odds in the Wild
                    </h3>
                    <p className="text-sm text-rose-950/70 font-sans leading-relaxed">
                      Albino raccoons rarely survive to adulthood in the wild because they lack camouflage. Casper was born wild but was attacked by a dog when he was very young. He sustained injuries to his hip and left front leg.
                    </p>
                  </div>

                  <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100">
                    <div className="flex justify-between text-xs font-bold text-rose-800/60 mb-2 font-mono">
                      <span>WILD CAMOUFLAGE STATUS</span>
                      <span className="text-rose-600">UNPROTECTED</span>
                    </div>
                    <div className="h-2 w-full bg-rose-100 rounded-full overflow-hidden">
                      <div className="h-full w-1/12 bg-rose-500"></div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-rose-600 text-center font-bold">
                      ⚠️ Survival in the wild is extremely risky!
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="safe-solana-era"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-block p-3 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 animate-pulse">
                      <ShieldCheck className="w-8 h-8 text-rose-500" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-rose-700 uppercase italic flex items-center gap-2">
                      Non-Releasable Champion <Sparkles className="w-5 h-5 text-rose-400 animate-spin" />
                    </h3>
                    <p className="text-sm text-rose-950/80 font-sans leading-relaxed">
                      Although his hip healed under a wildlife rehabilitator's care, limited use of his left paw deemed him non-releasable. Now, he's forever protected, comfy, and has converted his limited left paw into a <strong>Diamond Paw</strong> that holds $Casper tokens forever!
                    </p>
                  </div>

                  {/* Cash/Meme protection metrics */}
                  <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100 shadow-sm">
                    <div className="flex justify-between text-xs font-bold text-rose-800 mb-2 font-mono">
                      <span>SOLANA SHIELD STRENGTH</span>
                      <span className="text-rose-700 font-bold">RENOUNCED & LOCKED 🔥</span>
                    </div>
                    <div className="h-2 w-full bg-rose-100 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["70%", "100%", "95%", "100%", "85%", "100%"] }} 
                        transition={{ duration: 2, repeat: Infinity }} 
                        className="h-full bg-gradient-to-r from-rose-400 to-rose-600"
                      ></motion.div>
                    </div>
                    <p className="mt-3 text-[11px] font-mono text-rose-700 text-center font-bold">
                      🔒 "Mint Revoked, LP Keys Burned"
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Custom Celebration Splash */}
            {showCelebration && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-rose-500/10 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
              >
                <span className="text-2xl font-display font-black text-white rotate-[-5deg] bg-rose-600 px-4 py-2 rounded-xl shadow-lg border-2 border-white/20">
                  CASPER IS COZY! 🦝🍀
                </span>
              </motion.div>
            )}
          </div>

          {/* Text Story Side - Verbatim Casper story text formatted beautifully with Solana context */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-rose-100 flex flex-col justify-between shadow-lg">
            
            <div className="space-y-8">
              {/* Quote icon styling */}
              <div className="text-rose-200">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Story Content adapted */}
              <div className="space-y-6 font-sans text-rose-950 font-semibold">
                <p className="text-lg leading-relaxed text-rose-900">
                  Meet <span className="bg-rose-50 text-rose-800 border border-rose-100 font-bold px-2 py-0.5 rounded">Casper</span>, a 4-year-old male Albino Northern Raccoon.
                </p>
                <p className="text-xl sm:text-2xl font-display font-black text-rose-950 leading-tight uppercase italic">
                  "Only <span className="text-rose-500">one in every 10,000 to 20,000</span> raccoons is born with an albino mutation."
                </p>
                <p className="text-base leading-relaxed text-rose-950/80">
                  But the real mind-blowing statistic is that the odds of seeing an albino raccoon in adulthood are about <strong>one in 750,000</strong>! You have a better chance of being struck by lightning. Casper beat all odds after surviving a dog attack in his youth, receiving expert veterinary care, and retiring comfortably as a non-releasable legend.
                </p>
                <p className="text-lg font-display font-black tracking-tight text-rose-700">
                  The ultimate lucky mascot on Solana!
                </p>
                <p className="text-base leading-relaxed text-rose-950/80">
                  By bringing Casper onto the blockchain as <span className="text-rose-500 font-black italic">$Casper</span>, we build a community that honors this survivor's rare luck. His limited left front paw is now a legendary diamond glove that never drops a bag!
                </p>

                {/* Statistical highlight box */}
                <div className="bg-rose-50/40 p-5 rounded-2xl border-l-4 border-rose-500 border-t border-r border-b border-rose-100 space-y-2">
                  <span className="block text-xs font-bold text-rose-700 uppercase tracking-wider font-mono">
                    🍀 Lucky Charm Odds:
                  </span>
                  <p className="text-sm font-sans text-rose-950/80 italic">
                    Hitting a 1000x on a normal token is hard. HODLing a 1-in-750,000 miracle like $Casper is the easiest way to secure lightning-fast luck.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer story slogan */}
            <div className="pt-8 mt-8 border-t border-rose-200/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block text-[11px] font-black text-rose-800/40 tracking-wider uppercase font-mono">
                  MINT PERMISSIONS & SECURITY
                </span>
                <p className="font-display font-black text-lg text-rose-950">
                  $Casper — <span className="text-rose-500">Non-releasable & fully locked.</span>
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveTab("safe");
                  setShowCelebration(true);
                  setTimeout(() => setShowCelebration(false), 2000);
                  const element = document.getElementById("interactive-raccoon");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-display font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                Pet Casper to Activate Luck ➔
              </button>
            </div>

          </div>

        </div>

        {/* Question Box */}
        <div className="mt-16 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 text-white p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto shadow-[0_0_35px_rgba(244,63,94,0.2)] text-center relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <h4 className="font-display text-2xl sm:text-3xl font-black text-white uppercase italic drop-shadow-md">
              Are you going to let the rare 1-in-750,000 miracle slip away, or are you ready to claim Casper's lucky diamond paws?
            </h4>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <button
                onClick={() => {
                  const element = document.getElementById("how-to-buy");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-rose-800 hover:text-rose-950 font-display font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-none"
              >
                Acquire $Casper Now ⚡
              </button>
              
              <button
                onClick={() => {
                  const element = document.getElementById("interactive-raccoon");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#4C0519] text-white hover:bg-[#31020E] font-display font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all border-none cursor-pointer"
              >
                Interact With Casper 🦝
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
