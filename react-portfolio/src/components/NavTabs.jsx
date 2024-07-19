import React from 'react';

const Navigation = (props) => {
  // Array of tabs for navigation
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <div className="nav-tabs"> {/* Container for navigation tabs */}
      {/* Mapping through each tab to create navigation links */}
      {tabs.map((tab) => (
        <a
          href={"#" + tab.toLowerCase()} 
          key={tab} 
          className={props.currentPage === tab ? "active" : ""} 
          onClick={() => props.handlePageChange(tab)} 
        >
          {tab} {/* Displaying tab name */}
        </a>
      ))}
    </div>
  );
};

export default Navigation; // Exporting Navigation component as default

