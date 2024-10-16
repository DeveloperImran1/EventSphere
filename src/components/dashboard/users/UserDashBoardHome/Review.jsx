"use client"
import useAuthWithEmail from '@/hooks/useAuthWithEmail';
import Image from 'next/image';
import Link from 'next/link';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { useState } from 'react'; // Import useState
import { useSession } from 'next-auth/react';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { usePathname } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const Review = () => {
    const { data , refetch} = useAuthWithEmail();
    const [updateReview, setUpdateReview] = useState([])
    // React rating
    const [ratingValue, setRatingValue] = useState(2); // State to store the selected rating value
    const session = useSession();
    const axiosPublic = useAxiosPublic();

    // last pathname or email collect
    const pathname = usePathname();
    const lastPathSegment = pathname?.split('/').filter(Boolean).pop();

    // Function to handle rating change
    const handleRatingChange = (event, newValue) => {
      setRatingValue(newValue); // Update state with the selected value
    };

    React.useEffect(()=> {
        setUpdateReview(data?.review)
    } ,[data])

    const handleReviewSubmit = async (e)=> {
        e.preventDefault();
        const message = e.target.message.value;
        const newObj = {
            rating: ratingValue,  message, name: session?.data?.user?.name, email: session?.data?.user?.email, photo: session?.data?.user?.image,
        }
       const newReview = [newObj, ...updateReview]
       setUpdateReview(newReview)
        console.log("Updated review is ", newReview) 
        
        const result = await axiosPublic.put(`/updateUserReviw/${lastPathSegment}`, newReview)
        console.log(result)
        if(result?.data?.modifiedCount){
            toast.success('Your Review is Added 👏');
            refetch()
        }
        else{
            toast.error('Something went wrong');
        }
        e.target.reset()
    }



    if (data?.review < 0) {
        return <Image height={676} width={1200} className='w-[500px] h-full' src="https://i.postimg.cc/qM01fm1q/search-not-found-3d-icon-download-in-png-blend-fbx-gltf-file-formats-no-results-result-data-empty-s.webp" alt='No Review Found'></Image>
    }
    
    return (
        <div>
            {/* send a review  */}
            <div className="flex flex-col max-w-xl border-[4px]  p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                <form onSubmit={handleReviewSubmit} className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">What you know about me?</span>
                        <Box sx={{ '& > legend': { mt: 2 } }}>
                            <StyledRating
                                name="customized-color"
                                value={ratingValue} // Bind the state value
                                onChange={handleRatingChange} // Event handler to capture selected value
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                            />
                            <Typography component="p">Selected Rating: {ratingValue}</Typography> {/* Display the selected rating */}
                        </Box>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea name="message" rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50 border-2" spellcheck="false"></textarea>
                        <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600 button">Submit</button>
                    </div>
                </form>
            </div>
            {/* another person review for this user */}
            {
                data?.review?.slice(0, 8)?.map((singleReview, index) => <div key={index} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <Link href={`/dashboard/user-profile/${singleReview?.email}`}>
                                <Image height={676} width={1200} src={singleReview?.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNC10NY3icC42tZyjauH4WyaIptC38mUfzQ&s"} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </Link>
                            <div>
                                <h4 className="font-bold">{singleReview?.name || "Anonymus"}</h4>
                                <span className="text-xs dark:text-gray-600">{singleReview?.email}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">{singleReview?.rating || 4.5}</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>{singleReview?.message || "I know realy you are a brilliant Softwer Engineer."} </p>
                        <p>{index === 0 ? "He is a highly skilled front-end developer who consistently delivers high-quality work " : ""}</p>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Review;