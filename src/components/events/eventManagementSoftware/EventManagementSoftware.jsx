import React from 'react';
import EventTitle from './EventTitle';
import EventStaticSection from './EventStaticSection';
import EventRegister from './EventRegister';
import EventLimeLights from './EventLimeLights';
import HandyFeatured from './HandyFeatured';

const EventManagementSoftware = () => {
  return (
    <div>
      <EventTitle/>
      <EventStaticSection/>
      <EventRegister/>
      <EventLimeLights/>
      <HandyFeatured/>
    </div>
  );
};

export default EventManagementSoftware;