"use client"
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from '../shared/SectionTitle';
import SectionTitleSimple from '../shared/SectionTitleSimple';

const DestinationSlider = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
  };
  ['Chicago', '', '', '', "Dallas", "Dallas", "Dallas", "Dallas", "Dallas", "Dallas", "Dallas", "Dallas"]
  const countrysData = [
    {
      country: "America",
      photo: "https://career-advice.jobs.ac.uk/wp-content/uploads/United-States-of-America-e1634206443401-1170x630.jpg.optimal.jpg"
    },
    {
      country: "Canada",
      photo: "https://dpdajlq3ew794.cloudfront.net/20231003090625/toronto.jpg?format=auto&width=1920"
    },
    {
      country: "India",
      photo: "https://worldbank.scene7.com/is/image/worldbankprod/IDU-Highlights?wid=780&hei=439&qlt=85,0&resMode=sharp"
    },
    {
      country: "Bangladesh",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ823f-MrrHoyHpP9Q9_HOsyahLSGDsI_jSsw&s"
    },
    {
      country: "pakistan",
      photo: "https://trangoadventure.com/wp-content/uploads/2019/06/Day-1-2-1140x530.jpg"
    },
    {
      country: "Saudi Arabia",
      photo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Riyadh_Skyline.jpg"
    },
    {
      country: "Dubai",
      photo: "https://cdn.britannica.com/43/134743-050-D0625A44/train-first-Dubai-emirate-rapid-transit-line-kind-Sept-10-2009.jpg"
    },

  ]
  return (
    <div className="container mx-auto relative w-full py-10 px-4 ">
      {/* Scroll container */}
      <div className="relative overflow-hidden max-w-screen-xl mx-auto">
        <SectionTitleSimple title={sectionTitle.title} subtitle="Explore the world's top destinations, where breathtaking landscapes, vibrant cultures, and unique experiences await. Discover the perfect travel spots that offer unforgettable adventures and memories to cherish forever" />
        <div className="flex justify-end mb-6 -mt-12">
          <div className="flex gap-x-2">
            <button
              onClick={scrollLeft}
              className="bg-white border-2 hidden md:grid p-2 border-cyan-400 duration-300 hover:text-black place-content-center rounded-full h-11 w-11 shadow-md hover:bg-cyan-100 hover:scale-105 transition-all"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white border-2 p-2 hidden md:grid border-cyan-400 duration-300 hover:text-black place-content-center rounded-full h-11 w-11 shadow-md hover:bg-cyan-100 hover:scale-105 transition-all"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory"
        >
          {/* Cards */}
          {countrysData?.map((city, index) => (
            <div
              key={index}
              className="min-w-[80%] sm:min-w-[50%] md:min-w-[30%] lg:min-w-[23%] 2xl:min-w-[20%] h-[270px] md:h-[350px] bg-gray-200 rounded-tl-[50px] rounded-tr-[50px] relative snap-start group overflow-hidden"
              style={{
                backgroundImage: `url('${city?.photo}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              {/* Country name with animation */}
              <div className="absolute inset-x-0 -bottom-4 flex items-center justify-center h-0 group-hover:h-full group-hover:bottom-0 transition-all duration-500 ease-in-out z-10">
                <p className="text-white text-2xl md:text-3xl font-semibold font-serif">
                  {city?.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  );
};

export default DestinationSlider;

const sectionTitle = {
  title: "Top Destination",
  description: "Explore the world's most sought-after destinations for unforgettable events and experiences."
};