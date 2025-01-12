"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

const AllBookInfo = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:9000/orders");
      console.log("Response:", response.data);
      setOrders(response.data);
    } catch (err) {
      console.error("Error fetching orders:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">All Orders</h1>
      {loading && <p className="text-gray-700">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && orders.length === 0 && (
        <p className="text-gray-700">No orders found.</p>
      )}
      {!loading && !error && orders.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-6 text-left">Order ID</th>
                <th className="py-3 px-6 text-left">Customer Name</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Total Price</th>
                <th className="py-3 px-6 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-100"
                      : "bg-white"
                  }
                >
                  <td className="py-3 px-6">{order._id}</td>
                  <td className="py-3 px-6">{order.customerName || "N/A"}</td>
                  <td className="py-3 px-6">{order.status || "Pending"}</td>
                  <td className="py-3 px-6">
                    {order.totalPrice ? `$${order.totalPrice}` : "N/A"}
                  </td>
                  <td className="py-3 px-6">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBookInfo;
