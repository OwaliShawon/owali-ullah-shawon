import React, { useEffect, useState } from 'react';
import SkillData from '../../assets/data/skills.json';
import SkillItem from './../SkillItem/SkillItem';
import './Skills.css';
import SectionTitle from '../common/SectionTitle';
import { TabsNav, TabsPanels } from '../common/Tabs';
import slugify from '../../utils/slugify';

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
        <TabsNav
          categories={Object.keys(SkillData).map((c) => c.replace(/([A-Z])/g, ' $1').trim())}
          idPrefix="pills"
        />
        <TabsPanels
          categories={Object.keys(SkillData).map((c) => c.replace(/([A-Z])/g, ' $1').trim())}
          idPrefix="pills"
          renderPanel={(category) =>
            renderSkillCategory(
              Object.keys(SkillData).find((key) => slugify(key) === slugify(category))
            )
          }
        />
      </div>
    </section>
  );
};

export default Skills;
