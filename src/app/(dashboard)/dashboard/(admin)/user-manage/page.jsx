'use client'; // This line makes the component a Client Component

import React from 'react';
import Top from '@/components/dashboard/admin/UserManagePage/Top';
import UserManageTable from '@/components/dashboard/admin/UserManagePage/UserManageTable';

// Sample data for demonstration
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        status: "Active",
        image: "https://via.placeholder.com/50"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "User",
        status: "Inactive",
        image: "https://via.placeholder.com/50"
    },
    // Add more users as needed
];

const UserManage = () => {
    const handleBlock = (userId) => {
        // Logic to block the user
        console.log(`User with ID ${userId} blocked.`);
    };

    return (
        <div className="font-sans">
            {/* Input And Filter */}
            <Top />
            {/* Table */}
            <UserManageTable users={users} handleBlock={handleBlock}/>
        </div>
    );
};

export default UserManage;