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
import HowToBuy from "./components/HowToBuy";
import Footer from "./components/Footer";

const CONTRACT_ADDRESS = "4LjLUvg56sBrzstX6Cw9YYr3k31PdZGQg5u2mCM4pump";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#451A03] font-sans selection:bg-[#FDE68A] selection:text-[#78350F] antialiased overflow-x-hidden relative">
      {/* Background ambient glowing blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#FDE68A] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#FED7AA] rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#FEF08A] rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-[#FFEDD5] rounded-full blur-[140px]"></div>
      </div>

      {/* Navigation */}
      <Navbar contractAddress={CONTRACT_ADDRESS} />

      {/* Hero Header Section */}
      <Hero contractAddress={CONTRACT_ADDRESS} />

      {/* Story / Transformational Section */}
      <Story />

      {/* Play & Interactive Clicker & Calculator Section */}
      <InteractiveApp />

      {/* Tokenomics dashboard */}
      <Tokenomics contractAddress={CONTRACT_ADDRESS} />

      {/* Step by Step buying tutorial */}
      <HowToBuy contractAddress={CONTRACT_ADDRESS} />

      {/* Footer & Disclaimer */}
      <Footer />
    </div>
  );
}
