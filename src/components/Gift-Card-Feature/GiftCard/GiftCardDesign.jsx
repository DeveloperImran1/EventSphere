import React from 'react';
import './GiftCard.css'
import { Button } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import Loading from '@/components/shared/LoadingSpiner/Loading';
import Link from 'next/link';


const GiftCardDesign = () => {
    const axiosPublic = useAxiosPublic()

    // const cards = [
    //     {
    //         "id": 1,
    //         "type": "Gold  Card",
    //         "price": 100,
    //         "BG": "https://i.ibb.co.com/FYQcZ77/pexels-michael-steinberg-95604-321452.jpg",

    //         "benefits": [
    //             "10% discount on all bookings",
    //             "Exclusive early access to events",
    //             "Free ticket cancellation"
    //         ],
    //         "validity": "1"
    //     },
    //     {
    //         "id": 2,
    //         "type": "Diamond Card",
    //         "BG": "https://i.ibb.co.com/BnQ2m0x/pexels-enginakyurt-1458867.jpg",
    //         "price": 200,
    //         "benefits": [
    //             "15% discount on all bookings",
    //             "Exclusive VIP access",
    //             "Free ticket upgrades"
    //         ],
    //         "validity": "3"
    //     },
    //     {
    //         "id": 3,
    //         "type": "Platinum  Card",
    //         "BG": "https://i.ibb.co.com/CwSgzfr/premium-photo-1678749105251-b15e8fd164bf.jpg",
    //         "price": 300,
    //         "benefits": [
    //             "20% discount on bookings",
    //             "Lifetime priority access",
    //             "VIP lounge access",

    //         ],
    //         "validity": "6"
    //     }
    // ]
    // Data fetching using react-query
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
<<<<<<< HEAD
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 md:gap-4 mx-2 my-20 ' >
            {quality?.map((card) => (
=======
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 md:gap-4 mx-2 ' >
            {cards.map((card) => (
>>>>>>> e2fb290861dea2b178f4398127902632af02c7de
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
                            <p className='text-white bg-opacity-60     bg-black  backdrop-blur-md p-2 rounded-lg shadow-lg  text-center transform transition-transform duration-300 hover:scale-105 text-xl font-semibold font-serif ' >{card.type}</p>
                        </div>
                        {/* Back */}
                        <div className="back">
                            {/* Benefits Section */}
                            <div className="card-top">
                                <p className="text-base text-white  font-bold">{card.price} $</p>
                            </div>
                            <div className="mt-4 ">

                                <ul className="text-white text-sm space-y-1">
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
<<<<<<< HEAD
                            <Link href={`/qualityPayment?id=${card?._id}`}>
                                <Button className='bg-[#0ea5e9] hover:bg-[#0e91e9d9] text-white py-1 px-2 rounded-2xl'>Purchase Now</Button>
                                </Link>

=======
                            <Button className='bg-[#0ea5e9] hover:bg-[#0e91e9d9] text-white py-1 px-2 rounded-2xl'>Purchase Now</Button>
                                 
>>>>>>> e2fb290861dea2b178f4398127902632af02c7de
                        </div>


                    </div>
                </div>
            ))}
        </div>
    );
};

export default GiftCardDesign;