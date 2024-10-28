"use client"
import ChatHome from "@/components/Messenger/Chat/ChatHome";
import MessageContainer from "@/components/Messenger/Chat/MessageContainer";
import Sidebar from "@/components/Messenger/Chat/Sidebar";
import ChatBody from "@/components/Messenger/ChatBody";
import ChatList from "@/components/Messenger/ChatList";
import LeftsideChat from "@/components/Messenger/LeftsideChat";
import MiddleSideChat from "@/components/Messenger/MiddleSideChat";
import RightSideChat from "@/components/Messenger/RightSideChat";
import useAuth from "@/hooks/useAuth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useEffect, useState } from "react";


export const metadata = {
    title:"Messenger",
    description: "Messenger page, Smart Event Management and Booking Platform",
    keywords:["messenger","community","chatting", "online", "ticket", "selling", "system","event", "management"]
  };

 const [selectedUser, setSelectedUser] = useState(null);
 const [isSidebarVisible, setIsSidebarVisible] = useState(true);
const Messenger = () => {

 
 const handelUserSelect = (user) => {
     setSelectedUser(user);
     setIsSidebarVisible(false);
 }

    return (
        <div>
            <section className=" bg-white flex flex-col lg:grid grid-cols-12 max-w-[1280px] mx-auto gap-8 pb-8 mt-16 px-[20px] ">

                {/* left side  */}
                <div className="col-span-3  rounded">
                    {/* <LeftsideChat handleCurrentChat={handleCurrentChat}  conversations={conversations} 
                    currentUser={auth?.data?._id} users={users} currentChat={currentChat} /> */}
                      <Sidebar onSelectUser={handelUserSelect} />
                </div>

                {/* right site  */}
                <div className="col-span-6  rounded ">
                    {/* <MiddleSideChat currentChat={currentChat} messages={messages} conversations={conversations} 
                    currentUser={auth?.data?._id}/> */}
                    <MessageContainer selectedUser={selectedUser} />
                </div>

                <div className="col-span-3  rounded">
                    <RightSideChat selectedUser={selectedUser} currentUser={auth?.data?._id}/>
                </div>
            </section>

        </div>
  
    );
};

export default Messenger;