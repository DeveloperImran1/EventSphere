
'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { FcAdvertising } from 'react-icons/fc';
import EnhancedPaymentGateway from '../PayMentGetway/Paymentgetway'; // Import the Payment Gateway Component
import { TbXboxX } from 'react-icons/tb';

const ROWS = 10;
const SEATS_PER_ROW = 12;
const VIP_ROWS = 2;

const SEAT_PRICES = {
  normal: 10,
  vip: 20,
};

function SeatButton({ seat, onClick }) {
  const bgColor =
    seat.status === 'available'
      ? seat.category === 'vip'
        ? 'bg-yellow-500'
        : 'bg-gray-300'
      : seat.status === 'sold'
        ? 'bg-red-500'
        : 'bg-green-500';

  return (
    <motion.button
      className={`w-12 h-12 m-1 rounded-md text-black ${bgColor} disabled:opacity-50 flex items-center justify-center text-xs`}
      onClick={onClick}
      disabled={seat.status === 'sold'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {seat.number}
    </motion.button>
  );
}

export default function SeatBookingWidget() {
  
  const [seats, setSeats] = useState(() => {
    const initialSeats = Array(ROWS)
      .fill(null)
      .map((_, rowIndex) =>
        Array(SEATS_PER_ROW)
          .fill(null)
          .map((_, seatIndex) => ({
            status: 'available',
            category: rowIndex < VIP_ROWS ? 'vip' : 'normal',
            number: `${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`,
          }))
      );

    // Pre-book 2-3 random seats
    const numPreBooked = Math.floor(Math.random() * 5) + 5;
    for (let i = 0; i < numPreBooked; i++) {
      const row = Math.floor(Math.random() * ROWS);
      const seat = Math.floor(Math.random() * SEATS_PER_ROW);
      initialSeats[row][seat].status = 'sold';
    }
    return initialSeats;
  });

  const [selectedSeats, setSelectedSeats] = useState(0);
  const [total, setTotal] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Modal open/close

  useEffect(() => {
    Swal.fire({
      title: '🎉🎁 Special Offer!',
      text: 'Book 5 or more seats and get a 15% discount on each seat!',
      icon: 'warning',
      confirmButtonText: 'Got it!',
    });
  }, []);

  const handleSeatClick = (row, seat) => {
    const newSeats = [...seats];
    if (newSeats[row][seat].status === 'available') {
      newSeats[row][seat].status = 'selected';
      setSelectedSeats(selectedSeats + 1);
      setTotal(total + SEAT_PRICES[newSeats[row][seat].category]);
      Swal.fire({
        title: 'Seat Selected',
        text: `You've selected seat ${newSeats[row][seat].number}`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    } else if (newSeats[row][seat].status === 'selected') {
      newSeats[row][seat].status = 'available';
      setSelectedSeats(selectedSeats - 1);
      setTotal(total - SEAT_PRICES[newSeats[row][seat].category]);
      Swal.fire({
        title: 'Seat Deselected',
        text: `You've deselected seat ${newSeats[row][seat].number}`,
        icon: 'info',
        timer: 1500,
        showConfirmButton: false,
      });
    }
    setSeats(newSeats);
  };

  const applyCoupon = () => {
    if (couponCode === 'DISCOUNT20') {
      setDiscount(20);
      Swal.fire({
        title: 'Coupon Applied',
        text: 'You got a $20 discount!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      setDiscount(0);
      Swal.fire({
        title: 'Invalid Coupon',
        text: 'The coupon code is not valid.',
        icon: 'error',
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const calculateTotal = () => {
    let subtotal = total;
    if (selectedSeats >= 5) {
      subtotal *= 0.85; // 15% discount
    }
    return Math.max(0, subtotal - discount);
  };

  const finalTotal = calculateTotal();

  return (
    <div className="p-10 max-w-6xl min-h-screen mx-auto bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-lg text-white">
      <h1 className="text-3xl border-b-2 py-4 font-serif font-bold mb-4 text-center">
        Multiplex Theatre Showing Screen 1
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="bg-yellow-500 text-black text-center py-2 rounded-t-lg font-bold">
            SCREEN
          </div>
          <div className="bg-opacity-50 bg-black py-10 rounded-b-lg p-4">
            {seats.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex justify-center ${rowIndex === 2 ? 'mt-6' : ''}`} // 2nd row por gap
              >
                {row.map((seat, seatIndex) => (
                  <React.Fragment key={`${rowIndex}-${seatIndex}`}>
                    <div className="lg:mr-1">
                      <SeatButton
                        seat={seat}
                        onClick={() => handleSeatClick(rowIndex, seatIndex)}
                      />
                    </div>
                    {(seatIndex + 1) % 4 === 0 &&
                      seatIndex !== row.length - 1 && (
                        <div className="w-4"></div>
                      )}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="ml-4 flex-shrink-0 w-full md:w-64 mt-4 md:mt-0">
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-300 p-4 text-xl space-y-4">
            <div className="mb-2">
              <span className="font-bold">Movie:</span> Gingerclown
            </div>
            <div className="mb-2">
              <span className="font-bold">Time:</span> Nov 3, 21:00
            </div>
            <div className="mb-2">
              <span className="font-bold">Tickets:</span> {selectedSeats}
            </div>
            <div className="mb-2">
              <span className="font-bold">Subtotal:</span> ${total}
            </div>
            {selectedSeats >= 5 && (
              <div className="mb-2 text-purple-800 flex font-mono">
                <FcAdvertising className="text-3xl" /> 15% Bulk Discount
                Applied!
              </div>
            )}
            <div className="mb-2">
              <span className="font-bold">Coupon Discount:</span> ${discount}
            </div>
            <div className="mb-2">
              <span className="font-bold">Final Total:</span> ${finalTotal}
            </div>
            <div className="mb-2">
              <Input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="mb-2 text-black"
              />
              <Button onClick={applyCoupon} className="w-full mb-2">
                Apply Coupon
              </Button>
              <Button
                onClick={() => setIsModalOpen(true)} // Open Modal on click
                className="w-full button text-lg font-serif uppercase my-4"
                disabled={selectedSeats === 0}
              >
                Book Now
              </Button>
            </div>
          </div>

          <div className="mt-4 flex justify-between bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-lg text-white text-center transform transition-transform duration-300 hover:scale-105">
            <div>
              <span className="inline-block w-4 h-4 bg-white mr-2"></span>{' '}
              Available
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-red-500 mr-2"></span>{' '}
              Sold
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>{' '}
              Selected
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-yellow-500 mr-2"></span>{' '}
              VIP
            </div>
          </div>
        </div>
      </div>
              
{isModalOpen && (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
    exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
    transition={{ duration: 0.5 }}
    onClick={() => setIsModalOpen(false)} 
  >
    <motion.div
      className="bg-white p-8 rounded-lg text-center shadow-xl w-full max-w-4xl relative"
      onClick={(e) => e.stopPropagation()}  
    >
      {/* Payment Gateway */}
      <EnhancedPaymentGateway />

      {/* Close Button */}
      <div className="absolute top-14 right-0">
        <Button
          onClick={() => setIsModalOpen(false)}
          className="bg-purple-600 text-white w-20"
        >
         <TbXboxX className='text-2xl' />
        </Button>
      </div>
    </motion.div>
  </motion.div>
)}

  
    </div>
  );
}
