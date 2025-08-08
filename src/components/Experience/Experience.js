import React, { useEffect, useState } from 'react';
import experience from '../../assets/data/experience.json';
import './Experience.css';
import SectionTitle from '../common/SectionTitle';
import ShowToggle from '../common/ShowToggle';

const Experience = () => {
  const [experienceData, setExperience] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing two or all experiences

  useEffect(() => {
    const experienceData = experience.experience;
    setExperience(experienceData);
  }, []);

  const visibleExperiences = showAll ? experienceData : experienceData.slice(0, 2); // Show all or first two experiences

  return (
    <section data-aos="fade-up" className="experienced section" id="experience">
      <div className="container">
  <SectionTitle number={3}>EXPERIENCE</SectionTitle>
        <div className="row">
          {visibleExperiences.map((infoData, index) => (
            <div key={index} className="col-md-6 mt-3">
              <div className="card experience-card p-3 surface-card">
                <div className="card-body">
                  <h5 className="card-title text-info">{infoData.companyName}</h5>
                  <p className="card-text text-muted">{infoData.location}</p>
                  {infoData.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="mb-3">
                      <p className="card-text text-success">{role.year}</p>
                      <h6 className="text-warning">{role.title}</h6>
                      <ul>
                        {role.tasks.map((task, taskIndex) => (
                          <li key={taskIndex}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <ShowToggle
          totalCount={experienceData.length}
          threshold={2}
          showAll={showAll}
          onToggle={() => setShowAll(!showAll)}
        />
      </div>
    </section>
  );
};

export default Experience;
