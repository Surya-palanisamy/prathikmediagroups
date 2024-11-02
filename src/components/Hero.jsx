// src/components/Hero.jsx
import React from "react";
import logo from "../assets/PMG original.png";

const Hero = () => {
  return (
    <section id='hero'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "5px",
        }}
      >
        <img
          src={logo}
          alt='logo'
          style={{ display: "flex", width: "15%", height: "20%" }}
        />
      </div>
      <h1 className='neon'>Welcome to Prathik Uttters Media Groups</h1>
      <h4 style={{color:"red"}}>A PLATFORM WHERE WHOLESOME PACKAGES OF DIGITAL SERVICES IS PROVIDED AT A FRIENDLY COST </h4>
      <h5 className='content'>
        Experience the future of technology and innovation
      </h5>
    </section>
  );
};

export default Hero;
