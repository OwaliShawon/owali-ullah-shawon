import React, { useEffect, useState } from 'react';
import Projects from '../../assets/data/projects.json';
import ProjectItem from '../ProjectItem/ProjectItem';
import './Project.css';
import ShowToggle from '../common/ShowToggle';
import SectionTitle from '../common/SectionTitle';

const Project = () => {
  const [projectCategories, setProjectCategories] = useState({});
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setProjectCategories(Projects);
  }, []);

  const renderProjects = (category) => {
    const projects = projectCategories[category] || [];
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    return (
      <div className="row">
        {visibleProjects.map((projectInfo, index) => (
          <ProjectItem key={index} projectInfo={projectInfo} />
        ))}
        <div className="col-12">
          <ShowToggle
            totalCount={projects.length}
            threshold={6}
            showAll={showAll}
            onToggle={() => setShowAll(!showAll)}
            className="text-center mt-4"
          />
        </div>
      </div>
    );
  };

  return (
    <section data-aos="fade-up" className="project section" id="project">
      <div className="container">
        <SectionTitle>Works</SectionTitle>
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
