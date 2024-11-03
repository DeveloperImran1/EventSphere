// "use client"
// import useAuth from '@/hooks/useAuth';
// import { createContext, useContext, useEffect, useState } from 'react';
// // import io from 'socket.io-client';   // aita amar ager ta
// import { io } from 'socket.io-client';



// const SocketContext = createContext();

// export const useSocketContext=()=>{
//     return useContext(SocketContext);
// }

// export const SocketContextProvider=({children})=>{
//     const [socket , setSocket]= useState(null);
//     const [onlineUser,setOnlineUser]=useState([]);
//     const auth = useAuth();
//     useEffect(()=>{
//         if(auth?.data?._id){
//             const socket = io("http://localhost:9000",{
//                 query:{
//                     userId:auth?.data?._id,
//                 }
//             })
//             socket.on("getOnlineUsers",(users)=>{
//                 setOnlineUser(users)
//             });
//             setSocket(socket);
//             console.log("socketContext page ", socket)
//             return()=>socket.close();
//         }else{
//             if(socket){
//                 socket.close();
//                 setSocket(null); 
//             }
//         }
//     },[auth?.data?._id,socket]);
//     return(
//     <SocketContext.Provider value={{socket , onlineUser}}>
//         {children}
//     </SocketContext.Provider>
//     )
// }



"use client"
import useAuth from '@/hooks/useAuth';
import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]); // Fixed variable name for consistency
    const auth = useAuth();

    useEffect(() => {
        // Ensure we have a user ID from authentication before creating a socket connection
        if (auth?.data?._id) {
            const newSocket = io("http://localhost:9000", {
                query: {
                    userId: auth.data._id,
                }
            });

            // Listen for online users
            newSocket.on("getOnlineUser", (users) => {
                setOnlineUser(users);
            });

            // Set the new socket instance
            setSocket(newSocket);
            console.log("Socket initialized", newSocket);

            // Cleanup function to close the socket when the component unmounts or user ID changes
            return () => {
                newSocket.close();
                setSocket(null); // Clear the socket state
            };
        } else if (socket) {
            // If user is logged out and socket exists, close it
            socket.close();
            setSocket(null); 
        }
    }, [auth?.data?._id]); // Removed `socket` from dependencies

    return (
        <SocketContext.Provider value={{ socket, onlineUser }}>
            {children}
        </SocketContext.Provider>
    );
}


