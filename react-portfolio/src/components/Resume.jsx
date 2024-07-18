// src/pages/Resume.jsx
import React from 'react';

function Resume() {
  return (
    <div className='columns'>
      <div className='column'>
        <p className='content is-medium'>Resume</p>
        <hr />

        <a className='button is-primary' 
            href={"/mark-comer-resume.pdf"}
            target='_blank' rel='noreferrer'
            >
              <span className='icon'>
                <i className='fas fa-download'></i>
              </span>
              <span>Download My Resume</span>
            </a>
      </div>
      <div className='column'>
        <p className='content is-medium'>Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>JQuery, Bootstrap, Inquirer</li>
            <li>React, Express, SQL</li>
            <li>Markdown</li>
            <li>Git</li>
            <li>Github Repo Management</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume;

// const Resume = () => {
//   return (
//     <section>
//       <h2>Resume</h2>
//       {/* <a href="path/to/resume.pdf" download>Download Resume</a> */}
//       <h3>Proficiencies</h3>
//       <ul>
//         <li>JavaScript</li>
//         <li>React</li>
//         <li>HTML & CSS</li>
//         <li>Node.js</li>
//         <li>Express</li>
//         <li>MongoDB</li>
//         {/* Add more proficiencies as needed */}
//       </ul>
//     </section>
//   );
// };

// export default Resume;


// import React from "react";

// function Resume() {
//   return (
//     <div className="columns">
//       <div className="column">
//         <p className="content is-medium">Résumé</p>
//         <hr />

//         <a
//           className="button is-primary"
//           href={process.env.PUBLIC_URL + "/emily-mayeski-resume.pdf"}
//           target="_blank" rel="noreferrer"
//         >
//           <span className="icon">
//             <i className="fas fa-download"></i>
//           </span>
//           <span>Download My Resume</span>
//         </a>
//       </div>
//       <div className="column">
//         <p className="content is-medium">Skills</p>
//         <hr />
//         <ul>
//             <li>HTML, CSS, Javascript</li>
//             <li>OpenAPI, YAML, JSON</li>
//             <li>React, Next.js, Hugo</li>
//             <li>Markdown</li>
//             <li>Git</li>
//             <li>Github Repo Management</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Resume;


// import React from "react";

// function Resume() {
//   return (
//     <div>
//       <section id="welcome-section" className="download-intro">
//         <div className="flex-row">
//           <h2 className="section-title primary-border">My Resume</h2>
//         </div>
//         <div className="flex-row">
//           <div className="download-info">
//             <div className="download-text">
//               <a href={myResume} className="download-logo" download>
//                 {/* <BsCloudDownload /> */}
//               </a>
//               <p>
//                 Please feel free to check out my list of Developer
//                 Proficiencies!
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* // This is the resume language */}
//       <section id="home-page-body" className="resume-body">
//         <div className="article column1">
//           <p className="column-title">Font-End Tech</p>
//           <p className="column-text">
//             <ul>
//               <li className="logo">
//                 <MdFoundation />
//               </li>
//               <li>HTML5</li>
//               <li>CSS</li>
//               <li>JavaScript</li>
//               <li>APIs</li>
//               <li>Bootstrap</li>
//               <li>GIT</li>
//             </ul>
//           </p>
//         </div>

//         <div className="article column2">
//           {/* <p><img src="./assets/images/streamline-icon-ai-robot-waiter@48x48.PNG"></p> */}

//           <p className="column-title">Back-End Tech</p>
//           <p className="column-text">
//             <ul>
//               <li className="logo">
//                 <GrTechnology />
//               </li>
//               <li>Node.Js</li>
//               <li>Jest</li>
//               <li>Express.js</li>
//               <li>MySQL</li>
//               <li>Sequelize</li>
//               <li>Object-Relational Mapping(ORM)</li>
//               <li>Model-View-Controller (MVC)</li>
//             </ul>
//           </p>
//         </div>
//         <div className="article column3">
//           {/* <p><img src="./assets/images/streamline-icon-soft-drinks-glass-ice@48x48.PNG"></p> */}
//           <p className="column-title">Performance Tech</p>
//           <p className="column-text">
//             <ul>
//               <li className="logo">
//                 <GrDocumentPerformance />
//               </li>
//               <li>NoSQL</li>
//               <li>Progressive Web Applications (PWA)</li>
//               <li>MongoDB</li>
//               <li>Mongoose</li>
//               <li>GraphQL</li>
//               <li>React</li>
//               <li>MERN</li>
//               <li>State</li>
//             </ul>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Resume;



// // import React from "react";

// // function Resume() {
// //     return (
// //         <div>
// //             <section id="resume-container" className="">
// //                 <div className="flex-row">
// //                     <h2 className="section-title primary-border">Resume</h2>
// //                 </div>
// //                 <div className="flex-row">
// //                     <div className="resume-info">
// //                         <div className="resume-text">
// //                             <p>Download resume</p>
// //                             {/* Resume link here*/}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>
// //             <section id="about-body" className="resume-body">
// //                 <div className="article skills-column1">
// //                     <h4 className="column-title">Front End</h4>
// //                     <div className="column-skills">
// //                         <ul>
// //                             <li>Front End Skills list</li>
// //                         </ul>
// //                     </div>
// //                 </div>
// //                 <div className="article skills-column2">
// //                     <h4 className="column-title">Backend Skills </h4>
// //                     <div className="column-skills">
// //                         <ul>
// //                             <li>Back End Skills List</li>
// //                         </ul>
// //                     </div>
// //                 </div>
// //                 <div className="article skills-column3">
// //                     <h4 className="column-title">Additional Skills</h4>
// //                     <div className="column-skills">
// //                         <ul>
// //                             <li>Additional Skills List</li>
// //                         </ul>
// //                     </div>
// //                 </div>
// //             </section>
// //         </div>
// //     )
// // }

// // export default Resume;