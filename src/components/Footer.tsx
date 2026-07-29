import React from "react";
import { ArrowUpRight, Send } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#100805] text-[#d4bca0] py-16 border-t border-[#2d1b11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#2d1b11]">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#d97706] shadow-[0_0_15px_rgba(217,119,6,0.3)] bg-[#251710]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-29_11-30-45.jpg?v=1785313952"
                  alt="Pipe Dog Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-[#fbf0da] uppercase italic">
                Pipe <span className="text-[#f59e0b]">Dog</span>
              </span>
            </div>
            <p className="text-sm text-[#e4cbaf] max-w-md font-sans font-semibold">
              The iconic gentleman dog of Solana! Combining classic tobacco pipe composure with unshakeable dignity to hold with class and lead thepack to green candle glory. 🍂💨💎
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-6 flex flex-wrap justify-center md:justify-end gap-4 relative">
            
            {/* Telegram Link */}
            <a
              href="https://t.me/pipedogonsol"
              target="_blank"
              rel="noopener noreferrer"
              id="tg-footer"
              className="px-5 py-3 rounded-xl bg-[#251710] hover:bg-[#321f16] text-[#f59e0b] font-mono font-bold text-xs transition-all flex items-center gap-2 border border-[#4a2e1d] shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4 fill-current" />
              Telegram Lounge
            </a>

            {/* Swap Buy */}
            <a
              href="#how-to-buy"
              id="buy-footer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-[#120b08] font-mono font-black text-xs transition-all flex items-center gap-1.5 shadow-lg border-none"
            >
              Swap $pipedog <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>

          </div>

        </div>

        {/* Disclaimer Block */}
        <div className="pt-12 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-widest block">
              ⚠️ PIPE DOG ($pipedog) DISCLAIMER
            </span>
            <p className="text-[11px] leading-relaxed text-[#d4bca0] font-sans font-semibold">
              $pipedog is a community memecoin on Solana created purely for entertainment, nostalgia, and community engagement. $pipedog has zero intrinsic financial value or expectation of financial return. Cryptocurrencies are highly volatile and speculative. Always perform your own research (DYOR) and trade responsibly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-[11px] text-[#d4bca0] font-bold gap-4">
            <span>© 2026 Pipe Dog ($pipedog). All rights reserved. The lounge belongs to Pipe Dog!</span>
            <button onClick={handleScrollToTop} className="hover:text-[#f59e0b] transition-colors cursor-pointer font-mono border-none bg-transparent">
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
