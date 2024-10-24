"use client"
import { HiDotsHorizontal } from 'react-icons/hi'
import { Input } from '../ui/input'
import { IoSearch } from 'react-icons/io5'
import { LiaEdit } from 'react-icons/lia'
import Image from 'next/image'
import Conversation from './Conversation'
import { useEffect } from 'react'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import useAxiosPublic from '@/hooks/useAxiosPublic'

const LeftsideChat = ({ conversations, currentUser, handleCurrentChat, users,currentChat }) => {
    const axiosPublic = useAxiosPublic()
console.log(currentChat);

    const handleSend = async (e,receiverId) => {

        
        e.preventDefault()
        const newConversation = {
             senderId:currentUser,
             receiverId:receiverId
   
        }
        try {
            const res = await axiosPublic.post(`/newConversation`,newConversation)

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="">
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
            <div className="mt-3 ">
                <Tabs defaultValue="Inbox" className="">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="Inbox">Inbox</TabsTrigger>
                        <TabsTrigger value="Conversation">Create Conversation</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Inbox">
                        <div className=" mt-5 flex gap-1 ml-3 flex-col ">
                            {
                                conversations.map(conversation => <Conversation handleCurrentChat={handleCurrentChat} key={conversation._id} conversation={conversation} currentUser={currentUser} />

                                )
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="Conversation">
                        {
                            users.map(user => <div  key={user._id} className=' '>
                                <form  className='flex  my-2' >
                                <p className=' w-28 text-blue-400 font-semibold'>{user.name}</p>
                                <button onClick={(e)=>handleSend(e,user._id)} type="submit" className='button'>Create</button>
                                </form>
                            </div>)
                        }
                    </TabsContent>
                </Tabs>

            </div>


        </div>
    )
}

export default LeftsideChat