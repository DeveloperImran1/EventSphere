"use client"
import useAxiosPublic from "@/hooks/useAxiosPublic";
import userConversation from "./Zustans/useConversation";
import useAuth from "@/hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import { TiMessages } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
import { IoMdImages,} from "react-icons/io";
import Message from "./Message";
import { IoSend } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSocketContext } from "./Soket/SocketContext";

const MessageContainer = ({ selectedUser }) => {
  const axiosPublic = useAxiosPublic()
  const { messages, selectedConversation, setMessage } = userConversation();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendData, setSendData] = useState("");
  const lastMessageRef = useRef();
  const router = useRouter();

  const {socket} = useSocketContext();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
      const sound = new Audio(notify);
      sound.play();
      setMessage([...messages,newMessage])
    })

    return ()=> socket?.off("newMessage");
  },[socket,setMessage,messages])
  // Scroll to the 
  useEffect(() => {
    if (messages?.length > 0) {
      lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Fetche messages for the select conversation
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      try {
        const get = await axiosPublic.get(`/get-message?senderId=${auth?.data?._id}&reciverId=${selectedUser?._id}`);
        const data = await get.data;
        if (data.success === false) {
          setLoading(false);
          console.log(data.message);
        } else {
          setMessage(data);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessage, auth?.data?._id, selectedUser?._id,axiosPublic]);

  const handleMessages = (e) => {
    setSendData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("auth er data ", auth?.data?._id)
    if (!auth?.data?._id) {
      toast.error("Please Before Login Now")
      return router.push('/login')
    }
    setSending(true);

    try {
      const res = await axiosPublic.post(`/send-message?senderId=${auth?.data?._id}&reciverId=${selectedUser?._id}`, { messages: sendData });
      const data = await res.data;

      if (data.success !== false) {
        setMessage([...messages, data]);
        setSendData('');
      }

      setSending(false);
    } catch (error) {
      setSending(false);
      console.log(error);
    }
  };

  return (
    <div className=' flex flex-col pl-3 h-[calc(100vh-64px)] border'>
      {selectedConversation === null ? (
        <div className='flex items-center justify-center w-full h-full'>
          <div className='px-4 text-center text-2xl text-gray-950 font-semibold flex flex-col items-center gap-2'>
            <p className='text-2xl'>Welcome!!👋 {auth?.data?.name}😉</p>
            <p className="text-lg">Select a chat to start messaging</p>
            <TiMessages className='text-6xl text-center' />
          </div>
        </div>
      ) : (
        <>
          <div className='flex justify-between items-center gap-1 bg-white pt-4 pb-2 md:px-5 border-y shadow-sm '>
            <div className=" flex gap-1">
              <div className='self-center'>
                <Image src={selectedConversation?.image} width={50} height={50} alt="avatar"
                  className=" rounded-full cursor-pointer" />
              </div>
              <span className='text-black self-center text-sm md:text-xl font-bold'>
                {selectedConversation?.name}
              </span>
            </div>

            <Link href="/video-call">
              <FaVideo size={23} className="text-[#1b85db] "></FaVideo>
            </Link>
          </div>

          <div className='flex-1 pt-2 overflow-auto min-h-[80%] bg-white'>
            {loading && (
              <div className="flex w-full h-full flex-col items-center justify-center gap-4 bg-transparent">
                <div className="loading loading-spinner"></div>
              </div>
            )}
            {!loading && messages?.length === 0 && (
              <p className='text-center  items-center'>Send a message to start a conversation</p>
            )}
            {!loading && messages?.length > 0 && messages?.map((message) => (
              <div className='text-white' key={message?._id} ref={lastMessageRef}>
                <Message own={message.senderId === auth?.data?._id} message={message} selectedUser={selectedUser} />
              </div>
            ))}
          </div>
          <div className={` flex w-full items-center pl-5 py-2 mr-1 sticky bottom-0  z-50`}>
            <div className=" flex gap-2">
              <IoMdImages className="text-[#1b85db] text-xl cursor-pointer" />
            </div>
            <form onSubmit={handleSubmit} className=" flex items-center w-full">
              <div className=" mx-2 relative  w-full">
                <input
                  type="text"
                  value={sendData} onChange={handleMessages} required id='message'
                  placeholder="Type your message..."
                  className='pl-3 bg-slate-50 text-black  rounded-full h-[35px] w-full outline-none' />
                <button type="submit" ><IoSend className="  text-[#1b85db] font-semibold absolute text-xl top-2 right-4" />  </button>
              </div>

            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;










