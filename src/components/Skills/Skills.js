import React, { useEffect, useState } from 'react';
import SkillData from '../../assets/data/skills.json';
import SkillItem from './../SkillItem/SkillItem';
import './Skills.css';
import SectionTitle from '../common/SectionTitle';

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    setSkills(SkillData);
  }, []);

  const renderSkillCategory = (category) => (
    <div className="row">
      {skills[category]?.map((skillInfo, index) => (
        <SkillItem key={index} info={skillInfo} />
      ))}
    </div>
  );

  return (
    <section data-aos="fade-up" className="skill section" id="skill">
      <div className="container">
        <SectionTitle>MY Skill</SectionTitle>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          {Object.keys(SkillData).map((category, index) => (
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
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content" id="pills-tabContent">
          {Object.keys(SkillData).map((category, index) => (
            <div
              key={index}
              className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
              id={`pills-${category.toLowerCase()}`}
              role="tabpanel"
              aria-labelledby={`pills-${category.toLowerCase()}-tab`}
            >
              {renderSkillCategory(category)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
