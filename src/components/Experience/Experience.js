import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import experience from '../../assets/data/experience.json';
import "./Experience.css";

const Experience = () => {
    const [experienceData, setExperience] = useState([]);

    useEffect(() => {
        const experienceData = experience.experience;
        setExperience(experienceData);
        Aos.init({ duration: 2000 });
    }, [experienceData])

    return (
        <section data-Aos="fade-up" className="experienced section" id="experience">
            <div className="container">
                <div className="section-title-text">
                    <h1 className="dark-color">EXPERIENCE</h1>
                </div>
                <div className="row ">
                    {
                        experienceData.map(infoData => {
                            return (
                                <div className="col-md-6 mt-3">
                                    <div className="card  experience-card p-3">
                                        <div className="card-body">
                                            <p class="card-text">{infoData.year}</p>
                                            <h5 class="card-title text-white ">{infoData.companyName}</h5>
                                            <ul>
                                                <li>{infoData.role1}</li>
                                                <li>{infoData.role2}</li>
                                                <li>{infoData.role3}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Experience;