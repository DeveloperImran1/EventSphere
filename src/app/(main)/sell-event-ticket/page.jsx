import CustomerSpeak from '@/components/events/CustomerSpeak';
import EventHighlight from '@/components/events/EventHighlight';
import EventifyEdge from '@/components/events/EventifyEdge';
import FAQ from '@/components/events/FAQ';
import FAQS from '@/components/events/FAQ';
import Pricing from '@/components/events/Pricing';
import SellEventTicket from '@/components/events/SellEventTicket';
import Services from '@/components/events/Services';
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
          <EventifyEdge></EventifyEdge>
          <CustomerSpeak></CustomerSpeak>
          <Services></Services>
             <FAQ></FAQ>
        </div>
    );
};
             
export default page;