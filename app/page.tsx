"use client";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import { AboutMe, GitHubStats } from "./components/AboutAndStats";
import Footer from "./components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ background: darkMode ? "#0f0f1a" : "#f8f7ff" }}>
      <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
      <AboutMe darkMode={darkMode} />
      <GitHubStats username="Israel875" darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}