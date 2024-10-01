import EnhancedPaymentGateway from '@/components/PayMentGetway/Paymentgetway';
import SeatBookingWidget from '@/components/Seat-booking-widgets/SeatBookingWidget';
import React from 'react';

const PaymentGateway = () => {
    return (
        <div  className="space-y-10 mt-14">
            <SeatBookingWidget></SeatBookingWidget>

            <EnhancedPaymentGateway></EnhancedPaymentGateway>
             


        </div>
    );
};

export default PaymentGateway;