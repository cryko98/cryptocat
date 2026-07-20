import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Copy, Check, Sparkles, Send } from "lucide-react";

interface NavbarProps {
  contractAddress: string;
}

export default function Navbar({ contractAddress }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTelegramAlert, setShowTelegramAlert] = useState(false);

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

  const handleTelegramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTelegramAlert(true);
    setTimeout(() => setShowTelegramAlert(false), 3000);
  };

  return (
    <>
      {/* Ticker tape with pale red / pink styling */}
      <div id="top-ticker" className="w-full bg-rose-50 text-rose-800 py-2 px-4 text-xs font-mono font-bold tracking-wider overflow-hidden select-none whitespace-nowrap border-b border-rose-200/60">
        <div className="inline-block animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          <span className="mx-4">🌟 $Casper IS LIVE ON SOLANA!</span>
          <span className="mx-4">🦝 THE LUCKIEST 1-IN-750,000 ALBINO RACCOON!</span>
          <span className="mx-4">💎 MINT RENOUNCED & LIQUIDITY BURNED</span>
          <span className="mx-4">🍀 MEET CASPER, THE UNSTOPPABLE LUCKY CHARM OF CRYTPO!</span>
          <span className="mx-4">🚀 SECURE YOUR BAG BEFORE THE STAMPEDE!</span>
          <span className="mx-4">🌟 $Casper IS LIVE ON SOLANA!</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFDFD]/95 backdrop-blur-md border-b border-rose-200/50 shadow-sm py-2"
            : "bg-[#FFFDFD]/80 backdrop-blur-md border-b border-rose-200/20 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.3)] group-hover:scale-105 transition-transform">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/casper.png?v=1784562261"
                  alt="The Albino Raccoon Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-[#4C0519] uppercase italic group-hover:text-rose-700 transition-colors">
                The Albino <span className="text-rose-500">Raccoon</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-sans font-semibold text-sm text-rose-950/80">
              <button onClick={() => scrollToSection("story")} className="hover:text-rose-600 transition-colors cursor-pointer">
                Casper's Story
              </button>
              <button onClick={() => scrollToSection("tokenomics")} className="hover:text-rose-600 transition-colors cursor-pointer">
                Tokenomics
              </button>
              <button onClick={() => scrollToSection("how-to-buy")} className="hover:text-rose-600 transition-colors cursor-pointer">
                How to Buy
              </button>
              <button onClick={() => scrollToSection("interactive-raccoon")} className="hover:text-rose-600 transition-colors cursor-pointer flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" /> Pet Casper
              </button>
            </nav>

            {/* Socials + CTA */}
            <div className="hidden md:flex items-center space-x-4 relative">
              {/* Telegram Button (Majd később popup alert) */}
              <button
                onClick={handleTelegramClick}
                id="telegram-header-btn"
                className="p-2.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 border border-rose-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm relative cursor-pointer"
                title="Telegram Group (Coming Soon!)"
              >
                <Send className="w-5 h-5 fill-current text-rose-500" />
              </button>

              {/* Buy CTA */}
              <button
                onClick={() => scrollToSection("how-to-buy")}
                id="buy-btn-header"
                className="px-6 py-2.5 rounded-full bg-rose-600 text-white font-display font-black text-sm shadow-[0_0_15px_rgba(244,63,94,0.2)] hover:shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-1.5 border-none"
              >
                Buy $Casper <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>

              {/* Telegram Alert Popup */}
              <AnimatePresence>
                {showTelegramAlert && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-16 bg-white border border-rose-200 text-rose-950 px-4 py-3 rounded-2xl shadow-xl z-50 text-xs font-mono font-bold w-64"
                  >
                    💬 Telegram is coming very soon!<br />
                    <span className="text-rose-500 font-bold">Stay tuned, launch is imminent!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-100 transition-colors relative flex items-center gap-1.5 text-xs font-semibold"
                title="Copy Contract Address"
              >
                {copied ? <Check className="w-4 h-4 text-rose-600" /> : <Copy className="w-4 h-4 text-rose-500" />}
                <span>CA</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-rose-850 hover:bg-rose-50 hover:text-rose-600 border border-rose-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-rose-800" />}
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
              className="md:hidden bg-[#FFFDFD] border-b border-rose-200/50 shadow-xl px-4 pt-2 pb-6 space-y-4"
            >
              <nav className="flex flex-col space-y-3 font-sans font-medium text-rose-950/80">
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-rose-50/50 hover:text-rose-600 transition-all text-sm"
                >
                  Casper's Story
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-rose-50/50 hover:text-rose-600 transition-all text-sm"
                >
                  Tokenomics
                </button>
                <button
                  onClick={() => scrollToSection("how-to-buy")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-rose-50/50 hover:text-rose-600 transition-all text-sm"
                >
                  How to Buy
                </button>
                <button
                  onClick={() => scrollToSection("interactive-raccoon")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-rose-50/50 hover:text-rose-600 transition-all text-sm flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-rose-400" /> Pet Casper (Interactive)
                </button>
              </nav>

              <div className="pt-4 border-t border-rose-200/40 flex items-center justify-between">
                <button
                  onClick={handleTelegramClick}
                  className="p-2.5 rounded-full bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors flex items-center gap-2 text-xs font-mono font-bold"
                >
                  <Send className="w-4 h-4 fill-current text-rose-500" />
                  Telegram (Soon)
                </button>

                <button
                  onClick={() => scrollToSection("how-to-buy")}
                  className="px-5 py-2.5 rounded-full bg-rose-600 text-white font-display font-black text-sm shadow-md border-none"
                >
                  Buy $Casper
                </button>
              </div>

              {/* Mobile Telegram Alert */}
              {showTelegramAlert && (
                <div className="bg-rose-50/80 border border-rose-100 text-rose-950 px-3 py-2 rounded-xl text-xs font-mono font-bold">
                  💬 Telegram group is coming very soon!
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
