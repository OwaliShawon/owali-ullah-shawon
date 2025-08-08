import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import Projects from '../../assets/data/projects.json';
import ProjectItem from '../ProjectItem/ProjectItem';
import './Project.css';

const Project = () => {
  const [projectCategories, setProjectCategories] = useState({});
  const [showAll, setShowAll] = useState(false); // State to toggle between showing 6 or all projects

  useEffect(() => {
    setProjectCategories(Projects); // Load all project categories dynamically
    Aos.init({ duration: 2000 });
  }, []);

  const renderProjects = (category) => {
    const projects = projectCategories[category] || [];
    const visibleProjects = showAll ? projects : projects.slice(0, 6); // Show all or first 6 projects

    return (
      <div className="row">
        {visibleProjects.map((projectInfo, index) => (
          <ProjectItem key={index} projectInfo={projectInfo} />
        ))}
        {projects.length > 6 && ( // Show the button only if there are more than 6 projects
          <div className="col-12 text-center mt-3">
            <button className="btn btn-primary" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'Show All'}
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <section data-aos="fade-up" className="project section" id="project">
      <div className="container">
        <div className="section-title-text mb-2">
          <h1 className="dark-color">Works</h1>
        </div>
        {/* Categories of projects section */}
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          {Object.keys(Projects).map((category, index) => (
            <li className="nav-item" role="presentation" key={index}>
              <a
                className={`nav-link ${index === 0 ? 'active' : ''}`}
                id={`pills-${category.toLowerCase()}-tab`}
                data-bs-toggle="pill"
                href={`#pills-${category.toLowerCase()}`}
                role="tab"
                aria-controls={`pills-${category.toLowerCase()}`}
                aria-selected={index === 0 ? 'true' : 'false'}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
        {/* Contents of categories */}
        <div className="tab-content" id="pills-tabContent">
          {Object.keys(Projects).map((category, index) => (
            <div
              key={index}
              className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
              id={`pills-${category.toLowerCase()}`}
              role="tabpanel"
              aria-labelledby={`pills-${category.toLowerCase()}-tab`}
            >
              {renderProjects(category)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
