'use client'; 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Top from '@/components/dashboard/admin/UserManagePage/Top';
import UserManageTable from '@/components/dashboard/admin/UserManagePage/UserManageTable';

const UserManage = () => {
    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    const handleBlock = (userId) => {
        console.log(`User with ID ${userId} blocked.`);
    };

    // Fetch users from the API
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:9000/user');
            setUsers(response.data); // Set the fetched users into state
        } catch (err) {
            setError(err.message); 
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [users]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>; 

    return (
        <div className="font-sans">
            {/* Input And Filter */}
            <Top />
            {/* Table */}
            <UserManageTable users={users} handleBlock={handleBlock} />
        </div>
    );
};

export default UserManage;