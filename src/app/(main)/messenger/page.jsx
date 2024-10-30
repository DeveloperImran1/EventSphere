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
        <section className="flex flex-col lg:grid grid-cols-12 max-w-[1280px] mx-auto gap-8 mt-16  ">

        {/* left side  */}
        <div className="col-span-3  rounded">
            <Sidebar onSelectUser={handelUserSelect} />
        </div>

        {/* right site  */}
        <div className="col-span-6  rounded ">
            <MessageContainer selectedUser={selectedUser} />
        </div>

        <div className="col-span-3  rounded">
            <RightSideChat selectedUser={selectedUser} currentUser={auth?.data?._id} />
        </div>
    </section>
    );
};

export default Messenger;