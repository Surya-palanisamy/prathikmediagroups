import React, { useState, useEffect } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    toggleHamburgerIcon();
    toggleContentBlur();
  };

  const closeNav = () => {
    setIsNavOpen(false);
    resetHamburgerIcon();
    removeContentBlur();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".header-nav") &&
        !event.target.closest(".hamburger")
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleHamburgerIcon = () => {
    const spans = document.querySelectorAll(".hamburger span");
    spans.forEach((span, index) => {
      span.classList.toggle(`close-${index + 1}`);
    });
  };

  const resetHamburgerIcon = () => {
    const spans = document.querySelectorAll(".hamburger span");
    spans.forEach((span, index) => {
      span.classList.remove(`close-${index + 1}`);
    });
  };

  const toggleContentBlur = () => {
    document.body.classList.toggle("content-blur");
  };

  const removeContentBlur = () => {
    document.body.classList.remove("content-blur");
  };

  return (
    <>
      <nav className='header-nav'>
        <div className='nav-buttons'>
          <a href='#hero' className='nav-btn'>
            Home
          </a>
          <a href='#about-us' className='nav-btn'>
            About
          </a>
          <a href='#register-events' className='nav-btn'>
            Works
          </a>
          <a href='#footer' className='nav-btn'>
            Contact Us
          </a>
        </div>
      </nav>
      <div className={`nav-buttons-mobile ${isNavOpen ? "" : "hidden-nav"}`}>
        <a href='#hero' className='nav-btn' onClick={closeNav}>
          Home
        </a>
        <a href='#about-us' className='nav-btn' onClick={closeNav}>
          About
        </a>
        <a href='#register-events' className='nav-btn' onClick={closeNav}>
          Events
        </a>
        <a href='#footer' className='nav-btn' onClick={closeNav}>
          Contact Us
        </a>
      </div>
      <div className='hamburger' onClick={toggleNav}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>
    </>
  );
};

export default Header;
