import React from "react";

const styles = {
  columnsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  column: {
    flex: "1",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f0f0f0",
    margin: "10px",
    textAlign: "center",
  },
  contentHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  skillsList: {
    textAlign: "left",
    listStyleType: "none",
    padding: 0,
  },
};

function About() {
  return (
    <div style={styles.columnsContainer}>
      {/* Left Column - Resume */}
      <div style={styles.column}>
        <p style={styles.contentHeading}>Resume</p>
        <hr />
        <a
          className="button is-primary"
          href={"/mark-comer-resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>

      {/* Right Column - Skills */}
      <div style={styles.column}>
        <p style={styles.contentHeading}>Skills</p>
        <hr />
        <ul style={styles.skillsList}>
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

export default About;


