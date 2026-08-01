import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket, Sparkles, Orbit } from "lucide-react";

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
      {/* Top Ticker Tape - Cosmic Martian Atmosphere */}
      <div id="top-ticker" className="w-full bg-[#120503] text-orange-200 py-2 px-4 text-xs font-mono font-bold tracking-wider overflow-hidden select-none whitespace-nowrap border-b border-orange-900/40">
        <div className="inline-block animate-[marquee_22s_linear_infinite] whitespace-nowrap">
          <span className="mx-4">🚀 MARS CAT ($MARSCAT) IS CONQUERING THE RED PLANET!</span>
          <span className="mx-4">🪐 THE FIRST INTERPLANETARY FELINE ON SOLANA</span>
          <span className="mx-4">🌋 ZERO GRAVITY, MAXIMUM COSMIC PROPULSION</span>
          <span className="mx-4">🔥 100% COMMUNITY EXPEDITION TO OLYMPUS MONS</span>
          <span className="mx-4">✨ JOIN THE MARS COLONY & EXPLORE THE COSMOS!</span>
          <span className="mx-4">🚀 MARS CAT ($MARSCAT) IS CONQUERING THE RED PLANET!</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0c0403]/95 backdrop-blur-md border-b border-[#3f160b] shadow-xl py-2 text-white"
            : "bg-[#110604]/90 backdrop-blur-md border-b border-[#2d1209] py-3 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.4)] group-hover:scale-105 transition-transform bg-[#1f0a07]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/marslogo.jpg?v=1785580623"
                  alt="Mars Cat Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-white uppercase group-hover:text-orange-500 transition-colors flex items-center gap-1.5">
                  Mars <span className="text-orange-500">Cat</span>
                </span>
                <span className="text-[10px] font-mono text-orange-300/80 font-bold -mt-1 tracking-widest">$marscat • SOLANA</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-sans font-bold text-sm text-orange-100/80">
              <button onClick={() => scrollToSection("story")} className="hover:text-orange-400 transition-colors cursor-pointer">
                The Mission
              </button>
              <button onClick={() => scrollToSection("interactive-lounge")} className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-1.5">
                <Orbit className="w-4 h-4 text-orange-500" /> Mars Base
              </button>
              <button onClick={() => scrollToSection("tokenomics")} className="hover:text-orange-400 transition-colors cursor-pointer">
                Tokenomics
              </button>
              <button onClick={() => scrollToSection("mars-mission")} className="hover:text-orange-400 transition-colors cursor-pointer">
                Roadmap
              </button>
            </nav>

            {/* Mission CTA */}
            <div className="hidden md:flex items-center space-x-4 relative">
              <button
                onClick={() => scrollToSection("interactive-lounge")}
                id="explore-mars-btn-header"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-orange-600 text-white font-display font-black text-sm shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-2 border-none"
              >
                Launch Base <Rocket className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-[#2a0e08] hover:text-orange-400 border border-[#4a1c0d] transition-colors"
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
              className="md:hidden bg-[#0c0403] border-b border-[#3f160b] shadow-xl px-4 pt-2 pb-6 space-y-4"
            >
              <nav className="flex flex-col space-y-3 font-sans font-medium text-white">
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2a0e08] hover:text-orange-400 transition-all text-sm"
                >
                  The Mission
                </button>
                <button
                  onClick={() => scrollToSection("interactive-lounge")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2a0e08] hover:text-orange-400 transition-all text-sm flex items-center gap-2"
                >
                  <Orbit className="w-4 h-4 text-orange-500" /> Mars Base
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2a0e08] hover:text-orange-400 transition-all text-sm"
                >
                  Tokenomics
                </button>
                <button
                  onClick={() => scrollToSection("mars-mission")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2a0e08] hover:text-orange-400 transition-all text-sm"
                >
                  Roadmap
                </button>
              </nav>

              <div className="pt-4 border-t border-[#3f160b] flex items-center justify-center">
                <button
                  onClick={() => scrollToSection("interactive-lounge")}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-display font-black text-sm shadow-md border-none flex items-center justify-center gap-2"
                >
                  Launch Base <Rocket className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

