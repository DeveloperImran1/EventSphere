"use client"
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import QRCode from 'react-qr-code';
import Loading from '../shared/LoadingSpiner/Loading';
import Image from 'next/image';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar } from 'react-icons/fa6';

const PaymentQRCodePage = () => {
  const searchParams = useSearchParams();
  const transitionId = searchParams.get("transitionId");
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const ticketRef = useRef();



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

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success('Feedback successfully submitted!')

    // Clear the form
    setFeedback('');
  };

  const handleDownload = () => {
    if (!ticketRef.current) {
      console.log("Ticket reference not found.");
      return;
    }
    toPng(ticketRef.current)
      .then((dataUrl) => {
        download(dataUrl, 'ticket.png'); // Download as ticket.png
      })
      .catch((error) => {
        console.error("Error generating ticket image:", error);
      });
  };
  // console.log(ticketRef)





  const dataforqr = {
    transitionId: paymentData?.transitionId || 'N/A',
    amount: paymentData?.amount || '0',
    date: paymentData?.eventDate?.slice(0, 10) || 'Unknown Date',
    eventName: paymentData?.eventName || 'Unknown Event',
    bookedUserName: paymentData?.bookedUserName || 'Anonymous',
    totalSeats: paymentData?.totalTickets || '0',
    seatNumbers: paymentData?.selectSeatNames || ['N/A'],
  };
  const qrData = JSON.stringify(dataforqr);


  if (loading) {
    return <Loading />;
  }

  if (!paymentData) {
    return <p>No payment data found.</p>;
  }

  return (
    <div className='container mx-auto '>
      <div ref={ticketRef} className=' mt-16 mb-16 shadow-xl p-2 lg:p-10 bg-[#E3EAFF] rounded-2xl'>
        <div className="payment-info flex flex-col lg:flex-row justify-between mr-2 lg:mr-5">
          <div className='w-96'>
            {/* <h2>Payment Successful</h2> */}

            <Image
              src={paymentData.eventImage}
              alt='event-Image'
              height={150}
              width={370}
              className='h-[150px] w-[300px] rounded-lg mb-5 rounded-tl-full rounded-br-full' />

            <p className='text-xl lg:text-3xl  font-bold ml-2 lg:ml-5 mb-2 text-wrap font-mono'>{paymentData.eventName}</p>
            <p className='ml-5'>Booked by: {paymentData.bookedUserName}</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-3xl lg:text-4xl font-bold lg:font-bold text-blue-500 mb-4 font-mono'>Event Tickets</h1>
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
            <QRCode
              // value={qrData}
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              value={`https://event-sphere-bice.vercel.app/payment-qr-code?transitionId=${paymentData.transitionId}`}
              className='mb-3 text-center m-2 mx-auto'

            />
            <p>{paymentData.transitionId} </p>
          </div>
        </div>
        <div className='text-center'>
          <button onClick={handleDownload} className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-lg text-center">
            Download Ticket
          </button>
        </div>
      </div>

      {/* Feedback Section */}
      <div className='mb-16 shadow-xl rounded-xl p-4 lg:p-6 2xl:p-10 bg-gray-50'>
      <div className='max-w-2xl mx-auto my-10'>
        <h2 className="text-center font-bold 2xl:font-black font-mono text-3xl lg:text-5xl 2xl:text-7xl text-blue-500 mb-4">User Feedback</h2>
        <p className="text-center">Thank you for attending our event! Please share your valuable feedback about your experience to help us improve and deliver even better events in the future.</p>
      </div>
      <div className='feedback-section flex flex-col lg:flex-row justify-between'>
        <div className='flex-1'>
          <form onSubmit={handleFeedbackSubmit} className='flex flex-col items-center'>
            <div className="flex justify-center my-5">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={30}
                  className={`cursor-pointer ${star <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(rating)}
                />
              ))}
            </div>
            <textarea
              className='w-full lg:w-2/3 p-4 border-2 rounded-lg my-5'
              placeholder='Write your feedback here...'
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
            <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'>Submit Feedback</button>
          </form>
        </div>
        <ToastContainer />
        <div className='flex-1 flex justify-center items-center'>
          <Image
            src="https://img.freepik.com/free-vector/flat-design-feedback-concept_23-2148944236.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721520000&semt=ais_user"
            height={300}
            width={300}
            alt="feedback image"
            className='h-72 w-96 rounded-xl shadow-lg'
          />
        </div>
      </div>
    </div>

    </div>
  );
};

export default PaymentQRCodePage;
