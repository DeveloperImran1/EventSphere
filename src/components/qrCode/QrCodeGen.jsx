"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import QRCode from 'react-qr-code';
import Loading from '../shared/LoadingSpiner/Loading';
import Image from 'next/image';

const PaymentQRCodePage = () => {
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
  console.log(paymentData)

  if (loading) {
    return <Loading />;
  }

  if (!paymentData) {
    return <p>No payment data found.</p>;
  }

  return (
    <div className="payment-info flex w-11/12 mx-auto my-16 shadow-2xl justify-between p-10 bg-[#E3EAFF] rounded-2xl">
      <div className='w-96'>
        {/* <h2>Payment Successful</h2> */}

        <Image
          src={paymentData.eventImage}
          alt='event-Image'
          height={150}
          width={370}
          className='h-[150px] w-[300px] rounded-lg mb-5 rounded-tl-full rounded-br-full' />

        <p className='text-3xl  font-bold ml-5 mb-2 font-mono'>{paymentData.eventName}</p>
        <p className='ml-5'>Booked by: {paymentData.bookedUserName}</p>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold text-blue-500 mb-10 font-mono'>Event Tickets</h1>
        <table className='border-2 border-blue-800 border-collapse mb-5 bg-white font-mono' >
          <tr className='border-2 p-3'>
            <td className='border-2 p-2 border-blue-500 text-center'>Total Seats</td>
            <td className='border-2 p-2 border-blue-500 text-center'>{paymentData.totalTickets}</td>
          </tr>
          <tr>
            <td className='border-2 p-2 border-blue-500 text-center'>Seat Number</td>
            <td className='border-2 p-2 border-blue-500 text-center'>
              <ol className='flex gap-3 flex-wrap'>
                {paymentData?.selectSeatNames?.map((seatName, index) => (
                  <li key={index} className='list-none flex'>{seatName}</li>
                ))}
              </ol>
            </td>

          </tr>
          <tr>
            <td className='border-2 p-2 border-blue-500 text-center'>Total Paid</td>
            <td className='border-2 p-2 border-blue-500 text-center'>{paymentData.amount}$</td>
          </tr>
        </table>
        <div className="mb-2">
          <span className="font-bold">Date: </span>
          {paymentData.eventDate?.slice(0, 10) + " " + "Time:" + paymentData?.eventDate?.slice(11, 16)} AM
        </div>
      </div>
      <div>
        <QRCode value={paymentData.transitionId} className='mb-3 text-center m-2 mx-auto'/>
        <p>Transaction ID: {paymentData.transitionId}</p>
      </div>
    </div>
  );
};

export default PaymentQRCodePage;
