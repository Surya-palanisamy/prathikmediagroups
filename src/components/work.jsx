import React from "react";
import video from "../assets/video editing.jpg";
import web from "../assets/web development.jpg";
import poster from "../assets/poster.png";
import content from "../assets/content.jpeg";
import ecom from "../assets/e-commerce.png";
import music from "../assets/music.png";

const Works = () => {
  return (
    <div className='flex'>
      <section className='register-events' id='register-events'>
        <h1 style={{ textAlign: "center" }} className='neon'>
          Works
        </h1>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={video} alt='logo' />
          </a>
        </div>
        <p>video editing</p>
      </section>
      <section className='register-events' id='register-events'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={web} alt='logo' />
          </a>
        </div>
        <p>web development</p>
      </section>
      <section className='register-events' id='register-events'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={poster} alt='logo' />
          </a>
        </div>
      </section>
      <section className='register-events' id='register-events'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={content} alt='logo' />
          </a>
        </div>
      </section>
      <section className='register-events' id='register-events'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={ecom} alt='logo' />
          </a>
        </div>
      </section>
      <section className='register-events' id='register-events'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={music} alt='logo' />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Works;
