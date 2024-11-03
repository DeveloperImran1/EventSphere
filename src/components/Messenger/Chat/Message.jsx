

import { format } from "timeago.js";
import './M.scss';
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Loading from "@/components/shared/LoadingSpiner/Loading";


const Message = ({ own, message, selectedUser }) => {
    const auth = useAuth();
    if(auth?.isLoading){
        return <Loading></Loading>
      }
  
    const isLargeMessage = message?.message.length > 30; 

    return (
        <div className="my-1">
        <div className={`flex gap-2 px-3 ${own ? 'justify-end' : ''}`}>
            <div className="max-w-[50%]">
                <div className={`text-[16px] mt-2 py-2 px-2 rounded-lg ${own ? 'bg-blue-500 text-whhite' : ' bg-gray-200 text-black '}`}>
                    {message?.message}
                </div>
                <p className={` text-[10px] ${own ? 'text-right' : 'text-left'} `}>
                    {format(message?.createdAt)}
                </p>
            </div>
            
            <Image height={676} width={1200}
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
