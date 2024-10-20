import React from 'react';

const RotateButton = ({ onClick, className = '', children  }) => {
  return (
    <button onClick={onClick} className={`btnRotate ${className}`}>
      {children}
      <style jsx>{`
        .btnRotate {
          text-decoration: none;
          border: 1px solid rgb(0, 225, 255);
          color: transparent;
          font-family: sans-serif;
          transition: all 0.5s;
          position: relative;
          display: inline-block;
          background: transparent;
          cursor: pointer;
          padding: 5px 10px;
          overflow: hidden;
            border-radius: 20px; 
        }

        .btnRotate:before,
        .btnRotate:after {
          content: "${children}";
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
        
          height: 100%;
          width: 100%;
          top: 0;
          transition: all 1s;
          font-family: sans-serif;
        }

        .btnRotate:before {
          left: 100%;
          background: rgb(16, 160, 185);
          color: rgb(60, 0, 70);
          transform: scale(0) rotateY(0);
          opacity: 0;
        }

        .btnRotate:after {
          left: 0;
          background: rgb(16, 160, 185);
          color: white;
          transform: scale(1) rotateY(0);
          opacity: 1;
        }

        .btnRotate:hover:before {
          transform: scale(1) rotateY(360deg);
          left: 0;
          opacity: 1;
        }

        .btnRotate:hover:after {
          transform: scale(0) rotateY(360deg);
          left: -100%;
          opacity: 0;
        }
      `}</style>
    </button>
  );
};

export default RotateButton;