'use client'
import { useState, useEffect } from 'react'
import { CreditCard, Wifi, Edit2, Grid, CheckCircle, ArrowLeft, Apple } from 'lucide-react'
import Image from 'next/image'

export default function EnhancedPaymentGateway() {
    const [timeLeft, setTimeLeft] = useState(119) // 1:59 in seconds
    const [cardNumber, setCardNumber] = useState('2412 - 7512 - 3412 - 3456')
    const [isPaymentComplete, setIsPaymentComplete] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    const handlePayNow = () => {
        setIsPaymentComplete(true)
        setTimeout(() => setIsPaymentComplete(false), 3000)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-200">
            <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-4xl w-full transition-all duration-300 ease-in-out transform hover:scale-105">
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
                        <div className="mb-6 relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter card number"
                                />
                                <button className="absolute right-2 top-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                                    <Edit2 size={20} />
                                </button>
                            </div>
                            <div className="absolute -top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                Recommended
                            </div>
                        </div>

                        <div className="flex gap-4 mb-6">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">CVV Number</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="***"
                                    />
                                    <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 transition-colors duration-300">
                                        <Grid size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="09"
                                    />
                                    <input
                                        type="text"
                                        className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="22"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your password"
                                />
                                <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 transition-colors duration-300">
                                    <Grid size={20} />
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handlePayNow}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-md font-medium transition-all duration-300 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {isPaymentComplete ? (
                                <span className="flex items-center justify-center">
                                    <CheckCircle size={20} className="mr-2" />
                                    Payment Complete!
                                </span>
                            ) : (
                                'Pay Now'
                            )}
                        </button>
                        <button className="mt-10 text-blue-600 flex items-center hover:text-blue-800 transition-colors duration-300">
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Shopping
                        </button>
                    </div>

                    <div className="w-full md:w-72">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-6 rounded-xl mb-6 text-white shadow-lg transform transition-all duration-300 hover:scale-105">
                            <div className="flex justify-between items-center mb-4">
                                <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded"></div>
                                <Wifi className="text-white" size={24} />
                            </div>
                            <div className="text-lg font-medium mb-2">Jonathan Michael</div>
                            <div className="text-gray-200 mb-4">•••• 3456</div>
                            <div className="flex items-center justify-between text-sm">
                                <span>09/22</span>

                                <Image
                                    src="https://i.postimg.cc/SsS5kYc8/card-15398050.png"
                                    alt="Mastercard logo"
                                    width={40} // Specify width
                                    height={24} // Specify height
                                    className="w-16 h-14" // Optional, you can adjust the height with CSS if needed
                                />
                            </div>
                        </div>
                        <div className="space-y-3 bg-gray-50 p-4 rounded-xl">
                            <div className="flex justify-between items-center">
                                <span className="font-bold ">Event :</span>
                                <span className="font-medium flex items-center">Concert </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold ">Seat Number :</span>
                                <span className="font-medium">B11 & B 12 </span>
                            </div>
                           
    
                            <div className="flex justify-between">
                                <span className="font-bold ">Event Date :</span>
                                <span className="font-medium">Oct 15, 24</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold ">Venue :</span>
                                <span className="font-medium">City Auditorium : </span>
                            </div>
                        </div>


                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-gray-600">You have to Pay</span>
                                    <div className="text-2xl font-bold">
                                        50<span className="text-sm font-normal">.99 USD</span>
                                    </div>
                                </div>
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <CreditCard size={24} className="text-blue-600" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}