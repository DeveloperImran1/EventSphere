"use client"
import useAuth from "@/hooks/useAuth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import LeftsideChat from "./LeftsideChat";
import MiddleSideChat from "./MiddleSideChat";
import RightSideChat from "./RightSideChat";

const MessengerContainer = () => {
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [users, setUser] = useState([])
    const auth = useAuth();
    const axiosPublic = useAxiosPublic()


    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axiosPublic.get(`/getConvertation/${auth?.data?._id}`)
                setConversations(res?.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getConversations()
    }, [auth?.data,axiosPublic])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axiosPublic.get(`/getMessages/${currentChat?._id}`)
                setMessages(res?.data)
            }
            catch (err) {
                console.log(err)
            }
        }
       getMessages()
    }, [axiosPublic,currentChat?._id])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axiosPublic.get(`/user`)
                setUser(res?.data)
            }
            catch (err) {
                console.log(err)
            }
        }
      getUsers()
    }, [axiosPublic])

 const handleCurrentChat=(findCurrentChat)=>{
    setCurrentChat(findCurrentChat)  
 }



    return (
        <div>
            <section className="flex flex-col lg:grid grid-cols-12 max-w-[1280px] mx-auto gap-8 pb-8 mt-16 px-[20px] ">

                {/* left side  */}
                <div className="col-span-3  rounded">
                    <LeftsideChat handleCurrentChat={handleCurrentChat}  conversations={conversations} 
                    currentUser={auth?.data?._id} users={users} currentChat={currentChat} />
                </div>

                {/* right site  */}
                <div className="col-span-6  rounded ">
                    <MiddleSideChat currentChat={currentChat} messages={messages} conversations={conversations} 
                    currentUser={auth?.data?._id}/>
                </div>

                <div className="col-span-3  rounded">
                    <RightSideChat currentChat={currentChat}  currentUser={auth?.data?._id}/>
                </div>
            </section>
        </div>
    );
};

export default MessengerContainer;