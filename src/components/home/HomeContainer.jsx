import React from 'react';
import Banner from './Banner';
import PopularEvents from './PopularEvents';
import EventTime from './EventTime';
import Organizers from '../organizers/Organizers';
import Testimonials from '../testimonials/Testimonials';
import EventManagementSoftware from '../events/eventManagementSoftware/EventManagementSoftware';

const HomeContainer = () => {
    return (
        <div className='space-y-20'>
            <Banner></Banner>
            
            <PopularEvents></PopularEvents>
            <EventTime></EventTime>
            <Organizers></Organizers>
            <Testimonials></Testimonials>
           <EventManagementSoftware></EventManagementSoftware>
        </div>
    );
};

export default HomeContainer;