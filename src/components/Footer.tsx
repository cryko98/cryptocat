import React, { useState } from "react";
import {
  Copy,
  Check,
  Target,
  Crosshair,
  ExternalLink,
  ShieldCheck,
  Heart,
} from "lucide-react";
import {
  BULLSEYE_NAME,
  BULLSEYE_TICKER,
  BULLSEYE_LOGO,
  BULLSEYE_CA,
  X_COMMUNITY_URL,
  DEXSCREENER_URL,
  PUMPFUN_URL,
  SOLSCAN_URL,
  RAYDIUM_URL,
} from "../constants";

export default function Footer() {
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(BULLSEYE_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2500);
  };

  return (
    <footer className="bg-black text-white border-t-4 border-black relative overflow-hidden">
      {/* Subtle Red Top Accent Bar */}
      <div className="h-2 bg-[#e60012] w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white bg-white shadow-[3px_3px_0px_#e60012]">
                <img
                  src={BULLSEYE_LOGO}
                  alt="Bullseye Logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-comic text-2xl text-white tracking-tight block">
                  {BULLSEYE_NAME}
                </span>
                <div className="text-[10px] font-mono text-[#e60012] font-black">
                  {BULLSEYE_TICKER} • THE REAL TARGET ON SOLANA
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 max-w-md font-sans font-medium leading-relaxed">
              $bullseye is a 100% community-owned meme coin on Solana created to fix the "BULLS'S EYE" typo and take over the lead on pump.fun. Zero tax, zero dev baggage. 🎯🔥
            </p>

            <div className="pt-2">
              <a
                href={X_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="target-btn inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-display font-bold text-xs hover:bg-[#fff5f5]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Official X Community</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-black text-[#e60012] uppercase tracking-wider">
              OFFICIAL CHANNELS
            </h4>
            <ul className="space-y-2 text-sm font-sans font-bold">
              <li>
                <a
                  href={PUMPFUN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#e60012] transition-colors flex items-center gap-1.5"
                >
                  <span>💊 Pump.fun Launchpad</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={X_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#e60012] transition-colors flex items-center gap-1.5"
                >
                  <span>🐦 X (Twitter) Community</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={DEXSCREENER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#e60012] transition-colors flex items-center gap-1.5"
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
                  className="text-gray-300 hover:text-[#e60012] transition-colors flex items-center gap-1.5"
                >
                  <span>🔍 SolScan Explorer</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contract Address Copy */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-black text-[#e60012] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#e60012]" /> SOLANA CONTRACT ADDRESS
            </h4>

            <div className="p-3 bg-gray-900 rounded-xl border-2 border-gray-700 space-y-2">
              <div className="font-mono text-xs text-gray-300 break-all select-all font-bold">
                {BULLSEYE_CA}
              </div>
              <button
                onClick={handleCopyCA}
                className={`target-btn w-full py-2 text-xs font-mono font-bold flex items-center justify-center gap-2 ${
                  copiedCA ? "bg-[#e60012] text-white" : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {copiedCA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCA ? "Copied to Clipboard!" : "Copy CA"}</span>
              </button>
            </div>
            <p className="text-[11px] text-gray-400 font-mono">
              Always verify the CA before trading. $bullseye is 100% community-owned.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span>© 2026 {BULLSEYE_NAME} ({BULLSEYE_TICKER})</span>
            <span>•</span>
            <span className="text-[#e60012]">All targets hit.</span>
          </div>

          <div className="text-[11px] text-gray-500 text-center sm:text-right max-w-md">
            Disclaimer: $bullseye is a decentralized meme token created for entertainment and community governance. Not financial advice.
          </div>
        </div>

      </div>
    </footer>
  );
}
