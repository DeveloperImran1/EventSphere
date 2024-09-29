import React from "react";
import { GrFormClose } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="bg-gray-200 h-screen w-[97%] p-5">
      <h2 className="font-bold text-xl md:text-2xl text-black text-start mb-7">
        Notifications
      </h2>
      {/* Notifications Box */}
      <div className="px-2 md:px-12 py-5 mt-2 rounded-md bg-white">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap gap-x-10">
            <div className="flex gap-x-5">
              <GrFormClose className="text-3xl p-2 bg-slate-400/50 rounded-md" />
              <p className="bg-green-600 text-white text-sm flex px-3 font-semibold items-center rounded-md">
                Mehedi Hasan
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-1 justify-center items-center ">
            <IoTimeOutline className="text-2xl text-gray-400"/>
            <p className="text-gray-400">24 Nov 2024 at 9:30 AM</p>
          </div>
        </div>
        <div className="pl-12 mt-2">
            <h6 className="text-xl font-bold">Dusshopno Odd Signature Songs</h6>
            <p className="mb-2">The way the artist blends the instruments is incredible. This song is pure magic from start to finish</p>
            <span className="bg-orange-300 text-xs font-semibold py-1 px-4 rounded-3xl text-center cursor-pointer">More Details</span>
        </div>
      </div>
      {/* Notifications Box */}
      <div className="px-2 md:px-12 py-5 mt-2 rounded-md bg-white">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap gap-x-10">
            <div className="flex gap-x-5">
              <GrFormClose className="text-3xl p-2 bg-slate-400/50 rounded-md" />
              <p className="bg-green-600 text-white text-sm flex px-3 font-semibold items-center rounded-md">
                Mehedi Hasan
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-1 justify-center items-center ">
            <IoTimeOutline className="text-2xl text-gray-400"/>
            <p className="text-gray-400">24 Nov 2024 at 9:30 AM</p>
          </div>
        </div>
        <div className="pl-12 mt-2">
            <h6 className="text-xl font-bold">Dusshopno Odd Signature Songs</h6>
            <p className="mb-2">The way the artist blends the instruments is incredible. This song is pure magic from start to finish</p>
            <span className="bg-orange-300 text-xs font-semibold py-1 px-4 rounded-3xl text-center cursor-pointer">More Details</span>
        </div>
      </div>
    </div>
  );
};

export default page;
