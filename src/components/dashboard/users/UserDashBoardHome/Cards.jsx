import React from "react";

const Cards = () => {
  return (
    <div class="max-w-md mt-4 mx-start p-6 bg-white rounded-lg shadow-lg space-y-6">
    <div class="flex justify-between items-center space-x-6">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-blue-600">150</h2>
        <h2 class="text-lg font-semibold text-gray-700">Followers</h2>
      </div>
      <div class="text-center">
        <h2 class="text-4xl font-bold text-green-600">140</h2>
        <h2 class="text-lg font-semibold text-gray-700">Place Stay</h2>
      </div>
      <div class="text-center">
        <h2 class="text-4xl font-bold text-red-600">45</h2>
        <h2 class="text-lg font-semibold text-gray-700">Reviews</h2>
      </div>
    </div>
    
    <div class="flex justify-center gap-4">
      <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-300">
        Follow
      </button>
      <button class="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 transition duration-300">
        Send Message
      </button>
    </div>
  </div>
  
  );
};

export default Cards;
