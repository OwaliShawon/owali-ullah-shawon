import React from 'react';

const SectionTitle = ({ title, children, className = '' }) => {
  const content = children || title;
  return (
    <div className={['section-title-text mb-2', className].filter(Boolean).join(' ')}>
      <h1 className="dark-color">{content}</h1>
    </div>
  );
};

export default SectionTitle;
