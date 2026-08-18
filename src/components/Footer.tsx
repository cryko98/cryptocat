import React, { useState } from "react";
import {
  Copy,
  Check,
  Crown,
  ExternalLink,
  ShieldCheck,
  Send,
  Eye,
} from "lucide-react";
import {
  CATSEYE_NAME,
  CATSEYE_TICKER,
  CATSEYE_LOGO,
  CATSEYE_CA,
  TELEGRAM_URL,
  X_COMMUNITY_URL,
  DEXSCREENER_URL,
  PUMPFUN_URL,
  SOLSCAN_URL,
} from "../constants";

export default function Footer() {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(CATSEYE_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2500);
  };

  return (
    <footer className="bg-[#0a0a0f] text-white border-t-4 border-black relative overflow-hidden">
      {/* Subtle Emerald Top Accent Bar */}
      <div className="h-2 bg-[#00f076] w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#00f076] bg-black shadow-[3px_3px_0px_#00f076]">
                <img
                  src={CATSEYE_LOGO}
                  alt="CAT'S EYE Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-comic text-2xl text-white tracking-tight block">
                  {CATSEYE_NAME}
                </span>
                <div className="text-[10px] font-mono text-[#00f076] font-black">
                  {CATSEYE_TICKER} • THE SUPREME SOLANA CAT META
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 max-w-md font-sans font-medium leading-relaxed">
              $catseye is a 100% community-owned meme token on Solana launched to easily surpass the $5M Bull's Eye coin and establish the supreme cat meta on pump.fun. Zero tax, zero dev baggage. 🐱🐾
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cat-btn cat-btn-tg inline-flex items-center gap-2 px-4 py-2 text-white font-display font-bold text-xs"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>Join Official Telegram</span>
              </a>

              <a
                href={PUMPFUN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cat-btn cat-btn-green inline-flex items-center gap-2 px-4 py-2 text-black font-display font-black text-xs"
              >
                <span>💊 Pump.fun</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-black text-[#00f076] uppercase tracking-wider">
              OFFICIAL CHANNELS
            </h4>
            <ul className="space-y-2 text-sm font-sans font-bold">
              <li>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00f076] transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-[#229ED9]" />
                  <span>Telegram Community</span>
                </a>
              </li>
              <li>
                <a
                  href={PUMPFUN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00f076] transition-colors flex items-center gap-1.5"
                >
                  <span>💊 Pump.fun Launchpad</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={DEXSCREENER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00f076] transition-colors flex items-center gap-1.5"
                >
                  <span>📈 DexScreener Chart</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00f076] transition-colors flex items-center gap-1.5"
                >
                  <span>🔍 SolScan Explorer</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contract Address Copy */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-black text-[#00f076] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00f076]" /> SOLANA CONTRACT ADDRESS
            </h4>

            <div className="p-3 bg-gray-900 rounded-xl border-2 border-gray-800 space-y-2">
              <div className="font-mono text-xs text-gray-300 break-all select-all font-bold">
                {CATSEYE_CA}
              </div>
              <button
                onClick={handleCopyCA}
                className={`cat-btn w-full py-2 text-xs font-mono font-bold flex items-center justify-center gap-2 ${
                  copiedCA ? "bg-[#00f076] text-black" : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {copiedCA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCA ? "Copied to Clipboard!" : "Copy CA"}</span>
              </button>
            </div>
            <p className="text-[11px] text-gray-400 font-mono">
              Always verify the CA before swapping. $catseye is 100% community-owned.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span>© 2026 {CATSEYE_NAME} ({CATSEYE_TICKER})</span>
            <span>•</span>
            <span className="text-[#00f076]">The Cat Meta Is Eternal.</span>
          </div>

          <div className="text-[11px] text-gray-500 text-center sm:text-right max-w-md">
            Disclaimer: $catseye is a decentralized meme token created for entertainment and community governance on Solana.
          </div>
        </div>

      </div>
    </footer>
  );
}
