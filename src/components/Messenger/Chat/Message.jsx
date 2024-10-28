// import React from 'react'
// import { useAuth } from '../context/AuthContext';
// import { format } from "timeago.js";
// import './M.scss'

// const Message = ({ own, message, selectedUser }) => {
//     console.log(own);

//     const isLargeMessage = message?.message.length > 30

//     const { authUser } = useAuth();
//     return (
//         <div className=" my-1 ">

//             <div className={`flex gap-2 px-3  '}
//             ${own && ' justify-end'}`}>
//                 <img
//                     src={
//                         own ? authUser?.profilepic : selectedUser?.profilepic
//                     }
//                     width={20}
//                     height={40}
//                     alt="avatar"
//                     className={`rounded-full 
//             ${own && 'order-last'}    ${isLargeMessage ? 'large-img' : 'small-img'}     `}
//                 />
//                 <div

//                     className={` text-[16px]
//                  ${own ? "  bubble" :
//                             " friend-bubble"}`}
//                 >
//                     {message?.message}


//                 </div>
//             </div>
//             <p
//                 className={`-mt-1  text-[12px] ml-16 ${own && "text-right mr-16 "}`}
//             >
//                 {format(message?.createdAt)}
//             </p>
//         </div>

//     )
// }

// export default Message



import { format } from "timeago.js";
import './M.scss';
import useAuth from "@/hooks/useAuth";


const Message = ({ own, message, selectedUser }) => {
    const auth = useAuth();
    
  
    const isLargeMessage = message?.message.length > 30; 

    return (
        <div className="my-1">
        <div className={`flex gap-2 px-3 ${own ? 'justify-end' : ''}`}>
            <div className="message-content">
                <div className={`text-[16px] bubble-container ${own ? 'bubble' : 'friend-bubble'}`}>
                    {message?.message}
                </div>
                <p className={`-mt-1.5 text-[10px] ${own ? 'text-right' : 'text-left'} `}>
                    {format(message?.createdAt)}
                </p>
            </div>
            
            <img
                src={
                    own ? auth?.data?.image : selectedUser?.image
                }
                alt="avatar"
                className={`rounded-full ${own ? 'order-last' : ' order-first'} ${isLargeMessage ? 'large-img align-bottom' : 'small-img'}`}
            />
        </div>
    </div>
    );
};

export default Message;
