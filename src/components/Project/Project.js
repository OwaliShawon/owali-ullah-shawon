import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Projects from "../../assets/data/projects.json";
import ProjectItem from '../ProjectItem/ProjectItem';
import "./Project.css";

const Project = () => {
    const [react, setReact] = useState([]);
    const [other, setOther] = useState([]);
    useEffect(() => {
        const react = Projects.React;
        const other = Projects.Others;
        setReact(react);
        setOther(other);
        Aos.init({ duration: 2000 });
    }, [react, other]);

    return (
        <section data-Aos="fade-up" className="project section" id="project">
            <div className="container">
                <div className="section-title-text mb-2">
                    <h1 className="dark-color">Projects</h1>
                </div>
                {/* catagories of projects section */}
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-react-tab" data-toggle="pill" href="#pills-react" role="tab" aria-controls="pills-react" aria-selected="false" > React</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-other-tab" data-toggle="pill" href="#pills-other" role="tab" aria-controls="pills-other" aria-selected="false" > Other</a>
                    </li>
                </ul>
                {/* contents of categories */}
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-react" role="tabpanel" aria-labelledby="pills-react-tab">
                        <div className="row">
                            {react.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">
                        <div className="row">
                            {other.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;