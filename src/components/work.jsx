import React from "react";
import video from "../assets/video editing.jpg";
import web from "../assets/web development.jpg";
import poster from "../assets/poster.png";
import content from "../assets/content.jpeg";
import ecom from "../assets/e-commerce.png";
import music from "../assets/music.png";
import flim from "../assets/flim.jpg";


const Works = () => {
  return (
    <div className='flex'>
      <section className='register' id='register'>
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
      <section className='register' id='register'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={web} alt='logo' />
          </a>
        </div>
        <p>web development</p>
      </section>
      <section className='register' id='register'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={poster} alt='logo' />
          </a>
        </div>
        <p>Poster making</p>
      </section>
      <section className='register' id='register'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={content} alt='logo' />
          </a>
        </div>
        <p>content writing</p>
      </section>
      <section className='register' id='register'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={ecom} alt='logo' />
          </a>
        </div>
        <p>E com</p>
      </section>
      <section className='register' id='register'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={music} alt='logo' />
          </a>
        </div>
        <p>music and instrmentel studio</p>
      </section>
      <section className='register' id='register'>
        <div className='glows'>
          <a target='_blank' href='#' className='glow'>
            <img src={flim} alt='logo' />
          </a>
        </div>
        <p>flim and short flim making 🎬✨ </p>
      </section>
    </div>
  );
};

export default Works;
