import React, { useEffect, useState } from 'react';
import GoogleMapComponent from './googlemap';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Table = () => {
  const [eventData, setEventData] = useState([]);

  // useEffect to fetch data from APIs once the component mounts or the organizerEmail changes
  useEffect(() => {
    const fetchData = async () => {
      const eventsResponse = await fetch('http://localhost:9000/events');
      const eventsData = await eventsResponse.json();
      const events = eventsData.events;
      setEventData(events);
    };

    fetchData();
  }, []);

  // Function to get the top 5 events by booked seats
  const getTopEvents = () => {
    return eventData
      .sort((a, b) => b.bookedSeats.length - a.bookedSeats.length)
      .slice(0, 5);
  };

  return (
    <>
      {/* Display top 5 events */}
      <Card className="bg-white shadow-lg mt-5">
        <CardHeader>
          <CardTitle>Top 5 Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {getTopEvents().map((event, index) => (
              <div key={index} className="flex items-center p-2 bg-gray-50 rounded-lg">
                <img src={event.gallery[0]} alt={event.title} className="w-16 h-16 object-cover rounded-full mr-4" />
                <div className="flex-grow">
                  <h5 className="font-semibold ">{event.title}</h5>
                  <p className="text-sm text-gray-500">{event.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{event.bookedSeats.length} tickets sold</p>
                  <p className="text-sm text-gray-500">${event.price * event.bookedSeats.length} revenue</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div>
        {/* <GoogleMapComponent/> */}
      </div>

    </>
  );
};

export default Table;
