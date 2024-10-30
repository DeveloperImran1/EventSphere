"use client"
import { HiDotsHorizontal, HiGift } from "react-icons/hi"

import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { FaBell, FaChevronDown, FaLock} from "react-icons/fa";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";

const RightSideChat = ({selectedUser}) => {
    const axiosPublic = useAxiosPublic()



  return (
    <div className="box-border h-[calc(100vh-64px)] pt-8 border">
    <div className=" flex  pb-2  flex-col  justify-center items-center ">
        <Image src={selectedUser?.image || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"}
          width={50} height={50} alt="avatar"
            className=" rounded-full h-[120px] w-[120px] " />

        <p className=" font-bold text-black">{selectedUser?.name}</p>
    
    </div>
    <div className=" flex items-center justify-center gap-2  text-sm mx-10 cursor-pointer">
        <p className="text-white font-medium bg-blue-600 px-5 py-1 rounded-full">Profile</p>
    </div>
</div>
  )
}

export default RightSideChat