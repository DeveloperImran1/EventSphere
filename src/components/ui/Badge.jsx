import React from 'react';

const Badge = ({ variant, children, className }) => {
  const variants = {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-green-300 text-green-800',
    danger: 'bg-red-300 text-red-800',
    warning: 'bg-yellow-200 text-yellow-800',
    info: 'bg-blue-200 text-blue-800',
  };

  const variantClass = variants[variant] || variants.default;

  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${variantClass} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
