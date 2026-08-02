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
    <div className="min-h-screen bg-[#06020e] text-[#f3e8ff] font-sans selection:bg-[#a855f7] selection:text-[#06020e] antialiased overflow-x-hidden relative">
      {/* Background ambient glowing Iridescent Aura blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-35 z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#9333ea] rounded-full blur-[160px] animate-aura-shift"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#ec4899] rounded-full blur-[160px] animate-aura-shift"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#06b6d4] rounded-full blur-[150px] opacity-25"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-[#8b5cf6] rounded-full blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Header Section */}
      <Hero />

      {/* Story / Transformational Section */}
      <Story />

      {/* Play & Interactive Clicker & Calculator Section */}
      <InteractiveApp />

      {/* Tokenomics dashboard */}
      <Tokenomics />

      {/* Aura frequency roadmap */}
      <AuraRoadmap />

      {/* Footer & Disclaimer */}
      <Footer />
    </div>
  );
}
