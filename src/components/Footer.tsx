import React from "react";
import { ArrowUpRight, Send } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-800">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)] bg-slate-800">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/shark.png?v=1785074178"
                  alt="Shark Cat Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white uppercase italic">
                Shark <span className="text-sky-400">Cat</span>
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-md font-sans font-semibold">
              The bloodthirsty apex predator of Solana! Combining feline stealth with razor-sharp shark jaws to tear paper hands apart and lead the pack to green candle glory. 🦈🩸⚡
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-6 flex flex-wrap justify-center md:justify-end gap-4 relative">
            
            {/* Telegram Link */}
            <a
              href="https://t.me/sharkcattonsol"
              target="_blank"
              rel="noopener noreferrer"
              id="tg-footer"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 font-mono font-bold text-xs transition-all flex items-center gap-2 border border-slate-700 shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4 fill-current" />
              Telegram Channel
            </a>

            {/* Swap Buy */}
            <a
              href="#how-to-buy"
              id="buy-footer"
              className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-black text-xs transition-all flex items-center gap-1.5 shadow-lg border-none"
            >
              Swap $sharkcat <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>

          </div>

        </div>

        {/* Disclaimer Block */}
        <div className="pt-12 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
              ⚠️ SHARK CAT ($sharkcat) DISCLAIMER
            </span>
            <p className="text-[11px] leading-relaxed text-slate-400 font-sans font-semibold">
              $sharkcat is a community memecoin on Solana created purely for entertainment and community engagement. $sharkcat has zero intrinsic financial value or expectation of financial return. Cryptocurrencies are highly volatile and speculative. Always perform your own research (DYOR) and trade responsibly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-[11px] text-slate-400 font-bold gap-4">
            <span>© 2026 Shark Cat ($sharkcat). All rights reserved. The ocean belongs to Shark Cat!</span>
            <button onClick={handleScrollToTop} className="hover:text-sky-400 transition-colors cursor-pointer font-mono border-none bg-transparent">
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
