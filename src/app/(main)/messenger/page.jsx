"use client"
import MessageContainer from "@/components/Messenger/Chat/MessageContainer";
import Sidebar from "@/components/Messenger/Chat/Sidebar";
import RightSideChat from "@/components/Messenger/RightSideChat";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";

const Messenger = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const auth = useAuth()

    const handelUserSelect = (user) => {
        setSelectedUser(user);
        setIsSidebarVisible(false);
    }


    return (
        <section className="flex max-w-[1280px] mx-auto md:gap-8 gap-x-2 mt-16  ">

        {/* left side  */}
        <div className=" w-[25%]  rounded">
            <Sidebar onSelectUser={handelUserSelect} />
        </div>

        {/* right site  */}
        <div className=" md:w-[50%] w-[80%]  rounded ">
            <MessageContainer selectedUser={selectedUser} />
        </div>

        <div className="md:w-[25%] rounded hidden md:block">
            <RightSideChat selectedUser={selectedUser} currentUser={auth?.data?._id} />
        </div>
    </section>
    );
};

export default Messenger;