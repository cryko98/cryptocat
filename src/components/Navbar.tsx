import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, TrendingUp, BookOpen, Coins, Compass } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Ticker Tape - Golden Market Lore Marquee */}
      <div id="top-ticker" className="w-full bg-[#1c1305] text-[#fef08a] py-2 px-4 text-xs font-mono font-bold tracking-wider overflow-hidden select-none whitespace-nowrap border-b border-[#785317]/60">
        <div className="inline-block animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          <span className="mx-4 text-[#fde047] font-black">✨ MARKET LORE • EST. LONG AGO</span>
          <span className="mx-4 text-white">“CURIOSITY CREATES OPPORTUNITY” — THAT'S WHY WE LOVE CASHCATE</span>
          <span className="mx-4 text-[#facc15]">📜 A GOLDEN FIGURE ON THE WINDOWSILL SEES WHAT OTHERS MISS</span>
          <span className="mx-4 text-white">🐾 A LEGEND IN EVERY PAWSTEP • $CASHCATE</span>
          <span className="mx-4 text-[#fde047] font-black">🪙 0% TAX • 100% BURNED LP • PURE GOLDEN CURIOSITY</span>
          <span className="mx-4 text-white">🐱 THEY SAY A CURIOUS CAT NAMED CASHCATE WANDERED INTO THE MARKET AT DAWN</span>
          <span className="mx-4 text-[#fde047] font-black">✨ MARKET LORE • EST. LONG AGO</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#1c1406]/95 backdrop-blur-md border-b border-[#785317] shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-2 text-white"
            : "bg-[#261a08]/90 backdrop-blur-md border-b border-[#785317]/50 py-3 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#eab308] shadow-[0_0_20px_rgba(234,179,8,0.45)] group-hover:scale-105 transition-transform bg-[#2e1f0a]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-08-07_20-34-51.jpg?v=1786124116"
                  alt="Cashcate Golden Coin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-black text-2xl tracking-tight text-white uppercase italic group-hover:text-[#facc15] transition-colors">
                    Cash<span className="text-[#facc15]">cate</span>
                  </span>
                  <span className="text-[10px] font-mono font-black text-[#1c1305] bg-[#facc15] px-1.5 py-0.5 rounded shadow-sm">
                    $cashcate
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#fde047]/80 font-bold -mt-0.5 tracking-widest">
                  Curiosity Creates Opportunity
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 font-mono font-bold text-xs uppercase tracking-wider text-[#fde047]/90">
              <button onClick={() => scrollToSection("market-lore")} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <BookOpen className="w-3.5 h-3.5 text-[#facc15]" />
                Market Lore
              </button>
              <button onClick={() => scrollToSection("chronicles")} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <Compass className="w-3.5 h-3.5 text-[#facc15]" />
                Chronicles
              </button>
              <button onClick={() => scrollToSection("interactive-lounge")} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
                Opportunity Lounge
              </button>
              <button onClick={() => scrollToSection("tokenomics")} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <Coins className="w-3.5 h-3.5 text-[#facc15]" />
                Golden Ledger
              </button>
              <button onClick={() => scrollToSection("roadmap")} className="hover:text-white transition-colors cursor-pointer border-none bg-transparent">
                Volumes
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3 relative">
              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#2e1f0a] hover:bg-[#3d2a0d] border border-[#785317] hover:border-[#eab308] text-[#fde047] hover:text-white font-mono font-bold text-xs transition-all flex items-center gap-1.5 shadow-md"
              >
                <TrendingUp className="w-3.5 h-3.5 text-[#facc15]" />
                Live Chart
              </a>

              <button
                onClick={() => scrollToSection("interactive-lounge")}
                id="explore-cashcate-header-btn"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#eab308] hover:from-[#b45309] hover:to-[#d97706] text-[#1c1305] font-display font-black text-xs shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer border-none"
              >
                <Sparkles className="w-4 h-4 text-[#1c1305]" />
                Explore Lore
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#2e1f0a] text-[#facc15] hover:text-white border border-[#785317] focus:outline-none cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#1c1406] border-b border-[#785317] shadow-xl px-4 pt-2 pb-6 space-y-4"
            >
              <nav className="flex flex-col space-y-3 font-mono font-medium text-[#fde047]">
                <button
                  onClick={() => scrollToSection("market-lore")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2e1f0a] hover:text-white transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <BookOpen className="w-4 h-4 text-[#facc15]" /> Market Lore
                </button>
                <button
                  onClick={() => scrollToSection("chronicles")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2e1f0a] hover:text-white transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <Compass className="w-4 h-4 text-[#facc15]" /> Chronicles
                </button>
                <button
                  onClick={() => scrollToSection("interactive-lounge")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2e1f0a] hover:text-white transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <Sparkles className="w-4 h-4 text-[#facc15]" /> Opportunity Lounge
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2e1f0a] hover:text-white transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <Coins className="w-4 h-4 text-[#facc15]" /> Golden Ledger
                </button>
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2e1f0a] hover:text-white transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  📜 Volumes & Milestones
                </button>
              </nav>

              <div className="pt-4 border-t border-[#785317] flex flex-col gap-2.5">
                <a
                  href="https://dexscreener.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#2e1f0a] border border-[#785317] text-[#fde047] font-mono font-bold text-xs flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-4 h-4 text-[#facc15]" /> DexScreener Chart
                </a>

                <button
                  onClick={() => scrollToSection("interactive-lounge")}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#d97706] to-[#eab308] text-[#1c1305] font-display font-black text-sm shadow-md border-none flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Explore Opportunity Lounge
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
