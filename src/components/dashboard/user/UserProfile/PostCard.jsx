import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Image from "next/image";

export default function PostCard() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [replyOpen, setReplyOpen] = useState(null);  // For toggling reply input field
    const [newComment, setNewComment] = useState("");  // For handling new comments
    const [replies, setReplies] = useState({});  // For handling replies

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleComments = () => setCommentsOpen(!commentsOpen);

    const handleReplyClick = (commentId) => {
        setReplyOpen(replyOpen === commentId ? null : commentId);
    };

    const handleCommentSubmit = () => {
        // Submit comment logic goes here
        console.log("New comment:", newComment);
        setNewComment("");  // Clear the input field after submitting
    };

    const handleReplySubmit = (commentId) => {
        console.log("Reply for comment:", commentId, replies[commentId]);
        setReplies({ ...replies, [commentId]: "" });  // Clear the input field after replying
    };

    return (
        <div className="mx-auto md:max-w-[600px] bg-white border rounded-lg shadow-md overflow-hidden mt-7">
            {/* Username & Options */}
            <div className="flex justify-between p-4">
                <div className="flex items-center gap-x-1">
                    <img className="h-12 w-12 rounded-full" src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/462693222_2760356917475560_727695703016902358_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHzVvYiLv3bomd7zemCvnZkxkVPt0f_AQ_GRU-3R_8BD3soJz4PDgE5mpV5Yr1SxgzfMsRjuLETE7xEIPBNYZHf&_nc_ohc=nMVxA1uBxxQQ7kNvgH6eaCr&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AvKeFToTQJi0Z_bP6Xc5-pE&oh=00_AYAXkHXpr42X3saBflBGc_8IMOFUmCnxzbuspV5mHcGN-Q&oe=6713D71C" alt="user avatar" />
                    <div className="ml-2">
                        <h4 className="text-xl font-bold">Mehedi Hasan</h4>
                        <p className="text-sm text-gray-500 text-start">2 days ago</p>
                    </div>
                </div>
                <div className="relative">
                    <button onClick={toggleMenu}>
                        <img src="https://i.postimg.cc/Twv30sTd/menu-1.png" alt="menu" className="h-5" />
                    </button>
                    {menuOpen && (
                        <ul className="absolute z-40 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit Post</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete Post</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Save Post</li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Image Swiper */}
            <Swiper spaceBetween={50} slidesPerView={1} pagination={true} modules={[Pagination]} >
                <SwiperSlide><img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/463016517_2763829013795017_1914259107147377635_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEk41Bdt2PuP7wZRUXuK9aBNsKL9l2yJt02wov2XbIm3fImXPp2CCVjFhNtKjE1bxMa_uE4ZgveOGgfpDa9kbZg&_nc_ohc=sg_hYAGIwXgQ7kNvgGTzaIk&_nc_ht=scontent.fdac24-5.fna&_nc_gid=ACMYpU6fWv3732LfxJv18RN&oh=00_AYCAgkKF154fN8B1frd0bI4amPLfCfUmFdcgUaYlC7xk-A&oe=6713CDC9" alt="slide 1" className="" /></SwiperSlide>
                <SwiperSlide><img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/463016517_2763829013795017_1914259107147377635_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEk41Bdt2PuP7wZRUXuK9aBNsKL9l2yJt02wov2XbIm3fImXPp2CCVjFhNtKjE1bxMa_uE4ZgveOGgfpDa9kbZg&_nc_ohc=sg_hYAGIwXgQ7kNvgGTzaIk&_nc_ht=scontent.fdac24-5.fna&_nc_gid=ACMYpU6fWv3732LfxJv18RN&oh=00_AYCAgkKF154fN8B1frd0bI4amPLfCfUmFdcgUaYlC7xk-A&oe=6713CDC9" alt="slide 2" className="" /></SwiperSlide>
            </Swiper>

            {/* Footer */}
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        {/* https://i.postimg.cc/L6rWV28Q/love.png */}
                        <img src="https://i.postimg.cc/43GFrPtz/heart.png" alt="like" className="h-6 w-6 cursor-pointer" />
                        <img src="https://i.postimg.cc/nhBPRgsF/chat-bubble.png" alt="comment" className="h-6 w-6 cursor-pointer" />
                        <img src="https://i.postimg.cc/wvZrbpkB/direct.png" alt="share" className="h-6 w-6 cursor-pointer" />
                    </div>
                    <p className="text-sm text-gray-500">1,000,000 views</p>
                </div>

                {/* Comments Section */}
                <button onClick={toggleComments} className="text-blue-500 text-sm text-start">
                    View all 482 comments
                </button>

                {commentsOpen && (
                    <div className="mt-4">
                        {/* Example comment */}
                        <div className="border rounded-2xl">
                        <div className="flex items-start mb-2">
                            <img src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/462693222_2760356917475560_727695703016902358_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHzVvYiLv3bomd7zemCvnZkxkVPt0f_AQ_GRU-3R_8BD3soJz4PDgE5mpV5Yr1SxgzfMsRjuLETE7xEIPBNYZHf&_nc_ohc=nMVxA1uBxxQQ7kNvgH6eaCr&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AvKeFToTQJi0Z_bP6Xc5-pE&oh=00_AYAXkHXpr42X3saBflBGc_8IMOFUmCnxzbuspV5mHcGN-Q&oe=6713D71C" alt="commenter" className="h-8 w-8 rounded-full" />
                            <div className="ml-2">
                                <p className="text-sm"><span className="font-bold">Commenter Name</span> Nice post!</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <button>Like</button>
                                    <button className="mr-2" onClick={() => handleReplyClick(1)}>Reply</button>
                                </div>
                            </div>
                        </div>

                        {/* Reply Input Field */}
                        {replyOpen === 1 && (
                            <div className=" relative flex items-start mx-8 mb-4">
                                <input
                                    type="text"
                                    placeholder="Write a reply..."
                                    className="border rounded-lg w-full block h-9 outline-none px-7 text-base"
                                    value={replies[1] || ""}
                                    onChange={(e) => setReplies({ ...replies, 1: e.target.value })}
                                />
                                <div className="absolute text-blue-500 top-[6px] right-4" onClick={handleCommentSubmit}>
                                    <Image src='https://i.postimg.cc/x1wXp5Qd/send-message.png' height={20} width={20} alt="send" className="w-6 cursor-pointer" />
                                </div>
                            </div>
                            
                        )}
                        </div>
                        {/* Add new comment input */}
                        <div className="relative flex items-start mt-4">
                            <input
                                type="text"
                                placeholder="Write a comment..."
                                className="border rounded-lg w-full block h-9 outline-none px-7 text-base"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <div className="absolute text-blue-500 top-[6px] right-4" onClick={handleCommentSubmit}>
                                <Image src='https://i.postimg.cc/x1wXp5Qd/send-message.png' height={20} width={20} alt="send" className="w-6 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
