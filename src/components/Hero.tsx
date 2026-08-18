import React, { useState } from "react";
import {
  Copy,
  Check,
  Target,
  Crosshair,
  TrendingUp,
  Flame,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import {
  BULLSEYE_NAME,
  BULLSEYE_TICKER,
  BULLSEYE_LOGO,
  BULLSEYE_CA,
  BULLSEYE_QUOTES,
  X_COMMUNITY_URL,
  DEXSCREENER_URL,
  PUMPFUN_URL,
} from "../constants";

export default function Hero() {
  const [copiedCA, setCopiedCA] = useState(false);
  const [targetHits, setTargetHits] = useState(14820);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [targetPulse, setTargetPulse] = useState(false);
  const [hitEffects, setHitEffects] = useState<Array<{ id: number; text: string; x: number; y: number }>>([]);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(BULLSEYE_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2500);
  };

  const playHitSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // High pitch target ping
      osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.16);
    } catch (e) {
      // Audio fallback
    }
  };

  const handleTargetClick = (e: React.MouseEvent<HTMLDivElement>) => {
    playHitSound();
    setTargetHits((prev) => prev + 100);
    setTargetPulse(true);
    setTimeout(() => setTargetPulse(false), 250);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const hitPraise = ["🎯 BULLSEYE! +100", "💥 DIRECT HIT!", "💯 100% ACCURACY", "🔥 FLIPPING TYPO!"];
    const text = hitPraise[Math.floor(Math.random() * hitPraise.length)];

    const id = Date.now() + Math.random();
    setHitEffects((prev) => [...prev, { id, text, x, y }]);
    setTimeout(() => {
      setHitEffects((prev) => prev.filter((item) => item.id !== id));
    }, 1000);
  };

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % BULLSEYE_QUOTES.length);
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 bg-[#ffffff] text-black overflow-hidden border-b-4 border-black target-grid">
      {/* Background concentric subtle rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-black/10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[#e60012]/15 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-black/10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Badge Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white border-2 border-black shadow-[4px_4px_0px_#e60012]">
            <span className="w-3 h-3 rounded-full bg-[#e60012] animate-ping"></span>
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              100% COMMUNITY-OWNED • THE REAL TARGET ON SOLANA
            </span>
          </div>

          {/* Main Title */}
          <div className="relative inline-block">
            <h1 className="font-comic text-6xl sm:text-8xl md:text-9xl text-black tracking-tight uppercase drop-shadow-[5px_5px_0px_#e60012] leading-none select-none">
              {BULLSEYE_NAME}
            </h1>
            <div className="absolute -top-3 -right-6 sm:-right-10 bg-[#e60012] text-white font-mono font-black text-xs sm:text-sm px-3.5 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] rotate-12 animate-bounce">
              {BULLSEYE_TICKER}
            </div>
          </div>

          <p className="font-sans font-extrabold text-2xl sm:text-3xl text-black max-w-3xl mx-auto leading-tight">
            They spelled it <span className="text-red-600 line-through decoration-black decoration-4">"BULLS'S EYE"</span>. <br className="hidden sm:inline" />
            We launched <span className="text-[#e60012] underline decoration-wavy decoration-black">BULLSEYE</span> to fix the typo and take over the lead!
          </p>

          {/* Interactive Utility Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (!soundEnabled) playHitSound();
              }}
              className="target-btn px-4 py-2 bg-white text-xs font-mono font-bold text-black flex items-center gap-2"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#e60012]" />
                  <span>Audio: On (Target Ping)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-gray-500" />
                  <span>Audio: Off (Click to Hear Hits)</span>
                </>
              )}
            </button>

            <div className="target-btn px-4 py-2 bg-[#fff5f5] text-xs font-mono font-black flex items-center gap-2 border-2 border-black">
              <Crosshair className="w-4 h-4 text-[#e60012]" />
              <span>{targetHits.toLocaleString()} Bullseye Points Scored</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Main Showcase Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="target-card p-6 sm:p-10 bg-white relative overflow-hidden">
            
            {/* Top Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b-3 border-black">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#e60012]"></span>
                <span className="text-xs font-mono font-black text-black uppercase tracking-wider">
                  SOLANA CONTRACT ACCURACY: 100%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-black text-white">
                  0% BUY TAX
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#e60012] text-white">
                  0% SELL TAX
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Interactive Target Board & Bull Logo */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div
                  onClick={handleTargetClick}
                  className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-black bg-white shadow-[8px_8px_0px_#000] cursor-pointer group flex items-center justify-center transition-transform select-none ${
                    targetPulse ? "scale-95" : "hover:scale-105"
                  }`}
                  title="Click the Bullseye Target!"
                >
                  {/* Concentric rings */}
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-black/30 animate-crosshair pointer-events-none"></div>
                  <div className="absolute inset-6 rounded-full border-4 border-black pointer-events-none"></div>
                  
                  {/* Logo Image */}
                  <div className="w-44 h-44 rounded-full overflow-hidden flex items-center justify-center bg-white z-10 pointer-events-none">
                    <img
                      src={BULLSEYE_LOGO}
                      alt="Bullseye Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Click Floating Effects */}
                  {hitEffects.map((effect) => (
                    <div
                      key={effect.id}
                      style={{ left: effect.x, top: effect.y }}
                      className="absolute pointer-events-none text-sm font-display font-black text-[#e60012] z-30 animate-[float-hit_1s_ease-out_forwards]"
                    >
                      {effect.text}
                    </div>
                  ))}

                  {/* Click Badge */}
                  <div className="absolute -bottom-3 bg-black text-white text-[11px] font-mono font-black px-3.5 py-1 rounded-full border-2 border-white shadow-[2px_2px_0px_#e60012] z-20">
                    🎯 TAP TO HIT BULLSEYE (+100)
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-xs font-mono font-black text-black bg-[#fff5f5] px-4 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#e60012] inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#e60012]" /> Direct Hit • Zero Dev Allocation
                  </span>
                </div>
              </div>

              {/* Right: Typo Comparison & Direct Action */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Typo vs Real Card Comparison */}
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* The Typo Coin */}
                    <div className="p-3.5 rounded-xl bg-gray-100 border-2 border-black/40 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-black text-gray-500">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span>THE FAILED TYPO COIN</span>
                      </div>
                      <div className="font-mono text-lg font-black text-gray-700 line-through">
                        "BULLS'S EYE"
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium">
                        Broken double-S apostrophe grammar disaster.
                      </div>
                    </div>

                    {/* The Real Bullseye */}
                    <div className="p-3.5 rounded-xl bg-[#fff5f5] border-2 border-[#e60012] shadow-[3px_3px_0px_#000] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-black text-[#e60012]">
                        <CheckCircle2 className="w-4 h-4 text-[#e60012]" />
                        <span>THE REAL TARGET ($bullseye)</span>
                      </div>
                      <div className="font-mono text-lg font-black text-black flex items-center gap-1">
                        BULLSEYE 🎯
                      </div>
                      <div className="text-[11px] text-black font-bold">
                        Proper spelling. 100% community takeover on Solana!
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Quote Confession */}
                <div
                  onClick={nextQuote}
                  className="p-4 rounded-2xl bg-[#fff5f5] border-3 border-black shadow-[4px_4px_0px_#000] cursor-pointer hover:bg-[#ffe5e5] transition-all group"
                  title="Click for next quote"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#e60012] mb-1 font-black">
                    <span>🎯 TARGET DISPATCH #{quoteIndex + 1}</span>
                    <span className="text-[10px] text-black font-bold group-hover:underline">Tap for next wisdom →</span>
                  </div>
                  <p className="font-mono text-sm sm:text-base text-black font-bold italic">
                    {BULLSEYE_QUOTES[quoteIndex]}
                  </p>
                </div>

                {/* Contract Address Box */}
                <div className="p-4 rounded-2xl bg-[#f4f4f5] border-3 border-black shadow-[4px_4px_0px_#000] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-black text-black">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#e60012]" /> OFFICIAL CONTRACT ADDRESS (SOLANA)
                    </span>
                    <span className="text-[10px] text-[#e60012] bg-white px-2 py-0.5 rounded border border-black font-bold">
                      PUMP.FUN VERIFIED
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={BULLSEYE_CA}
                      className="w-full font-mono text-xs sm:text-sm bg-white text-black p-3 rounded-xl border-2 border-black focus:outline-none select-all font-bold"
                    />
                    <button
                      onClick={handleCopyCA}
                      className={`target-btn px-4 py-3 text-xs font-mono font-bold flex items-center gap-1.5 shrink-0 ${
                        copiedCA ? "bg-[#e60012] text-white" : "bg-black text-white hover:bg-[#1a1a1a]"
                      }`}
                    >
                      {copiedCA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span className="hidden sm:inline">{copiedCA ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={PUMPFUN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="target-btn target-btn-red py-3.5 text-center text-sm font-display font-black flex items-center justify-center gap-2"
                  >
                    <span>🎯 Buy on Pump.fun</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={X_COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="target-btn py-3.5 bg-black hover:bg-[#1a1a1a] text-white text-center text-sm font-display font-bold flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>Join X Community</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 3 Target Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="target-card p-6 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-black border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#e60012] text-white">
              🎯
            </div>
            <h3 className="font-display font-black text-xl text-black">The Corrected Target</h3>
            <p className="font-sans text-sm text-black font-semibold leading-relaxed">
              We fixed the "BULLS'S EYE" typo once and for all. Clean, legitimate branding for real Solana chads.
            </p>
          </div>

          <div className="target-card p-6 space-y-2 bg-[#fff5f5] border-[#e60012]">
            <div className="w-12 h-12 rounded-2xl bg-[#e60012] border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#000] text-white">
              👑
            </div>
            <h3 className="font-display font-black text-xl text-black">Taking Over The Lead</h3>
            <p className="font-sans text-sm text-black font-semibold leading-relaxed">
              100% community-driven momentum on pump.fun designed to flip the typo coin and lead the meta.
            </p>
          </div>

          <div className="target-card p-6 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-black border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#e60012] text-white">
              💎
            </div>
            <h3 className="font-display font-black text-xl text-black">100% Fair & Safe</h3>
            <p className="font-sans text-sm text-black font-semibold leading-relaxed">
              Zero team allocation, zero tax, and LP burned on pump.fun. Run by the community, for the community.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
