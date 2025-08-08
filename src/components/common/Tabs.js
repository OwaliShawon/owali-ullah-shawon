import React from 'react';
import slugify from '../../utils/slugify';

export const TabsNav = ({ categories = [], idPrefix, activeIndex = 0 }) => (
  <ul className="nav nav-pills mb-3" role="tablist">
    {categories.map((category, index) => {
      const slug = slugify(category);
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
            {category}
          </a>
        </li>
      );
    })}
  </ul>
);

export const TabsPanels = ({ categories = [], idPrefix, activeIndex = 0, renderPanel }) => (
  <div className="tab-content">
    {categories.map((category, index) => {
      const slug = slugify(category);
      return (
        <div
          key={slug}
          className={`tab-pane fade ${index === activeIndex ? 'show active' : ''}`}
          id={`${idPrefix}-${slug}`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-${slug}-tab`}
        >
          {renderPanel(category, index)}
        </div>
      );
    })}
  </div>
);
