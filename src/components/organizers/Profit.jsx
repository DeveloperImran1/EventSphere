"use client"
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession } from 'next-auth/react';
import { Calendar, Users, DollarSign, MapPin, Tag } from 'lucide-react';

// Define color palette for the pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

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

  // Function to calculate total revenue
  const getTotalRevenue = () => orderData.reduce((total, order) => total + order.amount, 0);
  
  // Function to calculate total tickets sold
  const getTotalTicketsSold = () => orderData.reduce((total, order) => total + order.totalTickets, 0);
  
  // Function to calculate the total number of events organized
  const getTotalEvents = () => eventData.length;
  
  // Function to calculate the average ticket price
  const getAverageTicketPrice = () => getTotalRevenue() / getTotalTicketsSold() || 0;

  // Function to group events by their categories
  const getEventsByCategory = () => {
    const categories = {};
    eventData.forEach(event => {
      categories[event.category] = (categories[event.category] || 0) + 1;
    });
    return Object.entries(categories).map(([name, value]) => ({ name, value }));
  };

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
              <p className="text-3xl font-bold">${getTotalRevenue().toFixed(2)}</p>
            </div>
          </CardContent>
        </Card>
        
        {/* Card to show total tickets sold */}
        <Card className="bg-white shadow-lg">
          <CardContent className="flex items-center p-6">
            <Users className="h-10 w-10 text-blue-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Tickets Sold</p>
              <p className="text-3xl font-bold">{getTotalTicketsSold()}</p>
            </div>
          </CardContent>
        </Card>

        {/* Card to show total events */}
        <Card className="bg-white shadow-lg">
          <CardContent className="flex items-center p-6">
            <Calendar className="h-10 w-10 text-purple-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Total Events</p>
              <p className="text-3xl font-bold">{getTotalEvents()}</p>
            </div>
          </CardContent>
        </Card>

        {/* Card to show average ticket price */}
        <Card className="bg-white shadow-lg">
          <CardContent className="flex items-center p-6">
            <Tag className="h-10 w-10 text-yellow-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Avg. Ticket Price</p>
              <p className="text-3xl font-bold">${getAverageTicketPrice().toFixed(2)}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-x-2">
        {/* Pie chart to show events by category */}
        <Card className="bg-white shadow-lg w-full md:w-2/5 mb-5 md:mb-0">
          <CardHeader>
            <CardTitle>Events by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={getEventsByCategory()}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {getEventsByCategory().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};

export default Dashboard;
