import { HiDotsHorizontal, HiGift } from "react-icons/hi"
import { LiaEdit } from "react-icons/lia";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { FaBell, FaChevronDown, FaLock, FaPhoneAlt } from "react-icons/fa";
import { IoMdImages, IoMdVideocam } from "react-icons/io";
import { RiInformationFill } from "react-icons/ri";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { LuSticker } from "react-icons/lu";
import { PiSmileyStickerFill } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";

const Chat = () => {
    return (
        <div className=" text-black flex my-5">
            <div className=" w-[400px] border-r-2 px-3">
                <div className=" flex  items-center justify-between">
                    <h1 className=" font-semibold">Chats</h1>
                    <div className=" flex gap-4">
                        <HiDotsHorizontal size={30} className=" bg-slate-100  rounded-full p-1" />
                        <LiaEdit size={30} className=" bg-slate-100  rounded-full p-1" />
                    </div>
                </div>
                <div className=" mx-2 relative">
                    <Input placeholder="Search Messenger" className='pl-7 bg-slate-50  rounded-full' />
                    <IoSearch className=" absolute top-3 left-2 text-slate-600 font-semibold" />
                </div>
                <div className=" flex  gap-3 my-2 mx-2 items-center">
                    <p className=" text-blue-600 bg-blue-100 px-3 py-1 rounded-2xl font-medium ">Inbox</p>
                    <p className=" text-black font-medium">Communities</p>
                </div>
                <div className=" mt-5 flex gap-3 ml-3">
                    <Image src={'https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg='} width={40} height={50} alt="avatar"
                        className=" rounded-full" />
                    <div className=" ">
                        <p className=" font-bold text-black">Imran</p>
                        <div className=" flex gap-1">
                            <p>How are yor ? </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[500px] border-r-2 ">
                <div className=" mt-5 flex gap-3 ml-3 justify-between items-center shadow-sm">
                    <div className=" flex gap-3 pb-2 ">
                        <Image src={'https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg='} width={40} height={50} alt="avatar"
                            className=" rounded-full" />
                        <div className=" ">
                            <p className=" font-bold text-black">Imran</p>
                            <p className=" text-sm">Active 5h ago </p>

                        </div>
                    </div>
                    <div className=" flex gap-3 pr-3">
                        <FaPhoneAlt className="text-blue-600" />
                        <IoMdVideocam className="text-blue-600" />
                        <RiInformationFill className="text-blue-600" />
                    </div>
                </div>
                <div className=" text-center my-2">
                    <p className=" text-sm"> Sep 2,2024, 6:02 pm</p>
                </div>
                <div className=" flex items-center gap-2 px-3">

                    <Image src={'https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg='} width={40} height={60} alt="avatar"
                        className=" rounded-full" />
                    <p className=" text-sm text-black bg-slate-100 w-full rounded-2xl py-1 px-3">How are you</p>

                </div>
                <div className=" my-2 px-3">
                    <p className=" text-sm  bg-blue-500 text-white w-full rounded-2xl py-1 px-3 text-right">I am fine</p>
                </div>
                <div className=" flex items-center mx-3">
                    <div className=" flex gap-2">
                        <BsFillPlusCircleFill className="text-blue-600" />
                        <IoMdImages className="text-blue-600" />
                        <LuSticker className="text-blue-600" />
                        <HiGift className="text-blue-600" />
                    </div>
                    <div className=" mx-2 relative">
                        <Input placeholder="Aa" className='pl-3 bg-slate-50  rounded-full h-[30px]' />
                        <PiSmileyStickerFill className=" absolute top-1.5 right-2 text-blue-600 font-semibold " />

                    </div>
                    <div className="">
                        <AiFillLike className="text-blue-600" />
                    </div>
                </div>
            </div>
            <div className=" w-[400px]">
                <div className=" flex  pb-2  flex-col  justify-center items-center ">
                    <Image src={'https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg='} width={50} height={50} alt="avatar"
                        className=" rounded-full" />

                    <p className=" font-bold text-black">Imran</p>
                    <p className=" text-sm">Active 5h ago </p>
                </div>
                <div className=" flex bg-gray-200 px-2 py-1 items-center justify-center gap-2  text-sm mx-20 rounded-full">
                    <p>   <FaLock color="000" /> </p>
                    <p className="text-black">End-to-end encrypeted</p>

                </div>
                <div className=" flex gap-5 justify-center items-center my-6">
                    <div className="">
                        <FaCircleUser size={50} className=" bg-gray-200 rounded-full p-2" />
                        <p className=" text-center">Profile</p>
                    </div>
                    <div className="">
                        <FaBell size={50} className=" bg-gray-200  rounded-full p-2" />
                        <p className=" text-center">Mute</p>
                    </div>
                    <div className="">
                        <IoSearch size={50} className=" bg-gray-200  rounded-full p-2" />
                        <p className=" text-center">Search</p>
                    </div>


                </div>
                <div className=" mx-5 flex flex-col gap-3 ">
                    <div className=" flex items-center gap-2 justify-between">
                        <p className="text-black">Chat info</p>
                        <FaChevronDown />
                    </div>
                    <div className=" flex items-center gap-2 justify-between">
                        <p className="text-black">Customize Chat</p>
                        <FaChevronDown />
                    </div>
                    <div className=" flex items-center gap-2 justify-between">
                        <p className="text-black">Media & Files</p>
                        <FaChevronDown />
                    </div>
                    <div className=" flex items-center gap-2 justify-between">
                        <p className="text-black">Privacy & Support</p>
                        <FaChevronDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat