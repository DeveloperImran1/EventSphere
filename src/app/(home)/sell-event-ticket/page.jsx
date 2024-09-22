import EventHighlight from '@/components/events/EventHighlight';
import Pricing from '@/components/events/Pricing';
import SellEventTicket from '@/components/events/SellEventTicket';
import TicketManagesystem from '@/components/events/TicketManagesystem';
import TicketSellProcess from '@/components/events/TicketSellProcess';


import React from 'react';

const page = () => {
    return (
        <div>
         <SellEventTicket></SellEventTicket>
         <TicketManagesystem></TicketManagesystem>
         <EventHighlight></EventHighlight>
         <TicketSellProcess></TicketSellProcess>
         <Pricing></Pricing>
        </div>
    );
};
             
export default page;