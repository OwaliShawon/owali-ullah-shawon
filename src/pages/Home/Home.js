import React from 'react';
import Hero from './../../components/Hero/Hero';
import AboutPage from '../About/About';
import SkillsPage from '../Skills/Skills';
import WorksPage from '../Works/Works';
import ConnectPage from '../Connect/Connect';
import Experience from '../../components/Experience/Experience';
import SEO from '../../components/SEO/SEO';

const HomePage = () => {
  return (
    <div>
      <SEO title="Home" description="Portfolio of Owali Ullah Shawon, Software Engineer." />
      <Hero />
      <AboutPage />
      <SkillsPage />
      <Experience />
      <WorksPage />
      <ConnectPage />
    </div>
  );
};

export default HomePage;
