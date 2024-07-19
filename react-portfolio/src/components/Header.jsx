import React, { useState } from 'react';
import Navigation from "./NavTabs";  // Importing Navigation component from NavTabs.js
import About from "./About";         // Importing About component from About.js
import Contact from "./Contact";     // Importing Contact component from Contact.js
import Portfolio from "./Portfolio"; // Importing Portfolio component from Portfolio.js
import Resume from "./Resume";       // Importing Resume component from Resume.js
import '../index.css';               // Importing CSS styles from index.css

function Header() {
  // State to manage the currently active page
  const [currentPage, setCurrentPage] = useState("About");

  // Function to render the current page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />; // Default to About page if currentPage is undefined
    }
  };

  // Function to handle page changes triggered by Navigation component
  const handlePageChange = (page) => {
    setCurrentPage(page); // Update currentPage state based on user selection
  };

  return (
    <div>
      <header>
        <h1>Mark Comer</h1> {/* Main heading */}
        {/* Navigation component to switch between pages */}
        <Navigation
          currentPage={currentPage} // Pass current active page as prop
          handlePageChange={handlePageChange} // Pass function to handle page changes as prop
        />
      </header>
      <div className="main-content">
        <div className='section'>
          {/* Render the current page based on currentPage state */}
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default Header; // Export Header component as default
