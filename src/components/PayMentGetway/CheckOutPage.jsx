import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

const CheckOutForm = ({ total, selectedSeatNames }) => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const axiosPublic = useAxiosPublic()
    const [event, setEvent] = useState(null);
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
    console.log(session)
    console.log(selectedSeatNames)

    useEffect(() => {
        if (total > 0) {
            axiosPublic.post('/create-payment-intent', { total })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosPublic, total])

    // Fetch event data from API
    useEffect(() => {
        const fetchEventsData = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/events/${id}`);
                setEvent(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching event data:", error);
                setLoading(false);
            }
        };

        fetchEventsData();
    }, [id]);
    console.log(event)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }


        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: session?.data?.email || 'anonymous',
                    name: session?.data?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: session?.data?.email,
                    price: total,
                    transactionId: paymentIntent.id,
                    selectedSeatNames,
                    // date: new Date(), // utc date convert. use moment js to 
                    // cartIds: cart.map(item => item._id),
                    // menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosPublic.post('/orders', payment);
                console.log('payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate('/dashboard/paymentHistory')
                }

            }
        }

    }


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
                    }}
                />
            </div>

            <button
                type="submit"
                disabled={!stripe}
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition duration-300"
            >
                Pay {total}$
            </button>
  
            {error && <div className="text-red-600 mt-2">{error}</div>}
            {success && <div className="text-green-600 mt-2">{success}</div>}
        </form>
    );
};

export default CheckOutForm;
