import React from "react";
import logo from "../assets/PMG original.png";

const RegisterEvents = () => {
  return (
    <section className="register-events" id="register-events">
      <h1 style={{ textAlign: "center" }} className="neon">
        Works
      </h1>
      <div className="glows">
        <a target="_blank" href="#" className="glow">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </section>
  );
};

export default RegisterEvents;