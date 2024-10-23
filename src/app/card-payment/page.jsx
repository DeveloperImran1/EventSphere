"use client"
import Loading from '@/components/shared/LoadingSpiner/Loading';
import Navbar from '@/components/shared/Navbar';
import axios from 'axios';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const CardPayment = () => {
    const searchParams = useSearchParams();
    const transitionId = searchParams.get("transitionId");
    const [cardPaymentData, setCardPaymentData] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(transitionId)

    useEffect(() => {
        if (!transitionId) {
            console.log("Transaction ID is missing.");
            return;
        }

        const fetchCardPayment = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/card/${transitionId}`);
                setCardPaymentData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching payment data:", error);
                setLoading(false);
            }
        };

        fetchCardPayment();
    }, [transitionId]);
    console.log(cardPaymentData)

    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="relative w-full max-w-4xl aspect-[2.5/1] rounded-2xl overflow-hidden shadow-xl flex bg-gradient-to-br from-sky-400 via-sky-600 to-sky-800">
                    {/* Left Section with User Info */}
                    <div className="relative w-1/2 flex items-center justify-center p-6 bg-gradient-to-tl from-blue-500/60 to-sky-700/60">
                        {/* Avatar Circle with Starburst Animation */}
                        <div className="relative">
                            <div className="absolute inset-0 animate-spin-slow">
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-yellow-200 rounded-full"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: `rotate(${i * 45}deg) translateY(-3rem)`
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="w-24 h-24 rounded-full bg-white/90 relative overflow-hidden shadow-lg">
                                <Image
                                    src={cardPaymentData?.bookedUserPhoto}
                                    alt="User avatar"
                                    height={200}
                                    width={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-6 text-center">
                            <h2 className="text-white font-semibold text-lg">{cardPaymentData?.bookedUserName || "Guest User"}</h2>
                            <p className="text-white/80 text-sm">VIP Member since 2024</p>
                        </div>
                    </div>

                    {/* Right Section with Card Details */}
                    <div className="relative w-1/2 p-8 flex flex-col justify-between bg-gradient-to-br from-white/20 via-transparent to-white/10">
                        {/* Card Title and Description */}
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold text-white drop-shadow-lg" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }}>
                                Congratulations!
                            </h1>
                            <p className="text-lg text-white/80 uppercase tracking-wider">{cardPaymentData?.type || "Event Pass"}</p>
                            <span className="text-sm text-yellow-300 tracking-wide">Exclusive Access Granted</span>
                        </div>

                        {/* Card Features */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="bg-black/30 backdrop-blur-md rounded px-4 py-3 text-center">
                                <div className="text-white/60 text-xs">MEMBER ID</div>
                                <div className="text-white font-semibold">Y18</div>
                            </div>
                            <div className="bg-black/30 backdrop-blur-md rounded px-4 py-3 text-center">
                                <div className="text-white/60 text-xs">VALID UNTIL</div>
                                <div className="text-white font-semibold">12/2025</div>
                            </div>
                            <div className="bg-black/30 backdrop-blur-md rounded px-4 py-3 text-center">
                                <div className="text-white/60 text-xs">STATUS</div>
                                <div className="text-white font-semibold">ACTIVE</div>
                            </div>
                        </div>

                        {/* User Name Plate and Membership Badge */}
                        <div className="flex items-center justify-between mt-8">
                            <div className="bg-white/90 rounded-full px-6 py-2 text-sky-900 font-medium">
                                {cardPaymentData?.coupon || "Guest User"}
                            </div>
                            <div className="flex items-center space-x-2">
                                <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
                                <span className="text-white/90 text-sm tracking-wide">VIP MEMBER</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CardPayment;