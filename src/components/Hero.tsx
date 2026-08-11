import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, TrendingUp, Volume2, VolumeX, Send, Dumbbell, Copy, Check, ExternalLink, Zap, ShieldCheck, Flame, Coins, Trophy } from "lucide-react";
import { GIGATOAD_NAME, GIGATOAD_TICKER, GIGATOAD_LOGO, GIGATOAD_CA, TELEGRAM_URL, DEXSCREENER_URL, PUMPFUN_URL, RAYDIUM_URL, SOLSCAN_URL } from "../constants";

export default function Hero() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [chadPower, setChadPower] = useState(999999);
  const [hasFlexed, setHasFlexed] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [copiedCA, setCopiedCA] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(GIGATOAD_CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2000);
  };

  const gigaWisdoms = [
    "“Why be a skinny tadpole when you can bench 1000kg on the Solana lily pad?”",
    "“Red candles are just resistance training for massive green god candles.”",
    "“Weak hands skip leg day. Giga Toad Pepe never skips a pump session.”",
    "“Pure discipline, 0% tax, 100% muscle hypertrophy in the Solana universe.”",
    "“We don’t chase pumps. Pumps chase the Giga Toad Pepe.”"
  ];

  // Powerful Audio Synthesizer for Giga Chad Alpha Bass Drops & Power Chords
  useEffect(() => {
    if (!soundEnabled) return;

    let audioCtx: AudioContext | null = null;
    let timer: NodeJS.Timeout | null = null;

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();

      const playGigaPumpBeat = () => {
        if (!audioCtx || audioCtx.state === "closed") return;
        const now = audioCtx.currentTime;

        // Sub-bass pump thump
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        const bassFreqs = [55.0, 65.41, 73.42, 82.41, 110.0];
        const randomBass = bassFreqs[Math.floor(Math.random() * bassFreqs.length)];

        osc.type = "triangle";
        osc.frequency.setValueAtTime(randomBass * 2, now);
        osc.frequency.exponentialRampToValueAtTime(randomBass, now + 0.3);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.06, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.65);
      };

      // Play punchy gym rhythm
      timer = setInterval(playGigaPumpBeat, 2200);
      playGigaPumpBeat();
    } catch {
      // Audio context fallback
    }

    return () => {
      if (timer) clearInterval(timer);
      if (audioCtx && audioCtx.state !== "closed") {
        audioCtx.close();
      }
    };
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const handleFlexAura = () => {
    setChadPower((prev) => prev + 1000);
    setHasFlexed(true);
    setTimeout(() => setHasFlexed(false), 600);
  };

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % gigaWisdoms.length);
  };

  return (
    <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 overflow-hidden text-white">
      {/* Ambient Electric Blue & Neon Green Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[8%] left-[10%] w-[550px] h-[550px] bg-[#0052FF]/20 rounded-full blur-[170px]"></div>
        <div className="absolute top-[25%] right-[5%] w-[600px] h-[600px] bg-[#00ff88]/15 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[5%] left-[25%] w-[450px] h-[450px] bg-[#38bdf8]/15 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Title Badge Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a2040] border border-[#00ff88]/60 shadow-[0_0_20px_rgba(0,255,136,0.3)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00ff88]">
              THE MOST MUSCULAR & ALPHA TOAD IN THE SOLANA UNIVERSE
            </span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Giga Toad <span className="text-[#00ff88] drop-shadow-[0_0_25px_rgba(0,255,136,0.6)]">Pepe</span>
          </h1>

          <p className="font-sans font-medium text-lg sm:text-2xl text-white max-w-2xl mx-auto leading-relaxed">
            “The most jacked, most alpha amphibian on Solana. Benching 1000kg on the lily pad and turning red candles into pure green gains.”
          </p>

          {/* Interactive Giga Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={toggleSound}
              className="px-4 py-2 rounded-full bg-[#091a32] hover:bg-[#0d264a] border border-[#00ff88]/60 text-xs font-mono font-bold text-white transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:border-[#00ff88]"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#00ff88] animate-bounce" />
                  <span>Gym Beats: PUMPING (Alpha Bass)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#38bdf8]" />
                  <span>Audio: Off (Click for Alpha Bass)</span>
                </>
              )}
            </button>

            <button
              onClick={handleFlexAura}
              className={`px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-md cursor-pointer ${
                hasFlexed
                  ? "bg-[#00ff88] text-[#050d1a] border-[#00ff88] scale-105 shadow-[0_0_25px_rgba(0,255,136,0.8)]"
                  : "bg-[#091a32] hover:bg-[#0d264a] text-white border-[#38bdf8]/60"
              }`}
            >
              <Dumbbell className={`w-4 h-4 ${hasFlexed ? "text-[#050d1a] rotate-45" : "text-[#00ff88]"}`} />
              <span>{chadPower.toLocaleString()} Chad Alpha Power (Tap to Flex +1000)</span>
            </button>

            {/* Telegram pill if provided */}
            {TELEGRAM_URL && (
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#0088cc]/30 hover:bg-[#0088cc]/50 border border-[#0088cc] text-xs font-mono font-bold text-[#70d6ff] hover:text-white transition-all flex items-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4 text-[#00a8ff]" />
                <span>Telegram</span>
              </a>
            )}
          </div>
        </div>

        {/* HERO SHOWCASE CARD WITH OFFICIAL GIGA TOAD PEPE ARTWORK */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="giga-card p-6 sm:p-10 rounded-2xl relative overflow-hidden">
            {/* Top decorative pins */}
            <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-[#00ff88] border border-white shadow-[0_0_12px_#00ff88]"></div>
            <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#38bdf8] border border-white shadow-[0_0_12px_#38bdf8]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: The Official Giga Toad Pepe Artwork */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div className="relative group">
                  {/* Glowing halo behind avatar */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#0052FF] via-[#00ff88] to-[#38bdf8] rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 animate-giga-flex"></div>
                  
                  {/* Main Portrait Frame */}
                  <div className="relative w-72 sm:w-84 md:w-96 aspect-square rounded-2xl overflow-hidden border-4 border-[#00ff88] shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#050d1a]">
                    <img
                      src={GIGATOAD_LOGO}
                      alt="Giga Toad Pepe Artwork"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge on avatar */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#050d1a]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#00ff88]/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping"></span>
                        <span className="text-xs font-mono font-black text-white">ALPHA LEVEL: MAXIMUM</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#00ff88]">{GIGATOAD_TICKER}</span>
                    </div>
                  </div>
                </div>

                {/* Caption underneath */}
                <div className="mt-4 text-center">
                  <span className="text-xs font-mono text-[#38bdf8] font-bold flex items-center gap-1.5 justify-center">
                    <Zap className="w-3.5 h-3.5 text-[#00ff88]" /> The Undisputed Chad of the Solana Universe
                  </span>
                </div>
              </div>

              {/* Right: The Giga Toad Lore & Direct Community Access */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0a2040] text-[#00ff88] text-xs font-mono font-bold border border-[#00ff88]/40">
                    <Trophy className="w-3.5 h-3.5 text-[#00ff88]" /> PURE CHAD MUSCLE • MAXIMUM GAINS
                  </div>
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                    No weakness. No missed sets. <span className="text-[#00ff88]">Only pure alpha.</span>
                  </h2>
                  <p className="font-sans text-base text-white/90 leading-relaxed">
                    While weak-handed frogs panic over market dips, <strong className="text-[#00ff88]">Giga Toad Pepe</strong> loads another 500kg on the bar and pumps straight through resistance. Built different, carved from Solana code, and fueled by unyielding chad energy.
                  </p>
                </div>

                {/* Giga Wisdom interactive quote box */}
                <div 
                  onClick={nextQuote}
                  className="p-4 rounded-xl bg-[#07152b] border border-[#00ff88]/50 cursor-pointer hover:border-[#00ff88] transition-all group relative"
                  title="Click to draw another Giga Chad quote"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#00ff88] mb-1.5 font-bold">
                    <span>⚡ GIGA TOAD ALPHA CODE</span>
                    <span className="text-[10px] text-[#38bdf8] group-hover:text-white transition-colors">Tap for next wisdom →</span>
                  </div>
                  <p className="font-serif italic text-base sm:text-lg text-white font-medium">
                    {gigaWisdoms[currentQuoteIndex]}
                  </p>
                </div>

                {/* Dedicated Solana Contract Address Copy Box */}
                <div className="p-4 rounded-xl bg-[#050d1a] border-2 border-[#00ff88] shadow-md space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#00ff88] uppercase tracking-wider flex items-center gap-1.5">
                      <Coins className="w-3.5 h-3.5 text-[#00ff88]" /> SOLANA CONTRACT ADDRESS (CA)
                    </span>
                    <span className="text-[10px] font-mono text-[#38bdf8] font-semibold">100% VERIFIED ALPHA</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-[#091a32] px-3 py-2 rounded-lg border border-[#1e3a8a] font-mono text-xs text-white truncate select-all">
                      {GIGATOAD_CA}
                    </div>

                    <button
                      onClick={handleCopyCA}
                      className={`px-4 py-2 rounded-lg font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer ${
                        copiedCA
                          ? "bg-[#00ff88] text-[#050d1a] border border-[#00ff88]"
                          : "bg-[#0b213f] hover:bg-[#0f2b52] text-white border border-[#00ff88]/60"
                      }`}
                    >
                      {copiedCA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedCA ? "Copied!" : "Copy CA"}</span>
                    </button>
                  </div>
                </div>

                {/* Key Pillars Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-1 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#050d1a] border border-[#1e3a8a]">
                    <div className="text-[#00ff88] font-black text-sm">0% TAX</div>
                    <div className="text-white/80 text-[11px]">No fees, pure chad trading</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050d1a] border border-[#1e3a8a]">
                    <div className="text-[#00ff88] font-black text-sm">100% BURNED LP</div>
                    <div className="text-white/80 text-[11px]">Permanent ironclad liquidity</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050d1a] border border-[#1e3a8a]">
                    <div className="text-[#00ff88] font-black text-sm">1000KG BENCH</div>
                    <div className="text-white/80 text-[11px]">Crushing all red candles</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#050d1a] border border-[#1e3a8a]">
                    <div className="text-[#00ff88] font-black text-sm">IMMUTABLE ALPHA</div>
                    <div className="text-white/80 text-[11px]">Apex predator on Solana</div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={PUMPFUN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[180px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00ff88] via-[#10b981] to-[#38bdf8] hover:from-[#00ff88] hover:to-[#10b981] text-[#050d1a] font-display font-black text-sm text-center shadow-[0_0_25px_rgba(0,255,136,0.5)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>💊 Buy on Pump.fun</span>
                  </a>

                  <a
                    href={DEXSCREENER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-[#0b213f] hover:bg-[#0f2b52] border border-[#00ff88]/60 text-white font-mono font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    <TrendingUp className="w-4 h-4 text-[#00ff88]" />
                    <span>DexScreener</span>
                  </a>

                  <a
                    href={SOLSCAN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-[#07152b] hover:bg-[#0a2040] border border-[#1e3a8a] text-[#38bdf8] font-mono font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-4 h-4 text-[#38bdf8]" />
                    <span>Solscan</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-5 rounded-xl bg-[#091a32] border border-[#1e3a8a] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#0b213f] border border-[#00ff88] flex items-center justify-center text-xl">
              🏋️‍♂️
            </div>
            <h3 className="font-display font-bold text-lg text-white">The Iron Lily Pad</h3>
            <p className="text-xs text-white/90 font-sans leading-relaxed">
              Forged in the fires of heavy barbell squats and ungodly protein shakes. The Giga Toad does not rest until Solana is conquered.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091a32] border border-[#1e3a8a] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#0b213f] border border-[#00ff88] flex items-center justify-center text-xl">
              💪
            </div>
            <h3 className="font-display font-bold text-lg text-white">100% Muscular Community</h3>
            <p className="text-xs text-white/90 font-sans leading-relaxed">
              No crying in the chat, no FUD. Just gigachad toads sharing PRs, pumping green charts, and lifting each other to financial Olympus.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091a32] border border-[#1e3a8a] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#0b213f] border border-[#00ff88] flex items-center justify-center text-xl">
              👑
            </div>
            <h3 className="font-display font-bold text-lg text-white">The Solana Apex King</h3>
            <p className="text-xs text-white/90 font-sans leading-relaxed">
              With 8-pack amphibian abs and a jawline forged by Solana validators, Giga Toad Pepe is the undisputed king of all memecoins.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
