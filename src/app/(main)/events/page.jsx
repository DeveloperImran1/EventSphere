
import EventBanner from '@/components/allEventsPage/EventBanner';
import EventsData from '@/components/allEventsPage/EventsData';


const AllEventsPage = () => {
    return (
        <div className='mb-20 w-[calc(100vw-17px)]'>
          <EventBanner></EventBanner>
          <EventsData></EventsData>
        </div>
    );
};

export default AllEventsPage;
