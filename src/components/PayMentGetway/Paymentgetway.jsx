'use client';
import { useState, useEffect } from 'react';
import { CreditCard } from 'lucide-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import CheckOutForm from './CheckOutPage';

export default function PaymentPage() {
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
        <div className="flex justify-center items-center min-h-[90vh] bg-gradient-to-br from-blue-200 to-purple-200">
            <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-4xl w-full transition-all duration-300 ease-in-out transform hover:scale-x-105 h-[95vh]">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <div className="bg-blue-600 text-white p-2 rounded-full mr-3 animate-pulse">
                            <CreditCard size={24} />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            AceCoinPay
                        </span>
                    </div>
                    <div className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center">
                        <span className="mr-2">🕒</span>
                        {formatTime(timeLeft)}
                    </div>
                </div>

                <div className="flex gap-8 flex-col md:flex-row">
                    <div className="flex-grow">
                        {/* Stripe Payment Form */}
                        <Elements stripe={stripePromise}>
                            <CheckOutForm />
                        </Elements>
                    </div>

                    <div className="relative">
                        <Image src="/path/to/card-image.jpg" alt="Credit Card" width={400} height={300} className="rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
