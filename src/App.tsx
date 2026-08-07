/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
    <div className="min-h-screen bg-[#f8edd1] text-[#1c1305] font-serif selection:bg-[#fde047] selection:text-[#1c1305] antialiased overflow-x-hidden relative vintage-ledger-grid">
      {/* Background ambient warm golden glowing lights */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#fbbf24] rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#f59e0b] rounded-full blur-[160px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#d97706] rounded-full blur-[150px] opacity-25"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-[#ca8a04] rounded-full blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Header Section with exact artwork layout */}
      <Hero />

      {/* Complete Market Lore & Chronicles Section */}
      <Story />

      {/* Interactive Curiosity Lounge & Calculator */}
      <InteractiveApp />

      {/* Golden Market Ledger & Tokenomics */}
      <Tokenomics />

      {/* Market Volumes & Roadmap */}
      <AuraRoadmap />

      {/* Footer & Disclaimer */}
      <Footer />
    </div>
  );
}
