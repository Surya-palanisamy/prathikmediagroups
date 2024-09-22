// src/App.jsx
import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import RegisterEvents from "./components/RegisterEvents";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";
import Hero from "./components/hero";
function App() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <RegisterEvents />
      </main>
      <Footer />
    </>
  );
}

export default App;
