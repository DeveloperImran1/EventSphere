'use client'; // Required for client-side rendering in Next.js

import React, { useState } from 'react';

const EmailSend = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Subscription successful!');
                setEmail(''); // Clear the input field after success
            } else {
                setMessage(`Subscription failed: ${data.error}`);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex flex-col my-8 md:flex-row items-center justify-between p-10 md:p-12 lg:p-16 rounded-xl border border-gray-200 shadow-md max-w-7xl mx-auto">
            <div className="w-full md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">Stay Informed with Our Newsletter</h2>
                <p className="mb-6 text-lg lg:text-xl text-gray-700">
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

            {/* Image on the right side */}
            <div className="w-full md:w-1/3">
                <img
                    src="https://i.postimg.cc/28jXSJbY/finger-touch-mobile-check-email-260nw-1389690929.jpg"
                    alt="Send Email Icon"
                    className="w-full h-auto object-cover rounded-xl shadow-md"
                />
            </div>
        </div>
    );
};

export default EmailSend;
