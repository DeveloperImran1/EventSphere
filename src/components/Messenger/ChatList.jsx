import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

function ChatList({ conversations, currentUser }) {
    console.log(conversations, currentUser)
    const profileNumsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <>
            <section className="p-5">
                <div className="flex justify-between items-center ">
                    <div className="flex justify-between items-center gap-2">
                        <Image height={676} width={1200} src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/409190995_2451672608340062_5052422953989411988_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=hh-ke09yg-gQ7kNvgERag7_&_nc_ht=scontent.fdac157-1.fna&oh=00_AYBrh0gfCKq1rErk1yb5DiQ3fzOpgeX1Fh8FuEEFVeb12A&oe=66D37960" alt="" className="w-10 h-auto rounded-full" />

                        <div className="flex flex-col items-start">
                            <p>Imran Hassan</p>
                            <p className="text-xs  text-text-color">Admin Head</p>
                        </div>
                    </div>
                    <BsThreeDotsVertical></BsThreeDotsVertical>
                </div>

                <p className="border-[0.5px] my-6 border-gray-500"></p>

                {/* search form */}
                <form className="relative">
                    <input
                        className="bg-[#363e4b] text-text-color rounded-md px-4 py-2 text-sm placeholder:text-sm outline-none w-full"
                        name="searchDashboard"
                        type="text"
                        placeholder="Search..."
                    />
                    <button
                        type="submit"
                        className="absolute top-1/2 -translate-y-1/2 right-3"
                    >
                        <IoIosSearch className="text-text-color"></IoIosSearch>
                    </button>
                </form>

                <p className="border-[0.5px] my-6 border-gray-500"></p>

                {/* user actveity profile icon  */}

                <div className="h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
                    {


                        conversations?.map((conversation) => <div key={conversation?._id} className="flex justify-between items-center hover:bg-[#363e4b] cursor-pointer p-4 rounded-md ">
                            <div className="flex justify-between items-center gap-2">
                                <span className="rounded-full border-4 border-green-500">
                                    <Image height={676} width={1200} src= {currentUser?.image || 'https://res.cloudinary.com/dqdircc96/image/upload/v1728834438/e7nhywmrjz43tmuctpwq.png'} alt="" className="w-9 h-auto rounded-full" />
                                </span>

                                <div className="flex flex-col items-start">
                                    <p>{currentUser?.name}</p>
                                    <p className="text-xs  text-text-color">Hi, broo ..</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <p className="text-xs  text-text-color">10 min</p>
                                <p className="p-[5px] rounded-full bg-blue-500"></p>
                            </div>
                        </div>

                        )
                    }

                </div>
            </section>
        </>
    );
}

export default ChatList;
