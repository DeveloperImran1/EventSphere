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
            const search = await axios.get(
                `http://localhost:9000/search?search=${searchInput}&id=${auth?.data?._id}`
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
        <div className="h-full w-auto px-1 bg-slate-100 text-black">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold">Chats</h1>
                <div className="flex gap-4">
                    <HiDotsHorizontal
                        size={30}
                        className="bg-slate-100 rounded-full p-1"
                    />
                    <LiaEdit size={30} className="bg-slate-100 rounded-full p-1" />
                </div>
            </div>

            <div className="flex justify-between gap-2">
                <form
                    onSubmit={handelSearchSubmit}
                    className="w-auto flex items-center justify-between bg-white rounded-full"
                >
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text"
                        className="px-4 w-[230px] text-sm bg-transparent outline-none rounded-full"
                        placeholder="search user"
                    />
                    <button className="btn btn-circle bg-blue-500 hover:bg-blue-600">
                        <FaSearch />
                    </button>
                </form>
            </div>

            <div className="my-3">
                <div className="mt-3">
                    <Tabs defaultValue="Inbox" className="">
                        <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger
                                value="Inbox"
                                onClick={() => {
                                    setActiveTab("Inbox"); 
                                    triggerRefetch();
                                }}
                                className={`${
                                    activeTab === " Inbox" ? "  " : "text-blue-400"
                                  } relative rounded-full px-3 py-1.5 text-sm font-medium 
                                   outline-sky-400 transition focus-visible:outline-2 text-blue-500`}
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
                                    activeTab === " Conversation" ? " text-blue-500" : "text-blue-500 font-semibold"
                                  } relative rounded-full px-3 py-1.5 text-sm font-medium 
                                 transition focus-visible:outline-2 text-blue-500`}
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
                                    {chatUser.map((user) => (
                                      <div key={user._id}>
                                      <div
                                       onClick={() => handelUserClick(user)}
                                       className={`flex gap-3 items-center rounded 
                                           justify-start p-2 py-1 cursor-pointer 
                                           ${selectedUserId ===
                                               user?._id
                                               ? "bg-blue-500"
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
                            )}
                        </TabsContent>

                        <TabsContent value="Conversation">
                            {allUsers.map((user) => (
                                <div key={user._id} className="border-4">
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
                                            <p className="text-blue-400">{user.name}</p>
                                        </div>
                                        <p
                                            onClick={() => handelUserClick(user)}
                                            className="bg-[#1b85db] hover:bg-[#10a0b9] px-2 rounded-lg text-white cursor-pointer"
                                        >
                                            Create
                                        </p>
                                    </form>
                                </div>
                            ))}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Sidebar;
