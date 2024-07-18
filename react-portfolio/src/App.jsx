import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Navigation from "./components/NavTabs";
// import Project from "./components/PortfolioContainer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export default App;



// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="header" element={<Header />} />
//         <Route path="footer" element={<Footer />} />
//         <Route />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/aboutme" element={<About />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/resume" element={<Resume />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }


// import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div>
//       <Header></Header>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import Header from "../src/components/Header";
// import About from "../src/components/About";
// import Contact from "../src/components/Contact";
// import Portfolio from "../src/components/Portfolio";
// import Resume from "../src/components/Resume";
// import Footer from "../src/components/Footer";
// import "./App.css";

// function App() {
//   const [currentTab, handleTabChange] = useState("about");

//   const renderTab = () => {
//     if (currentTab === "About") {
//       return <About />;
//     }
//     if (currentTab === "Contact") {
//       return <Contact />;
//     }
//     if (currentTab === "Portfolio") {
//       return <Portfolio />;
//     }
//     if (currentTab === "Resume") {
//       return <Resume />;
//     }
//     return <About />;
//   };

//   return (
//     <>
//         <title>Mark Comer's Portfolio | {currentTab} </title>
//       ;
//       <Header
//         currentTab={currentTab}
//         handleTabChange={handleTabChange}
//       ></Header>
//       <main>{renderTab()}</main>
//       <Footer></Footer>
//     </>
//   );
// }

// export default App;






// import PortfolioContainer from "./components/PortfolioContainer";


// const App = () => <PortfolioContainer />;

// export default App;
