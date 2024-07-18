
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Navigation from "./NavTabs";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

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

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <a className='navbar-item'
          rel='noreferrer'
          target='_blank' 
          href="https://github.com/markpcomer?tab=repositories">
            <span className='content is-large'>Mark Comer</span>
          </a>
        </div>
      </nav>
      <Navigation
        currentPage = {currentPage}
        handlePageChange = {handlePageChange} 
      />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

// const Header = () => {
//   return (
//     <header>
//       <section className="header-container">
//         {/*
//         <section className="name-avatar">
//           <img src="/src/assets/profile-pic.png" height="100" alt="avatar" className="avatar" />
//           <h1>Mark Comer</h1>
//         </section>
//        */}
//         <nav className='navbar'>
        
//       <nav className="navbar">
//         <div className="navbar-brand">
//           <a
//             className="navbar-item"
//             rel="noreferrer"
//             target="_blank"
//             href="https://github.com/markpcomer?tab=repositories"
//           >
//             <span className="content is-large">Mark Comer</span>
//           </a>
//         </div>
//       </nav>
      
//           <ul>
//           <li><Link to="/aboutme">About Me</Link></li>
//             <li><Link to="/portfolio">Portfolio</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             <li><Link to="/resume">Resume</Link></li>
//           </ul>
//         </nav>
//       </section>
//     </header>
//   );
// };

export default Header;  // Export the Header component

