import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import SkillData from '../../assets/data/skills.json';
import SkillItem from './../SkillItem/SkillItem';
import "./Skills.css";

const Skills = () => {
    const [skill, setSkill] = useState([]);
    const [programming, setProgramming] = useState([]);
    const [libraryOrFramework, setLibraryOrFramework] = useState([]);
    const [tool, setTool] = useState([]);

    useEffect(() => {
        const skill = SkillData.Web;
        const programming = SkillData.Programming;
        const libraryorFramework = SkillData.LibraryOrFramework;
        const tool = SkillData.Tools;
        setSkill(skill);
        setProgramming(programming);
        setLibraryOrFramework(libraryorFramework);
        setTool(tool);
        Aos.init({ duration: 2000 });
    }, [skill, programming, tool])

    return (
        <section data-Aos="fade-up" className="skill section" id="skill">
            <div className="container">
                <div className="section-title-text mb-2">
                    <h1 className="dark-color">MY Skill</h1>
                </div>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-web-tab" data-toggle="pill" href="#pills-web" role="tab" aria-controls="pills-web" aria-selected="true">Web</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-libraryandframework-tab" data-toggle="pill" href="#pills-libraryandframework" role="tab" aria-controls="pills-libraryandframework" aria-selected="true">Framework/Library</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-programming-tab" data-toggle="pill" href="#pills-programming" role="tab" aria-controls="pills-programming" aria-selected="false">Programming</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-tool-tab" data-toggle="pill" href="#pills-tool" role="tab" aria-controls="pills-tool" aria-selected="false">Tool</a>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-web" role="tabpanel" aria-labelledby="pills-web-tab">
                        <div className="row">

                            {
                                skill.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }
                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-libraryandframework" role="tabpanel" aria-labelledby="pills-libraryandframework-tab">
                        <div className="row">
                            {
                                libraryOrFramework.map(libraryorFrameworkInfo => <SkillItem info={libraryorFrameworkInfo}></SkillItem>)
                            }
                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-programming" role="tabpanel" aria-labelledby="pills-programming-tab">
                        <div className="row">
                            {
                                programming.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-tool" role="tabpanel" aria-labelledby="pills-tool-tab">
                        <div className="row">
                            {
                                tool.map(toolInfo => <SkillItem info={toolInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;