import React, { useState } from "react";
import {
  Eye,
  Crosshair,
  Calculator,
  Share2,
  Check,
  Copy,
  Sparkles,
  Flame,
  Volume2,
  VolumeX,
  Crown,
  ArrowRight,
  TrendingUp,
  Send,
} from "lucide-react";
import {
  CATSEYE_NAME,
  CATSEYE_TICKER,
  CATSEYE_LOGO,
  CATSEYE_CA,
  TELEGRAM_URL,
  X_COMMUNITY_URL,
  PUMPFUN_URL,
} from "../constants";

export default function InteractiveApp() {
  const [activeTab, setActiveTab] = useState<"laser" | "simulator" | "memes">("laser");
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Laser Game State
  const [score, setScore] = useState(2400);
  const [pounces, setPounces] = useState(24);
  const [bullsFlipped, setBullsFlipped] = useState(18);
  const [hitEffects, setHitEffects] = useState<Array<{ id: number; text: string; x: number; y: number }>>([]);

  // Flip Simulator State
  const [solAmount, setSolAmount] = useState<number>(1);
  const [targetMcap, setTargetMcap] = useState<number>(15000000); // $15M target (flipping $5M bull 3x)

  // Meme & Broadcast Generator State
  const [copiedText, setCopiedText] = useState(false);
  const [postText, setPostText] = useState(
    "Bull's Eye reached $5M market cap... but everyone knows CATS rule Solana! $catseye is here to outshine the bulls. Join the pack! 🐱🚀 https://t.me/catseyetggroup"
  );

  const templates = [
    "Bull's Eye reached $5M market cap... but everyone knows CATS rule Solana! $catseye is here to outshine the bulls. Join the pack! 🐱🚀 https://t.me/catseyetggroup",
    "Bulls charge, cats conquer. $catseye on Solana is flipping the entire timeline! 0% tax, 100% community. 🐾🔥 https://t.me/catseyetggroup",
    "The legendary Solana cat meta is back with CAT'S EYE ($catseye). $5M Bull's Eye was just a warm-up! 🐱👑 https://t.me/catseyetggroup",
    "Zero dev allocation, laser feline focus, and pure pump energy. Loading my $catseye bag on pump.fun! 💎✨ https://t.me/catseyetggroup",
    "Nine lives, infinite green candles. Join the official CAT'S EYE Telegram: https://t.me/catseyetggroup 🐾🚀",
  ];

  const playChirpSound = (frequency = 600) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) {}
  };

  const handleLaserClick = (type: "center" | "ring" | "paw", e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let points = 50;
    let hitText = "🐾 PAW POUNCE +50";
    let freq = 500;

    if (type === "center") {
      points = 150;
      hitText = "✨ CAT'S EYE BEAM! +150";
      freq = 900;
      setBullsFlipped((prev) => prev + 1);
    } else if (type === "ring") {
      points = 75;
      hitText = "⚡ LASER HIT +75";
      freq = 700;
    }

    playChirpSound(freq);
    setScore((prev) => prev + points);
    setPounces((prev) => prev + 1);

    const id = Date.now() + Math.random();
    setHitEffects((prev) => [...prev, { id, text: hitText, x, y }]);
    setTimeout(() => {
      setHitEffects((prev) => prev.filter((item) => item.id !== id));
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(postText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  // Calculations
  const solPrice = 180;
  const initialMcap = 50000;
  const multiplier = Math.max(1, targetMcap / initialMcap);
  const potentialValue = (solAmount * solPrice * multiplier).toFixed(2);
  const profitX = multiplier.toFixed(1);

  return (
    <section id="interactive-lab" className="relative py-16 sm:py-24 bg-white text-black overflow-hidden border-b-4 border-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white border-2 border-black shadow-[3px_3px_0px_#00f076]">
            <Eye className="w-4 h-4 text-[#00f076]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              CAT'S EYE INTERACTIVE LAB
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#00f076]">
            Laser Practice & <span className="text-[#00c961]">Flip Tools</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-xl mx-auto">
            Train your feline reflexes, calculate your returns when $catseye flips the $5M bull, and generate viral Telegram broadcasts.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#f4f4f5] border-3 border-black shadow-[4px_4px_0px_#000]">
            <button
              onClick={() => setActiveTab("laser")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === "laser"
                  ? "bg-[#00f076] text-black shadow-[2px_2px_0px_#000]"
                  : "text-black hover:text-[#00c961]"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Laser Pounce Game</span>
            </button>

            <button
              onClick={() => setActiveTab("simulator")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === "simulator"
                  ? "bg-[#00f076] text-black shadow-[2px_2px_0px_#000]"
                  : "text-black hover:text-[#00c961]"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Bull Flip Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab("memes")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === "memes"
                  ? "bg-[#00f076] text-black shadow-[2px_2px_0px_#000]"
                  : "text-black hover:text-[#00c961]"
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>Telegram Broadcasts</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Laser Pounce Game */}
        {activeTab === "laser" && (
          <div className="max-w-4xl mx-auto cat-card p-6 sm:p-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left: Interactive Laser Target */}
              <div className="md:col-span-6 flex flex-col items-center">
                
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-black bg-black shadow-[8px_8px_0px_#000] flex items-center justify-center select-none overflow-hidden cursor-crosshair">
                  
                  {/* Outer Ring (50 pts) */}
                  <div
                    onClick={(e) => handleLaserClick("paw", e)}
                    className="absolute inset-0 bg-[#0d0e15] hover:bg-[#141522] flex items-center justify-center transition-colors"
                  >
                    {/* Middle Ring (75 pts) */}
                    <div
                      onClick={(e) => handleLaserClick("ring", e)}
                      className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-black border-4 border-[#00f076]/40 flex items-center justify-center transition-colors shadow-inner"
                    >
                      {/* Inner Ring */}
                      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#0a1f14] border-4 border-[#00f076] flex items-center justify-center">
                        
                        {/* Center Glowing Cat Eye (150 pts) */}
                        <div
                          onClick={(e) => handleLaserClick("center", e)}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00f076] hover:bg-[#34d399] border-3 border-black flex items-center justify-center cursor-pointer shadow-[0_0_25px_rgba(0,240,118,0.8)] active:scale-90 transition-transform"
                          title="CLICK GLOWING CAT EYE (+150)"
                        >
                          <Eye className="w-8 h-8 text-black animate-pulse pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Click FX */}
                  {hitEffects.map((effect) => (
                    <div
                      key={effect.id}
                      style={{ left: effect.x, top: effect.y }}
                      className="absolute pointer-events-none text-xs sm:text-sm font-display font-black text-[#00f076] z-30 animate-[float-paw_1s_ease-out_forwards] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                    >
                      {effect.text}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="cat-btn px-3 py-1.5 bg-[#f4f4f5] text-xs font-mono font-bold flex items-center gap-1.5"
                  >
                    {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#00c961]" /> : <VolumeX className="w-3.5 h-3.5" />}
                    <span>Sound: {soundEnabled ? "On" : "Off"}</span>
                  </button>
                  <span className="text-xs font-mono font-bold text-gray-500">
                    Click center eye (+150) or outer rings
                  </span>
                </div>
              </div>

              {/* Right: Scoreboard & Stats */}
              <div className="md:col-span-6 space-y-4">
                <div className="p-4 rounded-xl bg-[#eafff3] border-2 border-[#00c961] space-y-1">
                  <span className="text-xs font-mono font-black text-[#00a850] uppercase tracking-wider">
                    FELINE LASER SCOREBOARD
                  </span>
                  <div className="font-comic text-4xl sm:text-5xl text-black">
                    {score.toLocaleString()} <span className="text-base font-sans font-black text-[#00a850]">PURR PTS</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#f4f4f5] border-2 border-black">
                    <div className="text-xs font-mono font-bold text-gray-600">Total Pounces</div>
                    <div className="font-display font-black text-2xl text-black">{pounces}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f4f4f5] border-2 border-black">
                    <div className="text-xs font-mono font-bold text-[#00a850]">Eye Strikes</div>
                    <div className="font-display font-black text-2xl text-[#00a850]">{bullsFlipped} 🐱</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black text-white space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold">
                    <span>FELINE ACCURACY</span>
                    <span className="text-[#00f076] font-black">
                      {pounces > 0 ? Math.round((bullsFlipped / pounces) * 100) : 100}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden border border-white/20">
                    <div
                      className="bg-[#00f076] h-full transition-all duration-300"
                      style={{
                        width: `${Math.min(100, Math.max(15, pounces > 0 ? (bullsFlipped / pounces) * 100 : 100))}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-xs font-mono text-gray-300">
                    STATUS: Prepared to outshine $5M Bull's Eye on pump.fun.
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: Bull Flip Simulator */}
        {activeTab === "simulator" && (
          <div className="max-w-3xl mx-auto cat-card p-6 sm:p-8 bg-white space-y-6">
            <div className="flex items-center justify-between border-b-2 border-black pb-4">
              <div>
                <h3 className="font-display font-black text-2xl text-black">Bull Flip Profit Simulator</h3>
                <p className="text-xs text-gray-600 font-medium">Compare returns when $catseye surpasses the $5M Bull's Eye market cap.</p>
              </div>
              <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-[#eafff3] text-[#00a850] border border-[#00a850]">
                0% TAX METRICS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-black uppercase text-black mb-1.5">
                  Your SOL Investment:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0.1"
                    step="0.5"
                    value={solAmount}
                    onChange={(e) => setSolAmount(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                    className="w-full font-mono text-lg bg-[#f4f4f5] text-black p-3 rounded-xl border-2 border-black font-bold focus:outline-none focus:border-[#00f076]"
                  />
                  <span className="font-mono font-black text-sm px-3 py-3 rounded-xl bg-black text-white">SOL</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-black uppercase text-black mb-1.5">
                  Target Flipped Mcap:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[5000000, 15000000, 50000000, 100000000].map((mcap) => (
                    <button
                      key={mcap}
                      onClick={() => setTargetMcap(mcap)}
                      className={`px-3 py-2 rounded-xl text-xs font-mono font-black border-2 border-black transition-all ${
                        targetMcap === mcap
                          ? "bg-[#00f076] text-black shadow-[2px_2px_0px_#000]"
                          : "bg-white text-black hover:bg-gray-100"
                      }`}
                    >
                      ${(mcap / 1000000).toFixed(0)}M {mcap === 5000000 ? "(Bull Equal)" : mcap === 15000000 ? "(3x Flip)" : ""}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="p-6 rounded-2xl bg-[#eafff3] border-3 border-[#00c961] shadow-[4px_4px_0px_#000] text-center space-y-2">
              <span className="text-xs font-mono font-black text-[#00a850] uppercase tracking-wider">
                ESTIMATED VALUE AT ${(targetMcap / 1000000).toFixed(0)}M MARKET CAP
              </span>
              <div className="font-comic text-4xl sm:text-5xl text-black">
                ${parseFloat(potentialValue).toLocaleString()}{" "}
                <span className="text-xl font-sans font-black text-[#00a850]">({profitX}x GAIN)</span>
              </div>
              <p className="text-xs font-mono text-gray-700 font-bold">
                From {solAmount} SOL (~${(solAmount * solPrice).toFixed(0)} USD) to ${parseFloat(potentialValue).toLocaleString()} USD.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: Telegram Broadcasts */}
        {activeTab === "memes" && (
          <div className="max-w-3xl mx-auto cat-card p-6 sm:p-8 bg-white space-y-6">
            <div>
              <h3 className="font-display font-black text-2xl text-black">Viral Telegram & X Post Generator</h3>
              <p className="text-xs text-gray-600 font-medium">Broadcast the $catseye movement to your Telegram groups and social feeds.</p>
            </div>

            <div className="space-y-3">
              <textarea
                rows={3}
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-black bg-[#f4f4f5] font-mono text-sm text-black font-bold focus:outline-none focus:border-[#00f076]"
              />

              <div className="flex flex-wrap gap-2">
                {templates.map((template, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPostText(template)}
                    className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-white border border-black hover:bg-gray-100 text-black"
                  >
                    Broadcast #{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={copyToClipboard}
                className="cat-btn cat-btn-green px-5 py-3 text-black text-xs font-display font-black flex items-center gap-2"
              >
                {copiedText ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedText ? "Copied to Clipboard!" : "Copy Broadcast Message"}</span>
              </button>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cat-btn cat-btn-tg px-5 py-3 text-white text-xs font-display font-bold flex items-center gap-2"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>Open Telegram Group</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
