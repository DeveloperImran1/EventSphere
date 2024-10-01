import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { RiUserFollowFill } from "react-icons/ri";

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
      <button className="w-full sm:w-auto ml-4 flex items-center gap-2 text-xl px-3 py-2 rounded-md bg-blue-400 font-bold "><RiUserFollowFill />Follow</button>

        <button className="w-full sm:w-auto ml-4 flex items-center gap-2 text-xl px-3 py-2 rounded-md bg-green-400 font-bold "><AiFillMessage /> Message</button>

      </div>
    </div>
  );
};

export default Cards;
