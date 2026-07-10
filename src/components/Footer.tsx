import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] text-zinc-500 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          
          {/* Logo & Slogan */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#14F195] shadow-[0_0_15px_rgba(20,241,149,0.3)]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/photo_2026-07-10_15-56-40.jpg?v=1783688211"
                  alt="Crypto Cat"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white uppercase italic">
                Crypto<span className="text-[#14F195]">Cat</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 max-w-sm font-sans font-medium">
              From depressed Cash Cat to legendary degen king. The happiest feline on Solana, printing money and green candles! 🐱📈
            </p>
          </div>

          {/* Social Icons Links */}
          <div className="md:col-span-7 flex flex-wrap justify-center md:justify-end gap-4">
            
            {/* Telegram */}
            <a
              href="https://t.me/cryptocatsolana"
              target="_blank"
              rel="noreferrer"
              id="tg-footer"
              className="px-5 py-3 rounded-xl bg-sky-500/5 hover:bg-sky-500/15 text-sky-400 hover:text-sky-300 font-mono font-bold text-xs transition-all flex items-center gap-2 border border-sky-500/10"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.1-3.48 3.84-1.6 4.64-1.88 5.16-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.2-.04.22z"/>
              </svg>
              Telegram Group
            </a>

            {/* Jupiter Buy */}
            <a
              href="#how-to-buy"
              id="buy-footer"
              className="px-5 py-3 rounded-xl bg-black hover:bg-[#14F195] hover:text-black text-[#14F195] font-mono font-black text-xs border border-[#14F195]/20 hover:border-transparent transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(20,241,149,0.1)] hover:shadow-[0_0_20px_rgba(20,241,149,0.3)]"
            >
              Swap on Solana <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>

        </div>

        {/* Disclaimer Block */}
        <div className="pt-12 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest block">
              ⚠️ MEMECOIN DISCLAIMER
            </span>
            <p className="text-[11px] leading-relaxed text-zinc-600 font-sans font-medium">
              $CRYPTOCAT is a digital memecoin launched on the Solana blockchain strictly for entertainment, amusement, and community engagement. It carries zero utility, has no formal investment guarantee, and is purely community-centric. Fictional storylines and gamified simulations do not constitute financial advice. Purchasing cryptocurrencies involves major risk, high volatility, and potential loss of principal. Invest responsibly, do your own due diligence, and never use funds you cannot afford to lose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-[11px] text-zinc-600 font-semibold gap-4">
            <span>© 2026 Crypto Cat ($cryptocat). Created with positive vibes. All rights reserved.</span>
            <button onClick={handleScrollToTop} className="hover:text-[#14F195] transition-colors cursor-pointer font-mono">
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
