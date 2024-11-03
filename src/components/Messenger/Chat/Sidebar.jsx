// import { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import axios from "axios";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { IoArrowBackSharp, IoSearch } from "react-icons/io5";
// import userConversation from "./Zustans/useConversation";
// import useAuth from "@/hooks/useAuth";
// import Image from "next/image";
// import { HiDotsHorizontal } from "react-icons/hi";
// import { LiaEdit } from "react-icons/lia";
// import Link from "next/link";
// import useAxiosPublic from "@/hooks/useAxiosPublic";
// import { FaMessage } from "react-icons/fa6";
// import { TbMessage } from "react-icons/tb";
// import Loading from "@/components/shared/LoadingSpiner/Loading";
// const Sidebar = ({ onSelectUser }) => {
//     const auth = useAuth();
//     const axiosPublic = useAxiosPublic()
//     const [searchInput, setSearchInput] = useState("");
//     const [allUsers, setAllUsers] = useState([]);
//     const [searchUser, setSearchuser] = useState([]);
//     const [chatUser, setChatUser] = useState([]);
//     const [activeTab, setActiveTab] = useState("Inbox");
//     const [loading, setLoading] = useState(false);
//     const [selectedUserId, setSetSelectedUserId] = useState(null);
//     const [newMessageUsers, setNewMessageUsers] = useState("");

//     const { setSelectedConversation } = userConversation();
//     const [refetch, setRefetch] = useState(false); // Refetch state

//     // Function to trigger refetch
//     const triggerRefetch = () => setRefetch((prev) => !prev);

//     // Fetch all users (non-chat users)
//     useEffect(() => {
//         const chatUserHandler = async () => {
//             setLoading(true);
//             try {
//                 const allUsers = await axiosPublic.get(`/user`);
//                 console.log("allUsers?.data ", allUsers?.data);

//                 // Create a Set of chatUser IDs for faster lookup
//                 const chatUserIds = new Set(chatUser?.map(user => user?._id));

//                 // Filter allUsers to exclude those in chatUser
//                 const conversationUsers = allUsers?.data?.filter(user => !chatUserIds.has(user?._id));

//                 console.log("conversationUsers ", conversationUsers);

//                 // Update the state with the filtered users
//                 setAllUsers(conversationUsers);
//                 setLoading(false);
//             } catch (error) {
//                 setLoading(false);
//                 console.log(error);
//             }
//         };
//         chatUserHandler();
//     }, [chatUser]);

//     // Fetch chat users based on refetch state or auth changes
//     useEffect(() => {
//         const chatUserHandler = async () => {
//             setLoading(true);
//             try {
//                 const chatters = await axiosPublic.get(
//                     `/current-chatters?id=${auth?.data?._id}`
//                 );
//                 setChatUser(chatters?.data);
//             } catch (error) {
//                 console.log(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         chatUserHandler();
//     }, [auth?.data?._id, refetch]);

//     // Handle search submit
//     const handelSearchSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const search = await axiosPublic.get(
//                 `/search?search=${searchInput}&id=${auth?.data?._id}`
//             );
//             setSearchuser(search.data);
//             setLoading(false);
//         } catch (error) {
//             setLoading(false);
//             console.log(error);
//         }
//     };


//     const handelUserClick = (user) => {
//         onSelectUser(user);
//         setSelectedConversation(user);
//         setSetSelectedUserId(user?._id);
//         setNewMessageUsers("");
//     };

//     const handSearchback = () => {
//         setSearchuser([]);
//         setSearchInput("");
//     };

//     if (auth?.isLoading) {
//         return <Loading></Loading>
//     }

//     return (
//         <div className="h-[calc(100vh-64px)] pt-5 overflow-auto px-2 border-2 text-black">
//             <div className="flex items-center justify-center">
//                 <h1 className="font-semibold text-center py-4 text-xl ">Chats</h1>
//             </div>

