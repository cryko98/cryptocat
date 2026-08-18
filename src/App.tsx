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
    <div className="min-h-screen bg-[#ffd600] text-black font-sans selection:bg-[#ff007a] selection:text-white antialiased overflow-x-hidden relative">
      {/* Background ambient comic splashes */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#00f0ff] rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#ff007a] rounded-full blur-[160px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[450px] h-[450px] bg-[#ffe600] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-[#00f0ff] rounded-full blur-[160px]"></div>
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section: Avatar, CA, KOL Wisdom & Fast CTAs */}
      <Hero />

      {/* The Saga of the Self-Vamped KOL Lore */}
      <Story />

      {/* 0 IQ KOL Lab & Interactive Playground */}
      <InteractiveApp />

      {/* Tokenomics & Transparency Ledger */}
      <Tokenomics />

      {/* The Masterplan & Roadmap */}
      <AuraRoadmap />

      {/* Footer */}
      <Footer />
    </div>
  );
}
