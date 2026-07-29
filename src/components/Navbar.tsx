import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Copy, Check, Send, Flame, Award } from "lucide-react";

interface NavbarProps {
  contractAddress: string;
}

export default function Navbar({ contractAddress }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Ticker Tape - Old School Warm Amber & Tobacco Brown */}
      <div id="top-ticker" className="w-full bg-[#1c120c] text-[#fef3c7] py-2 px-4 text-xs font-mono font-bold tracking-wider overflow-hidden select-none whitespace-nowrap border-b border-[#452a1a]">
        <div className="inline-block animate-[marquee_22s_linear_infinite] whitespace-nowrap">
          <span className="mx-4">🍂 PIPE DOG ($pipedog) IS TRADING ON SOLANA!</span>
          <span className="mx-4">📜 THE MOST GENTLEMAN MEME IN CRYPTO HISTORY</span>
          <span className="mx-4">💨 PUFF WISDOM, HOLD WITH UNMATCHED ELEGANCE & COMPOSURE</span>
          <span className="mx-4">💎 MINT RENOUNCED & LIQUIDITY BURNED TO ASHES</span>
          <span className="mx-4">👑 JOIN THE GENTLEMEN'S CLUB & PRINT GREEN CANDLES!</span>
          <span className="mx-4">🍂 PIPE DOG ($pipedog) IS TRADING ON SOLANA!</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#180f0a]/95 backdrop-blur-md border-b border-[#3e271a] shadow-xl py-2 text-[#fbf0da]"
            : "bg-[#1f140e]/90 backdrop-blur-md border-b border-[#2d1b11] py-3 text-[#fbf0da]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#d97706] shadow-[0_0_15px_rgba(217,119,6,0.3)] group-hover:scale-105 transition-transform bg-[#2a1a10]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-29_11-30-45.jpg?v=1785313952"
                  alt="Pipe Dog Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-[#fbf0da] uppercase group-hover:text-[#f59e0b] transition-colors flex items-center gap-1.5">
                  Pipe <span className="text-[#f59e0b]">Dog</span>
                </span>
                <span className="text-[10px] font-mono text-[#d4bca0] font-bold -mt-1 tracking-widest">$pipedog • SOLANA</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-sans font-bold text-sm text-[#e4cbaf]">
              <button onClick={() => scrollToSection("story")} className="hover:text-[#f59e0b] transition-colors cursor-pointer">
                The Legend
              </button>
              <button onClick={() => scrollToSection("interactive-lounge")} className="hover:text-[#f59e0b] transition-colors cursor-pointer flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#f59e0b]" /> Pipe Lounge
              </button>
              <button onClick={() => scrollToSection("tokenomics")} className="hover:text-[#f59e0b] transition-colors cursor-pointer">
                Tokenomics
              </button>
              <button onClick={() => scrollToSection("how-to-buy")} className="hover:text-[#f59e0b] transition-colors cursor-pointer">
                How to Buy
              </button>
            </nav>

            {/* Socials + CTA */}
            <div className="hidden md:flex items-center space-x-4 relative">
              {/* Telegram Button */}
              <a
                href="https://t.me/pipedogonsol"
                target="_blank"
                rel="noopener noreferrer"
                id="telegram-header-btn"
                className="p-2.5 rounded-full bg-[#2a1b12] hover:bg-[#d97706] text-[#f59e0b] hover:text-[#180f0a] border border-[#4a2e1d] hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm relative cursor-pointer flex items-center justify-center"
                title="Join Pipe Dog Telegram"
              >
                <Send className="w-5 h-5 fill-current" />
              </a>

              {/* Buy CTA */}
              <button
                onClick={() => scrollToSection("how-to-buy")}
                id="buy-btn-header"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-[#120b08] font-display font-black text-sm shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-1.5 border-none"
              >
                Buy $pipedog <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-[#2a1b12] text-[#f59e0b] hover:bg-[#382318] border border-[#4a2e1d] transition-colors relative flex items-center gap-1.5 text-xs font-semibold"
                title="Copy Contract Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#f59e0b]" />}
                <span>CA</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#fbf0da] hover:bg-[#2a1b12] hover:text-[#f59e0b] border border-[#4a2e1d] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#fbf0da]" />}
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
              className="md:hidden bg-[#180f0a] border-b border-[#3e271a] shadow-xl px-4 pt-2 pb-6 space-y-4"
            >
              <nav className="flex flex-col space-y-3 font-sans font-medium text-[#fbf0da]">
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2a1b12] hover:text-[#f59e0b] transition-all text-sm"
                >
                  The Legend
                </button>
                <button
                  onClick={() => scrollToSection("interactive-lounge")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2a1b12] hover:text-[#f59e0b] transition-all text-sm flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-[#f59e0b]" /> Pipe Lounge
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2a1b12] hover:text-[#f59e0b] transition-all text-sm"
                >
                  Tokenomics
                </button>
                <button
                  onClick={() => scrollToSection("how-to-buy")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-[#2a1b12] hover:text-[#f59e0b] transition-all text-sm"
                >
                  How to Buy
                </button>
              </nav>

              <div className="pt-4 border-t border-[#3e271a] flex items-center justify-between">
                <a
                  href="https://t.me/pipedogonsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#2a1b12] text-[#f59e0b] hover:bg-[#382318] transition-colors flex items-center gap-2 text-xs font-mono font-bold border border-[#4a2e1d]"
                >
                  <Send className="w-4 h-4 fill-current text-[#f59e0b]" />
                  Telegram Group
                </a>

                <button
                  onClick={() => scrollToSection("how-to-buy")}
                  className="px-5 py-2.5 rounded-xl bg-[#d97706] text-[#120b08] font-display font-black text-sm shadow-md border-none"
                >
                  Buy $pipedog
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
