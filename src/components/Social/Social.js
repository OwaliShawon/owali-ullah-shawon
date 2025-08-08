import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import profiledata from '../../assets/data/about.json';
import './Social.css';
import ExternalLink from '../common/ExternalLink';

const Social = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const info = profiledata.profile;
    setInfo(info);
  }, []);

  return (
    <div className="social-list">
      {info.map((data, idx) => {
        return (
          <ul key={idx}>
            <li key="github">
              <ExternalLink aria-label="GitHub" href={data.github}>
                <FontAwesomeIcon icon={faGithub} />
              </ExternalLink>
            </li>
            <li key="linkedin">
              <ExternalLink aria-label="LinkedIn" href={data.linkedin}>
                {' '}
                <FontAwesomeIcon icon={faLinkedin} />
              </ExternalLink>
            </li>
            <li key="facebook">
              <ExternalLink aria-label="Facebook" href={data.facebook}>
                <FontAwesomeIcon icon={faFacebook} />
              </ExternalLink>
            </li>
            <li key="twitter">
              <ExternalLink aria-label="Twitter" href={data.twitter}>
                <FontAwesomeIcon icon={faTwitter} />
              </ExternalLink>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Social;
