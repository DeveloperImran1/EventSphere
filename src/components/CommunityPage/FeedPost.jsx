"use client"
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { MdInsertPhoto } from 'react-icons/md';
import { uploadCloudinary } from "@/hooks/upload";
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useRouter } from 'next/navigation'
export default function FeedPost({post}) {
    console.log("infinity", post);
    const router = useRouter()
    const session = useSession();
    const currentUser = session.data?.user;
    const axiosPublic = useAxiosPublic();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Handle file selection
    const handleImageChange = async (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setImages([file]); // Store the file for uploading later
        }
    };

    // Handle post submission
    const handlePostSubmit = async (e) => {
        e.preventDefault();
        if ( !currentUser) {
            toast.success("Please Login First 👊")
            return router.push('/login')
        }
        const form = e.target;
        const title = form?.title?.value;

        if (!title && images.length === 0) {
            return toast.error("Please add a title or image!");
        }

        setLoading(true);
        try {
            let uploadedImageUrl = null;
            if (images.length > 0) {
                const uploadedImage = await uploadCloudinary(images[0]);
                uploadedImageUrl = uploadedImage?.url;
            }

            // Construct post object to match backend schema
            const postObj = {
                content: {
                    title,
                    text: '',
                    media: uploadedImageUrl,
                },
                user: {
                    email: currentUser?.email,
                    name: currentUser?.name,
                    profile_picture: currentUser?.image,
                },
                reactions: {
                    love: 0,
                },
                comments: [], 
            };

            // Send post object to the server
            const res = await axiosPublic.post('/createPost', postObj);
            if (res?.status === 201) {
                toast.success('Post created successfully!');
                form.reset();
                setSelectedImage(null);
                setImages([]);
                closeModal();
            }
        } catch (error) {
            console.error('Error during post submission:', error.response?.data || error.message);
            toast.error('Something went wrong. Try again!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full mx-auto p-4 border rounded-md shadow-md">
            <div className="flex items-center space-x-3">
                <img
                    src={currentUser?.image || 'https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg'}
                    alt="User profile"
                    className="w-10 h-10 rounded-full"
                />
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    className="w-full p-2 bg-gray-100 rounded-full focus:outline-none"
                    onClick={openModal}
                />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold">Create post</h2>
                            <button
                                className="text-gray-500 hover:text-black"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </div>
                        <form onSubmit={handlePostSubmit}>
                            {/* title */}
                            <div className="mt-4">
                                <textarea
                                    rows="4"
                                    name="title"
                                    placeholder="What's on your mind?"
                                    className="w-full p-3 border rounded-md focus:outline-none"
                                />
                            </div>

                            {/* Image */}
                            <div className="flex justify-between">
                                <div className="my-1 flex">
                                    <label className="cursor-pointer flex items-center bg-gray-100 text-xl px-2 py-1 rounded-md">
                                        <MdInsertPhoto className="text-3xl" />
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                    {selectedImage && (
                                        <img src={selectedImage} alt="Selected" className="h-10 w-10 ml-2 rounded-md" />
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-500 text-white rounded-md"
                                    disabled={loading}
                                >
                                    {loading ? 'Posting...' : 'Post'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <Toaster />
        </div>
    );
}
