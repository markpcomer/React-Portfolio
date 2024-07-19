import React from 'react';

// Styles object containing CSS styles for the component
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
      {/* Container for all project cards */}
      <div style={styles.projectContainer}>
        {/* Mapping through each project and creating a project card */}
        {props.projects.map((project) => (
          <div key={project.id} style={styles.projectCard}>
            {/* Container for each project card */}
            <div style={styles.cardContainer}>
              {/* Container for the project image */}
              <div style={styles.imageContainer}>
                {/* Link to the live demo site (if available) */}
                <a href={project.live} target='_blank' rel='noopener noreferrer'>
                  {/* Project screenshot */}
                  <img src={project.image} alt="Project Screenshot" style={styles.projectImage} />
                </a>
              </div>
              {/* Container for text content */}
              <div style={styles.textContainer}>
                {/* Project title */}
                <h2 style={styles.title}>{project.title}</h2>
                {/* Project description */}
                <p>{project.description}</p>
                {/* Languages/technologies used */}
                <div style={styles.languages}>
                  Languages: {project.tech}
                </div>
                {/* Container for project links */}
                <div style={styles.linkContainer}>
                  {/* Link to GitHub repository */}
                  <a href={project.repo} style={styles.link} target='_blank' rel='noopener noreferrer'>See the Repo</a>
                  {/* Link to live demo site (if available) */}
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

export default Project; // Exporting Project component as default
