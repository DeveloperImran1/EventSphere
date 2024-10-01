"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import '@/components/testimonials/Testimonials';
import SectionTitle from '../shared/SectionTitle';

const Testimonials = () => {
    const reviews = [
        {
            "user_name": "Anisul Islam",
            "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FoxQ9yfiiMcpZMlwK-YBOPGxLwDfhzQT16F-dnTbqG1utnAlYpd04h_c9A0OT8AfxO4&usqp=CAU",
            "country": "UK",
            "rating": 5,
            "comment": "Excellent interface, very intuitive and clean. Great job overall!"
        },
        {
            "user_name": "Jhanker Mahbub",
            "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnnjSFBLlcsDN724trHN3eB5eEzHfDU_C2A&s",
            "country": "Canada",
            "rating": 4,
            "comment": "Easy to use, but adding a dark mode would improve the experience."
        },
        {
            "user_name": "Sumaiya Shujiti",
            "profile_pic": "https://ashisheditz.com/wp-content/uploads/2023/11/smart-cool-attitude-girl-dp-1.jpg",
            "country": "Germany",
            "rating": 5,
            "comment": "Works well for submission and review. Adding a calendar view would help."
        },
        {
            "user_name": "Bala Hatun",
            "profile_pic": "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "country": "USA",
            "rating": 3,
            "comment": "Simplicity and effectiveness make this tool excellent for managing assignments."
        }
    ]

    return (
        <div className=" container mx-auto p-4">
            <div>
                <SectionTitle
                subTitle="Users Reviews"
                    title="Testimonials"
                    description="Read our testimonials to hear from satisfied customers. Their experiences highlight our commitment to quality and service, showcasing how we've positively impacted their journeys. Join our community of happy clients!"
                >

                </SectionTitle>

            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>

                        <div className="review-card p-6 pt-20 bg-[#013730] opacity-80  rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 lg:relative">
                            

                            <img src={review.profile_pic} alt={review.user_name} className="w-20 h-20 rounded-full lg:-ml-20 lg:-mt-20 mx-auto lg:absolute" width={200} height={200} />
                            <h3 className="text-xl font-semibold text-center text-white">{review.user_name}</h3>
                            <p className="text-center text-gray-300">{review.country}</p>
                            <div className="flex justify-center my-2">
                                <Rating
                                    value={review.rating}
                                    readonly
                                    style={{ maxWidth: 150 }}
                                />
                            </div>
                            <p className="text-center text-sm text-gray-300">{review.comment}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;