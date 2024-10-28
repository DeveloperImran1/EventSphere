"use client"
import { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import { TbCoinTakaFilled } from "react-icons/tb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { MdOutlineDelete } from 'react-icons/md';



const FavoriteListComponent = () => {
  const [favoritesEvents, setFavoritesEvents] = useState([]);
  const [allEventsData, setAllEventsData] = useState([]);

  // Fetch events data from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://event-sphare-server.vercel.app/events');
        const data = await response.json();
        setAllEventsData(data?.events); // Set the data to the state
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array ensures this runs only once

  // Filter favorite events based on localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem('favorites');
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      const filteredEvents = allEventsData?.filter(event => favorites?.includes(event._id));
      setFavoritesEvents(filteredEvents); // Set the filtered events to the state
    }
  }, [allEventsData]); //  This runs every time allEventsData changes

  console.log(allEventsData)
  console.log(favoritesEvents)
  // handleRemoveFavoriteItem function to remove an item from the favorites
  const handleRemoveFavoriteItem = (id) => {
    if (typeof window !== 'undefined') {
      // Get the current favorites from localStorage
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      // Remove the selected id from the favorites array
      const updatedFavorites = favorites.filter(favId => favId !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      const updatedFavoritesEvents = favoritesEvents.filter(event => event._id !== id);
      setFavoritesEvents(updatedFavoritesEvents);
      toast.error('Removed Bookmark!')
    }
  }
  return (
    <section className="container px-4 mx-auto min-h-screen">
      <div className="my-5 md:mx-0 mx-2 flex">
        <div className="relative">
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm outline-none sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
          <BsSearch className='text-slate-400 absolute top-3 left-3' />
        </div>
        <div className="ml-2">
          <Select className="">
            <SelectTrigger className="w-[180px] justify-around">
              <LuFilter className='text-xl' />
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          favoritesEvents?.length === 0
            ? <div className="text-center text-2xl font-semibold mt-5 text-gray-600 col-span-5">You have not favorited any events</div>
            : favoritesEvents?.map((item) => {
              return (
                <div key={item.id} className="relative shadow-2xl rounded-2xl flex flex-col flex-wrap justify-between mx-14 sm:mx-0">
                  <div className="">
                    <div className="py-5 px-3">
                      <Image src="https://lh3.googleusercontent.com/p/AF1QipNq7-o6PLTgvfYKQROFIBAIMbwNziSW73qynPUn=s680-w680-h510" height={300} width={300} alt='Img' className='object-cover mx-auto rounded-md' />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="font-bold text-2xl text-gray-900">{(item.title).slice(0, 16)}...</h2>
                      <p className='max-w-[90%]  mt-1'>{(item.description).slice(0, 70)}...</p>
                    </div>
                  </div>
                  <div className=" py-5 flex justify-around">
                    <div className='flex text-2xl items-center'>
                      <h2 className='text-xl font-bold'>$ {item.price}</h2>
                    </div>
                    <button className="text-xl text-white font-bold bg-[#1b85db] px-6 py-1 rounded-full">
                      <Link href={`/events/${item?._id}`}>Book</Link>
                    </button>
                  </div>
                  <span className='p-1 bg-[#1b85db] absolute top-7 rounded-full right-5 text-2xl text-white hover:text-red-700 hover:bg-white cursor-pointer hover:scale-110  duration-300'>
                    <MdOutlineDelete onClick={() => handleRemoveFavoriteItem(item._id)} title='Remove' className=' text-white hover:text-red-700 ' />
                  </span>
                </div>
              );
            })
        }
      </div>
    </section>
  );
};

export default FavoriteListComponent;
