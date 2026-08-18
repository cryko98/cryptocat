import React, { useState } from "react";
import {
  Copy,
  Check,
  Zap,
  TrendingUp,
  Volume2,
  VolumeX,
  ExternalLink,
  Flame,
  Brain,
  Sparkles,
  AlertTriangle,
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
  SLINGTARD_QUOTES,
} from "../constants";

export default function Hero() {
  const [copiedCA, setCopiedCA] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [retardPower, setRetardPower] = useState(69420);
  const [hasVamped, setHasVamped] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(SLINGTARD_CA);
    setCopiedCA(true);
    playGoofyBoop();
    setTimeout(() => setCopiedCA(false), 2500);
  };

  const playGoofyBoop = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // Audio not supported or blocked
    }
  };

  const handleSelfVamp = () => {
    setRetardPower((prev) => prev + 1000);
    setHasVamped(true);
    playGoofyBoop();
    setTimeout(() => setHasVamped(false), 500);
  };

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % SLINGTARD_QUOTES.length);
    playGoofyBoop();
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden bg-[#ffd600] text-black comic-dots">
      {/* Comic splash radial waves in corners */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f0ff]/30 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff007a]/25 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Badge Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-[#ffe600] border-2 border-black shadow-[4px_4px_0px_#ff007a]">
            <span className="w-3 h-3 rounded-full bg-[#00f0ff] animate-ping"></span>
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              THE KOL WHO FUCKED UP HIS PREVIOUS COIN
            </span>
          </div>

          {/* Main Title */}
          <div className="relative inline-block">
            <h1 className="font-comic text-6xl sm:text-8xl md:text-9xl text-black tracking-tight uppercase drop-shadow-[5px_5px_0px_#ffffff] leading-none select-none">
              {SLINGTARD_NAME}
            </h1>
            <div className="absolute -top-3 -right-6 sm:-right-10 bg-[#ff007a] text-white font-mono font-black text-xs sm:text-sm px-3 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] rotate-12 animate-bounce">
              {SLINGTARD_TICKER}
            </div>
          </div>

          <p className="font-sans font-extrabold text-xl sm:text-2xl text-black max-w-2xl mx-auto leading-tight">
            Slingtard is a KOL who fucked up his previous coin because he is simply a retard. So the community named him <span className="text-[#ff007a] underline">Slingtard</span> and launched this brand new coin!
          </p>

          {/* Quick interactive utility badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (!soundEnabled) playGoofyBoop();
              }}
              className="comic-btn px-4 py-2 bg-white text-xs font-mono font-bold text-black flex items-center gap-2"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#ff007a]" />
                  <span>Audio: On (Goofy FX)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-gray-500" />
                  <span>Audio: Off (Click to Hear Drool)</span>
                </>
              )}
            </button>

            <button
              onClick={handleSelfVamp}
              className={`comic-btn px-4 py-2 text-xs font-mono font-black flex items-center gap-2 transition-transform ${
                hasVamped
                  ? "bg-[#ff007a] text-white scale-105 rotate-2"
                  : "bg-[#00f0ff] text-black hover:bg-[#38f4ff]"
              }`}
            >
              <Brain className="w-4 h-4 text-black" />
              <span>{retardPower.toLocaleString()} 0-IQ Power (Tap to Self-Vamp +1000)</span>
            </button>

            <a
              href={X_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn px-4 py-2 bg-black text-white text-xs font-display font-bold flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X Community</span>
            </a>
          </div>
        </div>

        {/* HERO SHOWCASE CARD */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="comic-card p-6 sm:p-10 relative overflow-hidden bg-white">
            
            {/* Top decorative comic badges */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#00f0ff] border-2 border-black font-mono font-black text-[10px] uppercase shadow-[2px_2px_0px_#000]">
              🤤 100% COMMUNITY OWNED
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#ff007a] text-white border-2 border-black font-mono font-black text-[10px] uppercase shadow-[2px_2px_0px_#000]">
              🚨 0 IQ KOL
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6 sm:mt-4">
              
              {/* Left: Official Slingtard Avatar Portrait */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div className="relative group">
                  {/* Glowing rainbow halo */}
                  <div className="absolute -inset-4 rainbow-gradient rounded-[36px] blur-xl opacity-80 group-hover:opacity-100 transition duration-500 animate-drool"></div>

                  {/* Main Portrait Frame with thick comic border */}
                  <div className="relative w-72 sm:w-88 aspect-square rounded-3xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_#000] bg-[#ffe600]">
                    <img
                      src={SLINGTARD_LOGO}
                      alt="slingtard"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-3 left-3 right-3 bg-black/90 text-white backdrop-blur-md px-3.5 py-2.5 rounded-2xl border-2 border-white flex items-center justify-between shadow-lg">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping"></span>
                        <span className="text-xs font-mono font-black uppercase text-[#ffe600]">
                          BRAINCELLS: 0 / 100
                        </span>
                      </div>
                      <span className="text-xs font-mono font-black text-[#ff007a] bg-white px-2 py-0.5 rounded-full">
                        {SLINGTARD_TICKER}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="text-xs font-mono font-black text-black bg-[#c7f9ff] px-3.5 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff007a]" /> The KOL Who Fucked Up His Previous Coin
                  </span>
                </div>
              </div>

              {/* Right: The Lore & Direct Action */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-black text-[#00f0ff] text-xs font-mono font-black border border-black">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#ff007a]" /> BRAND NEW 100% COMMUNITY COIN
                  </div>
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-black tracking-tight leading-tight">
                    He Fucked Up His Old Coin. <br />
                    <span className="text-[#ff007a] underline decoration-wavy decoration-[#00f0ff]">
                      So We Launched $slingtartd!
                    </span>
                  </h2>
                  <p className="font-sans text-base text-black font-semibold leading-relaxed">
                    Slingtard is a KOL who fucked up his previous coin because he is simply a retard. The community nicknamed him Slingtard and created this new token where the community has 100% control!
                  </p>
                </div>

                {/* Quote Box */}
                <div
                  onClick={nextQuote}
                  className="p-4 rounded-2xl bg-[#fff9c4] border-3 border-black shadow-[4px_4px_0px_#000] cursor-pointer hover:bg-[#fff275] transition-all group relative"
                  title="Click for next dumb KOL quote"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#ff007a] mb-1 font-black">
                    <span>🧠 DUMB KOL CONFESSION #{quoteIndex + 1}</span>
                    <span className="text-[10px] text-black font-bold group-hover:underline">Tap for next wisdom →</span>
                  </div>
                  <p className="font-mono text-sm sm:text-base text-black font-bold italic">
                    {SLINGTARD_QUOTES[quoteIndex]}
                  </p>
                </div>

                {/* Contract Address Box */}
                <div className="p-4 rounded-2xl bg-[#c7f9ff] border-3 border-black shadow-[4px_4px_0px_#000] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-black text-black uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#ff007a]" /> SOLANA CONTRACT ADDRESS (CA)
                    </span>
                    <span className="text-[10px] font-mono font-black text-white bg-black px-2 py-0.5 rounded-full">
                      100% PUMP.FUN
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white px-3 py-2 rounded-xl border-2 border-black font-mono text-xs text-black font-bold truncate select-all">
                      {SLINGTARD_CA}
                    </div>

                    <button
                      onClick={handleCopyCA}
                      className={`comic-btn px-4 py-2 font-mono font-black text-xs flex items-center gap-1.5 ${
                        copiedCA
                          ? "bg-[#00f0ff] text-black"
                          : "bg-[#ff007a] hover:bg-[#ff2a85] text-white"
                      }`}
                    >
                      {copiedCA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedCA ? "Copied!" : "Copy CA"}</span>
                    </button>
                  </div>
                </div>

                {/* Key Pillars */}
                <div className="grid grid-cols-2 gap-3 pt-1 font-mono text-xs">
                  <div className="p-3 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
                    <div className="text-[#ff007a] font-black text-sm">0% DEV BAG</div>
                    <div className="text-black font-bold text-[11px]">He vamped it all away lol</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
                    <div className="text-[#00c853] font-black text-sm">0% BUY/SELL TAX</div>
                    <div className="text-black font-bold text-[11px]">Pure trading, no friction</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
                    <div className="text-[#0091ea] font-black text-sm">100% LP BURNED</div>
                    <div className="text-black font-bold text-[11px]">Permanently locked on pump</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
                    <div className="text-[#ff6d00] font-black text-sm">COMMUNITY LED</div>
                    <div className="text-black font-bold text-[11px]">Chads taking it to $100M</div>
                  </div>
                </div>

                {/* Primary Buy CTA buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={PUMPFUN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-btn flex-1 min-w-[180px] px-6 py-4 bg-[#ff007a] hover:bg-[#ff1a80] text-white font-display font-black text-sm text-center flex items-center justify-center gap-2 shadow-[5px_5px_0px_#000]"
                  >
                    <span>💊 Buy on Pump.fun</span>
                  </a>

                  <a
                    href={DEXSCREENER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-btn px-5 py-4 bg-[#00f0ff] hover:bg-[#38f4ff] text-black font-mono font-black text-xs flex items-center gap-1.5 shadow-[5px_5px_0px_#000]"
                  >
                    <TrendingUp className="w-4 h-4 text-black" />
                    <span>DexScreener</span>
                  </a>

                  <a
                    href={SOLSCAN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-btn px-4 py-4 bg-white hover:bg-yellow-50 text-black font-mono font-bold text-xs flex items-center gap-1.5 shadow-[5px_5px_0px_#000]"
                  >
                    <ExternalLink className="w-4 h-4 text-black" />
                    <span>Solscan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Comic Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="comic-card-yellow p-6 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#000]">
              🤤
            </div>
            <h3 className="font-display font-black text-xl text-black">The 0 IQ KOL</h3>
            <p className="font-sans text-sm text-black font-semibold leading-relaxed">
              Slingtard is a KOL who fucked up his previous coin because he is simply a retard. 0 IQ legend.
            </p>
          </div>

          <div className="comic-card-cyan p-6 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#000]">
              🚨➡️👑
            </div>
            <h3 className="font-display font-black text-xl text-black">Why $slingtartd?</h3>
            <p className="font-sans text-sm text-black font-semibold leading-relaxed">
              Because he fucked up his previous coin, the community named him Slingtard and created this new token on pump.fun!
            </p>
          </div>

          <div className="comic-card-pink p-6 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-2xl shadow-[3px_3px_0px_#000]">
              💎
            </div>
            <h3 className="font-display font-black text-xl text-black">100% Community Power</h3>
            <p className="font-sans text-sm text-black font-semibold leading-relaxed">
              Zero developer danger because the community created and owns this entire token. Pure degen culture on Solana.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
