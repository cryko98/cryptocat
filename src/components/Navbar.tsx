import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Copy, Check, Sparkles, Send, Skull } from "lucide-react";

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
      {/* Top Ticker Tape - Grey, Deep Blue & Electric Ocean */}
      <div id="top-ticker" className="w-full bg-slate-900 text-sky-300 py-2 px-4 text-xs font-mono font-bold tracking-wider overflow-hidden select-none whitespace-nowrap border-b border-sky-900/50">
        <div className="inline-block animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          <span className="mx-4">🦈 SHARK CAT ($sharkcat) IS UNLEASHED ON SOLANA!</span>
          <span className="mx-4">🩸 RAZOR-SHARP JAWS TEARING PAPER HANDS TO SHREDS!</span>
          <span className="mx-4">🌊 THE APEX PREDATOR OF MEME OCEAN</span>
          <span className="mx-4">💎 MINT RENOUNCED & LIQUIDITY BURNED TO ASHES</span>
          <span className="mx-4">🚀 HUNT BEARS, CLAIM THE DEEPS & PRINT GREEN CANDLES!</span>
          <span className="mx-4">🦈 SHARK CAT ($sharkcat) IS UNLEASHED ON SOLANA!</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md border-b border-sky-900/30 shadow-md py-2 text-white"
            : "bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-transform bg-slate-800">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/shark.png?v=1785074178"
                  alt="Shark Cat Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-white uppercase italic group-hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  Shark <span className="text-sky-400">Cat</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-bold -mt-1 tracking-widest">$sharkcat • SOLANA</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-sans font-bold text-sm text-slate-300">
              <button onClick={() => scrollToSection("story")} className="hover:text-sky-400 transition-colors cursor-pointer">
                Apex Story
              </button>
              <button onClick={() => scrollToSection("interactive-hunt")} className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1">
                <Skull className="w-4 h-4 text-sky-400 animate-pulse" /> Feeding Frenzy
              </button>
              <button onClick={() => scrollToSection("tokenomics")} className="hover:text-sky-400 transition-colors cursor-pointer">
                Tokenomics
              </button>
              <button onClick={() => scrollToSection("how-to-buy")} className="hover:text-sky-400 transition-colors cursor-pointer">
                How to Buy
              </button>
            </nav>

            {/* Socials + CTA */}
            <div className="hidden md:flex items-center space-x-4 relative">
              {/* Telegram Button */}
              <a
                href="https://t.me/sharkcattonsol"
                target="_blank"
                rel="noopener noreferrer"
                id="telegram-header-btn"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-sky-600 text-sky-400 hover:text-white border border-slate-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm relative cursor-pointer flex items-center justify-center"
                title="Join Official Telegram"
              >
                <Send className="w-5 h-5 fill-current" />
              </a>

              {/* Buy CTA */}
              <button
                onClick={() => scrollToSection("how-to-buy")}
                id="buy-btn-header"
                className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-display font-black text-sm shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-1.5 border-none"
              >
                Buy $sharkcat <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-slate-800 text-sky-400 hover:bg-slate-700 border border-slate-700 transition-colors relative flex items-center gap-1.5 text-xs font-semibold"
                title="Copy Contract Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-sky-400" />}
                <span>CA</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-sky-400 border border-slate-700 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-200" />}
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
              className="md:hidden bg-slate-900 border-b border-slate-800 shadow-xl px-4 pt-2 pb-6 space-y-4"
            >
              <nav className="flex flex-col space-y-3 font-sans font-medium text-slate-200">
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-sky-400 transition-all text-sm"
                >
                  Apex Story
                </button>
                <button
                  onClick={() => scrollToSection("interactive-hunt")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-sky-400 transition-all text-sm flex items-center gap-2"
                >
                  <Skull className="w-4 h-4 text-sky-400" /> Feeding Frenzy Game
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-sky-400 transition-all text-sm"
                >
                  Tokenomics
                </button>
                <button
                  onClick={() => scrollToSection("how-to-buy")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-sky-400 transition-all text-sm"
                >
                  How to Buy
                </button>
              </nav>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href="https://t.me/sharkcattonsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-sky-400 hover:bg-slate-700 transition-colors flex items-center gap-2 text-xs font-mono font-bold border border-slate-700"
                >
                  <Send className="w-4 h-4 fill-current text-sky-400" />
                  Telegram Group
                </a>

                <button
                  onClick={() => scrollToSection("how-to-buy")}
                  className="px-5 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-display font-black text-sm shadow-md border-none"
                >
                  Buy $sharkcat
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
