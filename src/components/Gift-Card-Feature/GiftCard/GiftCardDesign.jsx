import React from 'react';
import './GiftCard.css'
import { Button } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import Loading from '@/components/shared/LoadingSpiner/Loading';
import Link from 'next/link';


const GiftCardDesign = () => {
    const axiosPublic = useAxiosPublic()

    
    const { data: quality = {}, isLoading, refetch } = useQuery({
        queryKey: ['quality'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/getQuality');
            return data;
        },
        keepPreviousData: true,
    });
    console.log(quality)
    // console.log('try')
    if (isLoading) {
        return <Loading />
    }

    return (
        <>
       
        
        
  
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-2 lg:gap-4 mx-2 my-20 ' >
            
            {quality?.map((card) => (
                <div key={card.id} className="container ">

                    <div className="card w-full h-full bg-black rounded-2xl  "
                        style={{
                            backgroundImage: `url(${card.BG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Blurred background overlay */}


                        <div className="front">
                            <div className="card-top  ">
                                <p className="text-base text-white  font-bold">{card.price} $</p>
                            </div>
                            <p className='text-white bg-opacity-60     bg-black  backdrop-blur-md p-2 md:p-0 lg:p-2 rounded-lg shadow-lg  text-center transform transition-transform duration-300 hover:scale-105 text-xl md:text-base lg:text-xl font-semibold font-serif ' >{card.type}</p>
                        </div>
                        {/* Back */}
                        <div className="back">
                            {/* Benefits Section */}
                            <div className="card-top">
                                <p className="text-base text-white  font-bold">{card.price} $</p>
                            </div>
                            <div className="mt-4 ">

                                <ul className="text-white md:hidden lg:block text-sm space-y-1">
                                    {card.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-400 mr-2">•</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Validity Section */}
                            <div className="">
                                <p className="text-yellow-50 text-base">
                                    <span className="font-semibold ">Validity :</span> <span className='text-teal-200 font-bold '>
                                        {card.validity}
                                    </span>  Months
                                </p>
                            </div>
                            {/* button */}
                            <Link href={`/qualityPayment?id=${card?._id}`}>
                                <Button className='bg-[#0ea5e9] hover:bg-[#0e91e9d9] text-white py-1 md:p-0 lg:py-1 px-2 md:px-1 lg:px-2 rounded-2xl'>Purchase Now</Button>
                                </Link>

                        </div>


                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default GiftCardDesign;