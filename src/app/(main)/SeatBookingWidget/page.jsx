import EnhancedPaymentGateway from '@/components/PayMentGetway/Paymentgetway';
import SeatBookingWidget from '@/components/Seat-booking-widgets/SeatBookingWidget';
import React from 'react';

const SeatBooking = () => {
    return (
        <div  className="py-10  bg-gradient-to-br from-blue-200 to-purple-200 ">
        
        
           <SeatBookingWidget></SeatBookingWidget>

            <EnhancedPaymentGateway></EnhancedPaymentGateway>
             


        </div>
    );
};

export default SeatBooking;