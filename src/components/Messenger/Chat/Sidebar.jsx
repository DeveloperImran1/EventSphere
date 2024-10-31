import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoArrowBackSharp, IoSearch } from "react-icons/io5";
import userConversation from "./Zustans/useConversation";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
import { LiaEdit } from "react-icons/lia";
import Link from "next/link";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { FaMessage } from "react-icons/fa6";
const Sidebar = ({ onSelectUser }) => {
    const auth = useAuth();
    const axiosPublic = useAxiosPublic()
    const [searchInput, setSearchInput] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [searchUser, setSearchuser] = useState([]);
    const [chatUser, setChatUser] = useState([]);
    const [activeTab, setActiveTab] = useState("Inbox"); 
    const [loading, setLoading] = useState(false);
    const [selectedUserId, setSetSelectedUserId] = useState(null);
    const [newMessageUsers, setNewMessageUsers] = useState("");

    const { setSelectedConversation } = userConversation();
    const [refetch, setRefetch] = useState(false); // Refetch state

    // Function to trigger refetch
    const triggerRefetch = () => setRefetch((prev) => !prev);

    // Fetch all users (non-chat users)
    useEffect(() => {
        const chatUserHandler = async () => {
            setLoading(true);
            try {
                const allUsers = await axiosPublic.get(`/user`);
                setAllUsers(allUsers.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };
        chatUserHandler();
    }, []);

    // Fetch chat users based on refetch state or auth changes
    useEffect(() => {
        const chatUserHandler = async () => {
            setLoading(true);
            try {
                const chatters = await axiosPublic.get(
                    `/current-chatters?id=${auth?.data?._id}`
                );
                setChatUser(chatters.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        chatUserHandler();
    }, [auth?.data?._id, refetch]);

    // Handle search submit
    const handelSearchSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const search = await axiosPublic.get(
                `/search?search=${searchInput}&id=${auth?.data?._id}`
            ); 
            setSearchuser(search.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

   
    const handelUserClick = (user) => {
        onSelectUser(user);
        setSelectedConversation(user);
        setSetSelectedUserId(user?._id);
        setNewMessageUsers("");
    };

    const handSearchback = () => {
        setSearchuser([]);
        setSearchInput("");
    };

    return (
        <div className="h-[calc(100vh-64px)] pt-5 overflow-auto px-2 border-2 text-black">
            <div className="flex items-center justify-center">
                <h1 className="font-semibold text-center py-4 text-xl ">Chats</h1>
            </div>

            <div className="w-full">
                <form
                    onSubmit={handelSearchSubmit}
                    className=" flex items-center justify-between bg-gray-200 rounded-full"
                >
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text"
                        className=" pl-5 w-full text-sm bg-transparent outline-none "
                        placeholder="search user"
                    />
                    <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full grid place-content-center">
                        <FaSearch className="text-white" />
                    </button>
                </form>
            </div>

            <div className="my-3 ">
                <div className="mt-3 ">
                    <Tabs defaultValue="Inbox" className="">
                        <TabsList className="grid w-full grid-cols-2 bg-blue-600">
                        <TabsTrigger
                                value="Inbox"
                                onClick={() => {
                                    setActiveTab("Inbox"); 
                                    triggerRefetch();
                                }}
                                className={`${
                                    activeTab === "Inbox" ? "font-semibold " : "font-semibold text-white"
                                  }  `}
                                  style={{
                                    WebkitTapHighlightColor: "transparent",
                                  }}
                            >
                                Inbox
                            </TabsTrigger>
                            <TabsTrigger
                                value="Conversation"
                                onClick={() => {
                                    setActiveTab("Conversation")
                                }}
                                className={`${
                                    activeTab === "Conversation" ? " text-white" : "font-semibold text-white"
                                  } `}
                                  style={{
                                    WebkitTapHighlightColor: "transparent",
                                  }}
                            >
                               Conversation
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="Inbox">
                            {searchUser?.length > 0 ? (
                                <>
                                {/* Search Div  */}
                                    <div className="message-container no-scrollbar">
                                        {searchUser.map((user) => (
                                            <div key={user._id}>
                                               <div
                                                onClick={() => handelUserClick(user)}
                                                className={`flex gap-3 items-center rounded 
                                                    justify-start p-2 py-1 cursor-pointer 
                                                    ${selectedUserId ===
                                                        user?._id
                                                        ? "bg-sky-500"
                                                        : ""
                                                    }`}
                                            >
                                                <div className="rounded-full">
                                                    <Image
                                                        src={user.image}
                                                        alt="user.img"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </div>
                                                <div>
                                                    <p
                                                        className={`
                                                    ${selectedUserId ===
                                                                user?._id
                                                                ? "text-white"
                                                                : ""
                                                            }`}
                                                    >
                                                        {user.name}
                                                    </p>
                                                </div>
                                            </div>
                                                <div className="divider divide-solid px-3 h-[1px]"></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-auto px-1 py-1 flex">
                                        <button
                                            onClick={handSearchback}
                                            className="bg-white rounded-full px-2 py-1 self-center"
                                        >
                                            <IoArrowBackSharp size={25} />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    {/* Inbox */}
                                    {chatUser.map((user) => (
                                <div key={user._id} className="shadow-md px-5 py-2 mt-3 cursor-pointer" onClick={() => handelUserClick(user)}> 
                                    <form className="flex justify-between items-center my-2">
                                        <div className="flex gap-2 items-center">
                                            <Link href={`/dashboard/user-profile/${user?.email}`}>
                                                <Image
                                                    height={30}
                                                    width={30}
                                                    src={user?.image}
                                                    alt="user"
                                                    className="rounded-full"
                                                />
                                            </Link>
                                            <p className="text-xl text-black ">{user.name}</p>
                                        </div>
                                        <p
                                            onClick={() => handelUserClick(user)}
                                            className="px-2 rounded-lg text-white cursor-pointer"
                                        >
                                            <FaMessage className="text-blue-600"/>
                                        </p>
                                    </form>
                                </div>
                            ))}
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="Conversation">
                            {allUsers.map((user) => (
                                <div key={user._id} className="shadow-md px-5 py-2 mt-3 cursor-pointer" onClick={() => handelUserClick(user)}> 
                                    <form className="flex justify-between items-center my-2">
                                        <div className="flex gap-2 items-center">
                                            <Link href={`/dashboard/user-profile/${user?.email}`}>
                                                <Image
                                                    height={30}
                                                    width={30}
                                                    src={user?.image}
                                                    alt="user"
                                                    className="rounded-full"
                                                />
                                            </Link>
                                            <p className="text-xl text-black ">{user.name}</p>
                                        </div>
                                        <p
                                            onClick={() => handelUserClick(user)}
                                            className="px-2 rounded-lg text-white cursor-pointer"
                                        >
                                            <FaMessage className="text-blue-600"/>
                                        </p>
                                    </form>
                                </div>
                            ))}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
