import React, { useState } from 'react';
import Navigation from "./NavTabs";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import '../index.css';


function Header() {
  const [currentPage, setCurrentPage] = useState("About");

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
        return <About />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
    <header>
        <h1>Mark Comer</h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        </header>
        <div className="main-content">
          <div className='section'>
          {renderPage()}
          </div>
        </div>
    </div>
  );
}

export default Header;

