import React, { useState } from "react";
import { ArrowUpRight, Sparkles, TrendingUp, BookOpen, Compass, Send, Dumbbell, Copy, Check, ExternalLink, Zap, Trophy } from "lucide-react";
import { GIGATOAD_NAME, GIGATOAD_TICKER, GIGATOAD_LOGO, GIGATOAD_CA, TELEGRAM_URL, DEXSCREENER_URL, PUMPFUN_URL, SOLSCAN_URL, RAYDIUM_URL } from "../constants";

export default function Footer() {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(GIGATOAD_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#002b8c] text-white pt-14 pb-12 border-t border-white/20 overflow-hidden selection:bg-[#00ff88] selection:text-[#003bb5]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          
          {/* Logo & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-[#003bb5]">
                <img
                  src={GIGATOAD_LOGO}
                  alt="Giga Toad Pepe Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-script text-3xl text-white tracking-normal lowercase block">
                  giga &ldquo;toad&rdquo; pepe
                </span>
                <div className="text-[10px] font-mono text-[#00ff88] font-bold">
                  {GIGATOAD_TICKER} • THE MOST ALPHA TOAD ON SOLANA
                </div>
              </div>
            </div>

            <p className="text-sm text-white/90 max-w-md font-sans leading-relaxed">
              “Why be a skinny tadpole when you can bench 1000kg on Solana?” The most jacked, alpha amphibian on the blockchain with 0% tax and pure hypertrophy gains. 🏋️‍♂️💪🐸
            </p>

            <div className="pt-2">
              {TELEGRAM_URL ? (
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0088cc] hover:bg-[#0099e6] text-white font-mono font-bold text-xs shadow-md transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join Official Telegram</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0038b5] border border-white/20 text-[#00ff88] font-mono font-bold text-xs">
                  <Zap className="w-3.5 h-3.5 text-[#00ff88]" />
                  <span>Verified 100% Chad Muscle Token</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Ecosystem Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[#00ff88] font-black uppercase tracking-wider block">
              GIGA ECOSYSTEM
            </span>
            <ul className="space-y-2">
              {TELEGRAM_URL && (
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
              )}
              <li>
                <a
                  href={PUMPFUN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00ff88] transition-colors flex items-center gap-1.5 text-white"
                >
                  <span>💊</span> Pump.fun Portal
                </a>
              </li>
              <li>
                <a
                  href={DEXSCREENER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00ff88] transition-colors flex items-center gap-1.5 text-white"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-[#00ff88]" /> DexScreener Chart
                </a>
              </li>
              <li>
                <a
                  href={RAYDIUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00ff88] transition-colors flex items-center gap-1.5 text-white"
                >
                  <span>💧</span> Raydium Swap
                </a>
              </li>
              <li>
                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#70d6ff] transition-colors flex items-center gap-1.5 text-white/90"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#70d6ff]" /> Solscan Explorer
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[#00ff88] font-black uppercase tracking-wider block">
              QUICK NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2 text-white/90">
              <button
                onClick={() => {
                  const el = document.getElementById("giga-lore");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left hover:text-[#00ff88] transition-colors bg-transparent border-none cursor-pointer"
              >
                • Giga Lore
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("alpha-gym");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left hover:text-[#00ff88] transition-colors bg-transparent border-none cursor-pointer"
              >
                • Alpha Gym & Lab
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("tokenomics");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left hover:text-[#00ff88] transition-colors bg-transparent border-none cursor-pointer"
              >
                • Tokenomics
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("roadmap");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left hover:text-[#00ff88] transition-colors bg-transparent border-none cursor-pointer"
              >
                • Alpha Roadmap
              </button>
              <button
                onClick={handleScrollToTop}
                className="text-left hover:text-[#00ff88] text-white font-bold transition-colors bg-transparent border-none cursor-pointer col-span-2 pt-1"
              >
                ↑ Back to Top
              </button>
            </div>
          </div>

        </div>

        {/* CA Copy Bar in Footer */}
        <div className="py-6 border-b border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping"></span>
            <span className="font-mono text-xs font-bold text-[#00ff88]">OFFICIAL SOLANA CONTRACT ADDRESS:</span>
          </div>

          <div className="flex items-center gap-2 max-w-xl w-full md:w-auto">
            <div className="bg-[#002270] px-3 py-1.5 rounded-xl border border-white/20 font-mono text-xs text-white truncate flex-1 select-all">
              {GIGATOAD_CA}
            </div>
            <button
              onClick={handleCopyCA}
              className={`px-3.5 py-1.5 rounded-xl font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer ${
                copiedCA
                  ? "bg-[#00ff88] text-[#003bb5] border border-[#00ff88]"
                  : "bg-white hover:bg-white/90 text-[#0052fe]"
              }`}
            >
              {copiedCA ? <Check className="w-3.5 h-3.5 text-[#003bb5]" /> : <Copy className="w-3.5 h-3.5 text-[#0052fe]" />}
              <span>{copiedCA ? "Copied!" : "Copy CA"}</span>
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/80">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {GIGATOAD_NAME} ({GIGATOAD_TICKER}). Built for chads on Solana.
          </p>

          <p className="text-[11px] text-center sm:text-right max-w-md text-white/70">
            Disclaimer: {GIGATOAD_TICKER} is a community meme cryptocurrency celebrating alpha hypertrophy and toad lore. No financial advice.
          </p>
        </div>

      </div>
    </footer>
  );
}
