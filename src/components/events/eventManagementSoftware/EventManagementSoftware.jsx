import React from 'react';
import EventTitle from './EventTitle';
import EventStaticSection from './EventStaticSection';
import EventRegister from './EventRegister';
import EventLimeLights from './EventLimeLights';

const EventManagementSoftware = () => {
  return (
    <div>
      <EventTitle/>
      <EventStaticSection/>
      <EventRegister/>
      <EventLimeLights/>
    </div>
  );
};

export default EventManagementSoftware;