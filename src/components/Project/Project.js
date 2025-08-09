import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Projects from '../../assets/data/projects.json';
import ProjectItem from '../ProjectItem/ProjectItem';
import './Project.css';
import ShowToggle from '../common/ShowToggle';
import SectionTitle from '../common/SectionTitle';

const Project = () => {
  const [projectCategories, setProjectCategories] = useState({});
  const [showAll, setShowAll] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/' || pathname.toLowerCase().startsWith('/home');

  useEffect(() => {
    setProjectCategories(Projects);
  }, []);

  // Flatten all categories into a single list to match the screenshot's simple list layout
  const allProjects = useMemo(() => {
    const arrays = Object.values(projectCategories || {});
    return arrays.reduce((acc, arr) => acc.concat(arr || []), []);
  }, [projectCategories]);

  const threshold = 8;
  const visibleProjects = isHome
    ? showAll
      ? allProjects
      : allProjects.slice(0, threshold)
    : allProjects;

  return (
    <section data-aos="fade-up" className="project section" id="project">
      <div className="container">
        <SectionTitle number={4}>Projects</SectionTitle>
        <div className="row">
          {visibleProjects.map((projectInfo, index) => (
            <ProjectItem key={index} projectInfo={projectInfo} />
          ))}
          {isHome && (
            <div className="col-12">
              <ShowToggle
                totalCount={allProjects.length}
                threshold={threshold}
                showAll={showAll}
                onToggle={() => setShowAll(!showAll)}
                className="text-center mt-4"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
