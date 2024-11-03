"use client"
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { MdInsertPhoto } from 'react-icons/md';
import { uploadCloudinary } from "@/hooks/upload";
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
export default function FeedPost({refetch}) {
    const router = useRouter()
    const session = useSession();
    const currentUser = session.data?.user;
    const axiosPublic = useAxiosPublic();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState([]);   

    const [loading, setLoading] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    // Handler for file selection and upload
    const handleImageChange = async (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file)); // Creates preview URLs for the selected images.
        setSelectedImage([...images ,imageUrls]);
        setLoading(true);

        try {
            // Uploads each selected file to Cloudinary, waits for all uploads to finish.
            const uploadedImages = await Promise.all(files.map(file => uploadCloudinary(file)));
            const imageUrls = uploadedImages.map(image => image.url); // Extracts URLs from uploaded images.
            setImages([...images, ...imageUrls]); // Adds new image URLs to existing gallery data.
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };
    // console.log("Selected Image ", selectedImage)

    // Handle post submission
    const handlePostSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) {
            toast.error("Please Login First 👊");
            return router.push('/login');
        }
        const form = e.target;
        const title = form?.title?.value;
    
        if (!title && images.length === 0) {
            return toast.error("Please add a title or image!");
        }
    
        setLoading(true);
        try {
            // Construct post object to match backend schema
            const postObj = {
                content: {
                    title,
                    text: '',
                    media: images,
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
                refetch();
                setImages([]);
                closeModal();
    
                // Create a notification object
                const notification = {
                    type: "community_post",
                    message: `${currentUser?.name} created a new post: ${title.slice(0,30)}`,
                    route: `/community`, // Assuming the backend returns a postId
                };
    
                // Try updating notification with error handling
                    const notificationRes = await axiosPublic.patch(`/notification/${currentUser.email}`, notification);
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
                <Image height={676} width={1200}
                    src={currentUser?.image || 'https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg'}
                    alt="User profile"
                    className="w-10 h-10 rounded-full"
                />
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    className="md:w-full w-[70%] p-2 bg-gray-100 rounded-full focus:outline-none"
                    onClick={openModal}
                />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50">
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
                        {/* Preview */}
                        <div className="flex flex-wrap gap-2">
                            {/* {selectedImage?.length > 0 &&  
                                <Image height={676} width={1200} src={selectedImage[0]} alt="Selected" className="h-20 w-20 rounded" />
                            } */}
                            {selectedImage?.[0]?.length > 0 &&  selectedImage?.[0]?.map((image, index)=> (
                                <Image height={676} width={1200} key={index} src={image} alt="Selected" className="h-20 w-20 rounded" />
                            ))}
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
                                            multiple={true}
                                            className="hidden"
                                            onChange={handleImageChange}
                                        />
                                    </label>
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
