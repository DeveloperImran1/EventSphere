"use client";
import Image from 'next/image';
import Link from 'next/link';

const Table = () => {
    // Static data for weekly sales and user data
    const weeklySales = {
        currentWeekSales: 1200,  // Example static value
        previousWeekSales: 900   // Example static value
    };

    const data = [
        {
            bookedUserPhoto: "https://i.postimg.cc/0yq3JqQT/image.jpg",
            bookedUserName: "John Doe",
            bookedUserEmail: "john@example.com",
            amount: "$150"
        },
        {
            bookedUserPhoto: "https://i.postimg.cc/VvQ9Hm31/indian-asian-collage-boy-formal-dress-wearing-spectacles-54391-2312.jpg",
            bookedUserName: "Jane Smith",
            bookedUserEmail: "jane@example.com",
            amount: "$200"
        },
        // Add more static user data as needed
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-start">Recent Sales</h2>
            <div className='flex gap-6 my-4'>
                <div>
                    <h2 className='text-sm text-gray-800 text-start mb-2'>This Week</h2>
                    <h2 className='text-xl font-semibold text-red-500 text-start'>${weeklySales.currentWeekSales}</h2>
                </div>
                <div>
                    <h2 className='text-sm text-gray-800 text-start mb-2'>Previous Week</h2>
                    <h2 className='text-xl font-semibold text-red-500 text-start'>${weeklySales.previousWeekSales}</h2>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">User Name</th>
                            <th className="hidden md:block py-3 px-4">Email</th>
                            <th className="py-3 px-4">Booked Amount</th>
                            <th className="py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50 transition duration-200">
                                <td className="py-4 px-4">
                                    <Image src={user.bookedUserPhoto} alt={user.bookedUserName}
                                        width={48} height={48}  // Adjust width and height as needed
                                        className="w-12 h-12 rounded-full object-cover" />
                                </td>
                                <td className="py-4 px-4 font-bold text-gray-800">{user.bookedUserName}</td>
                                <td className="hidden md:block py-4 px-4 text-red-500">{user.bookedUserEmail}</td>
                                <td className="py-4 px-4 font-semibold text-gray-800">{user.amount}</td>
                                <td className="py-4 px-4">
                                    <Link href={`/dashboard/user-profile/${user.bookedUserEmail}`} className="button">
                                        Profile
                                    </Link>
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



// "use client";
// import useAxiosPublic from '@/hooks/useAxiosPublic';
// import { useQuery } from '@tanstack/react-query';
// import Image from 'next/image';
// import Link from 'next/link';


// const Table = ({ data, email }) => {
//     const axiosPublic = useAxiosPublic();
//     const { data: weeklySales = [], isPending: loading, refetch } = useQuery({
//         queryKey: ['weeklySales'],
//         queryFn: async () => {
//             const res = await axiosPublic.get(`/organizer-WeeklySales/${email}`);
//             // console.log(res.data)
//             return res.data;
//         }
//     })
//     console.log(weeklySales);

//     return (
//         <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-start">Recent Sales</h2>
//             <div className='flex gap-6 my-4'>
//                 <div>
//                     <h2 className='text-sm text-gray-800 text-start mb-2'>This Week</h2>
//                     <h2 className='text-xl font-semibold text-red-500 text-start'>${weeklySales.currentWeekSales}</h2>
//                 </div>
//                 <div>
//                     <h2 className='text-sm text-gray-800 text-start mb-2'>Previous Week</h2>
//                     <h2 className='text-xl font-semibold text-red-500 text-start'>${weeklySales.previousWeekSales}</h2>
//                 </div>
//             </div>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full">
//                     <thead>
//                         <tr className="bg-gray-100 text-left">
//                             <th className="py-3 px-4">Image</th>
//                             <th className="py-3 px-4">User Name</th>
//                             <th className="hidden md:block py-3 px-4">Email</th>
//                             <th className="py-3 px-4">Booked Amount</th>
//                             <th className="py-3 px-4">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data?.map((user, index) => (
//                             <tr key={index} className="border-b hover:bg-gray-50 transition duration-200">
//                                 <td className="py-4 px-4">
//                                     <Image src={user?.bookedUserPhoto} alt={user.name}
//                                         width={12} height={12}
//                                         className="w-12 h-12 rounded-full object-cover" />
//                                 </td>
//                                 <td className="py-4 px-4 font-bold text-gray-800">{user?.bookedUserName}</td>
//                                 <td className="hidden md:block py-4 px-4 text-red-500">{user?.bookedUserEmail}</td>
//                                 <td className="py-4 px-4 font-semibold text-gray-800">{user?.amount}</td>
//                                 <td className="py-4 px-4">
//                                     <Link href={`/dashboard/user-profile/${user?.bookedUserEmail}`} className="button">
//                                         Profile
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Table;
