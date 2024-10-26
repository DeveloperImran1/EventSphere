import QrCodeGen from '@/components/qrCode/QrCodeGen';
import React from 'react';

export const metadata = {
    title: "Ticket page",
    description: "ticket page,Smart Event Management and Booking Platform",
    keywords: ["ticket","online", "ticket", "selling", "system", "event", "management"]
};

const PaymentQrCodeGen = () => {
    return (
        <div className='mt-10'>
            <QrCodeGen></QrCodeGen>
        </div>
    );
};

export default PaymentQrCodeGen;