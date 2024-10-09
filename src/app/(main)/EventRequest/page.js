import Profile from '@/components/dashboard/organizer/organizer-container/Profile';
import EventBookingsTable from '@/components/organizers/EventBookingsTable';
import EventRequestForm from '@/components/organizers/EventRequest';
import ProfitPage from '@/components/organizers/Profit';
import React from 'react';

const page = () => {
    return (
        <div  > 
                  <EventRequestForm></EventRequestForm>
                   <EventBookingsTable></EventBookingsTable>
                <ProfitPage></ProfitPage>
        </div>
    );
};

export default page;