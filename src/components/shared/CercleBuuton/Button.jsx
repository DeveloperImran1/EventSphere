
import React from 'react';
import './Button.css'; 

const CercleButton = ({ children, disabled }) => {
  return (
    <button className="btn-76     text-xl px-4 py-1   font-mono rounded-xl   " disabled={disabled}>
      {children}
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
    </button>
  );
};

export default CercleButton;
