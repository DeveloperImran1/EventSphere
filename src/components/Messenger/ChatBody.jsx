import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

function ChatBody() {

    const whichMessage = ["her", "me", "her", "me", "her", "me", "her", "me", "her", "me", "her", "me", "her", "me", "her", "me",];
    return (
        <>
            <section className="p-5 w-full ">
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col justify-between items-start gap-2">
                        <h1>Imran Hassan</h1>
                        <div className="flex gap-2">
                            <div className="px-[8px]  rounded-full bg-blue-500"></div>
                            <p className="text-xs  text-text-color">Active</p>
                        </div>

                    </div>
                    <BsThreeDotsVertical></BsThreeDotsVertical>
                </div>

                <p className="border-[0.5px] my-4 mb-6 border-gray-500"></p>

                <div className="flex justify-between items-center gap-2">
                    <p className="border-[0.5px] w-full my-4 mb-6 border-gray-500"></p>

                    <p className="text-text-color">Today</p>
                    <p className="border-[0.5px] w-full my-4 mb-6 border-gray-500"></p>
                </div>


                {/* messageing section  */}
                <div className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">



                    {
                        whichMessage?.map((person) => {
                            return (person === "her" ? <div className="flex  items-start gap-4 my-3">
                                <Image height={676} width={1200} src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/409190995_2451672608340062_5052422953989411988_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=hh-ke09yg-gQ7kNvgERag7_&_nc_ht=scontent.fdac157-1.fna&oh=00_AYBrh0gfCKq1rErk1yb5DiQ3fzOpgeX1Fh8FuEEFVeb12A&oe=66D37960" alt="" className="w-10 h-auto rounded-full" />

                                <div>
                                    <div className="flex flex-col text-white p-4 rounded-md items-start bg-[#71b6f9] relative">
                                        <p className="text-sm  ">Imran Hassan</p>
                                        <h1 className="text-sm ">He, Tangila, How are you. I know you are fine,,, Because</h1>

                                        <div className="w-0 h-0 border-solid transform rotate-0 absolute top-0 -left-3"
                                            style={{ borderWidth: '0 14px 14px 0', borderColor: 'transparent #71B6F9 transparent transparent' }}></div>
                                    </div>
                                    <h1 className="text-sm ">10:05</h1>
                                </div>

                            </div> :

                                <div className="flex justify-end items-end my-3">
                                    <div className="flex  items-start gap-4 ">

                                        <div>
                                            <div className="flex flex-col text-white p-4 rounded-md items-end bg-[#71b6f9] relative">
                                                <p className="text-sm  ">Imran Hassan</p>
                                                <h1 className="text-sm ">He, Tangila, How are you. I know you are fine,,, Because</h1>

                                                <div className="w-0 h-0 border-solid transform -rotate-[90deg] absolute top-0 -right-3"
                                                    style={{ borderWidth: '0 14px 14px 0', borderColor: 'transparent #71B6F9 transparent transparent' }}></div>
                                            </div>
                                            <h1 className="text-sm text-right">10:05</h1>
                                        </div>

                                        <Image height={676} width={1200} src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/409190995_2451672608340062_5052422953989411988_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=hh-ke09yg-gQ7kNvgERag7_&_nc_ht=scontent.fdac157-1.fna&oh=00_AYBrh0gfCKq1rErk1yb5DiQ3fzOpgeX1Fh8FuEEFVeb12A&oe=66D37960" alt="" className="w-10 h-auto rounded-full" />
                                    </div>
                                </div>)
                        })
                    }

                </div>


                {/* search form */}
                <section>

                    <p className="border-[0.5px] my-6 border-gray-500 "></p>

                    <form className="gap-8 flex items-center">
                        <input
                            className="bg-[#363e4b] text-text-color rounded-md px-4 py-2 text-sm placeholder:text-sm outline-none w-full"
                            name="searchDashboard"
                            type="text"
                            placeholder="Enter Your Message..."
                        />
                        <button
                            type="submit"
                            className="  flex gap-2 items-center bg-[#71b6f9] rounded py-2 px-4"
                        >
                         Send
                         <IoSend></IoSend>
                        </button>
                    </form>



                </section>


            </section>
        </>
    );
}

export default ChatBody;