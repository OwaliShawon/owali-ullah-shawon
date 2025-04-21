import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import experience from '../../assets/data/experience.json';
import "./Experience.css";

const Experience = () => {
    const [experienceData, setExperience] = useState([]);
    const [showAll, setShowAll] = useState(false); // State to toggle between showing two or all experiences

    useEffect(() => {
        const experienceData = experience.experience;
        setExperience(experienceData);
        Aos.init({ duration: 2000 });
    }, []);

    const visibleExperiences = showAll ? experienceData : experienceData.slice(0, 2); // Show all or first two experiences

    return (
        <section data-Aos="fade-up" className="experienced section" id="experience">
            <div className="container">
                <div className="section-title-text">
                    <h1 className="dark-color">EXPERIENCE</h1>
                </div>
                <div className="row">
                    {
                        visibleExperiences.map((infoData, index) => (
                            <div key={index} className="col-md-6 mt-3">
                                <div className="card experience-card p-3 bg-dark">
                                    <div className="card-body">
                                        <h5 className="card-title text-info">{infoData.companyName}</h5>
                                        <p className="card-text text-muted">{infoData.location}</p>
                                        {
                                            infoData.roles.map((role, roleIndex) => (
                                                <div key={roleIndex} className="mb-3">
                                                    <p className="card-text text-success">{role.year}</p>
                                                    <h6 className="text-warning">{role.title}</h6>
                                                    <ul>
                                                        {role.tasks.map((task, taskIndex) => (
                                                            <li key={taskIndex}>{task}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {experienceData.length > 2 && (
                    <div className="text-center mt-4">
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less" : "Show All"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;