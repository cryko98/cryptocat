import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Compass, Sparkles, Feather, Clock, Quote, Heart, Award, Eye } from "lucide-react";

export default function Story() {
  const [selectedChronicle, setSelectedChronicle] = useState<number>(0);

  const chronicles = [
    {
      id: "lore-1",
      tag: "MARKET LORE • EST. LONG AGO",
      title: "A Cat Walked Into the Market— Curiosity Sparked a Legend",
      subtitle: "The Genesis at Dawn",
      quote: "No one knows where she came from, but she had a way of showing up at the right moment.",
      fullText: [
        "They say a curious cat named CASHCATE wandered into the market at dawn. No one knows where she came from, but she had a way of showing up at the right moment. From that day on, the legend of CASHCATE began.",
        "Traders in the morning mist noticed how she walked with serene confidence, stepping lightly between stalls of spices, silk, and gold. She never hurried, never panicked when the crowds surged, and always seemed to anticipate the rhythm of the day.",
        "To this day, market veterans speak of her arrival as the turning point: the moment when ordinary commerce was touched by a spark of feline serendipity.",
      ],
      highlightPhrase: "Curiosity sparked a legend in every pawstep",
      stat: "EST. LONG AGO • SOLANA",
    },
    {
      id: "lore-2",
      tag: "FOUNDERS' NOTE • PASSED DOWN",
      title: "“Curiosity Creates Opportunity,” — That’s Why We Love CASHCATE.",
      subtitle: "The Timeless Philosophy",
      quote: "Curiosity can turn the ordinary into the extraordinary.",
      fullText: [
        "Some called her lucky. Some called it fate. But those who saw her knew—she had a spark. CASHCATE reminds us that curiosity can turn the ordinary into the extraordinary.",
        "While other traders rushed blindly after rumors, those who watched CASHCATE learned the virtue of patient observation. She taught the market that genuine opportunity doesn't come from chaos, but from quiet, inquisitive composure.",
        "We hold CASHCATE because she stands for unshakeable belief, transparent community, and the timeless truth that an open mind discovers what everyone else walks right past.",
      ],
      highlightPhrase: "Curiosity creates opportunity, composure creates legacy",
      stat: "100% COMMUNITY RESONANCE",
    },
    {
      id: "lore-3",
      tag: "WINDOWSILL CHRONICLE",
      title: "A Golden Figure on the Windowsill Sees What Others Miss",
      subtitle: "The High Vantage Point",
      quote: "She watches in silence, sees what others overlook, and finds beauty in the quiet details.",
      fullText: [
        "Every morning, a golden cat appears. She watches in silence, sees what others overlook, and finds beauty in the quiet details. The newcomer has a name: CASHCATE.",
        "Perched high on the sunlit stone windowsill overlooking the busy square, her golden fur catching the early sunlight, CASHCATE looks down with timeless grace. The gold coins stacked below her tell the story of patience rewarded.",
        "In a market full of noise, her calm presence is an anchor. Those who look up to the windowsill are reminded to pause, breathe, and see the bigger picture.",
      ],
      highlightPhrase: "Seeing what others miss from the golden windowsill",
      stat: "SILENT PERCEPTION • 432 HZ",
    },
    {
      id: "lore-4",
      tag: "MARKET CHRONICLES • VOL. 1 • NO. 7",
      title: "CASHCATE Roams the Market Still— A Legend in Every Pawstep.",
      subtitle: "The Living Legend",
      quote: "Through every season, through every change, CASHCATE is here—curious, calm, and timeless.",
      fullText: [
        "She explores every corner, from busy streets to quiet alleys. Through every season, through every change, CASHCATE is here—curious, calm, and timeless.",
        "Bull markets, bear markets, sunny dawns, or stormy afternoons: CASHCATE's pawsteps remain steady. She belongs to no single merchant, but is beloved by everyone who values sincerity and wonder.",
        "Her story is written into the stones of the market, passed down through whispers, ledger entries, and now, immortalized forever on the Solana blockchain.",
      ],
      highlightPhrase: "Curious, calm, and timeless in every pawstep",
      stat: "VOL. 1 • NO. 7 • IMMORTALIZED",
    },
  ];

  return (
    <section
      id="chronicles"
      className="relative py-20 sm:py-28 bg-[#f5e6be] text-[#1c1305] overflow-hidden border-t-2 border-[#b48c3c] vintage-ledger-grid selection:bg-[#fde047] selection:text-[#1c1305]"
    >
      {/* Warm parchment ambient light */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[30%] left-[10%] w-[450px] h-[450px] bg-[#f59e0b] rounded-full blur-[160px] opacity-25"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-[#fbbf24] rounded-full blur-[150px] opacity-35"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div id="market-lore" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fcf6e8] border border-[#b48c3c] shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#b45309]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#78350f]">
              THE COMPLETE MARKET CHRONICLES
            </span>
          </div>

          <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#1c1305] tracking-tight uppercase">
            The Lore of <span className="text-[#b45309]">Cashcate</span>
          </h2>
          <p className="font-serif italic text-base sm:text-xl text-[#78350f] font-semibold max-w-2xl mx-auto">
            Read the handwritten chronicles and timeless notes passed down through generations of market traders.
          </p>
        </div>

        {/* 4 Interactive Parchment Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {chronicles.map((item, idx) => {
            const isSelected = selectedChronicle === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedChronicle(idx)}
                className={`text-left p-5 rounded-sm border transition-all duration-300 relative cursor-pointer ${
                  isSelected
                    ? "bg-[#fcf6e8] border-[#92400e] shadow-[0_8px_25px_rgba(58,38,7,0.2)] scale-[1.02] ring-2 ring-[#d97706]/40"
                    : "bg-[#faedd0]/80 border-[#cbb07a] hover:bg-[#fcf6e8] hover:border-[#b48c3c] opacity-80 hover:opacity-100"
                }`}
              >
                {/* Yellow tape effect if selected */}
                {isSelected && (
                  <div className="absolute -top-3 right-4 w-12 h-5 bg-[#fef08a] border border-[#eab308] rotate-[-8deg] shadow-sm pointer-events-none"></div>
                )}

                <div className="space-y-2">
                  <span className="block text-[10px] font-mono font-bold text-[#92400e] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <h3 className="font-serif font-black text-lg text-[#1c1305] line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <span className="block text-xs font-serif italic text-[#78350f] font-semibold">
                    {item.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Chronicle Reading Stand */}
        <AnimatePresence mode="wait">
          <motion.div
            key={chronicles[selectedChronicle].id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="parchment-card p-8 sm:p-12 rounded-sm border-2 border-[#b48c3c] shadow-2xl relative"
          >
            {/* Top pushpins on parchment corners */}
            <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-[#1c1305] border-2 border-[#78350f] shadow-md"></div>
            <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#1c1305] border-2 border-[#78350f] shadow-md"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left text column */}
              <div className="lg:col-span-8 space-y-6">
                
                <div className="border-b border-[#cbb07a] pb-4 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#b45309] uppercase tracking-widest block">
                    {chronicles[selectedChronicle].tag}
                  </span>
                  <h3 className="font-serif font-black text-2xl sm:text-4xl text-[#1c1305] leading-tight">
                    {chronicles[selectedChronicle].title}
                  </h3>
                  <span className="inline-block text-xs font-mono font-bold text-[#78350f] bg-[#fef08a] px-2.5 py-0.5 rounded border border-[#eab308]">
                    {chronicles[selectedChronicle].stat}
                  </span>
                </div>

                {/* Highlighted Quote Box */}
                <div className="p-5 rounded bg-[#f5e8c4] border-l-4 border-[#b45309] border-y border-r border-[#cbb07a] shadow-inner flex items-start gap-3.5">
                  <Quote className="w-8 h-8 text-[#b45309] flex-shrink-0 opacity-80" />
                  <p className="font-serif italic text-lg sm:text-xl font-bold text-[#1c1305] leading-snug">
                    “{chronicles[selectedChronicle].quote}”
                  </p>
                </div>

                {/* Body Paragraphs */}
                <div className="space-y-4 font-serif text-base sm:text-lg text-[#38260d] leading-relaxed">
                  {chronicles[selectedChronicle].fullText.map((p, pIdx) => (
                    <p key={pIdx}>
                      {p.includes("CASHCATE") ? (
                        <>
                          {p.split("CASHCATE").map((chunk, cIdx, arr) => (
                            <React.Fragment key={cIdx}>
                              {chunk}
                              {cIdx < arr.length - 1 && (
                                <span className="highlight-yellow">CASHCATE</span>
                              )}
                            </React.Fragment>
                          ))}
                        </>
                      ) : (
                        p
                      )}
                    </p>
                  ))}
                </div>

                {/* Signature of the chronicler */}
                <div className="pt-4 border-t border-[#cbb07a] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#78350f]">
                    <Feather className="w-4 h-4 text-[#b45309]" />
                    <span>Archived in the Cashcate Ledger • Volume 1</span>
                  </div>
                  <span className="font-serif italic font-bold text-sm text-[#92400e]">
                    ~ The Market Scribe
                  </span>
                </div>

              </div>

              {/* Right column: Archival Coin & Stamp Exhibit */}
              <div className="lg:col-span-4 flex flex-col items-center space-y-6">
                
                <div className="p-4 rounded bg-[#fdf8ee] border-2 border-[#b48c3c] shadow-lg text-center space-y-4 w-full">
                  <div className="relative w-44 h-44 mx-auto rounded-full p-2 bg-gradient-to-tr from-[#92400e] via-[#f59e0b] to-[#fef08a] shadow-[0_0_25px_rgba(217,119,6,0.4)]">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-08-07_20-34-51.jpg?v=1786124116"
                      alt="Cashcate Seal"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="font-serif font-black text-xl text-[#1c1305] block">
                      Cashcate ($cashcate)
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#78350f] block">
                      The Golden Market Feline
                    </span>
                  </div>

                  <div className="p-3 bg-[#f5e8c4] rounded border border-[#cbb07a] text-left text-xs font-mono space-y-1 text-[#38260d]">
                    <div className="flex justify-between">
                      <span className="text-[#78350f]">Composure:</span>
                      <span className="font-bold text-[#1c1305]">100% Serene</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#78350f]">Tax:</span>
                      <span className="font-bold text-[#1c1305]">0% Forever</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#78350f]">Curiosity:</span>
                      <span className="font-bold text-[#b45309]">Infinite</span>
                    </div>
                  </div>
                </div>

                {/* Archival Wax Seal / Badge */}
                <div className="w-full p-4 rounded bg-[#f7eed4] border border-[#cbb07a] text-center space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#78350f] uppercase tracking-widest block">
                    SANCTUARY RULE
                  </span>
                  <p className="font-serif italic font-bold text-sm text-[#1c1305]">
                    “Curiosity Creates Opportunity — That’s Why We Love Cashcate.”
                  </p>
                </div>

              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
