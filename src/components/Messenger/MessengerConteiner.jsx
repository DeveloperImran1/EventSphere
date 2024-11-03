"use client"
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import Sidebar from "./Chat/Sidebar";
import MessageContainer from "./Chat/MessageContainer";
import RightSideChat from "./RightSideChat";
import Loading from "../shared/LoadingSpiner/Loading";

const MessengerContainer = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const auth = useAuth()

    const handelUserSelect = (user) => {
        setSelectedUser(user);
        setIsSidebarVisible(false);
    }

    if(auth?.isLoading){
        return <Loading></Loading>
      }

    return (
        <section className="flex flex-col lg:grid grid-cols-12 max-w-[1280px] mx-auto gap-8">

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

export default MessengerContainer;