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
      icon: <Wallet className="w-6 h-6 text-amber-600" />,
    },
    {
      num: "02",
      title: "Acquire Solana ($SOL)",
      description: "Purchase SOL inside Phantom directly, or buy it on exchanges like Coinbase, Binance, or Kraken, and withdraw it to your Phantom wallet address.",
      icon: <Landmark className="w-6 h-6 text-amber-700" />,
    },
    {
      num: "03",
      title: "Swap SOL for $BULLDOG",
      description: "Connect to Jupiter (jup.ag) or Raydium inside Phantom's browser. Paste the $BULLDOG contract address and swap your desired amount of SOL.",
      icon: <ArrowRightLeft className="w-6 h-6 text-amber-500" />,
    },
    {
      num: "04",
      title: "Unleash the Dog & Stash Gains!",
      description: "Congratulations! You are officially part of the toughest pack on Solana. Heavy chains on, relax, and watch as the bull run takes off!",
      icon: <Sparkles className="w-6 h-6 text-amber-600 animate-pulse" />,
    },
  ];

  return (
    <section id="how-to-buy" className="relative py-20 sm:py-28 bg-[#FCFAF6] overflow-hidden border-t border-amber-200/40">
      
      {/* Decorative floating grids */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[40%] left-[-5%] w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-2 rounded-full border border-amber-200 shadow-sm">
            📖 How to Buy Guide
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#451A03] uppercase italic tracking-tight">
            Follow These Simple Steps to Join the Yard
          </h2>
          <p className="text-amber-950/80 font-sans font-medium text-base">
            No technical hurdles. We have laid out the quickest, safest way to swap your SOL.
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
              className="relative bg-[#FDFBF7] p-6 rounded-3xl border border-amber-200/80 shadow-xl flex flex-col justify-between group hover:border-amber-500 transition-all duration-300 text-amber-950"
            >
              <div className="space-y-6">
                
                {/* Header of card */}
                <div className="flex justify-between items-center">
                  <span className="font-display font-black text-4xl text-amber-100 group-hover:text-amber-200/60 transition-colors">
                    {step.num}
                  </span>
                  <div className="p-3 rounded-2xl border border-amber-100 bg-amber-50 shadow-sm">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-amber-900">
                    {step.title}
                  </h3>
                  <p className="text-xs text-amber-950/70 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Contract Reminder Bottom block */}
        <div className="max-w-3xl mx-auto bg-[#FDFBF7] border border-amber-200/80 p-6 rounded-3xl shadow-xl text-center space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-black text-amber-600 uppercase tracking-widest block">
              SWAP WITH COMPLETE CONFIDENCE
            </span>
            <h4 className="font-display font-black text-xl text-[#451A03] uppercase italic">
              Paste the Official Mint Address
            </h4>
            <p className="text-xs text-amber-950/70 max-w-xl mx-auto font-sans font-medium">
              Verify this address on Jupiter or Raydium. Beware of copycats and scammers! Only use this exact address.
            </p>
          </div>

          <div className="bg-amber-50/50 px-4 py-3 rounded-2xl border border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto">
            <span className="font-mono text-xs font-bold text-amber-800 select-all overflow-hidden text-ellipsis whitespace-nowrap w-full sm:w-auto">
              {contractAddress}
            </span>
            <button
              onClick={handleCopy}
              id="copy-ca-buy-section"
              className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-display font-bold shadow transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                copied
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 hover:bg-amber-600 text-amber-700 hover:text-white border border-amber-200 hover:border-transparent"
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
