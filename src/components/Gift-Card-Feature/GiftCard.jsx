import React from 'react';
import Banner from './Banner';
import AboutSection from './About-event';
import EventSchedule from './EventScedule';
import Booking from './Booking';

const GiftCard = () => {
    return (
        <div>
            <Banner></Banner>
          <AboutSection></AboutSection>
          <EventSchedule></EventSchedule>
         <Booking></Booking>
        </div>
    );
};

export default GiftCard;