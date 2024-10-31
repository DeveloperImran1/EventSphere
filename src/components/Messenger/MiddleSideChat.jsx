"use client"
import { HiGift } from "react-icons/hi"
import { Input } from "../ui/input";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdImages, IoMdVideocam } from "react-icons/io";
import { RiInformationFill } from "react-icons/ri";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { LuSticker } from "react-icons/lu";
import { PiSmileyStickerFill } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import Messages from "./Messages";
import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Link from "next/link";



const MiddleSideChat = ({ currentChat, messages, currentUser, conversations }) => {
    const [sendMessage, setSendMessage] = useState(null)
    const [messageses, setMessageses] = useState([])
    const axiosPublic = useAxiosPublic()



    const handleSend = async (e) => {
        e.preventDefault()
        const message = {
            conversationId: currentChat._id,
            sender: currentUser,
            text: sendMessage
        }
        try {
            const res = await axiosPublic.post(`/message`, message)

            setMessageses((prevMessages) => [...prevMessages, res.data])
            setSendMessage('')


        } catch (error) {
            console.log(error);

        }
    }
    const [user, setUser] = useState([])

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
    }, [currentChat?.members, currentUser, axiosPublic])

    // useEffect(() => {
    //     const fetchMessages = async () => {
    //         try {
    //             const res = await axiosPublic.get(`/messages/${currentChat._id}`)
    //             setMessageses(res.data)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     if (currentChat) {
    //         fetchMessages()
    //     }
    // }, [currentChat, axiosPublic])

    return (
        <div className=" border-r-2 min-h-screen   border-l-2 ">
            <div className="  flex gap-3 p-1 justify-between items-center shadow-sm 
            sticky top-0 mt-2 z-50 bg-white ">
                <div className=" flex gap-1 ">
                    <Image src={user?.image || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} width={40} height={50} alt="avatar"
                        className=" rounded-full" />
                    <div className=" ">
                        <p className=" font-bold text-black pt-2">{user.name}</p>
                    </div>
                </div>
                <div className=" flex gap-3 pr-3">
                    <FaPhoneAlt className="text-blue-600" />
                    <Link href="/video-call">
                        <IoMdVideocam className="text-blue-600" />
                    </Link>
                    <RiInformationFill className="text-blue-600" />
                </div>
            </div>
            {/*  */}
            <div className={`  ${currentChat ? 'min-h-[80vh]' : "min-h-[100vh]"}`}>

                {
                    currentChat ? <>
                        <div className=" flex  flex-col justify-center items-center my-10">
                            {
                                <Image
                                    src={user?.image || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"}
                                    width={40}
                                    height={60}
                                    alt="avatar"
                                    className={`rounded-full`}
                                />
                            }
                            <p>Start Chat With {user.name}</p>
                        </div>
                        {
                            messages?.map(message => <>
                                <Messages message={message} user={user} currentChat={currentChat} own={message?.sender === currentUser} />
                            </>)
                        }
                    </> : <p className=" my-16 text-4xl flex justify-center items-center">Please Select a chat</p>
                }
            </div>

            <div className={` flex items-center  bg-white pl-10 py-2 mb-1 sticky bottom-0  z-50`}>
                <div className=" flex gap-2">
                    <BsFillPlusCircleFill className="text-blue-600" />
                    <IoMdImages className="text-blue-600" />
                    <LuSticker className="text-blue-600" />
                    <HiGift className="text-blue-600" />
                </div>
                <form onSubmit={handleSend} className=" flex items-center ">
                    <div className=" mx-2 relative ">
                        <Input
                            type="text"
                            value={sendMessage}
                            onChange={(e) => setSendMessage(e.target.value)}
                            placeholder="Type your message..."
                            className='pl-3 bg-slate-50 text-black  rounded-full h-[35px] lg:w-[400px] w-[100px]' />
                        <PiSmileyStickerFill className="absolute top-2 right-2 text-blue-600 font-semibold" />
                    </div>

                    <button type="submit" ><IoSend className="  text-blue-600 font-semibold  " />  </button>
                </form>
            </div>
        </div>
    )
}

export default MiddleSideChat