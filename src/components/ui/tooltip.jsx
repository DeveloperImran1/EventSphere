
import React from 'react';

const Tooltip = ({ content, children }) => {
  return (
    <div className="relative inline-block">
      {children}
      <div className="tooltip-content">
        {content}
      </div>
    </div>
  );
};

export { Tooltip };
