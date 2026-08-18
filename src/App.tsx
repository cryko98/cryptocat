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
    <div className="min-h-screen bg-[#ffffff] text-black font-sans selection:bg-[#e60012] selection:text-white antialiased overflow-x-hidden relative">
      {/* Background ambient subtle red & black glow accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#e60012] rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#e60012] rounded-full blur-[180px]"></div>
        <div className="absolute top-[45%] right-[20%] w-[450px] h-[450px] bg-[#0a0a0a] rounded-full blur-[200px]"></div>
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section: Logo, CA, Bullseye Target & Quick Action Buttons */}
      <Hero />

      {/* The Story: Fixing the "BULLS'S EYE" Typo & Taking Over The Lead */}
      <Story />

      {/* Bullseye Interactive Target Range & Typo Comparison Lab */}
      <InteractiveApp />

      {/* Tokenomics & Transparency */}
      <Tokenomics />

      {/* Target Roadmap & Milestones */}
      <AuraRoadmap />

      {/* Footer */}
      <Footer />
    </div>
  );
}
