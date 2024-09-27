'use client'

import { useState } from 'react';
import QRCode from "react-qr-code";

function QrCodeGen() {
  const [purchaseInfo, setPurchaseInfo] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleGenerateQR = () => {
    const info = {
      orderId: '12345',
      EventName: 'Global Tech Summit 2024',
      Eventype: 'Onsite',
      Eventvenue: 'venue',
      CategoryName: 'Technology',
      organizer: 'James Jack',
      location: 'UK',
      date: '2024-09-25',
      amount: '$100',
    };

    setPurchaseInfo(info);
    setShowQRCode(true);
  };


  return (
    <div className="container mx-auto p-4 flex justify-center items-center flex-col gap-5 ">
      <button onClick={handleGenerateQR} className='button'>Generate Your QR Code</button>

      {showQRCode && purchaseInfo && (
        <div className=" flex gap-10">
          <div>
            <h2>Your Purchase Info:</h2>
            <p>Order ID: {purchaseInfo.orderId}</p>
            <p>Event Name: {purchaseInfo.EventName}</p>
            <p>Event Type: {purchaseInfo.Eventype}</p> 
            <p>Event Venue: {purchaseInfo.Eventvenue}</p>
            <p>Event Organizer: {purchaseInfo.organizer}</p>
            <p>Event Category Name: {purchaseInfo.CategoryName}</p>
            <p>Event location: {purchaseInfo. location}</p>
            <p>Date: {purchaseInfo.date}</p>
            <p>Amount: {purchaseInfo.amount}</p>

          </div>
          <div className="">
            <QRCode value={JSON.stringify(purchaseInfo)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default QrCodeGen;
