import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import SkillData from '../../assets/data/skills.json';
import SkillItem from './../SkillItem/SkillItem';
import "./Skills.css";

const Skills = () => {
    const [FrontEnd, setFrontEnd] = useState([]);
    const [BackEnd, setBackEnd] = useState([]);
    const [Database, setDatabase] = useState([]);
    const [Programming, setProgramming] = useState([]);
    const [Tools, setTools] = useState([]);
    const [OS, setOS] = useState([]);
    const [CMS, setCMS] = useState([]);
    const [Software, setSoftware] = useState([]);
    const [BusinessManagement, setBusinessManagement] = useState([]);
    const [Language, setLanguage] = useState([]);

    useEffect(() => {
        setFrontEnd(SkillData.FrontEnd);
        setBackEnd(SkillData.BackEnd);
        setDatabase(SkillData.Database);
        setProgramming(SkillData.Programming);
        setTools(SkillData.Tools);
        setOS(SkillData.OS);
        setCMS(SkillData.CMS);
        setSoftware(SkillData.Software);
        setBusinessManagement(SkillData.BusinessManagement);
        setLanguage(SkillData.Language);
        Aos.init({ duration: 2000 });
    }, [FrontEnd, BackEnd, Database, Programming, Tools, OS, CMS, Software, BusinessManagement, Language]);
    console.log(FrontEnd, Programming);

    return (
        <section data-Aos="fade-up" className="skill section" id="skill">
            <div className="container">
                <div className="section-title-text mb-2">
                    <h1 className="dark-color">MY Skill</h1>
                </div>
                {/* tabs */}
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    {/* all */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-all-tab" data-toggle="pill" href="#pills-all" role="tab" aria-controls="pills-all" aria-selected="true">All</a>
                    </li>
                    {/* front end */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-front-end-tab" data-toggle="pill" href="#pills-front-end" role="tab" aria-controls="pills-front-end" aria-selected="false">Front-End</a>
                    </li>
                    {/* back end */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-back-end-tab" data-toggle="pill" href="#pills-back-end" role="tab" aria-controls="pills-back-end" aria-selected="false">Back-End</a>
                    </li>
                    {/* database */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-database-tab" data-toggle="pill" href="#pills-database" role="tab" aria-controls="pills-database" aria-selected="false">Database</a>
                    </li>
                    {/* programming */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-programming-tab" data-toggle="pill" href="#pills-programming" role="tab" aria-controls="pills-programming" aria-selected="false">Programming</a>
                    </li>
                    {/* Tools */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-tools-tab" data-toggle="pill" href="#pills-tools" role="tab" aria-controls="pills-tools" aria-selected="false">Tools</a>
                    </li>
                    {/* OS */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-os-tab" data-toggle="pill" href="#pills-os" role="tab" aria-controls="pills-os" aria-selected="false">OS</a>
                    </li>
                    {/* CMS */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-cms-tab" data-toggle="pill" href="#pills-cms" role="tab" aria-controls="pills-cms" aria-selected="false">CMS</a>
                    </li>
                    {/* Business Management */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-BusinessManagement-tab" data-toggle="pill" href="#pills-BusinessManagement" role="tab" aria-controls="pills-BusinessManagement" aria-selected="false">B&M</a>
                    </li>
                    {/* Software */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-software-tab" data-toggle="pill" href="#pills-software" role="tab" aria-controls="pills-software" aria-selected="false">Software</a>
                    </li>
                    {/* Languages */}
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-languages-tab" data-toggle="pill" href="#pills-languages" role="tab" aria-controls="pills-languages" aria-selected="false">Languages</a>
                    </li>
                </ul>


                {/* skills items */}
                <div class="tab-content" id="pills-tabContent">
                    {/* all */}
                    <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                        <div className="row">
                            {
                                FrontEnd.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }
                            {/* <h1>Back End</h1> */}
                            {
                                BackEnd.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }
                            {/* <h1>Database</h1> */}
                            {
                                Database.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }
                            {/* <h1>Programming</h1> */}
                            {
                                Programming.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }
                            {/* <h1>Tools</h1> */}
                            {
                                Tools.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }
                            {/* <h1>Operating System</h1> */}
                            {
                                OS.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }
                            {/* <h1>Content Management System</h1> */}
                            {
                                CMS.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }
                            {/* <h1>Software</h1> */}
                            {
                                Software.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }
                            {/* <h1>Business & Management</h1> */}
                            {
                                BusinessManagement.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }
                            {/* <h1>Language</h1> */}
                            {
                                Language.map(skillInfo => <SkillItem info={skillInfo}></SkillItem>)
                            }

                        </div>
                    </div>
                    {/* front end items */}
                    <div class="tab-pane fade" id="pills-front-end" role="tabpanel" aria-labelledby="pills-front-end-tab">
                        <div className="row">
                            {
                                FrontEnd.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                    {/* back end items */}
                    <div class="tab-pane fade" id="pills-back-end" role="tabpanel" aria-labelledby="pills-back-end-tab">
                        <div className="row">
                            {
                                BackEnd.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                    {/* database */}
                    <div class="tab-pane fade" id="pills-database" role="tabpanel" aria-labelledby="pills-database-tab">
                        <div className="row">
                            {
                                Database.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                    {/* programming */}
                    <div class="tab-pane fade" id="pills-programming" role="tabpanel" aria-labelledby="pills-programming-tab">
                        <div className="row">
                            {
                                Programming.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                    {/* tools */}
                    <div class="tab-pane fade" id="pills-tools" role="tabpanel" aria-labelledby="pills-tools-tab">
                        <div className="row">
                            {
                                Tools.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                    {/* os */}
                    <div class="tab-pane fade" id="pills-os" role="tabpanel" aria-labelledby="pills-os-tab">
                        <div className="row">
                            {
                                OS.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                    {/* cms */}
                    <div class="tab-pane fade" id="pills-cms" role="tabpanel" aria-labelledby="pills-cms-tab">
                        <div className="row">
                            {
                                CMS.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                    {/* Business Management */}
                    <div class="tab-pane fade" id="pills-BusinessManagement" role="tabpanel" aria-labelledby="pills-BusinessManagement-tab">
                        <div className="row">
                            {
                                BusinessManagement.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                    {/*Software */}
                    <div class="tab-pane fade" id="pills-software" role="tabpanel" aria-labelledby="pills-software-tab">
                        <div className="row">
                            {
                                Software.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                    {/*Languages */}
                    <div class="tab-pane fade" id="pills-languages" role="tabpanel" aria-labelledby="pills-languages-tab">
                        <div className="row">
                            {
                                Language.map(programmingInfo => <SkillItem info={programmingInfo}></SkillItem>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;