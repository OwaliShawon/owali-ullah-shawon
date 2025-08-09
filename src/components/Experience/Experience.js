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

  // Compute a company-level date range from its roles, handling various hyphen characters.
  const getCompanyDateRange = (roles = []) => {
    if (!roles.length) return '';
    const parts = roles.map((r) =>
      String(r.year || '')
        .split(/\s*[-–‑—]\s*/)
        .map((s) => s.trim())
    );
    const starts = parts.map((p) => p[0]).filter(Boolean);
    const ends = parts.map((p) => p[1] || '').filter(Boolean);
    const start = starts[0] || roles[0].year || '';
    const end = ends.length ? ends[ends.length - 1] : '';
    if (!end) return start;
    return `${start} - ${end}`;
  };

  return (
    <section data-aos="fade-up" className="experienced section" id="experience">
      <div className="container">
        <SectionTitle number={3}>EXPERIENCE</SectionTitle>
        <div className="timeline mt-3">
          {visibleExperiences.map((infoData, index) => {
            const companyRange = getCompanyDateRange(infoData.roles);
            return (
              <div key={index} className="timeline-item">
                {/* <div className="timeline-dot" /> */}
                {companyRange && <div className="timeline-badge">{companyRange}</div>}
                <div className="timeline-content card experience-card p-3 surface-card">
                  <div className="card-body">
                    <h5 className="card-title text-info">{infoData.companyName}</h5>
                    <p className="card-text text-muted">{infoData.location}</p>
                    {infoData.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="mb-3">
                        <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                          <h6 className="text-warning mb-1">{role.title}</h6>
                          <span className="timeline-role-date">{role.year}</span>
                        </div>
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
            );
          })}
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
