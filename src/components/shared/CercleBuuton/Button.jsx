
import React from 'react';
import './Button.css'; 

const Button = ({ children, disabled }) => {
  return (
    <button className="btn-76     text-xl px-4 py-2  font-semibold font-mono rounded-2xl   " disabled={disabled}>
      {children}
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
    </button>
  );
};

export default Button;
