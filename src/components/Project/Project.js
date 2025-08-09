import React, { useEffect, useState } from 'react';
import Projects from '../../assets/data/projects.json';
import ProjectItem from '../ProjectItem/ProjectItem';
import './Project.css';
import ShowToggle from '../common/ShowToggle';
import SectionTitle from '../common/SectionTitle';
import { TabsNav, TabsPanels } from '../common/Tabs';

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
        <SectionTitle number={4}>Works</SectionTitle>
        <TabsNav
          categories={Object.keys(Projects).map((key) => ({
            key,
            label:
              key.toLowerCase() === 'wordpress'
                ? 'WordPress'
                : key.replace(/([A-Z])/g, ' $1').trim(),
          }))}
          idPrefix="pills-project"
        />
        <TabsPanels
          categories={Object.keys(Projects).map((key) => ({ key, label: key }))}
          idPrefix="pills-project"
          renderPanel={(category) => renderProjects(category)}
        />
      </div>
    </section>
  );
};

export default Project;
