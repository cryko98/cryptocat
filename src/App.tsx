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
    <div className="min-h-screen bg-[#0052fe] text-white font-sans selection:bg-[#00ff88] selection:text-[#0052fe] antialiased overflow-x-hidden relative">
      {/* Background ambient soft glows (no grids) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#0038b8] rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#0066ff] rounded-full blur-[160px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[450px] h-[450px] bg-[#38bdf8]/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-[#002f9e] rounded-full blur-[160px]"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Header Section with exact artwork layout & CA */}
      <Hero />

      {/* Complete Giga Toad Lore & Chronicles of the Alpha Toad Section */}
      <Story />

      {/* Interactive Giga Toad Alpha Gym & Hypertrophy Calculator */}
      <InteractiveApp />

      {/* Alpha Ledger & Tokenomics */}
      <Tokenomics />

      {/* Alpha Roadmap */}
      <AuraRoadmap />

      {/* Footer & Disclaimer */}
      <Footer />
    </div>
  );
}
