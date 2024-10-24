'use client'; // Required for client-side rendering in Next.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { toast, Toaster } from 'react-hot-toast';
const EmailSend = () => {
    const [email, setEmail] = useState('');
    const [message] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            user_email: email, // Ensure this matches your template's parameter name
        };

        console.log(templateParams); // Log template params for debugging

        // Use EmailJS to send the email
        emailjs
            .send('service_vrtjb7u','template_iczs5ah', templateParams, 'mG0AHrO3300phZ9Kb')
            .then(
                (response) => {
                    console.log('Email sent successfully:', response);
                    toast.success('Successfully Subscribe!');
                    setEmail(''); // Clear the input field after success
                },
                (error) => {
                    console.error('Failed to send email:', error);
                    toast.error("This didn't work.")
                }
            );
    };

    return (
        <>
            <div className='text-center'>
                <h2 className='mt-5 md:text-5xl text-3xl font-serif font-semibold text-black'>
                    Our Newsletter
                </h2>
            </div>
            <div className="flex flex-col my-8 md:flex-row items-center justify-between p-10 md:p-12 lg:p-16 max-w-7xl mx-auto">
                <div className="w-full md:w-2/3 mb-8 md:mb-0">
                    <h2 className="text-3xl lg:text-5xl font-serif font-medium mb-4 text-gray-900">
                        Stay Informed with Our Newsletter
                    </h2>
                    <p className="mb-6 text-lg font-serif lg:text-xl text-gray-700">
                        Subscribe to receive the latest updates and exclusive offers right in your inbox. Don't miss out!
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="p-4 text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-2/3 mb-4 md:mb-0 md:mr-4"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-medium px-6 py-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md w-full md:w-auto text-base lg:text-lg"
                        >
                            Subscribe
                        </button>
                    </form>
                    {message && <p className="mt-4 text-green-600 text-base lg:text-lg">{message}</p>}
                </div>

                {/* Image on the right side with increased height */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://i.postimg.cc/hP3y0Qqw/send.png"
                        alt="Send Email Icon"
                        className="w-full h-auto object-cover md:h-[400px] lg:h-[500px]" 
                    />
                </div>
            </div>
        </>
    );
};

export default EmailSend;
