'use client';

import React, { useEffect, useState } from 'react';
import { CalendarDays, DollarSign, Users, ChevronUp, ChevronDown } from 'lucide-react';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { MdEventNote } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { data } from 'autoprefixer';
import { useSession } from 'next-auth/react';
import Loading from '../shared/LoadingSpinner/Loading';

const StatusBadge = ({ status }) => {
  const colorMap = {
    Confirmed: 'bg-blue-100 text-blue-800',
    Refund: 'bg-yellow-100 text-yellow-800',
    Canceled: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`${colorMap[status]} px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 ease-in-out hover:scale-110`}>
      {status}
    </span>
  );
};

const Tooltip = ({ content, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

const EventBookingsTable = () => {
  const session = useSession();
  const [currentUser, setCurrentUser] = useState(session)
  const [sortColumn, setSortColumn] = useState('bookingDate');
  const [sortDirection, setSortDirection] = useState('desc');
  const currentUserEmail = session?.data?.user?.email

  // Get Booking Data 
  const fetchOrders = async () => {
    const { data } = await axios.get(`https://event-sphare-server.vercel.app/ordersByGmail/${currentUserEmail}`);

    return data;
  };

  // Use React Query to fetch data
  const { data: bookings, error, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
  });

  useEffect(() => {
    // Alert message for sorting feature
    Swal.fire({
      title: '🔄 Sorting Available!',
      text: 'You can click on table headers to sort the data.',
      icon: 'info',
      confirmButtonText: 'Okay, got it!',
    });
  }, []);
  if (isLoading) {
    return <Loading></Loading>
  }

  if (error) {
    return <h5 className='text-gray-800 text-center mt-14'>Error loading data: {error.message}</h5>;
  }

  const sortedBookings = [...bookings].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ column }) => {
    if (sortColumn !== column) return null;
    return sortDirection === 'asc' ? <ChevronUp className="inline-block w-4 h-4" /> : <ChevronDown className="inline-block w-4 h-4" />;
  };
  if (bookings?.length === 0) {
    return <div className='flex flex-col justify-center items-center  mt-14  mx-auto w-full'>
      <h3 className='text-center font-semibold text-gray-800 block'>Your Event Is Not Booking Any User!</h3>
      <Image height={676} width={1200} className='w-[50%] h-[50%] ' src="https://t4.ftcdn.net/jpg/05/86/21/03/360_F_586210337_WOGOw0l7raEB8F61Muc4hWbvVcyQdk9Z.jpg" alt='Not Foound Data'></Image>
    </div>
  }
  return (
    <div className="overflow-x-auto px-4 rounded-lg shadow-lg min-w-full inline w-full">
      <div className="w-[95%] hidden md:block">
        <table className="w-full">
          <thead className="bg-[#1b85db]">
            <tr>
              {['customerName', 'eventName', 'bookingDate', 'eventDate', 'tickets', 'status', 'Revenue'].map((column) => (
                <th
                  key={column}
                  onClick={() => handleSort(column)}
                  className="px-6 py-4 text-left text-xs rounded-t-xl text-white font-semibold uppercase tracking-wider cursor-pointer transition duration-300 ease-in-out"
                >
                  {column.charAt(0).toUpperCase() + column.slice(1).replace('Name', '')} <SortIcon column={column} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

            {
              sortedBookings.map((booking) => (
                <tr key={booking.id} className="transition-all duration-300 ease-in-out transform-gpu bg-gray-100">
                  <td>
                    <div className="flex space-x-4 items-center">
                      <div className="max-w-40">
                        <Image height={500} width={500} className=" w-12 h-12 rounded-full " src={booking?.bookedUserPhoto} alt="photo" />
                      </div>
                      <p>{booking.customerName}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.eventName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <Tooltip content={new Date(booking.createdAt).toLocaleDateString()}>
                      <span className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4 text-[#1b85db]" />
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </span>
                    </Tooltip>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <Tooltip content={new Date(booking.eventDate).toLocaleDateString()}>
                      <span className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4 text-[#1b85db]" />
                        {new Date(booking.eventDate).toLocaleDateString()}
                      </span>
                    </Tooltip>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <span className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-[#1b85db]" />
                      {booking.totalTickets}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <StatusBadge status={booking.refundRequested ? 'Refunded' : 'Success'} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`flex items-center ${booking.amount < 0 ? 'text-red-600' : 'text-[#1b85db]'}`}>
                      <DollarSign className="mr-1 h-4 w-4" />
                      {Math.abs(booking.amount).toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* Mobile View */}
      <div className="block md:hidden">
        {sortedBookings.map((booking) => (
          <div key={booking.id} className="bg-white shadow-md rounded-lg mb-4 p-4">
            <div className="flex flex-col mb-2">
              <Image height={60} width={60} className="w-16 h-16 rounded-full" src={booking.bookedUserPhoto} alt="photo" />
              <div className="mt-2">
                <p className="font-medium text-gray-900">{booking.customerName}</p>
                <p className="text-gray-950 text-xl">{booking.eventName}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p className="flex items-center mb-2">
                <CalendarDays className="mr-2 h-4 w-4 text-[#1b85db]" />
                Booking Date: {new Date(booking.bookingDate).toLocaleDateString()}
              </p>
              <p className="flex items-center mb-2">
                <CalendarDays className="mr-2 h-4 w-4 text-[#1b85db]" />
                Event Date: {new Date(booking.eventDate).toLocaleDateString()}
              </p>
              <p className="flex items-center mb-2">
                <Users className="mr-2 h-4 w-4 text-[#1b85db]" />
                Tickets: {booking.tickets}
              </p>
              <p className="flex items-center mb-2">
                <DollarSign className="mr-2 h-4 w-4 text-[#1b85db]" />
                amount: {booking.amount < 0 ? '-' : ''}${Math.abs(booking.amount).toFixed(2)}
              </p>
              <StatusBadge status={booking.refundRequested ? 'Refunded' : 'Success'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBookingsTable;
