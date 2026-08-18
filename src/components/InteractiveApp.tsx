import React, { useState } from "react";
import {
  Brain,
  Zap,
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  TrendingUp,
  Flame,
  Award,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import {
  SLINGTARD_NAME,
  SLINGTARD_TICKER,
  SLINGTARD_LOGO,
  X_COMMUNITY_URL,
  PUMPFUN_URL,
} from "../constants";

export default function InteractiveApp() {
  // Clicker State
  const [braincells, setBraincells] = useState(100);
  const [vamps, setVamps] = useState(0);
  const [clickEffect, setClickEffect] = useState<{ id: number; text: string; x: number; y: number }[]>([]);
  
  // Calculator State
  const [solAmount, setSolAmount] = useState<number>(1);
  const [targetMcap, setTargetMcap] = useState<number>(10000000); // $10M
  
  // Apology Tweet Generator
  const [copiedTweet, setCopiedTweet] = useState(false);
  const [tweetText, setTweetText] = useState(
    "I fucked up my previous coin because I am literally a retard. That's why the community launched $slingtartd."
  );

  const apologyTemplates = [
    "I fucked up my previous coin because I am literally a retard. That's why the community launched $slingtartd.",
    "I am a 0 IQ KOL who fucked up his previous coin because I am literally dumb. Now the community owns $slingtartd.",
    "No complicated excuses: I fucked up my coin, they named me Slingtard, and the chads created $slingtartd.",
    "I ruined my previous token because I have negative braincells. The community is now in 100% control of $slingtartd.",
    "0% dev allocation on $slingtartd because I'm not allowed to touch anything anymore. Pure community power on Solana.",
    "I fucked up my coin, got nicknamed Slingtard, and the community launched $slingtartd. 0 IQ forever.",
  ];

  const handleFaceClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const emojiArray = ["🤤", "🧠-1", "💸", "🚨 VAMP!", "🌈", "📉➡️🚀", "🕶️"];
    const randomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];

    const newEffect = {
      id: Date.now(),
      text: randomEmoji,
      x,
      y,
    };

    setClickEffect((prev) => [...prev.slice(-8), newEffect]);
    setBraincells((prev) => Math.max(0, prev - 1));
    setVamps((prev) => prev + 1);

    // Auto clean effect
    setTimeout(() => {
      setClickEffect((prev) => prev.filter((item) => item.id !== newEffect.id));
    }, 1000);
  };

  const generateRandomTweet = () => {
    const filtered = apologyTemplates.filter((t) => t !== tweetText);
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    setTweetText(random);
    setCopiedTweet(false);
  };

  const handleCopyTweet = () => {
    navigator.clipboard.writeText(tweetText);
    setCopiedTweet(true);
    setTimeout(() => setCopiedTweet(false), 2000);
  };

  // Calculator math
  const solPrice = 180;
  const initialMcap = 45000;
  const multiplier = Math.max(1, targetMcap / initialMcap);
  const potentialUSD = solAmount * solPrice * multiplier;
  const kebabCount = Math.floor(potentialUSD / 9);

  return (
    <section id="vamp-lab" className="relative py-16 sm:py-24 bg-[#ffe600] text-black overflow-hidden border-b-4 border-black comic-dots">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-[#ff007a] border-2 border-black shadow-[4px_4px_0px_#00f0ff]">
            <Sparkles className="w-4 h-4 text-[#ffe600]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider">
              INTERACTIVE 0 IQ PLAYGROUND
            </span>
          </div>

          <h2 className="font-comic text-4xl sm:text-6xl text-black tracking-tight uppercase drop-shadow-[3px_3px_0px_#fff]">
            The 0 IQ <span className="text-[#00f0ff]">KOL Lab</span>
          </h2>

          <p className="font-sans text-base sm:text-xl text-black font-extrabold max-w-2xl mx-auto">
            Drain Slingtard's braincells, simulate your astronomical CTO gains, and generate authentic 0 IQ apology tweets.
          </p>
        </div>

        {/* 2 Main Lab Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* LEFT: Clickable Slingtard Face & Braincell Drainer */}
          <div className="lg:col-span-6 comic-card p-6 sm:p-8 bg-white border-4 border-black shadow-[8px_8px_0px_#000] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b-3 border-black pb-3">
                <span className="font-mono font-black text-xs uppercase text-[#ff007a] flex items-center gap-1.5">
                  <Brain className="w-4 h-4" /> BRAINCELL DRAIN ENGINE
                </span>
                <span className="text-xs font-mono font-bold text-black bg-[#c7f9ff] px-2.5 py-1 rounded-full border border-black">
                  Tap Face to Drain
                </span>
              </div>

              {/* Interactive Face Canvas */}
              <div
                onClick={handleFaceClick}
                className="relative w-full aspect-square max-w-[320px] mx-auto rounded-3xl overflow-hidden border-4 border-black bg-[#ffd600] shadow-[6px_6px_0px_#000] cursor-pointer group select-none flex items-center justify-center transition-transform active:scale-95"
              >
                <img
                  src={SLINGTARD_LOGO}
                  alt="Tap Slingtard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />

                {/* Floating click animations */}
                {clickEffect.map((eff) => (
                  <span
                    key={eff.id}
                    style={{ left: eff.x, top: eff.y }}
                    className="absolute pointer-events-none text-2xl font-mono font-black text-[#ff007a] drop-shadow-[2px_2px_0px_#000] animate-bounce"
                  >
                    {eff.text}
                  </span>
                ))}

                {/* Overlay Prompt */}
                <div className="absolute bottom-2 left-2 right-2 bg-black/85 text-white backdrop-blur-sm p-2 rounded-xl border border-white text-center text-xs font-mono font-bold">
                  👆 Tap to Drain Braincells & Vamp (+1)
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-[#fff9c4] border-2 border-black text-center">
                  <span className="text-[10px] font-mono font-black text-black/70 uppercase block">REMAINING BRAINCELLS</span>
                  <span className="font-comic text-2xl sm:text-3xl text-black">
                    {braincells} <span className="text-sm font-sans">/ 100</span>
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-[#ffe0ef] border-2 border-black text-center">
                  <span className="text-[10px] font-mono font-black text-[#ff007a] uppercase block">SELF-VAMPS EXECUTED</span>
                  <span className="font-comic text-2xl sm:text-3xl text-[#ff007a]">
                    {vamps.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Dumb Rank Badge */}
              <div className="p-3 rounded-2xl bg-[#c7f9ff] border-2 border-black flex items-center justify-between font-mono text-xs font-black">
                <span>KOL RANK:</span>
                <span className="text-[#ff007a]">
                  {vamps < 10 && "🤤 Level 1: Novice Drooler"}
                  {vamps >= 10 && vamps < 30 && "🕶️ Level 2: 0 IQ KOL"}
                  {vamps >= 30 && vamps < 60 && "🚨 Level 3: Token Destroyer"}
                  {vamps >= 60 && "👑 Level 4: Sovereign Retard of Solana"}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setBraincells(100);
                setVamps(0);
              }}
              className="mt-4 text-xs font-mono font-bold text-black/60 hover:text-black flex items-center justify-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Brain Simulator
            </button>
          </div>

          {/* RIGHT: CTO Gains & Kebab Index Calculator */}
          <div className="lg:col-span-6 comic-card p-6 sm:p-8 bg-white border-4 border-black shadow-[8px_8px_0px_#000] flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b-3 border-black pb-3">
                <span className="font-mono font-black text-xs uppercase text-[#00a2ff] flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> CTO MOON GAINS CALCULATOR
                </span>
                <span className="text-xs font-mono font-bold text-black bg-[#ffe0ef] px-2.5 py-1 rounded-full border border-black">
                  100% Math (0 IQ Approved)
                </span>
              </div>

              {/* Investment input */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-black uppercase text-black flex items-center justify-between">
                  <span>YOUR SOL INVESTMENT:</span>
                  <span className="text-sm font-comic text-[#ff007a]">{solAmount} SOL (~${(solAmount * solPrice).toLocaleString()})</span>
                </label>
                <div className="flex gap-2">
                  {[0.5, 1, 2, 5, 10].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setSolAmount(amt)}
                      className={`comic-btn flex-1 py-2 text-xs font-mono font-black ${
                        solAmount === amt
                          ? "bg-[#ff007a] text-white"
                          : "bg-white text-black hover:bg-yellow-50"
                      }`}
                    >
                      {amt} SOL
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Market Cap */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-black uppercase text-black flex items-center justify-between">
                  <span>TARGET CTO MARKET CAP:</span>
                  <span className="text-sm font-comic text-[#0091ea]">${(targetMcap / 1000000).toFixed(1)}M Mcap</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "$1M", val: 1000000 },
                    { label: "$5M", val: 5000000 },
                    { label: "$25M", val: 25000000 },
                    { label: "$100M", val: 100000000 },
                  ].map((m) => (
                    <button
                      key={m.val}
                      onClick={() => setTargetMcap(m.val)}
                      className={`comic-btn py-2 text-xs font-mono font-black ${
                        targetMcap === m.val
                          ? "bg-[#00f0ff] text-black"
                          : "bg-white text-black hover:bg-yellow-50"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="p-5 rounded-2xl bg-[#fff9c4] border-3 border-black space-y-3 shadow-[4px_4px_0px_#000]">
                <div className="flex items-center justify-between border-b-2 border-black pb-2">
                  <span className="text-xs font-mono font-bold text-black">ESTIMATED MULTIPLIER:</span>
                  <span className="font-comic text-xl text-[#ff007a]">
                    {multiplier.toFixed(1)}x ROAS 🚀
                  </span>
                </div>

                <div className="flex items-center justify-between border-b-2 border-black pb-2">
                  <span className="text-xs font-mono font-bold text-black">POTENTIAL BAG VALUE:</span>
                  <span className="font-comic text-2xl text-black">
                    ${potentialUSD.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-mono font-bold text-black flex items-center gap-1">
                    🌯 KEBAB INDEX EQUIVALENCY:
                  </span>
                  <span className="font-mono font-black text-xs text-[#00a2ff] bg-white px-2 py-1 rounded-lg border border-black">
                    {kebabCount.toLocaleString()} Giant Kebabs
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={PUMPFUN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn w-full py-3.5 bg-[#ff007a] hover:bg-[#ff1a80] text-white font-display font-black text-xs flex items-center justify-center gap-2"
              >
                <span>💊 Load Your $SLINGTARTD Bag on Pump.fun</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM: Dumb KOL Tweet Generator */}
        <div className="max-w-4xl mx-auto comic-card p-6 sm:p-8 bg-white border-4 border-black shadow-[8px_8px_0px_#000]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-black pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐦</span>
              <div>
                <h3 className="font-display font-black text-xl text-black">
                  Dumb KOL Tweet Generator
                </h3>
                <p className="text-xs font-mono text-black/70">
                  Generate authentic 0 IQ confessions to post on X timeline
                </p>
              </div>
            </div>

            <button
              onClick={generateRandomTweet}
              className="comic-btn px-4 py-2 bg-[#00f0ff] hover:bg-[#38f4ff] text-black font-mono font-black text-xs flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Generate New Tweet</span>
            </button>
          </div>

          {/* Tweet Card Box */}
          <div className="p-5 rounded-2xl bg-[#f8fafc] border-3 border-black space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <img
                src={SLINGTARD_LOGO}
                alt="Slingtard X Avatar"
                className="w-10 h-10 rounded-full border-2 border-black object-cover"
              />
              <div>
                <div className="font-display font-black text-sm text-black flex items-center gap-1">
                  <span>slingtard</span>
                  <span className="text-blue-500">✓</span>
                </div>
                <div className="font-mono text-[11px] text-gray-500">@the_real_slingtard (0 IQ KOL)</div>
              </div>
            </div>

            <p className="font-sans font-bold text-base sm:text-lg text-black leading-relaxed">
              {tweetText}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono font-bold text-black/80">
              Post this to spread the unhinged gospel of {SLINGTARD_TICKER}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyTweet}
                className={`comic-btn px-4 py-2 font-mono font-bold text-xs flex items-center gap-1.5 ${
                  copiedTweet ? "bg-[#00f0ff] text-black" : "bg-white text-black hover:bg-yellow-50"
                }`}
              >
                {copiedTweet ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedTweet ? "Copied Tweet!" : "Copy Tweet"}</span>
              </button>

              <a
                href={`https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn px-4 py-2 bg-black text-white font-mono font-bold text-xs flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Tweet on X</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
