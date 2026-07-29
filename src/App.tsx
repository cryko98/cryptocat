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

const CONTRACT_ADDRESS = "DgH6wj5QnkGEEkMJnovXj2jbeYnuDizzUNcisHWnpump";

export default function App() {
  return (
    <div className="min-h-screen bg-[#120b08] text-[#fbf0da] font-sans selection:bg-[#d97706] selection:text-[#120b08] antialiased overflow-x-hidden relative">
      {/* Background ambient glowing tobacco & amber blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#92400e] rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#78350f] rounded-full blur-[160px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#451a03] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-[#b45309] rounded-full blur-[150px]"></div>
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
