import React from 'react';
import Footer from '../../components/Footer/Footer';
import About from './../../components/About/About';
import Header from './../../components/Header/Header';
import Hero from './../../components/Hero/Hero';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;