import SectionTitle from '@/components/shared/SectionTitle';
import React from 'react';

const EventLimeLights = () => {
    return (
        <div className='container w-11/12 mx-auto mb-20'>
            <SectionTitle
                subTitle="The Secret To Sold Out Events"
                title="Seamless Registration And Ticketing Systems"
            >
            </SectionTitle>
            <div className='flex lg:flex-row-reverse flex-col  gap-12 '>
                <div className='flex-1'>
                    <div>
                        <h3 className='font-bold  mb-2'>Registration</h3>
                        <p className='mb-10'>Create an account to access exclusive features. Fill out the registration form with your details and join us today!</p>
                    </div>
                    <div>
                        <h3 className='font-bold  mb-2'>Check-Out-Form</h3>
                        <p className='mb-10'>Complete your purchase by filling out the checkout form with your shipping and payment details. Secure and fast processing!!</p>
                    </div>
                    <div>
                        <h3 className='font-bold  mb-2'>Ticketing</h3>
                        <p className='mb-10'>Book your tickets easily for events. Select your preferred options, fill in the details, and enjoy hassle-free access!</p>
                    </div>
                    <div>
                        <h3 className='font-bold  mb-2'>Widgets</h3>
                        <p className='mb-10'>Enhance your site with customizable widgets. Display real-time data, interactive elements, and essential features for a better user experience!</p>
                    </div>


                </div>
                <div className='flex-1'>
                    <img src="https://img.freepik.com/premium-vector/newest-smartphone-with-blue-background-mock-up-email_628973-80.jpg?w=740" alt="register" className='object-cover rounded-2xl' />
                </div>
            </div>
        </div>
    );
};

export default EventLimeLights;