import React from 'react';
import Contact from '../../components/ContactForm/ContactForm';
import Experience from '../../components/Experience/Experience';
import Project from '../../components/Project/Project';
import Skills from '../../components/Skills/Skills';
import About from './../../components/About/About';
import Hero from './../../components/Hero/Hero';

const HomePage = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Project></Project>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default HomePage;