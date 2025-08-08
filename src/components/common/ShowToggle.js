import React from 'react';
import Button from './Button';

const ShowToggle = ({
  totalCount = 0,
  threshold = 0,
  showAll,
  onToggle,
  className = 'text-center mt-4',
  showAllLabel = 'Show All',
  showLessLabel = 'Show Less',
}) => {
  if (totalCount <= threshold) return null;
  return (
    <div className={className}>
      <Button onClick={onToggle}>{showAll ? showLessLabel : showAllLabel}</Button>
    </div>
  );
};

export default ShowToggle;
