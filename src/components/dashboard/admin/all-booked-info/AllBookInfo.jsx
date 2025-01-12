"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

const AllBookInfo = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalTickets, setTotalTickets] = useState("");
  const [amount, setAmount] = useState("");
  const [sortDate, setSortDate] = useState("new"); // Default to "new" to show latest data first

  console.log(orders);

  const fetchOrders = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:9000/orders?page=${page}&limit=10&eventName=${searchTerm}&totalTickets=${totalTickets}&amount=${amount}&sortDate=${sortDate}`
      );
      const { orders, totalPages: pages } = response.data;
      setOrders(orders);
      setTotalPages(pages);
    } catch (err) {
      console.error("Error fetching orders:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(currentPage);
  }, [currentPage, searchTerm, totalTickets, amount, sortDate]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchOrders(1);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">All Orders</h1>

      {/* Filters */}
      <form onSubmit={handleSearch} className="mb-6 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by event name..."
              className="border rounded-md px-4 py-2 mr-2 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Search
            </button>
          </div>

          <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0 px-4 py-2">
            <div>
              <select
                onChange={(e) => setTotalTickets(e.target.value)}
                className="border rounded-md px-4 py-3 w-full"
              >
                <option value="" className="px-4 py-2">
                  Select Total Tickets
                </option>
                <option value="3">3 or more</option>
                <option value="5">5 or more</option>
                <option value="8">8 or more</option>
                <option value="10">10 or more</option>
              </select>
            </div>

            <div>
              <select
                onChange={(e) => setAmount(e.target.value)}
                className="border rounded-md px-4 py-3 w-full"
              >
                <option value="">Select Amount</option>
                <option value="500">$500 or more</option>
                <option value="1000">$1000 or more</option>
                <option value="2000">$2000 or more</option>
                <option value="3000">$3000 or more</option>
              </select>
            </div>

            <div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() =>
                    setSortDate(sortDate === "old" ? "new" : "old")
                  }
                  className={`px-4 py-2 rounded-md ${
                    sortDate === "new"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {sortDate === "new" ? "Oldest" : "Newest"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {loading && <p className="text-gray-700">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && orders.length === 0 && (
        <p className="text-gray-700">No orders found.</p>
      )}

      {/* Orders Table */}
      {!loading && !error && orders.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700 border-b border-gray-300">
                <th className="py-3 px-6 text-left border-r border-gray-300">
                  Events Name
                </th>
                <th className="py-3 px-6 text-left border-r border-gray-300 ">
                  Customer Name
                </th>
                <th className="py-3 px-6 text-left border-r border-gray-300">
                  Seats
                </th>
                <th className="py-3 px-6 text-left border-r border-gray-300">
                  Transition ID
                </th>
                <th className="py-3 px-6 text-left">Amounts</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-3 px-6 border-b border-gray-300">
                    {order?.eventName?.slice(0, 20) || "N/A"}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {order?.bookedUserName || "N/A"}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {order.selectSeatNames &&
                    order.selectSeatNames.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {order?.selectSeatNames?.map((seat, index) => (
                          <span key={index} className="inline-block rounded-md">
                            {seat}
                          </span>
                        ))}
                      </div>
                    ) : (
                      "N/A"
                    )}
                  </td>

                  <td className="py-3 px-6 border-b border-gray-300">
                    {order?.transitionId && order.transitionId.length > 15
                      ? `...${order?.transitionId?.slice(-10)}`
                      : order?.transitionId || "N/A"}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-300">
                    {order?.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination Controls */}
      {!loading && !error && totalPages > 1 && (
        <div className="mt-4 flex justify-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllBookInfo;
