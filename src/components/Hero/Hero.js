import React from 'react';
import profiledata from "../../assets/data/about.json";
import Social from './../Social/Social';
import "./Hero.css";


const Hero = () => {
    return (
        <section className="hero-banner" id="hero">
            <div className="container">
                <div className="hero-body">
                    <div data-aos="fade-down" className="social-title title">
                        <Social></Social>
                        <p>Connect Me</p>
                    </div>

                    <div className="intro-content ml-5">
                        <div data-aos="fade-left" className="welcome-title">
                            <p>Hello ! I am</p>
                            <h1>
                                Owali Ullah <span className="bold-color">Shawon</span>
                            </h1>
                        </div>
                        <div data-aos="fade-left" className="designation-list">
                            <ul>
                                <li>Software Engineer</li>
                            </ul>
                        </div>

                        <div data-aos="fade-left" className="resume btn-special">
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