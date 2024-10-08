import EventBookingsTable from '@/components/organizers/EventBookingsTable';
import EventRequestForm from '@/components/organizers/EventRequest';
import React from 'react';

const page = () => {
    return (
        <div  > 
                  <EventRequestForm></EventRequestForm>
                   <EventBookingsTable></EventBookingsTable>

        </div>
    );
};

export default page;