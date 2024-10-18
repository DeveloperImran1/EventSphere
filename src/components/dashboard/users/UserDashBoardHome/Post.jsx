"use client"
import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import PostCard from "./PostCard";
import useMyAllPostWithEmail from "@/hooks/useMyAllPostWithEmail";
import Image from "next/image";
import { uploadCloudinary } from "@/hooks/upload";
import { useSession } from "next-auth/react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { TbFidgetSpinner } from "react-icons/tb";
import toast, { Toaster } from 'react-hot-toast';
import Loading from "@/components/shared/LoadingSpiner/Loading";
import { usePathname } from "next/navigation";
const Post = () => {

  const [images, setImages] = useState([]);
  const [links, setLinks] = useState([]);
  const [showName, setShowName] = useState({})
  const [selectedImage, setSelectedImage] = useState(null);
  const axiosPublic = useAxiosPublic()
  const session = useSession()
  const [loading, setLoading] = useState(false)

  const { data: posts = [], isLoading, refetch } = useMyAllPostWithEmail();
  console.log("all my post is ", posts)

  // last path or email k access korbe
  const pathname = usePathname();
    const lastPathSegment = pathname?.split('/').filter(Boolean).pop();

  // Handle file selection
  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // Create a URL for the selected file to display as an image
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }

  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form?.title?.value;
    const message = form?.message?.value;

    if (session?.data?.user?.email !== lastPathSegment) {
      return toast.error('You cannot post another user profile 😒');
    }

    setLoading(true)
    try {
      // Create an array to store the uploaded image URLs
      let uploadedLinks = [];
      for (let i = 0; i < images?.length; i++) {
        const data = await uploadCloudinary(images[i]); // Upload each image
        uploadedLinks.push(data?.url); // Add the URL to the array
      }

      // After all images are uploaded, update the `links` state
      setLinks(uploadedLinks);
      console.log(session)
      // Now use `uploadedLinks` directly instead of the state, because the state will update asynchronously
      const postObj = {
        comments: [],
        content: {
          title,
          text: message,
          media: uploadedLinks, // Use the uploadedLinks array here
        },
        user: {
          email: session?.data?.user?.email,
          name: session?.data?.user?.name,
          profile_picture: session?.data?.user?.image,
        },
        reactions: {
          love: 0,
        },
      };

      console.log("Post Object: ", postObj);

      // You can now send `postObj` to the server or perform further actions
      const res = await axiosPublic.post('/createPost', postObj)
      console.log("post er responce ", res)
      if (res?.status === 201) {
        toast.success('Successfully Posted 👏');
        setLoading(false)
        form.reset()
        selectedImage("")
        refetch()
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error('Something Went Wrong 😒');
    }
  };



  return (
    <div className=" md:min-w-[350px] lg:min-w-[450px]">
      <div>
        <form onSubmit={handlePostSubmit}>
          {
            selectedImage && <div className="flex gap-1 justify-center items-center ">
              <Image src={selectedImage || "https://res.cloudinary.com/dqdircc96/image/upload/v1728834438/e7nhywmrjz43tmuctpwq.png"} height={500} width={1200} alt="Profile Image" id="img" className="h-[200px] w-[300px] rounded-md" />
            </div>
          }


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
              <div className='p-2 bg-green-200 rounded-md'><FaLink size={22} /></div>

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
              <button type="submit" className='p-2 cursor-pointer bg-green-400 rounded-md flex gap-1 justify-center items-center w-[120px]'>
                {
                  loading ? <p className="flex flex-col justify-center items-center"><TbFidgetSpinner size={22} className="text-white animate-spin "></TbFidgetSpinner></p> : <div className="flex justify-center items-center "><MdLocalPostOffice /> <p className="text-black text-[17px] ">Post</p></div>
                }
              </button>






            </div>
          </div>
        </form>
      </div>
      <div className="gird grid-cols-1 gap-y-3">
        {
          isLoading ? <Loading></Loading> : posts?.length < 1 ? <div className="flex flex-col mt-5 gap-1 justify-center items-center">
            <h5 className="text-[20px] font-bold text-center">You have not post</h5>
            <Image src={"https://cdn.vectorstock.com/i/500p/30/21/data-search-not-found-concept-vector-36073021.jpg"} height={500} width={1200} alt="Profile Image" id="img" className="h-[300px] w-[300px] rounded-md" />
          </div> : posts?.map(post => <PostCard key={post?._id} post={post} refetch={refetch}></PostCard>)
        }
      </div>

    </div>
  );
};

export default Post;
