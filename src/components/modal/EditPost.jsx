"use client"
import PropTypes from 'prop-types'
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogTitle,
    DialogPanel,
} from '@headlessui/react'
import { Fragment, useState } from 'react'
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from "react-icons/tb";
import Image from 'next/image';
import { FaCamera, FaLink } from 'react-icons/fa6';
import { MdLocalPostOffice } from 'react-icons/md';


import { uploadCloudinary } from "@/hooks/upload";
import { usePathname } from "next/navigation";
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useSession } from 'next-auth/react';


const EditPost = ({ closeModal, isOpen, refetch, post }) => {
    const [images, setImages] = useState([]);
    const [links, setLinks] = useState([]);
    const [showName, setShowName] = useState({})
    const [selectedImage, setSelectedImage] = useState(null);
    const axiosPublic = useAxiosPublic()
    const session = useSession()
    const [loading, setLoading] = useState(false)

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
        const title = form?.title?.value || post?.content?.title;
        const message = form?.message?.value || post?.content?.text;

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
            if(uploadedLinks?.length < 1){
                uploadedLinks = post?.content?.media
            }
            if(!form?.title?.value && !form?.message?.value && !images?.length ){
                setLoading(false)
                return toast.error('Please Edit Any Field 😒');
            }
            // Now use `uploadedLinks` directly instead of the state, because the state will update asynchronously
            const updatePostObj = {
                content: {
                    title,
                    text: message,
                    media: uploadedLinks, // Use the uploadedLinks array here
                },
            };

            console.log("Post Object: ", updatePostObj);

            // You can now send `postObj` to the server or perform further actions
            const res = await axiosPublic.put(`/updatePost/${post?._id}`, updatePostObj)
            console.log("post er responce ", res)
            if (res?.data?.modifiedCount) {
                toast.success('Your Post Is Updated 👏');
                setLoading(false)
                form.reset()
                closeModal()
                refetch()
            }
        } catch (error) {
            console.error("Error uploading images:", error);
            toast.error('Something Went Wrong 😒');
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25  ' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Become A Tour Guide!
                                </DialogTitle>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Please fillup all the input fields before becoming a
                                        Tour Guide.
                                    </p>
                                </div>
                                <hr className='mt-8 ' />

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
                                                <div onChange={handleImageChange} className="my-4 flex justify-center">
                                                    <input
                                                        type="file"
                                                        multiple={true}
                                                        name="images"
                                                        placeholder="Your Image"
                                                        onChange={(e) => {
                                                            setImages(e.target.files)
                                                            console.log(e.target.files)
                                                            if (e.target.files && e.target.files[0]) {
                                                                const imageFile = e.target.files[0];
                                                                setShowName(imageFile)
                                                            }
                                                        }} className=" border-2 w-[80%]" id="file" />
                                             
                                                </div>
                                                <button type="submit" className='p-2 cursor-pointer bg-green-400 rounded-md flex gap-1 justify-center items-center w-[120px]'>
                                                    {
                                                        loading ? <p className="flex flex-col justify-center items-center"><TbFidgetSpinner size={22} className="text-white animate-spin "></TbFidgetSpinner></p> : <div className="flex justify-center items-center "><MdLocalPostOffice /> <p className="text-black text-[17px] ">Update</p></div>
                                                    }
                                                </button>

                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}


export default EditPost;