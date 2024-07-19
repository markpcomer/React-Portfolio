import React from 'react';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';

const styles = {
  footerStyle: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '30px',
  },
  linkStyle: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '5px',
  },
  iconStyle: {
    fontSize: '1.5rem',
    verticalAlign: 'middle',
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Made by Mark Comer</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <a
            href="https://github.com/markpcomer"
            target="_blank"
            rel="noopener noreferrer"
            className="logo"
            style={{ ...styles.linkStyle }}
          >
            <VscGithubAlt style={{ ...styles.iconStyle }} />
          </a>
        </li>
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <a
            href="https://www.linkedin.com/in/markpcomer/"
            target="_blank"
            rel="noopener noreferrer"
            className="logo"
            style={{ ...styles.linkStyle }}
          >
            <AiOutlineLinkedin style={{ ...styles.iconStyle }} />
          </a>
        </li>
        <li style={{ display: 'inline-block', margin: '0 10px' }}>
          <a
            href="https://www.facebook.com/mark.comer.330"
            target="_blank"
            rel="noopener noreferrer"
            className="logo"
            style={{ ...styles.linkStyle }}
          >
            <FaFacebookF style={{ ...styles.iconStyle }} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;




// import React from 'react';
// import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
// import { VscGithubAlt } from 'react-icons/vsc';
// import { AiOutlineLinkedin } from 'react-icons/ai';

// const styles = {
//   footerStyle: {
//     backgroundColor: '#333',
//     color: 'white',
//     textAlign: 'center',
//     padding: '20px',
//     marginTop: '30px',
//   },
//   linkStyle: {
//     color: 'white',
//     textDecoration: 'none',
//     marginLeft: '5px',
//   },
//   iconStyle: {
//     fontSize: '1.5rem',
//     verticalAlign: 'middle',
//   },
// };

// function Footer() {
//   return (
//     <footer style={styles.footerStyle}>
//       <h2>Made by Mark Comer</h2>
//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         <li style={{ display: 'inline-block', margin: '0 10px' }}>
//           <a
//             href="https://github.com/markpcomer"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="logo"
//             style={styles.linkStyle}
//           >
//             <VscGithubAlt style={styles.iconStyle} />
//           </a>
//         </li>
//         <li style={{ display: 'inline-block', margin: '0 10px' }}>
//           <a
//             href="https://www.linkedin.com/in/markpcomer/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="logo"
//             style={styles.linkStyle}
//           >
//             <AiOutlineLinkedin style={styles.iconStyle} />
//           </a>
//         </li>
//         <li style={{ display: 'inline-block', margin: '0 10px' }}>
//           <a
//             href="https://www.facebook.com/mark.comer.330"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="logo"
//             style={styles.linkStyle}
//           >
//             <FaFacebookF style={styles.iconStyle} />
//           </a>
//         </li>
//       </ul>
//     </footer>
//   );
// }

// export default Footer;


// // import React from 'react';
// // import { VscGithubAlt } from "react-icons/vsc";
// // import { AiOutlineLinkedin } from "react-icons/ai";
// // import { FaFacebookF } from "react-icons/fa";

// // const styles = {
// //   footerStyle: {
// //     backgroundColor: '#333',
// //     color: 'white',
// //     textAlign: 'center',
// //     padding: '20px',
// //     marginTop: '30px',
// //   },
// //   linkStyle: {
// //     color: 'white',
// //     textDecoration: 'none',
// //     marginLeft: '5px',
// //   },
// //   iconStyle: {
// //     fontSize: '1.5rem',
// //     verticalAlign: 'middle',
// //   },
// // };

// // function Footer() {
// //   return (
// //     <footer>
// //       <h2>Made by Mark Comer</h2>
// //       <p>
// //         <ul>
// //           <a href="https://github.com/markpcomer">
// //             <li className="logo">
// //               <VscGithubAlt />
// //             </li>
// //           </a>
// //           <a href="https://www.linkedin.com/in/markpcomer/">
// //             <li className="logo">
// //               <AiOutlineLinkedin />
// //             </li>
// //           </a>
// //           <a href="https://www.facebook.com/mark.comer.330">
// //             <li className="logo">
// //               <FaFacebookF />
// //             </li>
// //           </a>
// //         </ul>
// //       </p>
// //     </footer>
// //   );
// // }

// // export default Footer;
