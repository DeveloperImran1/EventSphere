"use client"; 
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'; // To make API calls
import Image from "next/image";

export default function FeedPostCard() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [replyOpen, setReplyOpen] = useState(null);
    const [newComment, setNewComment] = useState("");
    const [replies, setReplies] = useState({});
    const [dataSucre, setDataSucre] = useState([]); // Initialize empty array
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1); // For pagination
    const reversedDataSucre = dataSucre.slice().reverse();
    useEffect(() => {
        // Fetch initial data
        fetchMoreData();
    }, []);

    const fetchMoreData = async () => {
        try {
            const res = await axios.get(`http://localhost:9000/getAllPost?page=${page}`);
            const newData = res?.data || []; // Adjust based on API response structure
            console.log("Fetched data:", newData);

            if (newData.length < dataSucre.length) {
                setHasMore(false); // Stop fetching if no more data
            } else {
                setDataSucre([...dataSucre, ...newData]); // Append new data to the existing data
                setPage(page + 1); // Increment page number for next fetch
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

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
        <InfiniteScroll
            dataLength={dataSucre.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>} // Display a loader while fetching
            endMessage={<p className="text-center text-black text-3xl my-5">All posts are loaded</p>} // Display when no more data
        >
            {reversedDataSucre.map((item, index) => (
                <div key={index} className="w-full max-w-3xl mx-auto p-4">
                    <div className="bg-white border rounded-lg shadow-md">
                        {/* Username & Options */}
                        <div className="flex justify-between p-4">
                            <div className="flex items-center gap-x-3">
                                <img
                                    className="h-12 w-12 rounded-full"
                                    src={item.user?.profile_picture || "default-avatar.png"} // Use avatar from API
                                    alt="user avatar"
                                />
                                <div>
                                    <h4 className="text-xl font-bold">{item.user?.name || "Unknown User"}</h4>
                                    <p className="text-sm text-gray-500">{new Date(item.created_at).toLocaleString()}</p>
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
                            {item.content?.media?.length > 0 && item.content.media.map((imgSrc, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={imgSrc}
                                        alt={`slide ${i + 1}`}
                                        className="w-full max-h-[700px] object-cover rounded-md"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Footer */}
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-x-2">
                                    <img src="https://i.postimg.cc/43GFrPtz/heart.png" alt="like" className="h-6 w-6 cursor-pointer" />
                                    <img src="https://i.postimg.cc/nhBPRgsF/chat-bubble.png" alt="comment" className="h-6 w-6 cursor-pointer" />
                                    <img src="https://i.postimg.cc/wvZrbpkB/direct.png" alt="share" className="h-6 w-6 cursor-pointer" />
                                </div>
                                <p className="text-sm text-gray-500">{item.views || 0} views</p>
                            </div>

                            {/* Comments Section */}
                            <button onClick={toggleComments} className="text-blue-500 text-sm">
                                View all {item.comments?.length || 0} comments
                            </button>

                            {commentsOpen && (
                                <div className="mt-4">
                                    {/* Render comments */}
                                    {item.comments?.map((comment, cIndex) => (
                                        <div key={cIndex} className="border rounded-2xl p-2">
                                            <div className="flex items-start mb-2">
                                                <img
                                                    src={comment.user?.profile_picture || "default-avatar.png"}
                                                    alt="commenter"
                                                    className="h-8 w-8 rounded-full"
                                                />
                                                <div className="ml-2">
                                                    <p className="text-sm">
                                                        <span className="font-bold">{comment.user?.name || "Anonymous"}</span> {comment.text}
                                                    </p>
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <button>Like</button>
                                                        <button className="ml-2" onClick={() => handleReplyClick(comment._id)}>Reply</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Reply Input Field */}
                                            {replyOpen === comment._id && (
                                                <div className="relative flex items-start mx-8 mb-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Write a reply..."
                                                        className="border rounded-lg w-full block h-9 outline-none px-7 text-base"
                                                        value={replies[comment._id] || ""}
                                                        onChange={(e) => setReplies({ ...replies, [comment._id]: e.target.value })}
                                                    />
                                                    <div className="absolute text-blue-500 top-[6px] right-4" onClick={() => handleReplySubmit(comment._id)}>
                                                        <Image src="https://i.postimg.cc/x1wXp5Qd/send-message.png" height={20} width={20} alt="send" className="w-6 cursor-pointer" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}

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
            ))}
        </InfiniteScroll>
    );
}
