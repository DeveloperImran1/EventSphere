import React from 'react';
import EventTime from '../EventTime';

const EventTimed = () => {
  const gridStyle = {
    
 
 
    backgroundImage: `
    linear-gradient(rgba(14, 165, 233, 0.1) 2px, transparent 2px),
    linear-gradient(90deg, rgba(14, 165, 233, 0.1) 2px, transparent 2px)
  `,
  
    backgroundSize: 'clamp(20px, 10vw, 70px) clamp(20px, 10vw, 70px)',
  };

  return (
    <div style={gridStyle}>
      <div className=" py-20 max-w-7xl px-4 mx-auto">
        <EventTime />
      </div>
    </div>
  );
};

export default EventTimed;