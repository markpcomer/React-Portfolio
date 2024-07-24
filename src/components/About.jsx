import React from 'react';

// Define styles object to hold all CSS styles
const styles = {
  // Container styles
  container: {
    maxWidth: '800px',
    backgroundColor: 'aliceBlue', // Background color
    margin: '0 auto', // Center align horizontally
    padding: '20px',
    backgroundColor: '#fff', // Overriding previous background, should be one or the other
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Box shadow for container
    textAlign: 'center', // Center align text inside container
  },
  // Heading styles
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  // Horizontal rule styles
  hr: {
    margin: '20px 0', // Top and bottom margin
    border: 'none', // No border
    borderBottom: '1px solid #ccc', // Bottom border with color
  },
  // Avatar image styles
  avatar: {
    width: '300px',
    height: '300px',
    marginBottom: '20px',
    borderRadius: '50%', // Rounded corners for circular avatar
  },
  // Italic text styles
  italicText: {
    fontStyle: 'italic',
    marginTop: '10px',
    marginBottom: '20px',
  },
  // Regular content text styles
  content: {
    fontSize: '16px',
    lineHeight: '1.6', // Line height for better readability
  },
};

// Functional component AboutMe
const AboutMe = () => {
  return (
    // Container div with inline styles applied from styles object
    <div style={styles.container}>
      {/* Static content */}
      <p className="content">Full-Stack Web Developer</p>
      {/* Horizontal rule with styles applied */}
      <hr style={styles.hr} />
      {/* Avatar image with styles applied */}
      <img src="/assets/profile_pic.png" alt="avatar" style={styles.avatar} />
      {/* Italic text paragraph with styles applied */}
      <p style={styles.italicText}>
        I'm Mark, a recent Full-Stack Web Development graduate looking to begin a journey of 
        building robust, fascinating projects.
      </p>
      {/* Regular content paragraph with styles applied */}
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

// Export AboutMe component as default
export default AboutMe;
