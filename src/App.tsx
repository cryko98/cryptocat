import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import InteractiveApp from "./components/InteractiveApp";
import Tokenomics from "./components/Tokenomics";
import AuraRoadmap from "./components/AuraRoadmap";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#061811] text-[#d8f3dc] font-sans selection:bg-[#74c69d] selection:text-[#081c15] antialiased overflow-x-hidden relative pond-water-grid">
      {/* Background ambient serene pond glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#2d6a4f] rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#1b4332] rounded-full blur-[160px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#52b788] rounded-full blur-[150px] opacity-25"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-[#74c69d] rounded-full blur-[150px] opacity-20"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Header Section with exact artwork layout & Telegram */}
      <Hero />

      {/* Complete Pond Lore & Chronicles of the Chill Toad Section */}
      <Story />

      {/* Interactive Chill Toad Lounge & Vibe-o-Meter */}
      <InteractiveApp />

      {/* Pond Ledger & Tokenomics */}
      <Tokenomics />

      {/* Lily Pad Hop Roadmap */}
      <AuraRoadmap />

      {/* Footer & Disclaimer */}
      <Footer />
    </div>
  );
}
