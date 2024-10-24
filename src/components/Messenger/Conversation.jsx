"use client"
import useAxiosPublic from "@/hooks/useAxiosPublic"
import Image from "next/image"
import { useEffect, useState } from "react"


const Conversation = ({ conversation,currentUser ,handleCurrentChat}) => {
    const [user, setUser] = useState([])



    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        const friendId = conversation?.members?.find(m => m !== currentUser)
       
        console.log(friendId);
        
 
        const getUsers = async () => {
            try {
                const res = await axiosPublic.get(`/single-user/${friendId}`)

                setUser(res?.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getUsers()
    }, [conversation?.members,currentUser,axiosPublic])

    return (
        <div onClick={()=>handleCurrentChat(conversation)} 
        className=" flex  gap-2 items-center border-b my-1 cursor-pointer"> 
        <Image src={user?.image} width={40} height={50} alt="avatar"
            className=" rounded-full w-12" />
            <div className=" ">
                <p className=" font-bold text-black mb-1">{user?.name}</p>
                <div className=" flex gap-1">
                    {/* <p className=' '>How are yor ? </p> */}
                </div>
            </div></div>
    )
}

export default Conversation