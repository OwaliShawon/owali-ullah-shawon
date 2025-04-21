import React from 'react';
import Hero from './../../components/Hero/Hero';
import AboutPage from '../About/About';
import SkillsPage from '../Skills/Skills';
import WorksPage from '../Works/Works';
import ConnectPage from '../Connect/Connect';
import Experience from '../../components/Experience/Experience';

const HomePage = () => {
    return (
        <div>
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