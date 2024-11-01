// src/App.jsx
import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Register />
      </main>
      <Footer />
    </>
  );
}

export default App;
