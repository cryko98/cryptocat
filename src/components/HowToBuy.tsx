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
      description: "Download Phantom Wallet from phantom.app or your mobile app store. Create a new wallet and write down your recovery seed phrase safely.",
      icon: <Wallet className="w-6 h-6 text-purple-500" />,
      color: "border-purple-100 bg-purple-50",
    },
    {
      num: "02",
      title: "Acquire Solana ($SOL)",
      description: "Purchase SOL inside Phantom directly, or buy it on exchanges like Coinbase, Binance, or Kraken, and withdraw it to your Phantom wallet address.",
      icon: <Landmark className="w-6 h-6 text-blue-500" />,
      color: "border-blue-100 bg-blue-50",
    },
    {
      num: "03",
      title: "Swap SOL for $CRYPTOCAT",
      description: "Connect to Jupiter (jup.ag) or Raydium inside Phantom's browser. Paste the $CRYPTOCAT contract address and swap your desired amount of SOL.",
      icon: <ArrowRightLeft className="w-6 h-6 text-green-500" />,
      color: "border-green-100 bg-green-50",
    },
    {
      num: "04",
      title: "Purr & Stack Gains!",
      description: "Congratulations! You are officially no longer a sad Cash Cat. Sunglasses on, relax, and grin along as the green candles print money!",
      icon: <Sparkles className="w-6 h-6 text-yellow-500 animate-spin" />,
      color: "border-yellow-100 bg-yellow-50",
    },
  ];

  return (
    <section id="how-to-buy" className="relative py-20 sm:py-28 bg-[#f8fafc] overflow-hidden border-t border-green-50">
      
      {/* Decorative floating grids */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[40%] left-[-5%] w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#22c55e] bg-green-50 px-3.5 py-2 rounded-full border border-green-100">
            📖 How to Buy Guide
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Follow These Simple Steps to Base-hood
          </h2>
          <p className="text-neutral-500 font-sans font-medium text-base">
            No technical knowledge required. We have laid out the quickest, safest way to swap your SOL.
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
              className="relative bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-lg shadow-slate-50 flex flex-col justify-between group hover:border-green-200 transition-all"
            >
              <div className="space-y-6">
                
                {/* Header of card */}
                <div className="flex justify-between items-center">
                  <span className="font-display font-black text-4xl text-slate-200 group-hover:text-green-200 transition-colors">
                    {step.num}
                  </span>
                  <div className={`p-3 rounded-2xl border ${step.color} shadow-sm`}>
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-slate-800">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Contract Reminder Bottom block */}
        <div className="max-w-3xl mx-auto bg-white border-2 border-green-100 p-6 rounded-3xl shadow-xl shadow-green-50/50 text-center space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-green-600 uppercase tracking-widest block">
              SWAP WITH CONFIDENCE
            </span>
            <h4 className="font-display font-bold text-lg text-slate-800">
              Paste the Official Mint Address
            </h4>
            <p className="text-xs text-slate-400 max-w-xl mx-auto font-sans font-medium">
              Verify this address on Jupiter or Raydium. Beware of copycats and scammers! Only use this exact address.
            </p>
          </div>

          <div className="bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto">
            <span className="font-mono text-xs font-bold text-neutral-600 select-all overflow-hidden text-ellipsis whitespace-nowrap w-full sm:w-auto">
              {contractAddress}
            </span>
            <button
              onClick={handleCopy}
              id="copy-ca-buy-section"
              className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-display font-bold shadow transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                copied
                  ? "bg-green-600 text-white"
                  : "bg-neutral-800 hover:bg-[#22c55e] text-white"
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
