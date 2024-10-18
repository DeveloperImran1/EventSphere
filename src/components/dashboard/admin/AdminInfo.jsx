"use client"
import React, { useEffect, useState } from 'react';
import CardSection from './CardSection';
import Table from './Table';
import NewChart from './UserManagePage/NewChart';
import axios from 'axios';

const AdminInfo = () => {
    const [metrics, setMetrics] = useState(null);
    console.log(metrics);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchMetrics = async () => {
        try {
          const response = await axios.get('process.env.https://event-sphare-server.vercel.app/metricsForAdminChart');
          setMetrics(response.data);
        } catch (error) {
          setError('Error fetching metrics');
        } finally {
          setLoading(false);
        }
      };
  
      fetchMetrics();
    }, []); // Empty array means this effect runs once when the component mounts
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            {/* <div className="w-full bg-gradient-to-r from-green-200 via-yellow-200 to-violet-200 flex flex-col md:flex-row items-center justify-center p-4 md:p-6 shadow-lg rounded-lg">
                <div className="flex-shrink-0">
                    <Image
                         height={675}
                         width={1200}
                        src="https://via.placeholder.com/150"
                        alt="User Profile"
                        className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg"
                    />
                </div>

                <div className="mt-4 md:ml-8 md:mt-0 text-black flex flex-col items-center md:items-start space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-wide">John Doe</h2>
                    <p className="text-lg md:text-xl font-light">Admin</p>
                    <p className="text-sm md:text-base max-w-md text-center md:text-left">
                        Welcome to your personalized dashboard. Manage your orders, track product status, and much more!
                    </p>

                    <div className="mt-4">
                        <button className="px-5 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-200">
                            View Profile
                        </button>
                    </div>
                </div>
            </div> */}
            <div className="mt-3 md:mt-5 mr-6">
                <CardSection metrics={metrics}/>
            </div>
            <div className="mt-8 mr-6">
                {/* <Chart /> */}
                <div className="">
                    <NewChart/>
                </div>
                <div className="">
                    <Table/>
                </div>
            </div>
        </>
    );
};

export default AdminInfo;
