import React from 'react';

const SectionTitle = ({ title, number, children, className = '' }) => {
  const content = children || title;
  const num = typeof number === 'number' || typeof number === 'string' ? String(number).padStart(2, '0') + '.' : null;
  return (
    <div className={['section-title-text mb-2 d-flex align-items-center gap-2', className].filter(Boolean).join(' ')}>
      {num && <span className="section-number">{num}</span>}
      <h1 className="dark-color" data-text={content}>{content}</h1>
    </div>
  );
};

export default SectionTitle;
