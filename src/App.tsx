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
import MarsMission from "./components/MarsMission";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0403] text-[#fed7aa] font-sans selection:bg-[#ea580c] selection:text-[#0c0403] antialiased overflow-x-hidden relative">
      {/* Background ambient glowing Martian crimson & orange cosmic blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#c2410c] rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#991b1b] rounded-full blur-[160px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#431407] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-[#ea580c] rounded-full blur-[150px]"></div>
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

      {/* Mars colonization roadmap */}
      <MarsMission />

      {/* Footer & Disclaimer */}
      <Footer />
    </div>
  );
}
