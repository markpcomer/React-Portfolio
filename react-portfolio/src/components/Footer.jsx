import React from 'react';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';

// Styles defined for the footer component
const styles = {
  footerStyle: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '30px',
  },
  linkStyle: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '5px',
  },
  iconStyle: {
    fontSize: '1.5rem',
    verticalAlign: 'middle',
  },
};

// Functional component for the footer
function Footer() {
  return (
    <footer style={styles.footerStyle}>
      {/* Title section with the name */}
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Made by Mark Comer</h2>
      
      {/* List of social media links */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* GitHub link */}
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <a
            href="https://github.com/markpcomer"
            target="_blank"
            rel="noopener noreferrer"
            className="logo"
            style={{ ...styles.linkStyle }}
          >
            <VscGithubAlt style={{ ...styles.iconStyle }} />
          </a>
        </li>
        
        {/* LinkedIn link */}
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <a
            href="https://www.linkedin.com/in/markpcomer/"
            target="_blank"
            rel="noopener noreferrer"
            className="logo"
            style={{ ...styles.linkStyle }}
          >
            <AiOutlineLinkedin style={{ ...styles.iconStyle }} />
          </a>
        </li>
        
        {/* Facebook link */}
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <a
            href="https://www.facebook.com/mark.comer.330"
            target="_blank"
            rel="noopener noreferrer"
            className="logo"
            style={{ ...styles.linkStyle }}
          >
            <FaFacebookF style={{ ...styles.iconStyle }} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
