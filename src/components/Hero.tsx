import React, { useState } from "react";
import {
  Copy,
  Check,
  Sparkles,
  Flame,
  Volume2,
  VolumeX,
  ArrowRight,
  ShieldCheck,
  Send,
  ExternalLink,
  Crown,
  Eye,
} from "lucide-react";
import {
  CATSEYE_NAME,
  CATSEYE_TICKER,
  CATSEYE_LOGO,
  CATSEYE_CA,
  CATSEYE_QUOTES,
  TELEGRAM_URL,
  X_COMMUNITY_URL,
  DEXSCREENER_URL,
  PUMPFUN_URL,
} from "../constants";

export default function Hero() {
  const [copiedCA, setCopiedCA] = useState(false);
  const [purrPoints, setPurrPoints] = useState(25940);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [eyePulse, setEyePulse] = useState(false);
  const [hitEffects, setHitEffects] = useState<Array<{ id: number; text: string; x: number; y: number }>>([]);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(CATSEYE_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2500);
  };

  // Play a soft cute synthesizer purr / meow chirping tone
  const playCatSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      
      // Meow upward and downward chirp
      osc.frequency.setValueAtTime(400, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
      osc.frequency.exponentialRampToValueAtTime(520, audioCtx.currentTime + 0.2);

      gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.24);
    } catch (e) {}
  };

  const handleEyeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    playCatSound();
    setPurrPoints((prev) => prev + 100);
    setEyePulse(true);
    setTimeout(() => setEyePulse(false), 250);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const praises = ["🐾 PURR +100", "✨ LASER FOCUS!", "🐱 CAT META OVER 9000", "🔥 FLIPPING BULL'S EYE!"];
    const text = praises[Math.floor(Math.random() * praises.length)];

    const id = Date.now() + Math.random();
    setHitEffects((prev) => [...prev, { id, text, x, y }]);
    setTimeout(() => {
      setHitEffects((prev) => prev.filter((item) => item.id !== id));
    }, 1000);
  };

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % CATSEYE_QUOTES.length);
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 bg-[#ffffff] text-black overflow-hidden border-b-4 border-black cat-grid">
      
      {/* Ambient background glowing rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-black/10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-[#00f076]/30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-black/10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Badge Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white border-2 border-black shadow-[4px_4px_0px_#00f076]">
            <span className="w-3 h-3 rounded-full bg-[#00f076] animate-ping"></span>
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              100% COMMUNITY-OWNED • THE SUPREME SOLANA CAT META
            </span>
          </div>

          {/* Main Title */}
          <div className="relative inline-block">
            <h1 className="font-comic text-6xl sm:text-8xl md:text-9xl text-black tracking-tight uppercase drop-shadow-[5px_5px_0px_#00f076] leading-none select-none">
              {CATSEYE_NAME}
            </h1>
            <div className="absolute -top-3 -right-6 sm:-right-10 bg-[#00f076] text-black font-mono font-black text-xs sm:text-sm px-3.5 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] rotate-12 animate-bounce">
              {CATSEYE_TICKER}
            </div>
          </div>

          <p className="font-sans font-extrabold text-2xl sm:text-3xl text-black max-w-3xl mx-auto leading-tight">
            The coolest Solana memecoins are <span className="text-[#00c961] underline decoration-wavy decoration-black">ALWAYS about cats</span>. <br className="hidden sm:inline" />
            Bull's Eye surpassed $5M — now <span className="text-black font-black bg-[#eafff3] px-2 py-0.5 rounded border-2 border-black">CAT'S EYE</span> is here to outshine them all! 🐱🔥
          </p>

          {/* Interactive Utility Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (!soundEnabled) playCatSound();
              }}
              className="cat-btn px-4 py-2 bg-white text-xs font-mono font-bold text-black flex items-center gap-2"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#00c961]" />
                  <span>Audio: On (Chirp / Purr)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-gray-500" />
                  <span>Audio: Off (Click for Cat Sounds)</span>
                </>
              )}
            </button>

            <div className="cat-btn px-4 py-2 bg-[#eafff3] text-xs font-mono font-black flex items-center gap-2 border-2 border-black">
              <Eye className="w-4 h-4 text-[#00c961]" />
              <span>{purrPoints.toLocaleString()} Laser Purr Points</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Main Showcase Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="cat-card p-6 sm:p-10 bg-white relative overflow-hidden">
            
            {/* Top Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b-3 border-black">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00f076]"></span>
                <span className="text-xs font-mono font-black text-black uppercase tracking-wider">
                  SOLANA CAT META: 100% UNSTOPPABLE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-black text-white">
                  0% TAX
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#00f076] text-black">
                  100% COMMUNITY
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Interactive Cat's Eye Avatar */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div
                  onClick={handleEyeClick}
                  className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-black bg-black shadow-[8px_8px_0px_#000] cursor-pointer group flex items-center justify-center transition-transform select-none ${
                    eyePulse ? "scale-95" : "hover:scale-105"
                  }`}
                  title="Click the glowing Cat's Eye!"
                >
                  {/* Outer emerald glow rings */}
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#00f076]/40 pointer-events-none animate-spin" style={{ animationDuration: '30s' }}></div>
                  <div className="absolute inset-4 rounded-full border-2 border-[#00f076]/60 pointer-events-none"></div>
                  
                  {/* Cat Logo Image */}
                  <div className="w-48 h-48 rounded-full overflow-hidden flex items-center justify-center bg-black z-10 pointer-events-none shadow-2xl">
                    <img
                      src={CATSEYE_LOGO}
                      alt="CAT'S EYE Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Click Floating Effects */}
                  {hitEffects.map((effect) => (
                    <div
                      key={effect.id}
                      style={{ left: effect.x, top: effect.y }}
                      className="absolute pointer-events-none text-sm font-display font-black text-[#00f076] z-30 animate-[float-paw_1s_ease-out_forwards] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    >
                      {effect.text}
                    </div>
                  ))}

                  {/* Click Badge */}
                  <div className="absolute -bottom-3 bg-black text-[#00f076] text-[11px] font-mono font-black px-4 py-1.5 rounded-full border-2 border-white shadow-[2px_2px_0px_#00f076] z-20">
                    🐾 TAP TO ACTIVATE PURR (+100)
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-xs font-mono font-black text-black bg-[#eafff3] px-4 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#00f076] inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00c961]" /> Solana Cat Superiority • Zero Dev Allocation
                  </span>
                </div>
              </div>

              {/* Right: Bull vs Cat Comparison & Action CTAs */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Side-by-side Flip Comparison */}
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Bull's Eye */}
                    <div className="p-3.5 rounded-xl bg-gray-100 border-2 border-black/40 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-black text-gray-500">
                        <span>🐂 BULL'S EYE ($5M+ MCAP)</span>
                      </div>
                      <div className="font-mono text-base font-black text-gray-700">
                        The Target Has Been Set
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium">
                        Proved the thesis at $5M. But cats rule the Solana meme throne.
                      </div>
                    </div>

                    {/* Cat's Eye */}
                    <div className="p-3.5 rounded-xl bg-[#eafff3] border-2 border-[#00c961] shadow-[3px_3px_0px_#000] space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-black text-[#00a850]">
                        <Crown className="w-4 h-4 text-[#00a850]" />
                        <span>CAT'S EYE ($catseye)</span>
                      </div>
                      <div className="font-mono text-base font-black text-black flex items-center gap-1">
                        The Apex Solana Cat 🐱
                      </div>
                      <div className="text-[11px] text-black font-bold">
                        Launching to surpass and outshine the bulls with supreme feline power!
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Quote Dispatcher */}
                <div
                  onClick={nextQuote}
                  className="p-4 rounded-2xl bg-[#eafff3] border-3 border-black shadow-[4px_4px_0px_#000] cursor-pointer hover:bg-[#d9ffe9] transition-all group"
                  title="Click for next cat wisdom"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#00a850] mb-1 font-black">
                    <span>🐱 FELINE DISPATCH #{quoteIndex + 1}</span>
                    <span className="text-[10px] text-black font-bold group-hover:underline">Tap for next wisdom →</span>
                  </div>
                  <p className="font-mono text-sm sm:text-base text-black font-bold italic">
                    {CATSEYE_QUOTES[quoteIndex]}
                  </p>
                </div>

                {/* Contract Address Box */}
                <div className="p-4 rounded-2xl bg-[#f4f4f5] border-3 border-black shadow-[4px_4px_0px_#000] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-black text-black">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#00c961]" /> OFFICIAL SOLANA CONTRACT ADDRESS
                    </span>
                    <span className="text-[10px] text-black bg-[#00f076] px-2 py-0.5 rounded border border-black font-bold">
                      FAIR LAUNCH
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={CATSEYE_CA}
                      className="w-full font-mono text-xs sm:text-sm bg-white text-black p-3 rounded-xl border-2 border-black focus:outline-none select-all font-bold"
                    />
                    <button
                      onClick={handleCopyCA}
                      className={`cat-btn px-4 py-3 text-xs font-mono font-bold flex items-center gap-1.5 shrink-0 ${
                        copiedCA ? "bg-[#00f076] text-black" : "bg-black text-white hover:bg-[#1a1a1a]"
                      }`}
                    >
                      {copiedCA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span className="hidden sm:inline">{copiedCA ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                </div>

                {/* Direct Action Buttons: Telegram & Pump.fun */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cat-btn cat-btn-tg py-3.5 text-center text-sm font-display font-bold flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>Join Telegram Group</span>
                  </a>

                  <a
                    href={PUMPFUN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cat-btn cat-btn-green py-3.5 text-center text-sm font-display font-black flex items-center justify-center gap-2"
                  >
                    <span>💊 Buy on Pump.fun</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 3 Cat Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="cat-card p-6 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-black border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#00f076] text-white">
              🐱
            </div>
            <h3 className="font-display font-black text-xl text-black">Undefeated Cat Meta</h3>
            <p className="font-sans text-sm text-black font-semibold leading-relaxed">
              Every major Solana cycle crowns a feline king. CAT'S EYE takes the crown with precision and laser focus.
            </p>
          </div>

          <div className="cat-card p-6 space-y-2 bg-[#eafff3] border-[#00c961]">
            <div className="w-12 h-12 rounded-2xl bg-[#00f076] border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#000] text-black">
              👑
            </div>
            <h3 className="font-display font-black text-xl text-black">Flipping the $5M Bull</h3>
            <p className="font-sans text-sm text-black font-semibold leading-relaxed">
              Bull's Eye paved the way at $5M. CAT'S EYE is built by the community to transcend and outrun them.
            </p>
          </div>

          <div className="cat-card p-6 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-black border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#00f076] text-white">
              💎
            </div>
            <h3 className="font-display font-black text-xl text-black">100% Community Power</h3>
            <p className="font-sans text-sm text-black font-semibold leading-relaxed">
              0% dev bag, 0% tax, burned liquidity on pump.fun. Run by dedicated Solana chads and feline enthusiasts.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
