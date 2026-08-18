import React, { useState } from "react";
import {
  Target,
  Crosshair,
  Calculator,
  Share2,
  Check,
  Copy,
  Sparkles,
  Flame,
  Volume2,
  VolumeX,
  Trophy,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import {
  BULLSEYE_NAME,
  BULLSEYE_TICKER,
  BULLSEYE_LOGO,
  BULLSEYE_CA,
  X_COMMUNITY_URL,
  PUMPFUN_URL,
} from "../constants";

export default function InteractiveApp() {
  const [activeTab, setActiveTab] = useState<"target" | "calculator" | "tweets">("target");
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Target Game State
  const [score, setScore] = useState(1250);
  const [shotsFired, setShotsFired] = useState(15);
  const [bullseyeHits, setBullseyeHits] = useState(11);
  const [hitEffects, setHitEffects] = useState<Array<{ id: number; text: string; x: number; y: number }>>([]);
  const [accuracyRating, setAccuracyRating] = useState("DEADLY PRECISION");

  // Calculator State
  const [solAmount, setSolAmount] = useState<number>(1);
  const [targetMcap, setTargetMcap] = useState<number>(10000000); // $10M

  // Tweet Generator State
  const [copiedTweet, setCopiedTweet] = useState(false);
  const [tweetText, setTweetText] = useState(
    "Someone literally spelled it 'BULLS'S EYE' on Solana... so we launched the real $bullseye to take over the lead! 🎯🚀"
  );

  const tweetTemplates = [
    "Someone literally spelled it 'BULLS'S EYE' on Solana... so we launched the real $bullseye to take over the lead! 🎯🚀",
    "Fix the spelling, hit the target, flip the typo coin. $bullseye is 100% community owned on pump.fun! 🎯💎",
    "0% tax, zero dev baggage, and direct center hits. Loading up my $bullseye bag on Solana! 🎯🔥",
    "From a tragic grammatical disaster to the cleanest meme coin on Solana. $bullseye to Valhalla! 🎯👑",
    "BULLS'S EYE ❌ vs BULLSEYE ✅. The community took over and we're sending $bullseye! 🚀🎯",
  ];

  const playHitSound = (frequency = 880) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.16);
    } catch (e) {}
  };

  const handleTargetClick = (type: "bullseye" | "inner" | "outer", e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let points = 25;
    let hitText = "+25 TARGET HIT";
    let freq = 440;

    if (type === "bullseye") {
      points = 100;
      hitText = "🎯 BULLSEYE! +100";
      freq = 1200;
      setBullseyeHits((prev) => prev + 1);
    } else if (type === "inner") {
      points = 50;
      hitText = "💥 INNER RING +50";
      freq = 750;
    }

    playHitSound(freq);
    setScore((prev) => prev + points);
    setShotsFired((prev) => prev + 1);

    const id = Date.now() + Math.random();
    setHitEffects((prev) => [...prev, { id, text: hitText, x, y }]);
    setTimeout(() => {
      setHitEffects((prev) => prev.filter((item) => item.id !== id));
    }, 1000);
  };

  const copyTweetToClipboard = () => {
    navigator.clipboard.writeText(tweetText);
    setCopiedTweet(true);
    setTimeout(() => setCopiedTweet(false), 2000);
  };

  // Calculations for target profit
  const solPrice = 180; // Approximate SOL price
  const initialMcap = 50000; // $50k launch mcap baseline
  const multiplier = Math.max(1, targetMcap / initialMcap);
  const potentialValue = (solAmount * solPrice * multiplier).toFixed(2);
  const profitX = multiplier.toFixed(1);

  return (
    <section id="target-lab" className="relative py-16 sm:py-24 bg-white text-black overflow-hidden border-b-4 border-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white border-2 border-black shadow-[3px_3px_0px_#e60012]">
            <Crosshair className="w-4 h-4 text-[#e60012]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              BULLSEYE INTERACTIVE TARGET LAB
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#e60012]">
            Target Practice & <span className="text-[#e60012]">Tools</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-black font-extrabold max-w-xl mx-auto">
            Test your aim on the official $bullseye target, calculate target gains, or launch viral memes to take over the lead.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#f4f4f5] border-3 border-black shadow-[4px_4px_0px_#000]">
            <button
              onClick={() => setActiveTab("target")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === "target"
                  ? "bg-[#e60012] text-white shadow-[2px_2px_0px_#000]"
                  : "text-black hover:text-[#e60012]"
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Target Practice</span>
            </button>

            <button
              onClick={() => setActiveTab("calculator")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === "calculator"
                  ? "bg-[#e60012] text-white shadow-[2px_2px_0px_#000]"
                  : "text-black hover:text-[#e60012]"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Target Multiplier</span>
            </button>

            <button
              onClick={() => setActiveTab("tweets")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm flex items-center gap-2 transition-all ${
                activeTab === "tweets"
                  ? "bg-[#e60012] text-white shadow-[2px_2px_0px_#000]"
                  : "text-black hover:text-[#e60012]"
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>Typo Roast Memes</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Target Practice Game */}
        {activeTab === "target" && (
          <div className="max-w-4xl mx-auto target-card p-6 sm:p-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left: Interactive Concentric Target Board */}
              <div className="md:col-span-6 flex flex-col items-center">
                
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-black bg-white shadow-[8px_8px_0px_#000] flex items-center justify-center select-none overflow-hidden cursor-crosshair">
                  
                  {/* Outer Ring (25 pts) */}
                  <div
                    onClick={(e) => handleTargetClick("outer", e)}
                    className="absolute inset-0 bg-white hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    {/* Middle Black Ring (50 pts) */}
                    <div
                      onClick={(e) => handleTargetClick("inner", e)}
                      className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-black hover:bg-gray-900 border-4 border-black flex items-center justify-center transition-colors shadow-inner"
                    >
                      {/* Inner White Ring */}
                      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white border-4 border-black flex items-center justify-center">
                        
                        {/* Red Center Bullseye (100 pts) */}
                        <div
                          onClick={(e) => handleTargetClick("bullseye", e)}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#e60012] hover:bg-[#cc0010] border-3 border-black flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(230,0,18,0.5)] active:scale-90 transition-transform"
                          title="CLICK RED CENTER FOR BULLSEYE (+100)"
                        >
                          <Target className="w-8 h-8 text-white animate-pulse pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Click FX */}
                  {hitEffects.map((effect) => (
                    <div
                      key={effect.id}
                      style={{ left: effect.x, top: effect.y }}
                      className="absolute pointer-events-none text-xs sm:text-sm font-display font-black text-[#e60012] z-30 animate-[float-hit_1s_ease-out_forwards]"
                    >
                      {effect.text}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="target-btn px-3 py-1.5 bg-[#f4f4f5] text-xs font-mono font-bold flex items-center gap-1.5"
                  >
                    {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#e60012]" /> : <VolumeX className="w-3.5 h-3.5" />}
                    <span>Sound: {soundEnabled ? "On" : "Off"}</span>
                  </button>
                  <span className="text-xs font-mono font-bold text-gray-500">
                    Click red dot (+100) or rings (+50/+25)
                  </span>
                </div>
              </div>

              {/* Right: Scoreboard & Stats */}
              <div className="md:col-span-6 space-y-4">
                <div className="p-4 rounded-xl bg-[#fff5f5] border-2 border-[#e60012] space-y-1">
                  <span className="text-xs font-mono font-black text-[#e60012] uppercase tracking-wider">
                    TARGET SCOREBOARD
                  </span>
                  <div className="font-comic text-4xl sm:text-5xl text-black">
                    {score.toLocaleString()} <span className="text-base font-sans font-black text-[#e60012]">PTS</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#f4f4f5] border-2 border-black">
                    <div className="text-xs font-mono font-bold text-gray-600">Total Shots</div>
                    <div className="font-display font-black text-2xl text-black">{shotsFired}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f4f4f5] border-2 border-black">
                    <div className="text-xs font-mono font-bold text-[#e60012]">Bullseyes Hit</div>
                    <div className="font-display font-black text-2xl text-[#e60012]">{bullseyeHits} 🎯</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black text-white space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold">
                    <span>ACCURACY RATING</span>
                    <span className="text-[#e60012] font-black">
                      {shotsFired > 0 ? Math.round((bullseyeHits / shotsFired) * 100) : 100}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden border border-white/20">
                    <div
                      className="bg-[#e60012] h-full transition-all duration-300"
                      style={{
                        width: `${Math.min(100, Math.max(10, shotsFired > 0 ? (bullseyeHits / shotsFired) * 100 : 100))}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-xs font-mono text-gray-300">
                    STATUS: Ready to flip the "BULLS'S EYE" typo coin.
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: Target Multiplier Calculator */}
        {activeTab === "calculator" && (
          <div className="max-w-3xl mx-auto target-card p-6 sm:p-8 bg-white space-y-6">
            <div className="flex items-center justify-between border-b-2 border-black pb-4">
              <div>
                <h3 className="font-display font-black text-2xl text-black">Target Mcap Profit Simulator</h3>
                <p className="text-xs text-gray-600 font-medium">See potential returns as $bullseye hits target market caps.</p>
              </div>
              <span className="text-xs font-mono font-black px-3 py-1 rounded-full bg-[#fff5f5] text-[#e60012] border border-[#e60012]">
                0% TAX ESTIMATE
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
                    className="w-full font-mono text-lg bg-[#f4f4f5] text-black p-3 rounded-xl border-2 border-black font-bold focus:outline-none focus:border-[#e60012]"
                  />
                  <span className="font-mono font-black text-sm px-3 py-3 rounded-xl bg-black text-white">SOL</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-black uppercase text-black mb-1.5">
                  Target Market Cap:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[1000000, 5000000, 10000000, 50000000].map((mcap) => (
                    <button
                      key={mcap}
                      onClick={() => setTargetMcap(mcap)}
                      className={`px-3 py-2 rounded-xl text-xs font-mono font-black border-2 border-black transition-all ${
                        targetMcap === mcap
                          ? "bg-[#e60012] text-white shadow-[2px_2px_0px_#000]"
                          : "bg-white text-black hover:bg-gray-100"
                      }`}
                    >
                      ${(mcap / 1000000).toFixed(0)}M
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="p-6 rounded-2xl bg-[#fff5f5] border-3 border-[#e60012] shadow-[4px_4px_0px_#000] text-center space-y-2">
              <span className="text-xs font-mono font-black text-[#e60012] uppercase tracking-wider">
                ESTIMATED TARGET VALUE AT ${(targetMcap / 1000000).toFixed(0)}M MCAP
              </span>
              <div className="font-comic text-4xl sm:text-5xl text-black">
                ${parseFloat(potentialValue).toLocaleString()}{" "}
                <span className="text-xl font-sans font-black text-[#e60012]">({profitX}x GAIN)</span>
              </div>
              <p className="text-xs font-mono text-gray-700 font-bold">
                From {solAmount} SOL (~${(solAmount * solPrice).toFixed(0)} USD) to ${parseFloat(potentialValue).toLocaleString()} USD.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: Typo Roast Memes */}
        {activeTab === "tweets" && (
          <div className="max-w-3xl mx-auto target-card p-6 sm:p-8 bg-white space-y-6">
            <div>
              <h3 className="font-display font-black text-2xl text-black">Viral Typo Roast Generator</h3>
              <p className="text-xs text-gray-600 font-medium">Spread the word about the real $bullseye and why we're taking the lead.</p>
            </div>

            <div className="space-y-3">
              <textarea
                rows={3}
                value={tweetText}
                onChange={(e) => setTweetText(e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-black bg-[#f4f4f5] font-mono text-sm text-black font-bold focus:outline-none focus:border-[#e60012]"
              />

              <div className="flex flex-wrap gap-2">
                {tweetTemplates.map((template, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTweetText(template)}
                    className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-white border border-black hover:bg-gray-100 text-black"
                  >
                    Template #{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={copyTweetToClipboard}
                className="target-btn target-btn-red px-5 py-3 text-white text-xs font-display font-black flex items-center gap-2"
              >
                {copiedTweet ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedTweet ? "Tweet Copied to Clipboard!" : "Copy Tweet Text"}</span>
              </button>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="target-btn px-5 py-3 bg-black hover:bg-[#1a1a1a] text-white text-xs font-display font-bold flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Post directly to X</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
