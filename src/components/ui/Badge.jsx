// components/ui/badge.jsx
import React from 'react';

const Badge = ({ children, className }) => {
  return (
    <span className={`badge ${className}`}>
      {children}
    </span>
  );
};

export default Badge; // Use default export if importing as a default import
