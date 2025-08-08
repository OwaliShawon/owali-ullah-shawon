import React from 'react';
import './Sidebars.css';
import profiledata from '../../assets/data/about.json';

const RightSidebar = () => {
  const email = profiledata.profile?.[0]?.Email || 'hello@example.com';
  return (
    <div className="sidebars-fixed sidebar-right">
      <div className="sidebar-content">
        <a href={`mailto:${email}`} className="rotate-90" style={{ writingMode: 'vertical-rl' }}>
          {email}
        </a>
        <div className="sidebar-line"></div>
      </div>
    </div>
  );
};

export default RightSidebar;
