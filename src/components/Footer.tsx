import React from "react";
import { ArrowUpRight, Sparkles, TrendingUp, BookOpen, Compass, Send, Leaf } from "lucide-react";
import { CHILLTOAD_NAME, CHILLTOAD_TICKER, CHILLTOAD_LOGO, TELEGRAM_URL, DEXSCREENER_URL, PUMPFUN_URL, SOLSCAN_URL, RAYDIUM_URL } from "../constants";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05140e] text-[#d8f3dc] pt-16 pb-12 border-t-2 border-[#2d6a4f] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1b4332]">
          
          {/* Logo & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#74c69d] shadow-md bg-[#081c15]">
                <img
                  src={CHILLTOAD_LOGO}
                  alt="Chill Toad Pepe Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-black text-2xl text-white tracking-tight">
                  Chill Toad <span className="text-[#74c69d]">Pepe</span>
                </span>
                <div className="text-[10px] font-mono text-[#74c69d] font-bold">
                  {CHILLTOAD_TICKER} • POND LORE ON SOLANA
                </div>
              </div>
            </div>

            <p className="text-sm text-[#b7e4c7] max-w-md font-sans leading-relaxed">
              “Why stress when the lily pad is wide?” Unbothered, relaxed, and enjoying the clear waters of Solana with 0% tax and 100% serene community vibes. 🐸🪷🍃
            </p>

            <div className="pt-2">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0088cc] hover:bg-[#0099e6] text-white font-mono font-bold text-xs shadow-md transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Join Official Telegram: t.me/chilltoad</span>
              </a>
            </div>
          </div>

          {/* Quick Ecosystem Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[#74c69d] font-black uppercase tracking-wider block">
              POND ECOSYSTEM
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-[#70d6ff]"
                >
                  <Send className="w-3.5 h-3.5" /> Telegram Community
                </a>
              </li>
              <li>
                <a
                  href={DEXSCREENER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-[#74c69d]" /> DexScreener Chart
                </a>
              </li>
              <li>
                <a
                  href={PUMPFUN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>💊</span> Pump.fun Portal
                </a>
              </li>
              <li>
                <a
                  href={RAYDIUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>💧</span> Raydium Swap
                </a>
              </li>
            </ul>
          </div>

          {/* Pond Navigation */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[#74c69d] font-black uppercase tracking-wider block">
              MARSH SANCTUARY
            </span>
            <div className="grid grid-cols-2 gap-2 text-[#b7e4c7]">
              <button
                onClick={() => {
                  const el = document.getElementById("pond-lore");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                • Pond Lore
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("chronicles");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                • Toad Chronicles
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("chill-lounge");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                • Chill Lounge
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("tokenomics");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                • Pond Ledger
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("roadmap");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                • Lilypad Roadmap
              </button>
              <button
                onClick={handleScrollToTop}
                className="text-left hover:text-[#74c69d] text-white font-bold transition-colors bg-transparent border-none cursor-pointer"
              >
                ↑ Back to Top
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#b7e4c7]/70">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {CHILLTOAD_NAME} ({CHILLTOAD_TICKER}). All rights reserved in the lily pad marsh.
          </p>

          <p className="text-[11px] text-center sm:text-right max-w-md">
            Disclaimer: $chilltoad is a community meme token created for relaxation, entertainment, and unbothered vibes. No financial guarantees.
          </p>
        </div>

      </div>
    </footer>
  );
}
