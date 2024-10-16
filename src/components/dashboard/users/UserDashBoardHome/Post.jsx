"use client"
import React, { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import PostCard from "./PostCard";
import useMyAllPostWithEmail from "@/hooks/useMyAllPostWithEmail";
import Image from "next/image";
import { uploadCloudinary } from "@/hooks/upload";
import { useSession } from "next-auth/react";

const Post = () => {

  const [images, setImages] = useState([]);
  const [links, setLinks] = useState([]);
  const [showName, setShowName] = useState({})
  const [selectedImage, setSelectedImage] = useState(null);

  const session = useSession()
  // Handle file selection
  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // Create a URL for the selected file to display as an image
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }



    // image upload in cloudinary
    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i])
        arr.push(data?.url)
      }
      setLinks(arr)
    }
    catch (error) {
      console.log(error)
    }
    console.log("Uploaded Images", links)

  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form?.title?.value;
    const message = form?.message?.value;
    
    const postObj = {
      comments: [],
      content: {
       title, text: message, media: links,  
       reactions: {
        love: 0
       },
       user: {
        email: session?.data?.user?.email,
        name: session?.data?.user?.name,
        profile_picture: session?.data?.user?.photo,
       }
      }
    }
    console.log("post info is: ", postObj)
 
  }

  const { data: posts = [] } = useMyAllPostWithEmail();
  console.log("all my post is ", posts)

  return (
    <div className="">
      <div>
        <form onSubmit={handlePostSubmit}>
          <Image src={selectedImage || "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"} height={500} width={1200} alt="Profile Image" id="img" className="h-[100px] w-[100px] rounded-full" />

          <div className="p-4 pb-0">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize overflow-auto"
              placeholder="Write your title..."
            ></input>
          </div>
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
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize overflow-auto"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <div>
            <div className='flex justify-start pl-4 items-center gap-6'>
              <div className='p-2 bg-green-200 rounded-md'><FaLink /></div>

              <div onChange={handleImageChange} className="my-4 flex justify-center">
                <label className="w-full gap-2 sm:w-auto cursor-pointer flex items-center  text-xl px-3 py-2 rounded-md bg-green-200 font-bold " htmlFor="file">
                  <FaCamera />
                  {/* <p className="text-lg font-medium text-black"> {showName.name ? "Post" : 'Upload'}</p> */}
                </label>
                <input
                  type="file"
                  multiple={true}
                  placeholder="Your Image"
                  required
                  onChange={(e) => {
                    setImages(e.target.files)
                    if (e.target.files && e.target.files[0]) {
                      const imageFile = e.target.files[0];
                      setShowName(imageFile)
                    }
                  }} className="hidden" id="file" />
              </div>

              <button type="submit" className='p-2 cursor-pointer bg-green-400 rounded-md flex gap-1 justify-center items-center'><MdLocalPostOffice /> <p className="text-black text-[17px] ">Post</p></button>


            </div>
          </div>
        </form>
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
