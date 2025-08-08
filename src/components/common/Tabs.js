import React from 'react';
import slugify from '../../utils/slugify';

// categories can be: string[] or { key: string, label: string }[]
export const TabsNav = ({ categories = [], idPrefix, activeIndex = 0 }) => (
  <ul className="nav nav-pills mb-3" role="tablist">
    {categories.map((item, index) => {
      const isObj = typeof item === 'object' && item !== null;
      const key = isObj ? item.key : item;
      const label = isObj ? item.label : item;
      const slug = slugify(key);
      return (
        <li className="nav-item" role="presentation" key={slug}>
          <a
            className={`nav-link ${index === activeIndex ? 'active' : ''}`}
            id={`${idPrefix}-${slug}-tab`}
            data-bs-toggle="pill"
            href={`#${idPrefix}-${slug}`}
            role="tab"
            aria-controls={`${idPrefix}-${slug}`}
            aria-selected={index === activeIndex ? 'true' : 'false'}
          >
            {label}
          </a>
        </li>
      );
    })}
  </ul>
);

export const TabsPanels = ({ categories = [], idPrefix, activeIndex = 0, renderPanel }) => (
  <div className="tab-content">
    {categories.map((item, index) => {
      const isObj = typeof item === 'object' && item !== null;
      const key = isObj ? item.key : item;
      const slug = slugify(key);
      return (
        <div
          key={slug}
          className={`tab-pane fade ${index === activeIndex ? 'show active' : ''}`}
          id={`${idPrefix}-${slug}`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-${slug}-tab`}
        >
          {renderPanel(key, index)}
        </div>
      );
    })}
  </div>
);
