import React from 'react';
import EventTitle from './EventTitle';
import EventStaticSection from './EventStaticSection';
import EventRegister from './EventRegister';
import EventLimeLights from './EventLimeLights';
import HandyFeatured from './HandyFeatured';
import ExperianceTab from './ExperianceTab';
import Testimonials from '@/components/testimonials/Testimonials';
import AppleLogoSection from './AppleLogoSection';
import InputSchedule from './InputSchedule';
import AnimatedImageSection from './AnimateImageSection';

const EventManagementSoftware = () => {
  return (
    <div>
      <EventTitle/>
      <AnimatedImageSection/>
      <EventStaticSection/>
      <EventRegister/>
      <EventLimeLights/>
      <HandyFeatured/>
      <ExperianceTab/>
      <Testimonials/>
      <AppleLogoSection/>
      <InputSchedule/>
    </div>
  );
};

export default EventManagementSoftware;