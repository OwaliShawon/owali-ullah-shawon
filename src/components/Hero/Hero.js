import React from 'react';
import profiledata from '../../assets/data/about.json';
import Social from './../Social/Social';
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
              <a
                href={profiledata.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                type="file"
                className="btn btn-outline-info btn-download text-white my-3 my-sm-0"
                download
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
