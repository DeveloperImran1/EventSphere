import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { format } from "timeago.js";

const Messages = ({ message, own ,user}) => {
  const auth = useAuth();

  return (
    <div className=" my-1 ">

      <div className={`flex items-center gap-2 px-3
            ${own && ' justify-end'}`}>
        <Image
          src={
            own ? auth?.data?.image : user?.image
          }
          width={40}
          height={60}
          alt="avatar"
          className={`rounded-full
            ${own && 'order-last'}`}
        />
       <div 
      
          className={`text-sm text-black w-[50%] -lg py-1 px-3
                 ${own ? " bg-blue-500 text-white rounded-tl-lg rounded-bl-lg rounded-br-xl " : "bg-slate-200 rounded-tr-lg rounded-br-lg  rounded-bl-xl"}`}
        >
          {message?.text}
     
      
       </div>
      </div>
      <p
        className={`text-[12px] ml-16 ${own && "text-right mr-16 -mt-1"}`}
      >
        {format(message?.createdAt)}
      </p>
    </div>
  );
};

export default Messages;
