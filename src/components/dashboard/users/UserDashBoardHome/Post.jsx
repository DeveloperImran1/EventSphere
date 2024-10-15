import React from "react";
import { FaLink } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import PostCard from "./PostCard";
import useMyAllPostWithEmail from "@/hooks/useMyAllPostWithEmail";

const Post = () => {
  const { data: posts = [] } = useMyAllPostWithEmail();
  console.log("all my post is ", posts)
  return (
    <div className="">
      <div>
        <div>
          <div className="p-4">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize overflow-auto"
              placeholder="Write your message..."
            ></textarea>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-start pl-4 items-center gap-6'>
          <div className='p-2 bg-green-200 rounded-md'><FaLink /></div>
          <div className='p-2 bg-green-200 rounded-md'><FaCamera /></div>
          <div><button className="w-full gap-2 sm:w-auto ml-4 flex items-center  text-xl px-3 py-2 rounded-md bg-green-400 font-bold ">
            <MdLocalPostOffice /> Post</button>
          </div>
        </div>
      </div>
      <div className="gird grid-cols-1 gap-y-3">
        {
          posts?.map(post => <PostCard key={post?._id} post={post}></PostCard>)
        }
      </div>

    </div>
  );
};

export default Post;
