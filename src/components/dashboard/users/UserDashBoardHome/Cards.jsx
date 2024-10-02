import React from "react";

const Cards = () => {
  return (
    <div className="max-w-md lg:max-w-xl mt-4 mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-6 space-y-4 lg:space-y-0">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-600">150</h2>
          <h2 className="text-base lg:text-lg font-semibold text-gray-700">Followers</h2>
        </div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-600">140</h2>
          <h2 className="text-base lg:text-lg font-semibold text-gray-700">Place Stay</h2>
        </div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-600">45</h2>
          <h2 className="text-base lg:text-lg font-semibold text-gray-700">Reviews</h2>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-300">
          Follow
        </button>
        <button className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 transition duration-300">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Cards;
