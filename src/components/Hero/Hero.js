import React from 'react';
import profiledata from '../../assets/data/about.json';
import Social from './../Social/Social';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  const profile = profiledata.profile?.[0] || {};
  return (
    <section className="hero-banner" id="hero">
      <div className="container">
        <div className="hero-body">
          <div className="social-title title">
            <Social />
            <p>Connect with me</p>
          </div>

          <div className="intro-content ml-5">
            <div className="welcome-title">
              <p>Hello! I am</p>
              <h1>
                {profile.name?.split(' ').slice(0, -1).join(' ') || 'Owali Ullah'}{' '}
                <span className="bold-color">
                  {profile.name?.split(' ').slice(-1)[0] || 'Shawon'}
                </span>
              </h1>
            </div>
            <div className="designation-list">
              <ul>
                <li>{profile.aboutSubTitle || 'Software Engineer'}</li>
              </ul>
            </div>

            <div className="resume btn-special">
              <Button href={profiledata.resumeLink} newTab className="btn-download my-3 my-sm-0">
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
