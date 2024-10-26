"use client";
import Loading from "@/components/shared/LoadingSpiner/Loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcAdvertising } from "react-icons/fc";
import { motion } from "framer-motion";
import EnhancedPaymentGateway from "@/components/PayMentGetway/Paymentgetway";
import { TbXboxX } from "react-icons/tb";
import Swal from "sweetalert2";

const ROWS = 10;
const SEATS_PER_ROW = 12;

// SeatButton Component for rendering seat buttons
function SeatButton({ seat, onClick, event }) {
  const res = event?.bookedSeats?.includes(seat?.number)
  //  console.log("bokin naki chekc", res)
  const bgColor = res ? "bg-gray-300" : seat?.status === "selected" ? "bg-orange-200" : " bg-green-500";
  // console.log(seat)

  return (
    <motion.button
      className={`w-12 h-12 m-1 rounded-md text-black ${bgColor} disabled:opacity-50 flex items-center justify-center text-xs`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      disabled={res}
    >
      {seat.number}
    </motion.button>
  );
}

const Payment = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedSeatNames, setSelectedSeatNames] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState(0);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalTotal, setFinalTotal] = useState()
  console.log(discount)


  const propsObj = { total, selectedSeats, selectedSeatNames }
  console.log(propsObj)
  // Fetch event data from API
  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await axios.get(`https://event-sphare-server.vercel.app/events/${id}`);
        setEvent(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event data:", error);
        setLoading(false);
      }
    };

    fetchEventsData();
  }, [id]);



  const handleTicketQuantityChange = (e) => {
    setTicketQuantity(parseInt(e.target.value));
  };

  // Initializing seats
  const [seats, setSeats] = useState(() => {
    return Array(ROWS)
      .fill(null)
      .map((_, rowIndex) =>
        Array(SEATS_PER_ROW)
          .fill(null)
          .map((_, seatIndex) => ({
            status: "available",
            number: `${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`,
          }))
      );
  });



  // Alert for bulk purchase discount
  useEffect(() => {
    Swal.fire({
      title: "🎉🎁 Special Offer!",
      text: "Book 5 or more seats and get a 10% discount on each seat!",
      icon: "warning",
      confirmButtonText: "Got it!",
    });
  }, []);

  // Handle seat selection and deselection 
  const handleSeatClick = (row, seat) => {
    const newSeats = [...seats];
    const seatName = newSeats[row][seat].number;

    if (newSeats[row][seat].status === "available") {
      newSeats[row][seat].status = "selected";
      setSelectedSeats(selectedSeats + 1);
      setTotal(total + event.price);
      setSelectedSeatNames([...selectedSeatNames, seatName]); // Add selected seat name

      Swal.fire({
        title: "Seat Selected",
        text: `You've selected seat ${seatName}`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } else if (newSeats[row][seat].status === "selected") {
      newSeats[row][seat].status = "available";
      setSelectedSeats(selectedSeats - 1);
      setTotal(total - event.price);
      setSelectedSeatNames(selectedSeatNames.filter(name => name !== seatName)); // Remove deselected seat name

      Swal.fire({
        title: "Seat Deselected",
        text: `You've deselected seat ${seatName}`,
        icon: "info",
        timer: 1500,
        showConfirmButton: false,
      });
    }
    setSeats(newSeats);
  };


  useEffect(() => {
    const calculateTotal = () => {
      let subtotal = total;
      let seatDiscount = 0;
      let appliedCouponDiscount = 0;

      // Apply seat-based discount
      if (selectedSeats >= 5) {
        seatDiscount = subtotal * 0.05; // 5% discount for 5 or more seats
        subtotal -= seatDiscount;
      }

      // Apply coupon code discount
      if (couponCode === 'DIAMOND15ES') {
        appliedCouponDiscount = subtotal * 0.15; // 15% discount
        subtotal -= appliedCouponDiscount;
      } else if (couponCode === 'GOLD10ES') {
        appliedCouponDiscount = subtotal * 0.10; // 10% discount
        subtotal -= appliedCouponDiscount;
      } else if (couponCode === 'PLATINUM20ES') {
        appliedCouponDiscount = subtotal * 0.20; // 20% discount
        subtotal -= appliedCouponDiscount;
      }

      // Update the discount states
      setDiscount(seatDiscount + appliedCouponDiscount);
      setCouponDiscount(appliedCouponDiscount);
      return subtotal;
    };

    const newTotal = calculateTotal();
    setFinalTotal(newTotal);
  }, [selectedSeats, total, couponCode]);




  console.log(discount)
  console.log(finalTotal)
  if (loading) {
    return <Loading />;
  }

  if (!event) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Event Not Found</h2>
        <p className="mt-2">We could not find the event you are looking for.</p>
      </div>
    );
  }

  const selectSeat = selectedSeatNames.map((seatName, index) => (
    <>{seatName}</>
  ))
  console.log(selectSeat)

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
                className={`grid gap-2 justify-center grid-cols-6 sm:grid-cols-6 lg:grid-cols-12`}
              >
                {row.map((seat, seatIndex) => (
                  <React.Fragment key={`${rowIndex}-${seatIndex}`}>
                    <div className="lg:mr-1">
                      <SeatButton
                        seat={seat}
                        event={event}
                        onClick={() => handleSeatClick(rowIndex, seatIndex)}
                        className={`p-2 ${rowIndex % 6 === 0 ? "text-sm md:text-base lg:text-lg" : ""}`}
                      />
                    </div>
                    {/* প্রতি ৪টি কলামের পর ফাঁকা স্থান যোগ করা হয়েছে */}
                    {/* {(seatIndex + 1) % 4 === 0 && seatIndex !== row.length - 1 && (
                      <div className="lg:w-6 sm:w-4 w-2"></div>
                    )} */}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>





        <div className="ml-4 flex-shrink-0 w-full md:w-64 mt-4 md:mt-0">
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-300 p-4 text-xl space-y-4">
            <div className="mb-2">
              <span className="font-bold">Event:</span> {event.title}
            </div>
            <div className="mb-2">
              <span className="font-bold">Date: </span>
              {event.dateTime.slice(0, 10) + " " + "Time:" + event.dateTime.slice(11, 16)} AM
            </div>


            <div className="bg-yellow-100 text-yellow-900 p-2 rounded-lg mb-2">
              <p className="mb-2">
                Total select seat: <span className="text-xl font-bold">{selectedSeats}</span>
              </p>
              <p className="mt-2  ">Selected Seats:</p>
              <ol type="1" className=" flex gap-4 flex-wrap">
                {selectedSeatNames.map((seatName, index) => (
                  <li key={index}>{seatName}</li>
                ))}
              </ol >

              {/* Coupon Code Input */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                />
              </div>

              {/* Calculation Display */}
              <div className="mt-4">
                <p className="mt-2">
                  Subtotal: <span className="ml-4">${total.toFixed(2)}</span>
                </p>
                {/* Seat Discount Display */}
                {selectedSeats >= 5 && (
                  <p className="mb-1">
                    Seat 5+ dis : <span className="ml-1">${(total * 0.05).toFixed(2)}</span>
                  </p>
                )}
                <p className="mb-1">
                  Coupon Dis: <span className="ml-1">${couponDiscount.toFixed(2)}</span>
                </p>
                <p className="mb-1">
                  Total Dis: <span className="ml-2">${discount.toFixed(2)}</span>
                </p>
                <hr className="my-2" />
                <p className="mt-1">
                  Total pay: <span className="font-bold text-xl ml-2">${finalTotal.toFixed(2)}</span>
                </p>
              </div>


              <Button
                onClick={() => setIsModalOpen(true)}
                disabled={selectedSeats === 0}
                className="w-full py-2 mt-4 bg-blue-700"
              >
                Book Now
              </Button>

            </div>
          </div>
        </div>

        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <div className="absolute top-10 right-10 z-50">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-purple-600 text-white w-20"
                >
                  <TbXboxX className='text-2xl' />
                </Button>
              </div>
              <EnhancedPaymentGateway total={finalTotal} selectedSeatNames={selectedSeatNames}
                selectedSeats={selectedSeats} />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Payment;