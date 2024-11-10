"use client"
import { useState } from "react";
import "./bookCard.css"
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const BooksCard = ({ product }) => {
    const [userRating, setUserRating] = useState(3);

    const { category, color, description, image, offer, price, title, totalAvailable, _id } = product;
    console.log("single product", product)
    return (
        <>
            <Link href={`/product/${_id}`}>
                <div className="rounded-md border-2 p-4 w-full space-y-3  relative bg-white">
                    <div>

                    </div>
                    <div className="clit-element absolute top-[-12px] left-0 z-50">
                        <p className="-rotate-[50deg] text-white top-3 left-1 font-semibold absolute">New</p>
                    </div>

                    <div className="hover:scale-110  my-transition cursor-pointer flex flex-col justify-center items-center ">
                        <Image height={676} width={1200} src={`${image || 'https://i.ibb.co/x6jR8ny/Link-prod16-png.png'}`} alt="product" className="w-[180px] h-[150px] my-4 rounded-md" />

                    </div>


                    <div className="flex items-center gap-2 ">
                        <span className="rounded-full bg-[#ff4d6d] px-3 py-1 text-xs text-white">{offer}% Off</span>
                        <span className="rounded-full hidden md:block bg-[#ff4d6d] px-3 py-1 text-xs text-white">Best Seller</span>

                    </div>
                    <h1 className="text-[15px] font-semibold">{title}</h1>

                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} onClick={() => setUserRating(star)} className='w-4 cursor-pointer' viewBox="0 0 24 24" fill="#94a3b8" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                    fill={star <= userRating ? "#f2b00a" : "#94a3b8"} />
                            </svg>
                        ))}
                        <span>{`(08)`}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <h1 className="text-[17px] font-semibold">${price}</h1>
                            <del className="text-[17px] hidden md:block font-semibold text-gray-600">${price - 10}</del>
                        </div>
                        <div className=" hover:scale-150 my-transition cursor-pointer ">
                            <FaCartShopping size={22} className="text-[#ff4d6d]"></FaCartShopping>

                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BooksCard;