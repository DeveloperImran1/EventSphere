import EnhancedPaymentGateway from '@/components/PayMentGetway/Paymentgetway';
import SeatBookingWidget from '@/components/Seat-booking-widgets/SeatBookingWidget';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SeatBooking = () => {
    const searchParams=useSearchParams()
    const id=searchParams.get("id")
    console.log(id)
    return (
        <div  className="py-10  bg-gradient-to-br from-blue-200 to-purple-200 ">
        
        
           {/* <SeatBookingWidget></SeatBookingWidget> */}

       


        </div>
    );
};

export default SeatBooking;