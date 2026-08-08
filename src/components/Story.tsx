import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Compass, Sparkles, Send, Heart, Award, Leaf, Smile } from "lucide-react";
import { TELEGRAM_URL, CHILLTOAD_LOGO } from "../constants";

export default function Story() {
  const [selectedChronicle, setSelectedChronicle] = useState<number>(0);

  const toadChronicles = [
    {
      id: "lore-1",
      tag: "POND ORIGINS • CHAPTER I",
      title: "A Toad Sat on a Lily Pad at Dawn — And Never Looked Back",
      subtitle: "The Genesis of Pure Chill",
      quote: "While other creatures rushed to and fro, the Toad simply breathed, finding contentment right where he sat.",
      fullText: [
        "In the tranquil mist of the early morning pond, before the world woke up to endless chaos and noise, a lone toad climbed aboard a floating green lily pad. He didn't come to conquer, he didn't come to rush—he came simply to chill.",
        "Traders and travelers passing through the marsh paused to watch him. He watched the water ripples gently disperse, never flinching at passing storms or sudden surges. He had found the greatest secret in all of nature: absolute composure.",
        "From that morning onward, the pond was never the same. The legend of Just a chill Toad was born, reminding everyone that peace of mind is the ultimate treasure on Solana.",
      ],
      highlightPhrase: "Unbothered by the storms, peaceful on the pad",
      stat: "IMMUTABLE CHILL • SOLANA",
    },
    {
      id: "lore-2",
      tag: "ZEN PHILOSOPHY • CHAPTER II",
      title: "“Why Stress When the Lily Pad is Wide?”",
      subtitle: "The Timeless Marsh Creed",
      quote: "Rushing only creates ripples. Stillness reflects the entire sky.",
      fullText: [
        "Some called it laziness. But the wise knew better—it was supreme mastery of energy. Just a chill Toad taught that true power isn't about running faster on the hamster wheel; it's about knowing when to sit still and enjoy the sunlight.",
        "In a market driven by panic, FOMO, and sleepless nights, the Chill Toad offers a sanctuary of calm. He sits with his webbed feet relaxed, smoking his pipe, soaking in the good vibes, and sharing laughs with fellow pond dwellers.",
        "When you hold $chilltoad, you aren't just holding a token; you're joining a movement of relaxed souls who refuse to let the world's madness disturb their peace.",
      ],
      highlightPhrase: "Stillness reflects the sky, chill creates clarity",
      stat: "100% RELAXATION GUARANTEE",
    },
    {
      id: "lore-3",
      tag: "MARSH WISDOM • CHAPTER III",
      title: "The Water Speaks to Those Who Listen",
      subtitle: "Patience Over Panic",
      quote: "The pond always balances itself out. The waves calm, the lotus blooms, and the toad remains.",
      fullText: [
        "Every seasoned traveler of the crypto marsh knows the trials: red days, choppy waters, and endless rumors. Yet whenever someone visits the Chill Toad's lily pad, they are greeted by the same serene grin.",
        "“Did the pond dry up?” asks the Toad. “No. Did the sun stop shining? No. Then take a deep breath, close your eyes, and let the current carry you.”",
        "His pond philosophy has cured countless paper hands, turning panicked traders into serene Zen masters who understand that patience always wins.",
      ],
      highlightPhrase: "Patience over panic in every market season",
      stat: "ZERO FUMBLES RECORD",
    },
    {
      id: "lore-4",
      tag: "LIVING LEGEND • CHAPTER IV",
      title: "The Chill Toad Vibing Forever on Solana",
      subtitle: "The Eternal Pond Community",
      quote: "Through bull or bear, rain or shine, the chill toad's vibe remains untouchable.",
      fullText: [
        "Today, the pond has grown into a global sanctuary. Thousands of chillers gather daily in the Telegram to share memes, listen to the water drops, and embrace the unbothered lifestyle.",
        "With 0% tax, 100% burned liquidity, and no shady insider schemes, the Chill Toad represents the purest spirit of community-driven fun and serenity on the Solana blockchain.",
        "The story is written in the tranquil waters, echoed in every gentle ribbit, and celebrated by everyone who knows how to kick back and enjoy the ride.",
      ],
      highlightPhrase: "The chillest community in all of Solana",
      stat: "GLOBAL CHILL MOVEMENT",
    },
  ];

  return (
    <section
      id="pond-lore"
      className="relative py-20 sm:py-28 bg-[#0b2419] text-white overflow-hidden border-t-2 border-b-2 border-[#2d6a4f] pond-water-grid selection:bg-[#74c69d] selection:text-[#081c15]"
    >
      {/* Pond ambient glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[30%] left-[10%] w-[450px] h-[450px] bg-[#52b788]/15 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-[#2d6a4f]/20 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112d20] border border-[#52b788]/60 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#74c69d]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d8f3dc]">
              THE CHRONICLES OF THE CHILL TOAD
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            The Lore of <span className="text-[#74c69d]">Chill Toad Pepe</span>
          </h2>
          <p className="font-sans text-base sm:text-xl text-[#b7e4c7] font-medium max-w-2xl mx-auto">
            Discover how a simple green amphibian on a floating lily pad became the patron saint of unbothered composure on Solana.
          </p>
        </div>

        {/* 4 Interactive Parchment Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {toadChronicles.map((item, idx) => {
            const isSelected = selectedChronicle === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedChronicle(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative cursor-pointer ${
                  isSelected
                    ? "bg-[#163824] border-[#74c69d] shadow-[0_8px_30px_rgba(82,183,136,0.3)] scale-[1.02] ring-2 ring-[#74c69d]/40"
                    : "bg-[#0f2d20]/80 border-[#2d6a4f] hover:bg-[#163824] hover:border-[#52b788] opacity-80 hover:opacity-100"
                }`}
              >
                {/* Floating Lily Icon indicator if selected */}
                {isSelected && (
                  <div className="absolute -top-3 right-4 px-2 py-0.5 rounded-full bg-[#74c69d] text-[#081c15] text-[10px] font-mono font-black shadow-sm">
                    🪷 ACTIVE CHAPTER
                  </div>
                )}

                <div className="space-y-2">
                  <span className="block text-[10px] font-mono font-bold text-[#74c69d] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <h3 className="font-display font-black text-lg text-white line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <span className="block text-xs font-sans text-[#b7e4c7] font-medium">
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
            key={toadChronicles[selectedChronicle].id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="pond-card p-8 sm:p-12 rounded-2xl border-2 border-[#52b788] shadow-2xl relative"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2d6a4f] pb-6 mb-8">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#74c69d] uppercase tracking-widest block">
                  {toadChronicles[selectedChronicle].tag}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                  {toadChronicles[selectedChronicle].title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-[#081c15] text-[#74c69d] font-mono font-bold text-xs border border-[#2d6a4f]">
                  {toadChronicles[selectedChronicle].stat}
                </span>
              </div>
            </div>

            {/* Quote Block */}
            <div className="p-6 rounded-xl bg-[#081c15]/90 border border-[#52b788]/60 mb-8 relative">
              <span className="text-4xl text-[#52b788] font-serif leading-none absolute top-2 left-3 opacity-40">“</span>
              <p className="font-serif italic text-lg sm:text-2xl text-[#d8f3dc] pl-6 font-medium leading-relaxed">
                {toadChronicles[selectedChronicle].quote}
              </p>
            </div>

            {/* Paragraph Content */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#d8f3dc]/90 leading-relaxed max-w-4xl">
              {toadChronicles[selectedChronicle].fullText.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Bottom highlight pill and Telegram invite */}
            <div className="mt-8 pt-6 border-t border-[#2d6a4f] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#74c69d]" />
                <span className="text-xs font-mono font-bold text-[#74c69d]">
                  {toadChronicles[selectedChronicle].highlightPhrase}
                </span>
              </div>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#0088cc] hover:bg-[#0099e6] text-white font-mono font-bold text-xs flex items-center gap-2 shadow-md transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Discuss in Telegram: t.me/chilltoad</span>
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
