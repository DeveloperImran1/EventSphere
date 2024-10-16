import React, { useState } from 'react';

const UserManageTable = ({ handleBlock, users }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 8; // Number of users per page

    // Calculate the indices of users for the current page
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Create pagination buttons
    const totalPages = Math.ceil(users.length / usersPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="hidden md:block md:pr-14">
                <div className="">
                    <table className="min-w-full mt-6 bg-white border border-gray-200 shadow-md">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600">
                                <th className="py-3 px-4 text-left border-b border-gray-200">User</th>
                                <th className="py-3 px-4 text-left border-b border-gray-200">Email</th>
                                <th className="py-3 px-4 text-left border-b border-gray-200">Role</th>
                                <th className="py-3 px-4 text-left border-b border-gray-200">Status</th>
                                <th className="py-3 px-4 text-left border-b border-gray-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map(user => (
                                <tr key={user?._id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="flex items-center py-4 px-4">
                                        <img src={user?.image} alt={user?.name} className="w-10 h-10 rounded-full mr-3" />
                                        {user?.name}
                                    </td>
                                    <td className="py-4 px-4">{user?.email}</td>
                                    <td className="py-4 px-4">{user?.role}</td>
                                    <td className="py-4 px-4">
                                        <span className={`font-bold ${user?.status === "Active" ? 'text-green-500' : 'text-red-500'}`}>
                                            {user?.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <button
                                            onClick={() => handleBlock(user?._id)}
                                            className="bg-red-600 text-white rounded-md px-3 py-1 hover:bg-red-700 transition duration-300"
                                        >
                                            Block
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/*  */}
            <div className="md:hidden">
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full mt-6 bg-white border border-gray-200 shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600">
                                <th className="py-3 px-4 text-left border-b border-gray-200 text-sm md:text-base">User Info</th>
                                <th className="py-3 px-4 text-left border-b border-gray-200 text-sm md:text-base">Role</th>
                                <th className="py-3 px-4 text-left border-b border-gray-200 text-sm md:text-base">Status</th>
                                <th className="py-3 px-4 text-left border-b border-gray-200 text-sm md:text-base">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map(user => (
                                <tr key={user?._id} className="border-b border-gray-200 hover:bg-gray-50 transition duration-300">
                                    <td className="flex items-center py-4 px-4 text-sm md:text-base">
                                        <img src={user?.image} alt={user?.name} className="w-10 h-10 rounded-full mr-3" />
                                        <div>
                                            <div className="font-semibold">{user?.name}</div>
                                            <div className="text-gray-500 text-xs">{user?.email.slice(0, 10)}...</div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm md:text-base">{user?.role}</td>
                                    <td className="py-4 px-4 text-sm md:text-base">
                                        <span className={`font-bold ${user?.status === "Active" ? 'text-green-500' : 'text-red-500'}`}>
                                            {user?.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-sm md:text-base">
                                        <button
                                            onClick={() => handleBlock(user?._id)}
                                            className="bg-red-600 text-white rounded-md px-3 py-1 hover:bg-red-700 transition duration-300"
                                        >
                                            Block
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center my-4 space-x-2">
                <div className="">
                    <button
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </div>
                <div className="flex gap-x-3">
                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`px-3 py-1 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md hover:bg-gray-300`}
                        >
                            {number}
                        </button>
                    ))}
                </div>
                <div className="">
                    <button
                        onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default UserManageTable;
