
import EventBanner from '@/components/allEventsPage/EventBanner';
import EventsData from '@/components/allEventsPage/EventsData';

export const metadata = {
  title:"All Events",
  description: "Smart Event Management and Booking Platform",
  keywords:["online", "ticket", "selling", "system","event", "management"]
};

const AllEventsPage = () => {
  
  return (
    <div className=''>
      <EventsData></EventsData>
    </div>
  );
};

export default AllEventsPage;
