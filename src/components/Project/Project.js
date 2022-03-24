import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Projects from "../../assets/data/projects.json";
import ProjectItem from '../ProjectItem/ProjectItem';
import "./Project.css";

const Project = () => {
    const [react, setReact] = useState([]);
    const [reactNative, setReactNative] = useState([]);
    const [nextjs, setNextjs] = useState([]);
    const [others, setOther] = useState([]);
    const [wordpress, setWordpress] = useState([]);
    useEffect(() => {
        const react = Projects.React;
        const reactNative = Projects.ReactNative;
        const nextjs = Projects.NextJs;
        const others = Projects.Others;
        const wordpress = Projects.WordPress;
        setReact(react);
        setOther(others);
        setNextjs(nextjs);
        setReactNative(reactNative);
        setWordpress(wordpress);
        Aos.init({ duration: 2000 });
    }, [react, others, nextjs, reactNative, wordpress]);

    return (
        <section data-Aos="fade-up" className="project section" id="project">
            <div className="container">
                <div className="section-title-text mb-2">
                    <h1 className="dark-color">Some of my Works </h1>
                </div>
                {/* catagories of projects section */}
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-all-tab" data-toggle="pill" href="#pills-all" role="tab" aria-controls="pills-all" aria-selected="false">All</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-react-tab" data-toggle="pill" href="#pills-react" role="tab" aria-controls="pills-react" aria-selected="false">React</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-react-native-tab" data-toggle="pill" href="#pills-react-native" role="tab" aria-controls="pills-react-native" aria-selected="false" > React Native</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-other-tab" data-toggle="pill" href="#pills-other" role="tab" aria-controls="pills-other" aria-selected="false" > Other</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-wordpress-tab" data-toggle="pill" href="#pills-wordpress" role="tab" aria-controls="pills-wordpress" aria-selected="false" >WordPress</a>
                    </li>
                </ul>
                {/* contents of categories */}
                <div class="tab-content" id="pills-tabContent">
                    {/* all projects */}
                    <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                        <div className="row">
                            <h1>All</h1>
                            {react.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                            {reactNative.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                            {nextjs.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                            {others.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                            {wordpress.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                        </div>
                    </div>
                    {/* react projects */}
                    <div class="tab-pane fade" id="pills-react" role="tabpanel" aria-labelledby="pills-react-tab">
                        <div className="row">
                            {react.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                        </div>
                    </div>
                    {/* react native projects */}
                    <div class="tab-pane fade" id="pills-react-native" role="tabpanel" aria-labelledby="pills-react-native-tab">
                        <div className="row">
                            {reactNative.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                        </div>
                    </div>
                    {/* nextjs projects */}
                    <div class="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">
                        <div className="row">
                            {others.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                        </div>
                    </div>
                    {/* wordpress projects */}
                    <div class="tab-pane fade" id="pills-wordpress" role="tabpanel" aria-labelledby="pills-wordpress-tab">
                        <div className="row">
                            {wordpress.map((projectInfo) => <ProjectItem projectInfo={projectInfo}></ProjectItem>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;