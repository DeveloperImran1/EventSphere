import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        // Card validation can be added here
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setError(error.message);
            setSuccess(null);
        } else {
            setError(null);
            setSuccess('Payment successful! Payment Method ID: ' + paymentMethod.id);
            // Send paymentMethod.id to your server to complete the payment
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
            
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="cardNumber">Card Number</label>
                <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="1234 5678 9012 3456"
                    required
                />
            </div>

            <div className="flex justify-between mb-4">
                <div className="w-1/2 pr-2">
                    <label className="block text-sm font-medium mb-1" htmlFor="expiryMonth">Expiry Month</label>
                    <input
                        type="text"
                        id="expiryMonth"
                        value={expiryMonth}
                        onChange={(e) => setExpiryMonth(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="MM"
                        required
                    />
                </div>
                <div className="w-1/2 pl-2">
                    <label className="block text-sm font-medium mb-1" htmlFor="expiryYear">Expiry Year</label>
                    <input
                        type="text"
                        id="expiryYear"
                        value={expiryYear}
                        onChange={(e) => setExpiryYear(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="YY"
                        required
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="cvv">CVV</label>
                <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="123"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={!stripe}
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition duration-300"
            >
                Pay
            </button>

            {error && <div className="text-red-600 mt-2">{error}</div>}
            {success && <div className="text-green-600 mt-2">{success}</div>}
        </form>
    );
};

export default CheckOutForm;
