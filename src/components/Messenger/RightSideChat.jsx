import { HiDotsHorizontal, HiGift } from "react-icons/hi"

import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { FaBell, FaChevronDown, FaLock} from "react-icons/fa";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";

const RightSideChat = ({currentChat,currentUser}) => {
    const axiosPublic = useAxiosPublic()
    const [user, setUser] = useState([])

    console.log(user);
    
     useEffect(() => {
         const friendId = currentChat?.members?.find(m => m !== currentUser)
  
         const getUsers = async () => {
             try {
                 const res = await axiosPublic.get(`/single-user/${friendId}`)
 
                 setUser(res?.data)
             }
             catch (err) {
                 console.log(err)
             }
         }
         getUsers()
     }, [currentChat?.members,currentUser,axiosPublic])

  return (
    <div className="mt-3 ">
    <div className=" flex  pb-2  flex-col  justify-center items-center ">
        <Image src={user?.image || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"}  width={50} height={50} alt="avatar"
            className=" rounded-full h-[120px] w-[120px] " />

        <p className=" font-bold text-black">{user?.name}</p>
    
    </div>
    <div className=" flex bg-gray-200 px-2 py-1 items-center justify-center gap-2  text-sm mx-10 rounded-full">
        <p>   <FaLock color="000" /> </p>
        <p className="text-black">End-to-end encrypeted</p>

    </div>
    <div className=" flex gap-5 justify-center items-center my-6">
        <div className="">
            <FaCircleUser size={50} color="black" className=" bg-gray-200 rounded-full p-2" />
            <p className=" text-center">Profile</p>
        </div>
        <div className="">
            <FaBell size={50} color="black"  className=" bg-gray-200  rounded-full p-2" />
            <p className=" text-center">Mute</p>
        </div>
        <div className="">
            <IoSearch size={50} color="black"  className=" bg-gray-200  rounded-full p-2" />
            <p className=" text-center">Search</p>
        </div>


    </div>
    <div className=" mx-5 flex flex-col gap-3 ">
        <div className=" flex items-center gap-2 justify-between">
            <p className="text-black">Chat info</p>
            <FaChevronDown color="black"  />
        </div>
        <div className=" flex items-center gap-2 justify-between">
            <p className="text-black">Customize Chat</p>
            <FaChevronDown color="black" />
        </div>
        <div className=" flex items-center gap-2 justify-between">
            <p className="text-black">Media & Files</p>
            <FaChevronDown color="black" />
        </div>
        <div className=" flex items-center gap-2 justify-between">
            <p className="text-black">Privacy & Support</p>
            <FaChevronDown color="black" />
        </div>
    </div>
</div>
  )
}

export default RightSideChat