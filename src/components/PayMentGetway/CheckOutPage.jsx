import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
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
    // console.log(events)

    // const handleBuyTicket = () => {
    //     router.push(`/payment-qr-code?transitionId=${transitionId}`);
    // };

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
                    refundRequested: "Requested",
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
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
            <p className="mt-4">Selected Seats:</p>
            <ol type="1" className="flex gap-4 flex-wrap">
                {selectedSeatNames?.map((seatName, index) => (
                    <li key={index}>{seatName}</li>
                ))}
            </ol>

            {/* Stripe Card Element */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Card Information</label>
                <CardElement
                    className="w-full p-2 border border-gray-300 rounded-lg"
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
                className={`w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition duration-300 ${isProcessing ? "cursor-not-allowed opacity-50" : ""
                    }`}
            >
                {isProcessing ? "Processing..." : `Pay ${total}$`}
            </button>

            {error && <div className="text-red-600 mt-2">{error}</div>}
            {success && <div className="text-green-600 mt-2">{success}</div>}
        </form>
    );
};

export default CheckOutForm;
