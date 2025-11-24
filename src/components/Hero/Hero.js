import React, { memo } from 'react';
import profiledata from '../../assets/data/about.json';
import Button from '../common/Button';
import './Hero.css';

const Hero = memo(() => {
  const profile = profiledata.profile?.[0] || {};
  
  return (
    <section className="hero-banner" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 col-xl-8">
            <p className="intro-overline">Hi, my name is</p>
            <h1 className="hero-title">{profile.name || 'Owali Ullah Shawon'}</h1>
            <h2 className="hero-subtitle">{profile.aboutSubTitle || 'Software Engineer'}</h2>
            {profile.aboutDescription && (
              <p className="hero-description">{profile.aboutDescription}</p>
            )}
            <div className="hero-cta">
              <Button 
                href="#contact" 
                variant="accent" 
                size="lg"
                aria-label="Get in touch"
              >
                Get In Touch
              </Button>
              <Button 
                href="#project" 
                variant="accent-outline" 
                size="lg"
                aria-label="View my work"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;

