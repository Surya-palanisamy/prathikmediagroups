// src/components/Footer.jsx
import React from "react";
import mailIcon from "../assets/mail.png";
import personIcon from "../assets/person.png";
import phoneIcon from "../assets/phone.png";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="contact-card">
        <p style={{ color: "gold", textAlign: "center", fontSize: "x-large" }}>
          CONTACT
        </p>
        <div className="profile">
          <a href="mailto:prathikUtters@gmail.com" style={{ color: "gold" }}>
            <img src={mailIcon} alt="mail image" />
            PrathikUtters@gmail.com
          </a>
          <br />
          <p style={{ color: "gold" }}>
            <img src={personIcon} alt="person image" /> prathik
          </p>
          <a href="tel:+919344935739" style={{ color: "gold" }}>
            <img src={phoneIcon} alt="phone image" /> 9344935739
          </a>
        </div>
        <br />
        <div className="address">
          <p style={{ color: "gold" }}>Location</p>
          <br />
          <p style={{ color: "gold" }}>Tambaram,</p>
          <p style={{ color: "gold" }}>Chennai - 600127</p>
        </div>
        <div className="social-handles">
          <div className="lync">
            <div className="cnn">
              <a target="_blank" href="">
                <img
                  src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v1.png"
                  alt="Instagram"
                />
              </a>
              <a target="_blank" href="">
                <img
                  src="https://img.icons8.com/material-outlined/48/000000/facebook.png"
                  alt="Facebook"
                />
              </a>
              <a target="_blank" href="">
                <img
                  src="https://img.icons8.com/material-outlined/48/000000/linkedin--v1.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
