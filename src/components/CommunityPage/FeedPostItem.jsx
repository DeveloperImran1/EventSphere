"use client";
import React from 'react';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import { FaHeart, FaRegComment } from 'react-icons/fa6';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useRouter } from 'next/navigation';
import {
    FacebookIcon,
    FacebookShareButton,
} from "react-share";
import { Share2 } from 'lucide-react';


const FeedPostItem = ({ item, refetch }) => {
    const session = useSession()
    const currentUser = session.data?.user;
    const axiosPublic = useAxiosPublic()
    const [menuOpen, setMenuOpen] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [replyOpen, setReplyOpen] = useState(null);
    const [newComment, setNewComment] = useState("");
    const [replies, setReplies] = useState("");
    const [react, setReact] = useState(false);
    const [love, setLove] = useState(item.reactions.love)
    const router = useRouter()
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleComments = () => setCommentsOpen(!commentsOpen);
    const handleReplyClick = (commentId) => {
        setReplyOpen(replyOpen === commentId ? null : commentId);
    };
    const handleReplySubmit = async (commentId, commenterEmail, id, replyUserPic, commentText) => {
        if (!currentUser) {
            toast.error("Please Login First 👊")
            return router.push('/login')
        }
        // Create a reply object
        const replyObj = {
            replyComment: replies,  // Use commentText for reply content
            commentId,  // The ID of the comment being replied to
            commenterEmail,  // Email of the comment's author (corrected typo)
            id,  // ID of the post
            replyUserPic,  // Picture of the user replying
            user: {  // User details
                email: session?.data?.user?.email || "",  // Ensure these fields are not undefined
                name: session?.data?.user?.name || "",
                profile_picture: session?.data?.user?.image || "",
            },
        };

        console.log("New comment:", replyObj);

    };

    // handleReact
    const handleReact = async () => {
        if (!currentUser) {
            toast.error("Please Login First 👊")
            return router.push('/login')
        }
        // Get the current love count from the post
        let updatedLove = 0;

        // Toggle love count based on the current state of 'react'
        if (react) {
            updatedLove = updatedLove - 1;  // Decrease love if already reacted
        } else {
            updatedLove = updatedLove + 1;  // Increase love if not yet reacted
        }

        // Update the local state (for UI update) and print the value
        setLove(love + updatedLove);
        console.log("Total love ", updatedLove);

        try {
            // Send the updated love count to the server using the updated local value
            const res = await axiosPublic.put(`/addedReact/${post?._id}`, { love: updatedLove });

            // Check if the love count was successfully updated on the server
            if (res?.data?.modifiedCount) {
                refetch(); // Refetch the post data to update the UI
                console.log("Refetch triggered");
            } else {
                console.log("No modification made to the love count");
            }
        } catch (error) {
            console.log("Something went wrong", error?.message);
        }
    };
    // handleCommentSubmit
    const handleCommentSubmit = async () => {
        if (!currentUser) {
            toast.error("Please Login First 👊")
            return router.push('/login')
        }
        if (!newComment) {
            return toast.error("Add Comment 👊")
        }

        const commentObj = {
            text: newComment,
            user: {
                email: session?.data?.user?.email,
                name: session?.data?.user?.name,
                profile_picture: session?.data?.user?.image,
            },
        }
        const res = await axiosPublic.post(`/addedComment/${item?._id}`, commentObj)
        console.log(res?.data)
        if (res?.status === 201) {
            toast.success('Successfully Commented 👏');
            refetch()
            setNewComment("");  // Clear the input field after submitting
        }
        else {
            toast.error('Something Went Wrong 😒');
        }
    };
    // handle Delete
    const handleDelete = async () => {
        if (session?.data?.user?.email !== item?.user?.email) {
            return toast.error('You cannot delete another user post 😒');
        }
        const res = await axiosPublic.delete(`/deletePost/${item?._id}`);
        console.log(res)
        if (res?.data?.deletedCount) {
            toast.success('Successfully Deleted Post 👏');
            refetch()
        }
        else {
            toast.error('Something Went Wrong 😒');
        }
    }


    return (
        <div className="bg-white border rounded-lg shadow-md">
            {/* Username & Options */}
            <div className="flex justify-between p-4">
                <div className="flex items-center gap-x-3">
                    <Image height={676} width={1200}
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
                        <Image height={676} width={20} src="https://i.postimg.cc/Twv30sTd/menu-1.png" alt="menu" className="h-5" />
                    </button>

                    {menuOpen && (
                        <ul className="absolute z-40 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                            {session?.data?.user?.email === item?.user?.email ? (
                                <>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit Post</li>
                                    <li onClick={handleDelete} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete Post</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Save Post</li>
                                </>
                            ) : (
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Save Post</li>
                            )}
                        </ul>
                    )}
                </div>
            </div>
            <div className="px-4 pb-4">
                <p className="text-[17px] font-semibold text-black">{item?.content?.title}</p>
                <h5>{item?.content?.text}</h5>
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
                        <Image height={676} width={1200}
                            src={imgSrc}
                            alt={`slide ${i + 1}`}
                            className="w-full max-h-[320px] object-cover rounded-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Footer */}
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                        <FaHeart onClick={() => {
                            handleReact()
                            setReact(!react)
                        }} size={22} className={`${react ? 'text-red-600' : 'text-gray-600 bg-white'} cursor-pointer`}></FaHeart>
                        <FaRegComment onClick={toggleComments} className='text-[22px] cursor-pointer ' />

                        <FacebookShareButton className="flex" url={`https://event-sphere-bice.vercel.app/community`} quote={item?.content?.title} hashtag="#EventSphare #WebAvengers" >

                            <button type="button" title="Share post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                                </svg>
                            </button>
                            {/* <button className="p-1 rounded-full  backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 bg-[#1b85db] ">
                                <Share2 className="w-6 h-6 text-white" />
                            </button> */}
                        </FacebookShareButton>
                    </div>
                    <p className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-x-1">{love} <FaHeart className='inline text-red-500' /></p>


                </div>

                {/* Comments Section */}
                <button onClick={toggleComments} className="gay-blue-500 text-sm">
                    View all {item.comments?.length || 0} comments
                </button>

                {commentsOpen && (
                    <div className="mt-4">
                        {/* Render comments */}
                        {item.comments?.map((comment, cIndex) => (
                            <div key={cIndex} className="border rounded-2xl p-2">
                                <div className="flex items-start mb-2">
                                    <Image height={676} width={1200}
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
                                            value={replies}
                                            onChange={(e) => setReplies(e.target.value)}
                                        />
                                        <div className="absolute text-blue-500 top-[6px] right-4" onClick={() => handleReplySubmit(comment._id, comment.user?.email, item?._id, item?.profile_picture, comment.text)}>
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
    );
};

export default FeedPostItem;