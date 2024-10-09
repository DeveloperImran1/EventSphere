'use client'

import React, { useEffect, useState } from 'react'
import { CalendarDays, DollarSign, Users, ChevronUp, ChevronDown } from 'lucide-react'
import Swal from 'sweetalert2';

const bookings = [
  {
    id: 1,
    customerName: 'John Doe',
    eventName: 'Summer Music Festival',
    bookingDate: '2024-06-15',
    eventDate: '2024-07-20',
    tickets: 3,
    status: 'Confirmed',
    revenue: 450,
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    eventName: 'Tech Conference 2024',
    bookingDate: '2024-05-30',
    eventDate: '2024-09-05',
    tickets: 2,
    status: 'Refund',
    revenue: -600,
  },
  {
    id: 3,
    customerName: 'Bob Johnson',
    eventName: 'Food & Wine Expo',
    bookingDate: '2024-07-01',
    eventDate: '2024-08-15',
    tickets: 4,
    status: 'Confirmed',
    revenue: 800,
  },
  {
    id: 4,
    customerName: 'Alice Brown',
    eventName: 'Charity Gala Dinner',
    bookingDate: '2024-06-20',
    eventDate: '2024-10-10',
    tickets: 1,
    status: 'Canceled',
    revenue: 0,
  },
  {
    id: 5,
    customerName: 'Charlie Wilson',
    eventName: 'International Film Festival',
    bookingDate: '2024-08-05',
    eventDate: '2024-11-15',
    tickets: 5,
    status: 'Confirmed',
    revenue: 1000,
  },
]

const StatusBadge = ({ status }) => {
  const colorMap = {
    Confirmed: 'bg-green-100 text-green-800',
    Refund: 'bg-yellow-100 text-yellow-800',
    Canceled: 'bg-red-100 text-red-800',
  }

  return (
    <span className={`${colorMap[status]} px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 ease-in-out hover:scale-110`}>
      {status}
    </span>
  )
}

const Tooltip = ({ content, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  )
}

const EventBookingsTable = () => {
  const [sortColumn, setSortColumn] = useState('bookingDate')
  const [sortDirection, setSortDirection] = useState('desc')




  useEffect(() => {
    // Alert message for sorting feature
    Swal.fire({
      title: '🔄 Sorting Available!',
      text: 'You can click on table headers to sort the data.',
      icon: 'info',
      confirmButtonText: 'Okay, got it!',
    });
  }, []);


  const sortedBookings = [...bookings].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }


  const SortIcon = ({ column }) => {
    if (sortColumn !== column) return null
    return sortDirection === 'asc' ? <ChevronUp className="inline-block w-4 h-4" /> : <ChevronDown className="inline-block w-4 h-4" />
  }

  return (
    <div className="overflow-x-auto my-10 px-4  rounded-lg shadow-lg">
      <table className="min-w-full     ">
        <thead className="bg-gradient-to-r from-purple-500  to-indigo-600">
          <tr>
            {['customerName', 'eventName', 'bookingDate', 'eventDate', 'tickets', 'status', 'revenue'].map((column) => (
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
          {sortedBookings.map((booking) => (
            <tr 
              key={booking.id} 
              className="hover:bg-gradient-to-br  from-blue-200 to-purple-200  hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.04] transition-all duration-300 ease-in-out transform-gpu"
              
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.customerName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.eventName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                <Tooltip content={new Date(booking.bookingDate).toLocaleDateString()}>
                  <span className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 text-indigo-600" />
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </span>
                </Tooltip>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                <Tooltip content={new Date(booking.eventDate).toLocaleDateString()}>
                  <span className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 text-indigo-600" />
                    {new Date(booking.eventDate).toLocaleDateString()}
                  </span>
                </Tooltip>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                <span className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-indigo-600" />
                  {booking.tickets}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <StatusBadge status={booking.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className={`flex items-center ${booking.revenue < 0 ? 'text-red-600' : 'text-green-600'}`}>
                  <DollarSign className="mr-1 h-4 w-4" />
                  {Math.abs(booking.revenue).toFixed(2)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventBookingsTable