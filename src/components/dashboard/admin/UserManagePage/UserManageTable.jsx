import React from 'react';

const UserManageTable = ({handleBlock, users}) => {
    return (
        <>
            <div className="hidden md:block md:pr-14">
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
                        {users.map(user => (
                            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="flex items-center py-4 px-4">
                                    <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                                    {user.name}
                                </td>
                                <td className="py-4 px-4">{user.email}</td>
                                <td className="py-4 px-4">{user.role}</td>
                                <td className="py-4 px-4">
                                    <span className={`font-bold ${user.status === "Active" ? 'text-green-500' : 'text-red-500'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4">
                                    <button
                                        onClick={() => handleBlock(user.id)}
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
            {/* Mobile */}
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
                            {users.map(user => (
                                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50 transition duration-300">
                                    <td className="flex items-center py-4 px-4 text-sm md:text-base">
                                        <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                                        <div>
                                            <div className="font-semibold">{user.name}</div>
                                            <div className="text-gray-500 text-xs">{user.email}</div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm md:text-base">{user.role}</td>
                                    <td className="py-4 px-4 text-sm md:text-base">
                                        <span className={`font-bold ${user.status === "Active" ? 'text-green-500' : 'text-red-500'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-sm md:text-base">
                                        <button
                                            onClick={() => handleBlock(user.id)}
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
        </>
    );
};

export default UserManageTable;