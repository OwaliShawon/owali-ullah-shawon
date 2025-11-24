import React, { useEffect, useMemo, useState, memo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Projects from '../../assets/data/projects.json';
import ProjectItem from '../ProjectItem/ProjectItem';
import './Project.css';
import ShowToggle from '../common/ShowToggle';
import SectionTitle from '../common/SectionTitle';

const Project = memo(() => {
  const [projectCategories, setProjectCategories] = useState({});
  const [showAll, setShowAll] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/' || pathname.toLowerCase().startsWith('/home');

  useEffect(() => {
    setProjectCategories(Projects);
  }, []);

  // Flatten all categories into a single list
  const allProjects = useMemo(() => {
    const arrays = Object.values(projectCategories || {});
    return arrays.reduce((acc, arr) => acc.concat(arr || []), []);
  }, [projectCategories]);

  const threshold = 8;
  const visibleProjects = useMemo(() => {
    return isHome
      ? showAll
        ? allProjects
        : allProjects.slice(0, threshold)
      : allProjects;
  }, [isHome, showAll, allProjects]);

  const handleToggle = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  return (
    <section data-aos="fade-up" className="project section" id="project">
      <div className="container">
        <SectionTitle number={4}>Projects</SectionTitle>
        <div className="row">
          {visibleProjects.map((projectInfo, index) => (
            <ProjectItem key={projectInfo.id || index} projectInfo={projectInfo} />
          ))}
          {isHome && allProjects.length > threshold && (
            <div className="col-12">
              <ShowToggle
                totalCount={allProjects.length}
                threshold={threshold}
                showAll={showAll}
                onToggle={handleToggle}
                className="text-center mt-4"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

Project.displayName = 'Project';

export default Project;
