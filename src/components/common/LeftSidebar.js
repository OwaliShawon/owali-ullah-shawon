import React from 'react';
import './Sidebars.css';
import ExternalLink from './ExternalLink';
import profiledata from '../../assets/data/about.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const LeftSidebar = () => {
  const profile = profiledata.profile?.[0] || {};
  return (
    <div className="sidebars-fixed sidebar-left">
      <div className="sidebar-content">
        <ExternalLink href={profile.github} aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </ExternalLink>
        <ExternalLink href={profile.linkedin} aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </ExternalLink>
        <ExternalLink href={profile.twitter} aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </ExternalLink>
        <ExternalLink href={profile.facebook} aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </ExternalLink>
        <div className="sidebar-line"></div>
      </div>
    </div>
  );
};

export default LeftSidebar;