//             <div className="w-full hidden md:block">
//                 <form
//                     onSubmit={handelSearchSubmit}
//                     className=" flex items-center justify-between bg-gray-200 rounded-full"
//                 >
//                     <input
//                         value={searchInput}
//                         onChange={(e) => setSearchInput(e.target.value)}
//                         type="text"
//                         className=" pl-5 w-full text-sm bg-transparent outline-none "
//                         placeholder="search user"
//                     />
//                     <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full grid place-content-center">
//                         <FaSearch className="text-white" />
//                     </button>
//                 </form>
//             </div>

//             <div className="my-3 ">
//                 <div className="mt-3">
//                     <Tabs defaultValue="Inbox" className="rounded-md ">
//                         <TabsList className="flex  justify-center bg-white py-3 mt-5">
//                             <div className="bg-blue-600 rounded-md flex flex-col md:flex-row mb-5">
//                                 <div className="w-full bg-white text-black text-center rounded-md ">
//                                     <TabsTrigger
//                                         value="Inbox"
//                                         onClick={() => {
//                                             setActiveTab("Inbox");
//                                             triggerRefetch();
//                                         }}
//                                         className={`${activeTab === "Inbox" ? "font-semibold text-white bg-blue-600 text-center rounded-md rounded-r-none" : "font-semibold text-black text-center rounded-md bg-white"
//                                             } text-center `}
//                                         // style={{
//                                         //     WebkitTapHighlightColor: "transparent",
//                                         // }}
//                                     >
//                                         Inbox
//                                     </TabsTrigger>
//                                 </div>
//                                 <div className="">
//                                     <TabsTrigger
//                                         value="Conversation"
//                                         onClick={() => {
//                                             setActiveTab("Conversation")
//                                             triggerRefetch();
//                                         }}
//                                         className={`${activeTab === "Conversation" ? " text-white bg-blue-600 font-semibold rounded-md rounded-l-none" : "font-semibold text-black rounded-md rounded-l-none bg-white"
//                                             } `}
//                                         // style={{
//                                         //     WebkitTapHighlightColor: "transparent",
//                                         // }}
//                                     >
//                                         Conversation
//                                     </TabsTrigger>
//                                 </div>
//                             </div>
//                         </TabsList>
//                         <TabsContent value="Conversation">
//                             {searchUser?.length > 0 ? (
//                                 <>
//                                     {/* Search Div  */}
//                                     <div className="message-container no-scrollbar">
//                                         {searchUser?.map((user) => (
//                                             <div key={user?._id}>
//                                                 <div
//                                                     onClick={() => handelUserClick(user)}
//                                                     className={`flex gap-3 items-center rounded 
//                                                     justify-start p-2 py-1 cursor-pointer 
//                                                     ${selectedUserId ===
//                                                             user?._id
//                                                             ? "bg-sky-500"
//                                                             : ""
//                                                         }`}
//                                                 >
//                                                     <div className="rounded-full">
//                                                         <Image
//                                                             src={user?.image}
//                                                             alt="user.img"
//                                                             width={30}
//                                                             height={30}
//                                                         />
//                                                     </div>
//                                                     <div>
//                                                         <p
//                                                             className={`
//                                                     ${selectedUserId ===
//                                                                     user?._id
//                                                                     ? "text-white"
//                                                                     : ""
//                                                                 }`}
//                                                         >
//                                                             {user?.name}
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="divider divide-solid px-3 h-[1px]"></div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <div className="mt-auto px-1 py-1 flex">
//                                         <button
//                                             onClick={handSearchback}
//                                             className="bg-white rounded-full px-2 py-1 self-center"
//                                         >
//                                             <IoArrowBackSharp size={25} />
//                                         </button>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <div>
//                                     {/* Inbox */}
//                                     {chatUser?.map((user) => (
//                                         <div key={user?._id} className="shadow-md py-2 px-1 mt-3 cursor-pointer" onClick={() => handelUserClick(user)}>
//                                             <form className="flex justify-between items-center my-2">
//                                                 <div className="flex gap-2 items-center">

