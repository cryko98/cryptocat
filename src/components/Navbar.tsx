import React, { useState } from "react";
import {
  Copy,
  Check,
  Menu,
  X as CloseIcon,
  Crosshair,
  Target,
  Flame,
} from "lucide-react";
import {
  BULLSEYE_NAME,
  BULLSEYE_TICKER,
  BULLSEYE_LOGO,
  BULLSEYE_CA,
  X_COMMUNITY_URL,
  DEXSCREENER_URL,
  PUMPFUN_URL,
} from "../constants";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BULLSEYE_CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { name: "The Story", href: "#story" },
    { name: "Target Practice", href: "#target-lab" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-[3.5px] border-black text-black">
      {/* Top Ticker Marquee */}
      <div className="bg-black text-white py-2 px-4 overflow-hidden border-b-2 border-black">
        <div className="whitespace-nowrap flex items-center gap-8 animate-[marquee_25s_linear_infinite] text-xs font-mono font-black tracking-wider uppercase">
          <span className="text-[#e60012]">🎯 $BULLSEYE ON SOLANA</span>
          <span>•</span>
          <span>❌ FIXING THE "BULLS'S EYE" TYPO</span>
          <span>•</span>
          <span className="text-[#e60012]">👑 WE TAKE OVER THE LEAD</span>
          <span>•</span>
          <span>🎯 100% COMMUNITY OWNED</span>
          <span>•</span>
          <span>🚀 0% TAX • ZERO DEV BAGGAGE • FAIR LAUNCH</span>
          <span>•</span>
          <span className="text-[#e60012]">🎯 $BULLSEYE ON SOLANA</span>
          <span>•</span>
          <span>❌ FIXING THE "BULLS'S EYE" TYPO</span>
          <span>•</span>
          <span className="text-[#e60012]">👑 WE TAKE OVER THE LEAD</span>
          <span>•</span>
          <span>🎯 100% COMMUNITY OWNED</span>
          <span>•</span>
          <span>🚀 0% TAX • ZERO DEV BAGGAGE • FAIR LAUNCH</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-3 border-black bg-white shadow-[3px_3px_0px_#000] group-hover:scale-105 transition-transform">
                <img
                  src={BULLSEYE_LOGO}
                  alt="Bullseye Logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-black flex items-center gap-1.5 leading-none">
                  {BULLSEYE_NAME}
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e60012] animate-ping"></span>
                </span>
                <span className="text-xs font-mono font-black text-[#e60012] tracking-wider uppercase mt-1">
                  {BULLSEYE_TICKER}
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
                className="text-sm font-display font-bold text-black hover:text-[#e60012] transition-colors relative py-1"
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
              className={`target-btn px-3.5 py-2 text-xs font-mono font-bold flex items-center gap-2 ${
                copied
                  ? "bg-[#e60012] text-white"
                  : "bg-[#f4f4f5] hover:bg-gray-100 text-black"
              }`}
              title="Click to copy CA"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>CA Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-black" />
                  <span className="truncate max-w-[120px]">
                    {BULLSEYE_CA.slice(0, 6)}...{BULLSEYE_CA.slice(-4)}
                  </span>
                </>
              )}
            </button>

            {/* X Community Button */}
            <a
              href={X_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="target-btn px-4 py-2 bg-black hover:bg-[#1a1a1a] text-white text-xs font-display font-bold flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X Community</span>
            </a>

            {/* Pump.fun Direct Button */}
            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="target-btn px-4 py-2 bg-[#e60012] hover:bg-[#cc0010] text-white text-xs font-display font-black flex items-center gap-1.5 shadow-[3px_3px_0px_#000]"
            >
              <span>🎯</span>
              <span>Buy $bullseye</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="target-btn p-2.5 bg-white text-black"
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
                className="target-btn p-3 bg-[#f4f4f5] text-black font-display font-bold text-center text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={handleCopy}
              className="target-btn w-full p-3 bg-[#fff5f5] text-black font-mono font-bold text-xs flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-[#e60012]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copied CA!" : "Copy CA: " + BULLSEYE_CA.slice(0, 10) + "..."}</span>
            </button>

            <a
              href={X_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="target-btn w-full p-3 bg-black text-white font-display font-bold text-xs flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Join X Community</span>
            </a>

            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="target-btn w-full p-3 bg-[#e60012] text-white font-display font-black text-xs flex items-center justify-center gap-2"
            >
              <span>🎯 Buy on Pump.fun</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
