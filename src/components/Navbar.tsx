import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Menu, X, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";

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
      {/* Ticker tape */}
      <div id="top-ticker" className="w-full bg-black/90 text-[#14F195] py-2 px-4 text-xs font-mono font-bold tracking-wider overflow-hidden select-none whitespace-nowrap border-b border-white/5">
        <div className="inline-block animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          <span className="mx-4">🚀 $CRYPTOCAT COIN IS LIVE ON SOLANA!</span>
          <span className="mx-4">💚 NO MORE DEPRESSED CASH CAT! WE STACK GAINS!</span>
          <span className="mx-4">🌟 100% COMMUNITY OWNED</span>
          <span className="mx-4">🔥 LP BURNED & MINT REVOKED</span>
          <span className="mx-4">🐱 PURRRRRR YOUR WAY TO THE MOON!</span>
          <span className="mx-4">🚀 $CRYPTOCAT COIN IS LIVE ON SOLANA!</span>
          <span className="mx-4">💚 NO MORE DEPRESSED CASH CAT! WE STACK GAINS!</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-2"
            : "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#14F195] shadow-[0_0_15px_rgba(20,241,149,0.5)] group-hover:scale-105 transition-transform">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-10_15-56-40.jpg?v=1783688211"
                  alt="Crypto Cat Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white uppercase italic group-hover:text-[#14F195] transition-colors">
                Crypto<span className="text-[#14F195]">Cat</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-sans font-medium text-sm text-zinc-300">
              <button onClick={() => scrollToSection("story")} className="hover:text-[#14F195] transition-colors cursor-pointer">
                Our Story
              </button>
              <button onClick={() => scrollToSection("tokenomics")} className="hover:text-[#14F195] transition-colors cursor-pointer">
                Tokenomics
              </button>
              <button onClick={() => scrollToSection("how-to-buy")} className="hover:text-[#14F195] transition-colors cursor-pointer">
                How to Buy
              </button>
              <button onClick={() => scrollToSection("interactive-cat")} className="hover:text-[#14F195] transition-colors cursor-pointer flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-[#14F195] animate-pulse" /> Play & Purr
              </button>
            </nav>

            {/* Socials + CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Telegram Button */}
              <a
                href="https://t.me/cryptocatsolana"
                target="_blank"
                rel="noreferrer"
                id="telegram-header-btn"
                className="p-2.5 rounded-full bg-zinc-900/80 text-[#14F195] hover:bg-zinc-800 border border-white/10 hover:border-[#14F195]/30 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
                title="Join Telegram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.1-3.48 3.84-1.6 4.64-1.88 5.16-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.2-.04.22z"/>
                </svg>
              </a>

              {/* Buy CTA */}
              <button
                onClick={() => scrollToSection("how-to-buy")}
                id="buy-btn-header"
                className="px-6 py-2.5 rounded-full bg-[#14F195] text-black font-display font-black text-sm shadow-[0_0_15px_rgba(20,241,149,0.3)] hover:shadow-[0_0_25px_rgba(20,241,149,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              >
                Buy Ticker <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-zinc-900/90 text-[#14F195] hover:bg-zinc-800 border border-white/10 transition-colors relative flex items-center gap-1.5 text-xs font-semibold"
                title="Copy Contract Address"
              >
                {copied ? <Check className="w-4 h-4 text-[#14F195]" /> : <Copy className="w-4 h-4" />}
                <span>CA</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-[#14F195] border border-white/5 transition-colors"
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
              className="md:hidden bg-[#0d0d0d] border-b border-white/10 shadow-2xl px-4 pt-2 pb-6 space-y-4"
            >
              <nav className="flex flex-col space-y-3 font-sans font-medium text-zinc-300">
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-zinc-900 hover:text-[#14F195] transition-all text-sm"
                >
                  Our Story
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-zinc-900 hover:text-[#14F195] transition-all text-sm"
                >
                  Tokenomics
                </button>
                <button
                  onClick={() => scrollToSection("how-to-buy")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-zinc-900 hover:text-[#14F195] transition-all text-sm"
                >
                  How to Buy
                </button>
                <button
                  onClick={() => scrollToSection("interactive-cat")}
                  className="text-left py-2 px-3 rounded-lg hover:bg-zinc-900 hover:text-[#14F195] transition-all text-sm flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#14F195]" /> Play & Purr (Interactive)
                </button>
              </nav>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex space-x-3">
                  <a
                    href="https://t.me/cryptocatsolana"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-zinc-900 text-[#14F195] hover:bg-zinc-800 transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.1-3.48 3.84-1.6 4.64-1.88 5.16-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.2-.04.22z"/>
                    </svg>
                  </a>
                </div>

                <button
                  onClick={() => scrollToSection("how-to-buy")}
                  className="px-5 py-2.5 rounded-full bg-[#14F195] text-black font-display font-black text-sm shadow-md"
                >
                  Buy $CRYPTOCAT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
