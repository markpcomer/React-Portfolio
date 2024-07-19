// src/components/Navigation.jsx
import React from 'react';

const Navigation = (props) => {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <div className="nav-tabs">
      {tabs.map((tab) => (
        <a
          href={"#" + tab.toLowerCase()}
          key={tab}
          className={props.currentPage === tab ? "active" : ""}
          onClick={() => props.handlePageChange(tab)}
        >
          {tab}
        </a>
      ))}
    </div>
  );
};

// function Navigation(props) {
//   const tabs = ["About", "Portfolio", "Contact", "Resume"];

//   return (
//     <div style={styles.tabsContainer}>
//       {tabs.map((tab) => (
//         <a
//           href={"#" + tab.toLowerCase()}
//           key={tab}
//           style={props.currentPage === tab ? {...styles.tabItem, ...styles.activeTab} : styles.tabItem}
//           onClick={() => props.handlePageChange(tab)}
//         >
//           {tab}
//         </a>
//       ))}
//     </div>
//   );
// }



// function Navigation(props)  {
//   const tabs = ["About", "Portfolio", "Contact", "Resume"]
//   return (
//     <div className="tabs" style={styles.tabsContainer}>
//       <ul className="nav nav-tabs">
//       {tabs.map((tab) => (
//           <li
//             className={
//               props.currentPage === tab ? "nav-item is-active" : "nav-item"
//             }
//             key={tab}
//           >
//             <a
//               href={"#" + tab.toLowerCase()}
//               // Whenever a tab is clicked on,
//               // the current page is set through the handlePageChange props.
//               onClick={() => props.handlePageChange(tab)}
//               className={
//                 props.currentPage === tab ? "nav-link active" : "nav-link"
//               }
//             >
//               {tab}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
  

export default Navigation;
