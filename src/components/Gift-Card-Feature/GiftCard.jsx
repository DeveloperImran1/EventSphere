import React from 'react';
import Banner from './Banner';
import AboutSection from './About-event';
import EventSchedule from './EventScedule';
import Booking from './Booking';
import Testimonial from './Testimonial';
import Pricing from '../events/Pricing';
import EventPricing from './Pricing';

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