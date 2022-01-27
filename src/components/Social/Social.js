import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import profiledata from "../../assets/data/about.json";
import "./Social.css";

const Social = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const info = profiledata.profile;
        setInfo(info);
    }, [info]);

    return (
        <div className="social-list">
            {
                info.map(data => {
                    return (
                        <ul>
                            <li>
                                <a href={data.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            </li>
                            <li>
                                <a href={data.linkedin} target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
                            </li>
                            <li>
                                <a href={data.facebook} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                            </li>
                            <li>
                                <a href={data.twitter} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    );
};

export default Social;