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

const CONTRACT_ADDRESS = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-green-100 selection:text-green-800 antialiased overflow-x-hidden">
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
