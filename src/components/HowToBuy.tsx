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
      icon: <Wallet className="w-6 h-6 text-rose-500" />,
    },
    {
      num: "02",
      title: "Acquire Solana ($SOL)",
      description: "Purchase SOL inside Phantom directly, or buy it on exchanges like Coinbase, Binance, or Kraken, and withdraw it to your Phantom wallet address.",
      icon: <Landmark className="w-6 h-6 text-rose-600" />,
    },
    {
      num: "03",
      title: "Swap SOL for $Casper",
      description: "Connect to Jupiter (jup.ag) or Raydium inside Phantom's browser. Paste the $Casper contract address and swap your desired amount of SOL.",
      icon: <ArrowRightLeft className="w-6 h-6 text-rose-400" />,
    },
    {
      num: "04",
      title: "Claim the Luck of Casper!",
      description: "Congratulations! You now hold the rarest 1-in-750,000 lucky charm on Solana. Hold tight with your brand new diamond paws!",
      icon: <Sparkles className="w-6 h-6 text-rose-500 animate-pulse" />,
    },
  ];

  return (
    <section id="how-to-buy" className="relative py-20 sm:py-28 bg-[#FFFDFD] overflow-hidden border-t border-rose-100">
      
      {/* Decorative floating grids */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[40%] left-[-5%] w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-rose-50 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-800 bg-rose-50 px-3.5 py-2 rounded-full border border-rose-100 shadow-sm">
            📖 Easy Buying Guide
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#4C0519] uppercase italic tracking-tight">
            How to Swap Your SOL for $Casper
          </h2>
          <p className="text-rose-950/80 font-sans font-semibold text-base">
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
              className="relative bg-white p-6 rounded-3xl border border-rose-100/80 shadow-md flex flex-col justify-between group hover:border-rose-400 transition-all duration-300 text-rose-950"
            >
              <div className="space-y-6">
                
                {/* Header of card */}
                <div className="flex justify-between items-center">
                  <span className="font-display font-black text-4xl text-rose-100 group-hover:text-rose-200/60 transition-colors">
                    {step.num}
                  </span>
                  <div className="p-3 rounded-2xl border border-rose-100 bg-rose-50 shadow-sm">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-rose-900">
                    {step.title}
                  </h3>
                  <p className="text-xs text-rose-950/70 font-sans leading-relaxed font-semibold">
                    {step.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Contract Reminder Bottom block */}
        <div className="max-w-3xl mx-auto bg-white border border-rose-100 p-6 rounded-3xl shadow-lg text-center space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-black text-rose-600 uppercase tracking-widest block">
              SWAP WITH COMPLETE CONFIDENCE
            </span>
            <h4 className="font-display font-black text-xl text-[#4C0519] uppercase italic">
              Paste the Official Mint Address
            </h4>
            <p className="text-xs text-rose-950/70 max-w-xl mx-auto font-sans font-semibold">
              Verify this address on Jupiter or Raydium. Beware of copycats and scammers! Only use this exact address.
            </p>
          </div>

          <div className="bg-rose-50/50 px-4 py-3 rounded-2xl border border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto">
            <span className="font-mono text-xs font-bold text-rose-800 select-all overflow-hidden text-ellipsis whitespace-nowrap w-full sm:w-auto">
              {contractAddress}
            </span>
            <button
              onClick={handleCopy}
              id="copy-ca-buy-section"
              className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-display font-bold shadow transition-all cursor-pointer flex items-center justify-center gap-1.5 border-none ${
                copied
                  ? "bg-rose-700 text-white"
                  : "bg-rose-100 hover:bg-rose-600 text-rose-700 hover:text-white border border-rose-200 hover:border-transparent"
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
