import React, { useState } from "react";
import { motion } from "motion/react";
import { Wallet, Landmark, ArrowRightLeft, Sparkles, Check, Copy } from "lucide-react";

interface HowToBuyProps {
  contractAddress: string;
}

export default function HowToBuy({ contractAddress }: HowToBuyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      num: "01",
      title: "Create Phantom Wallet",
      description: "Download Phantom or Solflare wallet from phantom.app or your mobile app store. Save your secret recovery phrase securely.",
      icon: <Wallet className="w-6 h-6 text-sky-400" />,
    },
    {
      num: "02",
      title: "Acquire Solana ($SOL)",
      description: "Buy SOL inside Phantom or on major exchanges (Coinbase, Binance, Kraken) and send it directly to your Phantom wallet address.",
      icon: <Landmark className="w-6 h-6 text-sky-400" />,
    },
    {
      num: "03",
      title: "Swap SOL for $sharkcat",
      description: "Connect to Jupiter (jup.ag) or Raydium. Paste the official $sharkcat contract address and swap your desired SOL amount.",
      icon: <ArrowRightLeft className="w-6 h-6 text-sky-400" />,
    },
    {
      num: "04",
      title: "Rule the Meme Ocean!",
      description: "Congratulations! You are now part of the Shark Cat apex pack. Hold tight, ride the wave, and enjoy the green candles!",
      icon: <Sparkles className="w-6 h-6 text-sky-400 animate-pulse" />,
    },
  ];

  return (
    <section id="how-to-buy" className="relative py-20 sm:py-28 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      
      {/* Visual background ambient glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[30%] left-[-5%] w-72 h-72 bg-sky-500 rounded-full blur-[140px] opacity-20"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-300 bg-slate-800 px-4 py-2 rounded-full border border-sky-500/30 shadow-md">
            📖 BUYING GUIDE
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tight">
            How to Buy <span className="text-sky-400">$sharkcat</span>
          </h2>
          <p className="text-slate-300 font-sans font-semibold text-base sm:text-lg">
            Follow these 4 simple steps to secure your bag and join the apex predator of Solana!
          </p>
        </div>

        {/* Steps Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-slate-800/90 p-6 rounded-3xl border border-slate-700 shadow-xl flex flex-col justify-between group hover:border-sky-500 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all duration-300 text-white"
            >
              <div className="space-y-6">
                
                <div className="flex justify-between items-center">
                  <span className="font-display font-black text-4xl text-slate-700 group-hover:text-sky-400/40 transition-colors">
                    {step.num}
                  </span>
                  <div className="p-3 rounded-2xl border border-slate-700 bg-slate-900 shadow-inner">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed font-semibold">
                    {step.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Contract Reminder Bottom block */}
        <div className="max-w-3xl mx-auto bg-slate-800/90 border border-slate-700 p-8 rounded-3xl shadow-2xl text-center space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-black text-sky-400 uppercase tracking-widest block">
              OFFICIAL CONTRACT ADDRESS (CA)
            </span>
            <h4 className="font-display font-black text-2xl text-white uppercase italic">
              Verify Before Swapping
            </h4>
            <p className="text-xs text-slate-300 max-w-xl mx-auto font-sans font-semibold">
              Always double-check the contract address on Jupiter or Raydium before confirming your trade.
            </p>
          </div>

          <div className="bg-slate-900 px-4 py-3.5 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto">
            <span className="font-mono text-xs font-bold text-sky-300 select-all overflow-hidden text-ellipsis whitespace-nowrap w-full sm:w-auto">
              {contractAddress}
            </span>
            <button
              onClick={handleCopy}
              id="copy-ca-buy-section"
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-display font-black shadow transition-all cursor-pointer flex items-center justify-center gap-1.5 border-none shrink-0 ${
                copied
                  ? "bg-emerald-500 text-slate-950"
                  : "bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Mint CA
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
