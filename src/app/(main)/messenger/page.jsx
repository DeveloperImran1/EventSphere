"use client"
import ChatBody from "@/components/Messenger/ChatBody";
import ChatList from "@/components/Messenger/ChatList";
import useAuth from "@/hooks/useAuth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Messenger = () => {
    const [conversations, setConversations] = useState([])
    const auth = useAuth();
    const axiosPublic = useAxiosPublic()
    console.log(auth)
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
    }, [auth?.data])

    console.log(conversations, auth?.data)
    return (
        <div>
            <section className="flex flex-col lg:grid grid-cols-12 container gap-8 pb-8">

                {/* left side  */}
                <div className="col-span-3  rounded">
                    <ChatList conversations={conversations} currentUser={auth?.data}></ChatList>
                </div>

                {/* right site  */}
                <div className="col-span-6  rounded ">
                    <ChatBody></ChatBody>
                </div>

                <div className="col-span-3  rounded">
                    <ChatList></ChatList>
                </div>
            </section>
        </div>
    );
};

export default Messenger;