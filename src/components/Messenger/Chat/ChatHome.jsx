import { useState } from 'react'
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';

const ChatHome = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    
    const handelUserSelect = (user) => {
        setSelectedUser(user);
        setIsSidebarVisible(false);
    }
    const handelShowSidebar = () => {
        setIsSidebarVisible(true);
        setSelectedUser(null);
    }

  return (
    <div className='fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-between 
    md:min-w-[900px] md:max-w-[90%]
    px-2 h-[95%] md:h-full  
    rounded-xl shadow-lg
    bg-gray-400 bg-clip-padding
    backdrop-filter backdrop-blur-lg 
    bg-opacity-0'>
        <div className={`w-full py-2 md:flex `}>
            <Sidebar onSelectUser={handelUserSelect} />
        </div>
        <div className={`border-l border-gray-300 h-full mx-3 `}></div>
        <div className={`flex-auto ${selectedUser ? '' : 'hidden md:flex'} bg-gray-200}`}>
            <MessageContainer onBackUser={handelShowSidebar} selectedUser={selectedUser} />
        </div>
    </div>
  )
}

export default ChatHome