//                                                     <Image
//                                                         height={30}
//                                                         width={30}
//                                                         src={user?.image}
//                                                         alt="user"
//                                                         className="rounded-full"
//                                                     />
//                                                     <p className="text-xl hidden md:block text-black ">{user?.name}</p>
//                                                 </div>
//                                                 <p
//                                                     onClick={() => handelUserClick(user)}
//                                                     className="px-2 rounded-lg text-white cursor-pointer"
//                                                 >
//                                                     <TbMessage className="text-blue-600 text-2xl" />
//                                                 </p>
//                                             </form>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </TabsContent>

//                         <TabsContent value="Inbox">
//                             {searchUser?.length > 0 ? (
//                                 <>
//                                     {/* Search Div  */}
//                                     <div className="message-container no-scrollbar">
//                                         {searchUser?.map((user) => (
//                                             <div key={user?._id}>
//                                                 <div
//                                                     onClick={() => handelUserClick(user)}
//                                                     className={`flex gap-3 items-center rounded 
//                                                     justify-start p-2 py-1 cursor-pointer 
//                                                     ${selectedUserId ===
//                                                             user?._id
//                                                             ? "bg-sky-500"
//                                                             : ""
//                                                         }`}
//                                                 >
//                                                     <div className="rounded-full">
//                                                         <Image
//                                                             src={user?.image}
//                                                             alt="user.img"
//                                                             width={30}
//                                                             height={30}
//                                                         />
//                                                     </div>
//                                                     <div>
//                                                         <p
//                                                             className={`
//                                                     ${selectedUserId ===
//                                                                     user?._id
//                                                                     ? "text-white"
//                                                                     : ""
//                                                                 }`}
//                                                         >
//                                                             {user?.name}
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="divider divide-solid px-3 h-[1px]"></div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <div className="mt-auto px-1 py-1 flex">
//                                         <button
//                                             onClick={handSearchback}
//                                             className="bg-white rounded-full px-2 py-1 self-center"
//                                         >
//                                             <IoArrowBackSharp size={25} />
//                                         </button>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <div className="">
//                                     {/* Inbox */}
//                                     {allUsers?.map((user) => (
//                                         <div key={user?._id} className="shadow-md py-2 px-1 mt-3 cursor-pointer" onClick={() => handelUserClick(user)}>
//                                             <form className="flex justify-between items-center my-2">
//                                                 <div className="flex gap-2 items-center">

