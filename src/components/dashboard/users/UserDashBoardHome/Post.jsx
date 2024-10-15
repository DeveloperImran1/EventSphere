import React from "react";
import Social from "./Social";
import AllPost from "./AllPost";
import PostCard from "../../user/UserProfile/PostCard";

const Post = () => {
  return (
    <>
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
      <Social/>
    </div>
    {/* <AllPost/> */}
    <PostCard/>
    </>
  );
};

export default Post;
