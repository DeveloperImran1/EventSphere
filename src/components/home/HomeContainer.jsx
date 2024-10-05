import React from 'react';
import Banner from './Banner';
import PopularEvents from './PopularEvents';
import EventTime from './EventTime';
import Organizers from '../organizers/Organizers';
import Testimonials from '../testimonials/Testimonials';
import DestinationSlider from './DestinationSlider';
import EventOrderList from '../events/EventOrderList';

const HomeContainer = () => {
    return (
        <div className='space-y-20'>
            <Banner></Banner>
            <PopularEvents></PopularEvents>
<<<<<<< HEAD
            <EventTime></EventTime>
            <DestinationSlider />
=======
    <EventTime/>
>>>>>>> f5dd87cc69cbc729889c539c3ff596da82400866
            <Organizers></Organizers>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomeContainer;