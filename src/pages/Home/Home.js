import React from 'react';
import Experience from '../../components/Experience/Experience';
import Footer from '../../components/Footer/Footer';
import Project from '../../components/Project/Project';
import Skills from '../../components/Skills/Skills';
import About from './../../components/About/About';
import Header from './../../components/Header/Header';
import Hero from './../../components/Hero/Hero';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Project></Project>
            <Footer></Footer>
        </div>
    );
};

export default Home;