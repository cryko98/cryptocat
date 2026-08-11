import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, TrendingUp, BookOpen, Coins, Send, Copy, Check, Dumbbell, Flame } from "lucide-react";
import { GIGATOAD_NAME, GIGATOAD_TICKER, GIGATOAD_LOGO, GIGATOAD_CA, TELEGRAM_URL, DEXSCREENER_URL, PUMPFUN_URL } from "../constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(GIGATOAD_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2000);
  };

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
      {/* Top Ticker Tape - Giga Chad Alpha Marquee */}
      <div id="top-ticker" className="w-full bg-[#050d1a] text-[#f8fafc] py-2 px-4 text-xs font-mono font-bold tracking-wider overflow-hidden select-none whitespace-nowrap border-b border-[#1e3a8a]/70">
        <div className="inline-block animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          <span className="mx-4 text-[#00ff88] font-black">💪 GIGA TOAD PEPE • THE MOST ALPHA TOAD IN THE SOLANA UNIVERSE</span>
          <span className="mx-4 text-[#38bdf8]">⚡ CA: {GIGATOAD_CA}</span>
          <span className="mx-4 text-white">“BENCHING 1000KG ON THE LILY PAD — ZERO WEAK HANDS”</span>
          <span className="mx-4 text-[#00ff88]">🔥 $GIGATOAD • 100% ALPHA GAINS</span>
          <span className="mx-4 text-white">🪙 0% TAX • 100% LP BURNED • PURE CHAD MUSCLE</span>
          <span className="mx-4 text-[#38bdf8]">🌊 SOLANA’S MOST JACKED AMPHIBIAN</span>
          <span className="mx-4 text-[#00ff88]">⚡ CONTRACT: {GIGATOAD_CA}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#071326]/95 backdrop-blur-md border-b border-[#1e3a8a] shadow-[0_8px_30px_rgba(0,0,0,0.8)] py-2 text-white"
            : "bg-[#091a32]/90 backdrop-blur-md border-b border-[#1e3a8a]/50 py-3 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.45)] group-hover:scale-105 transition-transform bg-[#050d1a]">
                <img
                  src={GIGATOAD_LOGO}
                  alt="Giga Toad Pepe Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#00ff88] transition-colors">
                    Giga Toad <span className="text-[#00ff88]">Pepe</span>
                  </span>
                  <span className="text-[10px] font-mono font-black text-[#050d1a] bg-[#00ff88] px-2 py-0.5 rounded-full shadow-sm">
                    {GIGATOAD_TICKER}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#38bdf8] font-bold -mt-0.5 tracking-widest flex items-center gap-1">
                  <Dumbbell className="w-2.5 h-2.5 text-[#00ff88]" /> Most Alpha Toad in Solana
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 font-mono font-bold text-xs uppercase tracking-wider text-white/90">
              <button onClick={() => scrollToSection("giga-lore")} className="hover:text-[#00ff88] transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <BookOpen className="w-3.5 h-3.5 text-[#00ff88]" />
                Giga Lore
              </button>
              <button onClick={() => scrollToSection("alpha-gym")} className="hover:text-[#00ff88] transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <Dumbbell className="w-3.5 h-3.5 text-[#00ff88]" />
                Alpha Gym
              </button>
              <button onClick={() => scrollToSection("tokenomics")} className="hover:text-[#00ff88] transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <Coins className="w-3.5 h-3.5 text-[#00ff88]" />
                Chad Ledger
              </button>
              <button onClick={() => scrollToSection("roadmap")} className="hover:text-[#00ff88] transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <Flame className="w-3.5 h-3.5 text-[#00ff88]" />
                Roadmap
              </button>
            </nav>

            {/* Quick Actions, CA Copy & Links */}
            <div className="hidden md:flex items-center space-x-2 relative">
              {/* Copy CA Button */}
              <button
                onClick={handleCopyCA}
                title="Copy Contract Address"
                className="px-3 py-2 rounded-xl bg-[#0b213f] hover:bg-[#0f2b52] border border-[#00ff88]/50 text-white font-mono font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                {copiedCA ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5 text-[#00ff88]" />}
                <span className="hidden xl:inline text-[#00ff88]">CA:</span>
                <span>{GIGATOAD_CA.slice(0, 4)}...{GIGATOAD_CA.slice(-4)}</span>
                {copiedCA && <span className="text-[10px] text-[#00ff88] font-bold">Copied!</span>}
              </button>

              {/* Telegram Official Pill (Handles empty URL gracefully) */}
              {TELEGRAM_URL ? (
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="header-telegram-btn"
                  className="px-3.5 py-2 rounded-xl bg-[#0088cc]/20 hover:bg-[#0088cc]/35 border border-[#0088cc]/60 text-[#70d6ff] hover:text-white font-mono font-bold text-xs transition-all flex items-center gap-1.5 shadow-md group"
                >
                  <Send className="w-3.5 h-3.5 text-[#00a8ff] group-hover:rotate-12 transition-transform" />
                  <span>Telegram</span>
                </a>
              ) : (
                <span
                  title="Telegram channel opening soon"
                  className="px-3 py-2 rounded-xl bg-[#0b213f]/80 border border-[#1e3a8a] text-[#94a3b8] font-mono font-bold text-xs flex items-center gap-1.5 select-none"
                >
                  <Send className="w-3.5 h-3.5 text-[#38bdf8]/60" />
                  <span>Telegram (Soon)</span>
                </span>
              )}

              <a
                href={DEXSCREENER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#0f2b52] hover:bg-[#153a6f] border border-[#38bdf8]/60 text-white font-mono font-bold text-xs transition-all flex items-center gap-1.5 shadow-md"
              >
                <TrendingUp className="w-3.5 h-3.5 text-[#00ff88]" />
                <span>Chart</span>
              </a>

              <a
                href={PUMPFUN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#092244] hover:bg-[#0d2e5b] border border-[#00ff88]/60 text-[#00ff88] font-mono font-bold text-xs transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>💊</span>
                <span>Pump.fun</span>
              </a>

              <button
                onClick={() => scrollToSection("alpha-gym")}
                id="explore-alpha-gym-header-btn"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00ff88] via-[#10b981] to-[#38bdf8] hover:from-[#00ff88] hover:to-[#10b981] text-[#050d1a] font-display font-black text-xs shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer border-none"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#050d1a]" />
                Alpha Gym
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#0b213f] text-[#00ff88] hover:text-white border border-[#1e3a8a] focus:outline-none cursor-pointer"
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
              className="lg:hidden bg-[#071326] border-b border-[#1e3a8a] shadow-xl px-4 pt-2 pb-6 space-y-4"
            >
              {/* Contract Address for Mobile */}
              <button
                onClick={handleCopyCA}
                className="w-full p-3 rounded-xl bg-[#091a32] border border-[#00ff88]/50 flex items-center justify-between text-white cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {copiedCA ? <Check className="w-4 h-4 text-[#00ff88]" /> : <Copy className="w-4 h-4 text-[#00ff88]" />}
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-[#00ff88] block font-bold">SOLANA CONTRACT ADDRESS</span>
                    <span className="text-xs font-mono font-bold text-white">{GIGATOAD_CA.slice(0, 8)}...{GIGATOAD_CA.slice(-8)}</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold bg-[#0b213f] text-[#00ff88] px-2.5 py-1 rounded border border-[#00ff88]/40">
                  {copiedCA ? "Copied!" : "Copy CA"}
                </span>
              </button>

              <nav className="flex flex-col space-y-3 font-mono font-medium text-white">
                <button
                  onClick={() => scrollToSection("giga-lore")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#0b213f] hover:text-[#00ff88] transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <BookOpen className="w-4 h-4 text-[#00ff88]" /> Giga Lore
                </button>
                <button
                  onClick={() => scrollToSection("alpha-gym")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#0b213f] hover:text-[#00ff88] transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <Dumbbell className="w-4 h-4 text-[#00ff88]" /> Alpha Gym & Gains Clicker
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#0b213f] hover:text-[#00ff88] transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <Coins className="w-4 h-4 text-[#00ff88]" /> Chad Ledger
                </button>
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#0b213f] hover:text-[#00ff88] transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <Flame className="w-4 h-4 text-[#00ff88]" /> Giga Roadmap
                </button>
              </nav>

              <div className="pt-4 border-t border-[#1e3a8a] flex flex-col gap-2.5">
                <a
                  href={DEXSCREENER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b213f] border border-[#1e3a8a] text-white font-mono font-bold text-xs flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-4 h-4 text-[#00ff88]" /> DexScreener Chart
                </a>

                <a
                  href={PUMPFUN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#092244] border border-[#00ff88]/50 text-[#00ff88] font-mono font-bold text-xs flex items-center justify-center gap-2"
                >
                  <span>💊</span> Pump.fun
                </a>

                <button
                  onClick={() => scrollToSection("alpha-gym")}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#38bdf8] text-[#050d1a] font-display font-black text-sm shadow-md border-none flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Enter Alpha Gym
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
