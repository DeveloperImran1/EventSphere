// components/EventHighlight.js
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
const EventHighlight = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl md:text-4xl font-semibold  font-serif text-black ">Over 5K+ Events Growing with Eventify</h2>
      
      {/* Stars */}
      <div className="flex justify-center my-6">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-3xl md:text-4xl mx-2 animate-star" />
        ))}
      </div>

      {/* Organization Logos */}
      <div className="flex flex-wrap justify-center  space-x-14 mt-14">
    
        <img src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/622b38ff36c3d75e38621ee4_logo-4.png" alt="Organization 1" className="w-32 h-auto transition-transform duration-300 hover:scale-110 md:w-40" />
        <img src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/622b3b21e7a7ff71f5f2bc68_logo-8.png" alt="Organization 2" className="w-32 h-auto transition-transform duration-300 hover:scale-110 md:w-40" />
        <img src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/622b38f31faf9de4a52f0f5c_logo-5.png" alt="Organization 3" className="w-32 h-auto transition-transform duration-300 hover:scale-110 md:w-40" />
        <img src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/622b3b17cb44ea9bc76b5129_logo-6.png" alt="Organization 4" className="w-32 h-auto transition-transform duration-300 hover:scale-110 md:w-40" />
        <img src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/622b38e472c36c82643b6c4b_logo-1.png" alt="Organization 5" className="w-32 h-auto transition-transform duration-300 hover:scale-110 md:w-40" />
      </div>
    </div>
  );
};

export default EventHighlight;
