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
    <div className="min-h-screen bg-[#ffffff] text-black font-sans selection:bg-[#00f076] selection:text-black antialiased overflow-x-hidden relative">
      {/* Background ambient cat emerald & violet aura splashes */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[650px] h-[650px] bg-[#00f076] rounded-full blur-[190px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[550px] h-[550px] bg-[#00f076] rounded-full blur-[190px]"></div>
        <div className="absolute top-[45%] right-[15%] w-[450px] h-[450px] bg-[#7c3aed] rounded-full blur-[200px] opacity-20"></div>
      </div>

      {/* Navigation Bar with Telegram & Pump.fun */}
      <Navbar />

      {/* Hero Section: Avatar, CA, Cat vs Bull Flip & Fast CTAs */}
      <Hero />

      {/* The Story: Why the Cat Meta is King on Solana */}
      <Story />

      {/* Interactive Laser Lab & Cat vs Bull Cap Simulator */}
      <InteractiveApp />

      {/* Tokenomics */}
      <Tokenomics />

      {/* The Feline Roadmap to Overthrow the Bull */}
      <AuraRoadmap />

      {/* Footer */}
      <Footer />
    </div>
  );
}
