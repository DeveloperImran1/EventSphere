"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent, } from "@/components/ui/card";
import { useSession } from 'next-auth/react';
import { Calendar, Users, DollarSign, Tag } from 'lucide-react';


const Dashboard = () => {
  // State to store event data and order data
  const [eventData, setEventData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  
  // Retrieve session data for the current user
  const session = useSession();
  const organizerEmail = session?.data?.user?.email;

  // useEffect to fetch data from APIs once the component mounts or the organizerEmail changes
  useEffect(() => {
    const fetchData = async () => {
      const eventsResponse = await fetch('http://localhost:9000/events');
      const ordersResponse = await fetch('http://localhost:9000/orders');
      const eventsData = await eventsResponse.json();
      const events = eventsData.events;
      const orders = await ordersResponse.json();

      // Filter events and orders based on the current organizer's email
      setEventData(events.filter(event => event.organizer.email === organizerEmail));
      setOrderData(orders.filter(order => order.eventOrganizerEmail === organizerEmail));
    };

    fetchData();
  }, [organizerEmail]);


  return (
    <div className="p-4 space-y-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Event Organizer Dashboard</h1>
      
      {/* Display metrics in a grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card to show total revenue */}
        <Card className="bg-white shadow-lg">
          <CardContent className="flex items-center p-6">
            <DollarSign className="h-10 w-10 text-green-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-3xl font-bold">$9999</p>
            </div>
          </CardContent>
        </Card>
        
        {/* Card to show total tickets sold */}
        <Card className="bg-white shadow-lg">
          <CardContent className="flex items-center p-6">
            <Users className="h-10 w-10 text-blue-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Tickets Sold</p>
              <p className="text-3xl font-bold">999</p>
            </div>
          </CardContent>
        </Card>

        {/* Card to show total events */}
        <Card className="bg-white shadow-lg">
          <CardContent className="flex items-center p-6">
            <Calendar className="h-10 w-10 text-purple-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Total Events</p>
              <p className="text-3xl font-bold">9999</p>
            </div>
          </CardContent>
        </Card>

        {/* Card to show average ticket price */}
        <Card className="bg-white shadow-lg">
          <CardContent className="flex items-center p-6">
            <Tag className="h-10 w-10 text-yellow-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Avg. Ticket Price</p>
              <p className="text-3xl font-bold">$99</p>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};

export default Dashboard;
