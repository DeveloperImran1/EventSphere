import React from 'react';
import Banner from './Banner';
import AboutSection from './About-event';
import EventSchedule from './EventScedule';

const GiftCard = () => {
    return (
        <div>
            <Banner></Banner>
          <AboutSection></AboutSection>
          <EventSchedule></EventSchedule>
        </div>
    );
};

export default GiftCard;