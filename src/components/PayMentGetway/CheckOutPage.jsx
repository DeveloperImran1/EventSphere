import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { FaCreditCard, FaFingerprint, FaKey, FaLock } from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';
import "./checkOutForm.css"
// import { useRouter } from 'next/router';

const CheckOutForm = (props) => {
    const searchParams = useSearchParams();
    const { total, selectedSeatNames, selectedSeats } = props
    const id = searchParams.get("id");
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const session = useSession();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const router = useRouter()
    const [isProcessing, setIsProcessing] = useState(false);


    useEffect(() => {
        if (total > 0) {
            const createPaymentIntent = async () => {
                try {
                    const res = await axiosPublic.post('/payment', { price: total });
                    // console.log('Client Secret:', res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                } catch (err) {
                    console.error("Error creating payment intent:", err);
                }
            };
            createPaymentIntent();
        }
    }, [axiosPublic, total]);

    const { data: events = {}, isLoading, refetch } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/events/${id}`);
            return data;
        },
        keepPreviousData: true,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || isProcessing) {
            return;
        }
        setIsProcessing(true);

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        try {
            if (!clientSecret) {
                console.error("Client secret is missing");
                setError("Client secret is missing");
                setIsProcessing(false);
                return;
            }

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card
            });

            if (error) {
                console.log('Payment error', error);
                setError(error.message);
                setIsProcessing(false);
                return;
            }

            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
            });

            if (confirmError) {
                console.log('Confirm error', confirmError);
                setError(confirmError.message);
                setIsProcessing(false);
                return;
            }

            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                const payment = {
                    eventImage: events?.gallery?.[0],
                    eventName: events?.title,
                    eventId: events?._id,
                    eventOrganizerName: events?.organizer?.name,
                    eventOrganizerPhoto: events?.organizer?.photo,
                    eventOrganizerEmail: events?.organizer?.email,
                    bookedUserName: session?.data?.user?.name,
                    bookedUserPhoto: session?.data?.user?.image,
                    bookedUserEmail: session?.data?.user?.email,
                    amount: total,
                    selectSeatNames: selectedSeatNames,
                    totalTickets: selectedSeats,
                    eventDate: events?.dateTime,
                    totalTickets: selectedSeats,
                    refundRequested: "NotRequested",
                    transitionId: paymentIntent.id,
                };


                const res = await axiosPublic.post('/orders', payment);
                console.log('Payment saved', res.data);


                if (res.data?.success && res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Thank you for the Event Booking",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // Update the booked seats in the events collection
                    const updateResponse = await axiosPublic.patch(`/events/${id}`, {
                        eventId: id,
                        newBookedSeats: selectedSeatNames
                    });

                    if (updateResponse.data.success) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Booked seats updated successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else {
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: "Failed to update booked seats",
                            showConfirmButton: true,
                        });
                    }

                    elements.getElement(CardElement).clear();
                    refetch();

                    router.push(`/payment-qr-code?transitionId=${paymentIntent.id}`);
                } else {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Failed to save payment. Please try again.",
                        showConfirmButton: true,
                    });
                }
            }
        } catch (error) {
            console.error('Error creating payment intent:', error);
            setError(error.message);
        } finally {
            setIsProcessing(false);
        }
    };


    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6  rounded-lg  mb-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg lg:w-2/3 w-full"
            >
                <h2 className="text-4xl font-bold mb-6 text-blue-600">Please provide your info</h2>
                <div className="mb-4">
                    <p className="text-lg font-semibold">Total Seats: <span className="text-blue-500">{selectedSeats}</span></p>
                </div>
                <div className="mb-6">
                    <p className="text-lg font-semibold mb-2">Selected Seats:</p>
                    <ul className="flex flex-wrap gap-3 list-none font-semibold text-gray-700">
                        {selectedSeatNames && selectedSeatNames.length > 0 ? (
                            selectedSeatNames.map((seatName, index) => (
                                <li key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{seatName}</li>
                            ))
                        ) : (
                            <p className="text-red-500">No seats selected</p>
                        )}
                    </ul>
                </div>

                {/* Stripe Card Element */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Card Information</label>
                    <CardElement
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                            hidePostalCode: false,
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={!stripe || isProcessing}
                    className={`w-full button hover:bg-blue-500 transition duration-300 ${isProcessing ? "cursor-not-allowed opacity-50" : ""
                        }`}
                >
                    {isProcessing ? "Processing..." : `Pay ${total}$`}
                </button>

                {error && <div className="text-red-600 mt-4 text-center">{error}</div>}
                {success && <div className="text-green-600 mt-4 text-center">{success}</div>}
            </form>

            <div className="lg:w-1/3 w-full flex flex-col items-center relative">
                <div className="relative w-72 h-48 mb-6 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/5790/5790705.png"
                        alt="payment image"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white font-bold text-lg text-center px-4 mb-2">Secure Payment Ensures Protection</p>

                    </div>
                </div>
                <p className="font-bold text-center lg:text-start text-gray-700 mt-4">Secure payment ensures data protection, encryption, and fraud prevention</p>

                <div className="bg-blue-900 bg-opacity-50 w-full px-4 mt-6 rounded-lg py-2 flex flex-col items-center justify-center transition-opacity duration-300">
                    <div className=" icon-container flex">
                    <FaLock className=" icon wiggle" />
                    <FaShieldAlt className="icon animate-pulse" />
                        <FaCreditCard className="icon flip" />
                        <FaKey className="icon wiggle" />
                        <FaFingerprint className="icon flip" />
                    </div>
                </div>
            </div>


        </div>


    );
};

export default CheckOutForm;
