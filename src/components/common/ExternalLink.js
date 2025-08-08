import React from 'react';

const ExternalLink = ({ href, children, className = '', title, ...rest }) => (
  <a href={href} target="_blank" rel="noreferrer" className={className} title={title} {...rest}>
    {children}
  </a>
);

export default ExternalLink;
