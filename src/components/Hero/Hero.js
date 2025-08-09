import React from 'react';
import profiledata from '../../assets/data/about.json';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  const profile = profiledata.profile?.[0] || {};
  return (
    <section className="hero-banner section" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-10">
            <p className="intro-overline mb-2">Hi, my name is</p>
            <h1 className="hero-title mb-2">{profile.name || 'Owali Ullah Shawon'}</h1>
            <h2 className="hero-subtitle mb-3">{profile.aboutSubTitle || 'Software Engineer'}</h2>
            <p className="hero-description mb-4">{profile.aboutDescription}</p>
            <div className="btn-special">
              <Button href={profiledata.resumeLink} newTab className="btn-download my-2">
                Get Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
