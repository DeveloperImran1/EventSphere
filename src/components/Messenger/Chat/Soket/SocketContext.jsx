"use client"
import useAuth from '@/hooks/useAuth';
import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';



const SocketContext = createContext();

export const useSocketContext=()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider=({children})=>{
    const [socket , setSocket]= useState(null);
    const [onlineUser,setOnlineUser]=useState([]);
    const auth = useAuth();
    useEffect(()=>{
        if(auth?.data?._id){
            const socket = io("http://localhost:9000",{
                query:{
                    userId:auth?.data?._id,
                }
            })
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUser(users)
            });
            setSocket(socket);
            return()=>socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null); 
            }
        }
    },[auth?.data?._id,socket]);
    return(
    <SocketContext.Provider value={{socket , onlineUser}}>
        {children}
    </SocketContext.Provider>
    )
}