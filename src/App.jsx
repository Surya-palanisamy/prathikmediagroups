// src/App.jsx
import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero";
import "./App.css";
import Works from "./components/work";

function App() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Works />
      </main>
      <Footer />
    </>
  );
}

export default App;