//                                                     <Image
//                                                         height={30}
//                                                         width={30}
//                                                         src={user?.image}
//                                                         alt="user"
//                                                         className="rounded-full"
//                                                     />
//                                                     <p className="text-xl hidden md:block text-black ">{user?.name}</p>
//                                                 </div>
//                                                 <p
//                                                     onClick={() => handelUserClick(user)}
//                                                     className="px-2 rounded-lg text-white cursor-pointer"
//                                                 >
//                                                     <TbMessage className="text-blue-600 text-2xl" />
//                                                 </p>
//                                             </form>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                         </TabsContent>
//                     </Tabs>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;














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
import { TbMessage } from "react-icons/tb";
import Loading from "@/components/shared/LoadingSpiner/Loading";
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
                console.log("allUsers?.data ", allUsers?.data);

                // Create a Set of chatUser IDs for faster lookup
                const chatUserIds = chatUser?.map(user => user?._id)
                console.log("chat user ids", chatUserIds)

                // Filter allUsers to exclude those in chatUser
                const conversationUsers = allUsers?.data?.filter(user => !chatUserIds.includes(user?._id));

                console.log("conversationUsers ", conversationUsers);

                // Update the state with the filtered users
                setAllUsers(conversationUsers);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };
        chatUserHandler();
    }, [chatUser]);

    // Fetch chat users based on refetch state or auth changes
    useEffect(() => {
        const chatUserHandler = async () => {
            setLoading(true);
            try {
                const chatters = await axiosPublic.get(
                    `/current-chatters?id=${auth?.data?._id}`
                );
                setChatUser(chatters?.data);
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

    if (auth?.isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="h-[calc(100vh-64px)] pt-5 overflow-auto px-2 border-2 text-black">
            <div className="flex items-center justify-center">
                <h1 className="font-semibold text-center py-4 text-xl ">Chats</h1>
            </div>

            <div className="w-full hidden md:block">
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
                <div className="mt-3">
                    <div className="rounded-md ">
                        <div className="flex  justify-center bg-white py-3 mt-5">
                            <div className="flex flex-col md:flex-row mb-5">
                                <div className="w-full bg-white text-black text-center rounded-md ">
                                    <div
                                        onClick={() => {
                                            setActiveTab("Inbox");
                                            triggerRefetch();
                                        }}
                                        className={`${activeTab === "Inbox" ? "font-semibold text-white bg-blue-600 text-center rounded-md rounded-r-none" : "font-semibold text-black text-center rounded-md bg-white"
                                            } text-center px-2 py-1 cursor-pointer`}  >
                                        Inbox
                                    </div>
                                </div>
                                <div className="">
                                    <div
                                        onClick={() => {
                                            setActiveTab("Conversation")
                                            triggerRefetch();
                                        }}
                                        className={`${activeTab === "Conversation" ? " text-white bg-blue-600 font-semibold rounded-md rounded-l-none" : "font-semibold text-black rounded-md rounded-l-none bg-white"
                                            } text-center px-2 py-1 cursor-pointer `}
                                    >
                                        Conversation
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            activeTab === "Inbox" ? <div>
                                {searchUser?.length > 0 ? (
                                    <>
                                        {/* Search Div  */}
                                        <div className="message-container no-scrollbar">
                                            {searchUser?.map((user) => (
                                                <div key={user?._id}>
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
                                                                src={user?.image}
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
                                                                {user?.name}
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
                                        {chatUser?.map((user) => (
                                            <div key={user?._id} className="shadow-md py-2 px-1 mt-3 cursor-pointer" onClick={() => handelUserClick(user)}>
                                                <form className="flex justify-between items-center my-2">
                                                    <div className="flex gap-2 items-center">

                                                        <Image
                                                            height={30}
                                                            width={30}
                                                            src={user?.image}
                                                            alt="user"
                                                            className="rounded-full"
                                                        />
                                                        <p className="text-xl hidden md:block text-black ">{user?.name}</p>
                                                    </div>
                                                    <p
                                                        onClick={() => handelUserClick(user)}
                                                        className="px-2 rounded-lg text-white cursor-pointer"
                                                    >
                                                        <TbMessage className="text-blue-600 text-2xl" />
                                                    </p>
                                                </form>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div> :
                                <div>
                                    {searchUser?.length > 0 ? (
                                        <>
                                            {/* Search Div  */}
                                            <div className="message-container no-scrollbar">
                                                {searchUser?.map((user) => (
                                                    <div key={user?._id}>
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
                                                                    src={user?.image}
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
                                                                    {user?.name}
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
                                        <div className="">
                                            {/* Inbox */}
                                            {allUsers?.map((user) => (
                                                <div key={user?._id} className="shadow-md py-2 px-1 mt-3 cursor-pointer" onClick={() => handelUserClick(user)}>
                                                    <form className="flex justify-between items-center my-2">
                                                        <div className="flex gap-2 items-center">

                                                            <Image
                                                                height={30}
                                                                width={30}
                                                                src={user?.image}
                                                                alt="user"
                                                                className="rounded-full"
                                                            />
                                                            <p className="text-xl hidden md:block text-black ">{user?.name}</p>
                                                        </div>
                                                        <p
                                                            onClick={() => handelUserClick(user)}
                                                            className="px-2 rounded-lg text-white cursor-pointer"
                                                        >
                                                            <TbMessage className="text-blue-600 text-2xl" />
                                                        </p>
                                                    </form>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                </div>

                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;


