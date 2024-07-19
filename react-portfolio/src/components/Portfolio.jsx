
import React from 'react';
import Project from '../components/PortfolioContainer';

const projects = [
  {
    id: 0,
    title: "Currency Converter",
    tech: "JavaScript, HTML, CSS",
    image: "../src/assets/currency-converter.png",
    description: "Allows user to convert all available currencies, and the switch the values for comparison.",
    repo: "https://github.com/markpcomer/Currency-Converter",
    live: "https://markpcomer.github.io/Currency-Converter/",
  },
  {
    id: 1,
    title: "Employee Tracker",
    tech: "MySQL, JavaScript, Inquirer.js, Node.js",
    image: "../src/assets/employee-tracker.png",
    description: "Allows you to view and edit department, role, & employee databases.",
    repo: "https://github.com/markpcomer/sql-employee-tracker-cms",
    live: "Download from github, input schema & seed files into Dbeaver, and enter node.index.js in the terminal.",
  },
  {
    id: 2,
    title: "Notetaker App",
    tech: "JavaScript, UUID, Node.js, CSS",
    image: "../src/assets/note-taker-app.png",
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "https://github.com/markpcomer/express.js-note-taker",
    live: "",
  },
  {
    id: 3,
    title: "Password Generator",
    tech: "JavaScript, HTML, CSS",
    image: "../src/assets/password-generator.png",
    description: "After answering prompts, this app will generate a random password for the user.",
    repo: "https://github.com/markpcomer/password-generator",
    live: ""
  },
  {
    id: 4,
    title: "007 Quiz Game",
    tech: "JavaScript, HTML, CSS",
    image: "../src/assets/quiz-game.png",
    description: "After answering questions, the user may input their initials, and have their score stored.",
    repo: "https://github.com/markpcomer/password-generator",
    live: ""
  },
  {
    id: 5,
    title: "Five Day Weather Dashboard",
    tech: "JavaScript, HTML, CSS",
    image: "../src/assets/weather-dashboard.png",
    description: "After inputting their city, the user will receive the current day's weather, as well as the next five days' forecast .",
    repo: "https://github.com/markpcomer/weather-dashboard",
    live: ""
  },
];

function Portfolio() {
  return (
    <div>
      <p className='content is-medium'>Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  )
}

export default Portfolio;

