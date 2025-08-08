import React, { useEffect, useState } from 'react';
import about from '../../assets/data/about.json';
import profile from '../../assets/images/profile.jpg';
import './About.css';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const info = about.profile;
    setInfo(info);
    // AOS is initialized globally in App.js
  }, []);
  return (
    <section className="about-section section" id="about">
      <div className="container">
        {info.map((infoData, idx) => {
          return (
            <div className="row align-items-center " key={idx}>
              <div data-aos="fade-right" className="col-lg-8 col-md-8 col-sm-12">
                <div className="about-text go-to">
                  <SectionTitle number={1}>{infoData.aboutTitle}</SectionTitle>
                  {/* <h6 className="lead text-white">{infoData.aboutSubTitle}</h6> */}
                  {/* <p>{infoData.aboutDescription}</p> */}
                  <div className="row about-list">
                    <div className="col-md-6">
                      <div className="media">
                        <label>Birthday</label>
                        <p>{infoData.birthDay}</p>
                      </div>
                      <div className="media">
                        <label>Address</label>
                        <p>{infoData.Address}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="media">
                        <label>E-mail</label>
                        <p>{infoData.Email}</p>
                      </div>
                      <div className="media">
                        <label>Phone</label>
                        <p>{infoData.Phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* image portion */}
              <div data-aos="fade-left" className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="about-avatar">
                  <img src={profile} title="" alt="" />
                  <div className="img-overlay"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
