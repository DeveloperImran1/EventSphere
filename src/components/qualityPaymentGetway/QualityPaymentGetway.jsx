'use client';
import { useState, useEffect } from 'react';
import { CreditCard } from 'lucide-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import QualityCheckoutForm from './QualityCheckoutForm';

const QualityPaymentGetway = ({quality}) => {
    // console.log(quality)
    const [timeLeft, setTimeLeft] = useState(119); // 1:59 in seconds
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    return (
        <div className="min-h-[90vh] w-screen bg-gradient-to-br from-blue-200 to-purple-200">
        <div className="bg-white p-12 rounded-3xl shadow-2xl w-full h-[95vh] max-w-[75vw] mx-auto transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                    <div className="bg-blue-600 text-white p-2 rounded-full mr-3 animate-pulse">
                        <CreditCard size={24} />
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                       EventShare
                    </span>
                </div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center">
                    <span className="mr-2">🕒</span>
                    {formatTime(timeLeft)}
                </div>
            </div>

            <div className=" mb-10">
                <div className="flex-grow ">
                    {/* Stripe Payment Form */}
                    <Elements stripe={stripePromise}>
                        <QualityCheckoutForm
                           quality={quality}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    </div>
    );
};

export default QualityPaymentGetway;