import React, { useEffect, useState } from 'react';
import SkillData from '../../assets/data/skills.json';
import SkillItem from './../SkillItem/SkillItem';
import './Skills.css';
import SectionTitle from '../common/SectionTitle';
import { TabsNav, TabsPanels } from '../common/Tabs';

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
  <SectionTitle number={2}>Skills</SectionTitle>
        <TabsNav
          categories={Object.keys(SkillData).map((key) => ({
            key,
            label: key.replace(/([A-Z])/g, ' $1').trim(),
          }))}
          idPrefix="pills"
        />
        <TabsPanels
          categories={Object.keys(SkillData).map((key) => ({ key, label: key }))}
          idPrefix="pills"
          renderPanel={(categoryKey) => renderSkillCategory(categoryKey)}
        />
      </div>
    </section>
  );
};

export default Skills;
