"use client"
import React, { useEffect, useState } from 'react';
import CardSection from './CardSection';
import Table from './Table';
import NewChart from './UserManagePage/NewChart';
import axios from 'axios';
import Loading from '@/components/shared/LoadingSpiner/Loading';

const AdminInfo = () => {
    const [metrics, setMetrics] = useState(null);
    console.log(metrics);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchMetrics = async () => {
        try {
          const response = await axios.get('https://event-sphare-server.vercel.app/metricsForAdminChart');
          setMetrics(response.data);
        } catch (error) {
          setError('Error fetching metrics');
        } finally {
          setLoading(false);
        }
      };
  
      fetchMetrics();
    }, []); // Empty array means this effect runs once when the component mounts
  
    if (loading) return <Loading></Loading>;
    if (error) return <div>{error}</div>;

    return (
        <>
            
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
