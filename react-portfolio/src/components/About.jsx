// src/pages/AboutMe.jsx
import React from 'react';

const styles = {
  container: {
    maxWidth: '800px',
    backgroundColor: 'aliceBlue',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  hr: {
    margin: '20px 0',
    border: 'none',
    borderBottom: '1px solid #ccc',
  },
  avatar: {
    width: '300px',
    height: '300px',
    marginBottom: '20px',
    borderRadius: '50%',
  },
  italicText: {
    fontStyle: 'italic',
    marginTop: '10px',
    marginBottom: '20px',
  },
  content: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
};

const AboutMe = () => {
  return (
    <div style={styles.container}>
      <p className="content">Full-Stack Web Developer</p>
      <hr style={styles.hr} />
      <img src="/src/assets/profile_pic.png" alt="avatar" style={styles.avatar} />
      <p style={styles.italicText}>
        I'm Mark, a recent Full-Stack Web Development graduate looking to begin a journey of 
        building robust, fascinating projects.
      </p>
      <p style={styles.content}>
        As a recent coding bootcamp graduate, being a full-stack web developer is incredibly rewarding. 
        I thrive on the creative freedom and technical challenges it brings, whether it's designing 
        user-friendly interfaces or building reliable back-end systems. Seeing a project evolve from 
        start to finish gives me a tremendous sense of achievement. Plus, staying updated with the latest 
        technologies keeps me engaged and constantly learning, which is both thrilling and fulfilling as I 
        begin my career in web development.
      </p>
    </div>
  );
};

export default AboutMe;



// import React from 'react';

// const AboutMe = () => {
//   return (
//       <div className='about-container'>
//           <p className="content is-medium">Full-Stack Web Developer</p>
//           <hr />
//           <img src="/src/assets/profile_pic.png"  alt="avatar" className="avatar" />
//           <p className="content is-italic mt-4">
//             I'm Mark, a recent Full-Stack Web Development graduate looking to begin a journey of 
//             building robust, fascinating projects.
//           </p>
//           <p className="content">
//           As a recent coding bootcamp graduate, being a full-stack web developer is incredibly rewarding. 
//           I thrive on the creative freedom and technical challenges it brings, whether it's designing 
//           user-friendly interfaces or building reliable back-end systems. Seeing a project evolve from 
//           start to finish gives me a tremendous sense of achievement. Plus, staying updated with the latest 
//           technologies keeps me engaged and constantly learning, which is both thrilling and fulfilling as I 
//           begin my career in web development.
//           </p>
//       </div>
//   );
// };

// export default AboutMe;






