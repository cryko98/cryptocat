import React, { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Footer() {
  const [showTelegramAlert, setShowTelegramAlert] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTelegramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTelegramAlert(true);
    setTimeout(() => setShowTelegramAlert(false), 3000);
  };

  return (
    <footer className="bg-[#FFFDFD] text-rose-800/60 py-16 border-t border-rose-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-rose-200/30">
          
          {/* Logo & Slogan */}
          <div className="md:col-span-6 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0967/8087/8151/files/casper.png?v=1784562261"
                  alt="The Albino Raccoon Casper"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-[#4C0519] uppercase italic">
                The Albino <span className="text-rose-500">Raccoon</span>
              </span>
            </div>
            <p className="text-sm text-rose-950/70 max-w-md font-sans font-semibold">
              The rarest 1-in-750,000 miracle on Solana. Surviving wild dog attacks, Casper healed his hip, retired to his safe cozy haven, and turned his limited left paw into the strongest Diamond Paw in crypto! 🦝✨🍀
            </p>
          </div>

          {/* Social Icons Links */}
          <div className="md:col-span-6 flex flex-wrap justify-center md:justify-end gap-4 relative">
            
            {/* Telegram Link */}
            <a
              href="https://t.me/thealbinoraccoon"
              target="_blank"
              rel="noopener noreferrer"
              id="tg-footer"
              className="px-5 py-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-850 font-mono font-bold text-xs transition-all flex items-center gap-2 border border-rose-150 shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4 text-rose-500 fill-current" />
              Telegram Channel
            </a>

            {/* Swap Buy */}
            <a
              href="#how-to-buy"
              id="buy-footer"
              className="px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-mono font-black text-xs transition-all flex items-center gap-1.5 shadow-md border-none"
            >
              Swap on Solana <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>

        </div>

        {/* Disclaimer Block */}
        <div className="pt-12 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-rose-800/50 uppercase tracking-widest block">
              ⚠️ CASPER ($Casper) MEMECOIN DISCLAIMER
            </span>
            <p className="text-[11px] leading-relaxed text-rose-800/40 font-sans font-semibold">
              $Casper is a digital memecoin launched on the Solana blockchain strictly for entertainment, amusement, and community building. Casper the Raccoon is a real, beloved albino raccoon, but this token is not directly affiliated with any professional wildlife reserve or medical entity, and carries zero utility or formal financial guarantees. Fictionalized crypto narratives and interactive gamified features do not constitute financial advice. Purchasing cryptocurrencies involves significant risks, extreme volatility, and potential total loss of capital. Invest responsibly, do your own research, and only trade with funds you can afford to lose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-[11px] text-rose-800/40 font-bold gap-4">
            <span>© 2026 The Albino Raccoon ($Casper). Keeping the yard lucky. All rights reserved.</span>
            <button onClick={handleScrollToTop} className="hover:text-rose-600 transition-colors cursor-pointer font-mono border-none bg-transparent">
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
