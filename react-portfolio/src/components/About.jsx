// src/pages/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
      <div>
          <p className="content is-medium">Full-Stack Web Developer</p>
          <hr />
          <img src="/src/assets/profile_pic.png"  alt="avatar" className="avatar" />
          <p className="content is-italic mt-4">
            I'm Mark, a recent Full-Stack Web Development graduate looking to begin a journey of 
            building robust, fascinating projects.
          </p>
          <p className="content">
          As a recent coding bootcamp graduate, being a full-stack web developer is incredibly rewarding. 
          I thrive on the creative freedom and technical challenges it brings, whether it's designing 
          user-friendly interfaces or building reliable back-end systems. Seeing a project evolve from 
          start to finish gives me a tremendous sense of achievement. Plus, staying updated with the latest 
          technologies keeps me engaged and constantly learning, which is both thrilling and fulfilling as I 
          begin my career in web development.
          </p>
      </div>

    // <section className="name-avatar">
    //   <img src="/src/assets/profile_pic.png"  alt="avatar" className="avatar" />

    // </section>
    //  <section className="aboutContainer">
    //     <h2 className="aboutTitle">About Me</h2>

    //     <p>
    //       Hi. I'm Mark. More to tell later...
    //     </p>
    //   </section></>
  );
};

export default AboutMe;






