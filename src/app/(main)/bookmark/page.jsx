"use client"
import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image';


const Bookmark = () => {

  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const itemsPerPage = 10; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(invoiceData.length / itemsPerPage);

  // Get the current items for the page
  const currentInvoices = invoiceData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="container px-4 mx-auto">
      <div className=" my-5 md:mx-0 mx-2 flex">
        <div className="relative">
          <input class="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm outline-none sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
          <BsSearch className='text-slate-400 absolute top-3 left-3' />
        </div>
        <div className=" ml-2">
          <Select className="">
            <SelectTrigger className="w-[180px] justify-around">
              <LuFilter className='text-xl' />
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="border border-gray-200  md:rounded-lg">
        <div className="mx-2 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left  text-gray-500">
                      <div className="flex items-center gap-x-10">
                        <input type="checkbox" className="text-green-500 border-gray-300 rounded" />
                        <button className="flex items-center gap-x-2">
                          <span>Event/Ticket</span>
                        </button>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left  text-gray-500">Date</th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left  text-gray-500">Status</th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left  text-gray-500">Location</th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left  text-gray-500">Amount</th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left  text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white  ">
                  {currentInvoices.map((invoice, index) => (
                    <tr key={index} className='border-y py-5'>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-10">
                          <input type="checkbox" className="text-green-500 border-gray-300 rounded" />
                          <div className="flex items-center gap-x-2">
                            <Image height={30} width={30} className="object-cover w-8 h-8 rounded-full" src={invoice.customer.avatar} alt="img" />
                            <div>
                              <h2 className="text-sm font-medium text-gray-800 dark:text-white">{invoice.customer.name}</h2>
                              <p className="text-xs font-normal text-gray-600">{invoice.customer.email}</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{invoice.date}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 w-3/5 justify-center ${invoice.status === 'Paid'
                            ? 'text-emerald-500 bg-emerald-100/60 border border-emerald-500'
                            : invoice.status === 'Cancelled'
                              ? 'text-red-500 bg-red-100/60 border border-red-500'
                              : 'text-orange-500 bg-orange-100/60 border border-orange-500'
                            }`}
                        >
                          {invoice.status}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {invoice.purchase}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{invoice.purchase}</td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 link  hover:text-indigo-500 focus:outline-none">Details</button>
                          <button className=" transition-colors duration-200 bg-white hover:bg-slate-100 border py-2 px-4 rounded-xl">Booking</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-between p-4 md:max-w-[60%] mx-auto items-center">
          <button
            className={`transition-colors duration-200 bg-white hover:bg-slate-100 border py-2 text-sm px-4 rounded-xl ${currentPage === 1 ? 'text-gray-400' : 'text-blue-600'}`}
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <span className="text-sm text-gray-500">
            Page {currentPage} / {totalPages}
          </span>
          <button
            className={`transition-colors duration-200 bg-white hover:bg-slate-100 border py-2 text-sm px-4 rounded-xl ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-600'}`}
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bookmark;

// Manual fake data array with more than 10 items for pagination demonstration
const invoiceData = [
  { invoiceNumber: 3012, date: '2024-09-30', status: 'Paid', customer: { name: 'John Doe', email: 'john.doe@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3023, date: '2024-08-15', status: 'Cancelled', customer: { name: 'Jane Smith', email: 'jane.smith@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Mobile Phone' },
  { invoiceNumber: 3034, date: '2024-07-12', status: 'Pending', customer: { name: 'Alice Johnson', email: 'alice.johnson@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Smart Watch' },
  { invoiceNumber: 3045, date: '2024-05-20', status: 'Paid', customer: { name: 'Michael Brown', email: 'michael.brown@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Headphones' },
  { invoiceNumber: 3056, date: '2024-03-18', status: 'Pending', customer: { name: 'Emily Davis', email: 'emily.davis@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Tablet' },
  { invoiceNumber: 3067, date: '2024-03-15', status: 'Paid', customer: { name: 'Chris Wilson', email: 'chris.wilson@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'TV' },
  { invoiceNumber: 3078, date: '2024-02-20', status: 'Pending', customer: { name: 'Patricia Adams', email: 'patricia.adams@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Refrigerator' },
  { invoiceNumber: 3089, date: '2024-01-30', status: 'Cancelled', customer: { name: 'Brian Taylor', email: 'brian.taylor@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Oven' },
  { invoiceNumber: 3090, date: '2023-12-15', status: 'Paid', customer: { name: 'Sarah Parker', email: 'sarah.parker@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Camera' },
  { invoiceNumber: 3101, date: '2023-11-10', status: 'Paid', customer: { name: 'Daniel Evans', email: 'daniel.evans@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Smartphone' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  { invoiceNumber: 3112, date: '2023-10-05', status: 'Pending', customer: { name: 'Nancy Moore', email: 'nancy.moore@example.com', avatar: 'https://via.placeholder.com/40' }, purchase: 'Laptop' },
  // Add more items if necessary
];