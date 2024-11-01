import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const loadParticles = async () => {
      if (typeof window !== "undefined" && !window.particlesJS) {
        await import("particles.js");
      }

      if (window.particlesJS && particlesRef.current) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#e19500" },
            shape: {
              type: ["star", "circle"],
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 5,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: { events: {}, modes: {} },
          retina_detect: true,
        });
      }
    };

    loadParticles();

    return () => {
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, []);

  return <div id='particles-js' ref={particlesRef}></div>;
};

export default ParticlesBackground;
