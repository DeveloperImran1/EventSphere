import React from 'react';
import EventTitle from './EventTitle';
import EventStaticSection from './EventStaticSection';
import EventRegister from './EventRegister';
import EventLimeLights from './EventLimeLights';
import HandyFeatured from './HandyFeatured';
import ExperianceTab from './ExperianceTab';
import Testimonials from '@/components/testimonials/Testimonials';

const EventManagementSoftware = () => {
  return (
    <div>
      <EventTitle/>
      <EventStaticSection/>
      <EventRegister/>
      <EventLimeLights/>
      <HandyFeatured/>
      <ExperianceTab/>
      <Testimonials/>
    </div>
  );
};

export default EventManagementSoftware;