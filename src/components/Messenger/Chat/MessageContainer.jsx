import { useEffect, useState, useRef } from 'react';
import { TiMessages } from "react-icons/ti";
import { IoArrowBackSharp, IoSend } from 'react-icons/io5';
import axios from 'axios';

import notify from './asset/notification.mp3';
import Message from './Message';
import userConversation from './Zustans/useConversation';
import useAuth from '@/hooks/useAuth';
import { Input } from '@/components/ui/input';
import { PiSmileyStickerFill } from 'react-icons/pi';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IoMdImages, IoMdVideocam } from 'react-icons/io';
import { LuSticker } from 'react-icons/lu';
import { HiGift } from 'react-icons/hi';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import { RiInformationFill } from 'react-icons/ri';

const MessageContainer = ({selectedUser }) => {

  const { messages, selectedConversation, setMessage } = userConversation();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendData, setSendData] = useState("");
  const lastMessageRef = useRef();

  // Scroll to the 
  useEffect(() => {
    if (messages?.length > 0) {
      lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Fetch messages for the selected conversations
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      try {
        const get = await axios.get(`http://localhost:9000/get-message?senderId=${auth?.data?._id}&reciverId=${selectedUser?._id}`);
        const data = await get.data;
        console.log(data);

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
  }, [selectedConversation?._id, setMessage, auth?.data?._id, selectedUser?._id]);

  const handleMessages = (e) => {
    setSendData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await axios.post(`http://localhost:9000/send-message?senderId=${auth?.data?._id}&reciverId=${selectedUser._id}`, { messages: sendData });
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
    <div className=' bg-slate-100 flex flex-col h-[90vh]'>
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
          <div className='flex justify-between items-center gap-1 bg-white md:px-2  h-10 md:h-12 sticky z-50'>
              <div className=" flex gap-1">
              <div className='self-center'>
                <Image src={selectedConversation?.image}  width={30} height={30} alt="avatar"
                        className=" rounded-full" />
                </div>
                <span className='text-black self-center text-sm md:text-xl font-bold'>
                  {selectedConversation?.name}
                </span>
              </div>
                <div className=" flex gap-3 pr-3 ">
                    <FaPhoneAlt className="text-blue-600" />
                    <Link href="/video-call">
                        <IoMdVideocam className="text-blue-600" />
                    </Link>
                    <RiInformationFill className="text-blue-600" />
                </div>
          </div>
     
          <div className='flex-1 overflow-auto min-h-[80%]'>
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
                 <div className={` flex items-center   pl-10 py-2 mr-1 sticky bottom-0  z-50`}>
                <div className=" flex gap-2">
                    <BsFillPlusCircleFill className="text-blue-600" />
                    <IoMdImages className="text-blue-600" />
                    <LuSticker className="text-blue-600" />
                    <HiGift className="text-blue-600" />
                </div>
                <form onSubmit={handleSubmit}  className=" flex items-center ">
                    <div className=" mx-2 relative ">
                        <Input
                            type="text"
                            value={sendData} onChange={handleMessages} required id='message' 
                            placeholder="Type your message..."
                            className='pl-3 bg-slate-50 text-black  rounded-full h-[35px] lg:w-[400px] w-[100px]' />
                        <PiSmileyStickerFill className="absolute top-2 right-2 text-blue-600 font-semibold" />
                    </div>

                    <button type="submit" ><IoSend className="  text-blue-600 font-semibold" />  </button>
                </form>
            </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;
