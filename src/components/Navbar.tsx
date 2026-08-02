import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, Zap, Eye } from "lucide-react";

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
      {/* Top Ticker Tape - Iridescent Aura Vibe */}
      <div id="top-ticker" className="w-full bg-[#0d041e] text-purple-200 py-2 px-4 text-xs font-mono font-bold tracking-wider overflow-hidden select-none whitespace-nowrap border-b border-purple-900/40">
        <div className="inline-block animate-[marquee_22s_linear_infinite] whitespace-nowrap">
          <span className="mx-4">✨ AURA CAT ($AURACAT) RADIATES INFINITE VIBRATION ON SOLANA!</span>
          <span className="mx-4">👁️ THE HIGHEST FREQUENCY FELINE IN THE COSMOS</span>
          <span className="mx-4">⚡ ZERO TAX, 100% SERENE COMMUNITY AURA</span>
          <span className="mx-4">🔮 ALIGN YOUR FREQUENCY & EMBRACE THE RADIANCY</span>
          <span className="mx-4">👑 ENTER THE AURA SANCTUARY & GROW YOUR PURR-ENERGY!</span>
          <span className="mx-4">✨ AURA CAT ($AURACAT) RADIATES INFINITE VIBRATION ON SOLANA!</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#080314]/95 backdrop-blur-md border-b border-[#3b186b] shadow-xl py-2 text-white"
            : "bg-[#0b041a]/90 backdrop-blur-md border-b border-[#2d1154] py-3 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.45)] group-hover:scale-105 transition-transform bg-[#160830]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/auracat.png?v=1785688369"
                  alt="Aura Cat Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-white uppercase group-hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  Aura <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Cat</span>
                </span>
                <span className="text-[10px] font-mono text-purple-300/80 font-bold -mt-1 tracking-widest">$auracat • SOLANA</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-sans font-bold text-sm text-purple-100/80">
              <button onClick={() => scrollToSection("story")} className="hover:text-purple-400 transition-colors cursor-pointer">
                The Aura
              </button>
              <button onClick={() => scrollToSection("interactive-lounge")} className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-pink-400" /> Sanctuary
              </button>
              <button onClick={() => scrollToSection("tokenomics")} className="hover:text-purple-400 transition-colors cursor-pointer">
                Tokenomics
              </button>
              <button onClick={() => scrollToSection("aura-roadmap")} className="hover:text-purple-400 transition-colors cursor-pointer">
                Roadmap
              </button>
            </nav>

            {/* Aura CTA */}
            <div className="hidden md:flex items-center space-x-4 relative">
              <button
                onClick={() => scrollToSection("interactive-lounge")}
                id="explore-aura-btn-header"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-display font-black text-sm shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-2 border-none"
              >
                Enter Sanctuary <Sparkles className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-[#1c0a3b] hover:text-purple-400 border border-[#3b186b] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
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
              className="md:hidden bg-[#080314] border-b border-[#3b186b] shadow-xl px-4 pt-2 pb-6 space-y-4"
            >
              <nav className="flex flex-col space-y-3 font-sans font-medium text-white">
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#1c0a3b] hover:text-purple-400 transition-all text-sm"
                >
                  The Aura
                </button>
                <button
                  onClick={() => scrollToSection("interactive-lounge")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#1c0a3b] hover:text-purple-400 transition-all text-sm flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-pink-400" /> Sanctuary
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#1c0a3b] hover:text-purple-400 transition-all text-sm"
                >
                  Tokenomics
                </button>
                <button
                  onClick={() => scrollToSection("aura-roadmap")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#1c0a3b] hover:text-purple-400 transition-all text-sm"
                >
                  Roadmap
                </button>
              </nav>

              <div className="pt-4 border-t border-[#3b186b] flex items-center justify-center">
                <button
                  onClick={() => scrollToSection("interactive-lounge")}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-display font-black text-sm shadow-md border-none flex items-center justify-center gap-2"
                >
                  Enter Sanctuary <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

