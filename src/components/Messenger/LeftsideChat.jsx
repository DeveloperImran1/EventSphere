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
import Link from 'next/link'

const LeftsideChat = ({ conversations, currentUser, handleCurrentChat, users, currentChat }) => {
    const axiosPublic = useAxiosPublic()
    console.log(currentChat);

    const handleSend = async (e, receiverId) => {


        e.preventDefault()
        const newConversation = {
            senderId: currentUser,
            receiverId: receiverId

        }
        try {
            const res = await axiosPublic.post(`/newConversation`, newConversation)

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="max-h-screen fixed">
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
                        <div className=" mt-5 flex gap-1 ml-3 flex-col overflow-y-auto">
                            {
                                conversations.map(conversation => <Conversation handleCurrentChat={handleCurrentChat} key={conversation._id} conversation={conversation} currentUser={currentUser} />

                                )
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="Conversation">
                        {
                            users.map(user => <div key={user._id} className='border-4  '>
                                <form className='flex justify-between items-center my-2 ' >
                                    <div className='flex gap-2 items-center'>
                                        <Link href={`/dashboard/user-profile/${user?.email}`}>
                                            <Image height={676} width={1200} src={user?.image} alt='user' className='h-[38px] w-[38px] rounded-full'></Image>
                                        </Link>
                                        <p className=' w-28 text-blue-400 font-semibold'>{user.name}</p>
                                    </div>
                                    <p onClick={(e) => handleSend(e, user._id)} type="submit" className='bg-[#1b85db] hover:bg-[#10a0b9] px-2 py-1 rounded-lg text-white cursor-pointer'>Create</p>
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