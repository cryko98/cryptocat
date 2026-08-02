import React from "react";
import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05010a] text-purple-200 py-16 border-t border-[#3b186b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#3b186b]">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] bg-[#130726]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/auracat.png?v=1785688369"
                  alt="Aura Cat Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white uppercase italic">
                Aura <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Cat</span>
              </span>
            </div>
            <p className="text-sm text-purple-200/90 max-w-md font-sans font-semibold">
              The sovereign guardian of feline energy on Solana! Emitting an iridescent glow, pure 432 Hz frequency, and unshakeable serenity to align your portfolio with high-vibration cosmic abundance. ✨🔮🐾
            </p>
          </div>

          {/* External Ecosystem Links (No Telegram, No Buy Buttons) */}
          <div className="md:col-span-6 flex flex-wrap justify-center md:justify-end gap-4 relative">
            
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              id="chart-footer"
              className="px-5 py-3 rounded-xl bg-[#130726] hover:bg-[#200b42] text-purple-300 font-mono font-bold text-xs transition-all flex items-center gap-2 border border-[#3b186b] shadow-md cursor-pointer"
            >
              <TrendingUp className="w-4 h-4 text-purple-400" />
              DexScreener Chart
            </a>

            <a
              href="https://raydium.io"
              target="_blank"
              rel="noopener noreferrer"
              id="raydium-footer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-mono font-black text-xs transition-all flex items-center gap-1.5 shadow-lg border-none"
            >
              Raydium Pool <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>

          </div>

        </div>

        {/* Disclaimer Block */}
        <div className="pt-12 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest block">
              ⚠️ AURA CAT ($auracat) DISCLAIMER
            </span>
            <p className="text-[11px] leading-relaxed text-purple-300/80 font-sans font-semibold">
              $auracat is a community memecoin on Solana created purely for entertainment, high-vibration frequency, and community resonance. $auracat has zero intrinsic financial value or expectation of financial return. Cryptocurrencies are highly volatile and speculative. Always perform your own research (DYOR) and radiate positive energy responsibly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-[11px] text-purple-300/80 font-bold gap-4">
            <span>© 2026 Aura Cat ($auracat). All rights reserved. The 432 Hz sanctuary belongs to Aura Cat!</span>
            <button onClick={handleScrollToTop} className="hover:text-purple-400 transition-colors cursor-pointer font-mono border-none bg-transparent">
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
