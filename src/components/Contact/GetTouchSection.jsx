"use client";

import Image from 'next/image';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetTouchSection = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Show success toast message
        toast.success('Message sent successfully!');

        // Clear form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className=' mt-16 text-[16px] text-[#333] leading-[18px] bg-white overflow-x-hidden font-normal'>
            <ToastContainer />
            {/* Content Container */}
            <div className="relative">
                {/* Bg-Thumb */}
                <div className="absolute hidden md:block bg-[url('https://media.istockphoto.com/id/1298294939/photo/man-viewing-newsletter-signup-page-on-tablet-computer.jpg?s=612x612&w=0&k=20&c=Qw2o4mwEGbF41M-XPfs44lYWTTnCP2YlNNpopiA5cUE=')] bg-center bg-no-repeat bg-cover top-0 right-0 h-full w-[calc(50%-15px)]">
                    <div className="bg-white h-full w-full opacity-15"></div>
                </div>
                {/* Container */}
                <div className="w-full px-4 mx-auto lg:max-w-[960px] xl:max-w-[1170px]">
                    <div className="flex flex-col md:flex-row flex-wrap -mx-4 justify-between">
                        <div className="w-full md:w-1/2 px-4 md:max-w-[58.333333%] lg:max-w-1/2 xl:max-w-[41.666667%]">
                            <div className="text-left mb-10 sm:mb-15">
                                <span className="block text-[#31d7a9] uppercase text-[18px] mb-2  sm:text-[26px] ">Contact Us</span>
                                <h2 className="text-[30px] sm:text-[50px] leading-[1.3] sm:leading-[60px] text-black font-bold uppercase mb-4 sm:mb-6 -mt-2 sm:-mt-3">Get in Touch</h2>
                                <p className="mt-[-11px] leading-6 sm:text-[16px] sm:max-w-[700px] sm:mx-auto text-[#333]">We’d love to talk about how we can work together. Send us a message below and we’ll respond as soon as possible.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="-mb-[25px]">
                                <div className="mb-[25px]">
                                    <label htmlFor="name" className='cursor-pointer inline-block mb-2 text-[17px]'>Name <span className='text-[#f1481f]'>*</span></label>
                                    <input
                                        type="text"
                                        placeholder='Enter Your Full Name'
                                        name='name'
                                        required
                                        value={formData.name} // Bind to formData
                                        onChange={handleChange} // Handle change
                                        className='w-full h-[60px] outline-none border border-gray-300 rounded-[10px] pl-[20px] text-[#333] bg-white'
                                    />
                                </div>
                                <div className="mb-[25px]">
                                    <label htmlFor="email" className='cursor-pointer inline-block mb-2 text-[17px]'>Email <span className='text-[#f1481f]'>*</span></label>
                                    <input
                                        type="email"
                                        placeholder='Enter Your Email'
                                        name='email'
                                        required
                                        value={formData.email} // Bind to formData
                                        onChange={handleChange} // Handle change
                                        className='w-full h-[60px] outline-none border border-gray-300 rounded-[10px] pl-[20px] text-[#333] bg-white'
                                    />
                                </div>
                                <div className="mb-[25px]">
                                    <label htmlFor="message" className='cursor-pointer inline-block mb-2 text-[17px]'>Message <span className='text-[#f1481f]'>*</span></label>
                                    <textarea
                                        placeholder='Enter Your Message'
                                        name='message'
                                        required
                                        value={formData.message} // Bind to formData
                                        onChange={handleChange} // Handle change
                                        className='w-full rounded-lg flex bg-white p-5 h-44 text-[#333] border border-gray-300 outline-none resize-none'
                                    />
                                </div>
                                <div className="mb-[25px]">
                                    <input
                                        type="submit"
                                        value="Send Message"
                                        className='w-full uppercase rounded-[30px] border-none font-semibold h-[60px] pl-5 text-white cursor-pointer bg-blue-500 transition ease-linear duration-300'
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-1/2 z-40 md:mt-[370px]">
                            <div className="flex flex-wrap py-20">
                                <div className="w-1/2 flex flex-wrap gap-x-3 pl-2 justify-center items-center">
                                    <div className="max-w-[48px] flex">
                                        <Image src="https://i.postimg.cc/Y9FZg3F1/contact01.png" height={57} width={55} alt='logo' />
                                    </div>
                                    <div className="mt-2">
                                        <p className='bg-white py-2 px-5 rounded-md mb-[5px]'>Phone Number</p>
                                        <p className='bg-white py-2 px-5 rounded-md mb-[5px]'>+1234 56789</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-wrap gap-x-3 pl-5 justify-center items-center border-l-[1px] border-gray-300">
                                    <div className="max-w-[48px]">
                                        <Image src="https://i.postimg.cc/Y9FZg3F1/contact01.png" height={57} width={55} alt='logo' />
                                    </div>
                                    <div className="mt-2">
                                        <p className='bg-white py-2 px-5 rounded-md mb-[5px]'>Email Address</p>
                                        <p className='bg-white py-2 px-5 rounded-md mb-[5px]'>info@eventsphare.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetTouchSection;
