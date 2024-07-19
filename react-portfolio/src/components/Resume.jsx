import React from "react";

// Styles object containing CSS styles for the component
const styles = {
  columnsContainer: {
    display: "flex",
    justifyContent: "space-between", // Aligns columns with space between them
  },
  column: {
    flex: "1", // Each column takes equal space
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f0f0f0",
    margin: "10px",
    textAlign: "center", // Center-aligns content
  },
  contentHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  skillsList: {
    textAlign: "left", // Left-aligns list items
    listStyleType: "none", // Removes default list styling
    padding: 0,
  },
};

function About() {
  return (
    <div style={styles.columnsContainer}>
      {/* Left Column - Resume */}
      <div style={styles.column}>
        <p style={styles.contentHeading}>Resume</p> {/* Heading for resume section */}
        <hr /> {/* Horizontal line for separation */}
        <a
          className="button is-primary"
          href={"/mark-comer-resume.pdf"} 
          target="_blank" rel="noreferrer" 
        >
          <span className="icon">
            <i className="fas fa-download"></i> {/* Download icon */}
          </span>
          <span>Download My Resume</span> {/* Text for download link */}
        </a>
      </div>

      {/* Right Column - Skills */}
      <div style={styles.column}>
        <p style={styles.contentHeading}>Skills</p> {/* Heading for skills section */}
        <hr /> {/* Horizontal line for separation */}
        <ul style={styles.skillsList}>
          {/* List of skills */}
          <li>HTML, CSS, Javascript</li>
          <li>JQuery, Bootstrap, Inquirer</li>
          <li>React, Express, SQL</li>
          <li>Markdown</li>
          <li>Git</li>
          <li>Github Repo Management</li>
        </ul>
      </div>
    </div>
  );
}

export default About; // Exporting About component as default
