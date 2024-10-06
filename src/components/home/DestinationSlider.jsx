"use client"
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from '../shared/SectionTitle';

const DestinationSlider = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full py-10 bg-[#f8f7fa]">
      {/* Scroll container */}
      <div className="relative overflow-hidden max-w-screen-xl mx-auto">
        <SectionTitle description={sectionTitle.description} title={sectionTitle.title} subTitle={sectionTitle.subTitle}/>
        <div className="flex justify-end mb-6 -mt-12">
          <div className="flex gap-x-2">
            <button
              onClick={scrollLeft}
              className=" bg-white border-2 p-2 border-[#dddae3] hover:border-gray-500 duration-300 grid place-content-center rounded-full h-11 w-11 shadow-md"
            >
              <FaChevronLeft className='text-xl' />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white border-2 p-2 border-[#dddae3] hover:border-gray-500 duration-300 grid place-content-center rounded-full h-11 w-11 shadow-md"
            >
              <FaChevronRight className='text-xl' />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory "
        >
          {/* Cards */}
          {['Chicago', 'Washington', 'Atlanta', 'Dallas', "Dallas", "Dallas", "Dallas", "Dallas", "Dallas", "Dallas", "Dallas", "Dallas"].map((city, index) => (
            <div
              key={index}
              className="min-w-[336px] h-[236px] bg-gray-200 rounded-tl-[50px] rounded-tr-[50px] relative snap-start group"
              style={{
                backgroundImage: `url('https://i.postimg.cc/d0p1ZQ7N/ny-new-york.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 group-hover:z-10">
                <p className="text-white text-3xl font-semibold h-16 pl-5 bg-gradient-to-b from-[rgba(30,10,60,0)] to-[rgba(30,10,60,0.8)] group-hover:bg-gradient-to-b group-hover:from-[#ffffff14] group-hover:to-[#ffffff14]">{city}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 w-full h-2 bg-[#f05537] group-hover:h-11 duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationSlider;

const sectionTitle = {
  // description: "Discover our top organizers, renowned for their expertise and successful events. Their dedication ensures exceptional experiences, making them leaders in the industry. Trust them to bring your vision to life",
  subTitle: "COUNTRY",
  title: "top Destination",

}
