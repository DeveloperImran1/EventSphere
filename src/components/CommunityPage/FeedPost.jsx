"use client"
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { MdInsertPhoto } from 'react-icons/md';

export default function FeedPost() {
    const session = useSession()
    const currentUser = session.data?.user
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="w-full mx-auto p-4 border rounded-md shadow-md">
            <div className="flex items-center space-x-3">
                <img
                    src={`${currentUser?.image}` || 'https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg'}
                    alt="User profile"
                    className="w-10 h-10 rounded-full"
                />
                <input
                    type="text"
                    placeholder="What's on your mind, Md?"
                    className="w-full p-2 bg-gray-100 rounded-full focus:outline-none"
                    onClick={openModal}
                />
            </div>

            {/* Modal */}
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
                        <div className="mt-4">
                            <textarea
                                rows="4"
                                placeholder="What's on your mind, Md?"
                                className="w-full p-3 border rounded-md focus:outline-none"
                            />
                        </div>
                        <div className="my-1 flex justify-between">
                            <label className="w-full gap-2 sm:w-auto cursor-pointer flex items-center bg-gray-100 text-xl px-1 py-1 rounded-md  font-bold " htmlFor="file">
                                <MdInsertPhoto className='text-3xl' />
                            </label>
                            <input
                                type="file"
                                multiple={true}
                                placeholder="Your Image"
                                required
                                className="hidden" id="file" />
                        
                        <button
                            className=" px-6 py-2 bg-[--color-secondary] text-white rounded-md "
                            onClick={closeModal}
                        >
                            Post
                        </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
