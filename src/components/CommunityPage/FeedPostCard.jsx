"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Image from "next/image";

export default function FeedPostCard() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [replyOpen, setReplyOpen] = useState(null);
    const [newComment, setNewComment] = useState("");
    const [replies, setReplies] = useState({});

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleComments = () => setCommentsOpen(!commentsOpen);
    const handleReplyClick = (commentId) => {
        setReplyOpen(replyOpen === commentId ? null : commentId);
    };
    const handleCommentSubmit = () => {
        console.log("New comment:", newComment);
        setNewComment("");
    };
    const handleReplySubmit = (commentId) => {
        console.log("Reply for comment:", commentId, replies[commentId]);
        setReplies({ ...replies, [commentId]: "" });
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <div className="bg-white border rounded-lg shadow-md">
                {/* Username & Options */}
                <div className="flex justify-between p-4">
                    <div className="flex items-center gap-x-3">
                        <img
                            className="h-12 w-12 rounded-full"
                            src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-1/462693222_2760356917475560_727695703016902358_n.jpg?stp=c143.0.1797.1797a_dst-jpg_s160x160&_nc_cat=111&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHzVvYiLv3bomd7zemCvnZkxkVPt0f_AQ_GRU-3R_8BD3soJz4PDgE5mpV5Yr1SxgzfMsRjuLETE7xEIPBNYZHf&_nc_ohc=1ABS6nZb2lQQ7kNvgExCvQr&_nc_ht=scontent.fdac24-2.fna&_nc_gid=A1nHJxKafUTmF2K6dFz9HLD&oh=00_AYDTBenhrE3Cld6pEHKx5-JwhOOH3CloAftAJcBmpt2mYw&oe=671D991E"
                            alt="user avatar"
                        />
                        <div>
                            <h4 className="text-xl font-bold">Mehedi Hasan</h4>
                            <p className="text-sm text-gray-500">2 days ago</p>
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
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="my-2"
                >
                    <SwiperSlide>
                        <img
                            src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-1/462693222_2760356917475560_727695703016902358_n.jpg?stp=c143.0.1797.1797a_dst-jpg_s160x160&_nc_cat=111&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHzVvYiLv3bomd7zemCvnZkxkVPt0f_AQ_GRU-3R_8BD3soJz4PDgE5mpV5Yr1SxgzfMsRjuLETE7xEIPBNYZHf&_nc_ohc=1ABS6nZb2lQQ7kNvgExCvQr&_nc_ht=scontent.fdac24-2.fna&_nc_gid=A1nHJxKafUTmF2K6dFz9HLD&oh=00_AYDTBenhrE3Cld6pEHKx5-JwhOOH3CloAftAJcBmpt2mYw&oe=671D991E"
                            alt="slide 1"
                            className="w-full max-h-[700px] object-cover rounded-md"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-1/462693222_2760356917475560_727695703016902358_n.jpg?stp=c143.0.1797.1797a_dst-jpg_s160x160&_nc_cat=111&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHzVvYiLv3bomd7zemCvnZkxkVPt0f_AQ_GRU-3R_8BD3soJz4PDgE5mpV5Yr1SxgzfMsRjuLETE7xEIPBNYZHf&_nc_ohc=1ABS6nZb2lQQ7kNvgExCvQr&_nc_ht=scontent.fdac24-2.fna&_nc_gid=A1nHJxKafUTmF2K6dFz9HLD&oh=00_AYDTBenhrE3Cld6pEHKx5-JwhOOH3CloAftAJcBmpt2mYw&oe=671D991E"
                            alt="slide 2"
                            className="w-full max-h-[700px] object-cover rounded-md"
                        />
                    </SwiperSlide>
                </Swiper>

                {/* Footer */}
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-2">
                            <img src="https://i.postimg.cc/43GFrPtz/heart.png" alt="like" className="h-6 w-6 cursor-pointer" />
                            <img src="https://i.postimg.cc/nhBPRgsF/chat-bubble.png" alt="comment" className="h-6 w-6 cursor-pointer" />
                            <img src="https://i.postimg.cc/wvZrbpkB/direct.png" alt="share" className="h-6 w-6 cursor-pointer" />
                        </div>
                        <p className="text-sm text-gray-500">1,000,000 views</p>
                    </div>

                    {/* Comments Section */}
                    <button onClick={toggleComments} className="text-blue-500 text-sm">
                        View all 482 comments
                    </button>

                    {commentsOpen && (
                        <div className="mt-4">
                            <div className="border rounded-2xl p-2">
                                <div className="flex items-start mb-2">
                                    <img
                                        src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/462693222_2760356917475560_727695703016902358_n.jpg"
                                        alt="commenter"
                                        className="h-8 w-8 rounded-full"
                                    />
                                    <div className="ml-2">
                                        <p className="text-sm">
                                            <span className="font-bold">Commenter Name</span> Nice post!
                                        </p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <button>Like</button>
                                            <button className="ml-2" onClick={() => handleReplyClick(1)}>Reply</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Reply Input Field */}
                                {replyOpen === 1 && (
                                    <div className="relative flex items-start mx-8 mb-4">
                                        <input
                                            type="text"
                                            placeholder="Write a reply..."
                                            className="border rounded-lg w-full block h-9 outline-none px-7 text-base"
                                            value={replies[1] || ""}
                                            onChange={(e) => setReplies({ ...replies, 1: e.target.value })}
                                        />
                                        <div className="absolute text-blue-500 top-[6px] right-4" onClick={() => handleReplySubmit(1)}>
                                            <Image src="https://i.postimg.cc/x1wXp5Qd/send-message.png" height={20} width={20} alt="send" className="w-6 cursor-pointer" />
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
                                    <Image src="https://i.postimg.cc/x1wXp5Qd/send-message.png" height={20} width={20} alt="send" className="w-6 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
