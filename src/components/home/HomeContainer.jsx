import React from 'react';

import PopularEvents from './PopularEvents';

import Organizers from '../organizers/Organizers';
import Testimonials from '../testimonials/Testimonials';
import DestinationSlider from './DestinationSlider';
import Banner from './banner/page';
import EventTimed from './EventTime/page';


const HomeContainer = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <PopularEvents></PopularEvents>
            <EventTimed></EventTimed>
            <DestinationSlider />
            <Organizers></Organizers>
            {/* <Testimonials></Testimonials> */}
        </div>
    );
};

export default HomeContainer;