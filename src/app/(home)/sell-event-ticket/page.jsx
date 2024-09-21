import EventHighlight from '@/components/events/EventHighlight';
import SellEventTicket from '@/components/events/SellEventTicket';
import TicketManagesystem from '@/components/events/TicketManagesystem';


import React from 'react';

const page = () => {
    return (
        <div>
         <SellEventTicket></SellEventTicket>
         <TicketManagesystem></TicketManagesystem>
         <EventHighlight></EventHighlight>
        </div>
    );
};
             
export default page;