import React, { useState } from "react";
import {
  Copy,
  Check,
  TrendingUp,
  ExternalLink,
  ShieldCheck,
  Zap,
  Brain,
  Sparkles,
} from "lucide-react";
import {
  SLINGTARD_NAME,
  SLINGTARD_TICKER,
  SLINGTARD_LOGO,
  SLINGTARD_CA,
  X_COMMUNITY_URL,
  DEXSCREENER_URL,
  PUMPFUN_URL,
  SOLSCAN_URL,
  RAYDIUM_URL,
} from "../constants";

export default function Footer() {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(SLINGTARD_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2500);
  };

  return (
    <footer className="relative bg-[#111118] text-white pt-14 pb-12 border-t-4 border-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-white/20">
          
          {/* Logo & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-black bg-[#ffe600] shadow-[3px_3px_0px_#ff007a]">
                <img
                  src={SLINGTARD_LOGO}
                  alt="slingtard Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-comic text-2xl text-[#ffe600] tracking-tight block">
                  {SLINGTARD_NAME}
                </span>
                <div className="text-[10px] font-mono text-[#00f0ff] font-bold">
                  {SLINGTARD_TICKER} • THE RETARD WHO VAMPED HIS OWN COIN
                </div>
              </div>
            </div>

            <p className="text-sm text-white/90 max-w-md font-sans font-medium leading-relaxed">
              $slingtartd — the retard who vamped his own coin. 100% community-owned on Solana with 0% tax and pure retard energy on pump.fun. 🤤🕶️💸
            </p>

            <div className="pt-2">
              <a
                href={X_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-display font-bold text-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Official X Community</span>
              </a>
            </div>
          </div>

          {/* Direct Trading Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[#00f0ff] font-mono font-black text-xs uppercase tracking-wider block">
              OFFICIAL TRADING
            </span>
            <ul className="space-y-2.5 text-xs font-mono font-bold">
              <li>
                <a
                  href={PUMPFUN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffe600] transition-colors flex items-center gap-1.5 text-white"
                >
                  <span>💊 Pump.fun Market</span>
                </a>
              </li>
              <li>
                <a
                  href={DEXSCREENER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffe600] transition-colors flex items-center gap-1.5 text-white"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-[#00f0ff]" /> DexScreener Chart
                </a>
              </li>
              <li>
                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffe600] transition-colors flex items-center gap-1.5 text-white"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#ff007a]" /> Solscan Explorer
                </a>
              </li>
              <li>
                <a
                  href={X_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffe600] transition-colors flex items-center gap-1.5 text-white"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X Community Forum</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[#ff007a] font-mono font-black text-xs uppercase tracking-wider block">
              QUICK NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold text-white/90">
              <a
                href="#lore"
                className="hover:text-[#ffe600] text-left transition-colors"
              >
                • Story & Lore
              </a>
              <a
                href="#vamp-lab"
                className="hover:text-[#ffe600] text-left transition-colors"
              >
                • 0 IQ Lab
              </a>
              <a
                href="#tokenomics"
                className="hover:text-[#ffe600] text-left transition-colors"
              >
                • Tokenomics
              </a>
              <a
                href="#roadmap"
                className="hover:text-[#ffe600] text-left transition-colors"
              >
                • Masterplan
              </a>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-black/60 border border-white/20 text-[11px] font-mono text-white/80">
                <span className="text-[#ffe600] font-black">SOLANA METRICS:</span> 0% Dev Bags • 0% Taxes • 100% Retard Power
              </div>
            </div>
          </div>
        </div>

        {/* CA Copy Bar in Footer */}
        <div className="py-6 border-b-2 border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping"></span>
            <span className="font-mono text-xs font-black text-[#ffe600]">
              OFFICIAL SOLANA CONTRACT ADDRESS:
            </span>
          </div>

          <div className="flex items-center gap-2 max-w-xl w-full md:w-auto">
            <div className="bg-black px-3.5 py-2 rounded-xl border border-white/30 font-mono text-xs text-white truncate flex-1 select-all">
              {SLINGTARD_CA}
            </div>
            <button
              onClick={handleCopyCA}
              className={`comic-btn px-4 py-2 font-mono font-black text-xs flex items-center gap-1.5 cursor-pointer ${
                copiedCA
                  ? "bg-[#00f0ff] text-black"
                  : "bg-[#ff007a] hover:bg-[#ff1a80] text-white"
              }`}
            >
              {copiedCA ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCA ? "Copied!" : "Copy CA"}</span>
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/80">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {SLINGTARD_NAME} ({SLINGTARD_TICKER}). Built by chads on Solana.
          </p>
          <p className="text-[11px] text-center sm:text-right max-w-md text-white/70">
            Disclaimer: {SLINGTARD_TICKER} is a community meme cryptocurrency celebrating 0 IQ KOL lore and retard energy. No financial advice.
          </p>
        </div>

      </div>
    </footer>
  );
}
