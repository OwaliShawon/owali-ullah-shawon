import React from 'react';
import Hero from './../../components/Hero/Hero';
import AboutPage from '../About/About';
import SkillsPage from '../Skills/Skills';
import WorksPage from '../Works/Works';
import ConnectPage from '../Connect/Connect';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutPage />
            <SkillsPage />
            <WorksPage />
            <ConnectPage />
        </div>
    );
};

export default HomePage;