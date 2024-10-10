import Image from 'next/image';
import React from 'react';

const Table = () => {
    const users = [
        {
            name: "John Doe",
            email: "john@example.com",
            number: 165,
            img: "https://via.placeholder.com/50"
        },
        {
            name: "Jane Smith",
            email: "jane@example.com",
            number: 250,
            img: "https://via.placeholder.com/50"
        },
        {
            name: "Sam Wilson",
            email: "sam@example.com",
            number: 340,
            img: "https://via.placeholder.com/50"
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-start">Recent Sales</h2>
            <div className='flex gap-6 my-4'>
                <div>
                    <h2 className='text-sm text-gray-800 text-start mb-2'>This Week</h2>
                    <h2 className='text-xl font-semibold text-red-500 text-start'>$5500.00</h2>
                </div>
                <div>
                    <h2 className='text-sm text-gray-800 text-start mb-2'>Previous Week</h2>
                    <h2 className='text-xl font-semibold text-red-500 text-start'>$6550.00</h2>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">User Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Number</th>
                            <th className="py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50 transition duration-200">
                                <td className="py-4 px-4">
                                    <Image height={676} width={1200}  src={user.img} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                                </td>
                                <td className="py-4 px-4 font-bold text-gray-800">{user.name}</td>
                                <td className="py-4 px-4 text-red-500">{user.email}</td>
                                <td className="py-4 px-4 font-semibold text-gray-800">{user.number}</td>
                                <td className="py-4 px-4">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                                        Profile
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
