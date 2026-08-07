import React from "react";
import { ArrowUpRight, Sparkles, TrendingUp, BookOpen, Compass } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1c1305] text-[#fef08a] py-16 border-t-2 border-[#785317] relative selection:bg-[#fde047] selection:text-[#1c1305]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#785317]/60">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.45)] bg-[#2e1f0a]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-08-07_20-34-51.jpg?v=1786124116"
                  alt="Cashcate Coin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-2xl tracking-tight text-white uppercase italic">
                  Cash<span className="text-[#facc15]">cate</span>
                </span>
                <span className="text-[10px] font-mono text-[#fde047]/80 font-bold -mt-1 tracking-widest">
                  $cashcate • SOLANA
                </span>
              </div>
            </div>
            <p className="text-sm text-[#fde047]/90 max-w-md font-serif font-semibold leading-relaxed">
              “Curiosity Creates Opportunity.” A golden figure on the windowsill sees what others miss. The timeless market cat on Solana with 0% tax and 100% community composure. 📜🪙🐾
            </p>
          </div>

          {/* External Ecosystem Links */}
          <div className="md:col-span-6 flex flex-wrap justify-center md:justify-end gap-4 relative">
            
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              id="chart-footer"
              className="px-5 py-3 rounded-xl bg-[#2e1f0a] hover:bg-[#3d2a0d] text-[#fde047] font-mono font-bold text-xs transition-all flex items-center gap-2 border border-[#785317] shadow-md cursor-pointer"
            >
              <TrendingUp className="w-4 h-4 text-[#facc15]" />
              DexScreener Chart
            </a>

            <a
              href="https://raydium.io"
              target="_blank"
              rel="noopener noreferrer"
              id="raydium-footer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#eab308] hover:from-[#b45309] hover:to-[#d97706] text-[#1c1305] font-display font-black text-xs transition-all flex items-center gap-1.5 shadow-lg border-none"
            >
              Raydium DEX <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>

          </div>

        </div>

        {/* Disclaimer Block */}
        <div className="pt-12 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#facc15] uppercase tracking-widest block">
              ⚠️ CASHCATE ($CASHCATE) DISCLAIMER
            </span>
            <p className="text-[11px] leading-relaxed text-[#fde047]/80 font-serif font-semibold">
              $cashcate is a community memecoin on Solana inspired by market lore and timeless feline curiosity. $cashcate has zero intrinsic financial value or expectation of financial return. Cryptocurrencies are speculative and subject to market volatility. Always do your own research (DYOR) and enjoy the market chronicles responsibly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-[11px] text-[#fde047]/80 font-mono font-bold gap-4">
            <span>© 2026 Cashcate ($cashcate). “Curiosity Creates Opportunity.” Inscribed on Solana.</span>
            <button onClick={handleScrollToTop} className="hover:text-white transition-colors cursor-pointer font-mono border-none bg-transparent">
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
