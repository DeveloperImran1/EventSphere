import React from 'react';
import Banner from './Banner';
import AboutSection from './About-event';
import EventSchedule from './EventScedule';
import Booking from './Booking';
import Testimonial from './Testimonial';

const GiftCard = () => {
    return (
        <div>
            <Banner></Banner>
          <AboutSection></AboutSection>
          <EventSchedule></EventSchedule>
         <Booking></Booking>
         <Testimonial></Testimonial>
        </div>
    );
};

export default GiftCard;