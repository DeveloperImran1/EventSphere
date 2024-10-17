"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import QRCode from 'react-qr-code';

const PaymentQRCodePage = () => {
  const searchParams = useSearchParams();
  const transitionId = searchParams.get("transitionId");
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!transitionId) {
      console.log("Transaction ID is missing.");
      return;
    }

    const fetchPaymentData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/orders/${transitionId}`);
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
    return <p>Loading...</p>;
  }

  if (!paymentData) {
    return <p>No payment data found.</p>;
  }

  return (
    <div className="payment-info">
      <h2>Payment Successful</h2>
      <p>Event: {paymentData.eventName}</p>
      <p>Booked by: {paymentData.bookedUserName}</p>
      <p>Amount Paid: ${paymentData.amount}</p>
      <p>Transaction ID: {paymentData.transitionId}</p>
      <QRCode value={paymentData.transitionId} />
    </div>
  );
};

export default PaymentQRCodePage;
