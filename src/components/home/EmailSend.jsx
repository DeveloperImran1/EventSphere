'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { toast, Toaster } from 'react-hot-toast';
import Image from 'next/image';
import SectionTitleSimple from '../shared/SectionTitleSimple';

const EmailSend = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            user_name: name, // Ensure this matches your template's parameter name
            user_email: email,
            user_phone: phone,
        };

        console.log(templateParams); // Log template params for debugging

        // Use EmailJS to send the email
        emailjs
            .send('service_vrtjb7u', 'template_iczs5ah', templateParams, 'mG0AHrO3300phZ9Kb')
            .then(
                (response) => {
                    console.log('Email sent successfully:', response);
                    toast.success('Successfully Subscribed!');
                    setName(''); // Clear the name field
                    setEmail(''); // Clear the email field
                    setPhone(''); // Clear the phone field
                },
                (error) => {
                    console.error('Failed to send email:', error);
                    toast.error("This didn't work.");
                }
            );
    };

    return (
        <>
            <div className='container mx-auto'>
                <div className='text-center'>
                  <SectionTitleSimple 
                  title="NewsLetter"
                  subtitle="Subscribe to our newsletter to stay updated with the latest news, special offers, and exclusive content. Join our community and be the first to know about upcoming events, promotions, and insightful articles delivered straight to your inbox"/>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 gap-6">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 lg:p-4">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                            Stay Informed with Our Newslette
                        </h2>
                       
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                                className="p-2 text-base lg:text-lg border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-transform transform"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="p-2 text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-transform transform hover:scale-105"
                            />
                            <input
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your phone number"
                                required
                                className="p-2 text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-transform transform hover:scale-105"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md w-full md:w-auto text-base lg:text-lg transform hover:scale-105"
                            >
                                Subscribe
                            </button>
                        </form>
                        {message && <p className="mt-4 text-green-600 text-base lg:text-lg">{message}</p>}
                    </div>

                    {/* Image on the right side with increased height */}
                    <div className="w-full md:w-1/2">
                        <Image
                            height={676}
                            width={1200}
                            src="https://i.postimg.cc/hP3y0Qqw/send.png"
                            alt="Send Email Icon"
                            className="w-full h-auto object-cover md:h-[400px] lg:h-[500px] transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmailSend;
