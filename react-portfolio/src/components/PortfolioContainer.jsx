import React from 'react';

const styles = {
  projectContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  projectCard: {
    width: '50%',
    padding: '10px',
  },
  cardContainer: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
  },
  textContainer: {
    padding: '15px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  languages: {
    fontFamily: 'monospace',
  },
  linkContainer: {
    marginTop: '15px',
  },
  link: {
    marginRight: '10px',
  },
};

function Project(props) {
  return (
    <div>
      <div style={styles.projectContainer}>
        {props.projects.map((project) => (
          <div key={project.id} style={styles.projectCard}>
            <div style={styles.cardContainer}>
              <div style={styles.imageContainer}>
                <a href={project.live} target='_blank' rel='noopener noreferrer'>
                  <img src={project.image} alt="Project Screenshot" style={styles.projectImage} />
                </a>
              </div>
              <div style={styles.textContainer}>
                <h2 style={styles.title}>{project.title}</h2>
                <p>{project.description}</p>
                <div style={styles.languages}>
                  Languages: {project.tech}
                </div>
                <div style={styles.linkContainer}>
                  <a href={project.repo} style={styles.link} target='_blank' rel='noopener noreferrer'>See the Repo</a>
                  <a href={project.live} target='_blank' rel='noopener noreferrer'>See the live site</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;


// import React from 'react';

// function Project(props) {
//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row' }}>
//         {props.projects.map((project) => (
//           <div key={project.id} style={{ width: '50%', padding: '10px' }}>
//             <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
//               <div style={{ position: 'relative' }}>
//                 <a href={project.live} target='_blank' rel='noopener noreferrer'>
//                   <img src={project.image} alt="Project Screenshot" style={{ width: '100%', height: 'auto' }} />
//                 </a>
//               </div>
//               <div style={{ padding: '15px' }}>
//                 <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{project.title}</h2>
//                 <p style={{ marginBottom: '15px' }}>{project.description}</p>
//                 <div style={{ fontFamily: 'monospace' }}>
//                   Languages: {project.tech}
//                 </div>
//                 <div style={{ marginTop: '15px' }}>
//                   <a href={project.repo} target='_blank' rel='noopener noreferrer' style={{ marginRight: '10px' }}>See the Repo</a>
//                   <a href={project.live} target='_blank' rel='noopener noreferrer'>See the live site</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Project;


// import React from 'react';

// function Project(props) {
//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row' }}>
//         {props.projects.map((project) => (
//           <div key={project.id} style={{ width: '50%', padding: '10px' }}>
//             <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
//               <div style={{ position: 'relative' }}>
//                 <a href={project.live} target='_blank' rel='noopener noreferrer'>
//                   <img src={project.image} alt="Project Screenshot" style={{ width: '100%', height: 'auto' }} />
//                 </a>
//               </div>
//               <div style={{ padding: '15px' }}>
//                 <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{project.title}</h2>
//                 <p style={{ marginBottom: '15px' }}>{project.description}</p>
//                 <div style={{ fontFamily: 'monospace' }}>
//                   Languages: {project.tech}
//                 </div>
//                 <div style={{ marginTop: '15px' }}>
//                   <a href={project.repo} target='_blank' rel='noopener noreferrer' style={{ marginRight: '10px' }}>See the Repo</a>
//                   <a href={project.live} target='_blank' rel='noopener noreferrer'>See the live site</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Project;

