import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import about from '../../assets/data/about.json';
import profile from '../../assets/images/profile.jpg';
import "./About.css";

const About = () => {
    const [info, setInfo] = useState([]);
    const [count, setCount] = useState([]);

    useEffect(() => {
        const info = about.profile;
        const count = about.count;
        setInfo(info);
        setCount(count);
        Aos.init({ duration: 2000 });
    }, [info, count])
    return (
        <section className="about-section section" id="about">
            <div className="container">
                {
                    info.map(infoData => {
                        return (
                            <div className="row align-items-center " >
                                <div data-aos="fade-right" className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="about-text section-title-text go-to">
                                        <h1 className="dark-color">{infoData.aboutTitle}</h1>
                                        <h6 className="lead text-white">{infoData.aboutSubTitle}</h6>
                                        <p>{infoData.aboutDescription}</p>
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
                                <div data-aos="fade-left" className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="about-avatar">
                                        <img src={profile} title="" alt="" />
                                        <div className="img-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                {/* counter */}
                <div data-aos="fade-up" className="counter">
                    <div className="row">
                        {
                            count.map(counter => {
                                return (
                                    <div className="col-6 col-lg-3">
                                        <div className="count-data text-center">
                                            <h6 className="count h2" data-to="500" data-speed="500">{counter.count}</h6>
                                            <p className="m-0px font-w-600">{counter.Title}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;