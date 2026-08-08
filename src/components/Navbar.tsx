import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, TrendingUp, BookOpen, Coins, Compass, Send, Copy, Check, Leaf } from "lucide-react";
import { CHILLTOAD_NAME, CHILLTOAD_TICKER, CHILLTOAD_LOGO, CHILLTOAD_CA, TELEGRAM_URL, DEXSCREENER_URL, PUMPFUN_URL } from "../constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(CHILLTOAD_CA);
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
      {/* Top Ticker Tape - Serene Pond Lore & Zen Toad Marquee */}
      <div id="top-ticker" className="w-full bg-[#081c15] text-[#b7e4c7] py-2 px-4 text-xs font-mono font-bold tracking-wider overflow-hidden select-none whitespace-nowrap border-b border-[#2d6a4f]/60">
        <div className="inline-block animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          <span className="mx-4 text-[#74c69d] font-black">🐸 POND LORE • CHILL TOAD PEPE</span>
          <span className="mx-4 text-[#ffd166]">🌿 CA: {CHILLTOAD_CA}</span>
          <span className="mx-4 text-white">“WHY STRESS WHEN YOU CAN SIT ON A LILY PAD?” — UNBOTHERED VIBES ONLY</span>
          <span className="mx-4 text-[#74c69d]">🍃 $CHILLTOAD • SOLANA</span>
          <span className="mx-4 text-white">🪙 0% TAX • 100% BURNED LP • LILY PAD LIQUIDITY</span>
          <span className="mx-4 text-[#70d6ff]">💧 JOIN THE CHILL POND TELEGRAM: t.me/chilltoad</span>
          <span className="mx-4 text-[#ffd166]">🪷 CONTRACT: {CHILLTOAD_CA}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0b2419]/95 backdrop-blur-md border-b border-[#2d6a4f] shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-2 text-white"
            : "bg-[#0f2d20]/90 backdrop-blur-md border-b border-[#2d6a4f]/50 py-3 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#74c69d] shadow-[0_0_20px_rgba(116,198,157,0.45)] group-hover:scale-105 transition-transform bg-[#081c15]">
                <img
                  src={CHILLTOAD_LOGO}
                  alt="Chill Toad Pepe Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#74c69d] transition-colors">
                    Chill Toad <span className="text-[#74c69d]">Pepe</span>
                  </span>
                  <span className="text-[10px] font-mono font-black text-[#081c15] bg-[#74c69d] px-2 py-0.5 rounded-full shadow-sm">
                    {CHILLTOAD_TICKER}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#b7e4c7]/80 font-bold -mt-0.5 tracking-widest flex items-center gap-1">
                  <Leaf className="w-2.5 h-2.5 text-[#52b788]" /> Unbothered on the Lily Pad
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 font-mono font-bold text-xs uppercase tracking-wider text-[#d8f3dc]/90">
              <button onClick={() => scrollToSection("pond-lore")} className="hover:text-[#74c69d] transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <BookOpen className="w-3.5 h-3.5 text-[#52b788]" />
                Pond Lore
              </button>
              <button onClick={() => scrollToSection("chronicles")} className="hover:text-[#74c69d] transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <Compass className="w-3.5 h-3.5 text-[#52b788]" />
                Toad Wisdom
              </button>
              <button onClick={() => scrollToSection("chill-lounge")} className="hover:text-[#74c69d] transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
                Chill Lounge
              </button>
              <button onClick={() => scrollToSection("tokenomics")} className="hover:text-[#74c69d] transition-colors cursor-pointer flex items-center gap-1.5 border-none bg-transparent">
                <Coins className="w-3.5 h-3.5 text-[#52b788]" />
                Pond Ledger
              </button>
              <button onClick={() => scrollToSection("roadmap")} className="hover:text-[#74c69d] transition-colors cursor-pointer border-none bg-transparent">
                Lilypad Roadmap
              </button>
            </nav>

            {/* Quick Telegram, CA & Action Buttons */}
            <div className="hidden md:flex items-center space-x-2 relative">
              {/* Copy CA Button */}
              <button
                onClick={handleCopyCA}
                title="Copy Contract Address"
                className="px-3 py-2 rounded-xl bg-[#112d20] hover:bg-[#163824] border border-[#52b788] text-[#d8f3dc] font-mono font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                {copiedCA ? <Check className="w-3.5 h-3.5 text-[#74c69d]" /> : <Copy className="w-3.5 h-3.5 text-[#74c69d]" />}
                <span className="hidden xl:inline text-[#74c69d]">CA:</span>
                <span>{CHILLTOAD_CA.slice(0, 4)}...{CHILLTOAD_CA.slice(-4)}</span>
                {copiedCA && <span className="text-[10px] text-[#74c69d] font-bold">Copied!</span>}
              </button>

              {/* Telegram Official Pill */}
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

              <a
                href={DEXSCREENER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] border border-[#52b788]/60 text-[#d8f3dc] hover:text-white font-mono font-bold text-xs transition-all flex items-center gap-1.5 shadow-md"
              >
                <TrendingUp className="w-3.5 h-3.5 text-[#74c69d]" />
                <span>Chart</span>
              </a>

              <a
                href={PUMPFUN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#143621] hover:bg-[#1e4a30] border border-[#2d6a4f] text-[#86efac] font-mono font-bold text-xs transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>💊</span>
                <span>Pump.fun</span>
              </a>

              <button
                onClick={() => scrollToSection("chill-lounge")}
                id="explore-chill-lounge-header-btn"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#2d6a4f] via-[#52b788] to-[#74c69d] hover:from-[#1b4332] hover:to-[#52b788] text-[#081c15] font-display font-black text-xs shadow-[0_0_20px_rgba(82,183,136,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer border-none"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#081c15]" />
                Vibe Lounge
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#1b4332] text-[#74c69d] hover:text-white border border-[#2d6a4f] focus:outline-none cursor-pointer"
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
              className="lg:hidden bg-[#0c261b] border-b border-[#2d6a4f] shadow-xl px-4 pt-2 pb-6 space-y-4"
            >
              {/* Contract Address & Telegram Banner for Mobile */}
              <button
                onClick={handleCopyCA}
                className="w-full p-3 rounded-xl bg-[#112d20] border border-[#52b788] flex items-center justify-between text-[#d8f3dc] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {copiedCA ? <Check className="w-4 h-4 text-[#74c69d]" /> : <Copy className="w-4 h-4 text-[#74c69d]" />}
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-[#74c69d] block font-bold">SOLANA CONTRACT ADDRESS</span>
                    <span className="text-xs font-mono font-bold text-white">{CHILLTOAD_CA.slice(0, 8)}...{CHILLTOAD_CA.slice(-8)}</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold bg-[#1b4332] text-[#74c69d] px-2.5 py-1 rounded border border-[#52b788]">
                  {copiedCA ? "Copied!" : "Copy CA"}
                </span>
              </button>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0088cc]/20 border border-[#0088cc]/50 flex items-center justify-between text-[#70d6ff]"
              >
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#00a8ff]" />
                  <span className="text-xs font-mono font-bold">Official Telegram Community</span>
                </div>
                <span className="text-xs font-mono font-bold text-white bg-[#0088cc] px-2 py-1 rounded">
                  Join t.me/chilltoad
                </span>
              </a>

              <nav className="flex flex-col space-y-3 font-mono font-medium text-[#d8f3dc]">
                <button
                  onClick={() => scrollToSection("pond-lore")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#1b4332] hover:text-white transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <BookOpen className="w-4 h-4 text-[#74c69d]" /> Pond Lore
                </button>
                <button
                  onClick={() => scrollToSection("chronicles")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#1b4332] hover:text-white transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <Compass className="w-4 h-4 text-[#74c69d]" /> Toad Wisdom
                </button>
                <button
                  onClick={() => scrollToSection("chill-lounge")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#1b4332] hover:text-white transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <Sparkles className="w-4 h-4 text-[#74c69d]" /> Chill Lounge & Vibe-o-Meter
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#1b4332] hover:text-white transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  <Coins className="w-4 h-4 text-[#74c69d]" /> Pond Ledger
                </button>
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#1b4332] hover:text-white transition-all text-sm flex items-center gap-2 border-none bg-transparent"
                >
                  🌿 Lilypad Roadmap
                </button>
              </nav>

              <div className="pt-4 border-t border-[#2d6a4f] flex flex-col gap-2.5">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0088cc] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" /> Telegram: t.me/chilltoad
                </a>

                <a
                  href={DEXSCREENER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1b4332] border border-[#2d6a4f] text-[#d8f3dc] font-mono font-bold text-xs flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-4 h-4 text-[#74c69d]" /> DexScreener Chart
                </a>

                <a
                  href={PUMPFUN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#143621] border border-[#2d6a4f] text-[#86efac] font-mono font-bold text-xs flex items-center justify-center gap-2"
                >
                  <span>💊</span> Pump.fun
                </a>

                <button
                  onClick={() => scrollToSection("chill-lounge")}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#2d6a4f] to-[#74c69d] text-[#081c15] font-display font-black text-sm shadow-md border-none flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Enter Chill Lounge
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
