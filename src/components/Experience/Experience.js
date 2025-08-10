import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import experience from '../../assets/data/experience.json';
import './Experience.css';
import SectionTitle from '../common/SectionTitle';
import ShowToggle from '../common/ShowToggle';
import ExternalLink from '../common/ExternalLink';

const Experience = () => {
  const [experienceData, setExperience] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing two or all experiences
  const { pathname } = useLocation();
  const isHome = pathname === '/' || pathname.toLowerCase().startsWith('/home');

  useEffect(() => {
    const experienceData = experience.experience;
    setExperience(experienceData);
  }, []);

  const threshold = 2;
  const visibleExperiences = isHome
    ? showAll
      ? experienceData
      : experienceData.slice(0, threshold)
    : experienceData;

  // UI helpers
  const getInitials = (name = '') => {
    const parts = name.trim().split(/\s+/).slice(0, 2);
    return parts.map((p) => p[0]?.toUpperCase() || '').join('');
  };

  // Track expanded state per role (companyIndex-roleIndex)
  const [expanded, setExpanded] = useState({});
  const toggleRole = (companyIdx, roleIdx) => {
    const key = `${companyIdx}-${roleIdx}`;
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
                    <div className="experience-header d-flex align-items-center justify-content-between flex-wrap gap-3 mb-2">
                      <div className="d-flex align-items-center gap-2 company-meta">
                        <div className="company-avatar" aria-hidden="true">{getInitials(infoData.companyName)}</div>
                        <div>
                          {infoData.website ? (
                            <ExternalLink href={infoData.website} title={`Visit ${infoData.companyName}`}>
                              <h5 className="card-title text-info mb-0">{infoData.companyName}</h5>
                            </ExternalLink>
                          ) : (
                            <h5 className="card-title text-info mb-0">{infoData.companyName}</h5>
                          )}
                          <div className="text-muted small">{infoData.location}</div>
                        </div>
                      </div>
                    </div>
                    {infoData.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="mb-3">
                        <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                          <h6 className="text-warning mb-1">{role.title}</h6>
                          <span className="timeline-role-date">{role.year}</span>
                        </div>
                        <ul className="mb-2">
                          {(expanded[`${index}-${roleIndex}`] ? role.tasks : role.tasks.slice(0, 2)).map((task, taskIndex) => (
                            <li key={taskIndex}>{task}</li>
                          ))}
                        </ul>
                        {role.tasks.length > 2 && (
                          <button
                            type="button"
                            className="btn btn-link p-0 role-toggle"
                            aria-expanded={!!expanded[`${index}-${roleIndex}`]}
                            onClick={() => toggleRole(index, roleIndex)}
                          >
                            {expanded[`${index}-${roleIndex}`] ? 'Show less' : `Show ${role.tasks.length - 2} more`}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {isHome && (
          <ShowToggle
            totalCount={experienceData.length}
            threshold={threshold}
            showAll={showAll}
            onToggle={() => setShowAll(!showAll)}
          />
        )}
      </div>
    </section>
  );
};

export default Experience;
