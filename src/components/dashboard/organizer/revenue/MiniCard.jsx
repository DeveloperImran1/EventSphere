import React from "react";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FcOpenedFolder } from "react-icons/fc";

const MiniCard = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <div className="p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-md">
          <h2 className="text-4xl font-extrabold text-blue-700 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            Stay Informed with Today's Updates
          </h2>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative flex items-center p-5 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg hover:scale-105 hover:shadow-xl transition duration-300 shadow-lg transform">
          <div className="text-6xl text-blue-600 drop-shadow-lg">
            <MdTipsAndUpdates />
          </div>
          <div className="ml-6 text-lg font-bold text-gray-700">
            <span className="text-blue-800 block">Update!</span> Tips Bisnis Hari Ini
          </div>
          <div className="absolute bottom-4 right-4 text-blue-600">
            <MdTipsAndUpdates className="text-2xl" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex items-center p-5 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg hover:scale-105 hover:shadow-xl transition duration-300 shadow-lg transform">
          <div className="text-6xl text-yellow-600 drop-shadow-lg">
            <FaRegFileAlt />
          </div>
          <div className="ml-6 text-lg font-bold text-gray-700">
            <span className="text-blue-800 block">Invoice!</span> Jatuh Tempo Hari Ini
          </div>
          <div className="absolute bottom-4 right-4 text-yellow-600">
            <FaRegFileAlt className="text-2xl" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative flex items-center p-5 bg-gradient-to-br from-green-200 to-green-300 rounded-lg hover:scale-105 hover:shadow-xl transition duration-300 shadow-lg transform">
          <div className="text-6xl text-green-600 drop-shadow-lg">
            <FcOpenedFolder />
          </div>
          <div className="ml-6 text-lg font-bold text-gray-700">
            <span className="text-blue-800 block">Import!</span> File Data Anda Disini
          </div>
          <div className="absolute bottom-4 right-4 text-green-600">
            <FcOpenedFolder className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
