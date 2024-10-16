import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import moment from 'moment';


const PostCard = ({ post }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [replyOpen, setReplyOpen] = useState(null);  // For toggling reply input field
    const [newComment, setNewComment] = useState("");  // For handling new comments
    const [replies, setReplies] = useState({});  // For handling replies
    const [commentLike, setCommentLike] = useState(false)
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
        <div className="mx-auto max-w-[400px] md:max-w-[480px]  bg-white border rounded-lg shadow-md overflow-hidden mt-7">
            {/* Username & Options */}
            <div className="flex justify-between p-4">
                <Link href={`http://localhost:3000/dashboard/user-profile/${post?.user?.email}`} className="flex items-center gap-x-1">
                    <Image height={1200} width={676} className="h-12 w-12 rounded-full" src={post?.profile_picture || "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/462693222_2760356917475560_727695703016902358_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHzVvYiLv3bomd7zemCvnZkxkVPt0f_AQ_GRU-3R_8BD3soJz4PDgE5mpV5Yr1SxgzfMsRjuLETE7xEIPBNYZHf&_nc_ohc=nMVxA1uBxxQQ7kNvgH6eaCr&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AvKeFToTQJi0Z_bP6Xc5-pE&oh=00_AYAXkHXpr42X3saBflBGc_8IMOFUmCnxzbuspV5mHcGN-Q&oe=6713D71C"} alt="user avatar" />
                    <div className="ml-2">
                        <h4 className="text-xl font-bold">{post?.name || "Mehedi Hasan"}</h4>
                        <p className="text-sm text-gray-500 text-start">{moment(post?.created_at).fromNow() || "2 day ago"}</p>
                    </div>
                </Link>
                <div className="relative">
                    <button onClick={toggleMenu}>
                        <Image height={1200} width={676} src="https://i.postimg.cc/Twv30sTd/menu-1.png" alt="menu" className="h-5 w-6" />
                    </button>
                    {menuOpen && (
                        <ul className="absolute z-40 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                            <Link href="#"><p className="px-4 py-2 text-[18px] hover:bg-gray-100 cursor-pointer">Edit Post</p></Link>
                            <Link href="#"><p className="px-4 py-2 text-[18px] hover:bg-gray-100 cursor-pointer">Delete Post</p></Link>
                        </ul>
                    )}
                </div>
            </div>

            <div className="px-4 pb-4">
                <p className="text-[17px] font-semibold text-black">{post?.content?.title}</p>
                <h5>{post?.content?.text}</h5>
            </div>

            {/* Image Swiper */}
            <Swiper spaceBetween={50} slidesPerView={1} pagination={true} modules={[Pagination]} >
                {
                    post?.content?.media?.map((image, index) => <SwiperSlide key={index}><Image height={1200} width={676} src={image || "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/463016517_2763829013795017_1914259107147377635_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEk41Bdt2PuP7wZRUXuK9aBNsKL9l2yJt02wov2XbIm3fImXPp2CCVjFhNtKjE1bxMa_uE4ZgveOGgfpDa9kbZg&_nc_ohc=sg_hYAGIwXgQ7kNvgGTzaIk&_nc_ht=scontent.fdac24-5.fna&_nc_gid=ACMYpU6fWv3732LfxJv18RN&oh=00_AYCAgkKF154fN8B1frd0bI4amPLfCfUmFdcgUaYlC7xk-A&oe=6713CDC9"} alt="slide 1" className="rounded-md" /></SwiperSlide>)
                }
            </Swiper>

            {/* Footer */}
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        {/* https://i.postimg.cc/L6rWV28Q/love.png */}
                        <FaHeart size={22} className={`text-gray-600`}></FaHeart>
                        <Image onClick={toggleComments} height={1200} width={676} src="https://i.postimg.cc/nhBPRgsF/chat-bubble.png" alt="comment" className="h-6 w-6 cursor-pointer" />
                        <Image height={1200} width={676} src="https://i.postimg.cc/wvZrbpkB/direct.png" alt="share" className="h-6 w-6 cursor-pointer" />
                    </div>
                    <p className="text-sm text-gray-500">{post?.reactions?.love || 1} Love</p>
                </div>

                {/* Comments Section */}
                <button onClick={toggleComments} className="text-blue-500 text-sm text-start">
                    View all {post?.comments?.length} comments
                </button>

                {commentsOpen && (
                    <div className="mt-4">
                        {/* Example comment */}
                        {
                            post?.comments?.map(comment => <div key={comment?._id} className="border rounded-2xl">
                                <div className="flex items-start mb-2">
                                  <Link href={`http://localhost:3000/dashboard/user-profile/${comment?.user?.email}`}>  <Image height={1200} width={676} src={comment?.user?.profile_picture || "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/462693222_2760356917475560_727695703016902358_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHzVvYiLv3bomd7zemCvnZkxkVPt0f_AQ_GRU-3R_8BD3soJz4PDgE5mpV5Yr1SxgzfMsRjuLETE7xEIPBNYZHf&_nc_ohc=nMVxA1uBxxQQ7kNvgH6eaCr&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AvKeFToTQJi0Z_bP6Xc5-pE&oh=00_AYAXkHXpr42X3saBflBGc_8IMOFUmCnxzbuspV5mHcGN-Q&oe=6713D71C"} alt="commenter" className="h-8 w-8 rounded-full" /></Link>
                                    <div className="ml-2">
                                        <p className="text-sm"><span className="font-bold">{comment?.user?.name || "Anonymus"}</span></p>
                                        <p className="text-sm ">{comment?.text || "Nice Post"}</p>
                                        <div className="flex items-center text-sm text-gray-500  w-[300px] ">
                                            <p className="text-sm text-gray-500 font-bold text-start mr-2">{moment(comment?.created_at).fromNow()}</p>
                                            <p onClick={() => setCommentLike(!commentLike)} className={`text-sm cursor-pointer text-gray-500 font-bold text-start mr-2 ${commentLike || 'text-blue-700'}`}>Like</p>
                                            <p className="text-sm cursor-pointer text-gray-500 font-bold text-start mr-2" onClick={() => handleReplyClick(1)}>Reply</p>
                                            <BiSolidLike size={22} className={`text-sm font-bold text-start mr-2 text-blue-700 ${commentLike && 'hidden'}`}></BiSolidLike>


                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }

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
export default PostCard;