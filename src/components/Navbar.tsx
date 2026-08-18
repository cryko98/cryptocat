import React, { useState } from "react";
import {
  Copy,
  Check,
  Menu,
  X as CloseIcon,
  Sparkles,
  Send,
  ExternalLink,
} from "lucide-react";
import {
  CATSEYE_NAME,
  CATSEYE_TICKER,
  CATSEYE_LOGO,
  CATSEYE_CA,
  TELEGRAM_URL,
  X_COMMUNITY_URL,
  DEXSCREENER_URL,
  PUMPFUN_URL,
} from "../constants";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CATSEYE_CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { name: "The Cat Meta", href: "#lore" },
    { name: "Laser Lab", href: "#interactive-lab" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-[3.5px] border-black text-black">
      {/* Top Ticker Marquee */}
      <div className="bg-black text-white py-2 px-4 overflow-hidden border-b-2 border-black">
        <div className="whitespace-nowrap flex items-center gap-8 animate-[marquee_25s_linear_infinite] text-xs font-mono font-black tracking-wider uppercase">
          <span className="text-[#00f076]">🐱 $CATSEYE ON SOLANA</span>
          <span>•</span>
          <span>👑 CAT META IS KING ON SOLANA</span>
          <span>•</span>
          <span className="text-[#00f076]">🚀 BULL'S EYE HIT $5M — CAT'S EYE IS COMING TO FLIP THEM</span>
          <span>•</span>
          <span>🐾 100% COMMUNITY OWNED • 0% TAX</span>
          <span>•</span>
          <span>✈️ JOIN TELEGRAM: t.me/catseyetggroup</span>
          <span>•</span>
          <span className="text-[#00f076]">🐱 $CATSEYE ON SOLANA</span>
          <span>•</span>
          <span>👑 CAT META IS KING ON SOLANA</span>
          <span>•</span>
          <span className="text-[#00f076]">🚀 BULL'S EYE HIT $5M — CAT'S EYE IS COMING TO FLIP THEM</span>
          <span>•</span>
          <span>🐾 100% COMMUNITY OWNED • 0% TAX</span>
          <span>•</span>
          <span>✈️ JOIN TELEGRAM: t.me/catseyetggroup</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-3 border-black bg-black shadow-[3px_3px_0px_#000] group-hover:scale-105 transition-transform">
                <img
                  src={CATSEYE_LOGO}
                  alt="CAT'S EYE Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-black flex items-center gap-1.5 leading-none">
                  {CATSEYE_NAME}
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00f076] animate-ping"></span>
                </span>
                <span className="text-xs font-mono font-black text-[#00c961] tracking-wider uppercase mt-1">
                  {CATSEYE_TICKER}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-display font-bold text-black hover:text-[#00c961] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* CA Copy Button */}
            <button
              onClick={handleCopy}
              className={`cat-btn px-3.5 py-2 text-xs font-mono font-bold flex items-center gap-2 ${
                copied
                  ? "bg-[#00f076] text-black"
                  : "bg-[#f4f4f5] hover:bg-gray-100 text-black"
              }`}
              title="Click to copy CA"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>CA Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-black" />
                  <span className="truncate max-w-[110px]">
                    {CATSEYE_CA.slice(0, 5)}...{CATSEYE_CA.slice(-4)}
                  </span>
                </>
              )}
            </button>

            {/* Telegram Button */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cat-btn cat-btn-tg px-4 py-2 text-white text-xs font-display font-bold flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5 fill-current" />
              <span>Telegram</span>
            </a>

            {/* Pump.fun Direct Button */}
            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cat-btn cat-btn-green px-4 py-2 text-black text-xs font-display font-black flex items-center gap-1.5"
            >
              <span>💊</span>
              <span>Buy {CATSEYE_TICKER}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cat-btn p-2.5 bg-white text-black"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b-4 border-black px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="cat-btn p-3 bg-[#f4f4f5] text-black font-display font-bold text-center text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={handleCopy}
              className="cat-btn w-full p-3 bg-[#eafff3] text-black font-mono font-bold text-xs flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-[#00c961]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copied CA!" : "Copy CA: " + CATSEYE_CA.slice(0, 8) + "..."}</span>
            </button>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cat-btn cat-btn-tg w-full p-3 text-white font-display font-bold text-xs flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>Join Telegram Group</span>
            </a>

            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cat-btn cat-btn-green w-full p-3 text-black font-display font-black text-xs flex items-center justify-center gap-2"
            >
              <span>💊 Buy on Pump.fun</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
