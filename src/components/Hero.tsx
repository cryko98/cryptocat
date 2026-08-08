import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, TrendingUp, Volume2, VolumeX, Send, Heart, ExternalLink, Leaf, Coffee, Smile } from "lucide-react";
import { CHILLTOAD_NAME, CHILLTOAD_TICKER, CHILLTOAD_LOGO, TELEGRAM_URL, DEXSCREENER_URL, PUMPFUN_URL, RAYDIUM_URL } from "../constants";

export default function Hero() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [likedCount, setLikedCount] = useState(42069);
  const [hasLiked, setHasLiked] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const chillWisdoms = [
    "“Why stress when the lily pad is wide and the water is calm?”",
    "“Markets go up, markets go down, but a chill toad never loses its vibe.”",
    "“Breathe in pond mist, exhale red candles. Zero drama, pure composure.”",
    "“Sitting still is an art form. The best trade is often just vibing.”",
    "“No hurry, no worry. Nature never rushes, yet everything gets done.”"
  ];

  // Gentle Audio Synthesizer for Serene Pond Ambience & Calm Chime
  useEffect(() => {
    if (!soundEnabled) return;

    let audioCtx: AudioContext | null = null;
    let timer: NodeJS.Timeout | null = null;

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();

      const playPondRipple = () => {
        if (!audioCtx || audioCtx.state === "closed") return;
        const now = audioCtx.currentTime;

        // Water droplet sine oscillator
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        // Pleasant pentatonic water droplet frequency
        const freqs = [329.63, 392.00, 440.00, 523.25, 659.25];
        const randomFreq = freqs[Math.floor(Math.random() * freqs.length)];

        osc.type = "sine";
        osc.frequency.setValueAtTime(randomFreq, now);
        osc.frequency.exponentialRampToValueAtTime(randomFreq * 1.5, now + 0.15);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.04, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.6);
      };

      // Play soft ambient droplet every 2.5 seconds
      timer = setInterval(playPondRipple, 2500);
      playPondRipple();
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

  const handleLike = () => {
    if (!hasLiked) {
      setLikedCount((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikedCount((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % chillWisdoms.length);
  };

  return (
    <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 overflow-hidden text-white">
      {/* Ambient Pond Mist & Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-[#2d6a4f]/25 rounded-full blur-[150px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[550px] h-[550px] bg-[#52b788]/20 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[5%] left-[30%] w-[400px] h-[400px] bg-[#74c69d]/15 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Title Badge Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163824] border border-[#52b788]/50 shadow-[0_0_15px_rgba(82,183,136,0.25)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#74c69d] animate-ping"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d8f3dc]">
              SOLANA’S COZIEST TOAD • EST. POND WATERS
            </span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
            Chill Toad <span className="text-[#74c69d] animate-pulse">Pepe</span>
          </h1>

          <p className="font-sans font-medium text-lg sm:text-2xl text-[#b7e4c7] max-w-2xl mx-auto leading-relaxed">
            “Chill Toad Pepe Sat on a Lily Pad — Unbothered, Relaxed, and Vibing on Solana”
          </p>

          {/* Interactive Chill Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={toggleSound}
              className="px-4 py-2 rounded-full bg-[#112d20] hover:bg-[#163824] border border-[#52b788]/60 text-xs font-mono font-bold text-[#d8f3dc] transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:border-[#74c69d]"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#74c69d] animate-bounce" />
                  <span>Pond Sound: Playing (Zen Drops)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#74c69d]" />
                  <span>Sound: Off (Click for Calm Drops)</span>
                </>
              )}
            </button>

            <button
              onClick={handleLike}
              className={`px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-sm cursor-pointer ${
                hasLiked
                  ? "bg-[#52b788] text-[#081c15] border-[#74c69d] shadow-[0_0_15px_rgba(116,198,157,0.4)]"
                  : "bg-[#112d20] hover:bg-[#163824] text-[#d8f3dc] border-[#52b788]/60"
              }`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? "fill-[#081c15] text-[#081c15]" : "text-[#74c69d]"}`} />
              <span>{likedCount.toLocaleString()} Webbed Toes of Respect</span>
            </button>

            {/* Prominent Telegram pill */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#0088cc]/30 hover:bg-[#0088cc]/50 border border-[#0088cc] text-xs font-mono font-bold text-[#70d6ff] hover:text-white transition-all flex items-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4 text-[#00a8ff]" />
              <span>Telegram: t.me/chilltoad</span>
            </a>
          </div>
        </div>

        {/* HERO SHOWCASE CARD WITH OFFICIAL ARTWORK */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="pond-card p-6 sm:p-10 rounded-2xl border-2 border-[#52b788] relative overflow-hidden">
            {/* Top decorative lily pads pins */}
            <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-[#52b788] border border-[#d8f3dc] shadow-[0_0_10px_#52b788]"></div>
            <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#52b788] border border-[#d8f3dc] shadow-[0_0_10px_#52b788]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: The Official Chill Toad Artwork */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div className="relative group">
                  {/* Glowing halo behind avatar */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#2d6a4f] via-[#52b788] to-[#74c69d] rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 animate-chill-glow"></div>
                  
                  {/* Main Portrait Frame */}
                  <div className="relative w-72 sm:w-84 md:w-96 aspect-square rounded-2xl overflow-hidden border-4 border-[#74c69d] shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#081c15]">
                    <img
                      src={CHILLTOAD_LOGO}
                      alt="Chill Toad Pepe Artwork"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge on avatar */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#081c15]/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#52b788]/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#52b788] animate-ping"></span>
                        <span className="text-xs font-mono font-black text-white">CHILL LEVEL: 100%</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#74c69d]">{CHILLTOAD_TICKER}</span>
                    </div>
                  </div>
                </div>

                {/* Caption underneath */}
                <div className="mt-4 text-center">
                  <span className="text-xs font-mono text-[#b7e4c7] font-semibold flex items-center gap-1.5 justify-center">
                    <Leaf className="w-3.5 h-3.5 text-[#52b788]" /> Verified Chill Toad on the Solana Lily Pad
                  </span>
                </div>
              </div>

              {/* Right: The Chill Toad Lore & Direct Community Access */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#163824] text-[#74c69d] text-xs font-mono font-bold border border-[#2d6a4f]">
                    <Smile className="w-3.5 h-3.5" /> ZERO DRAMA • MAXIMUM VIBES
                  </div>
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                    Never hurried, never panicked. <span className="text-[#74c69d]">Just chilling.</span>
                  </h2>
                  <p className="font-sans text-base text-[#d8f3dc]/90 leading-relaxed">
                    While the rest of the world scrambles, panics over candles, and checks charts every 5 seconds, <strong className="text-white">Just a chill Toad</strong> reclines peacefully on a giant water lily, taking a calm breath of fresh marsh air.
                  </p>
                </div>

                {/* Chill Wisdom interactive quote box */}
                <div 
                  onClick={nextQuote}
                  className="p-4 rounded-xl bg-[#0b2419] border border-[#52b788]/50 cursor-pointer hover:border-[#74c69d] transition-all group relative"
                  title="Click to draw another Chill Toad Wisdom"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#74c69d] mb-1.5 font-bold">
                    <span>🐸 DAILY LILY PAD WISDOM</span>
                    <span className="text-[10px] text-[#b7e4c7]/70 group-hover:text-white transition-colors">Tap for next quote →</span>
                  </div>
                  <p className="font-serif italic text-base sm:text-lg text-white font-medium">
                    {chillWisdoms[currentQuoteIndex]}
                  </p>
                </div>

                {/* Key Pillars Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-1 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#081c15] border border-[#2d6a4f]">
                    <div className="text-[#74c69d] font-black text-sm">0% TAX</div>
                    <div className="text-[#b7e4c7] text-[11px]">Clean trades, no hidden fees</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#081c15] border border-[#2d6a4f]">
                    <div className="text-[#74c69d] font-black text-sm">100% BURNED LP</div>
                    <div className="text-[#b7e4c7] text-[11px]">Permanent lily pad security</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#081c15] border border-[#2d6a4f]">
                    <div className="text-[#74c69d] font-black text-sm">FAIR LAUNCH</div>
                    <div className="text-[#b7e4c7] text-[11px]">No pre-mines, pure toad community</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#081c15] border border-[#2d6a4f]">
                    <div className="text-[#74c69d] font-black text-sm">IMMUTABLE CHILL</div>
                    <div className="text-[#b7e4c7] text-[11px]">The serene king of Solana</div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0088cc] to-[#00b4d8] hover:from-[#0077b6] hover:to-[#0096c7] text-white font-display font-black text-sm text-center shadow-[0_0_25px_rgba(0,180,216,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Join Official Telegram</span>
                  </a>

                  <a
                    href={DEXSCREENER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] border border-[#52b788] text-white font-mono font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    <TrendingUp className="w-4 h-4 text-[#74c69d]" />
                    <span>DexScreener</span>
                  </a>

                  <a
                    href={PUMPFUN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-[#143621] hover:bg-[#1e4a30] border border-[#2d6a4f] text-[#86efac] font-mono font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>💊 Pump.fun</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-5 rounded-xl bg-[#0b2419]/90 border border-[#2d6a4f] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#1b4332] border border-[#52b788] flex items-center justify-center text-xl">
              🪷
            </div>
            <h3 className="font-display font-bold text-lg text-white">The Lily Pad Philosophy</h3>
            <p className="text-xs text-[#b7e4c7] font-sans leading-relaxed">
              Why chase green candles when you are already green? The chill toad stays grounded in peace and pond wisdom.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0b2419]/90 border border-[#2d6a4f] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#1b4332] border border-[#52b788] flex items-center justify-center text-xl">
              🍃
            </div>
            <h3 className="font-display font-bold text-lg text-white">100% Organic Community</h3>
            <p className="text-xs text-[#b7e4c7] font-sans leading-relaxed">
              No stress, no toxic hype. Just good people sharing toad memes, vibing, and floating together across the Solana waters.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0b2419]/90 border border-[#2d6a4f] space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#1b4332] border border-[#52b788] flex items-center justify-center text-xl">
              🐸
            </div>
            <h3 className="font-display font-bold text-lg text-white">Zero Fumbles</h3>
            <p className="text-xs text-[#b7e4c7] font-sans leading-relaxed">
              When everyone else panics, the chill toad just reclines, breathes, and sips pond water. Composure is supreme.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
