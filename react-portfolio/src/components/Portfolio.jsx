import React from 'react';
import Project from '../components/PortfolioContainer'; // Importing Project component from PortfolioContainer.js

// Array of project objects
const projects = [
  {
    id: 0,
    title: "Currency Converter",
    tech: "JavaScript, HTML, CSS",
    image: "../src/assets/currency-converter.png", // Image path (Note: relative paths might need adjustment)
    description: "Allows user to convert all available currencies, and switch the values for comparison.",
    repo: "https://github.com/markpcomer/Currency-Converter", // GitHub repository link
    live: "https://markpcomer.github.io/Currency-Converter/", // Live demo link
  },
  {
    id: 1,
    title: "Employee Tracker",
    tech: "MySQL, JavaScript, Inquirer.js, Node.js",
    image: "../src/assets/employee-tracker.png", // Image path (Note: relative paths might need adjustment)
    description: "Allows you to view and edit department, role, & employee databases.",
    repo: "https://github.com/markpcomer/sql-employee-tracker-cms", // GitHub repository link
    live: "Download from github, input schema & seed files into Dbeaver, and enter node.index.js in the terminal.", // Instructions for running live demo
  },
  {
    id: 2,
    title: "Notetaker App",
    tech: "JavaScript, UUID, Node.js, CSS",
    image: "../src/assets/note-taker-app.png", // Image path (Note: relative paths might need adjustment)
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "https://github.com/markpcomer/express.js-note-taker", // GitHub repository link
    live: "", // Live demo link (if applicable)
  },
  {
    id: 3,
    title: "Password Generator",
    tech: "JavaScript, HTML, CSS",
    image: "../src/assets/password-generator.png", // Image path (Note: relative paths might need adjustment)
    description: "After answering prompts, this app will generate a random password for the user.",
    repo: "https://github.com/markpcomer/password-generator", // GitHub repository link
    live: "", // Live demo link (if applicable)
  },
  {
    id: 4,
    title: "007 Quiz Game",
    tech: "JavaScript, HTML, CSS",
    image: "../src/assets/quiz-game.png", // Image path (Note: relative paths might need adjustment)
    description: "After answering questions, the user may input their initials, and have their score stored.",
    repo: "https://github.com/markpcomer/password-generator", // GitHub repository link
    live: "", // Live demo link (if applicable)
  },
  {
    id: 5,
    title: "Five Day Weather Dashboard",
    tech: "JavaScript, HTML, CSS",
    image: "../src/assets/weather-dashboard.png", // Image path (Note: relative paths might need adjustment)
    description: "After inputting their city, the user will receive the current day's weather, as well as the next five days' forecast.",
    repo: "https://github.com/markpcomer/weather-dashboard", // GitHub repository link
    live: "", // Live demo link (if applicable)
  },
];

function Portfolio() {
  return (
    <div>
      <p className='content is-medium'>Portfolio</p> {/* Heading or description */}
      <hr /> {/* Horizontal line for separation */}
      
      {/* Rendering Project component and passing projects array as props */}
      <Project projects={projects} />
    </div>
  );
}

export default Portfolio; // Exporting Portfolio component as default
