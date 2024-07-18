
import React from 'react';
import Project from '../components/PortfolioContainer';

const projects = [
  {
    id: 0,
    title: "Currency Converter",
    tech: "JavaScript, HTML, CSS",
    image: "../assets/currency-converter.png",
    description: "Allows user to convert all available currencies, and the switch the values for comparison.",
    repo: "https://github.com/markpcomer/Currency-Converter",
    live: "https://markpcomer.github.io/Currency-Converter/",
  },
  {
    id: 1,
    title: "Employee Tracker",
    tech: "MySQL, JavaScript, Inquirer.js, Node.js",
    image: "../assets/employee-tracker.png",
    description: "Allows you to view and edit department, role, & employee databases.",
    repo: "https://github.com/markpcomer/sql-employee-tracker-cms",
    live: "Download from github, input schema & seed files into Dbeaver, and enter node.index.js in the terminal.",
  },
  {
    id: 2,
    title: "Notetaker App",
    tech: "JavaScript, UUID, Node.js, CSS",
    image: "../assets/note-taker-app.png",
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "hhttps://github.com/markpcomer/express.js-note-taker",
    live: "http://localhost:3001/notes",
  },
  {
    id: 3,
    title: "Password Generator",
    tech: "JavaScript, HTML, CSS",
    image: "../assets/password-generator.png",
    description: "After answering prompts, this app will generate a random password for the user.",
    repo: "https://github.com/markpcomer/password-generator",
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


// const projects = [
//   {
//     title: 'Workout Tracker',
//     // image: WorkoutTrackerimg,
//     deployedUrl: 'https://paulrusz.github.io/Group-Project1/',
//     repoUrl: 'https://github.com/emsim11/Group-Project2'
//   },
//   {
//     title: 'Sql',
//     // image: Image1,
//     deployedUrl: '',
//     repoUrl: "https://github.com/nybrasil/HW12--SQL-Employee-Tracker"
//     },
//     {
//       title: 'E-Commerce Back-End',
//       // image: Image2,
//       deployedUrl: "",
//       repoUrl: "https://github.com/nybrasil/HW13-E-Commerce-Back-End"
//       },

//       {
//         title: 'Work Day Schedule',
//         // image: Image3,
//         deployedUrl: "https://nybrasil.github.io/HW5/",
//         repoUrl: "https://github.com/nybrasil/HW5"
//         },
//         {
//           title: 'Tech-Blog',
//           // image: Image4,
//           deployedUrl: "https://hw14-tech-blog-4.onrender.com",
//           repoUrl: "https://github.com/nybrasil/HW14-Tech-Blog"
//           },
// ];

// const Portfolio = () => {
//   return (
//     <section className='portfolioContainer'>
//       <h2>Portfolio</h2>
//     <div className='projectContainer'>

//       {projects.map((project, index) => (
//         <Project 
//           key={index} 
//           title={project.title} 
//           image={project.image} 
//           deployedUrl={project.deployedUrl} 
//           repoUrl={project.repoUrl} 
//         />
//       ))}
//       </div>
//     </section>
//   );
// };

export default Portfolio;

