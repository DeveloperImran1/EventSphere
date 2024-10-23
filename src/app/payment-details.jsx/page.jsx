"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import Loading from '@/components/shared/LoadingSpinner/Loading';

const PaymentDetailsPage = () => {
  const searchParams = useSearchParams();
  const transitionId = searchParams.get("transitionId");
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!transitionId) {
      console.log("Transaction ID is missing.");
      return;
    }

    const fetchPaymentData = async () => {
      try {
        const response = await axios.get(`https://event-sphare-server.vercel.app/orders/${transitionId}`);
        setPaymentData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching payment data:", error);
        setLoading(false);
      }
    };

    fetchPaymentData();
  }, [transitionId]);

  if (loading) {
    return <Loading />;
  }

  if (!paymentData) {
    return <p>No payment data found.</p>;
  }

  return (
    <div className="payment-details-container">
      <h2 className='text-3xl font-bold mb-4'>Payment Details for {paymentData.eventName}</h2>
      <p><strong>Booked by:</strong> {paymentData.bookedUserName}</p>
      <p><strong>Total Paid:</strong> {paymentData.amount}$</p>
      <p><strong>Seats:</strong> {paymentData.selectSeatNames.join(', ')}</p>
      <p><strong>Date:</strong> {paymentData.eventDate?.slice(0, 10)} at {paymentData.eventDate?.slice(11, 16)} AM</p>
      <p><strong>Transaction ID:</strong> {paymentData.transitionId}</p>
    
    </div>
  );
};

export default PaymentDetailsPage;
