// src/components/Hero.jsx
import React from "react";
import logo from "../assets/PMG original.png";

const Hero = () => {
  return (
    <section id="hero">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ display: "flex", width: "30%", height: "auto" }}
        />
      </div>
      <h1 className="neon">Welcome to Prathik Uttters Media Groups</h1>
      <p>Experience the future of technology and innovation</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam
        officia soluta magnam repellat enim eaque dolore nam illo et obcaecati
        mollitia, quae, necessitatibus ab dolorem velit, adipisci
      </p>
    </section>
  );
};

export default Hero;
