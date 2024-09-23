import React from 'react';
import Banner from './Banner';
import PopularEvents from './PopularEvents';
import EventTime from './EventTime';
import Organizers from '../organizers/Organizers';
import Testimonials from '../testimonials/Testimonials';
import EventOrderList from '../events/EventOrderList';

const HomeContainer = () => {
    return (
        <div>
            <Banner></Banner>
            
            <PopularEvents></PopularEvents>
            <EventTime></EventTime>
            <EventOrderList/>
            <Organizers></Organizers>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomeContainer;