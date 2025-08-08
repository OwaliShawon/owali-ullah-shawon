import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import profiledata from '../../assets/data/about.json';
import './Social.css';

const Social = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const info = profiledata.profile;
    setInfo(info);
    // Load once; the JSON is static at runtime
  }, []);

  return (
    <div className="social-list">
      {info.map((data, idx) => {
        return (
          <ul key={idx}>
            <li key="github">
              <a aria-label="GitHub" href={data.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li key="linkedin">
              <a aria-label="LinkedIn" href={data.linkedin} target="_blank" rel="noreferrer">
                {' '}
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li key="facebook">
              <a aria-label="Facebook" href={data.facebook} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li key="twitter">
              <a aria-label="Twitter" href={data.twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Social;
